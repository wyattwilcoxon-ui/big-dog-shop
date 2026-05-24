import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedMarquee from '../home/AnimatedMarquee';

const TICKER = [
  'BIG DOG LIFE', 'GIVE A $H!T', 'BELLEFONTAINE OH', 'BOSA APPROVED',
  'BOSIE BAG™', 'LEAK PROOF', '#BOSIEBLAST', 'SINCE 2024',
];

export default function Footer() {
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
            <p className="font-brand text-primary text-[10px] sm:text-xs mt-2 sm:mt-3 leading-relaxed">"Because Big Dogs Have Big Needs."</p>
            <p className="font-brand text-stone text-[10px] sm:text-xs mt-1">We give a $h!t. 💩</p>
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
            <h4 className="font-brand text-base sm:text-lg text-white mb-3 sm:mb-4">Join the Pack</h4>
            <Link
              to="/join-the-pack"
              className="inline-flex items-center gap-1 sm:gap-2 bg-primary text-white font-brand text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-3 rounded-xl border-bold shadow-cartoon-sm mb-3 sm:mb-4 hover:bg-orange-hot transition-colors"
            >
              Get Early Access 🎉
            </Link>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <Link to="/contact" className="flex items-center gap-2 text-stone hover:text-primary transition-colors font-body text-xs sm:text-sm">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />Contact Us
              </Link>
              <div className="flex items-center gap-2 text-stone font-body text-xs sm:text-sm">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />Bellefontaine, Ohio
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-pebble/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-stone text-sm font-body">© {new Date().getFullYear()} Big Dog Life™. All rights reserved.</p>
          <p className="font-brand text-primary text-sm">Live Bold. Love Dogs. Give a $h!t. 🐾</p>
        </div>
      </div>
    </footer>
  );
}