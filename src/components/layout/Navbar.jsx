import React, { useState } from 'react';
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
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-fog/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className="font-display text-3xl sm:text-4xl tracking-tight text-midnight group-hover:text-primary transition-colors">
                BIG DOG LIFE
              </span>
              <span className="text-xs font-brand text-stone hidden sm:block">™</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-brand text-lg transition-all duration-200 hover:text-primary ${
                    location.pathname === link.path ? 'text-primary' : 'text-midnight'
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
                className="relative p-2 rounded-xl bg-primary text-white hover:bg-orange-hot transition-all shadow-cartoon-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-midnight">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                className="md:hidden p-2 text-midnight"
                onClick={() => setMenuOpen(true)}
              >
                <Menu className="w-7 h-7" strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="fixed inset-0 z-[60] bg-midnight flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-5 right-5 text-white p-2"
              onClick={() => setMenuOpen(false)}
            >
              <X className="w-8 h-8" strokeWidth={3} />
            </button>

            <div className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-6xl sm:text-8xl text-white hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-10"
            >
              <Link
                to="/shop"
                onClick={() => setMenuOpen(false)}
                className="font-brand text-lg bg-primary text-white px-8 py-4 rounded-xl shadow-cartoon-sm border-2 border-white"
              >
                Shop Now 🐾
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}