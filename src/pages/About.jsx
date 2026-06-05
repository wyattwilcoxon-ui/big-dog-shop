import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Target, Users } from 'lucide-react';
import GlobalBokeh from '../components/layout/GlobalBokeh';



const STATS = [
  {
    value: '$150B',
    label: 'U.S. pet care market',
    sub: 'and growing every year',
    cite: 'https://www.americanpetproducts.org/press_industrytrends.asp',
  },
  {
    value: '40%',
    label: 'of U.S. dog owners have large or giant breeds',
    sub: 'An underserved majority',
    cite: 'https://www.avma.org/resources-tools/reports-statistics/us-pet-ownership-statistics',
  },
  { value: '2024', label: 'Founded in Ohio', sub: 'Bellefontaine, OH' },
  { value: '2', label: 'Founders. Big-dog owners.', sub: 'Built from lived experience' },
];

const PROMISES = [
  {
    icon: Target,
    label: 'Right Size',
    color: 'bg-primary',
    description: 'Products designed specifically for large and giant breed dogs, not just "XL" relabeled smalls.',
  },
  {
    icon: Leaf,
    label: 'Right Impact',
    color: 'bg-secondary',
    description: 'Affordable, high-quality, and eco-conscious — plant-based, biodegradable materials.',
  },
  {
    icon: Users,
    label: 'Right Community',
    color: 'bg-sky',
    description: 'A brand that connects owners, breeders, and rescues who share the big dog life.',
  },
];

const TEAM = [
  {
    name: 'Megan Gerlach',
    role: 'Co-Founder & Financial Director',
    photo: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/748b242b3_Megan.png',
    bio: 'After adopting Bosa, a 115-pound German Shepherd with absolutely zero shame, Megan realized she was going through 8 poop bags a day. Her finance background and frustration with the market turned a personal problem into a company.',
    wide: false,
  },
  {
    name: 'Joni Dailey',
    role: 'Co-Founder & Brand Director',
    photo: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/0ef71dcef_Joni.png',
    bio: 'Owner of Great Dane Max. Joni brings creative direction, marketing, and retail partnership strategy, ensuring every product and message reflects the brand\'s personality and values.',
    wide: false,
  },
  {
    name: 'Doug & Amber Chivington',
    role: 'Partners & Strategy Directors',
    photo: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/6767a2db6_DougAmber.png',
    bio: 'Doug and Amber handle sourcing, inventory logistics, fulfillment, content creation, and digital strategy. Together they manage supplier relationships and quality control while driving the brand story forward.',
    wide: true,
  },
];

const ROADMAP = [
  { emoji: '✅', label: 'Bosie Bag™ XL Waste Bags', status: 'Available Now', color: 'bg-secondary', blur: false },
  { emoji: '✅', label: 'Clip & Go™ Dispenser Pouch', status: 'Available Now', color: 'bg-secondary', blur: false },
  { emoji: '✅', label: 'Big Dog Life™ Starter Bundle', status: 'Available Now', color: 'bg-secondary', blur: false },
  { emoji: '✅', label: 'The Big Ones™ Tennis Balls', status: 'Available Now', color: 'bg-secondary', blur: false },
  { emoji: '🚧', label: 'Poop Bag Dispenser', status: 'Coming Soon', color: 'bg-marigold', blur: true },
  { emoji: '🚧', label: 'Leash Accessories', status: 'In Development', color: 'bg-marigold', blur: true },
  { emoji: '🚧', label: 'Training Treats', status: 'In Development', color: 'bg-marigold', blur: true },

];


