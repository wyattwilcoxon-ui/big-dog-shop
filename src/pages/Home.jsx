import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AnimatedMarquee from '../components/home/AnimatedMarquee';
import ValueProps from '../components/home/ValueProps';
import StatsBar from '../components/home/StatsBar';
import ProductShowcase from '../components/home/ProductShowcase';
import BosaOriginStory from '../components/home/BosaOriginStory';
import SizeComparison from '../components/home/SizeComparison';


import BosieBlastWall from '../components/home/BosieBlastWall';
import LifestyleSection from '../components/home/LifestyleSection';
import BulkCTA from '../components/home/BulkCTA';
import FloatingPoop from '../components/ui/FloatingPoop';

const HERO_IMG = 'https://media.base44.com/images/public/6a06119e182f5cb0938b3e5b/c70f9fd22_DSC_0141.jpg';

const MARQUEE_ITEMS_1 = [
  'LEAK-PROOF', 'BIG DOG ENERGY', '13"×15"', '70+ LBS', 'ZERO LEAKS',
  'BOSIE BAG™', 'NAMED AFTER BOSA', 'BELLEFONTAINE OH', 'WE GIVE A $H!T',
];

const MARQUEE_ITEMS_2 = [
  'BEST SELLER', 'BIG DOG LIFE', 'OVERSIZED', 'LEAK PROOF', '#BOSIEBLAST',
  '44% BIGGER', 'BONE DISPENSER', 'SINCE 2024', 'PACK APPROVED',
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
      <BosaOriginStory />
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