import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Target, Users } from 'lucide-react';

const HERO_IMAGE = 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/aaa6bb62f_IMG_9458.jpg';

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
  { value: '4', label: 'Partners. All big-dog owners.', sub: 'Built from lived experience' },
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
    bio: 'After adopting Bosa, a 125-pound German Shepherd with absolutely zero shame, Megan realized she was going through 8 poop bags a day. Her finance background and frustration with the market turned a personal problem into a company.',
    wide: false,
  },
  {
    name: 'Joni Dailey',
    role: 'Co-Founder & Brand Director',
    photo: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/0ef71dcef_Joni.png',
    bio: 'Owner of two Great Danes, Max and Caesar. Joni brings creative direction, marketing, and retail partnership strategy, ensuring every product and message reflects the brand\'s personality and values.',
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
  { emoji: '✅', label: 'XL Plant-Based Waste Bags', status: 'Available Now', color: 'bg-secondary', blur: false },
  { emoji: '✅', label: 'Leash Pouches (fit XL rolls)', status: 'Available Now', color: 'bg-secondary', blur: false },
  { emoji: '🔨', label: 'Handcrafted Leashes & Collars', status: 'In Development', color: 'bg-sandy', blur: true },
  { emoji: '🔜', label: 'Orthopedic Large-Breed Beds', status: 'Coming Soon', color: 'bg-primary', blur: true },
  { emoji: '🔜', label: 'Weather-Resistant Apparel', status: 'Coming Soon', color: 'bg-primary', blur: true },
  { emoji: '🔜', label: 'Single-Ingredient Treats', status: 'Coming Soon', color: 'bg-primary', blur: true },
];

const BOKEH = [
  { left: '8%',  top: '15%', size: 180, color: 'rgba(244,97,14,0.18)',  delay: 0,   dur: 7 },
  { left: '75%', top: '8%',  size: 120, color: 'rgba(245,166,35,0.14)', delay: 1,   dur: 9 },
  { left: '88%', top: '38%', size: 200, color: 'rgba(244,97,14,0.10)',  delay: 0.5, dur: 11 },
  { left: '3%',  top: '50%', size: 140, color: 'rgba(245,166,35,0.12)', delay: 1.5, dur: 8 },
];

export default function About() {
  return (
    <main className="bg-background min-h-screen">

      {/* Hero — photo on top, text below */}
      <section className="bg-midnight overflow-hidden">
        {/* Photo — full width, fades into dark at bottom */}
        <div className="relative w-full" style={{ height: 'clamp(400px, 70vh, 800px)' }}>
          <img src={HERO_IMAGE} alt="Big Dog Life team" className="w-full h-full object-cover opacity-85" style={{ objectPosition: '50% 35%' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #0F1D3C 0%, transparent 20%, transparent 55%, #0F1D3C 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0F1D3C 0%, transparent 15%, transparent 85%, #0F1D3C 100%)' }} />
          {BOKEH.map((b, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{ left: b.left, top: b.top, width: b.size, height: b.size, background: b.color, filter: 'blur(40px)' }}
              animate={{ y: [0, -20, 0], scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ delay: b.delay, duration: b.dur, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>
        {/* Text — overlaps up into the faded photo */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-2 -mt-24 relative z-10">
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

      {/* Founding Story */}
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
                  125-pound German Shepherd. Bosa left, Carmen (passed April 2026, deeply missed) right. Going through up to <strong>8 bags per walk</strong> — standard bags split and failed every time.
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
                  alt="Joni with her Great Danes Max and Caesar"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 30%' }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl text-midnight mb-2">JONI HAD THE SAME PROBLEM</h3>
                <p className="font-body text-pebble text-sm leading-relaxed">
                  Joni owned two Great Danes, Max and Caesar, and was dealing with the same frustrations. Bags that didn't fit, accessories built for dogs a third the size.
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

      {/* Team */}
      <section className="py-12 sm:py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
            <p className="font-brand text-primary text-sm uppercase tracking-widest mb-3">The Humans</p>
            <h2 className="font-display text-5xl sm:text-7xl text-midnight">THE PACK</h2>
            <p className="font-body text-pebble mt-3 text-lg">Bellefontaine, Ohio, where big dogs run the show.</p>
          </motion.div>

          {/* Row 1: Megan & Joni */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
            {TEAM.filter(m => !m.wide).map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl border-bold shadow-cartoon-sm overflow-hidden cursor-default"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6">
                  <h3 className="font-brand text-midnight text-lg leading-tight">{member.name}</h3>
                  <p className="font-brand text-primary text-xs mb-2">{member.role}</p>
                  <p className="font-body text-pebble text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Row 2: Doug & Amber — full width */}
          {TEAM.filter(m => m.wide).map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl border-bold shadow-cartoon-sm overflow-hidden cursor-default"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/2 aspect-[4/3] sm:aspect-auto overflow-hidden flex-shrink-0">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" style={{display:'block', objectPosition: '50% 25%'}} />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="font-brand text-midnight text-lg leading-tight">{member.name}</h3>
                  <p className="font-brand text-primary text-xs mb-2">{member.role}</p>
                  <p className="font-body text-pebble text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Roadmap */}
      <section className="py-20 px-4 bg-midnight">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="font-brand text-primary text-sm uppercase tracking-widest mb-3">What's Coming</p>
            <h2 className="font-display text-5xl sm:text-7xl text-white">PRODUCT ROADMAP</h2>
            <p className="font-body text-stone text-lg mt-3">Starting with the basics. Building the whole big-dog lifestyle.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ROADMAP.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={!item.blur ? { scale: 1.03 } : {}}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4"
              >
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <div className={`flex-1 min-w-0 ${item.blur ? 'blur-sm select-none' : ''}`}>
                  <p className="font-brand text-white text-sm">{item.label}</p>
                </div>
                <span className={`${item.blur ? 'blur-sm select-none' : ''} ${item.color} text-white font-brand text-xs px-3 py-1 rounded-full flex-shrink-0`}>
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center font-brand text-stone text-sm mt-8"
          >
            👀 Keep an eye out for more products coming soon.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-6xl sm:text-8xl text-white mb-4">JOIN THE PACK</h2>
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