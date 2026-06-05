import React from 'react';
import { motion } from 'framer-motion';

const SEPARATORS = ['⭐', '🐾', '💩', '🦴', '⭐', '🐕', '🐾', '🦴'];

function MarqueeItem({ text, index }) {
  return (
    <span className="inline-flex items-center gap-3 flex-shrink-0 mx-3">
      <span className="text-lg opacity-70">{SEPARATORS[index % SEPARATORS.length]}</span>
      <span className="tracking-widest">{text}</span>
    </span>
  );
}

export default function AnimatedMarquee({ items, bg = 'bg-primary', textColor = 'text-white', speed = 30, reverse = false }) {
  const tripled = [...items, ...items, ...items];
  return (
    <div className={`${bg} py-3 overflow-hidden relative`}>
      <motion.div
        className={`flex whitespace-nowrap ${textColor} font-display text-2xl sm:text-3xl`}
        animate={{ x: reverse ? ['-33.33%', '0%'] : ['0%', '-33.33%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
      >
        {tripled.map((item, i) => (
          <MarqueeItem key={i} text={item} index={i} />
        ))}
      </motion.div>
    </div>
  );
}