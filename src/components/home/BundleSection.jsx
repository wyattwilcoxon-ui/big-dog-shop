import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function BundleSection() {
  return (
    <section className="py-16 sm:py-24 bg-cream" id="bundles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-brand text-secondary text-lg mb-2">The Full Package</p>
          <h2 className="font-display text-5xl sm:text-7xl text-midnight">BUNDLE & SAVE</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border-bold shadow-cartoon overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="bg-green-dark p-8 sm:p-12 flex items-center justify-center min-h-[300px]">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/bundle-3pack-aNiTQbhzy8ugUAt2MDNmVN.webp"
                alt="Big Dog Life 3-Pack Bundle"
                className="max-h-80 object-contain"
              />
            </div>

            {/* Info */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <span className="inline-block bg-secondary text-white font-brand text-xs px-3 py-1 rounded-full w-fit shadow-cartoon-sm mb-4">
                🎁 3-Pack Bundle
              </span>
              <h3 className="font-display text-4xl sm:text-5xl text-midnight mb-2">THE BIG DOG BUNDLE</h3>
              <p className="font-brand text-pebble text-lg mb-6">Walk Day Essentials</p>
              <p className="font-body text-pebble leading-relaxed mb-6">
                Everything you need for the perfect walk: bags for the business, a dispenser so you're not digging through pockets, and tennis balls for the celebration lap.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'The Bosie Bag™ 8-Pack (120 bags)',
                  'Bone-shaped bag dispenser with carabiner clip',
                  '3 Big Dog Life branded tennis balls',
                  'Free US shipping',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-midnight text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4">
                <span className="font-brand text-stone text-sm">Price TBA</span>
                <button className="bg-secondary text-white font-brand px-6 py-3 rounded-xl shadow-cartoon-sm border-bold transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-green-bright">
                  Get Notified 🔔
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="text-center font-body text-stone mt-8 text-sm">
          More bundles coming soon. We've got big plans. (Get it? 🐾)
        </p>
      </div>
    </section>
  );
}