import React from 'react';
import { motion } from 'framer-motion';

const SEPARATORS = ['⭐', '🎪', '🎡', '🎠', '⭐', '💩', '🐾', '🦴'];

function MarqueeItem({ text, index }) {
  return (
    <span className="inline-flex items-center gap-3 flex-shrink-0 mx-3">
      <motion.span
        className="text-lg"
        animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 3 + (index % 3), repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
      >
        {SEPARATORS[index % SEPARATORS.length]}
      </motion.span>
      <span className="tracking-widest">{text}</span>
    </span>
  );
}

export default function AnimatedMarquee({ items, bg = 'bg-primary', textColor = 'text-white', speed = 30, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className={`${bg} py-4 border-y-[5px] border-midnight overflow-hidden relative`}
      style={{
        backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 18px, rgba(0,0,0,0.07) 18px, rgba(0,0,0,0.07) 36px)`
      }}
    >
      <motion.div
        className={`flex whitespace-nowrap ${textColor} font-display text-2xl sm:text-3xl`}
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