import React from 'react';
import { motion } from 'framer-motion';

export default function StickerBadge({ children, color = 'bg-primary', rotation = -3, className = '' }) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: rotation - 10 }}
      whileInView={{ scale: 1, rotate: rotation }}
      whileHover={{ scale: 1.12, rotate: rotation + 4 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 500, damping: 15 }}
      className={`inline-flex items-center justify-center ${color} text-white font-brand px-4 py-2 rounded-2xl border-bold shadow-cartoon select-none ${className}`}
    >
      {children}
    </motion.div>
  );
}