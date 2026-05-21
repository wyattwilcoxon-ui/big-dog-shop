import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Target, Users } from 'lucide-react';

const STATS = [
  { value: '$150B', label: 'U.S. pet care market', sub: 'and growing every year' },
  { value: '40%', label: 'of dog owners have large breeds', sub: '70 lbs and above' },
  { value: '2024', label: 'Founded in Ohio', sub: 'Bellefontaine, OH' },
  { value: '4', label: 'Founders. All big-dog owners.', sub: 'Built from lived experience' },
];

const PROMISES = [
  {
    icon: Target,
    label: 'Right Size',
    color: 'bg-primary',
    description: 'Products designed specifically for dogs 70 lbs and above — not just "XL" relabeled smalls.',
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
    initial: 'M',
    color: 'bg-primary',
    bio: 'After adopting Bosa — a 125-lb German Shepherd with zero shame — Megan realized she was going through 8 poop bags a day. Her finance background and frustration with the market turned a personal problem into a company.',
  },
  {
    name: 'Joni Dailey',
    role: 'Co-Founder & Brand Director',
    initial: 'J',
    color: 'bg-secondary',
    bio: 'Owner of two Great Danes, Max and Ellie. Joni brings creative direction, marketing, and retail partnership strategy — ensuring every product and message reflects the brand\'s personality and values.',
  },
  {
    name: 'Doug Chivington',
    role: 'Partner & Operations Director',
    initial: 'D',
    color: 'bg-sky',
    bio: 'Doug handles sourcing, inventory logistics, and fulfillment. He manages supplier relationships and quality control — making sure your order actually shows up, on time, intact.',
  },
  {
    name: 'Amber Chivington',
    role: 'Partner & Marketing Strategist',
    initial: 'A',
    color: 'bg-sandy',
    bio: 'Amber drives content creation, digital advertising, and brand partnerships. Her focus on storytelling and engagement is how Big Dog Life builds loyalty that lasts beyond the first purchase.',
  },
];

const ROADMAP = [
  { emoji: '✅', label: 'XL Plant-Based Waste Bags', status: 'Available Now', color: 'bg-secondary' },
  { emoji: '✅', label: 'Leash Pouches (fit XL rolls)', status: 'Available Now', color: 'bg-secondary' },
  { emoji: '🔨', label: 'Handcrafted Leashes & Collars', status: 'In Development', color: 'bg-sandy' },
  { emoji: '🔜', label: 'Orthopedic Large-Breed Beds', status: 'Coming Soon', color: 'bg-primary' },
  { emoji: '🔜', label: 'Weather-Resistant Apparel', status: 'Coming Soon', color: 'bg-primary' },
  { emoji: '🔜', label: 'Single-Ingredient Treats', status: 'Coming Soon', color: 'bg-primary' },
];

