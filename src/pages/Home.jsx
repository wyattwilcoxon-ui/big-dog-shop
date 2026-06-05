import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AnimatedMarquee from '../components/home/AnimatedMarquee';
import ValueProps from '../components/home/ValueProps';
import StatsBar from '../components/home/StatsBar';
import ProductShowcase from '../components/home/ProductShowcase';
import SizeComparison from '../components/home/SizeComparison';

import BosieBlastWall from '../components/home/BosieBlastWall';
import LifestyleSection from '../components/home/LifestyleSection';
import BulkCTA from '../components/home/BulkCTA';
import FloatingPoop from '../components/ui/FloatingPoop';

const HERO_IMG = 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/c70f9fd22_DSC_0141.jpg';

const MARQUEE_ITEMS_1 = [
  'BIG DOGS. BIGGER ENERGY.', 'ZERO APOLOGIES', 'LIVE BOLD. LOVE DOGS.', 'GIVE A $H!T',
  'BECAUSE BIG DOGS HAVE BIG NEEDS', 'BELLEFONTAINE OH', 'BOSA APPROVED',
];

const MARQUEE_ITEMS_2 = [
  'BIG DOG LIFE', 'FOR LARGE & GIANT BREEDS', '#BOSIEBLAST', 'SINCE 2024',
  'PACK APPROVED', 'WE GIVE A $H!T', 'BIG DOGS RUN THE SHOW',
];

const IMAGES = {
  hero: HERO_IMG,
  paw: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/a6a50e66d_generated_8316b9f9.png',
  majestic: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/a7919ce14_generated_93e1f141.png',
  action: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/2204ecf37_generated_05234a0f.png',
  portrait: 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/b7a8d0441_generated_f004f9b0.png',
};

export default function Home() {
  return (
    <div>
      <FloatingPoop />
      <HeroSection heroImage={IMAGES.hero} />

      {/* First marquee — orange */}
      <AnimatedMarquee items={MARQUEE_ITEMS_1} bg="bg-primary" textColor="text-white" speed={22} />

      <ValueProps />
      <StatsBar />

      {/* Second marquee — green, reversed */}
      <AnimatedMarquee items={MARQUEE_ITEMS_2} bg="bg-secondary" textColor="text-white" speed={28} reverse />

      <ProductShowcase />
      <SizeComparison />

      <BosieBlastWall />
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