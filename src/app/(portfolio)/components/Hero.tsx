"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Star, ShieldCheck, Zap, Globe2 } from 'lucide-react';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex items-center justify-center pt-20 px-4 overflow-hidden bg-[#030303]">
      
      {/* 1. DYNAMIC BACKGROUND ENGINE */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-blue-500/10 rounded-full blur-[150px]" />
        
        {/* Mesh Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* CONTENT COLUMN */}
          <div className="lg:col-span-12 text-center flex flex-col items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl mb-10"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-indigo-500 overflow-hidden shadow-2xl">
                    <img src={`https://i.pravatar.cc/150?u=${i+10}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-stone-400 text-[10px] font-black uppercase tracking-[0.3em]">
                Trusted by <span className="text-white">50+ Global Businesses</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.85] tracking-tighter mb-12"
            >
              WE BUILD <br />
              <span className="text-gradient-indigo italic">REVENUE</span> <br /> 
              ENGINES.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-stone-400 text-lg md:text-2xl max-w-2xl leading-relaxed mb-16 font-medium"
            >
              Stop building boring websites. We engineer high-conversion 
              <span className="text-white"> digital ecosystems</span> that scale your revenue 
              to 7-figures and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <a 
                href="#pricing"
                className="group relative px-12 py-6 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-indigo-600/30 overflow-hidden transition-all active:scale-95"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-3">
                  Start My Transformation <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </span>
              </a>
              
              <button 
                onClick={() => document.getElementById('demos')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-6 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-white/10 transition-all flex items-center gap-3"
              >
                <Play className="w-4 h-4 fill-white" /> Browse High-Ticket Demos
              </button>
            </motion.div>

            {/* FLOATING PERFORMANCE INDICATORS */}
            <div className="hidden lg:flex absolute bottom-[-10%] left-0 right-0 justify-between items-end px-12 gap-10">
               <motion.div style={{ y: y1 }} className="glass-panel p-6 rounded-[2.5rem] border-white/10 backdrop-blur-2xl flex flex-col items-center gap-4 text-center max-w-[240px]">
                  <div className="w-12 h-12 bg-green-500/20 text-green-500 rounded-2xl flex items-center justify-center"><Zap size={24} /></div>
                  <div>
                    <h5 className="text-white font-black text-2xl tracking-tighter">99 Speed</h5>
                    <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest mt-1">Lighthouse Performance</p>
                  </div>
               </motion.div>

               <motion.div style={{ y: y2 }} className="glass-panel p-6 rounded-[2.5rem] border-white/10 backdrop-blur-2xl flex flex-col items-center gap-4 text-center max-w-[240px]">
                  <div className="w-12 h-12 bg-indigo-500/20 text-indigo-500 rounded-2xl flex items-center justify-center"><Globe2 size={24} /></div>
                  <div>
                    <h5 className="text-white font-black text-2xl tracking-tighter">SEO Elite</h5>
                    <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest mt-1">High Google Rankings</p>
                  </div>
               </motion.div>

               <motion.div style={{ y: y1 }} className="glass-panel p-6 rounded-[2.5rem] border-white/10 backdrop-blur-2xl flex flex-col items-center gap-4 text-center max-w-[240px]">
                  <div className="w-12 h-12 bg-orange-500/20 text-orange-500 rounded-2xl flex items-center justify-center"><ShieldCheck size={24} /></div>
                  <div>
                    <h5 className="text-white font-black text-2xl tracking-tighter">24/7 Security</h5>
                    <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest mt-1">Enterprise Encryption</p>
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* SCROLL INDICATOR */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-black text-stone-600 uppercase tracking-[0.5em] rotate-90">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-indigo-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
