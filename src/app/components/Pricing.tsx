'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transparent pricing plans to fit your budget and needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative bg-gray-900 rounded-xl p-8 border ${
                plan.popular
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20'
                  : 'border-gray-800 hover:border-blue-500'
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="flex items-center gap-1 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-3xl font-bold text-blue-400 mb-6">
                {plan.price}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`w-full py-3 rounded-lg font-semibold transition-all cursor-pointer ${
                  plan.popular
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-800 text-blue-400 border border-gray-700 hover:bg-gray-700 hover:border-blue-500'
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
