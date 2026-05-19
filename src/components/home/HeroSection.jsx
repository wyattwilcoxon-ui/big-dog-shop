import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

const ROTATING_WORDS = ['ENERGY', 'POOPS', 'BAGS', 'DOGS', 'LIFE'];

const FLOATING = [
  { emoji: '💩', left: '8%', top: '20%', size: '2rem', delay: 0 },
  { emoji: '🐾', left: '82%', top: '25%', size: '1.8rem', delay: 0.5 },
  { emoji: '⭐', left: '72%', top: '55%', size: '2rem', delay: 1 },
  { emoji: '🦴', left: '15%', top: '60%', size: '1.8rem', delay: 0.8 },
  { emoji: '🦴', left: '90%', top: '70%', size: '1.6rem', delay: 1.3 },
  { emoji: '🐕', left: '5%', top: '45%', size: '1.7rem', delay: 0.4 },
];

export default function HeroSection({ heroImage }) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIndex(i => (i + 1) % ROTATING_WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const imgX = useTransform(mouseX, [-500, 500], [-10, 10]);
  const imgY = useTransform(mouseY, [-400, 400], [-7, 7]);

  return (
    <section
      className="relative min-h-[90vh] sm:min-h-screen overflow-hidden bg-midnight"
      onMouseMove={e => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.width / 2);
        mouseY.set(e.clientY - rect.height / 2);
      }}
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ x: imgX, y: imgY }}>
        <img src={heroImage} alt="Big dog" className="w-full h-full object-cover opacity-60 scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent" />
      </motion.div>

      {/* Floating custom icons — subtle */}
      {FLOATING.map((item, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none opacity-30"
          style={{ left: item.left, top: item.top, fontSize: item.size }}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}
        >
          {item.emoji}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end min-h-[90vh] sm:min-h-screen pb-16 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 border border-white/30 text-white/80 font-brand text-sm px-5 py-2 rounded-full mb-6"
          >
            🦴 THE PREMIER POOP BAG 🦴
          </motion.div>

          {/* Headline — big single word style */}
          <div className="h-[8rem] sm:h-[12rem] md:h-[15rem] overflow-hidden mb-2">
            <AnimatePresence mode="wait">
              <motion.h1
                key={wordIndex}
                className="font-display leading-none text-white"
                style={{ fontSize: 'clamp(6rem, 20vw, 18rem)' }}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
              >
                {ROTATING_WORDS[wordIndex]}
                <span className="text-primary text-[0.3em]">!</span>
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-body text-xl sm:text-2xl text-white max-w-xl mt-2 leading-relaxed"
          >
            Finally, poop bags for the <strong>really big jobs.</strong><br />
            Extra-large. Extra-strong. <span className="text-secondary">Zero shame.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <Link to="/shop">
              <motion.div
                className="group inline-flex items-center gap-3 bg-primary text-white font-brand text-lg px-8 py-4 rounded-full cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                ⚡ GET THE BOSIE BAG
              </motion.div>
            </Link>
            <Link to="/pack">
              <motion.div
                className="inline-flex items-center gap-3 bg-yellow-400 text-midnight font-brand text-lg px-8 py-4 rounded-full cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                SEE WHY IT WORKS
              </motion.div>
            </Link>
          </motion.div>

          {/* Social proof pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-brand text-sm px-4 py-2 rounded-full">
              ⭐⭐⭐⭐⭐ <span className="text-green-bright font-bold">4.9</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#FF69B4] text-white font-brand text-sm px-4 py-2 rounded-full">
              🐾 2,847+ Happy Dogs
            </div>
            <div className="inline-flex items-center gap-2 bg-secondary text-white font-brand text-sm px-4 py-2 rounded-full">
              🚚 FREE SHIPPING
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div animate={{ y: [0, 14, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-2 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}