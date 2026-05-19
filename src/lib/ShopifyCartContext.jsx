import React, { createContext, useContext, useState, useCallback } from 'react';
import { createCart, addToCart as shopifyAddToCart, updateCartLine, parseCartLines } from './shopify';

const CartContext = createContext(null);

export function ShopifyCartProvider({ children }) {
  const [cart, setCart] = useState(null);       // raw Shopify cart object
  const [cartItems, setCartItems] = useState([]); // parsed line items
  const [cartOpen, setCartOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const getOrCreateCart = useCallback(async () => {
    if (cart) return cart;
    const newCart = await createCart();
    setCart(newCart);
    return newCart;
  }, [cart]);

  const addItem = useCallback(async (variantId, productMeta) => {
    setLoading(true);
    const activeCart = await getOrCreateCart();
    const updatedCart = await shopifyAddToCart(activeCart.id, variantId);
    setCart(updatedCart);
    setCartItems(parseCartLines(updatedCart));
    setCartOpen(true);
    setLoading(false);
  }, [getOrCreateCart]);

  const updateQuantity = useCallback(async (lineId, quantity) => {
    if (!cart) return;
    setLoading(true);
    const updatedCart = await updateCartLine(cart.id, lineId, quantity);
    setCart(updatedCart);
    setCartItems(parseCartLines(updatedCart));
    setLoading(false);
  }, [cart]);

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
  return useContext(CartContext);
}