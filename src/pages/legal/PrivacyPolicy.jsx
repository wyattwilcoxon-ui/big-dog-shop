import React from 'react';
import LegalPage from './LegalPage';

const SECTIONS = [
  {
    title: '3.1 Information We Collect',
    content: (
      <>
        We may collect the following categories of personal information:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Contact Information:</strong> Name, email address, phone number, shipping and billing address.</li>
          <li><strong>Payment Information:</strong> Credit/debit card details processed securely through our payment processor. We do not store full card numbers on our servers.</li>
          <li><strong>Order Information:</strong> Products purchased, order history, and transaction details.</li>
          <li><strong>Device & Usage Data:</strong> IP address, browser type, pages visited, time spent on Site, and referral source.</li>
          <li><strong>Communications:</strong> Messages you send us via email or contact forms.</li>
        </ul>
      </>
    )
  },
  {
    title: '3.2 How We Use Your Information',
    content: (
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Process and fulfill your orders.</li>
        <li>Communicate order status, shipping updates, and customer service matters.</li>
        <li>Send promotional emails and offers (only with your consent; you may opt out at any time).</li>
        <li>Improve our Site, products, and customer experience.</li>
        <li>Comply with legal obligations and prevent fraud.</li>
      </ul>
    )
  },
  {
    title: '3.3 Information Sharing',
    content: (
      <>
        We do not sell, trade, or rent your personal information. We may share your data with:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Fulfillment and shipping partners (solely to deliver your order).</li>
          <li>Payment processors operating under PCI-DSS compliance standards.</li>
          <li>Analytics providers (e.g., Google Analytics) using anonymized data.</li>
          <li>Legal authorities when required by law or to protect our rights.</li>
        </ul>
      </>
    )
  },
  {
    title: '3.4 Cookies',
    content: 'Our Site uses cookies and similar tracking technologies to enhance your experience. You may disable cookies through your browser settings; however, some features of the Site may not function properly without them.'
  },
  {
    title: '3.5 Data Security',
    content: 'We implement reasonable technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.'
  },
  {
    title: '3.6 Your Rights',
    content: 'Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal data. To exercise any of these rights, email us at bark@thebigdoglife.com. We will respond within 30 days.'
  },
  {
    title: "3.7 Children's Privacy",
    content: "Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately."
  },
  {
    title: '3.8 Third-Party Links',
    content: 'Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies.'
  }
];

export default function PrivacyPolicy() {
  return <LegalPage title="Privacy Policy" lastUpdated="January 1, 2025" sections={SECTIONS} metaDescription="Big Dog Life™ Privacy Policy. Learn how we collect, use, and protect your personal information when you shop with us." />;
}