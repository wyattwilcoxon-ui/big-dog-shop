import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ROTATING_WORDS = ['ENERGY', 'POOPS', 'BAGS', 'DOGS', 'LIFE'];

const BOKEH = [
  { left: '8%',  top: '15%', size: 180, color: 'rgba(244,97,14,0.18)',  delay: 0,   dur: 7  },
  { left: '75%', top: '8%',  size: 120, color: 'rgba(245,166,35,0.14)', delay: 1,   dur: 9  },
  { left: '88%', top: '38%', size: 200, color: 'rgba(244,97,14,0.10)',  delay: 0.5, dur: 11 },
  { left: '3%',  top: '50%', size: 140, color: 'rgba(245,166,35,0.12)', delay: 1.5, dur: 8  },
  { left: '55%', top: '5%',  size: 100, color: 'rgba(255,255,255,0.08)',delay: 0.8, dur: 10 },
  { left: '40%', top: '70%', size: 160, color: 'rgba(244,97,14,0.08)',  delay: 2,   dur: 12 },
  { left: '85%', top: '65%', size: 90,  color: 'rgba(245,166,35,0.10)', delay: 0.3, dur: 6  },
];

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
        <img src={heroImage} alt="Big dog" className="w-full h-full object-cover opacity-70 scale-110" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(15,29,60,0.5) 68%, #0F1D3C 92%)' }} />
      </div>

      {/* Bokeh orbs */}
      {BOKEH.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: b.left,
            top: b.top,
            width: b.size,
            height: b.size,
            background: b.color,
            filter: 'blur(40px)',
          }}
          animate={{ y: [0, -20, 0], scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ delay: b.delay, duration: b.dur, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end min-h-[90vh] sm:min-h-screen pb-16 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}>
          
          {/* Tag line */}
          






          

          {/* Combined headline */}
          <div className="font-display leading-none text-white" style={{ fontSize: 'clamp(1.2rem, 3.5vw, 4rem)' }}>
            BIG DOG:
          </div>

          {/* Rotating headline */}
          <div className="h-[3rem] sm:h-[7rem] md:h-[9rem] overflow-hidden mb-2">
            <AnimatePresence mode="popLayout">
              <motion.h1
                key={wordIndex}
                className="font-display leading-none text-primary"
                style={{ 
                  fontSize: 'clamp(2.8rem, 12vw, 9rem)',
                  textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff'
                }}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%', transition: { duration: 0.3 } }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}>
                {ROTATING_WORDS[wordIndex]}!
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-body text-base sm:text-2xl text-white max-w-xl mt-1 sm:mt-2 leading-relaxed">
            
            The <strong>BIGGEST</strong> products for the biggest dogs! 💪<br />
            Extra-large. Extra-strong. Totally leak-proof.*
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-3 mt-4 sm:mt-8">
            
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
                className="inline-flex items-center gap-3 bg-white text-midnight font-brand text-lg px-8 py-4 rounded-full cursor-pointer"
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
              🚚 FREE SHIPPING
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-brand text-sm px-4 py-2 rounded-full">
              🦴 44% Bigger Than Standard Bags
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