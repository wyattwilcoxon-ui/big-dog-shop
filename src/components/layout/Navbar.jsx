import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Shop', path: '/shop' },
  { label: 'Bundles', path: '/bundles' },
  { label: 'The Pack', path: '/pack' },
  { label: 'FAQ', path: '/faq' },
];

export default function Navbar({ cartCount = 0, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-midnight shadow-md' : 'bg-midnight/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className="font-display text-white text-2xl tracking-wide leading-none">BIG DOG</span>
              <span className="font-display text-primary text-2xl tracking-wide leading-none">LIFE</span>
              <span className="font-brand text-stone text-xs">™</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-brand text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-white/15 text-white'
                      : 'text-stone hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <button
                onClick={onCartClick}
                className="relative flex items-center gap-2 bg-primary text-white font-brand text-sm px-5 py-2 rounded-full hover:bg-orange-hot transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Shop Now</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-secondary text-white text-xs font-bold rounded-full flex items-center justify-center border border-midnight">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                className="md:hidden p-2 text-white"
                onClick={() => setMenuOpen(true)}
              >
                <Menu className="w-6 h-6" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-midnight flex flex-col"
          >
            <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
              <span className="font-display text-white text-2xl">BIG DOG <span className="text-primary">LIFE</span></span>
              <button className="text-white p-2" onClick={() => setMenuOpen(false)}>
                <X className="w-7 h-7" strokeWidth={2.5} />
              </button>
            </div>

            <div className="flex flex-col px-6 py-8 gap-2 flex-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="block font-display text-5xl text-white hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="px-6 pb-10">
              <Link
                to="/shop"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center font-brand text-lg bg-primary text-white py-4 rounded-2xl"
              >
                Shop Now 🐾
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}