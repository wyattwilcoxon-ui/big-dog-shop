import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="bg-background min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-brand text-primary text-sm uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="font-display text-6xl sm:text-8xl text-midnight mb-8 leading-none">
            ABOUT BIG DOG LIFE
          </h1>

          <div className="prose prose-lg max-w-none font-body text-pebble space-y-6 text-lg leading-relaxed">
            <p>
              Big Dog Life was born out of a very real, very messy problem: standard poop bags are built for small dogs. If you share your life with a 90-pound German Shepherd, a 100-pound Labrador, or a 120-pound Great Dane, you already know the frustration — the bag barely fits, the seams give out at the worst possible moment, and you're left wondering why nobody designed a bag for the <em>real</em> big jobs.
            </p>

            <p>
              We're a small team of big-dog owners based in Bellefontaine, Ohio. Our founder's dog, Bosa — a massive, lovable, zero-shame German Shepherd — was the inspiration behind our flagship product, <strong>The Bosie Bag™</strong>. After one too many "incidents" with undersized, flimsy bags from big-box stores, we decided to make something better ourselves.
            </p>

            <p>
              The Bosie Bag™ is 44% larger than standard poop bags, triple-thick for leak-proof confidence, and easy-tear perforated so you're not fumbling with the roll while your dog is mid-business. Every design decision was made by people who walk big dogs every single day — rain, mud, and all.
            </p>

            <p>
              Big Dog Life isn't just a product company — it's a community. We believe big-dog owners deserve gear that actually fits their life. We give a $h!t (literally and figuratively) about quality, value, and making sure no big-dog parent ever gets caught unprepared on a walk again.
            </p>

            <p>
              We ship fast from Ohio, offer bulk pricing for shelters, groomers, and dog parks, and back every order with real human support. If you have a question, a story about Bosa-level chaos, or just want to share a photo of your giant goofball, we want to hear from you.
            </p>

            <p>
              Welcome to the pack. 🐾
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
              to="/contact"
              className="inline-flex items-center gap-2 bg-midnight text-white font-brand text-lg px-8 py-4 rounded-full hover:bg-pebble transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}