import React from 'react';
import { motion } from 'framer-motion';

const PANELS = [
  {
    panelEmoji: '🐕',
    bg: 'bg-cream',
    border: 'border-primary',
    title: 'MEET BOSA',
    subtitle: '125 lbs. Zero shame.',
    body: 'A magnificent German Shepherd who believed that going BIG applied to everything in life — especially his bathroom habits.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/img_9679_a5725f64.jpg',
    accent: 'bg-primary',
    delay: 0,
  },
  {
    panelEmoji: '💩',
    bg: 'bg-cream',
    border: 'border-secondary',
    title: 'THE PROBLEM',
    subtitle: 'Normal bags: RIP.',
    body: 'Regular bags didn\'t stand a chance. They split. They leaked. Megan was using 8 bags per walk. EIGHT. This is not a drill.',
    cartoonImg: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/5b14b0aaf_generated_image.png',
    accent: 'bg-secondary',
    delay: 0.1,
  },
  {
    panelEmoji: '🐾',
    bg: 'bg-midnight',
    border: 'border-primary',
    title: 'THE BREAKING POINT',
    subtitle: 'Not today, tiny bag.',
    body: 'Standing in a park, holding a compromised bag at arm\'s length, Megan looked at Joni and said: "WHY DOESN\'T THIS EXIST?!"',
    cartoonImg: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/54a7680a8_generated_image.png',
    accent: 'bg-primary',
    dark: true,
    delay: 0.15,
  },
  {
    panelEmoji: '🧻',
    bg: 'bg-midnight',
    border: 'border-sandy',
    title: 'THE BOSIE BAG™',
    subtitle: '13"×15". Named after the legend.',
    body: 'Built for 70+ lb dogs. Leak-proof. Oversized. Named after the big boy himself. Bosa approves. (He\'s not sorry.)',
    cartoonImg: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/483e609ed_generated_image.png',
    accent: 'bg-sandy',
    dark: true,
    delay: 0.2,
  },
];

export default function BosaOriginStory() {
  return (
    <section className="py-16 sm:py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              className="text-7xl"
              animate={{ rotate: [0, -8, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            >
              💩
            </motion.div>
          </div>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-midnight">
            THE LEGEND OF<br />
            <span className="text-primary">BOSA'S</span> POOPS
          </h2>
          <p className="font-brand text-pebble text-lg mt-4 max-w-xl mx-auto">
            A true story. An origin story. A story about a very large dog and very inadequate bags.
          </p>
        </motion.div>

        {/* Comic Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PANELS.map((panel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: panel.delay, duration: 0.55 }}
              className={`relative rounded-2xl border-4 ${panel.border} overflow-hidden shadow-cartoon cursor-pointer`}
            >
              {/* Panel number */}
              <div className={`absolute top-3 left-3 z-10 w-9 h-9 ${panel.accent} rounded-lg border-bold flex items-center justify-center`}>
                <span className="font-display text-white text-lg">{i + 1}</span>
              </div>

              {/* Emoji top-right */}
              <div className="absolute top-3 right-3 z-10 text-2xl">
                {panel.panelEmoji}
              </div>

              <div className={`${panel.bg} p-6 sm:p-8`}>
                {panel.image && (
                  <div className="rounded-xl overflow-hidden border-bold mb-5 aspect-[4/3]">
                    <img src={panel.image} alt={panel.title} className="w-full h-full object-cover" />
                  </div>
                )}
                {panel.cartoonImg && (
                  <div className="rounded-xl overflow-hidden border-bold mb-5 aspect-[4/3] bg-white flex items-center justify-center">
                    <img src={panel.cartoonImg} alt={panel.title} className="w-full h-full object-contain p-2" />
                  </div>
                )}
                <div className={panel.dark ? 'text-white' : 'text-midnight'}>
                  <h3 className="font-display text-4xl sm:text-5xl">{panel.title}</h3>
                  <p className={`font-brand text-sm mt-1 ${panel.dark ? 'text-white/60' : 'text-pebble'}`}>{panel.subtitle}</p>
                  <p className={`font-body text-sm sm:text-base mt-4 leading-relaxed ${panel.dark ? 'text-white/80' : 'text-pebble'}`}>{panel.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-primary text-white font-display text-2xl sm:text-4xl px-8 py-5 rounded-2xl border-bold shadow-cartoon rotate-1">
            🐾 AND THAT'S WHY WE GIVE A $H!T 🐾
          </div>
        </motion.div>
      </div>
    </section>
  );
}