import React from 'react';
import LegalPage from './LegalPage';

const SECTIONS = [
  {
    title: '4.1 Processing Time',
    content: 'Orders are processed within 1–3 business days (Monday–Friday, excluding federal holidays). Orders placed on weekends or holidays will begin processing the next business day. You will receive a confirmation email with tracking information once your order ships.'
  },
  {
    title: '4.2 Shipping Methods & Estimates',
    content: (
      <>
        Estimated delivery windows after order processing are as follows:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Standard Shipping:</strong> 5–7 business days.</li>
          <li><strong>Expedited Shipping:</strong> 2–3 business days (if offered at checkout).</li>
        </ul>
        Delivery estimates are not guaranteed and may be affected by carrier delays, weather, or other factors outside our control.
      </>
    )
  },
  {
    title: '4.3 Shipping Costs',
    content: 'Shipping costs are calculated at checkout based on order weight, dimensions, and delivery destination. Big Dog Life LLC reserves the right to adjust shipping charges and policies at any time. Free shipping thresholds, if offered, will be displayed on the Site.'
  },
  {
    title: '4.4 Lost or Delayed Shipments',
    content: 'If your tracking information shows your package as delivered but you have not received it, please: (1) check with neighbors or building management; (2) contact the carrier directly; and (3) reach out to us if the issue is unresolved after 2 business days. We will work with you to investigate and resolve the matter.'
  },
  {
    title: '4.5 Address Accuracy',
    content: 'Customers are responsible for providing accurate and complete shipping addresses. Big Dog Life LLC is not responsible for packages delayed or undeliverable due to incorrect addresses. If a package is returned to us due to an address error, you may be charged a re-shipment fee.'
  },
  {
    title: '4.6 P.O. Boxes & APO/FPO',
    content: 'We currently ship to P.O. Boxes and APO/FPO addresses via USPS where available. Additional transit time may apply.'
  }
];

export default function ShippingPolicy() {
  return <LegalPage title="Shipping Policy" lastUpdated="January 1, 2025" sections={SECTIONS} />;
}