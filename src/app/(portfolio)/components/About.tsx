"use client";

import { motion } from 'framer-motion';
import { Award, Zap, Target, BarChart3, Code2, Globe2, ShieldCheck, Cpu } from 'lucide-react';

const stats = [
  { label: 'High-Ticket Projects', value: '50+', icon: Award },
  { label: 'Domain Expertise', value: '12+', icon: Cpu },
  { label: 'Client Satisfaction', value: '99%', icon: ShieldCheck },
  { label: 'ROI Improvement', value: '45% Avg', icon: BarChart3 },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#050505]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto group">
              {/* Animated borders */}
              <div className="absolute inset-x-[-20px] inset-y-[-20px] border border-indigo-500/20 rounded-[4rem] group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-x-[-10px] inset-y-[-10px] border border-indigo-500/40 rounded-[3.5rem] group-hover:rotate-3 transition-transform duration-700" />
              
              <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                  alt="Elite Developer" 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 right-8 p-6 glass-panel rounded-2xl border-white/10 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-white">
                      <Zap size={24} />
                    </div>
                    <div>
                      <p className="text-white font-black uppercase tracking-widest text-xs">Innovation Partner</p>
                      <p className="text-indigo-400 text-[10px] font-bold uppercase tracking-widest mt-1">ROI Focused Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-indigo-500" />
                <span className="text-indigo-500 uppercase tracking-[0.3em] text-xs font-bold">The Visionary</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter leading-tight">
                Not Just a Developer, <br /> 
                <span className="text-gradient-indigo italic">A Growth Partner.</span>
              </h2>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              I specialize in transforming ambitious business ideas into high-performance digital experiences. 
              My approach blends <span className="text-white font-bold">premium aesthetics</span> with 
              <span className="text-white font-bold"> scalable architecture</span>, ensuring every project 
              isn’t just beautiful, but generates measurable ROI. 
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'Strategic Planning', icon: Target, desc: 'Every line of code serves a business goal.' },
                { title: 'Global Standards', icon: Globe2, desc: 'Implementing cutting-edge tech like Next.js 14.' },
                { title: 'Performance First', icon: Zap, desc: 'Blazing fast load times for higher conversions.' },
                { title: 'Secure & Reliable', icon: ShieldCheck, desc: 'Enterprise-grade security in every build.' },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-2 text-indigo-500">
                    <item.icon size={18} />
                    <span className="font-black uppercase tracking-widest text-[10px]">{item.title}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/5">
              {stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <p className="text-3xl font-black text-white tracking-tighter mb-1">{stat.value}</p>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
