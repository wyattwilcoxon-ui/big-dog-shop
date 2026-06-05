import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = [
  {
    q: 'How big are the Bosie Bags?',
    a: '12" × 14" — perfect for big poops and big hands. Designed for large and giant breed dogs who believe in going big or going home.',
  },
  {
    q: 'Are they actually leak-proof?* Is anything?!',
    a: 'Look, we\'re going to be real with you — nothing is 100% leak-proof in this world. But the Bosie Bag™ is extra-thick, extra-wide, and built specifically for big dogs. We\'ve done everything humanly possible to keep your hands clean. The rest is between you and the universe.',
  },
  {
    q: 'How many bags come in a roll?',
    a: 'Each roll has 15 bags. The 8-Pack gives you 120 bags total (8 rolls × 15 bags) — that\'s weeks of worry-free walks, even with the biggest of boys.',
  },
  {
    q: 'Do you ship outside of the US?',
    a: 'Not yet — we currently ship within the United States only. Big dogs exist everywhere and we know it. For now, US only. Stay tuned.',
  },
  {
    q: 'What if I don\'t like them?',
    a: 'If our bags don\'t make your walks better, reach out to us. We take pride in our products and we\'ll make it right. That\'s the Big Dog guarantee.',
  },
  {
    q: 'Can I use these for small dogs too?',
    a: 'Absolutely — as long as you don\'t put the dog in the bag. Oversized bags work great for any size dog. Honestly, more room = more peace of mind. Your tiny pup deserves the upgrade too.',
  },
  {
    q: 'Do you offer bulk pricing?',
    a: 'Yes! Dog walkers, groomers, kennels, and shelters can email us at info@bigdoglife.com for bulk orders. We don\'t judge the quantity.',
  },
  {
    q: 'Is your dog\'s poop bigger than their personality?',
    a: 'Impossible. But it\'s probably close. That\'s exactly why we built the Bosie Bag™ — because big personalities come with big responsibilities. And big messes.',
  },
  {
    q: 'When are new products launching?',
    a: 'We\'ve got big plans (get it?). Sign up for notifications on our product pages and be the first to know when new items drop.',
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-primary pt-20 pb-12 sm:pt-32 sm:pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-brand text-white/80 text-sm sm:text-lg mb-2">Got Questions?</p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white leading-tight">WE'VE GOT ANSWERS</h1>
            <p className="font-body text-white/70 text-base sm:text-lg mt-4 max-w-xl">
              (And probably a poop joke to go with each one.)
            </p>
          </motion.div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <AccordionItem
                value={`faq-${i}`}
                className="bg-white rounded-2xl border-bold shadow-cartoon-sm px-4 sm:px-6 overflow-hidden data-[state=open]:shadow-cartoon"
              >
                <AccordionTrigger className="font-brand text-base sm:text-lg text-midnight py-4 sm:py-5 hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-pebble leading-relaxed pb-4 sm:pb-5 text-sm sm:text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-cream rounded-2xl border-bold shadow-cartoon p-8 sm:p-12"
        >
          <span className="font-display text-5xl">🐾</span>
          <h3 className="font-display text-3xl text-midnight mt-4">STILL HAVE QUESTIONS?</h3>
          <p className="font-body text-pebble mt-3 mb-6">
            We don't bite (but our dogs might lick you).
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white font-brand px-8 py-4 rounded-xl shadow-cartoon-sm border-bold transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-orange-hot"
          >
            Contact Us 📧
          </Link>
        </motion.div>
      </div>
    </div>
  );
}