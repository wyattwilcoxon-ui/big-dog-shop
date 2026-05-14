import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const FREE_SHIPPING_THRESHOLD = 25;

export default function SlideCart({ open, onClose, items, onUpdateQuantity, total }) {
  const shippingProgress = Math.min((total / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const amountToFreeShipping = Math.max(FREE_SHIPPING_THRESHOLD - total, 0);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-midnight/50 z-[70]"
            onClick={onClose}
          />

          {/* Cart Panel */}
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

            {/* Fill the Bowl progress */}
            <div className="px-5 py-4 bg-orange-pale">
              <div className="flex items-center justify-between mb-2">
                <span className="font-brand text-sm text-midnight">
                  {amountToFreeShipping > 0
                    ? `🦴 $${amountToFreeShipping.toFixed(2)} away from free shipping!`
                    : '🎉 Free shipping unlocked!'}
                </span>
              </div>
              <Progress value={shippingProgress} className="h-3 bg-fog" />
              <p className="text-xs text-pebble font-body mt-1">Fill the Bowl for free shipping!</p>
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
                    <div key={item.id} className="flex gap-4 bg-white rounded-xl p-3 border-bold">
                      <div className="w-20 h-20 rounded-lg bg-fog overflow-hidden flex-shrink-0">
                        {item.image && (
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-brand text-sm text-midnight truncate">{item.name}</h4>
                        <p className="text-primary font-bold font-body">${item.price.toFixed(2)}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="w-7 h-7 rounded-lg bg-fog flex items-center justify-center hover:bg-stone/30 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-brand text-sm w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-7 h-7 rounded-lg bg-fog flex items-center justify-center hover:bg-stone/30 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
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
                  <span className="font-brand text-lg text-midnight">Total</span>
                  <span className="font-display text-3xl text-primary">${total.toFixed(2)}</span>
                </div>
                <Button
                  className="w-full h-14 text-lg font-brand bg-primary hover:bg-orange-hot text-white rounded-xl shadow-cartoon border-bold transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  Checkout 🐾
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}