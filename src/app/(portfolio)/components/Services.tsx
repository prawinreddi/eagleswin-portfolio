'use client';

import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Target, Briefcase, Layout, Calendar } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Business Websites',
    description: 'Professional online presence that builds trust and credibility for your brand',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Websites',
    description: 'Powerful online stores with smooth checkout experience that convert visitors into buyers',
  },
  {
    icon: Target,
    title: 'Landing Pages',
    description: 'High-converting pages designed to turn your traffic into leads and sales',
  },
  {
    icon: Briefcase,
    title: 'Portfolio Websites',
    description: 'Stunning portfolio sites that showcase your work and attract the right clients',
  },
  {
    icon: Layout,
    title: 'Dashboard UI',
    description: 'Clean and intuitive admin dashboards that make managing your business effortless',
  },
  {
    icon: Calendar,
    title: 'Booking Websites',
    description: 'Smart booking systems that let your customers schedule appointments 24/7',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00e5ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-start"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#00e5ff]" />
            <span className="text-[#00e5ff] uppercase tracking-[0.3em] text-xs font-bold">What I Build</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter">
            <span className="text-white">Premium </span>
            <span className="text-gradient-cyan italic">Services.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.08, type: 'spring', stiffness: 60 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass-panel rounded-2xl p-8 relative overflow-hidden cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              {/* Cyan border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-[#00e5ff]/0 group-hover:border-[#00e5ff]/30 transition-all duration-500 pointer-events-none" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center mb-6 group-hover:bg-[#00e5ff]/20 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all duration-300">
                <service.icon className="w-6 h-6 text-[#00e5ff]" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-[#00e5ff] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
