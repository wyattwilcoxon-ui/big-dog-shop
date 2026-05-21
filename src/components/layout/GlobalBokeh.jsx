import React from 'react';
import { motion } from 'framer-motion';

const ORBS = [
  { left: '5%',  top: '8%',  size: 160, color: 'rgba(244,97,14,0.12)',  delay: 0,   dur: 9  },
  { left: '80%', top: '5%',  size: 120, color: 'rgba(245,166,35,0.10)', delay: 1,   dur: 11 },
  { left: '92%', top: '22%', size: 180, color: 'rgba(244,97,14,0.08)',  delay: 0.5, dur: 13 },
  { left: '2%',  top: '35%', size: 130, color: 'rgba(245,166,35,0.09)', delay: 2,   dur: 10 },
  { left: '88%', top: '48%', size: 200, color: 'rgba(244,97,14,0.07)',  delay: 0.8, dur: 14 },
  { left: '10%', top: '60%', size: 110, color: 'rgba(245,166,35,0.08)', delay: 1.5, dur: 8  },
  { left: '75%', top: '70%', size: 150, color: 'rgba(244,97,14,0.09)',  delay: 0.3, dur: 12 },
  { left: '50%', top: '15%', size: 90,  color: 'rgba(255,255,255,0.05)',delay: 1.2, dur: 16 },
  { left: '3%',  top: '80%', size: 140, color: 'rgba(244,97,14,0.07)',  delay: 2.5, dur: 10 },
  { left: '85%', top: '88%', size: 100, color: 'rgba(245,166,35,0.08)', delay: 0.6, dur: 9  },
];

export default function GlobalBokeh() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {ORBS.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: b.left,
            top: b.top,
            width: b.size,
            height: b.size,
            background: b.color,
            filter: 'blur(50px)',
          }}
          animate={{ y: [0, -30, 0], x: [0, 10, 0], scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ delay: b.delay, duration: b.dur, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}