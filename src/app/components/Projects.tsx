'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Globe, Code2 } from 'lucide-react';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      badge: 'LIVE DEMO',
      title: 'Skyline Real Estate',
      subtitle: 'Business Website',
      tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
      problem: 'Real estate agencies losing high-end clients due to outdated, non-responsive web presence.',
      solution: 'Built a premium, high-res property portal with modern search and interactive listings.',
      result: 'Professional brand identity that builds instant trust with luxury property buyers.',
      liveLink: 'https://skyline-realestate.example.com',
      githubLink: 'https://github.com/eagleswin/skyline-realestate',
      caseStudy: '/projects/real-estate',
    },
    {
      badge: 'LIVE DEMO',
      title: 'Vogue Boutique',
      subtitle: 'E-Commerce Platform',
      tech: ['Next.js', 'Stripe', 'Tailwind', 'Framer Motion'],
      problem: 'Fashion retailers struggling with low mobile conversion and cluttered shopping experiences.',
      solution: 'High-end minimalist store with smooth transitions, interactive cart, and premium visuals.',
      result: 'Clean, conversion-focused shopping journey designed for luxury fashion brands.',
      liveLink: 'https://vogue-boutique.example.com',
      githubLink: 'https://github.com/eagleswin/vogue-boutique',
      caseStudy: '/projects/fashion-store',
    },
    {
      badge: 'LIVE DEMO',
      title: 'NexFlow SaaS',
      subtitle: 'Landing Page',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
      problem: 'SaaS startups failing to communicate complexity simply, leading to high bounce rates.',
      solution: 'Ultra-modern tech landing page with glassmorphism, animated UI, and lead-gen focus.',
      result: 'High-impact landing page structure that turns complex features into clear value.',
      liveLink: 'https://nexflow-saas.example.com',
      githubLink: 'https://github.com/eagleswin/nexflow-saas',
      caseStudy: '/projects/saas-pro',
    },
    {
      badge: 'LIVE DEMO',
      title: 'Sterling Brand',
      subtitle: 'Premium Portfolio',
      tech: ['Next.js', 'GSAP', 'Tailwind', 'Framer Motion'],
      problem: 'Executives and creatives missing out on high-tier opportunities due to basic portfolios.',
      solution: 'Bold typographic personal brand with editorial feel and premium entrance animations.',
      result: 'Stunning professional presence that positions the individual as a top-tier industry leader.',
      liveLink: 'https://sterling-brand.example.com',
      githubLink: 'https://github.com/eagleswin/sterling-brand',
      caseStudy: '/projects/personal-brand',
    },
    {
      badge: 'LIVE DEMO',
      title: 'FinTrack CRM',
      subtitle: 'Dashboard UI',
      tech: ['Next.js', 'Recharts', 'Tailwind', 'TypeScript'],
      problem: 'Financial teams overwhelmed by complex data without clear visual hierarchy or speed.',
      solution: 'Dark-mode analytics dashboard with interactive SVG charts and production-ready components.',
      result: 'Highly intuitive administrative interface designed for efficiency and data clarity.',
      liveLink: 'https://fintrack-crm.example.com',
      githubLink: 'https://github.com/eagleswin/fintrack-crm',
      caseStudy: '/projects/dashboard',
    },
    {
      badge: 'LIVE DEMO',
      title: 'Elite Spa & Wellness',
      subtitle: 'Booking Website',
      tech: ['Next.js', 'Prisma', 'Tailwind', 'PostgreSQL'],
      problem: 'Wellness centers losing revenue to phone-tag and unorganized scheduling systems.',
      solution: 'Minimalist booking engine with custom calendar flow and step-by-step confirmation.',
      result: 'Seamless 24/7 automated booking experience for high-end boutique services.',
      liveLink: 'https://elite-spa.example.com',
      githubLink: 'https://github.com/eagleswin/elite-spa',
      caseStudy: '/projects/booking',
    },
  ];

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background glow for Projects section */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#00e5ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-start"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#00e5ff]" />
            <span className="text-[#00e5ff] uppercase tracking-[0.3em] text-xs font-bold">Selected Works</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tighter">
            <span className="text-white">Engineering </span>
            <span className="text-gradient-cyan italic">Success.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 50 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    {project.badge}
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-[#00e5ff] font-medium text-sm md:text-base uppercase tracking-widest mb-4">
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech?.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] text-gray-400 font-bold uppercase tracking-wider rounded-md transition-all group-hover:border-[#00e5ff]/30 group-hover:text-[#00e5ff]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-8 relative z-10">
                <div className="flex gap-4">
                  <div className="w-[1px] bg-gray-800" />
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">
                      The Challenge
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-[2px] bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" />
                  <div>
                    <h4 className="text-[10px] font-bold text-[#00e5ff] uppercase tracking-[0.2em] mb-3">
                      The Solution
                    </h4>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 w-full">
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 bg-white text-black font-black uppercase tracking-widest text-[11px] rounded-xl hover:bg-[#00e5ff] hover:shadow-[0_0_20px_#00e5ff] transition-all flex items-center justify-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  Live Preview
                </a>
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[11px] rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <Code2 className="w-4 h-4" />
                  GitHub Source
                </a>
                <Link 
                  href={project.caseStudy}
                  className="sm:col-span-2 py-3 text-gray-500 hover:text-white transition-colors text-center text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2"
                >
                  View Full Case Study
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
