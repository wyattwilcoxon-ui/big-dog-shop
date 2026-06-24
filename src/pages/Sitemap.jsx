import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const SITEMAP = [
  {
    heading: 'Shop',
    links: [
      { label: 'All Products', to: '/shop' },
      { label: 'Bosie Bag™', to: '/product/bosie-bag' },
      { label: 'Clip & Go™', to: '/product/clip-and-go' },
      { label: 'The Big Ones™', to: '/product/tennis-balls' },
      { label: 'Starter Bundle', to: '/product/starter-bundle' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About Us', to: '/about' },
      { label: 'The Pack', to: '/pack' },
      { label: 'Why Big Dogs', to: '/why-big-dogs-need-bigger-poop-bags' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Contact', to: '/contact' },
      { label: 'Join The Pack', to: '/join' },
      { label: 'Socials', to: '/links' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Shipping & Returns', to: '/shipping-policy' },
      { label: 'Refund Policy', to: '/refund-policy' },
      { label: 'Accessibility', to: '/accessibility' },
      { label: 'Contact Legal', to: '/contact-legal' },
    ],
  },
];

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-midnight pt-20 pb-12 sm:pt-32 sm:pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white leading-tight">SITEMAP</h1>
            <p className="font-body text-stone text-base sm:text-lg mt-4 max-w-xl">
              Every page on Big Dog Life, all in one place.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Link to="/" className="inline-flex items-center gap-2 font-brand text-sm text-pebble hover:text-primary transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {SITEMAP.map((col, i) => (
            <motion.div
              key={col.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="font-display text-2xl sm:text-3xl text-midnight mb-4">{col.heading}</h2>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="font-body text-base text-pebble hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}