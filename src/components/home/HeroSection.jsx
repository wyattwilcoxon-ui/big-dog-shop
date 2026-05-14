import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ROTATING_WORDS = ['ENERGY', 'POOPS', 'BAGS', 'DOGS', 'LIFE'];

export default function HeroSection({ heroImage }) {
  const [wordIndex, setWordIndex] = useState(0);

  // Cycle through words
  useEffect(() => {
    const t = setInterval(() => {
      setWordIndex(i => (i + 1) % ROTATING_WORDS.length);
    }, 1800);
    return () => clearInterval(t);
  }, []);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const imgX = useTransform(mouseX, [-500, 500], [-15, 15]);
  const imgY = useTransform(mouseY, [-400, 400], [-10, 10]);

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.width / 2);
    mouseY.set(e.clientY - rect.height / 2);
  };

  return (
    <section
      className="relative min-h-[90vh] sm:min-h-screen overflow-hidden bg-midnight"
      onMouseMove={handleMouse}
    >
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0" style={{ x: imgX, y: imgY }}>
        <img
          src={heroImage}
          alt="Big dog leaping through golden sunlight"
          className="w-full h-full object-cover opacity-60 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent" />
      </motion.div>

      {/* Floating decorative emojis */}
      {['💩', '🐾', '🐕', '💩', '🐾'].map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl sm:text-4xl pointer-events-none select-none opacity-40"
          style={{
            left: `${10 + i * 18}%`,
            top: `${15 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, i % 2 === 0 ? 15 : -15, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 2.5 + i * 0.7,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeInOut',
          }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end min-h-[90vh] sm:min-h-screen pb-16 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {/* Eyebrow tag */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-primary/20 border-2 border-primary text-primary font-brand text-sm px-4 py-2 rounded-full mb-6"
          >
            <motion.span animate={{ rotate: [0, 20, -20, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              💩
            </motion.span>
            Big dogs. Big poops. Bigger bags.
          </motion.div>

          {/* Massive headline with rotating word */}
          <h1 className="font-display leading-[0.85] text-white tracking-tight">
            <motion.span
              className="block text-[4.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              BIG DOG
            </motion.span>
            <div className="h-[5rem] sm:h-[8rem] md:h-[10rem] lg:h-[12rem] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  className="block text-primary text-[4.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem]"
                  initial={{ y: '100%', skewX: 5 }}
                  animate={{ y: 0, skewX: 0 }}
                  exit={{ y: '-100%', skewX: -5 }}
                  transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  {ROTATING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="font-body text-lg sm:text-xl text-stone max-w-xl mt-4 leading-relaxed"
          >
            The only poop bags built for dogs over 70 lbs. Leak-proof, oversized, and named after a 125-lb German Shepherd who broke every bag we tried.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <Link to="/shop">
              <motion.div
                className="group inline-flex items-center gap-3 bg-primary text-white font-brand text-lg px-8 py-4 rounded-xl shadow-cartoon border-2 border-primary"
                whileHover={{
                  scale: 1.07,
                  rotate: [-1, 1, -1, 0],
                  boxShadow: '7px 7px 0 rgba(255,255,255,0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ rotate: { duration: 0.15, repeat: 2 } }}
              >
                Shop Now 🐾
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
            <Link to="/pack">
              <motion.div
                className="inline-flex items-center gap-3 bg-transparent text-white font-brand text-lg px-8 py-4 rounded-xl border-2 border-white/50"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,1)', backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Meet Bosa 💩
              </motion.div>
            </Link>
          </motion.div>

          {/* Social proof pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
          >
            <div className="flex -space-x-2">
              {['🐕', '🐶', '🐾'].map((e, i) => (
                <div key={i} className="w-7 h-7 bg-primary/80 rounded-full flex items-center justify-center text-sm border-2 border-midnight">
                  {e}
                </div>
              ))}
            </div>
            <span className="font-brand text-white text-sm">Big dog owners are already obsessed 🔥</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-2 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}