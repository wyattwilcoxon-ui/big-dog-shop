Deno.serve(async (req) => {
  try {
    const { query, variables } = await req.json();
    if (!query) {
      return Response.json({ error: 'Missing query' }, { status: 400 });
    }

    const DOMAIN = Deno.env.get('VITE_SHOPIFY_STORE_DOMAIN') || 'big-dog-life-2.myshopify.com';
    const TOKEN = Deno.env.get('VITE_SHOPIFY_STOREFRONT_TOKEN')?.trim();
    if (!TOKEN) {
      return Response.json({ error: 'Shopify token not configured' }, { status: 500 });
    }

    const res = await fetch(`https://${DOMAIN}/api/2024-01/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    });
    const json = await res.json();
    if (json.errors) {
      console.error('Shopify GraphQL error:', JSON.stringify(json.errors));
      return Response.json({ error: json.errors[0]?.message || 'Shopify API error' }, { status: 502 });
    }
    return Response.json(json.data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});