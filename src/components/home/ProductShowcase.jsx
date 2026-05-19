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

  return (
    <section className="py-16 sm:py-24 bg-background" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          {/* Pennant row */}
          <div className="flex justify-center gap-0 mb-4">
            {['bg-primary','bg-secondary','bg-sky','bg-sandy','bg-primary','bg-secondary','bg-sky','bg-sandy'].map((c, i) => (
              <motion.div
                key={i}
                className={`${c} border-2 border-midnight mx-0.5`}
                style={{ width: 28, height: 38, clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                animate={{ rotate: [i % 2 === 0 ? -5 : 5, i % 2 === 0 ? 5 : -5] }}
                transition={{ duration: 2 + i * 0.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              />
            ))}
          </div>
          <div className="inline-block bg-primary text-white font-display text-5xl sm:text-7xl px-6 py-2 shadow-cartoon border-4 border-midnight rotate-[-1deg]">
            🎪 SHOP THE BOSIE BAG™ 🎪
          </div>
          <p className="font-brand text-pebble text-lg mt-4">Step right up — the bags your big dog deserves</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: 'spring', stiffness: 300 }}
              className="group bg-white rounded-2xl border-bold shadow-cartoon overflow-hidden flex flex-col"
            >
              <div className="relative bg-cream p-8 flex items-center justify-center min-h-[240px]">
                {product.badge && (
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full font-brand text-xs text-white shadow-cartoon-sm ${
                    product.badge === 'Best Seller' ? 'bg-primary' : 'bg-secondary'
                  }`}>
                    {product.badge === 'Best Seller' ? '🧻 ' : '⚡ '}{product.badge}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-brand text-lg text-midnight">{product.name}</h3>
                <p className="font-body text-stone text-sm">{product.description}</p>
                <p className="font-body text-pebble text-sm mt-2 flex-1">{product.detail}</p>

                <div className="mt-4 flex items-center justify-between">
                  {product.price ? (
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl text-primary">${Number(product.price).toFixed(2)}</span>
                      {product.compareAtPrice && product.compareAtPrice > product.price && (
                        <span className="font-body text-stone line-through text-sm">${Number(product.compareAtPrice).toFixed(2)}</span>
                      )}
                    </div>
                  ) : (
                    <span className="font-brand text-stone text-sm">Price TBA</span>
                  )}
                </div>

                <button
                  onClick={() => handleAdd(product)}
                  disabled={!product.available || addingId === product.id}
                  className={`mt-4 w-full py-3 rounded-xl font-brand text-sm transition-all duration-300 border-bold flex items-center justify-center gap-2 ${
                    product.available
                      ? 'bg-primary text-white hover:bg-orange-hot shadow-cartoon-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none'
                      : 'bg-fog text-pebble'
                  }`}
                >
                  {addingId === product.id
                    ? <><Loader2 className="w-4 h-4 animate-spin" /> Adding...</>
                    : product.available ? 'Add to Cart 🐾' : 'Notify Me 🔔'
                  }
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}