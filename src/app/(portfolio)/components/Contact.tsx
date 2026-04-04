'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, Send, Link, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    'Business Websites',
    'E-Commerce Websites',
    'Landing Pages',
    'Portfolio Websites',
    'Dashboard UI',
    'Booking Websites',
  ];

  const budgetRanges = [
    '₹2,000 - ₹5,000 (Basic)',
    '₹6,000 - ₹10,000 (Standard)',
    '₹15,000+ (Premium)',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch(
        'https://formspree.io/f/mjgpypql',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            service: formData.serviceType,
            budget: formData.budget,
            message: formData.message,
          }),
        }
      )
      
      if (response.ok) {
        setIsSubmitting(false)
        setIsSuccess(true)
        setFormData({
          name: '', email: '',
          serviceType: '', budget: '', message: ''
        })
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error('Failed')
      }
    } catch (err) {
      setIsSubmitting(false)
      alert('Failed to send. Please contact via WhatsApp.')
    }
  }

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#00e5ff]" />
            <span className="text-[#00e5ff] uppercase tracking-[0.3em] text-xs font-bold">Collaborate</span>
            <div className="h-[1px] w-12 bg-[#00e5ff]" />
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter">
            <span className="text-white">Start a </span>
            <span className="text-gradient-cyan italic">Project.</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl">
            Let's build something amazing together that drives results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#00e5ff]/50 focus:ring-4 focus:ring-[#00e5ff]/5 transition-all text-sm"
                    placeholder="John Doe"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#00e5ff]/50 focus:ring-4 focus:ring-[#00e5ff]/5 transition-all text-sm"
                    placeholder="eagleswin1524@gmail.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="serviceType" className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-[#050505] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00e5ff]/50 focus:ring-4 focus:ring-[#00e5ff]/5 transition-all text-sm appearance-none"
                  >
                    <option value="" className="bg-[#050505]">Select service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-[#050505]">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-[#050505] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00e5ff]/40 focus:ring-4 focus:ring-[#00e5ff]/5 transition-all text-sm appearance-none"
                  >
                    <option value="" className="bg-[#050505]">Select budget</option>
                    {budgetRanges.map((budget) => (
                      <option key={budget} value={budget} className="bg-[#050505]">
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#00e5ff]/50 focus:ring-4 focus:ring-[#00e5ff]/5 transition-all resize-none text-sm"
                  placeholder="Tell me about your project vision..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                className={`w-full py-4 font-black uppercase tracking-[0.3em] rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs ${
                  isSubmitting 
                    ? 'bg-white/10 text-gray-500 cursor-not-allowed' 
                    : 'bg-[#00e5ff] text-black shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]'
                }`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
              
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center justify-center gap-2 text-[#00e5ff] font-bold text-sm bg-[#00e5ff]/10 py-3 rounded-xl border border-[#00e5ff]/20"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Success! I'll be in touch.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col flex-grow"
          >
            <div className="glass-panel rounded-3xl p-10 flex flex-col h-full border-white/5">
              <h3 className="text-2xl font-bold text-white mb-6">
                Fast Track.
              </h3>
              
              <p className="text-gray-500 mb-10 leading-relaxed text-sm">
                Need answers quickly or prefer to discuss via another platform? reach out anytime. I typically respond within 12 hours.
              </p>

              <div className="space-y-4">
                <motion.a
                  whileHover={{ x: 8 }}
                  href="https://wa.me/917075457159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 glass-panel rounded-2xl hover:border-[#00e5ff]/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#00e5ff]/10 border border-[#00e5ff]/20 rounded-xl flex items-center justify-center group-hover:bg-[#00e5ff]/20 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all">
                    <MessageCircle className="w-5 h-5 text-[#00e5ff]" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">WhatsApp Chat</div>
                    <div className="text-gray-500 text-xs mt-1">Instant communication</div>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ x: 8 }}
                  href="https://linkedin.com/in/eaglewin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 glass-panel rounded-2xl hover:border-[#00e5ff]/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#00e5ff]/10 border border-[#00e5ff]/20 rounded-xl flex items-center justify-center group-hover:bg-[#00e5ff]/20 transition-all">
                    <Link className="w-5 h-5 text-[#00e5ff]" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">LinkedIn</div>
                    <div className="text-gray-500 text-xs mt-1">Professional network</div>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ x: 8 }}
                  href="mailto:eagleswin1524@gmail.com"
                  className="flex items-center gap-5 p-5 glass-panel rounded-2xl hover:border-[#00e5ff]/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#00e5ff]/10 border border-[#00e5ff]/20 rounded-xl flex items-center justify-center group-hover:bg-[#00e5ff]/20 transition-all">
                    <Mail className="w-5 h-5 text-[#00e5ff]" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Email Inbox</div>
                    <div className="text-gray-500 text-xs mt-1">Detailed project inquiry</div>
                  </div>
                </motion.a>
              </div>

              {/* Status bar */}
              <div className="mt-auto pt-10 flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e5ff]"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#00e5ff]/70">Highly Responsive Today</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
