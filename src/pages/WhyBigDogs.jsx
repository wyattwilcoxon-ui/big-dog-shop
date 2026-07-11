import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const BREEDS = [
  'German Shepherd', 'Great Dane', 'Mastiff', 'Rottweiler',
  'Labrador Retriever', 'Bernese Mountain Dog', 'Saint Bernard',
  'Great Pyrenees', 'Weimaraner', 'Irish Wolfhound',
];

const COMPARISON = [
  { feature: 'Size', standard: '9" × 13"', bosie: '12" × 14"' },
  { feature: 'Thickness', standard: 'Single-ply', bosie: 'Extra-thick' },
  { feature: 'Built for Large & Giant Breeds', standard: false, bosie: true },
  { feature: '38% Plant-Based Material', standard: false, bosie: true },
  { feature: 'Plant-based material', standard: false, bosie: true },
  { feature: 'Blowout Risk', standard: true, bosie: false },
];

const STATS = [
  { value: '45%', label: 'of U.S. households own a dog', cite: 'https://www.avma.org/resources-tools/reports-statistics/us-pet-ownership-statistics' },
  { value: '40%', label: 'of dog owners have large or giant breeds', cite: 'https://www.avma.org/resources-tools/reports-statistics/us-pet-ownership-statistics' },
  { value: '43.6%', label: 'bigger than standard bags' },
  { value: '12"×14"', label: 'The Bosie Bag® dimensions' },
];

const MARKET_STATS = [
  { value: '$150 BILLION', label: 'Americans spend on pets annually', cite: 'https://www.americanpetproducts.org/press_industrytrends.asp' },
  { value: '40% OF DOG OWNERS', label: 'have large-breed dogs', cite: 'https://www.avma.org/resources-tools/reports-statistics/us-pet-ownership-statistics' },
];

