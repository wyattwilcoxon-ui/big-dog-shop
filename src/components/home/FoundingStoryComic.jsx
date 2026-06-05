import React from 'react';
import { motion } from 'framer-motion';

export default function FoundingStoryComic() {
  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="font-brand text-primary text-sm uppercase tracking-widest mb-3">How It Started</p>
          <h2 className="font-display text-5xl sm:text-7xl text-midnight">THE REAL STORY</h2>
        </motion.div>

        {/* 4-Panel Comic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Panel 1: Megan & Bosa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl border-bold shadow-cartoon overflow-hidden"
          >
            <div className="bg-primary/10 px-4 py-3 border-b-2 border-midnight">
              <h3 className="font-display text-2xl text-midnight">PANEL 1: THE FRUSTRATION</h3>
            </div>
            <div className="p-6">
              <div className="aspect-[4/3] overflow-hidden rounded-lg border-2 border-midnight mb-4">
                <img
                  src="https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/b8996936f_IMG_9079.jpg"
                  alt="Bosa (left) and Carmen (right)"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-body text-pebble text-sm leading-relaxed">
                Megan adopts <strong>Bosa</strong>, a 125-lb German Shepherd with equally "large-scale" needs. Standard bags? Two per pickup. She's going through <strong>8 bags a day</strong>. There has to be a better way.
              </p>
            </div>
          </motion.div>

          {/* Panel 2: Joni & Max */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl border-bold shadow-cartoon overflow-hidden"
          >
            <div className="bg-secondary/10 px-4 py-3 border-b-2 border-midnight">
              <h3 className="font-display text-2xl text-midnight">PANEL 2: SAME PROBLEM</h3>
            </div>
            <div className="p-6">
              <div className="aspect-[4/3] overflow-hidden rounded-lg border-2 border-midnight mb-4">
                <img
                  src="https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/244a631d7_IMG_4554.jpg"
                  alt="Joni with her Great Dane Max"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 30%' }}
                />
              </div>
              <p className="font-body text-pebble text-sm leading-relaxed">
                Joni's Great Danes <strong>Max and Ellie</strong> face the same struggle. Harnesses, collars, accessories — all built for dogs a third their size. Expensive special orders or settle for undersized gear.
              </p>
            </div>
          </motion.div>

          {/* Panel 3: The Realization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl border-bold shadow-cartoon overflow-hidden sm:col-span-2"
          >
            <div className="bg-sky/10 px-4 py-3 border-b-2 border-midnight">
              <h3 className="font-display text-2xl text-midnight">PANEL 3: THE LIGHTBULB MOMENT</h3>
            </div>
            <div className="p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <p className="font-body text-pebble text-base leading-relaxed">
                  Megan and Joni compare notes. They realize they're not alone — there's an <strong>entire community</strong> of large-breed owners struggling with undersized products, wasted money, and limited options.
                </p>
                <p className="font-display text-primary text-xl mt-4 text-center">"WHY DOESN'T THIS EXIST?"</p>
              </div>
              <div className="text-6xl animate-bounce">💡</div>
            </div>
          </motion.div>

          {/* Panel 4: Big Dog Life is Born */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl border-bold shadow-cartoon overflow-hidden sm:col-span-2"
          >
            <div className="bg-primary/10 px-4 py-3 border-b-2 border-midnight">
              <h3 className="font-display text-2xl text-midnight">PANEL 4: BIG DOG LIFE™ IS BORN</h3>
            </div>
            <div className="p-6 text-center">
              <p className="font-body text-pebble text-base leading-relaxed max-w-2xl mx-auto mb-4">
                Out of shared frustration and love for their big dogs, <strong>Big Dog Life™</strong> was founded in Bellefontaine, Ohio in 2024. A company built <strong>for big dogs, by big-dog owners</strong>.
              </p>
              <p className="font-display text-primary text-lg">Because Big Dogs Have Big Needs.™</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}