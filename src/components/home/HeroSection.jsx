import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
const ROTATING_WORDS = ['ENERGY', 'POOPS', 'BAGS', 'DOGS', 'LIFE'];

const FLOATING = [
  { emoji: '💩', left: '8%', top: '20%', size: '2rem', delay: 0 },
  { emoji: '🐾', left: '82%', top: '25%', size: '1.8rem', delay: 0.5 },
  { emoji: '💩', left: '72%', top: '55%', size: '1.6rem', delay: 1 },
  { emoji: '🐾', left: '15%', top: '60%', size: '1.7rem', delay: 0.8 },
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
            className="inline-flex items-center gap-2 bg-primary/20 border-2 border-primary text-primary font-brand text-sm px-4 py-2 rounded-full mb-6"
          >
            💩 Big dogs. Big poops. Bigger bags.
          </motion.div>

          {/* Headline */}
          <h1 className="font-display leading-[0.85] text-white tracking-tight">
            <motion.span
              className="block text-[4.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem]"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >
              BIG DOG
            </motion.span>
            <div className="h-[5rem] sm:h-[8rem] md:h-[10rem] lg:h-[12rem] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  className="block text-primary text-[4.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem]"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-100%' }}
                  transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
                >
                  {ROTATING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-body text-lg sm:text-xl text-stone max-w-xl mt-4 leading-relaxed"
          >
            The only poop bags built for dogs over 70 lbs. Leak-proof, oversized, and named after a 125-lb German Shepherd who broke every bag we tried.
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
                className="group inline-flex items-center gap-3 bg-primary text-white font-brand text-lg px-8 py-4 rounded-xl shadow-cartoon border-2 border-primary cursor-pointer"
                whileHover={{ scale: 1.04, boxShadow: '6px 6px 0 rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.97 }}
              >
                Shop Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
            <Link to="/pack">
              <motion.div
                className="inline-flex items-center gap-3 bg-transparent text-white font-brand text-lg px-8 py-4 rounded-xl border-2 border-white/50 cursor-pointer"
                whileHover={{ borderColor: 'rgba(255,255,255,1)', backgroundColor: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.97 }}
              >
                Meet Bosa 🐕
              </motion.div>
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-6 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
          >
            <div className="flex -space-x-1">
              {[0,1,2].map(i => (
                <div key={i} className="w-7 h-7 bg-primary rounded-full flex items-center justify-center border-2 border-midnight text-xs">
                  🐾
                </div>
              ))}
            </div>
            <span className="font-brand text-white text-sm">Big dog owners are already obsessed</span>
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