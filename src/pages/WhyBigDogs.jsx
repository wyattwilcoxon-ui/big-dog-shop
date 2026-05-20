import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function WhyBigDogs() {
  return (
    <main className="bg-background min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-brand text-primary text-sm uppercase tracking-widest mb-3">The Real Talk</p>
          <h1 className="font-display text-5xl sm:text-7xl text-midnight mb-8 leading-none">
            WHY BIG DOGS NEED BIGGER POOP BAGS
          </h1>

          <div className="font-body text-pebble space-y-6 text-lg leading-relaxed">
            <p>
              If you own a large or giant-breed dog — a German Shepherd, Labrador Retriever, Golden Retriever, Rottweiler, Bernese Mountain Dog, Great Dane, or Saint Bernard — you already know the truth that small-dog owners will never understand: standard poop bags are completely inadequate. They're too short, too narrow, too thin, and they tear at the exact worst moment.
            </p>

            <p>
              The average standard dog poop bag measures roughly 9" × 13" and is made from single-ply film. That's fine for a 12-pound Shih Tzu. For a 100-pound Mastiff? You're basically bagging it barehanded. The result is a product that fails in ways that are both disgusting and completely avoidable — if anyone had just thought to build a bag for the big dogs.
            </p>

            <h2 className="font-display text-4xl text-midnight mt-8">The Bosie Bag™ Difference</h2>

            <p>
              The Bosie Bag™ was engineered from scratch for large and giant-breed dogs. At 13" × 15", it's 44% larger than standard bags. The triple-thick leak-proof material means no blowouts, no fingers-crossed moments, and no ruined walks. Easy-tear perforations mean you can separate the bag one-handed while your 90-pound Lab is dragging you toward a squirrel.
            </p>

            <p>
              We designed the Bosie Bag™ in Bellefontaine, Ohio, after our founder Bosa — a giant German Shepherd with absolutely zero chill — made it crystal clear that something better was needed. What started as a personal frustration became a product used by thousands of big-dog households across the United States.
            </p>

            <h2 className="font-display text-4xl text-midnight mt-8">Who The Bosie Bag™ Is For</h2>

            <p>
              The Bosie Bag™ is built for owners of dogs 50 lbs and above — though honestly, anyone who's ever been let down by a flimsy bag will appreciate the difference. It's also ideal for dog shelters managing multiple large breeds, professional groomers who need reliable waste management, and dog parks that want to provide quality waste stations for all dog sizes.
            </p>

            <p>
              We ship fast from Ohio, offer bulk discounts for high-volume buyers, and back every order with real human support. Because at Big Dog Life, we genuinely give a $h!t.
            </p>

            <h2 className="font-display text-4xl text-midnight mt-8">Large Breed Dogs Deserve Better Gear</h2>

            <p>
              The pet industry overwhelmingly caters to small dogs. Walk into any pet store and count the products designed specifically with large breeds in mind — it's a short list. Big Dog Life exists to change that, starting with the most basic, most necessary accessory any dog owner carries: the poop bag. Better bags. Better walks. Happier dogs. Zero leaks.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-primary text-white font-brand text-lg px-8 py-4 rounded-full hover:bg-orange-hot transition-colors"
            >
              ⚡ Shop The Bosie Bag™
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border-2 border-midnight text-midnight font-brand text-lg px-8 py-4 rounded-full hover:bg-midnight hover:text-white transition-colors"
            >
              Our Story
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}