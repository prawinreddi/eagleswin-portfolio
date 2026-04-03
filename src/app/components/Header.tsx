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
      className="fixed top-0 left-0 w-full z-[100] px-10 py-10 md:px-16 md:py-14 flex justify-between items-center mix-blend-difference pointer-events-none"
    >
      <Link href="/" className="pointer-events-auto">
        <div className="relative group">
          {/* Logo Container with enhanced glow */}
          <div className="absolute -inset-6 bg-gradient-to-r from-[#00e5ff]/30 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative h-24 w-24 sm:h-36 sm:w-36 overflow-hidden rounded-3xl border border-white/10 glass-panel shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <Image 
              src="/logo.png"
              alt="Eagle$Win Logo"
              fill
              className="object-contain p-2 group-hover:scale-105 transition-transform duration-700"
              priority
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
