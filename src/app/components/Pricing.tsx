'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '₹2,000 to ₹5,000',
    features: [
      'Landing Page or Simple Portfolio',
      'Up to 3 pages',
      'Mobile Responsive',
      'Basic SEO Setup',
      '1 Revision Round',
      'Delivery: 3-5 Days',
    ],
    popular: false,
  },
  {
    name: 'Standard',
    price: '₹6,000 to ₹10,000',
    features: [
      'Business or Portfolio Website',
      'Up to 6 pages',
      'Mobile Responsive',
      'SEO Optimized',
      'Contact Form',
      '3 Revision Rounds',
      'Delivery: 7-10 Days',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '₹15,000+',
    features: [
      'E-Commerce / Booking / Dashboard',
      'Unlimited Pages',
      'Advanced Animations',
      'Payment Integration',
      'Admin Panel',
      'Unlimited Revisions',
      'Delivery: 14-21 Days',
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00e5ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#00e5ff]" />
            <span className="text-[#00e5ff] uppercase tracking-[0.3em] text-xs font-bold">Investment</span>
            <div className="h-[1px] w-12 bg-[#00e5ff]" />
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter">
            <span className="text-white">Pricing </span>
            <span className="text-gradient-cyan italic">Plans.</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl">
            Transparent pricing models for businesses of all sizes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 60 }}
              whileHover={{ y: -10 }}
              className={`relative glass-panel rounded-3xl p-8 flex flex-col justify-between overflow-hidden ${
                plan.popular ? 'border-[#00e5ff]/40 shadow-[0_0_40px_rgba(0,229,255,0.1)]' : 'border-white/5'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-[#00e5ff] text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-bl-xl flex items-center gap-1">
                    <Star className="w-3 h-3 fill-black" />
                    Popular
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{plan.name}</h3>
                <div className="text-3xl font-black text-[#00e5ff] mb-8 tracking-tighter">{plan.price}</div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00e5ff]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#00e5ff]" />
                      </div>
                      <span className="text-gray-400 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: plan.popular ? '#00e5ff' : 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[11px] transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-[#00e5ff] text-black shadow-[0_0_20px_rgba(0,229,255,0.3)]' 
                    : 'bg-white/5 text-white border border-white/10 hover:border-[#00e5ff]/50'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
