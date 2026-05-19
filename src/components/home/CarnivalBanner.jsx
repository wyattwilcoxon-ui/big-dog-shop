import React from 'react';
import { motion } from 'framer-motion';

const PENNANT_COLORS = [
  'bg-primary', 'bg-secondary', 'bg-sky', 'bg-sandy',
  'bg-primary', 'bg-secondary', 'bg-sky', 'bg-sandy',
  'bg-primary', 'bg-secondary', 'bg-sky', 'bg-sandy',
  'bg-primary', 'bg-secondary', 'bg-sky', 'bg-sandy',
];

export default function CarnivalBanner({ className = '' }) {
  return (
    <div className={`w-full overflow-hidden py-2 ${className}`}>
      <div className="flex items-end justify-around flex-wrap gap-0">
        {PENNANT_COLORS.map((color, i) => (
          <motion.div
            key={i}
            className={`${color} border-2 border-midnight shadow-cartoon-sm flex-shrink-0`}
            style={{
              width: 36,
              height: 48,
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            }}
            animate={{ rotate: [i % 2 === 0 ? -4 : 4, i % 2 === 0 ? 4 : -4, i % 2 === 0 ? -4 : 4] }}
            transition={{ duration: 2.5 + (i % 3) * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
          />
        ))}
      </div>
      {/* String line */}
      <div className="h-1 bg-midnight mx-2 -mt-1 relative z-10" />
    </div>
  );
}