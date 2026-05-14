import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Ruler, Heart, Truck } from 'lucide-react';

const PROPS = [
  {
    icon: Shield,
    title: 'Zero Leaks. Zero Panic.',
    description: 'Leak-proof bags that actually keep your hands clean. Revolutionary, we know.',
    color: 'bg-primary',
  },
  {
    icon: Ruler,
    title: 'Built for the Big Boys',
    description: '44% bigger than regular bags. Because your 90-lb Lab doesn\'t make chihuahua poops.',
    color: 'bg-secondary',
  },
  {
    icon: Heart,
    title: 'Made by Dog People',
    description: 'Real big-dog owners who got tired of the same crappy bags. Pun intended.',
    color: 'bg-sky',
  },
  {
    icon: Truck,
    title: 'Ships Fast from Ohio',
    description: 'Because running out of poop bags is an emergency nobody talks about.',
    color: 'bg-sandy',
  },
];

export default function ValueProps() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROPS.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white rounded-2xl p-6 border-bold shadow-cartoon transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
            >
              <div className={`w-14 h-14 ${prop.color} rounded-xl flex items-center justify-center mb-4 shadow-cartoon-sm`}>
                <prop.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-brand text-lg text-midnight mb-2">{prop.title}</h3>
              <p className="font-body text-pebble text-sm leading-relaxed">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}