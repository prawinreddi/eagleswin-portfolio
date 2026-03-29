'use client';

import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Target, Briefcase, Layout, Calendar } from 'lucide-react';

const Services = () => {
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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive web solutions tailored to grow your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-400 transition-colors"
              >
                <service.icon className="w-6 h-6 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
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
