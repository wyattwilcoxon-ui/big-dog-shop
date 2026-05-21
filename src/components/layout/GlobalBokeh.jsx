import React from 'react';
import { motion } from 'framer-motion';

// All brand colors at varying opacities
const ORBS = [
  { left: '5%',  top: '10%', size: 220, color: 'rgba(244,97,14,0.32)',   delay: 0,   dur: 18, driftX: 120,  driftY: 180 },
  { left: '70%', top: '5%',  size: 160, color: 'rgba(245,166,35,0.28)',  delay: 2,   dur: 22, driftX: -100, driftY: 200 },
  { left: '85%', top: '30%', size: 200, color: 'rgba(42,145,52,0.22)',   delay: 1,   dur: 26, driftX: -140, driftY: 150 },
  { left: '10%', top: '45%', size: 180, color: 'rgba(91,184,212,0.25)',  delay: 3,   dur: 20, driftX: 160,  driftY: -120 },
  { left: '55%', top: '60%', size: 240, color: 'rgba(244,97,14,0.20)',   delay: 0.5, dur: 30, driftX: -80,  driftY: -160 },
  { left: '20%', top: '75%', size: 150, color: 'rgba(255,105,180,0.22)', delay: 4,   dur: 24, driftX: 200,  driftY: -100 },
  { left: '80%', top: '70%', size: 190, color: 'rgba(245,166,35,0.25)',  delay: 1.5, dur: 28, driftX: -120, driftY: -180 },
  { left: '40%', top: '20%', size: 130, color: 'rgba(91,184,212,0.20)',  delay: 2.5, dur: 22, driftX: 100,  driftY: 140  },
  { left: '3%',  top: '85%', size: 170, color: 'rgba(42,145,52,0.18)',   delay: 3.5, dur: 32, driftX: 180,  driftY: -80  },
  { left: '90%', top: '55%', size: 145, color: 'rgba(255,105,180,0.18)', delay: 0.8, dur: 25, driftX: -160, driftY: 120  },
];

export default function GlobalBokeh() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 10 }}>
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
            filter: 'blur(55px)',
            mixBlendMode: 'screen',
          }}
          animate={{
            x: [0, b.driftX, b.driftX * 0.4, -b.driftX * 0.6, 0],
            y: [0, b.driftY * 0.5, b.driftY, b.driftY * 0.3, 0],
            scale: [1, 1.15, 0.9, 1.1, 1],
            opacity: [0.6, 0.9, 0.7, 1, 0.6],
          }}
          transition={{
            delay: b.delay,
            duration: b.dur,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}