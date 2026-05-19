import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { getProducts } from '@/lib/shopify';
import { useShopifyCart } from '@/lib/ShopifyCartContext';

const FALLBACK = [
  {
    id: 'starter-scoop', name: 'The Starter Scoop', description: '1 Roll • 15 Bags',
    detail: 'Dip your toes in (not literally).', price: null, badge: null, available: false,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-hero_4baf8cfb.png',
  },
  {
    id: 'bosie-8pack', name: 'The Bosie Bag™ 8-Pack', description: '8 Rolls • 120 Bags',
    detail: 'Our best seller. Weeks of worry-free walks.', price: 11.99, compareAtPrice: 15.99, badge: 'Best Seller', available: true,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-multi_1698b1d7.png',
  },
  {
    id: 'clip-and-go', name: 'The Clip & Go', description: 'Bone Dispenser + 1 Roll',
    detail: 'Clips to your leash. Never fumble again.', price: null, badge: 'New', available: false,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-dispenser_fae228f9.png',
  },
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

  const FEATURES = [
    { emoji: '📏', label: '40% BIGGER', sub: 'Built for gentle giants' },
    { emoji: '💪', label: 'TRIPLE-THICK', sub: 'No leaks, no tears, ever' },
    { emoji: '🌱', label: 'COMPOSTABLE', sub: 'Planet-friendly in 90 days' },
    { emoji: '✂️', label: 'EASY-TEAR', sub: 'Perfect perforation' },
  ];

  const featured = products.find(p => p.available) || products[0];

  return (
    <section className="py-16 sm:py-24 bg-primary" id="shop">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-secondary text-white font-brand text-xs px-4 py-1.5 rounded-full mb-4">
            ✦ THE STAR OF THE SHOW ✦
          </div>
          <h2 className="font-display text-6xl sm:text-8xl">
            <span className="text-yellow-400">THE </span>
            <span className="text-midnight">BOSIE BAG</span>
          </h2>
          <p className="font-body text-midnight/70 text-lg mt-2">Engineered for the 100lb+ club. Big bags for big jobs.</p>
        </motion.div>

        {/* Main product block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-yellow-300 rounded-3xl overflow-hidden relative min-h-[320px] flex items-center justify-center p-8">
              {/* Badges */}
              <div className="absolute top-4 left-4 bg-secondary text-white font-brand text-xs px-3 py-1.5 rounded-full">XL SIZE!</div>
              <div className="absolute bottom-4 left-4 bg-[#FF69B4] text-white font-brand text-xs px-3 py-1.5 rounded-full">60 BAGS!</div>
              <div className="absolute bottom-4 right-4 font-brand text-midnight text-xs">ECO-FRIENDLY</div>
              {featured?.price && (
                <div className="absolute top-4 right-4 bg-midnight text-white rounded-2xl p-3 text-center">
                  <div className="font-brand text-xs text-stone">STARTING AT</div>
                  <div className="font-display text-3xl text-white">${Number(featured.price).toFixed(0)}</div>
                </div>
              )}
              <img
                src={featured?.image}
                alt={featured?.name}
                className="max-h-64 object-contain relative z-10"
              />
            </div>
          </motion.div>

          {/* Features + CTA side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-midnight rounded-2xl px-5 py-4 flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  {f.emoji}
                </div>
                <div>
                  <div className="font-brand text-white font-semibold text-sm">{f.label}</div>
                  <div className="font-body text-stone text-xs">{f.sub}</div>
                </div>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              onClick={() => handleAdd(featured)}
              disabled={!featured?.available || addingId === featured?.id}
              className="mt-2 w-full bg-secondary text-white font-brand text-lg py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-green-bright transition-colors"
            >
              {addingId === featured?.id
                ? <><Loader2 className="w-5 h-5 animate-spin" /> Adding...</>
                : featured?.available ? 'GET THE BAG →' : 'NOTIFY ME 🔔'
              }
            </motion.button>
          </motion.div>
        </div>

        {/* All products row */}
        {products.length > 1 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-midnight rounded-2xl p-5 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img src={product.image} alt={product.name} className="w-14 h-14 object-contain" />
                  <div>
                    <div className="font-brand text-white text-sm">{product.name}</div>
                    <div className="font-body text-stone text-xs">{product.description}</div>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  {product.price
                    ? <span className="font-display text-yellow-400 text-2xl">${Number(product.price).toFixed(0)}</span>
                    : <span className="font-brand text-stone text-sm">Coming Soon</span>
                  }
                  <button
                    onClick={() => handleAdd(product)}
                    disabled={!product.available || addingId === product.id}
                    className={`font-brand text-xs px-4 py-2 rounded-full transition-colors ${
                      product.available ? 'bg-primary text-white hover:bg-orange-hot' : 'bg-white/10 text-stone'
                    }`}
                  >
                    {addingId === product.id ? '...' : product.available ? 'Add →' : 'Notify Me'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}