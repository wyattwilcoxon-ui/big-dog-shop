import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Heart, Share2 } from 'lucide-react';

const COMMUNITY_POSTS = [
  {
    id: 1, username: '@danathegsd', dog: 'Zeus, 110 lb GSD',
    caption: 'Zeus tested EIGHT regular bags this morning. THE BOSIE BAG? Not even a sweat. 💪',
    likes: 847, color: 'bg-orange-pale', border: 'border-primary', rotate: -1.5,
    img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/img_9679_a5725f64.jpg',
  },
  {
    id: 2, username: '@greatanemom', dog: 'Apollo, 160 lb Great Dane',
    caption: 'I used to carry a GROCERY BAG as backup. This changed my entire life. No cap.',
    likes: 1204, color: 'bg-green-dark', border: 'border-secondary', rotate: 1, dark: true,
    img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/img_9245_46815bf7.jpg',
  },
  {
    id: 3, username: '@rottweilerlife', dog: 'Bear, 130 lb Rottie',
    caption: 'Bear goes through 3 bags minimum per walk. Not anymore. These are undefeated.',
    likes: 562, color: 'bg-cream', border: 'border-sandy', rotate: -1,
    img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/img_9660_8b3c9563.jpg',
  },
  {
    id: 4, username: '@mastiffgang', dog: 'Titan, 185 lb Mastiff',
    caption: 'My dog is basically a small horse. ONE BAG. Finally. Also I love the bone dispenser.',
    likes: 2108, color: 'bg-primary', border: 'border-midnight', rotate: 1.5, dark: true,
    img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/img_8880_fff6a440.jpg',
  },
  {
    id: 5, username: '@dogdadlife', dog: 'Goliath, 140 lb Rottweiler',
    caption: 'My neighbors used to watch me triple-bag. Walked past today with ONE bag and got a slow clap.',
    likes: 3447, color: 'bg-sky/20', border: 'border-sky', rotate: -1,
    img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/img_9679_a5725f64.jpg',
  },
  {
    id: 6, username: '@newfdoodlemom', dog: 'Meatball, 100 lb Newfoundland',
    caption: 'My dog\'s name is Meatball. He lives up to it. Bosie Bag handles his business with ROOM TO SPARE.',
    likes: 1893, color: 'bg-sandy/20', border: 'border-sandy', rotate: 1,
    img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/img_9245_46815bf7.jpg',
  },
];

export default function BosieBlastWall() {
  const [liked, setLiked] = useState({});
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-16 sm:py-24 bg-midnight overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <motion.div
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className="inline-block bg-primary text-white font-display text-4xl sm:text-6xl px-6 py-3 rounded-2xl border-bold shadow-cartoon mb-6"
          >
            #BOSIEBLAST
          </motion.div>
          <h2 className="font-display text-5xl sm:text-7xl text-white">THE PACK DELIVERS</h2>
          <p className="font-brand text-stone mt-4 text-lg max-w-2xl mx-auto">
            Tag <span className="text-primary">#BosieBlast</span> on Instagram or TikTok and join the community of big dog owners who finally have a bag that keeps up.
          </p>
        </motion.div>

        {/* Post prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl border-bold shadow-cartoon px-6 py-4 flex items-center gap-4 max-w-sm w-full cursor-pointer"
          >
            <div className="w-10 h-10 bg-primary rounded-xl border-bold flex items-center justify-center flex-shrink-0">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-brand text-midnight text-sm">Post on Instagram or TikTok</p>
              <p className="font-body text-stone text-xs">Tag <span className="text-primary font-bold">#BosieBlast</span> to be featured</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COMMUNITY_POSTS.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40, rotate: post.rotate }}
              whileInView={{ opacity: 1, y: 0, rotate: post.rotate }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className={`relative rounded-2xl border-4 ${post.border} overflow-hidden shadow-cartoon ${post.color} cursor-pointer`}
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden relative">
                <img src={post.img} alt={post.dog} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                <AnimatePresence>
                  {hoveredId === post.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-midnight/40 flex items-center justify-center gap-4"
                    >
                      <button onClick={() => setLiked(p => ({ ...p, [post.id]: !p[post.id] }))} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-cartoon-sm">
                        <Heart className={`w-5 h-5 ${liked[post.id] ? 'text-primary fill-primary' : 'text-midnight'}`} />
                      </button>
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-cartoon-sm">
                        <Share2 className="w-5 h-5 text-midnight" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Brand icon badge */}
                <div className="absolute top-2 right-2 text-xl">💩</div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className={`font-brand text-sm ${post.dark ? 'text-white' : 'text-midnight'}`}>{post.username}</p>
                    <p className={`font-body text-xs ${post.dark ? 'text-white/60' : 'text-stone'}`}>{post.dog}</p>
                  </div>
                  <button onClick={() => setLiked(p => ({ ...p, [post.id]: !p[post.id] }))} className="flex items-center gap-1">
                    <Heart className={`w-4 h-4 transition-all ${liked[post.id] ? 'text-primary fill-primary scale-110' : post.dark ? 'text-white/60' : 'text-stone'}`} />
                    <span className={`font-brand text-xs ${post.dark ? 'text-white/60' : 'text-stone'}`}>{liked[post.id] ? post.likes + 1 : post.likes}</span>
                  </button>
                </div>
                <p className={`font-body text-sm leading-relaxed ${post.dark ? 'text-white/80' : 'text-pebble'}`}>"{post.caption}"</p>
                <p className="font-brand text-primary text-xs mt-2">#BosieBlast</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="font-body text-stone mb-4">Post on Instagram or TikTok with</p>
          <motion.div
            whileHover={{ scale: 1.04, rotate: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-primary text-white font-display text-3xl sm:text-4xl px-8 py-4 rounded-2xl border-bold shadow-cartoon cursor-pointer"
          >
            💩 #BOSIEBLAST 🐾
          </motion.div>
          <p className="font-body text-stone/60 text-sm mt-4">We'll repost our favorites. Your dog could be famous.</p>
        </motion.div>
      </div>
    </section>
  );
}