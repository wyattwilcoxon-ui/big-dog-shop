import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function RefundPolicy() {
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
          
          <h1 className="font-display text-5xl sm:text-6xl text-midnight mb-4">Return & Refund Policy</h1>
          <p className="font-body text-pebble text-sm mb-8">Last Updated: January 1, 2025</p>

          <div className="bg-white border-4 border-midnight rounded-2xl p-6 sm:p-8 shadow-cartoon-sm">
            <Section title="2.1 Our Guarantee">
              Big Dog Life LLC wants you and your big dog to be completely satisfied. If you are unhappy with your purchase for any reason, we offer a straightforward return and refund process outlined below.
            </Section>

            <Section title="2.2 Return Eligibility">
              To be eligible for a return, your item must meet the following conditions:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Returned within 30 days of the delivery date.</li>
                <li>Unused, unopened, and in original packaging.</li>
                <li>Accompanied by proof of purchase (order confirmation or receipt).</li>
              </ul>
              <br />
              <strong>The following items are NOT eligible for return:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Opened or used bags (for hygiene reasons).</li>
                <li>Items marked as final sale at the time of purchase.</li>
                <li>Gift cards.</li>
              </ul>
            </Section>

            <Section title="2.3 Defective or Damaged Items">
              If you receive a defective, damaged, or incorrect item, please contact us within 7 days of delivery. We will arrange a replacement or full refund at no cost to you, including return shipping. Photo documentation of the damage may be requested.
            </Section>

            <Section title="2.4 How to Initiate a Return">
              To start a return, email us at the address listed in the Contact section of this Site. Include your order number, the item(s) you wish to return, and the reason for the return. We will respond within 2 business days with return instructions.
              <br /><br />
              Do not send items back without receiving a Return Merchandise Authorization (RMA) number. Returns without an RMA will not be accepted.
            </Section>

            <Section title="2.5 Return Shipping">
              For non-defective returns, the customer is responsible for return shipping costs. We recommend using a trackable shipping method, as Big Dog Life LLC is not responsible for packages lost in transit. Original shipping charges are non-refundable.
            </Section>

            <Section title="2.6 Refund Processing">
              Once your return is received and inspected, we will notify you by email. Approved refunds will be processed to the original payment method within 5–7 business days. Depending on your bank or credit card provider, additional processing time may apply.
            </Section>

            <Section title="2.7 Exchanges">
              We do not offer direct exchanges at this time. If you need a different item, please initiate a return and place a new order.
            </Section>

            <Section title="2.8 Cancellations">
              Orders may be cancelled within 2 hours of placement at no charge. After that window, the order may have entered fulfillment and cannot be cancelled. If your order has shipped, please follow our return process.
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