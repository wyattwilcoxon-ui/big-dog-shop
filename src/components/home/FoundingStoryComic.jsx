import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Target, Crown } from 'lucide-react';

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
            whileHover={{ scale: 1.03, rotate: -1 }}
            className="bg-white rounded-2xl border-bold shadow-cartoon overflow-hidden"
          >
            <div className="bg-primary/10 px-4 py-3 border-b-2 border-midnight flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <h3 className="font-display text-2xl text-midnight">PANEL 1: ENTER BOSA</h3>
            </div>
            <div className="p-6">
              <div className="aspect-[4/3] overflow-hidden rounded-lg border-2 border-midnight mb-4 relative">
                <img
                  src="https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/b8996936f_IMG_9079.jpg"
                  alt="Bosa (left) and Carmen (right)"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-primary text-white font-brand text-xs px-2 py-1 rounded-full shadow-cartoon-sm">
                  125 LBS OF CHAOS
                </div>
              </div>
              <p className="font-body text-pebble text-sm leading-relaxed">
                Megan adopts <strong>Bosa</strong>, a 125-lb German Shepherd with the appetite of a vacuum and the digestive system of a fire hose. Standard bags? They <strong>explode on contact</strong>. She's burning through <strong>8 bags per day</strong>. Her wallet is screaming.
              </p>
            </div>
          </motion.div>

          {/* Panel 2: Joni & Max */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="bg-white rounded-2xl border-bold shadow-cartoon overflow-hidden"
          >
            <div className="bg-secondary/10 px-4 py-3 border-b-2 border-midnight flex items-center gap-2">
              <Crown className="w-5 h-5 text-secondary" />
              <h3 className="font-display text-2xl text-midnight">PANEL 2: MEET THE GREAT DANE</h3>
            </div>
            <div className="p-6">
              <div className="aspect-[4/3] overflow-hidden rounded-lg border-2 border-midnight mb-4 relative">
                <img
                  src="https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/244a631d7_IMG_4554.jpg"
                  alt="Joni with her Great Dane Max"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 30%' }}
                />
                <div className="absolute top-2 right-2 bg-secondary text-white font-brand text-xs px-2 py-1 rounded-full shadow-cartoon-sm">
                  TALLER THAN YOUR TODDLER
                </div>
              </div>
              <p className="font-body text-pebble text-sm leading-relaxed">
                Joni's Great Dane <strong>Max</strong> doesn't do anything small. His harness? "One size fits all" means <strong>all small dogs</strong>. Collars, leashes, toys — everything's built for dogs that weigh 20 pounds. Max is not impressed.
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
            <div className="bg-sky/10 px-4 py-3 border-b-2 border-midnight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-sky" />
              <h3 className="font-display text-2xl text-midnight">PANEL 3: THE PARKING LOT EPIPHANY</h3>
            </div>
            <div className="p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <p className="font-body text-pebble text-base leading-relaxed">
                  Megan and Joni meet at the dog park. They compare notes. <strong>Eight bags a day.</strong> <strong>Nothing fits.</strong> <strong>Everything breaks.</strong> They look at each other with the intensity of two women who have had ENOUGH. The universe trembles.
                </p>
                <p className="font-display text-primary text-2xl mt-4 text-center animate-pulse">"WHY. DOESN'T. THIS. EXIST?!"</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-7xl animate-bounce">💡</div>
                <div className="text-4xl animate-spin">🤯</div>
              </div>
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
            <div className="bg-primary/10 px-4 py-3 border-b-2 border-midnight flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              <h3 className="font-display text-2xl text-midnight">PANEL 4: AND SO IT BEGAN</h3>
            </div>
            <div className="p-6 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <p className="font-body text-pebble text-base leading-relaxed max-w-2xl mx-auto mb-4">
                Out of frustration, desperation, and an ungodly amount of dog poop, <strong>Big Dog Life™</strong> was born in Bellefontaine, Ohio in 2024. A company built <strong>by big-dog owners, for big-dog owners</strong>. Because apparently, nobody else was going to do it.
              </p>
              <p className="font-display text-primary text-xl font-bold">Because Big Dogs Have Big Needs.™ (And We Give a $h!t.)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}