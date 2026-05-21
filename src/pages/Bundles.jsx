import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Bundles() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-green-dark pt-24 pb-16 sm:pt-32 sm:pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-brand text-primary text-lg mb-2">Save More, Scoop More</p>
            <h1 className="font-display text-6xl sm:text-8xl text-white">BUNDLES</h1>
            <p className="font-body text-stone text-lg mt-4 max-w-xl">
              Poop bags, a clip-on dispenser, AND tennis balls? It's basically a walk-day survival kit.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Bundle */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border-bold shadow-cartoon overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-midnight p-8 sm:p-12 flex items-center justify-center min-h-[350px]">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/bundle-3pack-aNiTQbhzy8ugUAt2MDNmVN.webp"
                alt="3-Pack Bundle"
                className="max-h-80 object-contain"
              />
            </div>
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <span className="inline-block bg-secondary text-white font-brand text-xs px-3 py-1 rounded-full w-fit shadow-cartoon-sm mb-4">
                🎁 3-Pack Bundle
              </span>
              <h2 className="font-display text-5xl text-midnight mb-2">THE BIG DOG BUNDLE</h2>
              <p className="font-brand text-pebble text-lg mb-6">Walk Day Essentials</p>
              <p className="font-body text-pebble leading-relaxed mb-8">
                Everything you need for the perfect walk: bags for the business, a dispenser so you're not digging through pockets, and tennis balls for the celebration lap. Because every good poop deserves a reward.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'The Bosie Bag™ 8-Pack (120 bags of pure confidence)',
                  'Bone-shaped bag dispenser with carabiner clip',
                  '3 Big Dog Life branded tennis balls',
                  'Free US shipping (because you deserve it)',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-midnight text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <span className="font-brand text-stone text-sm">Price TBA</span>
                <button className="bg-secondary text-white font-brand px-8 py-4 rounded-xl shadow-cartoon-sm border-bold transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-green-bright">
                  Get Notified 🔔
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-cream rounded-2xl border-bold p-12 shadow-cartoon">
            <span className="font-display text-6xl">🐾</span>
            <h3 className="font-display text-4xl text-midnight mt-4">MORE BUNDLES COMING SOON</h3>
            <p className="font-body text-pebble mt-4 text-lg">
              We've got big plans. (Get it?)
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}