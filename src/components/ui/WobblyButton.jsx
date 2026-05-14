import React from 'react';
import { motion } from 'framer-motion';

export default function WobblyButton({ children, className = '', onClick, href, as: Tag = 'button' }) {
  const inner = (
    <motion.span
      className={`inline-flex items-center justify-center gap-2 font-brand text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-xl border-bold shadow-cartoon bg-primary text-white cursor-pointer select-none ${className}`}
      whileHover={{
        scale: 1.06,
        rotate: [-1, 1, -1, 0],
        boxShadow: '6px 6px 0 #151515',
        transition: { rotate: { repeat: 2, duration: 0.15 }, scale: { duration: 0.2 } }
      }}
      whileTap={{ scale: 0.94, boxShadow: '2px 2px 0 #151515' }}
      onClick={onClick}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return <a href={href}>{inner}</a>;
  }
  return inner;
}