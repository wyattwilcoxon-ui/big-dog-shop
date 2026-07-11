import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BundleSection() {
  return (
    <section className="py-16 sm:py-24 bg-cream" id="bundles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
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
                🎁 Best Value
              </span>
              <h3 className="font-display text-4xl sm:text-5xl text-midnight mb-2">BIG DOG LIFE™ STARTER BUNDLE</h3>
              <p className="font-brand text-pebble text-lg mb-6">The Complete Walk Kit</p>
              <p className="font-body text-pebble leading-relaxed mb-6">
                Everything you need for the big dog life - in one pack. 1,080 Bosie Bag® 12" x 13.5" oversized waste bags, a Clip & Go Dispenser Pouch with one starter roll already inside, and three Big Dog Life™ The Big Ones tennis balls.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  '1,080 Bosie Bag® waste bags (9 rolls x 120 bags)',
                  'Clip & Go Dispenser with starter roll included',
                  '3 Big Ones™ Tennis Balls - standard 2.5" size',
                  'Retail-ready packaging',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-midnight text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4">
                <Link to="/shop" className="bg-secondary text-white font-brand px-6 py-3 rounded-xl shadow-cartoon-sm border-bold transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-green-bright">
                  Shop Now 🐾
                </Link>
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