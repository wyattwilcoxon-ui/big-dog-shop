import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';

export default function JoinThePack() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dogBreed, setDogBreed] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    try {
      await base44.functions.invoke('saveEmailSignup', { email, phone: phone || null, dog_breed: dogBreed || null, timestamp: Date.now() });
      setSubmitted(true);
      toast.success('Welcome to the Pack!');
      setEmail('');
      setPhone('');
      setDogBreed('');
    } catch (error) {
      toast.error('Something went wrong. Try again!');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream relative overflow-auto">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-8xl">🐾</div>
        <div className="absolute top-40 right-20 text-6xl">💩</div>
        <div className="absolute bottom-40 left-1/4 text-7xl">🦴</div>
        <div className="absolute bottom-20 right-1/3 text-9xl">🐕</div>
      </div>



      {/* Hero Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-midnight font-brand text-sm px-5 py-2 rounded-full mb-8 shadow-lg">
            <span className="text-primary">🎉</span> COMING Q2 2026
          </div>

          {/* Headline */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-midnight leading-none mb-6">
            BIG DOGS HAVE
            <br />
            <span className="text-primary">BIG NEEDS</span>
          </h1>

          <p className="font-body text-xl sm:text-2xl text-pebble mt-6 max-w-2xl mx-auto leading-relaxed">
            Finally, products built for your big dog — not just sized up.
            <br />
            <strong>Extra-large. Extra-strong. Totally leak-proof.</strong>
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div className="inline-flex items-center gap-2 bg-white text-midnight font-brand text-sm px-5 py-3 rounded-full shadow-lg">
              Plant-Based {'&'} Biodegradable
            </div>
            <div className="inline-flex items-center gap-2 bg-white text-midnight font-brand text-sm px-5 py-3 rounded-full shadow-lg">
              44% Larger Than Standard Bags
            </div>
            <div className="inline-flex items-center gap-2 bg-white text-midnight font-brand text-sm px-5 py-3 rounded-full shadow-lg">
              Free Shipping on All Orders
            </div>
          </div>
        </motion.div>

        {/* Email Capture Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 max-w-xl mx-auto"
        >
          {submitted ? (
            <div className="bg-white rounded-3xl border-4 border-midnight shadow-[6px_6px_0_#0F1D3C] p-8 text-center">
              <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h3 className="font-display text-3xl text-midnight mb-2">YOU'RE IN THE PACK!</h3>
              <p className="font-body text-pebble">
                We'll notify you when we launch with exclusive early-bird discounts.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border-4 border-midnight shadow-[6px_6px_0_#0F1D3C] p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-3xl text-midnight mb-2">JOIN THE BIG DOG LIFE</h3>
                <p className="font-body text-pebble text-sm">
                  Get early access + <strong>15% off</strong> your first order when we launch!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address *"
                    className="w-full px-5 py-4 rounded-xl border-2 border-midnight font-body text-midnight placeholder:text-stone focus:outline-none focus:border-primary text-lg"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone number (optional)"
                    className="w-full px-5 py-4 rounded-xl border-2 border-midnight font-body text-midnight placeholder:text-stone focus:outline-none focus:border-primary text-lg"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={dogBreed}
                    onChange={(e) => setDogBreed(e.target.value)}
                    placeholder="Your big dog's breed (optional)"
                    className="w-full px-5 py-4 rounded-xl border-2 border-midnight font-body text-midnight placeholder:text-stone focus:outline-none focus:border-primary text-lg"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting || !email}
                  className="w-full h-16 text-lg font-brand bg-primary hover:bg-orange-hot disabled:bg-fog disabled:text-pebble disabled:cursor-not-allowed text-white rounded-xl shadow-[4px_4px_0_#0F1D3C] border-4 border-midnight transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:shadow-none disabled:translate-x-0 disabled:translate-y-0 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Joining...</>
                  ) : (
                    <>Notify Me <ArrowRight className="w-5 h-5" /></>
                  )}
                </button>
              </form>

              <p className="text-center text-stone text-xs font-body mt-4">
                No spam, just good news. Unsubscribe anytime.
              </p>
            </div>
          )}
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="font-brand text-sm text-stone mb-4">
            JOIN 100+ BIG DOG OWNERS ALREADY ON THE LIST
          </p>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xs shadow-lg">
                {['B', 'M', 'L', 'G', 'R'][i]}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-midnight text-cream mt-24 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-stone text-sm font-body">
              © {new Date().getFullYear()} Big Dog Life L.L.C. • Bellefontaine, Ohio
            </p>
            <p className="font-brand text-primary text-sm">
              Because Big Dogs Have Big Needs.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}