export default function About() {
  return (
    <main className="bg-background min-h-screen">

      {/* Hero */}
      <section className="bg-midnight pt-24 pb-16 sm:pt-32 sm:pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, #F4610E 0%, transparent 50%), radial-gradient(circle at 80% 20%, #2A9134 0%, transparent 50%)'
        }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-brand text-primary text-xs sm:text-sm uppercase tracking-widest mb-4">Our Story</p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-9xl text-white leading-tight mb-4 sm:mb-6">
              BUILT FOR<br /><span className="text-primary">BIG DOGS.</span><br />BY BIG DOG<br />PEOPLE.
            </h1>
            <p className="font-body text-stone text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
              Big Dog Life is an Ohio-based lifestyle brand dedicated to improving life for large-breed dogs and the people who love them. We design, source, and curate high-quality products tailored to the real-world needs of dogs 70 pounds and above.
            </p>
            <p className="font-display text-primary text-xl sm:text-2xl lg:text-3xl mt-4 sm:mt-6">
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
              <div className="font-body text-white/60 text-xs mt-0.5">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 sm:py-20 px-4 bg-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <p className="font-brand text-primary text-xs sm:text-sm uppercase tracking-widest mb-3">Mission</p>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-midnight leading-tight">
              OUR MISSION
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-midnight rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 text-center border-4 border-midnight shadow-cartoon"
          >
            <p className="font-body text-white text-base sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
              To make life easier, healthier, and more fulfilling for large-breed dogs and the people who love them — through durable, high-quality essentials that fit the unique needs of big dogs, built on honest education, responsible sourcing, and genuine community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 Brand Promises */}
      <section className="py-12 sm:py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
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
                className="bg-white rounded-2xl p-6 sm:p-8 border-bold shadow-cartoon-sm"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-brand text-primary text-sm uppercase tracking-widest mb-3">How It Started</p>
            <h2 className="font-display text-5xl sm:text-7xl text-midnight">THE REAL STORY</h2>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border-bold shadow-cartoon-sm overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/img_9679_a5725f64.jpg"
                    alt="Bosa the German Shepherd"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center border-2 border-midnight mb-4">
                    <span className="font-display text-white text-lg">1</span>
                  </div>
                  <h3 className="font-display text-4xl text-midnight mb-3">MEET BOSA</h3>
                  <p className="font-body text-pebble leading-relaxed">
                    Megan adopted Bosa — a 125-pound German Shepherd with absolutely zero chill. Combined with her other German Shepherd Carmen, she was going through up to <strong>8 poop bags per walk</strong>. Standard bags split, leaked, and failed every single time.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-midnight rounded-2xl border-bold shadow-cartoon-sm overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 sm:p-10 flex flex-col justify-center order-2 lg:order-1">
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center border-2 border-white/30 mb-4">
                    <span className="font-display text-white text-lg">2</span>
                  </div>
                  <h3 className="font-display text-4xl text-white mb-3">JONI HAD THE SAME PROBLEM</h3>
                  <p className="font-body text-stone leading-relaxed">
                    Her friend Joni owned two Great Danes, Max and Ellie, and was dealing with the same frustrations — bags that didn't fit, harnesses that were too small, and accessories built for dogs a third the size. Two big-dog owners. One shared rage.
                  </p>
                </div>
                <div className="aspect-[4/3] lg:aspect-auto order-1 lg:order-2">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/megan-both-dogs_44a2bc9c.jpg"
                    alt="Megan with her dogs"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-2xl border-bold shadow-cartoon p-10 text-center"
            >
              <p className="font-display text-3xl sm:text-5xl text-white leading-tight">
                "WHY DOESN'T THIS EXIST?"
              </p>
              <p className="font-body text-white/80 text-lg mt-4 max-w-xl mx-auto">
                Standing in a park, holding a compromised bag at arm's length, they looked at each other — and Big Dog Life was born. Founded in Bellefontaine, Ohio in 2024.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-brand text-primary text-sm uppercase tracking-widest mb-3">The Humans</p>
            <h2 className="font-display text-5xl sm:text-7xl text-midnight">THE POOP SQUAD</h2>
            <p className="font-body text-pebble mt-3 text-lg">Bellefontaine, Ohio — where big dogs run the show.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border-bold shadow-cartoon-sm p-7 flex gap-5"
              >
                <div className={`w-14 h-14 ${member.color} rounded-2xl flex-shrink-0 flex items-center justify-center border-2 border-midnight`}>
                  <span className="font-display text-white text-2xl">{member.initial}</span>
                </div>
                <div>
                  <h3 className="font-brand text-midnight text-lg leading-tight">{member.name}</h3>
                  <p className="font-brand text-primary text-xs mb-2">{member.role}</p>
                  <p className="font-body text-pebble text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Roadmap */}
      <section className="py-20 px-4 bg-midnight">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
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
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4"
              >
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-brand text-white text-sm">{item.label}</p>
                </div>
                <span className={`${item.color} text-white font-brand text-xs px-3 py-1 rounded-full flex-shrink-0`}>
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-stone text-sm text-center mt-8"
          >
            Leashes & Collars in development with Ohio partner River City Leather (Gallipolis, OH) — handcrafted, local, built to last.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-6xl sm:text-8xl text-white mb-4">JOIN THE PACK</h2>
            <p className="font-body text-white/80 text-xl mb-10 max-w-xl mx-auto">
              Big dogs deserve better gear. We're here to deliver it — one bag at a time.
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