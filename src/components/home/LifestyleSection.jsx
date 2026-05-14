import React from 'react';
import { motion } from 'framer-motion';

export default function LifestyleSection({ images }) {
  return (
    <section className="py-16 sm:py-24 bg-midnight overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-brand text-primary text-lg mb-2">The Lifestyle</p>
          <h2 className="font-display text-5xl sm:text-7xl text-white">LIVE BOLD. LOVE BIGGER.</h2>
        </motion.div>

        {/* Asymmetric image grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="col-span-2 row-span-2 rounded-2xl overflow-hidden border-4 border-primary"
          >
            <img
              src={images.hero}
              alt="Dogs in action"
              className="w-full h-full object-cover min-h-[300px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden border-4 border-secondary"
          >
            <img
              src={images.paw}
              alt="Close-up of big dog paw"
              className="w-full h-full object-cover min-h-[150px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden border-4 border-sandy"
          >
            <img
              src={images.portrait}
              alt="Majestic dog portrait"
              className="w-full h-full object-cover min-h-[150px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-2 rounded-2xl overflow-hidden border-4 border-sky"
          >
            <img
              src={images.action}
              alt="Dogs running through water"
              className="w-full h-48 sm:h-56 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}