export default function WhyBigDogs() {
  return (
    <main className="bg-background min-h-screen">

      {/* Hero */}
      <section className="bg-midnight pt-24 pb-16 sm:pt-32 sm:pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-brand text-primary text-xs sm:text-sm uppercase tracking-widest mb-4">The Real Talk</p>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl text-white leading-tight mb-4 sm:mb-6">
              WHY BIG DOGS NEED BIGGER<br /><span className="text-primary">POOP BAGS</span>
            </h1>
            <p className="font-body text-stone text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
              If you own a large-breed dog, you already know the truth that small-dog owners will never understand: standard poop bags are completely inadequate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl sm:text-5xl text-white">{s.value}</div>
              <div className="font-brand text-white/80 text-xs sm:text-sm mt-1">{s.label}</div>
              {s.cite && (
                <a href={s.cite} target="_blank" rel="noopener noreferrer" className="font-body text-white/40 text-[10px] mt-0.5 underline hover:text-white/70 transition-colors block">
                  Source ↗
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-5xl sm:text-7xl text-midnight">THE PROBLEM</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border-bold shadow-cartoon p-8"
            >
              <div className="text-5xl mb-4">📏</div>
              <h3 className="font-display text-3xl text-midnight mb-3">TOO SMALL</h3>
              <p className="font-body text-pebble leading-relaxed">
                The average standard dog poop bag measures <strong>9" × 13"</strong> and is made from single-ply film. That's fine for a 12-pound Shih Tzu. For a 100-pound Mastiff? You're basically bagging it barehanded.
              </p>
              <p className="font-body text-pebble leading-relaxed mt-3">
                <strong>The result?</strong> Regular bags tear, split, and leak — leading to the most unpleasant walk experience imaginable. No one wants to feel waste seeping through their hand, or worse, watching a bag burst mid-walk.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border-bold shadow-cartoon p-8"
            >
              <div className="text-5xl mb-4">💸</div>
              <h3 className="font-display text-3xl text-midnight mb-3">TOO WASTEFUL</h3>
              <p className="font-body text-pebble leading-relaxed">
                Large-breed owners are forced to double or triple-bag every single walk. Megan was using up to <strong>8 bags per walk</strong> with Bosa. That's wasted money, wasted plastic, and zero dignity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-5xl sm:text-7xl text-midnight">THE BOSIE BAG®<br />DIFFERENCE</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border-bold shadow-cartoon"
          >
            {/* Header */}
            <div className="grid grid-cols-3 bg-midnight">
              <div className="p-5 font-brand text-stone text-sm">Feature</div>
              <div className="p-5 font-brand text-stone text-sm text-center">Standard Bag</div>
              <div className="p-5 bg-primary font-brand text-white text-sm text-center">
                The Bosie Bag®
              </div>
            </div>

            {/* Rows */}
            {COMPARISON.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 border-t-2 border-fog ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}
              >
                <div className="p-5 font-brand text-midnight text-sm flex items-center">{row.feature}</div>
                <div className="p-5 flex items-center justify-center">
                  {typeof row.standard === 'boolean' ? (
                    row.standard
                      ? <X className="w-5 h-5 text-destructive" />
                      : <X className="w-5 h-5 text-stone" />
                  ) : (
                    <span className="font-body text-pebble text-sm">{row.standard}</span>
                  )}
                </div>
                <div className="p-5 bg-orange-pale flex items-center justify-center">
                  {typeof row.bosie === 'boolean' ? (
                    row.bosie
                      ? <Check className="w-5 h-5 text-secondary" />
                      : <X className="w-5 h-5 text-destructive" />
                  ) : (
                    <span className="font-brand text-primary text-sm font-bold">{row.bosie}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Breeds */}
      <section className="py-20 px-4 bg-midnight">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-5xl sm:text-7xl text-white mb-4">BUILT FOR YOUR BREED</h2>
            <p className="font-body text-stone text-lg">The Bosie Bag® was designed for large and giant breed dogs, including:</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {BREEDS.map((breed, i) => (
              <motion.span
                key={breed}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/10 border border-white/20 text-white font-brand text-sm px-5 py-2.5 rounded-full"
              >
                🐕 {breed}
              </motion.span>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-stone text-sm mt-8"
          >
            …and honestly, any large or giant breed dog. If you've ever been let down by a flimsy bag, the Bosie Bag® is for you.
          </motion.p>
        </div>
      </section>

      {/* Market Context */}
      <section className="py-20 px-4 bg-orange-pale">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-5xl sm:text-7xl text-midnight">THE MARKET IGNORES YOU</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MARKET_STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`${i === 0 ? 'bg-midnight' : 'bg-white'} rounded-2xl border-bold shadow-cartoon p-8`}
              >
                <p className={`font-display text-4xl ${i === 0 ? 'text-primary' : 'text-midnight'} mb-3`}>{stat.value}</p>
                <p className={`font-body ${i === 0 ? 'text-stone' : 'text-pebble'} leading-relaxed`}>
                  {i === 0 
                    ? 'Americans spend over $150 billion on pets annually — yet the majority of pet supply brands continue designing products for medium-sized dogs, leaving large-breed owners with limited, ill-fitting, or costly options.'
                    : 'An estimated 40% of dog-owning households have large-breed dogs. That\'s tens of millions of owners who are systematically underserved by an industry that treats them as an afterthought.'
                  }
                </p>
                {stat.cite && (
                  <a href={stat.cite} target="_blank" rel="noopener noreferrer" className={`font-body text-xs mt-2 inline-block underline hover:text-primary transition-colors ${i === 0 ? 'text-white/40 hover:text-white/70' : 'text-primary/60'}`}>
                    Source ↗
                  </a>
                )}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 bg-primary rounded-2xl border-bold shadow-cartoon p-8 text-center"
          >
            <p className="font-display text-3xl sm:text-4xl text-white">
              BIG DOG LIFE™ EXISTS TO CHANGE THAT. 🐾
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl sm:text-6xl text-midnight mb-6">READY FOR A BETTER WALK?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-primary text-white font-brand text-lg px-8 py-4 rounded-full hover:bg-orange-hot transition-colors border-bold shadow-cartoon-sm"
              >
                ⚡ Shop The Bosie Bag®
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border-2 border-midnight text-midnight font-brand text-lg px-8 py-4 rounded-full hover:bg-midnight hover:text-white transition-colors"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}