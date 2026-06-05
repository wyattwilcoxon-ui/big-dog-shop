import React from 'react';
import LegalPage from './LegalPage';

const SECTIONS = [
  {
    title: '2.1 Our Guarantee',
    content: 'Big Dog Life LLC wants you and your big dog to be completely satisfied. If you are unhappy with your purchase for any reason, we offer a straightforward return and refund process outlined below.'
  },
  {
    title: '2.2 Return Eligibility',
    content: (
      <>
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
      </>
    )
  },
  {
    title: '2.3 Defective or Damaged Items',
    content: 'If you receive a defective, damaged, or incorrect item, please contact us within 7 days of delivery. We will arrange a replacement or full refund at no cost to you, including return shipping. Photo documentation of the damage may be requested.'
  },
  {
    title: '2.4 How to Initiate a Return',
    content: (
      <>
        To start a return, email us at bark@thebigdoglife.com. Include your order number, the item(s) you wish to return, and the reason for the return. We will respond within 2 business days with return instructions.
        <br /><br />
        Do not send items back without receiving a Return Merchandise Authorization (RMA) number. Returns without an RMA will not be accepted.
      </>
    )
  },
  {
    title: '2.5 Return Shipping',
    content: 'For non-defective returns, the customer is responsible for return shipping costs. We recommend using a trackable shipping method, as Big Dog Life LLC is not responsible for packages lost in transit. Original shipping charges are non-refundable.'
  },
  {
    title: '2.6 Refund Processing',
    content: 'Once your return is received and inspected, we will notify you by email. Approved refunds will be processed to the original payment method within 5–7 business days. Depending on your bank or credit card provider, additional processing time may apply.'
  },
  {
    title: '2.7 Exchanges',
    content: 'We do not offer direct exchanges at this time. If you need a different item, please initiate a return and place a new order.'
  },
  {
    title: '2.8 Cancellations',
    content: 'Orders may be cancelled within 2 hours of placement at no charge. After that window, the order may have entered fulfillment and cannot be cancelled. If your order has shipped, please follow our return process.'
  }
];

export default function RefundPolicy() {
  return <LegalPage title="Return & Refund Policy" lastUpdated="January 1, 2025" sections={SECTIONS} />;
}