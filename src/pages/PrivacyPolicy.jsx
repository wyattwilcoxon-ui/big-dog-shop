import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
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
          
          <h1 className="font-display text-5xl sm:text-6xl text-midnight mb-4">Privacy Policy</h1>
          <p className="font-body text-pebble text-sm mb-8">Last Updated: January 1, 2025</p>

          <div className="bg-white border-4 border-midnight rounded-2xl p-6 sm:p-8 shadow-cartoon-sm">
            <p className="font-body text-midnight mb-6">
              Big Dog Life LLC ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit bigdoglife.com and make a purchase.
            </p>

            <Section title="3.1 Information We Collect">
              We may collect the following categories of personal information:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Contact Information:</strong> Name, email address, phone number, shipping and billing address.</li>
                <li><strong>Payment Information:</strong> Credit/debit card details processed securely through our payment processor. We do not store full card numbers on our servers.</li>
                <li><strong>Order Information:</strong> Products purchased, order history, and transaction details.</li>
                <li><strong>Device & Usage Data:</strong> IP address, browser type, pages visited, time spent on Site, and referral source.</li>
                <li><strong>Communications:</strong> Messages you send us via email or contact forms.</li>
              </ul>
            </Section>

            <Section title="3.2 How We Use Your Information">
              We use your information to:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Process and fulfill your orders.</li>
                <li>Communicate order status, shipping updates, and customer service matters.</li>
                <li>Send promotional emails and offers (only with your consent; you may opt out at any time).</li>
                <li>Improve our Site, products, and customer experience.</li>
                <li>Comply with legal obligations and prevent fraud.</li>
              </ul>
            </Section>

            <Section title="3.3 Information Sharing">
              We do not sell, trade, or rent your personal information. We may share your data with:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Fulfillment and shipping partners (solely to deliver your order).</li>
                <li>Payment processors operating under PCI-DSS compliance standards.</li>
                <li>Analytics providers (e.g., Google Analytics) using anonymized data.</li>
                <li>Legal authorities when required by law or to protect our rights.</li>
              </ul>
            </Section>

            <Section title="3.4 Cookies">
              Our Site uses cookies and similar tracking technologies to enhance your experience. You may disable cookies through your browser settings; however, some features of the Site may not function properly without them.
            </Section>

            <Section title="3.5 Data Security">
              We implement reasonable technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </Section>

            <Section title="3.6 Your Rights">
              Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal data. To exercise any of these rights, email us at the address on our Contact page. We will respond within 30 days.
            </Section>

            <Section title="3.7 Children's Privacy">
              Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.
            </Section>

            <Section title="3.8 Third-Party Links">
              Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies.
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