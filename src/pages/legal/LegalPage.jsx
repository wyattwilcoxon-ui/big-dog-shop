import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LegalPage({ title, lastUpdated, sections }) {
  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="inline-block font-brand text-primary mb-6 hover:underline">
            ← Back to Home
          </Link>
          
          <h1 className="font-display text-5xl sm:text-6xl text-midnight mb-4">{title}</h1>
          {lastUpdated && <p className="font-body text-pebble text-sm mb-8">Last Updated: {lastUpdated}</p>}

          <div className="bg-white border-4 border-midnight rounded-2xl p-6 sm:p-8 shadow-cartoon-sm">
            {sections.map((section, i) => (
              <Section key={i} title={section.title}>
                {section.content}
              </Section>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-6 last:mb-0">
      <h2 className="font-brand text-midnight text-xl mb-3">{title}</h2>
      <p className="font-body text-pebble leading-relaxed">{children}</p>
    </div>
  );
}