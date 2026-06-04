import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProducts } from '@/lib/shopify';
import { useShopifyCart } from '@/lib/ShopifyCartContext';

const FALLBACK = [
  {
    id: 'starter-scoop',
    handle: 'starter-scoop',
    name: 'The Starter Scoop',
    description: '1 Roll · 15 Bags',
    price: null,
    badge: null,
    available: false,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-hero_4baf8cfb.png',
  },
  {
    id: 'bosie-8pack',
    handle: 'bosie-8pack',
    name: 'The Bosie Bag™ 8-Pack',
    description: '8 Rolls · 120 Bags',
    price: 11.99,
    compareAtPrice: 15.99,
    badge: 'Best Seller',
    available: false,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-multi_1698b1d7.png',
  },
  {
    id: 'clip-and-go',
    handle: 'clip-and-go',
    name: 'The Clip & Go',
    description: 'Bone Dispenser + 1 Roll',
    price: null,
    badge: 'Coming Soon',
    available: false,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-dispenser_fae228f9.png',
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
  const [products, setProducts] = useState(FALLBACK);
  const [addingId, setAddingId] = useState(null);

  useEffect(() => {
    getProducts()
      .then(data => { if (data.length > 0) setProducts(data); })
      .catch(err => console.error('Shopify fetch failed:', err));
  }, []);

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
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col group"
            >
              {/* Square image */}
              <Link to={`/product/${product.handle}`} className="block relative aspect-square bg-white overflow-hidden">
                {product.badge && (
                  <span className={`absolute top-3 left-3 z-10 font-brand text-xs px-3 py-1 rounded-full ${
                    product.badge === 'Best Seller' ? 'bg-primary text-white' : 'bg-midnight text-white'
                  }`}>
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
                <h3 className="font-brand text-white text-base leading-tight mb-1">{product.name}</h3>
                <p className="font-body text-stone text-xs mb-4 flex-1">{product.description}</p>

                <div className="flex items-center justify-between gap-2 mt-auto">
                  {/* Price */}
                  <div>
                    {product.price ? (
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-display text-2xl text-white">${Number(product.price).toFixed(2)}</span>
                        {product.compareAtPrice && product.compareAtPrice > product.price && (
                          <span className="font-body text-stone line-through text-xs">${Number(product.compareAtPrice).toFixed(2)}</span>
                        )}
                      </div>
                    ) : (
                      <span className="font-brand text-stone text-xs">TBA</span>
                    )}
                  </div>

                  {/* CTA */}
                  {product.available ? (
                    <button
                      onClick={() => handleAdd(product)}
                      disabled={addingId === product.id}
                      className="flex items-center gap-1 bg-primary text-white font-brand text-xs px-3 py-2 rounded-full hover:bg-orange-hot transition-colors"
                    >
                      {addingId === product.id ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Add to Cart'}
                    </button>
                  ) : (
                    <Link
                      to={`/product/${product.handle}`}
                      className="flex items-center gap-1 bg-white/10 text-white font-brand text-xs px-3 py-2 rounded-full hover:bg-white/20 transition-colors"
                    >
                      View <ArrowRight className="w-3 h-3" />
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