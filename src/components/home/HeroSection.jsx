import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen overflow-hidden bg-midnight">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Majestic big dog leaping through golden sunlight"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end min-h-[90vh] sm:min-h-screen pb-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-brand text-primary text-lg sm:text-xl mb-4"
          >
            Big dogs. Big poops. Bigger bags.
          </motion.p>

          {/* Massive headline */}
          <h1 className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-[0.85] text-white tracking-tight">
            BIG DOG
            <br />
            <span className="text-primary">ENERGY</span>
          </h1>

          {/* Sub-headline */}
          <p className="font-body text-lg sm:text-xl text-stone max-w-xl mt-6 leading-relaxed">
            The only poop bags built for dogs over 70 lbs. Leak-proof, oversized, and named after a 125-lb German Shepherd.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 bg-primary text-white font-brand text-lg px-8 py-4 rounded-xl shadow-cartoon border-2 border-white transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-orange-hot"
            >
              Shop Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pack"
              className="inline-flex items-center gap-3 bg-transparent text-white font-brand text-lg px-8 py-4 rounded-xl border-2 border-white/40 hover:border-white transition-all duration-300"
            >
              Meet The Pack 🐾
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-2 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}