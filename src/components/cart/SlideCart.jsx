import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const FREE_SHIPPING_THRESHOLD = 25;

export default function SlideCart({ open, onClose, items, onUpdateQuantity, total, checkoutUrl }) {
  const [customerInfo, setCustomerInfo] = useState({ email: '', name: '', phone: '', address: '' });
  const [showForm, setShowForm] = useState(false);
  const shippingProgress = Math.min((total / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const amountToFreeShipping = Math.max(FREE_SHIPPING_THRESHOLD - total, 0);

  const handleCheckoutClick = () => {
    if (!customerInfo.email || !customerInfo.name) {
      setShowForm(true);
    } else {
      window.open(checkoutUrl, '_blank');
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

                {showForm && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-4 bg-cream rounded-xl border-2 border-midnight"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-brand text-midnight">🐾 Quick Checkout Info</h3>
                      <button onClick={() => setShowForm(false)} className="text-stone hover:text-midnight">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-pebble font-body mb-3">We'll pre-fill your Shopify checkout with this info</p>
                    <div className="space-y-3">
                      <div>
                        <Label className="text-xs font-brand text-midnight">Full Name *</Label>
                        <Input
                          value={customerInfo.name}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                          placeholder="John Doe"
                          className="bg-white border-midnight"
                        />
                      </div>
                      <div>
                        <Label className="text-xs font-brand text-midnight">Email *</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone" />
                          <Input
                            type="email"
                            value={customerInfo.email}
                            onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                            placeholder="john@example.com"
                            className="bg-white border-midnight pl-10"
                          />
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs font-brand text-midnight">Phone (optional)</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone" />
                          <Input
                            type="tel"
                            value={customerInfo.phone}
                            onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                            placeholder="(555) 123-4567"
                            className="bg-white border-midnight pl-10"
                          />
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs font-brand text-midnight">Address (optional)</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 w-4 h-4 text-stone" />
                          <Input
                            value={customerInfo.address}
                            onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                            placeholder="123 Main St, City, ST"
                            className="bg-white border-midnight pl-10"
                          />
                        </div>
                      </div>
                      <button
                        onClick={handleCheckoutClick}
                        disabled={!customerInfo.email || !customerInfo.name}
                        className="w-full h-12 text-lg font-brand bg-primary hover:bg-orange-hot disabled:bg-fog disabled:text-pebble disabled:cursor-not-allowed text-white rounded-xl shadow-cartoon border-bold transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:shadow-none disabled:translate-x-0 disabled:translate-y-0"
                      >
                        Continue to Checkout 🐾
                      </button>
                    </div>
                  </motion.div>
                )}

                {!showForm && (
                  <button
                    onClick={handleCheckoutClick}
                    className="flex items-center justify-center gap-3 w-full h-14 text-lg font-brand bg-primary hover:bg-orange-hot text-white rounded-xl shadow-cartoon border-bold transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                  >
                    Checkout 🐾
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}