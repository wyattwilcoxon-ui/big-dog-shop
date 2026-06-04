import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SlideCart from '../cart/SlideCart.jsx';
import { ShopifyCartProvider, useShopifyCart } from '@/lib/ShopifyCartContext';

function LayoutInner() {
  const { cartCount, cartOpen, setCartOpen, cartItems, updateQuantity, cartTotal, checkoutUrl, loading } = useShopifyCart();

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
        <main>
          <Outlet />
        </main>
        <Footer />
      <SlideCart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        total={cartTotal}
        checkoutUrl={checkoutUrl}
        loading={loading}
      />
    </div>
  );
}

export default function Layout() {
  return (
    <ShopifyCartProvider>
      <LayoutInner />
    </ShopifyCartProvider>
  );
}