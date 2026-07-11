import React from 'react';
import LegalPage from './LegalPage';

const SECTIONS = [
  {
    title: '1.1 Acceptance of Terms',
    content: 'By using this Site, you confirm that you are at least 18 years of age, have read and understood these Terms, and agree to be legally bound by them. If you do not agree, please discontinue use of the Site immediately.'
  },
  {
    title: '1.2 Products & Descriptions',
    content: (
      <>
        Big Dog Life™ specializes in oversized waste management products designed for large-breed dogs (70+ lbs), including the Bosie Bag® and related accessories. We make every effort to accurately describe our products, including size, material, and intended use. However, we do not warrant that product descriptions or other content on the Site are error-free, complete, or current.
        <br /><br />
        Product colors may appear slightly different due to monitor settings.
        <br /><br />
        Bundle contents are subject to change and will be clearly disclosed at checkout.
        <br /><br />
        The Bosie Bag® name is registered intellectual property of Big Dog Life LLC.
      </>
    )
  },
  {
    title: '1.3 Pricing & Payment',
    content: 'All prices are listed in U.S. dollars and are subject to change without notice. We reserve the right to correct pricing errors at any time. Orders placed at an incorrect price due to a system error may be cancelled with a full refund. We accept all major credit cards and other payment methods as listed at checkout.'
  },
  {
    title: '1.4 Order Acceptance',
    content: 'Placing an order does not constitute a binding contract until we confirm and ship your order. We reserve the right to refuse or cancel any order for any reason, including but not limited to: suspected fraud, product unavailability, or pricing errors. If we cancel your order, you will receive a full refund within 5–7 business days.'
  },
  {
    title: '1.5 Intellectual Property',
    content: '"Big Dog Life™" is a trademark. The Bosie Bag® product name is registered IP. All content on the Site — including logos, graphics, text, photography, and copy — is the exclusive property of Big Dog Life LLC and may not be reproduced, distributed, or used without prior written permission.'
  },
  {
    title: '1.6 Prohibited Use',
    content: (
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Reproduce, resell, or redistribute Big Dog Life™ products without written authorization.</li>
        <li>Use the Site for any unlawful purpose or to violate any applicable laws.</li>
        <li>Attempt to gain unauthorized access to any part of the Site or its systems.</li>
        <li>Use automated tools, scrapers, or bots to collect data from the Site.</li>
        <li>Post or transmit any content that is defamatory, harmful, or infringing.</li>
      </ul>
    )
  },
  {
    title: '1.7 Disclaimer of Warranties',
    content: 'The Site and all products are provided "as is" and "as available" without warranties of any kind, either express or implied. Big Dog Life LLC disclaims all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.'
  },
  {
    title: '1.8 Limitation of Liability',
    content: 'To the fullest extent permitted by law, Big Dog Life LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Site or purchase of our products. Our total liability shall not exceed the amount you paid for the specific product in question.'
  },
  {
    title: '1.9 Governing Law',
    content: 'These Terms are governed by the laws of the State of Ohio, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Logan County, Ohio.'
  },
  {
    title: '1.10 Changes to Terms',
    content: 'We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated effective date. Continued use of the Site after changes constitutes acceptance of the new Terms.'
  }
];

export default function Terms() {
  return <LegalPage title="Terms & Conditions" lastUpdated="January 1, 2025" sections={SECTIONS} />;
}