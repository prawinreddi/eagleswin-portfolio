'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      badge: 'LIVE DEMO',
      title: 'Skyline Real Estate',
      subtitle: 'Business Website',
      problem: 'Real estate agencies losing high-end clients due to outdated, non-responsive web presence.',
      solution: 'Built a premium, high-res property portal with modern search and interactive listings.',
      result: 'Professional brand identity that builds instant trust with luxury property buyers.',
      link: '/projects/real-estate',
    },
    {
      badge: 'LIVE DEMO',
      title: 'Vogue Boutique',
      subtitle: 'E-Commerce Platform',
      problem: 'Fashion retailers struggling with low mobile conversion and cluttered shopping experiences.',
      solution: 'High-end minimalist store with smooth transitions, interactive cart, and premium visuals.',
      result: 'Clean, conversion-focused shopping journey designed for luxury fashion brands.',
      link: '/projects/fashion-store',
    },
    {
      badge: 'LIVE DEMO',
      title: 'NexFlow SaaS',
      subtitle: 'Landing Page',
      problem: 'SaaS startups failing to communicate complexity simply, leading to high bounce rates.',
      solution: 'Ultra-modern tech landing page with glassmorphism, animated UI, and lead-gen focus.',
      result: 'High-impact landing page structure that turns complex features into clear value.',
      link: '/projects/saas-pro',
    },
    {
      badge: 'LIVE DEMO',
      title: 'Sterling Brand',
      subtitle: 'Premium Portfolio',
      problem: 'Executives and creatives missing out on high-tier opportunities due to basic portfolios.',
      solution: 'Bold typographic personal brand with editorial feel and premium entrance animations.',
      result: 'Stunning professional presence that positions the individual as a top-tier industry leader.',
      link: '/projects/personal-brand',
    },
    {
      badge: 'LIVE DEMO',
      title: 'FinTrack CRM',
      subtitle: 'Dashboard UI',
      problem: 'Financial teams overwhelmed by complex data without clear visual hierarchy or speed.',
      solution: 'Dark-mode analytics dashboard with interactive SVG charts and production-ready components.',
      result: 'Highly intuitive administrative interface designed for efficiency and data clarity.',
      link: '/projects/dashboard',
    },
    {
      badge: 'LIVE DEMO',
      title: 'Elite Spa & Wellness',
      subtitle: 'Booking Website',
      problem: 'Wellness centers losing revenue to phone-tag and unorganized scheduling systems.',
      solution: 'Minimalist booking engine with custom calendar flow and step-by-step confirmation.',
      result: 'Seamless 24/7 automated booking experience for high-end boutique services.',
      link: '/projects/booking',
    },
  ];

  const getBadgeColor = (badge: string) => {
    return 'bg-blue-600';
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
            <span className="text-gradient">Featured Solutions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto italic font-medium">
            Strategic "Real-World" projects designed to drive results
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
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition-all duration-300"
            >
              {/* Badge and Title */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 ${getBadgeColor(project.badge)} text-white text-[10px] font-black uppercase tracking-widest rounded-full`}>
                      {project.badge}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-blue-400 font-bold text-xs uppercase tracking-widest">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Case Study Content */}
              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2 font-serif italic">
                    The Problem
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2 font-serif italic">
                    The Solution
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* View Live Demo Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href={project.link}
                    className="flex-1 py-4 bg-white text-black font-black uppercase tracking-widest text-[11px] rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                  >
                    Launch Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    className="flex-1 py-4 bg-gray-800 text-gray-300 font-bold uppercase tracking-widest text-[11px] rounded-xl hover:bg-gray-700 transition-all flex items-center justify-center gap-2 border border-gray-700 hover:border-blue-500"
                  >
                    Discuss Success
                    <ArrowRight className="w-4 h-4" />
                  </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
