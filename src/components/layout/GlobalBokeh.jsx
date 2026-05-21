import React from 'react';
import { motion } from 'framer-motion';

const ORBS = [
  { emoji: '🦴', left: '5%',  top: '10%', size: '8rem',  delay: 0,   dur: 18, driftX: 120,  driftY: 180,  opacity: 0.18 },
  { emoji: '💩', left: '70%', top: '5%',  size: '7rem',  delay: 2,   dur: 22, driftX: -100, driftY: 200,  opacity: 0.15 },
  { emoji: '🐾', left: '85%', top: '30%', size: '9rem',  delay: 1,   dur: 26, driftX: -140, driftY: 150,  opacity: 0.20 },
  { emoji: '🦴', left: '10%', top: '45%', size: '6rem',  delay: 3,   dur: 20, driftX: 160,  driftY: -120, opacity: 0.15 },
  { emoji: '💩', left: '55%', top: '60%', size: '10rem', delay: 0.5, dur: 30, driftX: -80,  driftY: -160, opacity: 0.12 },
  { emoji: '🐾', left: '20%', top: '75%', size: '7rem',  delay: 4,   dur: 24, driftX: 200,  driftY: -100, opacity: 0.18 },
  { emoji: '🦴', left: '80%', top: '70%', size: '8rem',  delay: 1.5, dur: 28, driftX: -120, driftY: -180, opacity: 0.16 },
  { emoji: '💩', left: '40%', top: '20%', size: '6rem',  delay: 2.5, dur: 22, driftX: 100,  driftY: 140,  opacity: 0.13 },
  { emoji: '🐾', left: '3%',  top: '85%', size: '9rem',  delay: 3.5, dur: 32, driftX: 180,  driftY: -80,  opacity: 0.15 },
  { emoji: '🦴', left: '90%', top: '55%', size: '7rem',  delay: 0.8, dur: 25, driftX: -160, driftY: 120,  opacity: 0.17 },
];

export default function GlobalBokeh() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 10 }}>
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