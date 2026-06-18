import React from 'react';
import { motion } from 'framer-motion';

const LIFESTYLE_IMAGES = [
  { src: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/279f0a194_uuidFCCDCB46-27E4-47D2-9009-F1454D830EAEcode001library3type1mode2loctruecaptrue.jpg', alt: 'Two big dogs hanging out of a car window' },
  { src: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/c03c4dd54_IMG_7231.jpg', alt: 'Fluffy dog in a harness on the grass' },
  { src: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/9db113043_uuid370F16D7-23BD-436E-81A0-C4317798542Dcode001library3type1mode1loctruecaptrue.jpg', alt: 'German Shepherd close up' },
  { src: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/fcc6fddff_uuid3CB31648-9ED0-46D8-97C0-8D2F2E9027B4code001library3type1mode2loctruecaptrue.jpg', alt: 'Great Dane rolling in the grass' },
  { src: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/dfbe04e1c_uuid390A301F-CE43-4315-8972-E9B48D780EA6code001library3type1mode2loctruecaptrue.jpg', alt: 'Great Dane sleeping on a recliner' },
];

export default function LifestyleSection() {
  return (
    <section className="py-16 sm:py-24 bg-midnight overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <p className="font-brand text-primary text-lg mb-2">The Lifestyle</p>
          <h2 className="font-display text-5xl sm:text-7xl text-white">LIVE BOLD. LOVE BIGGER.</h2>
        </motion.div>

        <div className="flex flex-col gap-4 sm:gap-6 items-center">
          {/* Row 1: full width */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}
            className="w-full rounded-2xl overflow-hidden border-4 border-white/20 aspect-video"
          >
            <img src={LIFESTYLE_IMAGES[0].src} alt={LIFESTYLE_IMAGES[0].alt} className="w-full h-full object-cover" />
          </motion.div>

          {/* Row 2: two centered */}
          <div className="flex gap-4 sm:gap-6 w-full justify-center">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="w-1/2 rounded-2xl overflow-hidden border-4 border-white/20 aspect-square"
              >
                <img src={LIFESTYLE_IMAGES[i].src} alt={LIFESTYLE_IMAGES[i].alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          {/* Row 3: two centered */}
          <div className="flex gap-4 sm:gap-6 w-full justify-center">
            {[3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="w-1/2 rounded-2xl overflow-hidden border-4 border-white/20 aspect-square"
              >
                <img src={LIFESTYLE_IMAGES[i].src} alt={LIFESTYLE_IMAGES[i].alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}