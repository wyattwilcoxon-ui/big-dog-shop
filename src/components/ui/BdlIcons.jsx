import React from 'react';

// Custom brand-colored SVG icons replacing system emojis
// All use the Big Dog Life color palette

export function PoopIcon({ size = 32, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Base swirl */}
      <ellipse cx="32" cy="50" rx="20" ry="8" fill="#3B2010"/>
      <ellipse cx="32" cy="50" rx="20" ry="8" fill="#F4610E" opacity="0.15"/>
      {/* Main body layers */}
      <ellipse cx="32" cy="44" rx="16" ry="10" fill="#3B2010"/>
      <ellipse cx="32" cy="36" rx="12" ry="9" fill="#3B2010"/>
      <ellipse cx="32" cy="28" rx="9" ry="8" fill="#3B2010"/>
      <ellipse cx="32" cy="22" rx="6" ry="6" fill="#3B2010"/>
      {/* Shine highlight */}
      <ellipse cx="28" cy="20" rx="2.5" ry="3" fill="#5E574F" opacity="0.6"/>
      {/* Eyes */}
      <circle cx="29" cy="28" r="2.5" fill="white"/>
      <circle cx="35" cy="28" r="2.5" fill="white"/>
      <circle cx="29.8" cy="28.5" r="1.2" fill="#151515"/>
      <circle cx="35.8" cy="28.5" r="1.2" fill="#151515"/>
      {/* Smile */}
      <path d="M28 32.5 Q32 35.5 36 32.5" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      {/* Stink lines */}
      <path d="M20 14 Q17 10 20 6" stroke="#F4610E" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"/>
      <path d="M32 10 Q29 6 32 2" stroke="#2A9134" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"/>
      <path d="M44 14 Q47 10 44 6" stroke="#F4610E" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"/>
    </svg>
  );
}

export function PawIcon({ size = 32, className = '', color = '#F4610E' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Main pad */}
      <ellipse cx="32" cy="42" rx="14" ry="12" fill={color}/>
      {/* Top toe pads */}
      <ellipse cx="16" cy="28" rx="6" ry="7" fill={color}/>
      <ellipse cx="26" cy="22" rx="6" ry="7" fill={color}/>
      <ellipse cx="38" cy="22" rx="6" ry="7" fill={color}/>
      <ellipse cx="48" cy="28" rx="6" ry="7" fill={color}/>
      {/* Outline */}
      <ellipse cx="32" cy="42" rx="14" ry="12" stroke="#151515" strokeWidth="2.5" fill="none"/>
      <ellipse cx="16" cy="28" rx="6" ry="7" stroke="#151515" strokeWidth="2.5" fill="none"/>
      <ellipse cx="26" cy="22" rx="6" ry="7" stroke="#151515" strokeWidth="2.5" fill="none"/>
      <ellipse cx="38" cy="22" rx="6" ry="7" stroke="#151515" strokeWidth="2.5" fill="none"/>
      <ellipse cx="48" cy="28" rx="6" ry="7" stroke="#151515" strokeWidth="2.5" fill="none"/>
    </svg>
  );
}

export function DogFaceIcon({ size = 32, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Head */}
      <ellipse cx="32" cy="35" rx="22" ry="20" fill="#D4924A"/>
      <ellipse cx="32" cy="35" rx="22" ry="20" stroke="#151515" strokeWidth="2.5" fill="none"/>
      {/* Ears */}
      <ellipse cx="12" cy="20" rx="8" ry="12" fill="#3B2010" transform="rotate(-15 12 20)"/>
      <ellipse cx="52" cy="20" rx="8" ry="12" fill="#3B2010" transform="rotate(15 52 20)"/>
      <ellipse cx="12" cy="20" rx="8" ry="12" stroke="#151515" strokeWidth="2" fill="none" transform="rotate(-15 12 20)"/>
      <ellipse cx="52" cy="20" rx="8" ry="12" stroke="#151515" strokeWidth="2" fill="none" transform="rotate(15 52 20)"/>
      {/* Snout */}
      <ellipse cx="32" cy="43" rx="11" ry="8" fill="#F5F0E8"/>
      <ellipse cx="32" cy="43" rx="11" ry="8" stroke="#151515" strokeWidth="1.5" fill="none"/>
      {/* Nose */}
      <ellipse cx="32" cy="39" rx="4" ry="2.5" fill="#151515"/>
      {/* Eyes */}
      <circle cx="24" cy="30" r="3.5" fill="white"/>
      <circle cx="40" cy="30" r="3.5" fill="white"/>
      <circle cx="24" cy="30" r="2" fill="#151515"/>
      <circle cx="40" cy="30" r="2" fill="#151515"/>
      <circle cx="24.8" cy="29.2" r="0.8" fill="white"/>
      <circle cx="40.8" cy="29.2" r="0.8" fill="white"/>
      {/* Smile */}
      <path d="M26 46 Q32 50 38 46" stroke="#151515" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Tongue */}
      <ellipse cx="32" cy="49" rx="3.5" ry="3" fill="#D93B1F"/>
      <ellipse cx="32" cy="49" rx="3.5" ry="3" stroke="#151515" strokeWidth="1.2" fill="none"/>
    </svg>
  );
}

export function BagIcon({ size = 32, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Bag body */}
      <rect x="12" y="22" width="40" height="36" rx="6" fill="#2A9134"/>
      <rect x="12" y="22" width="40" height="36" rx="6" stroke="#151515" strokeWidth="2.5" fill="none"/>
      {/* Tie at top */}
      <path d="M22 22 Q32 14 42 22" stroke="#151515" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Paw on bag */}
      <ellipse cx="32" cy="40" rx="6" ry="5" fill="#F5F0E8" opacity="0.6"/>
      <ellipse cx="24" cy="33" rx="2.5" ry="3" fill="#F5F0E8" opacity="0.6"/>
      <ellipse cx="40" cy="33" rx="2.5" ry="3" fill="#F5F0E8" opacity="0.6"/>
      <ellipse cx="28" cy="30" rx="2.5" ry="3" fill="#F5F0E8" opacity="0.6"/>
      <ellipse cx="36" cy="30" rx="2.5" ry="3" fill="#F5F0E8" opacity="0.6"/>
      {/* BDL text mark */}
      <text x="32" y="44" textAnchor="middle" fontSize="7" fontWeight="900" fill="#151515" fontFamily="sans-serif" opacity="0.4">BDL</text>
    </svg>
  );
}