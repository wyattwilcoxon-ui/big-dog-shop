const DOMAIN = Deno.env.get("VITE_SHOPIFY_STORE_DOMAIN") || 'big-dog-life-2.myshopify.com';
const TOKEN = Deno.env.get("VITE_SHOPIFY_STOREFRONT_TOKEN") || 'dfe64f47f36d168a62d9be77dd5124e0';
const API_URL = `https://${DOMAIN}/api/2024-01/graphql.json`;
const SITE_URL = 'https://www.thebigdoglife.com';

// Inlined product copy (mirrors lib/productCopy.js — keep in sync)
const PRODUCT_COPY = {
  'bosie-bag': {
    seoTitle: 'Bosie Bag™ Extra Large Dog Poop Bags | Big Dog Life™',
    metaDescription: 'Bosie Bag™ are 12" × 14" extra-large, leak-proof dog poop bags built for large and giant breed dogs. Heavy duty and thick. Finally, a bag that handles the big stuff.',
  },
  'clip-and-go': {
    seoTitle: 'Big Dog Life™ Clip & Go Dog Poop Bag Dispenser | Leash Clip Holder',
    metaDescription: 'Big Dog Life™ leash clip dog poop bag dispenser - includes 1 starter roll of Bosie Bag™. Durable fabric pouch, carabiner clip, easy zip access. Built for big-dog walks.',
  },
  'bosie-bag-8pack': {
    seoTitle: 'Bosie Bag™ 8-Pack Refill Rolls - 120 Extra Large Dog Waste Bags | Big Dog Life™',
    metaDescription: 'Bosie Bag™ 8-roll refill pack - 120 bags total. 12" × 14" extra-large, heavy duty, leak-proof dog waste bags for large and giant breed dogs.',
  },
  'starter-bundle': {
    seoTitle: 'Big Dog Life™ Starter Bundle',
    metaDescription: 'The complete large-dog walk kit. Everything your big dog needs, in one bundle.',
  },
  'tennis-balls': {
    seoTitle: 'Big Dog Life™ The Big Ones Tennis Balls - 3-Pack | Official Brand Fetch Balls',
    metaDescription: 'The Big Ones by Big Dog Life™ - official brand tennis balls, 3-pack. Standard 2.5" fetch balls, high-visibility yellow. Part of the Big Dog Life collection.',
  },
};

const ALIAS_MAP = {
  'the-bosie-bag': 'bosie-bag',
  'bosie-bag-refill': 'bosie-bag-8pack',
  'the-clip-and-go': 'clip-and-go',
  'clip-go-pouch': 'clip-and-go',
  'big-dog-life-starter-bundle': 'starter-bundle',
  'the-big-ones': 'tennis-balls',
  'the-big-ones-3-pack': 'tennis-balls',
  'chompers-3-pack': 'tennis-balls',
};

function getCopy(handle) {
  const normalized = handle.toLowerCase().replace(/_/g, '-').replace(/[^a-z0-9-]/g, '');
  const key = ALIAS_MAP[normalized] || normalized;
  return PRODUCT_COPY[key] || null;
}

// Maps friendly/alias handles to actual Shopify product handles
const SHOPIFY_HANDLE_MAP = {
  'bosie-bag': 'the-bosie-bag™',
  'bosie-bag-8pack': 'the-bosie-bag™',
  'the-bosie-bag': 'the-bosie-bag™',
  'clip-and-go': 'clip-go-pouch',
  'clip-go-pouch': 'clip-go-pouch',
  'tennis-balls': 'chompers-3-pack',
  'the-big-ones': 'chompers-3-pack',
  'the-big-ones-3-pack': 'chompers-3-pack',
  'chompers-3-pack': 'chompers-3-pack',
  'starter-bundle': 'starter-bundle',
};

async function getProduct(handle) {
  try {
    const shopifyHandle = SHOPIFY_HANDLE_MAP[handle] || handle;
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
        variables: { handle: shopifyHandle },
      }),
    });
    const json = await res.json();
    return json.data?.product || null;
  } catch (e) {
    console.error('getProduct error:', e.message);
    return null;
  }
}

Deno.serve(async (req) => {
  try {
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
    const copy = getCopy(handle);

    // Use our curated copy first, fall back to Shopify data
    const productTitle = product?.title || handle.replace(/-/g, ' ');
    const title = copy?.seoTitle || `${productTitle} | Big Dog Life™`;
    const description = copy?.metaDescription || product?.description?.slice(0, 160).replace(/"/g, "'") || 'Extra-large, leak-proof products built for large and giant breed dogs.';
    const image = product?.images?.edges[0]?.node.url || '';
    const price = product ? parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2) : null;
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
  ${price ? `<meta property="product:price:amount" content="${price}" />` : ''}
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