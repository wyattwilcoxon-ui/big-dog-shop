import React from 'react';
import { motion } from 'framer-motion';

const PROPS = [
  {
    emoji: '🛡️',
    title: 'Built for Big Breeds',
    description: 'Extra-thick bags engineered for large and giant breed dogs. Strong enough for the biggest output.',
    bg: 'bg-orange-pale',
    border: 'border-primary',
    rotate: -1.5,
  },
  {
    emoji: '📏',
    title: 'Size Matters',
    description: '12" × 14" — built for large and giant breed dogs. Because your big dog doesn\'t make chihuahua poops.',
    bg: 'bg-secondary/10',
    border: 'border-secondary',
    rotate: 1,
  },
  {
    emoji: '🌱',
    title: 'USDA Certified Biobased',
    description: 'Made from 38% plant-based materials. Biodegradable film. Good for your dog. Good for the planet.',
    bg: 'bg-sky/20',
    border: 'border-sky',
    rotate: -1,
  },
  {
    emoji: '🐾',
    title: 'Made by Dog People',
    description: 'Real big-dog owners from Bellefontaine, Ohio who got tired of the same crappy bags. Pun intended.',
    bg: 'bg-sandy/20',
    border: 'border-sandy',
    rotate: 1.5,
  },
];

export default function ValueProps() {
  return (
    <section className="py-16 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-4xl sm:text-6xl text-midnight">WHY BIG DOG LIFE?</h2>
          <p className="font-brand text-pebble mt-2 text-lg">Built by big dog owners, for big dog owners.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROPS.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 40, rotate: prop.rotate }}
              whileInView={{ opacity: 1, y: 0, rotate: prop.rotate }}
              whileHover={{ rotate: 0, y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl border-bold shadow-cartoon-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all p-6 cursor-default"
            >
              <motion.div
                className="mb-4 text-5xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4 + i * 0.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                {prop.emoji}
              </motion.div>
              <h3 className={`font-brand text-lg mb-2 ${prop.dark ? 'text-white' : 'text-midnight'}`}>
                {prop.title}
              </h3>
              <p className={`font-body text-sm leading-relaxed ${prop.dark ? 'text-white/70' : 'text-pebble'}`}>
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}