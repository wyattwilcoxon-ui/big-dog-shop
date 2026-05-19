import React from 'react';
import { motion } from 'framer-motion';

const SEPARATORS = ['💩', '🐾', '🐕', '🦴'];

function MarqueeItem({ text, index }) {
  return (
    <span className="inline-flex items-center gap-3 flex-shrink-0 mx-4">
      <span>{SEPARATORS[index % SEPARATORS.length]}</span>
      <span>{text}</span>
    </span>
  );
}

export default function AnimatedMarquee({ items, bg = 'bg-primary', textColor = 'text-white', speed = 30, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className={`${bg} py-3 border-y-4 border-midnight overflow-hidden`}>
      <motion.div
        className={`flex whitespace-nowrap ${textColor} font-display text-xl sm:text-2xl`}
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <MarqueeItem key={i} text={item} index={i} />
        ))}
      </motion.div>
    </div>
  );
}