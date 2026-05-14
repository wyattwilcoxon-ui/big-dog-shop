import React from 'react';
import { motion } from 'framer-motion';
import { PoopIcon, PawIcon, DogFaceIcon, BagIcon } from '../ui/BdlIcons';

const PROPS = [
  {
    Icon: BagIcon,
    title: 'Zero Leaks. Zero Panic.',
    description: 'Leak-proof bags that actually keep your hands clean. Revolutionary, we know.',
    bg: 'bg-orange-pale',
    border: 'border-primary',
    rotate: -1.5,
  },
  {
    Icon: PoopIcon,
    title: 'Built for the Big Boys',
    description: '44% bigger than regular bags. Your 90-lb Lab doesn\'t make chihuahua poops.',
    bg: 'bg-green-dark',
    border: 'border-secondary',
    rotate: 1,
    dark: true,
  },
  {
    Icon: DogFaceIcon,
    title: 'Made by Dog People',
    description: 'Real big-dog owners who got tired of the same crappy bags. Pun intended.',
    bg: 'bg-sky/20',
    border: 'border-sky',
    rotate: -1,
  },
  {
    Icon: PawIcon,
    iconProps: { color: '#D4924A' },
    title: 'Ships Fast from Ohio',
    description: 'Because running out of poop bags is an emergency nobody talks about.',
    bg: 'bg-sandy/20',
    border: 'border-sandy',
    rotate: 1.5,
  },
];

export default function ValueProps() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROPS.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 40, rotate: prop.rotate }}
              whileInView={{ opacity: 1, y: 0, rotate: prop.rotate }}
              whileHover={{ rotate: 0, y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`${prop.bg} rounded-2xl border-4 ${prop.border} shadow-cartoon p-6 cursor-default`}
            >
              <motion.div
                className="mb-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4 + i * 0.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <prop.Icon size={48} {...(prop.iconProps || {})} />
              </motion.div>
              <h3 className={`font-brand text-lg mb-2 ${prop.dark ? 'text-white' : 'text-midnight'}`}>
                {prop.title}
              </h3>
              <p className={`font-body text-sm leading-relaxed ${prop.dark ? 'text-white/70' : 'text-pebble'}`}>
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}