import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShopifyCart } from '@/lib/ShopifyCartContext';
import { PRODUCT_COPY } from '@/lib/productCopy';

// Static product data from master copy - only images/checkout from Shopify
const PRODUCTS = [
  {
    id: 'bosie-bag',
    handle: 'bosie-bag',
    name: 'The Bosie Bag™',
    subtitle: '12" x 13.5" Extra Large Waste Bags',
    price: 14.99,
    compareAtPrice: null,
    badge: 'Best Seller',
    available: true,
    variantId: 'placeholder',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-hero_4baf8cfb.png',
  },
  {
    id: 'clip-and-go',
    handle: 'clip-and-go',
    name: 'The Clip & Go™',
    subtitle: 'Leash Clip Dispenser + Starter Roll',
    price: 12.99,
    compareAtPrice: null,
    badge: null,
    available: true,
    variantId: 'placeholder',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-dispenser_fae228f9.png',
  },
  {
    id: 'bosie-bag-8pack',
    handle: 'bosie-bag-8pack',
    name: 'Bosie Bag™ 8-Pack',
    subtitle: '960 Bags Total (8 Rolls x 120)',
    price: 39.99,
    compareAtPrice: 47.92,
    badge: 'Bulk Value',
    available: true,
    variantId: 'placeholder',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-multi_1698b1d7.png',
  },
  {
    id: 'starter-bundle',
    handle: 'starter-bundle',
    name: 'Big Dog Life® Starter Bundle',
    subtitle: '1,080 Bags + Dispenser + Tennis Balls',
    price: 54.99,
    compareAtPrice: 67.96,
    badge: 'Best Value',
    available: true,
    variantId: 'placeholder',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-bundle_2890c1e5.png',
  },
  {
    id: 'tennis-balls',
    handle: 'tennis-balls',
    name: 'The Big Ones™',
    subtitle: 'Standard Tennis Balls - 3-Pack',
    price: 9.99,
    compareAtPrice: null,
    badge: null,
    available: true,
    variantId: 'placeholder',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/tennis-balls_3pack_a1b2c3d4.png',
  },
];

const FEATURES = [
  '13.5" × 12" — perfect for big poops and big hands',
  'Triple-thick leak-proof material',
  'Built for Large and Giant Breed Dogs',
  'USDA Certified Biobased Product',
];

export default function ProductShowcase() {
  const { addItem } = useShopifyCart();
  const [products] = useState(PRODUCTS);
  const [addingId, setAddingId] = useState(null);

  const handleAdd = async (product) => {
    if (!product.variantId || !product.available) return;
    setAddingId(product.id);
    await addItem(product.variantId, product);
    setAddingId(null);
  };

  return (
    <section className="py-16 sm:py-24 bg-midnight" id="shop">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-4"
        >
          <p className="font-brand text-primary text-sm uppercase tracking-widest mb-2">The Star of the Show</p>
          <h2 className="font-display text-6xl sm:text-8xl text-white">THE BOSIE BAG<span className="text-primary">™</span></h2>
          <p className="font-body text-stone text-lg mt-2">Engineered for the 100lb+ club. Big bags for big jobs.</p>
        </motion.div>

        {/* Features strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12"
        >
          {FEATURES.map((f) => (
            <div key={f} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="font-body text-white/70 text-sm">{f}</span>
            </div>
          ))}
        </motion.div>

        {/* Product grid — all 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border-4 border-midnight rounded-2xl overflow-hidden flex flex-col group shadow-cartoon-sm"
            >
              {/* Square image */}
              <Link to={`/product/${product.handle}`} className="block relative aspect-square bg-white overflow-hidden">
                {product.badge && product.badge !== 'Best Seller' && (
                  <span className="absolute top-3 left-3 z-10 font-brand text-xs px-3 py-1 rounded-full bg-midnight text-white">
                    {product.badge}
                  </span>
                )}
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">🧻</div>
                )}
              </Link>

              {/* Info */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-brand text-midnight text-base leading-tight mb-1">{product.name}</h3>
                <p className="font-body text-pebble text-xs mb-2">{product.subtitle}</p>
                {product.badge && (
                  <span className="font-brand text-xs text-primary mb-2 block">{product.badge}</span>
                )}

                {/* Price */}
                <div className="mb-4">
                  {product.price ? (
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-2xl text-primary">${Number(product.price).toFixed(2)}</span>
                      {product.compareAtPrice && product.compareAtPrice > product.price && (
                        <span className="font-body text-stone line-through text-xs">${Number(product.compareAtPrice).toFixed(2)}</span>
                      )}
                    </div>
                  ) : (
                    <span className="font-brand text-stone text-xs">TBA</span>
                  )}
                </div>

                {/* Two buttons */}
                <div className="flex gap-2 mt-auto">
                  <Link
                    to={`/product/${product.handle}`}
                    className="flex-1 text-center font-brand text-xs px-3 py-2 rounded-full border-2 border-midnight text-midnight hover:bg-midnight hover:text-white transition-colors"
                  >
                    More Info
                  </Link>
                  {product.available ? (
                    <button
                      onClick={() => handleAdd(product)}
                      disabled={addingId === product.id}
                      className="flex-1 flex items-center justify-center gap-1 bg-primary text-white font-brand text-xs px-3 py-2 rounded-full hover:bg-orange-hot transition-colors border-2 border-primary"
                    >
                      {addingId === product.id ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Add to Cart'}
                    </button>
                  ) : (
                    <Link
                      to={`/product/${product.handle}`}
                      className="flex-1 text-center font-brand text-xs px-3 py-2 rounded-full bg-midnight text-white hover:bg-bark transition-colors border-2 border-midnight"
                    >
                      Notify Me
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}