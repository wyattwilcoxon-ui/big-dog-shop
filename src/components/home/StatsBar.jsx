import React from 'react';
import { motion } from 'framer-motion';
import CountUp from '../ui/CountUp';

const STATS = [
  { emoji: '🐾', value: 44, suffix: '%', label: 'Bigger Than Other Bags' },
  { emoji: '🧻', value: 120, suffix: '', label: 'Bags Per 8-Pack' },
  { emoji: '🐕', value: 70, suffix: '+', label: 'Lbs? No Problem.' },
  { emoji: '💩', value: 0, suffix: '', label: 'Leaks. Zero. None.' },
];

export default function StatsBar() {
  return (
    <section className="bg-midnight py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-4xl sm:text-5xl text-white">THE NUMBERS DON'T LIE</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -3 : 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              whileHover={{ scale: 1.06, rotate: i % 2 === 0 ? -2 : 2 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, type: 'spring', stiffness: 200 }}
              className="text-center bg-white/5 rounded-2xl border border-white/10 p-4 sm:p-6"
            >
              <motion.div
                className="flex justify-center mb-2 text-4xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
              >
                {stat.emoji}
              </motion.div>
              <div className="font-display text-5xl sm:text-6xl text-primary">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-brand text-stone text-xs sm:text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}