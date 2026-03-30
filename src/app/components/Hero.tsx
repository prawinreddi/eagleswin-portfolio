'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Generate deterministic positions based on index
  const generateParticles = () => {
    return [...Array(50)].map((_, i) => {
      const index = i + 1;
      // Use deterministic calculations based on index
      const left = ((index * 137.5) % 100); // Golden angle approximation
      const top = ((index * 89) % 100); // Prime number for distribution
      const duration = (index % 3) + 2; // Duration between 2-4 seconds
      const delay = (index * 0.1) % 2; // Delay between 0-2 seconds
      
      return {
        id: i,
        left: `${left}%`,
        top: `${top}%`,
        duration,
        delay,
      };
    });
  };

  const particles = generateParticles();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        {isClient && (
          <div className="absolute inset-0">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{
                  left: particle.left,
                  top: particle.top,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Eagle$Win</span>
            <br />
            <span className="text-gray-100">Web Designer & Developer</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-blue-400 mb-8 font-bold"
          >
            I Build High-Performance Websites That Drive Revenue
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Specializing in Business Websites, E-Commerce, Landing Pages, Portfolios, Dashboard UI & Booking Websites
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer shadow-lg shadow-blue-500/20"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 border-2 border-blue-500/30 text-white font-bold rounded-lg hover:bg-blue-500 hover:text-white transition-all flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer"
            >
              Explore My Work
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Social Proof Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap justify-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 border-t border-white/5 pt-12"
          >
            <div className="flex items-center gap-2">
               <span className="text-blue-500">✓</span> 15+ Projects Delivered
            </div>
            <div className="flex items-center gap-2">
               <span className="text-blue-500">✓</span> 100% Satisfaction Rate
            </div>
            <div className="flex items-center gap-2">
               <span className="text-blue-500">✓</span> 5-Star Service
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
