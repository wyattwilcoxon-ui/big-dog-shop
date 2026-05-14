import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-midnight text-cream">
      {/* Marquee ticker */}
      <div className="overflow-hidden py-4 border-b-4 border-primary">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="font-display text-4xl sm:text-5xl text-primary/80 mx-8">
              BIG DOG LIFE — LEAK PROOF — 13" × 15" — WE GIVE A $H!T — 70+ LBS — BELLEFONTAINE OH —
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-4xl text-primary mb-4">BIG DOG LIFE</h3>
            <p className="font-body text-stone text-sm leading-relaxed">
              Big dogs. Bigger energy. Zero apologies. The only brand that gives a $h!t — literally.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-brand text-lg text-white mb-4">Shop</h4>
            <div className="flex flex-col gap-2">
              <Link to="/shop" className="text-stone hover:text-primary transition-colors font-body">All Products</Link>
              <Link to="/bundles" className="text-stone hover:text-primary transition-colors font-body">Bundles</Link>
              <Link to="/shop" className="text-stone hover:text-primary transition-colors font-body">Best Sellers</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-brand text-lg text-white mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              <Link to="/pack" className="text-stone hover:text-primary transition-colors font-body">The Pack</Link>
              <Link to="/faq" className="text-stone hover:text-primary transition-colors font-body">FAQ</Link>
              <a href="mailto:info@bigdoglife.com" className="text-stone hover:text-primary transition-colors font-body">Contact</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-brand text-lg text-white mb-4">Get In Touch</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@bigdoglife.com" className="flex items-center gap-2 text-stone hover:text-primary transition-colors font-body text-sm">
                <Mail className="w-4 h-4" />
                info@bigdoglife.com
              </a>
              <div className="flex items-center gap-2 text-stone font-body text-sm">
                <MapPin className="w-4 h-4" />
                Bellefontaine, Ohio
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-pebble/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-stone text-sm font-body">
            © {new Date().getFullYear()} Big Dog Life™. All rights reserved.
          </p>
          <p className="font-brand text-primary text-sm">
            Live Bold. Love Dogs. Give a $h!t. 🐾
          </p>
        </div>
      </div>
    </footer>
  );
}