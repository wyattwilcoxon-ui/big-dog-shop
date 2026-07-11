import React from 'react';
import { motion } from 'framer-motion';
import BosaOriginStory from '../components/home/BosaOriginStory';

const DOGS = [
  {
    name: 'Bosa',
    breed: 'German Shepherd',
    title: 'Chief Pooping Officer',
    description: '115 lbs of pure chaos and love. His poops are legendary (and the reason this company exists). The bags are literally named after him.',
    image: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/5252c3924_Bosa.png',
    color: 'border-primary',
  },
  {
    name: 'Max',
    breed: 'Great Dane',
    title: 'Head of Stress Testing',
    description: "Joni's Great Dane who proved that most pet products are basically made for hamsters. If a bag can handle Max, it can handle anything.",
    image: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/0827fc0ee_Caesar.png',
    color: 'border-sky',
  },
  {
    name: 'Jazzy',
    breed: 'The Little One',
    title: 'Morale & Chaos Coordinator',
    description: 'Every big dog crew needs a tiny boss. Jazzy keeps everyone in line and reminds us that attitude has nothing to do with size.',
    image: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/397e17f3c_Jazzy.png',
    color: 'border-sandy',
  },
];


export default function Pack() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-midnight pt-20 pb-12 sm:pt-32 sm:pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-brand text-primary text-sm sm:text-lg mb-2">The Real MVPs</p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white leading-tight">MEET THE PACK</h1>
            <p className="font-body text-stone text-base sm:text-lg mt-4 max-w-xl">
              The dogs who started it all. They didn't ask for a company to be built around their bathroom habits, but here we are.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Meet the Pack - Dogs */}
      <section className="py-12 sm:py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
            <p className="font-brand text-primary text-sm uppercase tracking-widest mb-3">The Real MVPs</p>
            <h2 className="font-display text-5xl sm:text-7xl text-midnight">MEET THE PACK</h2>
            <p className="font-body text-pebble mt-3 text-lg">Our dogs who inspire us every day.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DOGS.map((dog, i) => (
              <motion.div
                key={dog.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl border-bold shadow-cartoon overflow-hidden cursor-default"
              >
                <div className={`aspect-[4/3] overflow-hidden border-b-4 ${dog.color}`}>
                  <img src={dog.image} alt={dog.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl sm:text-3xl text-midnight">{dog.name}</h3>
                  <p className="font-brand text-primary text-xs sm:text-sm">{dog.breed}</p>
                  <p className="font-brand text-stone text-xs mt-1">{dog.title}</p>
                  <p className="font-body text-pebble text-sm mt-2 sm:mt-3 leading-relaxed">{dog.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Memorial Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-background to-cream">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border-2 border-secondary shadow-cartoon overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="flex-1 p-8 sm:p-10 flex flex-col justify-center">
                <div className="flex justify-center sm:justify-start mb-3">
                  <span className="text-5xl">🕊️</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl text-midnight mb-2 text-center sm:text-left">In Loving Memory of Carmen</h3>
                <p className="font-brand text-secondary text-sm mb-4 text-center sm:text-left">April 2026</p>
                <p className="font-body text-pebble text-sm sm:text-base leading-relaxed">
                  The wisest of the pack. She tested every prototype and gave her seal of approval by not looking disgusted. 
                  She would be so proud to see Big Dog Life™ launched and helping big dogs everywhere. 🐾
                </p>
                <p className="font-brand text-stone text-xs mt-6 italic text-center sm:text-left">
                  "Forever in our hearts, always in the Pack."
                </p>
              </div>
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden border-t-4 sm:border-t-0 sm:border-l-4 border-secondary">
                <img
                  src="https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/4c1877673_Carmen.png"
                  alt="Carmen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Started - Comic Panels */}
      <BosaOriginStory />

    </div>
  );
}