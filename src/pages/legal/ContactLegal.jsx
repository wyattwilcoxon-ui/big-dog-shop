import React from 'react';
import LegalPage from './LegalPage';

const SECTIONS = [
  {
    title: '6.1 Company Information',
    content: (
      <ul className="space-y-1">
        <li><strong>Legal Name:</strong> Big Dog Life LLC</li>
        <li><strong>State of Formation:</strong> Ohio</li>
        <li><strong>Principal Office:</strong> 139 W Columbus Ave, Bellefontaine, Ohio 43311</li>
        <li><strong>Website:</strong> thebigdoglife.com</li>
      </ul>
    )
  },
  {
    title: '6.2 Contact Information',
    content: (
      <>
        Have a question, concern, or issue? We handle everything in-house and we want to hear from you. Reach out and a member of our team will get back to you promptly.
        <br /><br />
        <strong>Email:</strong> bark@thebigdoglife.com
        <br />
        <strong>Mailing Address:</strong> 139 W Columbus Ave, Bellefontaine, OH 43311
        <br /><br />
        Whether it's a return, an accessibility request, a legal notice, or just a question about your order — one email gets it to the right person.
      </>
    )
  },
  {
    title: '6.3 Trademark & IP Notice',
    content: '"Big Dog Life" is a registered trademark of Big Dog Life LLC. The Bosie Bag™ product name is also registered IP. Unauthorized use of these marks is strictly prohibited and may result in legal action. All rights reserved.'
  },
  {
    title: '6.4 Copyright Notice',
    content: '© 2024–2026 Big Dog Life LLC. All content on this website, including but not limited to text, graphics, logos, images, audio clips, and software, is the property of Big Dog Life LLC or its content suppliers and is protected by applicable copyright laws. Any reproduction, distribution, or use without written permission is prohibited.'
  },
  {
    title: '6.5 DMCA Notice',
    content: 'If you believe that any content on our Site infringes upon your copyright, please send a written notice to us at bark@thebigdoglife.com. Your notice must include: (1) your signature; (2) identification of the copyrighted work; (3) identification of the infringing material; (4) your contact information; (5) a statement of good faith belief; and (6) a statement of accuracy under penalty of perjury.'
  }
];

export default function ContactLegal() {
  return (
    <>
      <LegalPage title="Contact & Legal Notice" sections={SECTIONS} />
      <div className="bg-white border-4 border-midnight rounded-2xl p-6 sm:p-8 shadow-cartoon-sm max-w-4xl mx-auto mb-12">
        <p className="font-brand text-midnight text-center">
          Big Dog Life LLC • We Give a $h!t • thebigdoglife.com
        </p>
      </div>
    </>
  );
}