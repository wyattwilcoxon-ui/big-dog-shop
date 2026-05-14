import React from 'react';
import { motion } from 'framer-motion';
import CountUp from '../ui/CountUp';

const STATS = [
  { value: 44, suffix: '%', label: 'Bigger Than Other Bags', emoji: '📏' },
  { value: 120, suffix: '', prefix: '', label: 'Bags Per 8-Pack', emoji: '🧻' },
  { value: 70, suffix: '+', prefix: '', label: 'Lbs? No Problem.', emoji: '🐕' },
  { value: 0, suffix: '', prefix: '', label: 'Leaks. Zero. None.', emoji: '💧' },
];

export default function StatsBar() {
  return (
    <section className="bg-midnight border-y-4 border-primary py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2 + i * 0.4, ease: 'easeInOut' }}
                className="text-4xl mb-2"
              >
                {stat.emoji}
              </motion.div>
              <div className="font-display text-5xl sm:text-6xl text-primary">
                <CountUp end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="font-brand text-stone text-xs sm:text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}