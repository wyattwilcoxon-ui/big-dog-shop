import React, { createContext, useContext, useState, useRef, useCallback } from 'react';
import { createCart, addToCart as shopifyAddToCart, updateCartLine, parseCartLines } from './shopify';

const CartContext = createContext(null);

export function ShopifyCartProvider({ children }) {
  const [cart, setCart] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Use a ref to avoid stale closure issues with cart state
  const cartRef = useRef(null);
  const setCartBoth = (c) => {
    cartRef.current = c;
    setCart(c);
  };

  const getOrCreateCart = async () => {
    if (cartRef.current) return cartRef.current;
    const newCart = await createCart();
    setCartBoth(newCart);
    return newCart;
  };

  const addItem = useCallback(async (variantId) => {
    setLoading(true);
    try {
      const activeCart = await getOrCreateCart();
      const updatedCart = await shopifyAddToCart(activeCart.id, variantId);
      setCartBoth(updatedCart);
      setCartItems(parseCartLines(updatedCart));
      setCartOpen(true);
    } catch (err) {
      console.error('Shopify addItem error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateQuantity = useCallback(async (lineId, quantity) => {
    if (!cartRef.current) return;
    setLoading(true);
    try {
      const updatedCart = await updateCartLine(cartRef.current.id, lineId, quantity);
      setCartBoth(updatedCart);
      setCartItems(parseCartLines(updatedCart));
    } catch (err) {
      console.error('Shopify updateQuantity error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const checkoutUrl = cart?.checkoutUrl || null;

  return (
    <CartContext.Provider value={{
      cartItems, cartOpen, setCartOpen,
      addItem, updateQuantity,
      cartCount, cartTotal, checkoutUrl, loading,
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