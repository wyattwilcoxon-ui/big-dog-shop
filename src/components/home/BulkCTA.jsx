import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function BulkCTA() {
  return (
    <section className="py-16 sm:py-24 bg-primary/85">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="font-display text-5xl sm:text-7xl text-white mb-4">
            GOT A LOT OF $H!T TO HANDLE?
          </h2>
          <p className="font-body text-white/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Dog walkers, groomers, kennels, shelters, or just a household that goes through bags like it's a competitive sport? Hit us up for bulk pricing. We don't judge.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-midnight text-white font-brand text-lg px-8 py-4 rounded-xl shadow-cartoon border-2 border-white transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            <Mail className="w-5 h-5" />
            Contact Us for Bulk Orders
          </a>
        </motion.div>
      </div>
    </section>
  );
}