import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Accessibility() {
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
          
          <h1 className="font-display text-5xl sm:text-6xl text-midnight mb-4">Accessibility Statement</h1>
          <p className="font-body text-pebble text-sm mb-8">Last Updated: January 1, 2025</p>

          <div className="bg-white border-4 border-midnight rounded-2xl p-6 sm:p-8 shadow-cartoon-sm">
            <p className="font-body text-midnight mb-6">
              Big Dog Life LLC is committed to ensuring that our website is accessible to everyone, including individuals with disabilities. We believe that all people — regardless of ability — deserve full access to our products, content, and services.
            </p>

            <Section title="5.1 Our Commitment">
              We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible to people with disabilities, including those who are blind or have low vision, are deaf or hard of hearing, have motor impairments, or have cognitive or learning disabilities.
            </Section>

            <Section title="5.2 Accessibility Features">
              Current and ongoing accessibility features of bigdoglife.com include:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Semantic HTML markup to support screen readers and assistive technologies.</li>
                <li>Alt text on all meaningful images.</li>
                <li>Sufficient color contrast ratios between text and backgrounds.</li>
                <li>Keyboard navigability throughout the checkout process.</li>
                <li>Clear, consistent navigation and page structure.</li>
                <li>No content that flashes more than three times per second (to reduce seizure risk).</li>
                <li>Readable font sizes and scalable text without loss of functionality.</li>
              </ul>
            </Section>

            <Section title="5.3 Known Limitations">
              While we are actively working to improve accessibility across the Site, some third-party integrations or legacy content may not yet fully conform to WCAG 2.1 AA standards. We are committed to identifying and addressing these gaps on an ongoing basis.
            </Section>

            <Section title="5.4 Feedback & Reporting">
              If you experience any difficulty accessing our website or if any content is inaccessible to you, we want to know. Email us at the address on our Contact page. When reporting an issue, please include:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>The web address (URL) of the page where you encountered the issue.</li>
                <li>A description of the accessibility barrier.</li>
                <li>The assistive technology or browser you were using (if known).</li>
              </ul>
              We will respond to accessibility feedback within 5 business days and strive to resolve reported issues as quickly as possible.
            </Section>

            <Section title="5.5 Formal Complaints">
              If you are not satisfied with our response, you may contact the U.S. Department of Justice's ADA information line or file a complaint with the relevant federal or state agency.
            </Section>

            <Section title="5.6 Ongoing Improvement">
              Accessibility is not a one-time project — it is an ongoing commitment. We conduct periodic reviews of our Site, train our team on accessibility best practices, and prioritize accessibility considerations in all future development work.
            </Section>
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