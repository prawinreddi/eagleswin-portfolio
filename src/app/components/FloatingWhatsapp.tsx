'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsapp = () => {
  return (
    <motion.a
      href="https://wa.me/917075457159"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/40 cursor-pointer group"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:hidden" />
      <MessageCircle className="w-8 h-8 fill-white" />
      
      {/* Tooltip */}
      <div className="absolute right-20 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-xl">
        Chat with me! 🚀
      </div>
    </motion.a>
  );
};

export default FloatingWhatsapp;
