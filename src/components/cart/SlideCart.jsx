import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { createCart, addToCart } from '@/lib/shopify';

const FREE_SHIPPING_THRESHOLD = 45;

export default function SlideCart({ open, onClose, items, onUpdateQuantity, total }) {
  const [checkingOut, setCheckingOut] = useState(false);
  const shippingProgress = Math.min((total / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const amountToFreeShipping = Math.max(FREE_SHIPPING_THRESHOLD - total, 0);

  const handleCheckout = async () => {
    setCheckingOut(true);
    try {
      let cart = await createCart();
      for (const item of items) {
        cart = await addToCart(cart.id, item.variantId, item.quantity);
      }
      if (!cart.checkoutUrl) throw new Error('No checkout URL returned');
      window.location.href = cart.checkoutUrl;
    } catch (err) {
      console.error('Checkout error:', err);
      setCheckingOut(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-midnight/50 z-[70]"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-cream z-[80] flex flex-col border-l-4 border-midnight"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b-4 border-midnight">
              <h2 className="font-display text-3xl text-midnight">YOUR CART</h2>
              <button onClick={onClose} className="p-1 hover:text-primary transition-colors">
                <X className="w-6 h-6" strokeWidth={3} />
              </button>
            </div>

            {/* Shipping progress */}
            <div className="px-5 py-4 bg-orange-pale">
              <p className="font-brand text-sm text-midnight mb-2">
                {amountToFreeShipping > 0
                  ? `🦴 $${amountToFreeShipping.toFixed(2)} away from free shipping!`
                  : '🎉 Free shipping unlocked!'}
              </p>
              <Progress value={shippingProgress} className="h-3 bg-fog" />
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                  <ShoppingBag className="w-16 h-16 text-stone" />
                  <p className="font-brand text-xl text-pebble">Cart's empty, dawg.</p>
                  <p className="text-stone text-sm font-body">Your big dog deserves better!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.variantId} className="flex gap-4 bg-white rounded-xl p-3 border-bold">
                      <div className="w-20 h-20 rounded-lg bg-fog overflow-hidden flex-shrink-0">
                        {item.image && <img src={item.image} alt={item.name} className="w-full h-full object-cover" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-brand text-sm text-midnight leading-tight">{item.name}</h4>
                          <button
                            onClick={() => onUpdateQuantity(item.variantId, 0)}
                            className="text-stone hover:text-destructive transition-colors flex-shrink-0"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-primary font-bold font-body text-sm mt-0.5">${item.price.toFixed(2)} each</p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => onUpdateQuantity(item.variantId, item.quantity - 1)}
                              className="w-7 h-7 rounded-lg bg-fog flex items-center justify-center hover:bg-stone/30 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-brand text-sm w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.variantId, item.quantity + 1)}
                              className="w-7 h-7 rounded-lg bg-fog flex items-center justify-center hover:bg-stone/30 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-brand text-sm text-midnight">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Checkout Footer */}
            {items.length > 0 && (
              <div className="p-5 border-t-4 border-midnight bg-white">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-brand text-lg text-midnight">Subtotal</span>
                  <span className="font-display text-3xl text-primary">${total.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={checkingOut}
                  className="flex items-center justify-center gap-3 w-full h-14 text-lg font-brand bg-primary hover:bg-orange-hot text-white rounded-xl shadow-cartoon border-bold transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {checkingOut ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Checkout 🐾'}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}