'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-[100] px-8 py-8 md:px-12 md:py-10 flex justify-between items-center mix-blend-difference pointer-events-none"
    >
      <Link href="/" className="pointer-events-auto">
        <div className="relative group">
          {/* Logo Container with subtle glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00e5ff]/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative h-20 w-20 sm:h-28 sm:w-28 overflow-hidden rounded-2xl border border-white/10 glass-panel shadow-2xl">
            <Image 
              src="/logo.png"
              alt="Eagle$Win Logo"
              fill
              className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          {/* Brand Name Text - Optional if needed next to logo */}
        </div>
      </Link>
      
      <div className="pointer-events-auto">
        {/* You can add current time or status here for extra premium feel */}
        <div className="flex items-center gap-3 glass-panel px-4 py-2 rounded-full border border-white/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e5ff]"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">Top Talent</span>
        </div>
      </div>
    </motion.header>
  );
}
