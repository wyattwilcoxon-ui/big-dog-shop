const DOMAIN = Deno.env.get('VITE_SHOPIFY_STORE_DOMAIN') || 'big-dog-life-2.myshopify.com';
const TOKEN = Deno.env.get('VITE_SHOPIFY_STOREFRONT_TOKEN') || 'dfe64f47f36d168a62d9be77dd5124e0';
const API_URL = `https://${DOMAIN}/api/2024-01/graphql.json`;
const SITE_URL = 'https://www.thebigdoglife.com';

async function getProduct(handle) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': TOKEN,
    },
    body: JSON.stringify({
      query: `query getProduct($handle: String!) {
        product(handle: $handle) {
          title description handle
          images(first: 1) { edges { node { url } } }
          priceRange { minVariantPrice { amount } }
        }
      }`,
      variables: { handle },
    }),
  });
  const json = await res.json();
  return json.data?.product || null;
}

Deno.serve(async (req) => {
  try {
    // Support both query param and JSON body
    const url = new URL(req.url);
    let handle = url.searchParams.get('handle');

    if (!handle && req.method === 'POST') {
      const body = await req.json().catch(() => ({}));
      handle = body.handle;
    }

    if (!handle) {
      return new Response('Missing handle', { status: 400 });
    }

    const product = await getProduct(handle);

    if (!product) {
      return new Response('Product not found', { status: 404 });
    }

    const title = `${product.title} | Big Dog Life™`;
    const description = product.description?.slice(0, 160).replace(/"/g, "'") || 'Extra-large, leak-proof products built for large and giant breed dogs.';
    const image = product.images.edges[0]?.node.url || '';
    const price = parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2);
    const productUrl = `${SITE_URL}/product/${handle}`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta property="og:type" content="product" />
  <meta property="og:site_name" content="Big Dog Life" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="1200" />
  <meta property="og:url" content="${productUrl}" />
  <meta property="product:price:amount" content="${price}" />
  <meta property="product:price:currency" content="USD" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@bigdoglife_og" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${image}" />
  <meta http-equiv="refresh" content="0; url=${productUrl}" />
</head>
<body>
  <p>Redirecting to <a href="${productUrl}">${title}</a>...</p>
</body>
</html>`;

    return new Response(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
});