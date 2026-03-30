'use client';

import { ChevronRight, BarChart3, Shield, Zap, Globe, Code, MessageCircle, Link as LinkIcon, CheckCircle2, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const SaaSPro = () => {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleAction = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

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
            <Link href="/" className="px-5 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-full border border-white/10 transition-all cursor-pointer">
              Back to Portfolio
            </Link>
            <button 
              onClick={() => setShowModal(true)}
              className="hidden sm:block px-5 py-2 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all cursor-pointer shadow-lg shadow-blue-600/20"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Project Metadata Bar */}
      <div className="pt-24 bg-[#0A0A0A] border-b border-white/10 relative z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-6 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
          <div className="flex items-center gap-2 transition-colors hover:text-blue-400 cursor-default">
            <span className="text-blue-500">CLIENT:</span> FAST-GROWTH B2B
          </div>
          <div className="flex items-center gap-2 transition-colors hover:text-blue-400 cursor-default">
            <span className="text-blue-500">INDUSTRY:</span> ENTERPRISE AUTOMATION
          </div>
          <div className="flex items-center gap-2 transition-colors hover:text-blue-400 cursor-default">
            <span className="text-blue-500">DELIVERABLES:</span> CLOUD NATIVE PLATFORM
          </div>
          <div className="flex items-center gap-2 transition-colors hover:text-blue-400 cursor-default font-black">
            <span className="text-blue-500">RESULTS:</span> 40% REDUCTION IN COST
          </div>
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
            <button 
              onClick={() => setShowModal(true)}
              className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2 shadow-xl shadow-white/5 cursor-pointer"
            >
              Start Free Trial <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={handleAction}
              className="px-8 py-4 bg-white/5 text-white font-bold border border-white/10 rounded-xl hover:bg-white/10 transition-all cursor-pointer"
            >
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


      {/* Interactivity Overlay (Modal) */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 bg-[#050505]/90 backdrop-blur-md z-[200]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#0A0A0A] border border-white/10 p-10 rounded-3xl z-[201] shadow-3xl shadow-blue-600/10"
            >
               <X className="absolute top-6 right-6 w-5 h-5 text-gray-500 cursor-pointer hover:text-white" onClick={() => setShowModal(false)} />
               <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-8">
                 <Zap className="w-6 h-6 text-white fill-white" />
               </div>
               <h3 className="text-2xl font-bold mb-4 tracking-tight">Ready to NexFlow?</h3>
               <p className="text-gray-400 mb-10 leading-relaxed">Experience the world's most powerful automation platform. No credit card required, instant setup.</p>
               
               <div className="space-y-4 mb-10">
                 <div className="flex gap-3 items-center text-sm text-gray-300">
                   <CheckCircle2 className="w-5 h-5 text-blue-500" /> 14-Day Free Trial
                 </div>
                 <div className="flex gap-3 items-center text-sm text-gray-300">
                   <CheckCircle2 className="w-5 h-5 text-blue-500" /> Full API Access
                 </div>
                 <div className="flex gap-3 items-center text-sm text-gray-300">
                   <CheckCircle2 className="w-5 h-5 text-blue-500" /> 24/7 Priority Support
                 </div>
               </div>

               <button 
                 onClick={() => { setShowModal(false); handleAction(); }}
                 className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
               >
                 Create Free Account
               </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-4 rounded-2xl shadow-2xl z-[300] flex items-center gap-4 border border-white/20"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <div className="text-sm font-bold uppercase tracking-widest">Demo Activated: Simulation Started</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SaaSPro;
