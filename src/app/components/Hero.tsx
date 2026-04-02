'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const MagneticButton = ({ children, className, onClick }: any) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.3);
    y.set(middleY * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setIsClient(true);
    
    // Ambient cursor tracking for background glow
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const glowX = useSpring(useTransform(mouseX, [0, 1], [-20, 120]), { stiffness: 50, damping: 20 });
  const glowY = useSpring(useTransform(mouseY, [0, 1], [-20, 120]), { stiffness: 50, damping: 20 });

  // Staggered text reveal variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVars = {
    hidden: { y: 100, opacity: 0, rotateX: -40 },
    show: { 
      y: 0, 
      opacity: 1, 
      rotateX: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20, mass: 1 } 
    },
  };

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Cinematic Lighting */}
      {isClient && (
        <>
          <motion.div
            className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 pointer-events-none mix-blend-screen bg-[#00e5ff]"
            style={{
              left: useTransform(glowX, v => `${v}%`),
              top: useTransform(glowY, v => `${v}%`),
              transform: "translate(-50%, -50%)",
            }}
          />
          {/* Subtle slow pulsing background orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-white/[0.03] to-transparent rounded-full blur-[100px] animate-pulse-glow" />
        </>
      )}

      {/* Grid Overlay Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" style={{ maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 xl:px-12 flex flex-col items-center text-center">
        
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]"></span>
          </span>
          <span className="text-sm font-semibold tracking-wider text-gray-300 uppercase">Available for New Projects</span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="mb-8"
        >
          <h1 className="text-[12vw] sm:text-6xl md:text-8xl lg:text-[100px] font-black leading-[0.9] tracking-tighter" style={{ perspective: '1000px' }}>
            <motion.div variants={itemVars} className="overflow-hidden pb-2">
              <span className="block text-white">Elevating Brands</span>
            </motion.div>
            <motion.div variants={itemVars} className="overflow-hidden pb-4 flex justify-center items-center gap-4 flex-wrap">
              <span className="block italic text-gray-500 font-light text-[8vw] sm:text-5xl md:text-7xl lg:text-[80px]">with</span>
              <span className="block text-gradient-cyan">Digital Excellence.</span>
            </motion.div>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto font-medium mb-12"
        >
          I am Srikanth, an award-winning independent developer crafting premium Web Experiences that drive revenue & conversion.
        </motion.p>

        {/* CTAs */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 1 }}
           className="flex flex-col sm:flex-row items-center gap-6"
        >
          <MagneticButton 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-white text-black font-bold rounded-full text-lg flex items-center gap-2 hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            Start a Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>

          <MagneticButton 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 glass-panel text-white font-bold rounded-full text-lg flex items-center gap-2 hover:bg-white/10 transition-colors"
          >
            Explore Work
          </MagneticButton>
        </motion.div>

      </div>

      {/* Social Proof Numbers - Absolute Floating */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hidden lg:flex absolute bottom-12 left-12 flex-col gap-1"
      >
        <span className="text-4xl font-bold text-white">15<span className="text-[#00e5ff]">+</span></span>
        <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Global Clients</span>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="hidden lg:flex absolute bottom-12 right-12 flex-col gap-1 text-right"
      >
        <span className="text-4xl font-bold text-white">100<span className="text-[#00e5ff]">%</span></span>
        <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Success Rate</span>
      </motion.div>

    </section>
  );
}
