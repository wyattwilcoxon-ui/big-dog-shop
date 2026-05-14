import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedMarquee({ items, bg = 'bg-primary', textColor = 'text-white', speed = 25, reverse = false }) {
  const doubled = [...items, ...items];

  return (
    <div className={`${bg} py-4 border-y-4 border-midnight overflow-hidden`}>
      <motion.div
        className="flex gap-0 whitespace-nowrap"
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className={`${textColor} font-display text-2xl sm:text-3xl mx-6 flex-shrink-0`}>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}