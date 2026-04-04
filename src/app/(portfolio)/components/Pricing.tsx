'use client';

import { motion } from 'framer-motion';
import { Check, Star, ShoppingBag, Utensils, Home, GraduationCap, Database } from 'lucide-react';
import { useState } from 'react';

const commercePlans = [
  {
    name: 'Basic Store',
    price: '₹10,000',
    features: [
      '5 Strategic Pages',
      'Mobile Responsive Design',
      'Razorpay Payment Setup',
      'Instagram Link-in-Bio',
      '1 Revision Round',
      'Delivery: 5-7 Days',
    ],
    popular: false,
  },
  {
    name: 'Standard Store',
    price: '₹15,000',
    features: [
      '8 High-Conversion Pages',
      'Sanity CMS Admin Panel',
      'WhatsApp Order Alerts',
      'Coupon & Inventory Manager',
      '3 Revision Rounds',
      'Delivery: 14-18 Days',
    ],
    popular: true,
  },
  {
    name: 'Premium Store',
    price: '₹20,000+',
    features: [
      'Unlimited High-End Pages',
      'Shiprocket API Integration',
      'Customer Account & Login',
      'Advanced Marketing Pixel',
      'Unlimited Revisions',
      'Delivery: 18-25 Days',
    ],
    popular: false,
  },
];

const restoPlans = [
  {
    name: 'Basic Menu',
    price: '₹8,000',
    features: [
      'Digital Menu + Cart',
      'Razorpay Integration',
      'WhatsApp Order Alerts',
      'Mobile Responsive',
      '1 Revision Round',
      'Delivery: 5-7 Days',
    ],
    popular: false,
  },
  {
    name: 'Standard System',
    price: '₹12,000',
    features: [
      'Full Ordering System',
      'Order Management Admin',
      'Live Order Tracking',
      'Coupon Codes Setup',
      '3 Revision Rounds',
      'Delivery: 10-14 Days',
    ],
    popular: true,
  },
  {
    name: 'Premium Network',
    price: '₹18,000+',
    features: [
      'Loyalty Points System',
      'Multi-Branch Support',
      'Advanced Analytics',
      'Customer History List',
      'Unlimited Revisions',
      'Delivery: 15-20 Days',
    ],
    popular: false,
  },
];

const estatePlans = [
  {
    name: 'Agent Landing',
    price: '₹15,000',
    features: [
      'Property Listings Page',
      'WhatsApp Lead Capture',
      'Agent Profile Section',
      'SEO Optimized Meta',
      '1 Revision Round',
      'Delivery: 7-9 Days',
    ],
    popular: false,
  },
  {
    name: 'Property Portal',
    price: '₹25,000',
    features: [
      'Advanced Search Filters',
      'Admin Dashboard (CMS)',
      'EMI Calculator Integration',
      'Area Guides (Blog)',
      '3 Revision Rounds',
      'Delivery: 15-20 Days',
    ],
    popular: true,
  },
  {
    name: 'Real Estate Hub',
    price: '₹45,000+',
    features: [
      'Virtual Tour Setup',
      'Google Maps API Integration',
      'Customer CRM Panel',
      'Automatic Ad Sync',
      'Unlimited Revisions',
      'Delivery: 25-30 Days',
    ],
    popular: false,
  },
];

const coachPlans = [
  {
    name: 'Batch Funnel',
    price: '₹3,000',
    features: [
      'Single High-Conv Page',
      'Urgency Countdowns',
      'Results Section',
      'Lead Capture Form',
      'Delivery: 4 Days',
    ],
    popular: false,
  },
  {
    name: 'Academy Hero',
    price: '₹5,000',
    features: [
      'Multi-Batch Management',
      'Faculty Profiles',
      'Testimonial Grid',
      'WhatsApp Notification',
      'Delivery: 6-7 Days',
    ],
    popular: true,
  },
  {
    name: 'Elite Growth',
    price: '₹8,000',
    features: [
      'LMS Teaser Integration',
      'Student Login Portal',
      'Automated Reminders',
      'Advanced Landing Suite',
      'Delivery: 10-14 Days',
    ],
    popular: false,
  },
];

const stockPlans = [
  {
    name: 'Basic Inventory',
    price: '₹20,000',
    features: [
      'Item Management',
      'Stock In/Out Tracking',
      'Low Stock Alerts',
      'Standard Reports',
      'Delivery: 7-10 Days',
    ],
    popular: false,
  },
  {
    name: 'SaaS Dashboard',
    price: '₹30,000',
    features: [
      'Customer Debt Ledger',
      'WhatsApp Auto-Alerts',
      'PDF Invoice Export',
      'Profit & Loss Analytics',
      'Delivery: 15-20 Days',
    ],
    popular: true,
  },
  {
    name: 'Enterprise ERP',
    price: '₹40,000+',
    features: [
      'Barcode Scanning Port',
      'Multi-User Roles',
      'GST Billing Engine',
      'AMC Support Package',
      'Delivery: 25-35 Days',
    ],
    popular: false,
  },
];

const clinicPlans = [
  {
    name: 'Basic Clinic',
    price: '₹12,000',
    features: [
      'Doctor Profile Page',
      'Clinic Timings & Fees',
      'Basic Contact Form',
      'Mobile Responsive',
      'Delivery: 5-7 Days',
    ],
    popular: false,
  },
  {
    name: 'Standard System',
    price: '₹16,000',
    features: [
      'Live Slot Booking',
      'Calendar Availability',
      'Patient Details Form',
      'WhatsApp Confirmation',
      'Delivery: 10-14 Days',
    ],
    popular: true,
  },
  {
    name: 'Premium Network',
    price: '₹20,000+',
    features: [
      'Appointment Reminders',
      'Multi-Doctor Support',
      'Patient History Log',
      'Digital Prescription Store',
      'Delivery: 15-20 Days',
    ],
    popular: false,
  },
];

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<'commerce' | 'resto' | 'estate' | 'coach' | 'stock' | 'clinic'>('commerce');

  const currentPlans = 
    activeTab === 'commerce' ? commercePlans : 
    activeTab === 'resto' ? restoPlans :
    activeTab === 'estate' ? estatePlans :
    activeTab === 'coach' ? coachPlans : 
    activeTab === 'stock' ? stockPlans : clinicPlans;

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
          className="mb-12 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#00e5ff]" />
            <span className="text-[#00e5ff] uppercase tracking-[0.3em] text-xs font-bold">Investment</span>
            <div className="h-[1px] w-12 bg-[#00e5ff]" />
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter">
            <span className="text-white">Strategic </span>
            <span className="text-gradient-cyan italic">Pricing.</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl">
            Choose the perfect solution for your business growth
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="p-1 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 flex flex-wrap justify-center gap-1">
            {[
              { id: 'commerce', label: 'E-Commerce', icon: ShoppingBag },
              { id: 'resto', label: 'Restaurant', icon: Utensils },
              { id: 'estate', label: 'Real Estate', icon: Home },
              { id: 'coach', label: 'Coaching', icon: GraduationCap },
              { id: 'stock', label: 'Inventory', icon: Database },
              { id: 'clinic', label: 'Clinic', icon: Star },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
                  activeTab === tab.id 
                    ? 'bg-[#00e5ff] text-black shadow-[0_0_20px_rgba(0,229,255,0.3)]' 
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPlans.map((plan, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 60 }}
              whileHover={{ y: -10 }}
              className={`relative glass-panel rounded-3xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 ${
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
