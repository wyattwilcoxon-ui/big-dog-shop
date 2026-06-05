import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SlideCart from '../cart/SlideCart.jsx';
import GlobalBokeh from './GlobalBokeh';
import { ShopifyCartProvider, useShopifyCart } from '@/lib/ShopifyCartContext';

function LayoutInner() {
  const location = useLocation();
  const { cartCount, cartOpen, setCartOpen, cartItems, updateQuantity, cartTotal, checkoutUrl, loading } = useShopifyCart();
  
  // Hide bokeh on product detail pages for clean product images
  const hideBokeh = location.pathname.startsWith('/product/');

  return (
    <div className="relative min-h-screen bg-background">
      <GlobalBokeh hideHero={hideBokeh} />
      <div className="relative z-10">
        <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
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