import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, ArrowRight } from 'lucide-react';
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-center">

        {/* Brand */}
        <motion.h3
          animate={{ color: ['#F4610E', '#FF7A28', '#F4610E'] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="font-display text-5xl sm:text-6xl mb-2"
        >
          BIG DOG LIFE
        </motion.h3>
        <p className="font-body text-stone text-sm mb-8">Big dogs. Bigger energy. Zero apologies.</p>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 font-body text-sm">
          <Link to="/shop" className="text-stone hover:text-primary transition-colors">Shop</Link>
          <Link to="/about" className="text-stone hover:text-primary transition-colors">About</Link>
          <Link to="/pack" className="text-stone hover:text-primary transition-colors">The Pack</Link>
          <Link to="/faq" className="text-stone hover:text-primary transition-colors">FAQ</Link>
          <Link to="/contact" className="text-stone hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Email signup */}
        <p className="font-brand text-white text-sm mb-3 uppercase tracking-wide">Get the latest updates</p>
        <form onSubmit={handleSubmit} className="flex max-w-sm mx-auto mb-2">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
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
        {status === 'success' && <p className="font-body text-green-bright text-sm mb-4">You're in! 🐾</p>}
        {status === 'error' && <p className="font-body text-destructive text-sm mb-4">Something went wrong. Try again.</p>}

        {/* Socials */}
        <div className="flex justify-center gap-5 mt-6 mb-8">
          <a href="https://instagram.com/bigdoglife.og" target="_blank" rel="noopener noreferrer" className="text-stone hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://facebook.com/bigdoglife.og" target="_blank" rel="noopener noreferrer" className="text-stone hover:text-primary transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        {/* Payment logos */}
        <div className="border-t border-pebble/30 pt-6 mb-6">
          <div className="flex flex-wrap justify-center gap-2">
            {PAYMENT_LOGOS.map(p => (
              <div key={p.label} title={p.label} className="h-8 w-12 rounded-md flex items-center justify-center p-1.5" style={{ background: p.bg }}>
                <img src={p.src} alt={p.label} className="h-full w-full object-contain" style={{ filter: p.invert ? 'brightness(0) invert(1)' : 'none' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-pebble/30 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex flex-wrap justify-center gap-4 text-xs font-body text-stone">
            <Link to="/terms" className="hover:text-primary transition-colors">Legal</Link>
            <span className="text-pebble/40">·</span>
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link>
            <span className="text-pebble/40">·</span>
            <Link to="/shipping-policy" className="hover:text-primary transition-colors">Shipping & Returns</Link>
            <span className="text-pebble/40">·</span>
            <Link to="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link>
          </div>
          <p className="text-stone text-xs font-body">© {new Date().getFullYear()} Big Dog Life™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}