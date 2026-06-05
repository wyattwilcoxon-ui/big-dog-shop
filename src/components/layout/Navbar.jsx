import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', path: '/about' },
  { label: 'The Pack', path: '/pack' },
  { label: 'FAQ', path: '/faq' },
];

const LOGO_TRANS_URL = 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/058123048_BigDogLifeBannerTrans.png';
const LOGO_WHITE_URL = 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/7cd0d1928_BDLHorz.png';

export default function Navbar({ cartCount = 0, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  // Pages/sections with dark backgrounds at top
  const darkBgPaths = ['/', '/pack', '/about', '/why-big-dogs-need-bigger-poop-bags'];
  const hasDarkBg = darkBgPaths.some(path => location.pathname.startsWith(path));

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > 80 && y > lastScrollY.current);
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
        style={{
          background: scrolled ? 'rgba(21,21,21,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            <Link to="/" className="flex items-center group">
              <img 
                src={(scrolled || hasDarkBg) ? LOGO_WHITE_URL : LOGO_TRANS_URL} 
                alt="Big Dog Life" 
                className="h-10 w-auto object-contain" 
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-display text-sm sm:text-base px-3 sm:px-4 py-2 rounded-full transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-primary text-white'
                      : 'text-white hover:text-primary hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/shop"
                className="hidden sm:inline-flex items-center gap-1 bg-primary text-white font-brand text-sm px-4 py-2 rounded-full hover:bg-orange-hot transition-all"
              >
                Products
              </Link>
              <button
                onClick={onCartClick}
                className="relative flex items-center gap-1 sm:gap-2 bg-primary text-white font-brand text-xs sm:text-sm px-3 sm:px-5 py-2 rounded-full hover:bg-orange-hot transition-all"
              >
                <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 sm:w-5 sm:h-5 bg-secondary text-white text-[10px] sm:text-xs font-bold rounded-full flex items-center justify-center border border-midnight">
                    {cartCount}
                  </span>
                )}
              </button>

              <button className="md:hidden p-2 text-white" onClick={() => setMenuOpen(true)}>
                <Menu className="w-6 h-6" strokeWidth={2.5} />
              </button>
            </div>

          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-midnight flex flex-col"
          >
            <div className="flex items-center justify-between px-5 h-28 border-b border-white/10">
              <img src={LOGO_WHITE_URL} alt="Big Dog Life" className="h-8 w-auto object-contain" />
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

            <div className="px-6 pb-10 space-y-3">
              <Link
                to="/shop"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center font-brand text-lg bg-primary text-white py-4 rounded-2xl"
              >
                Products 🐾
              </Link>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onCartClick();
                }}
                className="block w-full text-center font-brand text-lg bg-secondary text-white py-4 rounded-2xl"
              >
                View Cart {cartCount > 0 && `(${cartCount})`}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}