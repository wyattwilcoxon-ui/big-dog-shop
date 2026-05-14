import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const REVIEWS = [
  { name: 'Sarah K.', dog: 'Great Dane · Ohio', stars: 5, text: 'Finally a bag that fits. My Dane is 140lbs. Game changer.' },
  { name: 'Tom R.', dog: 'Rottweiler · NYC', stars: 5, text: 'I literally applauded myself on my first walk. One bag. Done. Chef\'s kiss.' },
  { name: 'Jamie L.', dog: 'German Shepherd · LA', stars: 5, text: 'Sent 10 packs to my entire dog park group chat. We are all reformed now.' },
  { name: 'Maya P.', dog: 'Mastiff · Chicago', stars: 5, text: 'My Mastiff weighs more than me. These bags are the only ones that understand his energy.' },
  { name: 'Alex B.', dog: 'Bernese · Portland', stars: 5, text: 'The bone dispenser clips on my leash and now I look like I have my life together. I don\'t, but still.' },
  { name: 'Jordan W.', dog: 'Great Dane · Austin', stars: 5, text: 'Bosa would be proud. My Great Dane produces similarly legendary quantities. We are covered.' },
];

export default function TestimonialScroll() {
  return (
    <section className="py-16 sm:py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="font-brand text-primary text-lg mb-2">Don't Take Our Word For It</p>
          <h2 className="font-display text-5xl sm:text-7xl text-midnight">THE PACK SPEAKS</h2>
        </motion.div>

        {/* Auto-scroll row */}
        <div className="relative">
          <motion.div
            className="flex gap-5"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[...REVIEWS, ...REVIEWS].map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-2xl border-bold shadow-cartoon p-6"
              >
                <div className="flex gap-1 mb-3">
                  {Array(review.stars).fill(null).map((_, si) => (
                    <Star key={si} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="font-body text-pebble text-sm leading-relaxed mb-4">
                  "{review.text}"
                </p>
                <div>
                  <p className="font-brand text-midnight text-sm">{review.name}</p>
                  <p className="font-body text-stone text-xs">{review.dog}</p>
                </div>
              </div>
            ))}
          </motion.div>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}