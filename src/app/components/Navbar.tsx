'use client';

import { motion } from 'framer-motion';
import { Home, Briefcase, Layers, MessageSquare, Phone } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { name: 'Home', sectionId: 'hero', icon: <Home className="w-5 h-5" /> },
    { name: 'Services', sectionId: 'services', icon: <Layers className="w-5 h-5" /> },
    { name: 'Projects', sectionId: 'projects', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Contact', sectionId: 'contact', icon: <Phone className="w-5 h-5" /> },
  ];

  const scrollToSection = (id: string) => {
    // If we're not on the homepage, this would need to link back. For now it assumes homepage usage.
    const element = document.getElementById(id);
    if (element) {
      // Adding offset for smooth scrolling
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      // If element not found (e.g. on project page), route to home
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
            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#050505] border border-white/10 text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {item.name}
            </span>
          </button>
        ))}
        <div className="w-[1px] h-8 bg-white/20 mx-2" />
        <button
          onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')} // User can update phone number
          className="flex items-center justify-center p-3 rounded-full bg-[#00e5ff]/10 text-[#00e5ff] hover:bg-[#00e5ff]/20 transition-colors relative group"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#00e5ff] text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            WhatsApp
          </span>
        </button>
      </div>
    </motion.div>
  );
}
