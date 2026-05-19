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
    <section className="bg-midnight border-y-4 border-primary py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-2 text-4xl">
                {stat.emoji}
              </div>
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