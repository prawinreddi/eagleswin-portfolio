'use client';

import { motion } from 'framer-motion';
import { Home, Briefcase, Layers, Phone } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { name: 'Home', sectionId: 'hero', icon: <Home className="w-5 h-5" /> },
    { name: 'Services', sectionId: 'services', icon: <Layers className="w-5 h-5" /> },
    { name: 'Contact', sectionId: 'contact', icon: <Phone className="w-5 h-5" /> },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[50]"
    >
      <div className="flex items-center gap-2 p-2 glass-panel rounded-full">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.sectionId)}
            className="flex items-center justify-center p-3 rounded-full hover:bg-white/10 transition-colors text-gray-300 hover:text-white group relative"
            aria-label={item.name}
          >
            {item.icon}
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#050505] border border-white/10 text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
