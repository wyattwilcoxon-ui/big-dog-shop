import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

const WIX_STORES_APP_ID = '1380b703-ce81-ff05-f7ec-0ccbecbc0d29';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { accessToken } = await base44.asServiceRole.connectors.getConnection("wix");

    const body = await req.json().catch(() => ({}));
    const { action } = body;

    // --- Query Products (for shop listing & home page) ---
    if (action === 'getProducts') {
      const response = await fetch("https://www.wixapis.com/stores/v3/products/query", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: { cursorPaging: { limit: 100 } },
          fields: ["URL", "PLAIN_DESCRIPTION", "THUMBNAIL", "MEDIA_ITEMS_INFO", "CURRENCY"],
        }),
      });
      if (!response.ok) throw new Error(await response.text());
      const data = await response.json();
      return Response.json(data);
    }

    // --- Get Product By Slug (for product detail page) ---
    if (action === 'getProductBySlug') {
      const { slug } = body;
      if (!slug) return Response.json({ error: 'Missing slug' }, { status: 400 });

      const fields = ["URL", "PLAIN_DESCRIPTION", "MEDIA_ITEMS_INFO", "VARIANT_OPTION_CHOICE_NAMES", "DESCRIPTION", "CURRENCY"];
      const response = await fetch(`https://www.wixapis.com/stores/v3/products/slug/${encodeURIComponent(slug)}?fields=${fields.join(',')}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!response.ok) throw new Error(await response.text());
      const data = await response.json();
      return Response.json(data);
    }

    // --- Create Checkout + Get Checkout URL ---
    if (action === 'createCheckout') {
      const { lineItems } = body;
      if (!lineItems || !lineItems.length) {
        return Response.json({ error: 'Missing lineItems' }, { status: 400 });
      }

      const createResponse = await fetch("https://www.wixapis.com/ecom/v1/checkouts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          channelType: "WEB",
          lineItems: lineItems.map(item => ({
            catalogReference: {
              appId: WIX_STORES_APP_ID,
              catalogItemId: item.productId,
              options: item.variantId ? { variantId: item.variantId } : undefined,
            },
            quantity: item.quantity || 1,
          })),
        }),
      });
      if (!createResponse.ok) throw new Error(await createResponse.text());
      const checkoutData = await createResponse.json();
      const checkoutId = checkoutData.checkout?.id;
      if (!checkoutId) throw new Error('No checkout ID returned');

      // Get the hosted checkout URL
      const urlResponse = await fetch(`https://www.wixapis.com/ecom/v1/checkouts/${checkoutId}/checkout-url`, {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!urlResponse.ok) throw new Error(await urlResponse.text());
      const urlData = await urlResponse.json();

      return Response.json({ checkoutUrl: urlData.checkoutUrl, checkoutId });
    }

    return Response.json({ error: 'Unknown action' }, { status: 400 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});