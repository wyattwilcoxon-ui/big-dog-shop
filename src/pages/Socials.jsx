import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Instagram, Facebook, Music2, Globe, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { getProducts } from '@/lib/shopify';

const SOCIALS = [
  { label: 'Instagram', handle: '@bigdoglife.og', url: 'https://instagram.com/bigdoglife.og', icon: Instagram, color: '#E1306C' },
  { label: 'TikTok', handle: '@bigdoglife.og', url: 'https://tiktok.com/@bigdoglife.og', icon: Music2, color: '#000000' },
  { label: 'Facebook', handle: '/bigdoglife.og', url: 'https://facebook.com/bigdoglife.og', icon: Facebook, color: '#1877F2' },
  { label: 'Website', handle: 'thebigdoglife.com', url: 'https://www.thebigdoglife.com', icon: Globe, color: '#F4610E' },
];

export default function Socials() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(data => setProducts(data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-midnight flex flex-col items-center px-4 py-12 sm:py-16">
      {/* Profile header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-primary border-4 border-cream flex items-center justify-center mx-auto mb-4 shadow-cartoon overflow-hidden">
          <img src="https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/45673ba63_BDLHead2.png" alt="Big Dog Life" className="w-full h-full object-cover" />
        </div>
        <h1 className="font-display text-4xl sm:text-5xl text-cream leading-none">BIG DOG LIFE</h1>
        <p className="font-brand text-stone text-sm mt-2">Big dogs. Bigger energy. Zero apologies.</p>
      </motion.div>

      {/* Products section */}
      <div className="w-full max-w-md mb-8">
        <div className="flex items-center gap-2 mb-3 px-1">
          <ShoppingBag className="w-4 h-4 text-primary" />
          <p className="font-brand text-primary text-xs uppercase tracking-wider">Shop The Pack</p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        ) : (
          <div className="space-y-3">
            {products.map((product, i) => (
              <motion.a
                key={product.id}
                href={`https://www.thebigdoglife.com/product/${product.handle}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-4 bg-cream rounded-2xl border-2 border-cream p-3 hover:border-primary transition-colors"
              >
                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
                ) : (
                  <div className="w-14 h-14 rounded-xl bg-fog flex items-center justify-center text-2xl flex-shrink-0">🦴</div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-brand text-midnight text-sm font-semibold truncate">{product.name}</p>
                  {product.price != null && (
                    <p className="font-body text-pebble text-xs">${Number(product.price).toFixed(2)}</p>
                  )}
                </div>
                <ArrowUpRight className="w-5 h-5 text-stone group-hover:text-primary transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="w-full max-w-md flex items-center gap-3 mb-6">
        <div className="flex-1 h-px bg-pebble/30" />
        <span className="font-brand text-stone text-xs uppercase tracking-wider">Follow Us</span>
        <div className="flex-1 h-px bg-pebble/30" />
      </div>

      {/* Social links */}
      <div className="w-full max-w-md space-y-3 mb-10">
        {SOCIALS.map((social, i) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-4 bg-cream/10 hover:bg-cream/20 border-2 border-cream/20 hover:border-primary rounded-2xl p-4 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: social.color }}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-brand text-cream text-sm font-semibold">{social.label}</p>
                <p className="font-body text-stone text-xs truncate">{social.handle}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-stone group-hover:text-primary transition-colors flex-shrink-0" />
            </motion.a>
          );
        })}
      </div>

      {/* Footer */}
      <p className="font-body text-stone/60 text-xs text-center">
        © {new Date().getFullYear()} Big Dog Life™ • Bellefontaine, Ohio
      </p>
    </div>
  );
}