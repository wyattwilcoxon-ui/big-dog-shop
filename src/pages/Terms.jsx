import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Terms() {
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
          
          <h1 className="font-display text-5xl sm:text-6xl text-midnight mb-4">Terms & Conditions</h1>
          <p className="font-body text-pebble text-sm mb-8">Last Updated: January 1, 2025</p>

          <div className="bg-white border-4 border-midnight rounded-2xl p-6 sm:p-8 shadow-cartoon-sm">
            <p className="font-body text-midnight mb-6">
              Welcome to Big Dog Life LLC ("Big Dog Life," "we," "us," or "our"). By accessing or using our website located at bigdoglife.com (the "Site") and purchasing our products, you agree to be bound by these Terms and Conditions ("Terms"). Please read them carefully before placing an order.
            </p>

            <Section title="1.1 Acceptance of Terms">
              By using this Site, you confirm that you are at least 18 years of age, have read and understood these Terms, and agree to be legally bound by them. If you do not agree, please discontinue use of the Site immediately.
            </Section>

            <Section title="1.2 Products & Descriptions">
              Big Dog Life specializes in oversized waste management products designed for large-breed dogs (70+ lbs), including the Bosie Bag™ and related accessories. We make every effort to accurately describe our products, including size, material, and intended use. However, we do not warrant that product descriptions or other content on the Site are error-free, complete, or current.
              <br /><br />
              Product colors may appear slightly different due to monitor settings.
              <br /><br />
              Bundle contents are subject to change and will be clearly disclosed at checkout.
              <br /><br />
              The Bosie Bag™ name is registered intellectual property of Big Dog Life LLC.
            </Section>

            <Section title="1.3 Pricing & Payment">
              All prices are listed in U.S. dollars and are subject to change without notice. We reserve the right to correct pricing errors at any time. Orders placed at an incorrect price due to a system error may be cancelled with a full refund. We accept all major credit cards and other payment methods as listed at checkout.
            </Section>

            <Section title="1.4 Order Acceptance">
              Placing an order does not constitute a binding contract until we confirm and ship your order. We reserve the right to refuse or cancel any order for any reason, including but not limited to: suspected fraud, product unavailability, or pricing errors. If we cancel your order, you will receive a full refund within 5–7 business days.
            </Section>

            <Section title="1.5 Intellectual Property">
              "Big Dog Life" is a registered trademark. The Bosie Bag™ product name is also registered IP. All content on the Site — including logos, graphics, text, photography, and copy — is the exclusive property of Big Dog Life LLC and may not be reproduced, distributed, or used without prior written permission.
            </Section>

            <Section title="1.6 Prohibited Use">
              You agree not to:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Reproduce, resell, or redistribute Big Dog Life products without written authorization.</li>
                <li>Use the Site for any unlawful purpose or to violate any applicable laws.</li>
                <li>Attempt to gain unauthorized access to any part of the Site or its systems.</li>
                <li>Use automated tools, scrapers, or bots to collect data from the Site.</li>
                <li>Post or transmit any content that is defamatory, harmful, or infringing.</li>
              </ul>
            </Section>

            <Section title="1.7 Disclaimer of Warranties">
              The Site and all products are provided "as is" and "as available" without warranties of any kind, either express or implied. Big Dog Life LLC disclaims all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </Section>

            <Section title="1.8 Limitation of Liability">
              To the fullest extent permitted by law, Big Dog Life LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Site or purchase of our products. Our total liability shall not exceed the amount you paid for the specific product in question.
            </Section>

            <Section title="1.9 Governing Law">
              These Terms are governed by the laws of the State of Ohio, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Logan County, Ohio.
            </Section>

            <Section title="1.10 Changes to Terms">
              We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated effective date. Continued use of the Site after changes constitutes acceptance of the new Terms.
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