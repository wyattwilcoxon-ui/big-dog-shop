import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShopifyCart } from '@/lib/ShopifyCartContext';
import { getProducts } from '@/lib/shopify';
import { PRODUCT_COPY } from '@/lib/productCopy';

// Static product definitions - names, subtitles, badges from master copy
const PRODUCT_DEFINITIONS = {
  'bosie-bag': {
    name: 'The Bosie Bag™',
    subtitle: '12" x 14" Extra Large Waste Bags',
    badge: null,
  },
  'clip-and-go': {
    name: 'The Clip & Go™',
    subtitle: 'Leash Clip Dispenser + Starter Roll',
    badge: null,
  },
  'bosie-bag-8pack': {
    name: 'Bosie Bag™ 8-Pack',
    subtitle: '120 Bags Total (8 Rolls x 15)',
    badge: null,
  },
  'starter-bundle': {
    name: 'Big Dog Life™ Starter Bundle',
    subtitle: '138 Bags + Dispenser + Tennis Balls',
    badge: null,
  },
  'tennis-balls': {
    name: 'The Big Ones™',
    subtitle: 'Standard Tennis Balls - 3-Pack',
    badge: null,
  },
};

const FEATURES = [
  '14" × 12" — perfect for big poops and big hands',
  'Extra-thick leak-proof* material',
  'Built for Large and Giant Breed Dogs',
  '38% plant based',
];

export default function ProductShowcase() {
  const { addItem } = useShopifyCart();
  const [products, setProducts] = useState([]);
  const [addingId, setAddingId] = useState(null);

  useEffect(() => {
    getProducts().then(shopifyProducts => {
      // Merge Shopify data with static copy, put starter-bundle FIRST
      const merged = shopifyProducts.map(p => {
        const def = PRODUCT_DEFINITIONS[p.handle] || {};
        return {
          id: p.handle,
          handle: p.handle,
          name: def.name || p.name,
          subtitle: def.subtitle || '',
          badge: def.badge,
          price: p.price,
          compareAtPrice: p.compareAtPrice,
          available: p.available,
          variantId: p.variantId,
          image: p.image,
        };
      });
      // Sort: starter-bundle first, then others
      const sorted = merged.sort((a, b) => {
        if (a.handle === 'starter-bundle') return -1;
        if (b.handle === 'starter-bundle') return 1;
        return 0;
      });
      setProducts(sorted);
    }).catch(err => console.error('Shopify fetch failed:', err));
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
          <h2 className="font-display text-6xl sm:text-8xl text-white">PRODUCTS</h2>
          <p className="font-body text-stone text-lg mt-2">Everything you need for the big dog life — in one pack.</p>
        </motion.div>

        {/* Features strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4"
        >
          {FEATURES.map((f) => (
            <div key={f} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="font-body text-white/70 text-sm">{f}</span>
            </div>
          ))}
        </motion.div>

        {/* Asterisk disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-body text-stone/60 text-xs mb-12"
        >
          *Leak-proof designed to hold poop and hold up — not waterproof.
        </motion.p>

        {/* Starter Bundle - Full Width Hero */}
        {products.filter(p => p.handle === 'starter-bundle').map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-midnight rounded-2xl overflow-hidden flex flex-col group shadow-cartoon-sm mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <Link to={`/product/${product.handle}`} className="block relative aspect-square bg-white overflow-hidden">

                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">🧻</div>
                )}
              </Link>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="font-brand text-midnight text-2xl sm:text-3xl leading-tight mb-1">{product.name}</h3>
                <p className="font-body text-pebble text-base sm:text-lg mb-2">{product.subtitle}</p>
                <div className="mb-4">
                  {product.price ? (
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-primary text-4xl sm:text-5xl">${Number(product.price).toFixed(2)}</span>
                      {product.compareAtPrice && product.compareAtPrice > product.price && (
                        <span className="font-body text-stone text-xl line-through">${Number(product.compareAtPrice).toFixed(2)}</span>
                      )}
                    </div>
                  ) : (
                    <span className="font-brand text-stone text-xs">TBA</span>
                  )}
                </div>
                <div className="flex flex-wrap sm:flex-nowrap gap-3">
                  <Link to={`/product/${product.handle}`} className="flex-1 text-center font-brand px-6 py-4 text-lg rounded-full border-2 border-midnight text-midnight hover:bg-midnight hover:text-white transition-colors">
                    More Info
                  </Link>
                  {product.available ? (
                    <button
                      onClick={() => handleAdd(product)}
                      disabled={addingId === product.id}
                      className="flex-1 flex items-center justify-center gap-1 bg-primary text-white font-brand px-6 py-4 text-lg rounded-full hover:bg-orange-hot transition-colors border-2 border-primary"
                    >
                      {addingId === product.id ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Add to Cart'}
                    </button>
                  ) : (
                    <Link to={`/product/${product.handle}`} className="flex-1 text-center font-brand px-6 py-4 text-lg rounded-full bg-midnight text-white hover:bg-bark transition-colors border-2 border-midnight">
                      Notify Me
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Products - Grid Below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.filter(p => p.handle !== 'starter-bundle').map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border-4 border-midnight rounded-2xl overflow-hidden flex flex-col group shadow-cartoon-sm"
            >
              <Link to={`/product/${product.handle}`} className="block relative aspect-square bg-white overflow-hidden">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">🧻</div>
                )}
              </Link>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-brand text-midnight text-base leading-tight mb-1">{product.name}</h3>
                <p className="font-body text-pebble text-xs mb-2">{product.subtitle}</p>
                <div className="mb-4">
                  {product.price ? (
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-primary text-2xl">${Number(product.price).toFixed(2)}</span>
                      {product.compareAtPrice && product.compareAtPrice > product.price && (
                        <span className="font-body text-stone text-xs line-through">${Number(product.compareAtPrice).toFixed(2)}</span>
                      )}
                    </div>
                  ) : (
                    <span className="font-brand text-stone text-xs">TBA</span>
                  )}
                </div>
                <div className="flex gap-2 mt-auto">
                  <Link to={`/product/${product.handle}`} className="flex-1 text-center font-brand px-3 py-2 text-xs rounded-full border-2 border-midnight text-midnight hover:bg-midnight hover:text-white transition-colors">
                    More Info
                  </Link>
                  {product.available ? (
                    <button
                      onClick={() => handleAdd(product)}
                      disabled={addingId === product.id}
                      className="flex-1 flex items-center justify-center gap-1 bg-primary text-white font-brand px-3 py-2 text-xs rounded-full hover:bg-orange-hot transition-colors border-2 border-primary"
                    >
                      {addingId === product.id ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Add to Cart'}
                    </button>
                  ) : (
                    <Link to={`/product/${product.handle}`} className="flex-1 text-center font-brand px-3 py-2 text-xs rounded-full bg-midnight text-white hover:bg-bark transition-colors border-2 border-midnight">
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