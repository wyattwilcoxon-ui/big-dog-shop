import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center">
        <span className="font-display text-[10rem] sm:text-[14rem] text-primary leading-none">404</span>
        <h1 className="font-display text-4xl sm:text-6xl text-midnight mt-4">LOST DOG</h1>
        <p className="font-body text-pebble text-lg mt-4 max-w-md mx-auto">
          This page ran off. Probably chasing a squirrel.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 bg-primary text-white font-brand text-lg px-8 py-4 rounded-xl shadow-cartoon border-bold transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-orange-hot"
        >
          Go Home 🐾
        </Link>
      </div>
    </div>
  );
}