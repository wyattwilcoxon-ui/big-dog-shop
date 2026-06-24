import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera } from 'lucide-react';

export default function BosieBlastWall() {
  return (
    <section className="py-16 sm:py-24 bg-midnight/85 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <motion.div
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className="inline-block bg-primary text-white font-display text-4xl sm:text-6xl px-6 py-3 rounded-2xl border-bold shadow-cartoon mb-6"
          >
            #BOSIEBLAST
          </motion.div>
          <h2 className="font-display text-5xl sm:text-7xl text-white">THE PACK DELIVERS</h2>
          <p className="font-brand text-stone mt-4 text-lg max-w-2xl mx-auto">
            Tag <span className="text-primary">#BosieBlast</span> on Instagram or TikTok and join the community of big dog owners who finally have a bag that keeps up.
          </p>
        </motion.div>

        {/* Post prompt */}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="font-body text-stone mb-4">Post on Instagram or TikTok with</p>
          <motion.div
            whileHover={{ scale: 1.04, rotate: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-primary text-white font-display text-3xl sm:text-4xl px-8 py-4 rounded-2xl border-bold shadow-cartoon cursor-pointer"
          >
            💩 #BOSIEBLAST 🐾
          </motion.div>
          <p className="font-body text-stone/60 text-sm mt-4">We'll repost our favorites. Your dog could be famous.</p>
        </motion.div>
      </div>
    </section>
  );
}