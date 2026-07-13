import React from 'react';
import LegalPage from './LegalPage';

const SECTIONS = [
  {
    title: '5.1 Our Commitment',
    content: 'We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible to people with disabilities, including those who are blind or have low vision, are deaf or hard of hearing, have motor impairments, or have cognitive or learning disabilities.'
  },
  {
    title: '5.2 Accessibility Features',
    content: (
      <>
        Current and ongoing accessibility features of thebigdoglife.com include:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Semantic HTML markup to support screen readers and assistive technologies.</li>
          <li>Alt text on all meaningful images.</li>
          <li>Sufficient color contrast ratios between text and backgrounds.</li>
          <li>Keyboard navigability throughout the checkout process.</li>
          <li>Clear, consistent navigation and page structure.</li>
          <li>No content that flashes more than three times per second (to reduce seizure risk).</li>
          <li>Readable font sizes and scalable text without loss of functionality.</li>
        </ul>
      </>
    )
  },
  {
    title: '5.3 Known Limitations',
    content: 'While we are actively working to improve accessibility across the Site, some third-party integrations or legacy content may not yet fully conform to WCAG 2.1 AA standards. We are committed to identifying and addressing these gaps on an ongoing basis.'
  },
  {
    title: "5.4 Feedback & Reporting",
    content: (
      <>
        If you experience any difficulty accessing our website or if any content is inaccessible to you, we want to know. Email us at bark@thebigdoglife.com. When reporting an issue, please include:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The web address (URL) of the page where you encountered the issue.</li>
          <li>A description of the accessibility barrier.</li>
          <li>The assistive technology or browser you were using (if known).</li>
        </ul>
        We will respond to accessibility feedback within 5 business days and strive to resolve reported issues as quickly as possible.
      </>
    )
  },
  {
    title: "5.5 Formal Complaints",
    content: "If you are not satisfied with our response, you may contact the U.S. Department of Justice's ADA information line or file a complaint with the relevant federal or state agency."
  },
  {
    title: '5.6 Ongoing Improvement',
    content: 'Accessibility is not a one-time project — it is an ongoing commitment. We conduct periodic reviews of our Site, train our team on accessibility best practices, and prioritize accessibility considerations in all future development work.'
  }
];

export default function Accessibility() {
  return <LegalPage title="Accessibility Statement" sections={SECTIONS} metaDescription="Big Dog Life™ Accessibility Statement. Our commitment to WCAG 2.1 Level AA standards and ongoing accessibility improvements across our website." />;
}