import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedMarquee from '../home/AnimatedMarquee';
import { base44 } from '@/api/base44Client';

const TICKER = [
  'BIG DOGS. BIGGER ENERGY.', 'ZERO APOLOGIES', 'BELLEFONTAINE OH', 'BOSA APPROVED',
  'BOSIE BAG™', 'LIVE BOLD. LOVE DOGS.', '#BOSIEBLAST', 'GIVE A $H!T', 'SINCE 2024',
];

const PAYMENT_LOGOS = [
  { label: 'Visa',       src: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visa.svg',        bg: '#1A1F71', invert: true  },
  { label: 'Mastercard', src: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mastercard.svg', bg: '#fff',    invert: false },
  { label: 'Amex',       src: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/americanexpress.svg', bg: '#016FD0', invert: true },
  { label: 'PayPal',     src: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/paypal.svg',     bg: '#003087', invert: true  },
  { label: 'Apple Pay',  src: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/applepay.svg',   bg: '#000',    invert: true  },
  { label: 'Google Pay', src: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlepay.svg', bg: '#fff',    invert: false },
  { label: 'Shop Pay',   src: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/shopify.svg',   bg: '#5A31F4', invert: true  },
  { label: 'Venmo',      src: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/venmo.svg',     bg: '#3D95CE', invert: true  },
  { label: 'Discover',   src: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/discover.svg',  bg: '#FF6600', invert: true  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      await base44.functions.invoke('createShopifyContact', { email });
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-midnight text-cream">
      <AnimatedMarquee items={TICKER} bg="bg-primary" textColor="text-white" speed={20} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div>
            <motion.h3
              animate={{ color: ['#F4610E', '#FF7A28', '#F4610E'] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="font-display text-4xl sm:text-5xl mb-3 sm:mb-4"
            >
              BIG DOG LIFE
            </motion.h3>
            <p className="font-body text-stone text-xs sm:text-sm leading-relaxed">
              Big dogs. Bigger energy. Zero apologies.
            </p>
          </div>

          <div>
            <h4 className="font-brand text-base sm:text-lg text-white mb-3 sm:mb-4">Shop</h4>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <Link to="/shop" className="text-stone hover:text-primary transition-colors font-body text-xs sm:text-sm">All Products</Link>
              <Link to="/shop" className="text-stone hover:text-primary transition-colors font-body text-xs sm:text-sm">Best Sellers</Link>
            </div>
          </div>

          <div>
            <h4 className="font-brand text-base sm:text-lg text-white mb-3 sm:mb-4">Company</h4>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <Link to="/about" className="text-stone hover:text-primary transition-colors font-body text-xs sm:text-sm">About Us</Link>
              <Link to="/pack" className="text-stone hover:text-primary transition-colors font-body text-xs sm:text-sm">The Pack</Link>
              <Link to="/faq" className="text-stone hover:text-primary transition-colors font-body text-xs sm:text-sm">FAQ</Link>
              <Link to="/contact" className="text-stone hover:text-primary transition-colors font-body text-xs sm:text-sm">Contact</Link>
              <Link to="/why-big-dogs-need-bigger-poop-bags" className="text-stone hover:text-primary transition-colors font-body text-xs sm:text-sm">Why Big Dogs Need Better Bags</Link>
            </div>
          </div>

          <div>
            <h4 className="font-brand text-base sm:text-lg text-white mb-3 sm:mb-4">Connect</h4>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <Link to="/contact" className="flex items-center gap-2 text-stone hover:text-primary transition-colors font-body text-xs sm:text-sm">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />Contact Us
              </Link>
              <div className="flex items-center gap-2 text-stone font-body text-xs sm:text-sm">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />Bellefontaine, Ohio
              </div>
              <div className="flex items-center gap-3 mt-2">
                <a href="https://instagram.com/bigdoglife.og" target="_blank" rel="noopener noreferrer" className="text-stone hover:text-primary transition-colors">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="https://facebook.com/bigdoglife.og" target="_blank" rel="noopener noreferrer" className="text-stone hover:text-primary transition-colors">
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Email signup */}
        <div className="mt-12 pt-10 border-t border-pebble/30 text-center">
          <p className="font-brand text-white text-lg mb-4 uppercase tracking-wide">Sign up for the latest updates</p>
          <form onSubmit={handleSubmit} className="flex max-w-md mx-auto mb-2">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="flex-1 px-4 py-3 bg-white text-midnight font-body text-sm rounded-l-lg border-0 outline-none"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-4 py-3 bg-white text-midnight hover:text-primary transition-colors rounded-r-lg border-l border-fog"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
          {status === 'success' && <p className="font-body text-green-bright text-sm">You're in! 🐾</p>}
          {status === 'error' && <p className="font-body text-destructive text-sm">Something went wrong. Try again.</p>}

          {/* Social icons */}
          <div className="flex justify-center gap-6 mt-6 mb-8">
            <a href="https://facebook.com/bigdoglife.og" target="_blank" rel="noopener noreferrer" className="text-stone hover:text-primary transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/bigdoglife.og" target="_blank" rel="noopener noreferrer" className="text-stone hover:text-primary transition-colors">
              <Instagram className="w-6 h-6" />
            </a>

          </div>

          {/* Payment logos */}
          <div className="border-t border-pebble/30 pt-6 mb-6">
            <div className="flex flex-wrap justify-center gap-2">
              {PAYMENT_LOGOS.map(p => (
                <div key={p.label} title={p.label} className="h-9 w-14 rounded-md flex items-center justify-center p-1.5" style={{ background: p.bg }}>
                  <img
                    src={p.src}
                    alt={p.label}
                    className="h-full w-full object-contain"
                    style={{ filter: p.invert ? 'brightness(0) invert(1)' : 'none' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 border-t border-pebble/30 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex flex-wrap justify-center gap-4 text-xs font-body text-stone">
            <Link to="/terms" className="hover:text-primary transition-colors">Legal</Link>
            <span className="text-pebble/40">·</span>
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link>
            <span className="text-pebble/40">·</span>
            <Link to="/shipping-policy" className="hover:text-primary transition-colors">Shipping & Returns</Link>
            <span className="text-pebble/40">·</span>
            <Link to="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link>
          </div>
          <p className="text-stone text-xs font-body text-center">© {new Date().getFullYear()} Big Dog Life™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}