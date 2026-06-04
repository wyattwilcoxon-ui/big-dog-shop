import React from 'react';
import { motion } from 'framer-motion';

const DOGS = [
  {
    name: 'Bosa',
    breed: 'German Shepherd',
    title: 'Chief Pooping Officer',
    description: '125 lbs of pure chaos and love. His poops are legendary (and the reason this company exists). The bags are literally named after him.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/img_9679_a5725f64.jpg',
    color: 'border-primary',
  },
  {
    name: 'Carmen',
    breed: 'German Shepherd',
    title: 'Senior Quality Inspector',
    description: 'The wise grandma of the pack. She tested every prototype and gave her seal of approval by not looking disgusted.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/img_9660_8b3c9563.jpg',
    color: 'border-secondary',
  },
  {
    name: 'Max',
    breed: 'Great Dane',
    title: 'Head of Stress Testing',
    description: "Joni's gentle giant who proved that most pet products are basically made for hamsters. If a bag can handle Max, it can handle anything.",
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/img_9245_46815bf7.jpg',
    color: 'border-sky',
  },
  {
    name: 'Jazzy',
    breed: 'The Little One',
    title: 'Morale & Chaos Coordinator',
    description: 'Every big dog crew needs a tiny boss. Jazzy keeps everyone in line and reminds us that attitude has nothing to do with size.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/img_8880_fff6a440.jpg',
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

      {/* Dogs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {DOGS.map((dog, i) => (
            <motion.div
              key={dog.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white rounded-2xl border-bold shadow-cartoon overflow-hidden transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none`}
            >
              <div className={`aspect-[4/3] overflow-hidden border-b-4 ${dog.color}`}>
                <img src={dog.image} alt={dog.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-display text-2xl sm:text-3xl text-midnight">{dog.name}</h3>
                <p className="font-brand text-primary text-xs sm:text-sm">{dog.breed}</p>
                <p className="font-brand text-stone text-xs mt-1">{dog.title}</p>
                <p className="font-body text-pebble text-sm mt-2 sm:mt-3 leading-relaxed">{dog.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Story */}
      <div className="bg-cream py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-brand text-secondary text-lg mb-2">How It Started</p>
            <h2 className="font-display text-5xl sm:text-7xl text-midnight">A CRAPPY PROBLEM.<br />A BETTER SOLUTION.</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border-bold shadow-cartoon p-8 sm:p-12"
          >
            <div className="flex flex-col sm:flex-row gap-8">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/megan-both-dogs_44a2bc9c.jpg"
                alt="Megan with her dogs"
                className="w-full sm:w-64 h-48 sm:h-auto rounded-xl object-cover border-bold flex-shrink-0"
              />
              <div>
                <h3 className="font-brand text-xl text-midnight mb-4">Here's What Happened (By Bosa)</h3>
                <p className="font-body text-pebble leading-relaxed mb-4">
                  So Megan adopted me — 125 lbs of German Shepherd greatness. She thought regular bags would work. Cute. They exploded. Like, immediately. She went through EIGHT bags per walk. EIGHT. I watched her cry. Honestly? Kinda funny.
                </p>
                <p className="font-body text-pebble leading-relaxed mb-4">
                  Then she met Joni. Joni had TWO Great Danes. Same problem. Tiny bags. Big dogs. Do the math.
                </p>
                <p className="font-body text-pebble leading-relaxed">
                  One day at the park, Megan held a leaked bag at arm's length and screamed: "WHY DOESN'T THIS EXIST?!" I barked. She looked at me. I knew this was destiny. They built Big Dog Life. Named the bags after me (The Bosie Bag™, obviously). I give my seal of approval. Which is to say, I poop on them. You're welcome.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-cream rounded-xl border-2 border-fog">
              <p className="font-body text-midnight italic text-center leading-relaxed">
                "Make life easier for big-dog owners. Build products that actually work. Don't take ourselves too seriously. And never, ever make a bag that leaks."
              </p>
              <p className="font-brand text-stone text-sm text-center mt-2">— Bosa, Chief Pooping Officer (and the real boss)</p>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}