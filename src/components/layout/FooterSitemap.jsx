import React from 'react';
import { Link } from 'react-router-dom';

const SITEMAP = [
  {
    heading: 'Shop',
    links: [
      { label: 'All Products', to: '/shop' },
      { label: 'Bosie Bag™', to: '/product/bosie-bag' },
      { label: 'Clip & Go™', to: '/product/clip-and-go' },
      { label: 'The Big Ones™', to: '/product/tennis-balls' },
      { label: 'Starter Bundle', to: '/product/starter-bundle' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'The Pack', to: '/pack' },
      { label: 'Why Big Dogs', to: '/why-big-dogs-need-bigger-poop-bags' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Shipping & Returns', to: '/shipping-policy' },
      { label: 'Refund Policy', to: '/refund-policy' },
      { label: 'Accessibility', to: '/accessibility' },
    ],
  },
];

export default function FooterSitemap() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 mb-6">
      {SITEMAP.map((col) => (
        <div key={col.heading}>
          <h4 className="font-brand text-primary text-xs uppercase tracking-wider mb-3">{col.heading}</h4>
          <ul className="space-y-1.5">
            {col.links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="font-body text-sm text-stone hover:text-cream transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}