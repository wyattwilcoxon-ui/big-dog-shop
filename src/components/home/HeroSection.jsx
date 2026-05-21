import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ROTATING_WORDS = ['ENERGY', 'POOPS', 'BAGS', 'DOGS', 'LIFE'];

const FLOATING = [
{ emoji: '💩', left: '5%',  top: '12%', size: '2.5rem', delay: 0,   rot: -15 },
{ emoji: '🐾', left: '82%', top: '10%', size: '2.2rem', delay: 0.4, rot: 10  },
{ emoji: '⭐', left: '91%', top: '28%', size: '2.4rem', delay: 0.9, rot: 20  },
{ emoji: '🦴', left: '3%',  top: '32%', size: '2rem',   delay: 0.7, rot: -20 },
{ emoji: '🐕', left: '87%', top: '52%', size: '2.5rem', delay: 1.1, rot: 5   },
{ emoji: '💩', left: '62%', top: '8%',  size: '2rem',   delay: 0.5, rot: 8   }];


export default function HeroSection({ heroImage }) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIndex((i) => (i + 1) % ROTATING_WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);



  return (
    <section className="relative min-h-[90vh] sm:min-h-screen overflow-hidden bg-midnight">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Big dog" className="w-full h-full object-cover opacity-50 scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-midnight/20" />
      </div>

      {/* Floating emojis */}
      {FLOATING.map((f, i) =>
      <motion.div
        key={i}
        className="absolute select-none pointer-events-none"
        style={{ left: f.left, top: f.top, fontSize: f.size, rotate: f.rot }}
        animate={{ y: [0, -14, 0], rotate: [f.rot, f.rot + 8, f.rot] }}
        transition={{ delay: f.delay, duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}>
        
          {f.emoji}
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end min-h-[90vh] sm:min-h-screen pb-16 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}>
          
          {/* Tag line */}
          






          

          {/* Combined headline */}
          <div className="font-display leading-none text-primary" style={{ fontSize: 'clamp(1.5rem, 4vw, 4rem)' }}>
            BIG DOG:
          </div>

          {/* Rotating headline */}
          <div className="h-[4rem] sm:h-[7rem] md:h-[9rem] overflow-hidden mb-2">
            <AnimatePresence mode="wait">
              <motion.h1
                key={wordIndex}
                className="font-display leading-none text-white"
                style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)' }}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}>
                {ROTATING_WORDS[wordIndex]}!
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-body text-xl sm:text-2xl text-white max-w-xl mt-2 leading-relaxed">
            
            The <strong>BIGGEST</strong> poop bags for the biggest dogs! 💪<br />
            Extra-large. Extra-strong. Totally leak-proof.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-8">
            
            <Link to="/shop">
              <motion.div
                className="group inline-flex items-center gap-3 bg-primary text-white font-brand text-lg px-8 py-4 rounded-full cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}>
                
                🛒 SHOP NOW — IT'S TIME
              </motion.div>
            </Link>
            <Link to="/pack">
              <motion.div
                className="inline-flex items-center gap-3 bg-marigold text-midnight font-brand text-lg px-8 py-4 rounded-full cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}>
                
                🐾 WHY BIG DOGS NEED THIS
              </motion.div>
            </Link>
          </motion.div>

          {/* Social proof pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-6 flex flex-wrap gap-3">
            
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-brand text-sm px-4 py-2 rounded-full">
              ⭐⭐⭐⭐⭐ <span className="font-bold">4.9</span>
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div animate={{ y: [0, 14, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-2 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>);

}