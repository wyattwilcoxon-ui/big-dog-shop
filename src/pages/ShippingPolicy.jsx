import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ShippingPolicy() {
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
          
          <h1 className="font-display text-5xl sm:text-6xl text-midnight mb-4">Shipping Policy</h1>
          <p className="font-body text-pebble text-sm mb-8">Last Updated: January 1, 2025</p>

          <div className="bg-white border-4 border-midnight rounded-2xl p-6 sm:p-8 shadow-cartoon-sm">
            <p className="font-body text-midnight mb-6">
              Big Dog Life LLC is headquartered in Bellefontaine, Ohio. We ship to all 50 U.S. states. International shipping availability will be announced if and when offered.
            </p>

            <Section title="4.1 Processing Time">
              Orders are processed within 1–3 business days (Monday–Friday, excluding federal holidays). Orders placed on weekends or holidays will begin processing the next business day. You will receive a confirmation email with tracking information once your order ships.
            </Section>

            <Section title="4.2 Shipping Methods & Estimates">
              Estimated delivery windows after order processing are as follows:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Standard Shipping:</strong> 5–7 business days.</li>
                <li><strong>Expedited Shipping:</strong> 2–3 business days (if offered at checkout).</li>
              </ul>
              Delivery estimates are not guaranteed and may be affected by carrier delays, weather, or other factors outside our control.
            </Section>

            <Section title="4.3 Shipping Costs">
              Shipping costs are calculated at checkout based on order weight, dimensions, and delivery destination. Big Dog Life LLC reserves the right to adjust shipping charges and policies at any time. Free shipping thresholds, if offered, will be displayed on the Site.
            </Section>

            <Section title="4.4 Lost or Delayed Shipments">
              If your tracking information shows your package as delivered but you have not received it, please: (1) check with neighbors or building management; (2) contact the carrier directly; and (3) reach out to us if the issue is unresolved after 2 business days. We will work with you to investigate and resolve the matter.
            </Section>

            <Section title="4.5 Address Accuracy">
              Customers are responsible for providing accurate and complete shipping addresses. Big Dog Life LLC is not responsible for packages delayed or undeliverable due to incorrect addresses. If a package is returned to us due to an address error, you may be charged a re-shipment fee.
            </Section>

            <Section title="4.6 P.O. Boxes & APO/FPO">
              We currently ship to P.O. Boxes and APO/FPO addresses via USPS where available. Additional transit time may apply.
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