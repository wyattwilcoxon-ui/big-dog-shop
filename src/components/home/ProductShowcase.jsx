import React from 'react';
import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';

const PRODUCTS = [
  {
    id: 'starter-scoop',
    name: 'The Starter Scoop',
    description: '1 Roll • 15 Bags',
    detail: 'Dip your toes in (not literally).',
    price: null,
    originalPrice: null,
    badge: null,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-hero_4baf8cfb.png',
    cta: 'Notify Me',
  },
  {
    id: 'bosie-8pack',
    name: 'The Bosie Bag™ 8-Pack',
    description: '8 Rolls • 120 Bags',
    detail: 'Our best seller. Weeks of worry-free walks.',
    price: 11.99,
    originalPrice: 15.99,
    badge: 'Best Seller',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-multi_1698b1d7.png',
    cta: 'Add to Cart',
  },
  {
    id: 'clip-and-go',
    name: 'The Clip & Go',
    description: 'Bone Dispenser + 1 Roll',
    detail: 'Clips to your leash. Never fumble again.',
    price: null,
    originalPrice: null,
    badge: 'New',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-dispenser_fae228f9.png',
    cta: 'Notify Me',
  },
];

export default function ProductShowcase() {
  const { addToCart } = useOutletContext();

  return (
    <section className="py-16 sm:py-24 bg-background" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-brand text-primary text-lg mb-2">The Good Stuff</p>
          <h2 className="font-display text-5xl sm:text-7xl text-midnight">SHOP THE BOSIE BAG™</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: 'spring', stiffness: 300 }}
              className="group bg-white rounded-2xl border-bold shadow-cartoon overflow-hidden flex flex-col"
            >
              {/* Image */}
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

              {/* Info */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-brand text-lg text-midnight">{product.name}</h3>
                <p className="font-body text-stone text-sm">{product.description}</p>
                <p className="font-body text-pebble text-sm mt-2 flex-1">{product.detail}</p>

                <div className="mt-4 flex items-center justify-between">
                  {product.price ? (
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl text-primary">${product.price}</span>
                      {product.originalPrice && (
                        <span className="font-body text-stone line-through text-sm">${product.originalPrice}</span>
                      )}
                    </div>
                  ) : (
                    <span className="font-brand text-stone text-sm">Price TBA</span>
                  )}
                </div>

                <button
                  onClick={() => {
                    if (product.price) {
                      addToCart({ id: product.id, name: product.name, price: product.price, image: product.image });
                    }
                  }}
                  className={`mt-4 w-full py-3 rounded-xl font-brand text-sm transition-all duration-300 border-bold ${
                    product.price
                      ? 'bg-primary text-white hover:bg-orange-hot shadow-cartoon-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none'
                      : 'bg-fog text-pebble hover:bg-stone/20'
                  }`}
                >
                  {product.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}