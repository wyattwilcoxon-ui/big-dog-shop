import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      await base44.functions.invoke('sendContactEmail', form);
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="bg-background min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-brand text-primary text-sm uppercase tracking-widest mb-3">Say Hello</p>
          <h1 className="font-display text-6xl sm:text-8xl text-midnight mb-4 leading-none">
            CONTACT US
          </h1>
          <p className="font-body text-pebble text-lg mb-12 max-w-xl">
            Questions, bulk orders, or just want to show us your giant dog? We'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div>
              {submitted ? (
                <div className="bg-secondary/10 border-2 border-secondary rounded-2xl p-8 text-center">
                  <div className="text-5xl mb-4">🐾</div>
                  <h3 className="font-brand text-xl text-midnight mb-2">Message sent!</h3>
                  <p className="font-body text-pebble text-sm">We'll get back to you within 1–2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-brand text-sm text-midnight mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full border-2 border-fog rounded-xl px-4 py-3 font-body text-midnight bg-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="Big Dog Parent"
                    />
                  </div>
                  <div>
                    <label className="block font-brand text-sm text-midnight mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full border-2 border-fog rounded-xl px-4 py-3 font-body text-midnight bg-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block font-brand text-sm text-midnight mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full border-2 border-fog rounded-xl px-4 py-3 font-body text-midnight bg-white focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your dog, your order, or anything else..."
                    />
                  </div>
                  {error && <p className="font-body text-destructive text-sm">{error}</p>}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white font-brand text-lg py-4 rounded-full hover:bg-orange-hot transition-colors disabled:opacity-70"
                  >
                    {sending ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : 'Send Message 🐾'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="bg-midnight rounded-2xl p-6">
                <h3 className="font-brand text-white text-lg mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:bark@thebigdoglife.com"
                    className="flex items-center gap-3 text-stone hover:text-primary transition-colors font-body text-sm"
                  >
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    bark@thebigdoglife.com
                  </a>
                  <div className="flex items-center gap-3 text-stone font-body text-sm">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    Bellefontaine, Ohio, USA
                  </div>
                  <a
                    href="https://www.instagram.com/thebigdoglife"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-stone hover:text-primary transition-colors font-body text-sm"
                  >
                    <Instagram className="w-5 h-5 text-primary flex-shrink-0" />
                    @thebigdoglife
                  </a>
                </div>
              </div>

              <div className="bg-orange-pale border-2 border-primary rounded-2xl p-6">
                <h3 className="font-brand text-midnight text-lg mb-2">Bulk & Wholesale Orders</h3>
                <p className="font-body text-pebble text-sm leading-relaxed mb-3">
                  Dog shelters, groomers, dog parks, and pet stores — we offer bulk pricing. Email us with your volume needs.
                </p>
                <a
                  href="mailto:bark@thebigdoglife.com?subject=Bulk Order Inquiry"
                  className="inline-flex items-center gap-2 bg-primary text-white font-brand text-sm px-5 py-2.5 rounded-full hover:bg-orange-hot transition-colors"
                >
                  <Mail className="w-4 h-4" /> Email for Bulk Pricing
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}