export default function About() {
  return (
    <main className="bg-background min-h-screen">

      {/* Hero — text only */}
      <section className="bg-midnight overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}>
            <p className="font-brand text-primary text-sm uppercase tracking-widest mb-3">Our Story</p>
            <h1 className="font-display leading-none text-white" style={{ fontSize: 'clamp(2.5rem, 10vw, 8rem)' }}>
              BUILT BY<br /><span className="text-primary">BIG DOG PEOPLE.</span>
            </h1>
            <p className="font-body text-white/80 text-base sm:text-lg max-w-xl mt-4 leading-relaxed">
              Big Dog Life is an Ohio-based lifestyle brand dedicated to improving life for large and giant breed dogs and the people who love them.
            </p>
            <p className="font-display text-primary mt-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              "Because Big Dogs Have Big Needs."
            </p>
          </motion.div>
        </div>
      </section>



      {/* Stats */}
      <section className="bg-primary py-8 sm:py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl text-white">{s.value}</div>
              <div className="font-brand text-white/90 text-xs sm:text-sm mt-1">{s.label}</div>
              {s.cite ? (
                <a href={s.cite} target="_blank" rel="noopener noreferrer" className="font-body text-white/50 text-[10px] mt-0.5 underline hover:text-white/80 transition-colors block">
                  {s.sub} ↗
                </a>
              ) : (
                <div className="font-body text-white/60 text-xs mt-0.5">{s.sub}</div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 sm:py-20 px-4 bg-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <p className="font-brand text-primary text-xs sm:text-sm uppercase tracking-widest mb-3">Built For Big Dogs</p>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-midnight leading-tight">OUR MISSION</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-midnight rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 text-center border-4 border-midnight shadow-cartoon">
            <p className="font-body text-white text-base sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
              To make life easier, healthier, and more fulfilling for large-breed dogs and the people who love them, through durable, high-quality essentials that fit the unique needs of big dogs, built on honest education, responsible sourcing, and genuine community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 Brand Promises */}
      <section className="py-12 sm:py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
            <p className="font-brand text-primary text-xs sm:text-sm uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-midnight">THREE PROMISES</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {PROMISES.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ scale: 1.04 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border-bold shadow-cartoon-sm cursor-default"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${p.color} rounded-xl flex items-center justify-center mb-4 sm:mb-5 border-2 border-midnight`}>
                  <p.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-midnight mb-3">{p.label}</h3>
                <p className="font-body text-pebble text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders & Partners */}
      <section className="py-12 sm:py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <p className="font-brand text-primary text-sm uppercase tracking-widest mb-3">The Humans Behind the Brand</p>
            <h2 className="font-display text-5xl sm:text-7xl text-midnight">FOUNDERS & PARTNERS</h2>
            <p className="font-body text-pebble mt-3 text-lg">Two founders and two partners building products that actually work.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className={`bg-white rounded-2xl border-bold shadow-cartoon overflow-hidden cursor-default w-full ${member.wide ? 'md:w-full lg:w-full' : 'md:w-96'}`}
              >
                {member.wide ? (
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden border-r-4 border-primary">
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover" style={{ objectPosition: '50% 30%' }} />
                    </div>
                    <div className="p-6 md:w-1/2 flex flex-col justify-center">
                      <h3 className="font-display text-2xl sm:text-3xl text-midnight">{member.name}</h3>
                      <p className="font-brand text-primary text-xs sm:text-sm">{member.role}</p>
                      <p className="font-body text-pebble text-sm mt-3 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="aspect-[3/4] overflow-hidden border-b-4 border-primary">
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover" style={{ objectPosition: '50% 25%' }} />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-2xl sm:text-3xl text-midnight">{member.name}</h3>
                      <p className="font-brand text-primary text-xs sm:text-sm">{member.role}</p>
                      <p className="font-body text-pebble text-sm mt-3 leading-relaxed">{member.bio}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Started - The Real Story */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="font-brand text-primary text-sm uppercase tracking-widest mb-3">How It Started</p>
            <h2 className="font-display text-5xl sm:text-7xl text-midnight">THE REAL STORY</h2>
          </motion.div>

          {/* Offset stagger grid with photos */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 items-start mb-8">

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
                <h3 className="font-display text-3xl text-midnight mb-2">MEGAN & BOSA</h3>
                <p className="font-body text-pebble text-sm leading-relaxed">
                  Megan's inspiration came after adopting Bosa, a 115-pound German Shepherd with equally "large-scale" needs. For years, she'd used two standard bags for Carmen, but Bosa's size made that unworkable. Even the largest commercial bags couldn't keep up — resulting in waste, inefficiency, and frequent messes. After going through up to <strong>8 small bags a day</strong>, she thought: there has to be a better way.
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
                <h3 className="font-display text-3xl text-midnight mb-2">JONI, MAX & ELLIE</h3>
                <p className="font-body text-pebble text-sm leading-relaxed">
                  Around the same time, Joni — who owns two Great Danes, Max and Ellie — was facing her own large-breed challenges. Finding harnesses, collars, and accessories that actually fit meant expensive special orders. Large-breed owners were left with limited, inconsistent, and costly choices.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Quote block — full width below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-2xl border-bold shadow-cartoon p-8 sm:p-10 text-center"
          >
            <p className="font-body text-white text-base sm:text-lg leading-relaxed">
              The two friends started comparing notes and quickly realized they weren't alone. There was an entire community of large-breed owners struggling with undersized products, wasted money, and limited options. Out of those shared experiences, <strong className="text-white">Big Dog Life was born</strong> — a company built for big dogs, by big-dog owners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA to Pack page */}
      <section className="py-12 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-5xl sm:text-7xl text-white mb-4">WANT TO MEET THE REAL BOSSES?</h2>
            <p className="font-body text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              The dogs who inspired it all. Get to know the pack that runs the show.
            </p>
            <Link to="/pack">
              <motion.div
                className="inline-flex items-center gap-3 bg-white text-secondary font-brand text-lg px-8 py-4 rounded-full cursor-pointer hover:bg-cream transition-colors border-2 border-white shadow-[4px_4px_0_#0F1D3C]"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                🐾 LEARN MORE ABOUT THE PACK
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Product Roadmap */}
      <section className="py-20 px-4 bg-midnight">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="font-brand text-primary text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="font-display text-5xl sm:text-7xl text-white">CURRENT PRODUCTS</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ROADMAP.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className={`bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4 ${item.blur ? 'opacity-60' : ''}`}
              >
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className={`font-brand text-white text-sm ${item.blur ? 'blur-[2px]' : ''}`}>{item.label}</p>
                </div>
                <span className={`${item.color} text-white font-brand text-xs px-3 py-1 rounded-full flex-shrink-0`}>
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-6xl sm:text-8xl text-white mb-4">READY TO JOIN US?</h2>
            <p className="font-body text-white/80 text-xl mb-10 max-w-xl mx-auto">
              Big dogs deserve better gear. We're here to deliver it, one bag at a time.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-midnight text-white font-brand text-lg px-8 py-4 rounded-full hover:bg-bark transition-colors border-2 border-midnight shadow-[4px_4px_0_#fff]"
              >
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-midnight font-brand text-lg px-8 py-4 rounded-full hover:bg-cream transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}