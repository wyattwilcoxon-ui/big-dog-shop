import React from 'react';
import { motion } from 'framer-motion';
import CountUp from '../ui/CountUp';
import { PoopIcon, PawIcon, DogFaceIcon, BagIcon } from '../ui/BdlIcons';

const STATS = [
  { Icon: PawIcon, iconProps: { color: '#F4610E' }, value: 44, suffix: '%', label: 'Bigger Than Other Bags' },
  { Icon: BagIcon, value: 120, suffix: '', label: 'Bags Per 8-Pack' },
  { Icon: DogFaceIcon, value: 70, suffix: '+', label: 'Lbs? No Problem.' },
  { Icon: PoopIcon, value: 0, suffix: '', label: 'Leaks. Zero. None.' },
];

export default function StatsBar() {
  return (
    <section className="bg-midnight border-y-4 border-primary py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-2">
                <stat.Icon size={40} {...(stat.iconProps || {})} />
              </div>
              <div className="font-display text-5xl sm:text-6xl text-primary">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-brand text-stone text-xs sm:text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}