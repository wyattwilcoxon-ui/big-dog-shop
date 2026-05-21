import React, { useState } from 'react';
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
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setCurrent(i => (i + 1) % REVIEWS.length);

  const review = REVIEWS[current];

  return (
    <section className="py-16 sm:py-24 overflow-hidden bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-display text-6xl sm:text-8xl text-center mb-10"
        >
          <span className="text-midnight">BIG DOG PARENTS</span>
          <br />
          <span className="text-primary">LOVE US</span>
        </motion.h2>

        {/* Card */}
        <div className="relative">
          {/* Quote badge */}
          <div className="absolute -top-5 -left-2 z-10 w-12 h-12 bg-secondary rounded-full flex items-center justify-center border-2 border-midnight shadow-cartoon-sm">
            <span className="text-marigold font-display text-xl">"</span>
          </div>

          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-midnight rounded-3xl p-8 sm:p-12 text-center"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1.5 mb-6">
              {Array(review.stars).fill(null).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-marigold fill-marigold" />
              ))}
            </div>

            <p className="font-body text-white text-xl sm:text-2xl leading-relaxed mb-8 max-w-xl mx-auto">
              "{review.text}"
            </p>

            {/* Avatar */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center border-2 border-secondary">
                <span className="font-display text-white text-2xl">{review.name[0]}</span>
              </div>
              <p className="font-display text-white text-lg tracking-wide">{review.name.toUpperCase()}</p>
              <p className="font-body text-stone text-sm">{review.dog}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prev} className="w-10 h-10 bg-marigold rounded-full flex items-center justify-center font-bold text-midnight hover:opacity-90 transition-colors">
                ‹
              </button>
              <div className="flex gap-2">
                {REVIEWS.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-midnight/20'}`} />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-bold text-white hover:bg-green-bright transition-colors">
                ›
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}