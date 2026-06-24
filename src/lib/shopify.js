const DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || 'big-dog-life-2.myshopify.com';
const TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;
const API_URL = `https://${DOMAIN}/api/2024-01/graphql.json`;

async function shopifyFetch(query, variables = {}) {
  if (!TOKEN) throw new Error('Shopify storefront token not configured');
  const res = await fetch(API_URL, {
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
    throw new Error(json.errors[0].message);
  }
  return json.data;
}

// --- Products ---
export async function getProducts() {
  const data = await shopifyFetch(`{
    products(first: 20) {
      edges {
        node {
          id
          title
          description
          handle
          priceRange {
            minVariantPrice { amount currencyCode }
          }
          compareAtPriceRange {
            minVariantPrice { amount currencyCode }
          }
          images(first: 1) {
            edges { node { url altText } }
          }
          variants(first: 1) {
            edges { node { id availableForSale } }
          }
        }
      }
    }
  }`);
  return data.products.edges.map(({ node }) => ({
    id: node.id,
    handle: FRIENDLY_HANDLE_MAP[node.handle] || node.handle,
    shopifyHandle: node.handle,
    name: node.title,
    description: node.description,
    price: parseFloat(node.priceRange.minVariantPrice.amount),
    compareAtPrice: parseFloat(node.compareAtPriceRange?.minVariantPrice?.amount) || null,
    image: node.images.edges[0]?.node.url || null,
    variantId: node.variants.edges[0]?.node.id || null,
    available: node.variants.edges[0]?.node.availableForSale || false,
  }));
}

// --- Cart ---
export async function createCart() {
  const data = await shopifyFetch(`
    mutation { cartCreate { cart { id checkoutUrl } } }
  `);
  return data.cartCreate.cart;
}

export async function addToCart(cartId, variantId, quantity = 1) {
  const data = await shopifyFetch(`
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          lines(first: 20) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    product { title images(first:1) { edges { node { url } } } }
                    priceV2 { amount }
                  }
                }
              }
            }
          }
          cost { totalAmount { amount } }
        }
      }
    }
  `, { cartId, lines: [{ merchandiseId: variantId, quantity }] });
  return data.cartLinesAdd.cart;
}

export async function updateCartLine(cartId, lineId, quantity) {
  const data = await shopifyFetch(`
    mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          lines(first: 20) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    product { title images(first:1) { edges { node { url } } } }
                    priceV2 { amount }
                  }
                }
              }
            }
          }
          cost { totalAmount { amount } }
        }
      }
    }
  `, { cartId, lines: [{ id: lineId, quantity }] });
  return data.cartLinesUpdate.cart;
}

// Maps Shopify handles to clean, SEO-friendly URL handles (one per product)
export const FRIENDLY_HANDLE_MAP = {
  'the-bosie-bag™': 'bosie-bag',
  'clip-go-pouch': 'clip-and-go',
  'chompers-3-pack': 'tennis-balls',
  'starter-bundle': 'starter-bundle',
};

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

// --- Single Product ---
export async function getProductByHandle(handle) {
  const shopifyHandle = SHOPIFY_HANDLE_MAP[handle] || handle;
  const data = await shopifyFetch(`
    query getProduct($handle: String!) {
      product(handle: $handle) {
        id title description handle
        images(first: 10) { edges { node { url altText } } }
        variants(first: 30) {
          edges {
            node {
              id title availableForSale
              priceV2 { amount currencyCode }
              compareAtPriceV2 { amount currencyCode }
              selectedOptions { name value }
            }
          }
        }
      }
    }
  `, { handle: shopifyHandle });
  const p = data.product;
  if (!p) return null;
  return {
    id: p.id,
    handle: p.handle,
    name: p.title,
    description: p.description,
    images: p.images.edges.map(e => e.node.url),
    variants: p.variants.edges.map(({ node }) => ({
      id: node.id,
      title: node.title,
      price: parseFloat(node.priceV2.amount),
      compareAtPrice: node.compareAtPriceV2 ? parseFloat(node.compareAtPriceV2.amount) : null,
      available: node.availableForSale,
      options: node.selectedOptions,
    })),
  };
}

export function parseCartLines(cart) {
  if (!cart?.lines?.edges) return [];
  return cart.lines.edges.map(({ node }) => ({
    lineId: node.id,
    variantId: node.merchandise.id,
    id: node.merchandise.id,
    name: node.merchandise.product.title,
    price: parseFloat(node.merchandise.priceV2.amount),
    image: node.merchandise.product.images.edges[0]?.node.url || null,
    quantity: node.quantity,
  }));
}