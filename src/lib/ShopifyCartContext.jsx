import React, { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function ShopifyCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addItem = useCallback((variantId, product) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.variantId === variantId);
      if (existing) {
        return prev.map(i =>
          i.variantId === variantId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, {
        variantId,
        id: variantId,
        lineId: variantId,
        name: product?.name || product?.title || 'Product',
        price: parseFloat(product?.price) || 0,
        image: product?.image || null,
        quantity: 1,
      }];
    });
    setCartOpen(true);
  }, []);

  const updateQuantity = useCallback((variantId, quantity) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(i => i.variantId !== variantId && i.lineId !== variantId));
    } else {
      setCartItems(prev =>
        prev.map(i =>
          (i.variantId === variantId || i.lineId === variantId)
            ? { ...i, quantity }
            : i
        )
      );
    }
  }, []);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems, cartOpen, setCartOpen,
      addItem, updateQuantity,
      cartCount, cartTotal,
      loading: false,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useShopifyCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useShopifyCart must be used within ShopifyCartProvider');
  return ctx;
}