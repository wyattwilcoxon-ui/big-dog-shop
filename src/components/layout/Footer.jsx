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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/d990ddd54_generated_image.png" 
                alt="Big Dog Life" 
                className="w-16 h-16 object-contain"
              />
              <motion.h3
                animate={{ color: ['#FF69B4', '#FF7A28', '#FF69B4'] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="font-display text-4xl"
              >
                BIG DOG LIFE
              </motion.h3>
            </div>
            <p className="font-body text-stone text-sm leading-relaxed">
              Big dogs. Bigger energy. Zero apologies.
            </p>
            <p className="font-brand text-hotpink text-xs mt-3 leading-relaxed">"Because Big Dogs Have Big Needs."</p>
            <p className="font-brand text-stone text-xs mt-1">We give a $h!t. 💩</p>
          </div>

          <div>
            <h4 className="font-brand text-lg text-white mb-4">Shop</h4>
            <div className="flex flex-col gap-2">
              <Link to="/shop" className="text-stone hover:text-primary transition-colors font-body text-sm">All Products</Link>

              <Link to="/shop" className="text-stone hover:text-primary transition-colors font-body text-sm">Best Sellers</Link>
            </div>
          </div>

          <div>
            <h4 className="font-brand text-lg text-white mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-stone hover:text-primary transition-colors font-body text-sm">About Us</Link>
              <Link to="/pack" className="text-stone hover:text-primary transition-colors font-body text-sm">The Pack</Link>
              <Link to="/faq" className="text-stone hover:text-primary transition-colors font-body text-sm">FAQ</Link>
              <Link to="/contact" className="text-stone hover:text-primary transition-colors font-body text-sm">Contact</Link>
              <Link to="/why-big-dogs-need-bigger-poop-bags" className="text-stone hover:text-primary transition-colors font-body text-sm">Why Big Dogs Need Better Bags</Link>
            </div>
          </div>

          <div>
            <h4 className="font-brand text-lg text-white mb-4">Join the Pack</h4>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-hotpink text-white font-brand text-sm px-5 py-3 rounded-xl border-bold shadow-cartoon-sm mb-4"
            >
              #BosieBlast 💩
            </motion.a>
            <div className="flex flex-col gap-2">
              <a href="mailto:info@thebigdoglife.com" className="flex items-center gap-2 text-stone hover:text-primary transition-colors font-body text-sm">
                <Mail className="w-4 h-4" />info@thebigdoglife.com
              </a>
              <div className="flex items-center gap-2 text-stone font-body text-sm">
                <MapPin className="w-4 h-4" />Bellefontaine, Ohio
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-pebble/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-stone text-sm font-body">© {new Date().getFullYear()} Big Dog Life™. All rights reserved.</p>
          <p className="font-brand text-hotpink text-sm">Live Bold. Love Dogs. Give a $h!t. 🐾</p>
        </div>
      </div>
    </footer>
  );
}