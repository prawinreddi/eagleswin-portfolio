'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, Code, Rocket } from 'lucide-react';

const Process = () => {
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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">My Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A structured approach to deliver exceptional results
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 transform -translate-y-1/2" />
            
            <div className="relative flex justify-between items-center">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex flex-col items-center w-1/4"
                >
                  {/* Circle Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 w-20 h-20 bg-gray-950 border-4 border-blue-500 rounded-full flex items-center justify-center mb-6"
                  >
                    <step.icon className="w-8 h-8 text-blue-400" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="text-center bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                    <div className="text-blue-400 font-bold text-lg mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex items-start gap-6"
            >
              {/* Circle Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 w-16 h-16 bg-gray-950 border-4 border-blue-500 rounded-full flex items-center justify-center"
              >
                <step.icon className="w-6 h-6 text-blue-400" />
              </motion.div>
              
              {/* Content */}
              <div className="flex-grow bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-blue-400 font-bold text-lg">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
