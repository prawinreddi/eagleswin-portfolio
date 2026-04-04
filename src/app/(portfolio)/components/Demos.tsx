"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Demos = () => {
  return (
    <section id="demos" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#00e5ff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl text-white mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tighter">
            Premium Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0088ff]">Demos.</span>
          </h2>
          <p className="text-stone-400 text-lg">
            Experience our high-ticket templates in action. 
            We build fully functional, conversion-optimized projects for modern brands.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* StyleHub E-Commerce Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#111] shadow-2xl transition-all"
          >
            {/* Project Image placeholder - using the hero image styled */}
            <div className="aspect-[16/9] w-full relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/stylehub/hero-banner.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00e5ff] transition-colors">StyleHub</h3>
                  <p className="text-[#00e5ff] text-sm tracking-widest uppercase font-medium">Premium E-Commerce Store</p>
                </div>
                <Link href="/stylehub" className="p-3 bg-white/5 rounded-full hover:bg-[#00e5ff] hover:text-black transition-colors text-white">
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>
              
              <p className="text-stone-400 mb-8 leading-relaxed">
                A high-fidelity luxury fashion store demo. Features include fully responsive glassmorphism UI, 
                dynamic cart state, and premium smooth animations.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Next.js 14', 'Tailwind CSS', 'Framer Motion', 'Zustand'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-stone-300 rounded-full text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <Link 
                href="/stylehub"
                className="inline-flex items-center gap-2 text-white font-medium group-hover:text-[#00e5ff] transition-colors"
              >
                View Live Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demos;
