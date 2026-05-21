import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, X, Mail } from 'lucide-react';
import { getProducts } from '@/lib/shopify';
import { useShopifyCart } from '@/lib/ShopifyCartContext';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';

// Fallback static products if Shopify returns nothing
const FALLBACK_PRODUCTS = [
  {
    id: 'starter-scoop',
    name: 'The Starter Scoop',
    description: '1 Roll • 15 Bags',
    detail: 'Dip your toes in (not literally). One roll of our premium leak-proof Bosie Bags.',
    price: null, compareAtPrice: null, badge: null, available: false,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-hero_4baf8cfb.png',
  },
  {
    id: 'bosie-8pack',
    name: 'The Bosie Bag™ 8-Pack',
    description: '8 Rolls • 120 Bags Total',
    detail: 'Our best seller. 120 bags of leak-proof, oversized glory. Weeks of worry-free walks.',
    price: 11.99, compareAtPrice: 15.99, badge: 'Best Seller', available: false,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-multi_1698b1d7.png',
  },
  {
    id: 'clip-and-go',
    name: 'The Clip & Go',
    description: 'Bone Dispenser + 1 Roll',
    detail: 'Our signature bone-shaped dispenser clips right to the leash.',
    price: null, compareAtPrice: null, badge: 'New', available: false,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/poop-bags-dispenser_fae228f9.png',
  },
];

export default function Shop() {
  const { addItem, loading } = useShopifyCart();
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [addingId, setAddingId] = useState(null);
  const [notifyProduct, setNotifyProduct] = useState(null);
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifyPhone, setNotifyPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    getProducts()
      .then(data => setProducts(data.length > 0 ? data : FALLBACK_PRODUCTS))
      .catch(err => { console.error('Shopify fetch failed:', err); setProducts(FALLBACK_PRODUCTS); })
      .finally(() => setFetching(false));
  }, []);

  const handleAddToCart = async (product) => {
    if (!product.variantId || !product.available) return;
    setAddingId(product.id);
    await addItem(product.variantId, product);
    setAddingId(null);
  };

  const handleNotifyMe = async (product) => {
    setNotifyProduct(product);
    setNotifyEmail('');
  };

  const submitNotifyMe = async () => {
    if (!notifyEmail || !notifyProduct) return;
    setSubmitting(true);
    try {
      await base44.functions.invoke('saveNotifyMeRequest', {
        email: notifyEmail,
        phone: notifyPhone || null,
        product_id: notifyProduct.id,
        product_name: notifyProduct.name,
        timestamp: Date.now(),
      });
      toast.success('We\'ll notify you when it\'s back! 🐾');
      setNotifyProduct(null);
    } catch (error) {
      toast.error('Something went wrong. Try again!');
    } finally {
      setSubmitting(false);
    }
  };

  const displayProducts = fetching ? [] : products;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-midnight pt-24 pb-16 sm:pt-32 sm:pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-brand text-primary text-lg mb-2">All Products</p>
            <h1 className="font-display text-6xl sm:text-8xl text-white">THE GOOD STUFF</h1>
            <p className="font-body text-stone text-lg mt-4 max-w-xl">
              Extra large, leak-proof bags for dogs who don't believe in moderation.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {fetching ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayProducts.map((product, i) => (
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
                    {product.handle ? (
                      <Link to={`/product/${product.handle}`}>
                        <img src={product.image} alt={product.name} className="max-h-60 object-contain group-hover:scale-105 transition-transform duration-500" />
                      </Link>
                    ) : (
                      <img src={product.image} alt={product.name} className="max-h-60 object-contain group-hover:scale-105 transition-transform duration-500" />
                    )}
                  </div>
                  <div className="p-8 sm:p-10 flex flex-col justify-center">
                    {product.handle ? (
                      <Link to={`/product/${product.handle}`} className="hover:text-primary transition-colors">
                        <h2 className="font-display text-3xl sm:text-4xl text-midnight">{product.name}</h2>
                      </Link>
                    ) : (
                      <h2 className="font-display text-3xl sm:text-4xl text-midnight">{product.name}</h2>
                    )}
                    <p className="font-brand text-stone mt-1">{product.description}</p>
                    <p className="font-body text-pebble mt-4 leading-relaxed">{product.detail || product.description}</p>

                    <div className="mt-6 flex items-center gap-4">
                      {product.price ? (
                        <div className="flex items-baseline gap-2">
                          <span className="font-display text-4xl text-primary">${Number(product.price).toFixed(2)}</span>
                          {product.compareAtPrice && product.compareAtPrice > product.price && (
                            <span className="font-body text-stone line-through">${Number(product.compareAtPrice).toFixed(2)}</span>
                          )}
                        </div>
                      ) : (
                        <span className="font-brand text-stone">Price TBA</span>
                      )}
                    </div>

                    <button
                      onClick={() => product.available ? handleAddToCart(product) : handleNotifyMe(product)}
                      disabled={addingId === product.id}
                      className={`mt-6 w-full sm:w-auto px-8 py-4 rounded-xl font-brand transition-all duration-300 border-bold flex items-center justify-center gap-2 ${
                        product.available
                          ? 'bg-primary text-white hover:bg-orange-hot shadow-cartoon-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none'
                          : 'bg-secondary text-white hover:bg-green-bright shadow-cartoon-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none'
                      }`}
                    >
                      {addingId === product.id
                        ? <><Loader2 className="w-4 h-4 animate-spin" /> Adding...</>
                        : product.available ? 'Add to Cart 🐾' : 'Notify Me 🔔'
                      }
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Notify Me Modal */}
      <AnimatePresence>
        {notifyProduct && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-midnight/60 z-[90]"
              onClick={() => setNotifyProduct(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-2xl border-bold shadow-cartoon max-w-md w-full p-6 relative">
                <button
                  onClick={() => setNotifyProduct(null)}
                  className="absolute top-4 right-4 text-stone hover:text-midnight"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-3xl text-midnight mb-2">NOTIFY ME</h3>
                  <p className="font-body text-pebble mb-1">
                    We'll email you when <strong>{notifyProduct.name}</strong> is back in stock!
                  </p>
                  <p className="font-brand text-sm text-stone mb-4">No spam, just good news 🐾</p>
                  <div className="space-y-3">
                    <div>
                      <input
                        type="email"
                        value={notifyEmail}
                        onChange={(e) => setNotifyEmail(e.target.value)}
                        placeholder="your@email.com *"
                        className="w-full px-4 py-3 rounded-xl border-2 border-midnight font-body text-midnight placeholder:text-stone focus:outline-none focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        value={notifyPhone}
                        onChange={(e) => setNotifyPhone(e.target.value)}
                        placeholder="Phone (optional)"
                        className="w-full px-4 py-3 rounded-xl border-2 border-midnight font-body text-midnight placeholder:text-stone focus:outline-none focus:border-primary"
                      />
                    </div>
                    <button
                      onClick={submitNotifyMe}
                      disabled={submitting || !notifyEmail}
                      className="w-full h-14 text-lg font-brand bg-primary hover:bg-orange-hot disabled:bg-fog disabled:text-pebble disabled:cursor-not-allowed text-white rounded-xl shadow-cartoon border-bold transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:shadow-none disabled:translate-x-0 disabled:translate-y-0"
                    >
                      {submitting ? <><Loader2 className="w-5 h-5 animate-spin inline mr-2" />Sending...</> : 'Notify Me 🔔'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}