import React from 'react';
import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';

const ALL_PRODUCTS = [
  {
    id: 'starter-scoop',
    name: 'The Starter Scoop',
    description: '1 Roll • 15 Bags',
    detail: 'Dip your toes in (not literally). One roll of our premium leak-proof Bosie Bags.',
    price: null,
    originalPrice: null,
    badge: null,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-hero_4baf8cfb.png',
    cta: 'Notify Me',
  },
  {
    id: 'bosie-8pack',
    name: 'The Bosie Bag™ 8-Pack',
    description: '8 Rolls • 120 Bags Total',
    detail: 'Our best seller. 120 bags of leak-proof, oversized glory. Weeks of worry-free walks.',
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
    detail: 'Our signature bone-shaped dispenser clips right to the leash. Comes with one roll.',
    price: null,
    originalPrice: null,
    badge: 'New',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-dispenser_fae228f9.png',
    cta: 'Notify Me',
  },
];

export default function Shop() {
  const { addToCart } = useOutletContext();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero header */}
      <div className="bg-midnight py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="font-brand text-primary text-lg mb-2">All Products</p>
            <h1 className="font-display text-6xl sm:text-8xl text-white">THE GOOD STUFF</h1>
            <p className="font-body text-stone text-lg mt-4 max-w-xl">
              Extra large, leak-proof bags for dogs who don't believe in moderation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Product Power Grid - 2 column big */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ALL_PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group bg-white rounded-2xl border-bold shadow-cartoon overflow-hidden transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`grid ${i === 0 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                <div className="bg-cream p-8 sm:p-12 flex items-center justify-center min-h-[280px] relative">
                  {product.badge && (
                    <span className={`absolute top-4 left-4 px-4 py-1.5 rounded-full font-brand text-sm text-white shadow-cartoon-sm ${
                      product.badge === 'Best Seller' ? 'bg-primary' : 'bg-secondary'
                    }`}>
                      {product.badge === 'Best Seller' ? '🧻 ' : '⚡ '}{product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-60 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <h2 className="font-display text-3xl sm:text-4xl text-midnight">{product.name}</h2>
                  <p className="font-brand text-stone mt-1">{product.description}</p>
                  <p className="font-body text-pebble mt-4 leading-relaxed">{product.detail}</p>
                  
                  <div className="mt-6 flex items-center gap-4">
                    {product.price ? (
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-4xl text-primary">${product.price}</span>
                        {product.originalPrice && (
                          <span className="font-body text-stone line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    ) : (
                      <span className="font-brand text-stone">Price TBA</span>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      if (product.price) {
                        addToCart({ id: product.id, name: product.name, price: product.price, image: product.image });
                      }
                    }}
                    className={`mt-6 w-full sm:w-auto px-8 py-4 rounded-xl font-brand transition-all duration-300 border-bold ${
                      product.price
                        ? 'bg-primary text-white hover:bg-orange-hot shadow-cartoon-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none'
                        : 'bg-fog text-pebble hover:bg-stone/20'
                    }`}
                  >
                    {product.cta} {product.price ? '🐾' : '🔔'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}