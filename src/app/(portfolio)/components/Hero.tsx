"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-4 bg-[#030303] overflow-hidden">
      
      {/* 1. Dynamic Background Engine (Subtle) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-blue-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
        
        {/* Simple & Powerful Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-black text-white leading-[1] tracking-tighter mb-10"
        >
          Full Stack Developer <br />
          building scalable <br /> 
          web apps.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-stone-400 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed mb-16 font-medium"
        >
          I help startups and businesses create fast, modern, and user-friendly digital products.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            onClick={() => document.getElementById('demos')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-12 py-6 bg-white text-black rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:bg-stone-200 active:scale-95 flex items-center gap-2"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-6 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white/10 transition-all flex items-center gap-2"
          >
            Contact Me
          </button>
        </motion.div>

      </div>
      
      {/* Subtle Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20"
      >
        <div className="w-px h-12 bg-white" />
      </motion.div>
    </section>
  );
};

export default Hero;
