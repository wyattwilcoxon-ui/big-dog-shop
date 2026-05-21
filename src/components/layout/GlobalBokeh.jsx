import React from 'react';
import { motion } from 'framer-motion';

const ORBS = [
  { emoji: '🦴', left: '5%',  top: '10%', size: '8rem',  delay: 0,   dur: 45, driftX: 80,  driftY: 120, opacity: 0.18 },
  { emoji: '🐾', left: '70%', top: '5%',  size: '7rem',  delay: 5,   dur: 55, driftX: -70, driftY: 130, opacity: 0.15 },
  { emoji: '🐾', left: '85%', top: '30%', size: '9rem',  delay: 2,   dur: 60, driftX: -90, driftY: 100, opacity: 0.18 },
  { emoji: '🦴', left: '10%', top: '45%', size: '6rem',  delay: 8,   dur: 50, driftX: 100, driftY: -80, opacity: 0.15 },
  { emoji: '🐾', left: '55%', top: '60%', size: '10rem', delay: 3,   dur: 65, driftX: -60, driftY: -100,opacity: 0.12 },
  { emoji: '🐾', left: '20%', top: '75%', size: '7rem',  delay: 10,  dur: 52, driftX: 110, driftY: -70, opacity: 0.16 },
  { emoji: '🦴', left: '80%', top: '70%', size: '8rem',  delay: 4,   dur: 58, driftX: -80, driftY: -110,opacity: 0.14 },
  { emoji: '🦴', left: '40%', top: '20%', size: '6rem',  delay: 7,   dur: 48, driftX: 70,  driftY: 90,  opacity: 0.13 },
  { emoji: '🐾', left: '3%',  top: '85%', size: '9rem',  delay: 12,  dur: 62, driftX: 120, driftY: -60, opacity: 0.15 },
  { emoji: '🦴', left: '90%', top: '55%', size: '7rem',  delay: 6,   dur: 55, driftX: -100,driftY: 80,  opacity: 0.16 },
];

export default function GlobalBokeh() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {ORBS.map((b, i) => (
        <motion.div
          key={i}
          className="absolute select-none"
          style={{
            left: b.left,
            top: b.top,
            fontSize: b.size,
            lineHeight: 1,
            filter: 'blur(6px)',
            opacity: b.opacity,
            userSelect: 'none',
          }}
          animate={{
            x: [0, b.driftX, b.driftX * 0.4, -b.driftX * 0.6, 0],
            y: [0, b.driftY * 0.5, b.driftY, b.driftY * 0.3, 0],
            rotate: [0, 15, -10, 8, 0],
            opacity: [b.opacity, b.opacity * 1.6, b.opacity * 1.2, b.opacity * 1.8, b.opacity],
          }}
          transition={{
            delay: b.delay,
            duration: b.dur,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {b.emoji}
        </motion.div>
      ))}
    </div>
  );
}