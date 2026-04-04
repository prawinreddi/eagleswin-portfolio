'use client';

import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const Projects = () => {
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

        {/* Coming Soon Placeholder */}
        <div className="mt-12 flex flex-col items-center justify-center py-20 glass-panel rounded-3xl border border-dashed border-white/10 group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10 text-center px-6">
            <div className="w-16 h-16 bg-[#00e5ff]/10 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(0,229,255,0.1)]">
              <Code2 className="w-8 h-8 text-[#00e5ff]/60" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
              Case Studies in Progress.
            </h3>
            <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed mb-8">
              Strategic digital solutions and high-conversion assets are currently under NDA or final preparation. 
              Contact me to view specific client work on a private call.
            </p>
            <div className="inline-flex items-center gap-2 text-[#00e5ff] text-[10px] font-black uppercase tracking-[0.3em] bg-[#00e5ff]/5 px-4 py-2 rounded-full border border-[#00e5ff]/20">
              Launching Soon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
