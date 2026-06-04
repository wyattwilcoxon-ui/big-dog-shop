import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function SizeComparison() {
  return (
    <section className="py-16 sm:py-24 bg-midnight overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <p className="font-brand text-primary text-lg mb-2">Let's Talk Size</p>
          <h2 className="font-display text-5xl sm:text-7xl text-white">SIZE MATTERS</h2>
          <p className="font-body text-stone mt-4 text-lg max-w-lg mx-auto">
            We said what we said. If your dog's output requires a strategy session, you need The Bosie Bag™.
          </p>
        </motion.div>

        {/* Visual Size Comparison */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-36 h-48 bg-stone/30 rounded-xl border-2 border-dashed border-stone flex items-center justify-center">
              <span className="font-display text-2xl text-stone">9"×12"</span>
            </div>
            <p className="font-brand text-stone mt-3">"Regular" Bags</p>
            <p className="font-body text-stone/60 text-sm">(good luck)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-52 h-60 bg-primary/20 rounded-xl border-4 border-primary flex flex-col items-center justify-center shadow-cartoon">
              <span className="font-display text-3xl text-primary">12"×13.5"</span>
              <span className="font-brand text-white text-sm mt-2 bg-primary px-3 py-1 rounded-full">28% BIGGER</span>
            </div>
            <p className="font-brand text-white mt-3">The Bosie Bag™</p>
            <p className="font-body text-stone text-sm">(room to spare)</p>
          </motion.div>
        </div>

        {/* Feature Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border-bold overflow-hidden shadow-cartoon max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-3 bg-midnight text-white p-4">
            <span className="font-brand text-sm">Feature</span>
            <span className="font-brand text-sm text-center">Other Guys</span>
            <span className="font-brand text-sm text-center text-primary">Bosie Bag™</span>
          </div>
          {[
            ['Bag Size', '9" × 12"', '12" × 13.5"'],
            ['Built for Large & Giant Breeds', false, true],
            ['USDA Certified Biobased', false, true],
            ['Materials', 'Unknown plastics', 'Plant-based film'],
            ['Capacity', 'Chihuahua', 'Great Dane'],
          ].map(([feature, other, bosie], i) => (
            <div key={i} className={`grid grid-cols-3 p-4 ${i % 2 === 0 ? 'bg-cream' : 'bg-white'} border-t-2 border-fog`}>
              <span className="font-body text-sm text-midnight font-semibold">{feature}</span>
              <span className="text-center">
                {typeof other === 'boolean'
                  ? other
                    ? <Check className="w-5 h-5 text-secondary mx-auto" />
                    : <X className="w-5 h-5 text-destructive mx-auto" />
                  : <span className="font-body text-sm text-pebble">{other}</span>
                }
              </span>
              <span className="text-center">
                {typeof bosie === 'boolean'
                  ? bosie
                    ? <Check className="w-5 h-5 text-secondary mx-auto" />
                    : <X className="w-5 h-5 text-destructive mx-auto" />
                  : <span className="font-body text-sm text-primary font-bold">{bosie}</span>
                }
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}