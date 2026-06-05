import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ContactLegal() {
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
          
          <h1 className="font-display text-5xl sm:text-6xl text-midnight mb-4">Contact & Legal Notice</h1>
          <p className="font-body text-pebble text-sm mb-8">Effective Date: January 1, 2025</p>

          <div className="bg-white border-4 border-midnight rounded-2xl p-6 sm:p-8 shadow-cartoon-sm">
            <Section title="6.1 Company Information">
              <ul className="space-y-1">
                <li><strong>Legal Name:</strong> Big Dog Life LLC</li>
                <li><strong>State of Formation:</strong> Ohio</li>
                <li><strong>Principal Office:</strong> Bellefontaine, Ohio</li>
                <li><strong>Website:</strong> bigdoglife.com</li>
              </ul>
            </Section>

            <Section title="6.2 Contact Information">
              Have a question, concern, or issue? We handle everything in-house and we want to hear from you. Reach out and a member of our team will get back to you promptly.
              <br /><br />
              <strong>Email:</strong> [INSERT CONTACT EMAIL]
              <br />
              <strong>Mailing Address:</strong> [INSERT MAILING ADDRESS], Bellefontaine, OH [ZIP]
              <br /><br />
              Whether it's a return, an accessibility request, a legal notice, or just a question about your order — one email gets it to the right person.
            </Section>

            <Section title="6.3 Trademark & IP Notice">
              "Big Dog Life" is a registered trademark of Big Dog Life LLC. The Bosie Bag™ product name is also registered IP. Unauthorized use of these marks is strictly prohibited and may result in legal action. All rights reserved.
            </Section>

            <Section title="6.4 Copyright Notice">
              © 2024–2025 Big Dog Life LLC. All content on this website, including but not limited to text, graphics, logos, images, audio clips, and software, is the property of Big Dog Life LLC or its content suppliers and is protected by applicable copyright laws. Any reproduction, distribution, or use without written permission is prohibited.
            </Section>

            <Section title="6.5 DMCA Notice">
              If you believe that any content on our Site infringes upon your copyright, please send a written notice to us at the email address on our Contact page. Your notice must include: (1) your signature; (2) identification of the copyrighted work; (3) identification of the infringing material; (4) your contact information; (5) a statement of good faith belief; and (6) a statement of accuracy under penalty of perjury.
            </Section>

            <div className="mt-8 pt-6 border-t-2 border-fog">
              <p className="font-brand text-midnight text-center">
                Big Dog Life LLC • We Give a $h!t • bigdoglife.com
              </p>
            </div>
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