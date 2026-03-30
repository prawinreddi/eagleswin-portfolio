'use client';

import { motion } from 'framer-motion';
import { ChevronRight, BarChart3, Shield, Zap, Globe, Code, MessageCircle, Link as LinkIcon, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const SaaSPro = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">NexFlow</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Product</a>
            <a href="#" className="hover:text-white transition-colors">Solutions</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="px-5 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-full border border-white/10 transition-all">
              Back to Portfolio
            </Link>
            <button className="hidden sm:block px-5 py-2 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Project Metadata Bar */}
      <div className="pt-24 bg-[#050505] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-6 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500">
          <div className="flex items-center gap-2"><span className="text-blue-500">CLIENT:</span> FAST-GROWTH B2B</div>
          <div className="flex items-center gap-2"><span className="text-blue-500">INDUSTRY:</span> ENTERPRISE AUTOMATION</div>
          <div className="flex items-center gap-2"><span className="text-blue-500">DELIVERABLES:</span> CLOUD NATIVE PLATFORM</div>
          <div className="flex items-center gap-2"><span className="text-blue-500">RESULTS:</span> 40% REDUCTION IN COST</div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] -z-10 rounded-full" />
        <div className="absolute -top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-600/10 blur-[100px] -z-10 rounded-full" />

        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            V2.0 is now live
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.05]"
          >
            Deploy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">faster</span> with <br />
            Modern Intelligence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            The world’s most powerful automation platform for high-growth teams. 
            Streamline your workflow in minutes, not months.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24"
          >
            <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2 shadow-xl shadow-white/5">
              Start Free Trial <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/5 text-white font-bold border border-white/10 rounded-xl hover:bg-white/10 transition-all">
              Watch Demo
            </button>
          </motion.div>

          {/* Abstract UI Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative p-2 rounded-3xl bg-white/5 border border-white/10 shadow-3xl shadow-blue-500/5 max-w-4xl mx-auto"
          >
            <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden aspect-video relative p-8">
              {/* Fake Dashboard Elements */}
              <div className="h-full flex flex-col gap-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-2">
                    <div className="w-12 h-3 bg-white/10 rounded-full" />
                    <div className="w-8 h-3 bg-white/5 rounded-full" />
                  </div>
                  <div className="w-24 h-8 bg-blue-600/20 border border-blue-500/30 rounded-lg" />
                </div>
                
                <div className="grid grid-cols-3 gap-6 flex-1">
                  <div className="col-span-2 bg-white/5 border border-white/10 rounded-xl p-6 relative">
                    <div className="flex flex-col gap-4">
                      {[...Array(5)].map((_, i) => (
                        <motion.div 
                          key={i}
                          animate={{ width: ['40%', '80%', '40%'] }}
                          transition={{ duration: 5, repeat: Infinity, delay: i * 0.5 }}
                          className="h-2 bg-blue-500/20 rounded-full" 
                        />
                      ))}
                    </div>
                    {/* Visual Chart Bars */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-end gap-2 h-20">
                      {[...Array(12)].map((_, i) => (
                        <motion.div 
                          key={i}
                          animate={{ height: [20, Math.random() * 60 + 20, 20] }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                          className="flex-1 bg-gradient-to-t from-blue-600 to-purple-600 rounded-t-sm" 
                        />
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl flex flex-col gap-4 p-6">
                    <div className="w-full aspect-square rounded-full border-4 border-white/5 border-t-blue-500 animate-spin-slow" />
                    <div className="mt-auto space-y-2">
                      <div className="w-full h-2 bg-white/10 rounded-full" />
                      <div className="w-[60%] h-2 bg-white/5 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none rounded-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: 'Enterprise Grade Security',
              desc: 'Advanced encryption and SOC2 compliance out of the box.'
            },
            {
              icon: BarChart3,
              title: 'Real-time Analytics',
              desc: 'Monitor every event as it happens with 5ms latency.'
            },
            {
              icon: Globe,
              title: 'Global Distribution',
              desc: 'Auto-scaling infrastructure deployed in 32 global regions.'
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/8 hover:scale-[1.02] transition-all group"
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-600 transition-colors">
                <feature.icon className="w-6 h-6 text-blue-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-12">Trusted by fast growing companies</h4>
            <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos */}
               <span className="text-2xl font-bold tracking-tighter">CLOUDCORE</span>
               <span className="text-2xl font-bold tracking-tighter">ZENITH</span>
               <span className="text-2xl font-bold tracking-tighter">OPTIMAL</span>
               <span className="text-2xl font-bold tracking-tighter">VECTOR</span>
               <span className="text-2xl font-bold tracking-tighter">PULSE</span>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-blue-500 fill-blue-500" />
            <span className="text-xl font-bold tracking-tight">NexFlow</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Github</a>
          </div>
          <div className="text-gray-500 text-sm">
            © 2026 NexFlow Inc. Built for Eagle$Win Portfolio.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SaaSPro;
