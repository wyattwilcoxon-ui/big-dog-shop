import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Heart, Share2 } from 'lucide-react';

// Community UGC placeholder cards using actual dog images from the site + fun copywriting
const COMMUNITY_POSTS = [
  {
    id: 1,
    username: '@danathegsd',
    handle: 'Dana R.',
    dog: 'Zeus, 110 lb GSD',
    caption: 'Zeus tested EIGHT regular bags this morning. THE BOSIE BAG? Not even a sweat. 💪',
    emoji: '💩',
    likes: 847,
    color: 'bg-orange-pale',
    border: 'border-primary',
    rotate: -2,
    img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/img_9679_a5725f64.jpg',
  },
  {
    id: 2,
    username: '@greatanemom',
    handle: 'Kat B.',
    dog: 'Apollo, 160 lb Great Dane',
    caption: 'I used to carry a GROCERY BAG as backup. This changed my entire life. No cap.',
    emoji: '🐾',
    likes: 1204,
    color: 'bg-green-dark',
    border: 'border-secondary',
    rotate: 1,
    img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/img_9245_46815bf7.jpg',
    dark: true,
  },
  {
    id: 3,
    username: '@rottweilerlife',
    handle: 'Chris M.',
    dog: 'Bear, 130 lb Rottie',
    caption: 'Bear goes through 3 bags minimum per walk. Not anymore. These are undefeated.',
    emoji: '🏆',
    likes: 562,
    color: 'bg-cream',
    border: 'border-sandy',
    rotate: -1,
    img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/img_9660_8b3c9563.jpg',
  },
  {
    id: 4,
    username: '@mastiffgang',
    handle: 'Priya K.',
    dog: 'Titan, 185 lb Mastiff',
    caption: 'My dog is basically a small horse. ONE BAG. Finally. Also I love the bone dispenser 🦴',
    emoji: '🐴',
    likes: 2108,
    color: 'bg-primary',
    border: 'border-midnight',
    rotate: 2,
    img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/img_8880_fff6a440.jpg',
    dark: true,
  },
  {
    id: 5,
    username: '@dogdadlife',
    handle: 'Marcus T.',
    dog: 'Goliath, 140 lb Rottweiler',
    caption: 'My neighbors used to watch me triple-bag with DISGUST. Walked past today with ONE bag and got a slow clap.',
    emoji: '👏',
    likes: 3447,
    color: 'bg-sky',
    border: 'border-midnight',
    rotate: -3,
    img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/img_9679_a5725f64.jpg',
  },
  {
    id: 6,
    username: '@newfdoodlemom',
    handle: 'Lily S.',
    dog: 'Meatball, 100 lb Newfoundland',
    caption: 'My dog\'s name is Meatball. He lives up to it. Bosie Bag handles his business with ROOM TO SPARE.',
    emoji: '🧆',
    likes: 1893,
    color: 'bg-sandy',
    border: 'border-bark',
    rotate: 1,
    img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032127906/XGcioY5NW2YEhK7htUgUbY/img_9245_46815bf7.jpg',
  },
];

export default function BosieBlastWall() {
  const [liked, setLiked] = useState({});
  const [hoveredId, setHoveredId] = useState(null);

  const toggleLike = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-16 sm:py-24 bg-midnight overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          {/* Hashtag stamp */}
          <motion.div
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="inline-block bg-primary text-white font-display text-4xl sm:text-6xl px-6 py-3 rounded-2xl border-bold shadow-cartoon mb-6"
          >
            #BOSIEBLAST
          </motion.div>
          <h2 className="font-display text-5xl sm:text-7xl text-white">
            THE PACK DELIVERS
          </h2>
          <p className="font-brand text-stone mt-4 text-lg max-w-2xl mx-auto">
            Share your big dog's biggest moments. Tag <span className="text-primary">#BosieBlast</span> and join the community of big dog owners who finally have a bag that keeps up. 🐾
          </p>
        </motion.div>

        {/* Floating submit prompt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <motion.div
            whileHover={{ scale: 1.04, rotate: 1 }}
            className="bg-white rounded-2xl border-bold shadow-cartoon px-6 py-4 flex items-center gap-4 cursor-pointer max-w-sm w-full"
          >
            <div className="w-10 h-10 bg-primary rounded-xl border-bold flex items-center justify-center flex-shrink-0">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-brand text-midnight text-sm">Post yours on Instagram or TikTok</p>
              <p className="font-body text-stone text-xs">Tag <span className="text-primary font-bold">#BosieBlast</span> to be featured 🎉</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Grid of community posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COMMUNITY_POSTS.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50, rotate: post.rotate }}
              whileInView={{ opacity: 1, y: 0, rotate: post.rotate }}
              whileHover={{ rotate: 0, scale: 1.03, zIndex: 10 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 250 }}
              className={`relative rounded-2xl border-4 ${post.border} overflow-hidden shadow-cartoon ${post.color} cursor-pointer`}
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Dog image */}
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={post.img}
                  alt={post.dog}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {/* Overlay on hover */}
                <AnimatePresence>
                  {hoveredId === post.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-midnight/40 flex items-center justify-center gap-4"
                    >
                      <button
                        onClick={() => toggleLike(post.id)}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-cartoon-sm"
                      >
                        <Heart className={`w-5 h-5 ${liked[post.id] ? 'text-primary fill-primary' : 'text-midnight'}`} />
                      </button>
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-cartoon-sm">
                        <Share2 className="w-5 h-5 text-midnight" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Emoji float */}
                <motion.span
                  className="absolute top-2 right-2 text-2xl"
                  animate={{ y: [0, -5, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 + i * 0.3 }}
                >
                  {post.emoji}
                </motion.span>
              </div>

              {/* Post content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className={`font-brand text-sm ${post.dark ? 'text-white' : 'text-midnight'}`}>
                      {post.username}
                    </p>
                    <p className={`font-body text-xs ${post.dark ? 'text-white/60' : 'text-stone'}`}>
                      {post.dog}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleLike(post.id)}
                    className="flex items-center gap-1"
                  >
                    <Heart className={`w-4 h-4 transition-all ${liked[post.id] ? 'text-primary fill-primary scale-125' : post.dark ? 'text-white/60' : 'text-stone'}`} />
                    <span className={`font-brand text-xs ${post.dark ? 'text-white/60' : 'text-stone'}`}>
                      {liked[post.id] ? post.likes + 1 : post.likes}
                    </span>
                  </button>
                </div>
                <p className={`font-body text-sm leading-relaxed ${post.dark ? 'text-white/80' : 'text-pebble'}`}>
                  "{post.caption}"
                </p>
                <p className="font-brand text-primary text-xs mt-2">#BosieBlast #BigDogLife</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="font-body text-stone mb-4">Post on Instagram or TikTok with</p>
          <motion.div
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-primary text-white font-display text-3xl sm:text-4xl px-8 py-4 rounded-2xl border-bold shadow-cartoon cursor-pointer"
          >
            #BOSIEBLAST 💩
          </motion.div>
          <p className="font-body text-stone/60 text-sm mt-4">
            We'll repost our favorites. Your dog could be famous. 🐾
          </p>
        </motion.div>
      </div>
    </section>
  );
}