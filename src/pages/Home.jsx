import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ValueProps from '../components/home/ValueProps';
import ProductShowcase from '../components/home/ProductShowcase';
import SizeComparison from '../components/home/SizeComparison';
import BundleSection from '../components/home/BundleSection';
import LifestyleSection from '../components/home/LifestyleSection';
import BulkCTA from '../components/home/BulkCTA';

const IMAGES = {
  hero: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/3885efb4e_generated_584b68b5.png',
  paw: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/a6a50e66d_generated_8316b9f9.png',
  majestic: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/a7919ce14_generated_93e1f141.png',
  action: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/2204ecf37_generated_05234a0f.png',
  product: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/b82f0e9fe_generated_7c468029.png',
  portrait: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/b7a8d0441_generated_f004f9b0.png',
};

export default function Home() {
  return (
    <div>
      <HeroSection heroImage={IMAGES.hero} />
      <ValueProps />
      <ProductShowcase />
      <SizeComparison />
      <BundleSection />
      <LifestyleSection
        images={{
          hero: IMAGES.majestic,
          paw: IMAGES.paw,
          portrait: IMAGES.portrait,
          action: IMAGES.action,
        }}
      />
      <BulkCTA />
    </div>
  );
}