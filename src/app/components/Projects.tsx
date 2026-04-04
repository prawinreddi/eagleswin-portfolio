'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Globe, Code2 } from 'lucide-react';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      badge: 'HIGH DEMAND',
      title: 'StyleHub',
      subtitle: 'The Instagram Pro Store',
      tech: ['Next.js', 'Tailwind', 'Sanity CMS', 'Razorpay'],
      problem: 'Instagram sellers struggling with manual DM orders and fragmented payment collection.',
      solution: 'Automated e-commerce engine with WhatsApp order alerts, UPI integration, and a simple Admin Panel.',
      resultMetric: '₹20,000 Standard Package',
      liveLink: '/projects/stylehub',
      githubLink: 'https://github.com/eagleswin/stylehub-demo',
      caseStudy: '/projects/stylehub',
    }
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
            <span className="text-[#00e5ff] uppercase tracking-[0.3em] text-xs font-bold">Featured Solution</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tighter">
            <span className="text-white">Engineering </span>
            <span className="text-gradient-cyan italic">Real Profits.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl">
            Direct real-world applications designed to automate business growth and maximize revenue.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 50 }}
              whileHover={{ y: -10, scale: 1.01 }}
              className="group glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col lg:flex-row gap-12"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex-1 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-white/20">
                    {project.badge}
                  </div>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4">
                  <p className="text-[#00e5ff] font-bold text-sm uppercase tracking-widest">
                    {project.subtitle}
                  </p>
                  <div className="h-4 w-[1px] bg-white/20" />
                  <p className="text-white font-black text-xs uppercase tracking-tighter bg-[#00e5ff]/10 px-3 py-1 rounded border border-[#00e5ff]/20">
                    {project.resultMetric}
                  </p>
                </div>
                
                <div className="space-y-6">
                   <div className="flex gap-4">
                    <div className="w-[1px] bg-gray-800" />
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">The Problem</h4>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-lg">{project.problem}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-[2px] bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" />
                    <div>
                      <h4 className="text-[10px] font-bold text-[#00e5ff] uppercase tracking-[0.2em] mb-2">The Solution</h4>
                      <p className="text-gray-200 text-sm leading-relaxed max-w-lg">{project.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech?.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] text-gray-500 font-bold uppercase tracking-wider rounded-md">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/3 flex flex-col justify-center gap-4 relative z-10">
                <Link 
                  href={project.liveLink}
                  className="py-5 bg-white text-black font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-[#00e5ff] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all flex items-center justify-center gap-2"
                >
                  <Globe className="w-5 h-5" />
                  Experience Live Demo
                </Link>
                <a 
                  href={project.githubLink}
                  target="_blank"
                  className="py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <Code2 className="w-5 h-5" />
                  View Project Source
                </a>
              </div>
            </motion.div>
          ))}
          
          <div className="text-center py-12">
             <p className="text-gray-600 font-bold uppercase tracking-[0.3em] text-[10px]">More industry-specific solutions loading...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
