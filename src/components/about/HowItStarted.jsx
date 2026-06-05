import React from 'react';
import { motion } from 'framer-motion';

export default function HowItStarted() {
  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="font-brand text-primary text-sm uppercase tracking-widest mb-3">How It Started</p>
          <h2 className="font-display text-5xl sm:text-7xl text-midnight">THE REAL STORY</h2>
        </motion.div>

        {/* Offset stagger grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">

          {/* Card 1 — left, sits higher */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl border-bold shadow-cartoon overflow-hidden cursor-default sm:mt-0"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/b8996936f_IMG_9079.jpg"
                alt="Bosa (left) and Carmen (right)"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-3xl text-midnight mb-2">MEET BOSA</h3>
              <p className="font-body text-pebble text-sm leading-relaxed">
                115-pound German Shepherd. Bosa left, Carmen (passed April 2026, deeply missed) right. Going through up to <strong>8 bags per day</strong> — standard bags split and failed every time.
              </p>
            </div>
          </motion.div>

          {/* Card 2 — right, sits lower */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl border-bold shadow-cartoon overflow-hidden cursor-default sm:mt-16"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/244a631d7_IMG_4554.jpg"
                alt="Joni with her Great Dane Max"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 30%' }}
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-3xl text-midnight mb-2">JONI HAD THE SAME PROBLEM</h3>
              <p className="font-body text-pebble text-sm leading-relaxed">
                Joni owned Great Dane Max and was dealing with the same frustrations. That's Max in the photo. Bags that didn't fit, accessories built for dogs a third the size.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quote block — full width below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="bg-primary rounded-2xl border-bold shadow-cartoon p-10 text-center cursor-default mt-6"
        >
          <p className="font-display text-3xl sm:text-5xl text-white leading-tight">
            "WHY DOESN'T THIS EXIST?"
          </p>
          <p className="font-body text-white/80 text-lg mt-4 max-w-xl mx-auto">
            Standing in a park, holding a compromised bag at arm's length, they looked at each other and Big Dog Life was born. Founded in Bellefontaine, Ohio in 2024.
          </p>
        </motion.div>
      </div>
    </section>
  );
}