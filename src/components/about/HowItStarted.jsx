import React from 'react';
import { motion } from 'framer-motion';

export default function HowItStarted() {
  const panels = [
    {
      title: 'PANEL 1: ENTER BOSA',
      color: 'border-primary',
      badge: '125 LBS OF CHAOS',
      badgeBg: 'bg-primary',
      image: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/5252c3924_Bosa.png',
      description: 'Megan adopted Bosa, a 115-pound German Shepherd with absolute zero shame. Standard bags? They exploded. EIGHT bags per day. Poop on her hands, every single walk.'
    },
    {
      title: 'PANEL 2: MEET THE GREAT DANE',
      color: 'border-secondary',
      badge: 'TALLER THAN YOUR TODDLER',
      badgeBg: 'bg-secondary',
      image: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/0827fc0ee_Caesar.png',
      description: 'Then she met Joni. Joni had Great Dane Max. Same problem. Tiny bags, big dogs. They looked at each other in the park, holding a compromised bag at arm\'s length...'
    },
    {
      title: 'PANEL 3: THE REALIZATION',
      color: 'border-primary',
      badge: 'LIGHTBULB MOMENT',
      badgeBg: 'bg-primary',
      image: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/6a06119e182f5cb0938b3e5b/b7a8d0441_generated_f004f9b0.png',
      description: '"WHY DOESN\'T THIS EXIST?!" they screamed. Standing in a park at that moment, Big Dog Life was born. A company built by big-dog owners, for big-dog owners.'
    },
    {
      title: 'PANEL 4: THE BOSIE BAG™ BORN',
      color: 'border-sky',
      badge: '43.6% BIGGER',
      badgeBg: 'bg-sky',
      image: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/a7919ce14_generated_93e1f141.png',
      description: 'Founded in Bellefontaine, Ohio in 2024. 12" × 14". Extra-thick. Plant-based. Built for dogs over 75 lbs. No more compromises. The Bosie Bag™ — named after the dog who started it all.'
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-brand text-primary text-sm uppercase tracking-widest mb-3">How It Started</p>
          <h2 className="font-display text-5xl sm:text-7xl text-midnight">THE REAL STORY</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {panels.map((panel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-white rounded-2xl border-4 ${panel.color} shadow-cartoon overflow-hidden cursor-default`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-fog">
                <img
                  src={panel.image}
                  alt={panel.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-3 right-3 ${panel.badgeBg} text-white px-3 py-1 rounded-full font-brand text-xs border-2 border-midnight`}>
                  {panel.badge}
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-brand text-midnight text-sm sm:text-base uppercase tracking-wider mb-3 border-b-2 border-midnight pb-2">
                  {panel.title}
                </h3>
                <p className="font-body text-pebble text-sm leading-relaxed">
                  {panel.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}