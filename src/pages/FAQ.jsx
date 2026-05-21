import React from 'react';
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
    a: '13" × 15" — that\'s 44% bigger than standard 9" × 12" bags. Designed for dogs over 70 lbs who believe in going big or going home.',
  },
  {
    q: 'Are they actually leak-proof?',
    a: 'Yes. Tested by a 125-lb German Shepherd and two Great Danes. If they can handle these dogs, they can handle anything. Your hands are safe.',
  },
  {
    q: 'How many bags come in a roll?',
    a: 'Each roll has 15 bags. The 8-Pack gives you 120 bags total — that\'s weeks of worry-free walks, even with the biggest of boys.',
  },
  {
    q: 'Do you ship outside of the US?',
    a: 'We\'re currently shipping within the United States only. International shipping is coming soon — big dog energy knows no borders.',
  },
  {
    q: 'What if I don\'t like them?',
    a: 'If our bags don\'t make your walks better, reach out to us. We take pride in our products and we\'ll make it right. That\'s the Big Dog guarantee.',
  },
  {
    q: 'Can I use these for small dogs too?',
    a: 'Absolutely! Oversized bags work for any dog. But let\'s be honest — if your Yorkie needs a 13"×15" bag, we have questions.',
  },
  {
    q: 'Do you offer bulk pricing?',
    a: 'Yes! Dog walkers, groomers, kennels, and shelters can email us at info@bigdoglife.com for bulk orders. We don\'t judge the quantity.',
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
          <a
            href="mailto:info@bigdoglife.com"
            className="inline-flex items-center gap-2 bg-primary text-white font-brand px-8 py-4 rounded-xl shadow-cartoon-sm border-bold transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-orange-hot"
          >
            Email Us 📧
          </a>
        </motion.div>
      </div>
    </div>
  );
}