'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Market Analysis',
    description: 'Analyzing your industry, competitors, and target audience to find the best growth opportunities.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Revenue Roadmap',
    description: 'Crafting a strategic design and development plan focused on maximizing your conversion rates.',
  },
  {
    icon: Code,
    number: '03',
    title: 'Growth-Driven Build',
    description: 'Developing a high-performance system with cutting-edge tech that scales with your business.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch & Optimization',
    description: 'Deploying with full speed optimization, SEO, and ongoing support for continuous results.',
  },
];

const Process = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[700px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#00e5ff]" />
            <span className="text-[#00e5ff] uppercase tracking-[0.3em] text-xs font-bold">How I Work</span>
            <div className="h-[1px] w-12 bg-[#00e5ff]" />
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter">
            <span className="text-white">My </span>
            <span className="text-gradient-cyan italic">Process.</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl">
            A structured approach to deliver exceptional results
          </p>
        </motion.div>

        {/* Desktop horizontal layout */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.12, type: 'spring', stiffness: 60 }}
              whileHover={{ y: -8 }}
              className="group glass-panel rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#00e5ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 rounded-2xl border border-[#00e5ff]/0 group-hover:border-[#00e5ff]/20 transition-all duration-500 pointer-events-none" />

              {/* Step number */}
              <div className="text-[#00e5ff]/20 font-black text-6xl leading-none mb-6 select-none">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all">
                <step.icon className="w-5 h-5 text-[#00e5ff]" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connector arrow (except last) */}
              {index < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-[1px] bg-[#00e5ff]/30 z-10 hidden lg:block" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical layout */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-6 flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center">
                <step.icon className="w-5 h-5 text-[#00e5ff]" />
              </div>
              <div>
                <div className="text-[#00e5ff] font-black text-sm mb-1">{step.number}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
