'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      badge: 'LIVE',
      title: 'BrandSite Pro',
      subtitle: 'Business Website',
      problem: 'Local businesses losing customers due to no online presence',
      solution: 'Built with Next.js, Tailwind CSS, fully responsive with SEO optimization',
      result: 'Professional brand identity that builds instant customer trust',
    },
    {
      badge: 'DEMO',
      title: 'ShopEase',
      subtitle: 'E-Commerce Platform',
      problem: 'Small retailers unable to sell online with poor checkout experience',
      solution: 'Shopify-based store with Stripe payment, product filters, cart system',
      result: 'Clean conversion-focused shopping experience with 40% better UX',
    },
    {
      badge: 'CONCEPT',
      title: 'LaunchPad',
      subtitle: 'Landing Page',
      problem: 'Businesses running ads but getting zero conversions from their pages',
      solution: 'High-converting landing page with clear CTA, testimonials, and fast load time',
      result: 'Optimized page structure designed to convert visitors into leads',
    },
    {
      badge: 'LIVE',
      title: 'CreativePort',
      subtitle: 'Portfolio Website',
      problem: 'Freelancers losing clients due to unprofessional or no portfolio',
      solution: 'Minimal dark-theme portfolio with smooth animations and project showcase',
      result: 'Client-ready portfolio that builds credibility and attracts better projects',
    },
    {
      badge: 'DEMO',
      title: 'AdminFlow',
      subtitle: 'Dashboard UI',
      problem: 'Business owners struggling with complex and confusing admin panels',
      solution: 'Clean React dashboard with data tables, charts, and role-based access',
      result: 'Intuitive interface that reduces management time by 60%',
    },
    {
      badge: 'LIVE',
      title: 'BookNow',
      subtitle: 'Booking Website',
      problem: 'Service businesses losing bookings due to manual phone scheduling',
      solution: 'Online booking system with calendar, time slots, and email confirmation',
      result: '24/7 automated booking that eliminates scheduling conflicts',
    },
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'LIVE':
        return 'bg-green-500';
      case 'DEMO':
        return 'bg-blue-500';
      case 'CONCEPT':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-world solutions delivering measurable results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300"
            >
              {/* Badge and Title */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 ${getBadgeColor(project.badge)} text-white text-xs font-semibold rounded-full`}>
                      {project.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-blue-400 font-medium">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Mockup Image Placeholder */}
              <div className="w-full h-48 bg-gray-800 rounded-lg mb-6 flex items-center justify-center border border-gray-700">
                <span className="text-gray-600 text-lg font-medium">
                  {project.title} Mockup
                </span>
              </div>

              {/* Case Study Content */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Problem
                  </h4>
                  <p className="text-gray-300">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Solution
                  </h4>
                  <p className="text-gray-300">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Result
                  </h4>
                  <p className="text-gray-300">
                    {project.result}
                  </p>
                </div>
              </div>

              {/* View Details Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="mt-6 w-full py-3 bg-gray-800 text-blue-400 font-semibold rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 border border-gray-700 hover:border-blue-500 cursor-pointer"
              >
                View Details
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
