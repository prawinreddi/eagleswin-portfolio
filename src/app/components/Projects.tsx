'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Globe, Code2 } from 'lucide-react';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      badge: 'REAL ESTATE',
      title: 'Skyline Estates',
      subtitle: 'Luxury Property Portal',
      tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
      problem: 'Local real estate agencies losing high-end clients due to outdated, non-responsive web presence.',
      solution: 'Built a premium, high-res property portal with modern search and interactive listings.',
      resultMetric: 'Avg. 34% Lead Increase',
      liveLink: '/projects/real-estate',
      githubLink: 'https://github.com/eagleswin/skyline-realestate',
      caseStudy: '/projects/real-estate',
    },
    {
      badge: 'BOUTIQUE RETAIL',
      title: 'Vogue Lifestyle',
      subtitle: 'Fashion E-Commerce',
      tech: ['Next.js', 'Stripe', 'Tailwind', 'Framer Motion'],
      problem: 'Local fashion retailers struggling with low online sales and slow shopping experiences.',
      solution: 'High-end minimalist store with smooth transitions, interactive cart, and premium visuals.',
      resultMetric: '2X Online Orders',
      liveLink: '/projects/fashion-store',
      githubLink: 'https://github.com/eagleswin/vogue-boutique',
      caseStudy: '/projects/fashion-store',
    },
    {
      badge: 'HEALTHCARE',
      title: 'Zenith Medical',
      subtitle: 'Clinic Management',
      tech: ['Next.js', 'Firebase', 'Recharts', 'TypeScript'],
      problem: 'Local multi-specialty clinics overwhelmed by manual patient tracking and inefficient booking.',
      solution: 'Real-time telemetry dashboard for doctors with automated patient alert systems.',
      resultMetric: '15+ hrs/week Saved',
      liveLink: '/projects/saas-pro',
      githubLink: 'https://github.com/eagleswin/health-portal',
      caseStudy: '/projects/saas-pro',
    },
    {
      badge: 'PROFESSIONAL',
      title: 'Sterling Brand',
      subtitle: 'Premium Portfolio',
      tech: ['React', 'WebSocket', 'Tailwind', 'Node.js'],
      problem: 'Individual professionals and executives missing high-tier opportunities due to basic portfolios.',
      solution: 'Bold typographic personal brand with editorial feel and premium entrance animations.',
      resultMetric: 'Stunning Digital presence',
      liveLink: '/projects/personal-brand',
      githubLink: 'https://github.com/eagleswin/personal-brand',
      caseStudy: '/projects/personal-brand',
    },
    {
      badge: 'LOCAL BUSINESS',
      title: 'LocalStream CRM',
      subtitle: 'Business Analytics',
      tech: ['Next.js', 'PostgreSQL', 'Stripe', 'Mux'],
      problem: 'Local businesses failing to track customer growth and recurring revenue accurately.',
      solution: 'Dark-mode analytics dashboard with interactive charts and CRM components.',
      resultMetric: 'Clear Business Growth',
      liveLink: '/projects/dashboard',
      githubLink: 'https://github.com/eagleswin/local-crm',
      caseStudy: '/projects/dashboard',
    },
    {
      badge: 'HOME SERVICES',
      title: 'FixIt Hub',
      subtitle: 'Booking Platform',
      tech: ['Next.js', 'Grafana', 'Docker', 'Go'],
      problem: 'Home service providers losing revenue to phone-tag and unorganized scheduling systems.',
      solution: 'Minimalist booking engine with custom calendar flow and step-by-step confirmation.',
      resultMetric: 'Seamless 24/7 Booking',
      liveLink: '/projects/booking',
      githubLink: 'https://github.com/eagleswin/service-booking',
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
                <div className="flex items-center gap-4 mb-4">
                  <p className="text-[#00e5ff] font-medium text-xs md:text-sm uppercase tracking-widest">
                    {project.subtitle}
                  </p>
                  <div className="h-4 w-[1px] bg-white/20" />
                  <p className="text-white font-black text-[10px] uppercase tracking-tighter bg-[#00e5ff]/10 px-2 py-0.5 rounded border border-[#00e5ff]/20">
                    {project.resultMetric}
                  </p>
                </div>
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
