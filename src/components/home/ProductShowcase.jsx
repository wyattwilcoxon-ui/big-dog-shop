import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle } from 'lucide-react';
import { getProducts } from '@/lib/shopify';
import { useShopifyCart } from '@/lib/ShopifyCartContext';

const FALLBACK = [
  {
    id: 'starter-scoop',
    name: 'The Starter Scoop',
    description: '1 Roll · 15 Bags',
    detail: 'Dip your toes in (not literally).',
    price: null,
    badge: null,
    available: false,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-hero_4baf8cfb.png',
  },
  {
    id: 'bosie-8pack',
    name: 'The Bosie Bag™ 8-Pack',
    description: '8 Rolls · 120 Bags',
    detail: 'Our best seller. Weeks of worry-free walks.',
    price: 11.99,
    compareAtPrice: 15.99,
    badge: 'Best Seller',
    available: true,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-multi_1698b1d7.png',
  },
  {
    id: 'clip-and-go',
    name: 'The Clip & Go',
    description: 'Bone Dispenser + 1 Roll',
    detail: 'Clips to your leash. Never fumble again.',
    price: null,
    badge: 'Coming Soon',
    available: false,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-dispenser_fae228f9.png',
  },
];

const FEATURES = [
  'Extra-large 13" × 15" bags',
  'Triple-thick leak-proof material',
  'Easy-tear perforations',
  'Built for 70+ lb dogs',
];

export default function ProductShowcase() {
  const { addItem } = useShopifyCart();
  const [products, setProducts] = useState(FALLBACK);
  const [addingId, setAddingId] = useState(null);

  useEffect(() => {
    getProducts()
      .then(data => { if (data.length > 0) setProducts(data); })
      .catch(() => {});
  }, []);

  const handleAdd = async (product) => {
    if (!product.variantId || !product.available) return;
    setAddingId(product.id);
    await addItem(product.variantId, product);
    setAddingId(null);
  };

  const featured = products.find(p => p.available) || products[0];
  const rest = products.filter(p => p.id !== featured?.id);

  return (
    <section className="py-16 sm:py-24 bg-midnight" id="shop">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-brand text-primary text-sm uppercase tracking-widest mb-2">The Star of the Show</p>
          <h2 className="font-display text-6xl sm:text-8xl text-white">THE BOSIE BAG<span className="text-primary">™</span></h2>
          <p className="font-body text-stone text-lg mt-2">Engineered for the 100lb+ club. Big bags for big jobs.</p>
        </motion.div>

        {/* Featured product */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-10">
          {/* Image card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-10 flex items-center justify-center relative min-h-[320px]"
          >
            {featured?.badge && (
              <span className="absolute top-5 left-5 bg-midnight text-white font-brand text-xs px-3 py-1.5 rounded-full">
                {featured.badge === 'Best Seller' ? '🧻 Best Seller' : featured.badge}
              </span>
            )}
            {featured?.price && (
              <div className="absolute top-5 right-5 bg-yellow-400 text-midnight rounded-2xl px-4 py-2 text-center">
                <div className="font-brand text-xs">FROM</div>
                <div className="font-display text-3xl leading-none">${Number(featured.price).toFixed(0)}</div>
              </div>
            )}
            <img
              src={featured?.image}
              alt={featured?.name}
              className="max-h-64 object-contain"
            />
          </motion.div>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display text-3xl text-white mb-1">{featured?.name}</h3>
              <p className="font-brand text-stone text-sm mb-6">{featured?.description}</p>

              <div className="space-y-3 mb-8">
                {FEATURES.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-body text-white/80 text-sm">{f}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              {featured?.compareAtPrice && featured?.price && (
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-display text-4xl text-white">${Number(featured.price).toFixed(2)}</span>
                  <span className="font-body text-stone line-through text-lg">${Number(featured.compareAtPrice).toFixed(2)}</span>
                  <span className="bg-primary/20 text-primary font-brand text-xs px-2 py-1 rounded-full">SAVE ${(Number(featured.compareAtPrice) - Number(featured.price)).toFixed(2)}</span>
                </div>
              )}
              <button
                onClick={() => handleAdd(featured)}
                disabled={!featured?.available || addingId === featured?.id}
                className={`w-full py-4 rounded-2xl font-brand text-lg flex items-center justify-center gap-2 transition-all ${
                  featured?.available
                    ? 'bg-primary text-white hover:bg-orange-hot'
                    : 'bg-white/10 text-stone cursor-not-allowed'
                }`}
              >
                {addingId === featured?.id
                  ? <><Loader2 className="w-5 h-5 animate-spin" /> Adding...</>
                  : featured?.available ? '🐾 Add to Cart' : '🔔 Notify Me'
                }
              </button>
            </div>
          </motion.div>
        </div>

        {/* Rest of products */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rest.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-5"
              >
                <div className="w-20 h-20 flex-shrink-0 bg-primary/10 rounded-xl flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="font-brand text-white text-sm">{product.name}</h4>
                    {product.badge && (
                      <span className="bg-primary/20 text-primary font-brand text-xs px-2 py-0.5 rounded-full">{product.badge}</span>
                    )}
                  </div>
                  <p className="font-body text-stone text-xs mb-3">{product.description}</p>
                  <button
                    onClick={() => handleAdd(product)}
                    disabled={!product.available || addingId === product.id}
                    className={`font-brand text-xs px-4 py-2 rounded-full transition-colors ${
                      product.available
                        ? 'bg-primary text-white hover:bg-orange-hot'
                        : 'bg-white/10 text-stone'
                    }`}
                  >
                    {addingId === product.id ? '...' : product.available ? 'Add to Cart →' : 'Notify Me'}
                  </button>
                </div>
                <div className="text-right flex-shrink-0">
                  {product.price
                    ? <span className="font-display text-3xl text-white">${Number(product.price).toFixed(0)}</span>
                    : <span className="font-brand text-stone text-xs">TBA</span>
                  }
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}