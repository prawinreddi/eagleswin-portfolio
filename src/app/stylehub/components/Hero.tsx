"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop"
          alt="StyleHub Premium Collection"
          className="object-cover object-[70%_30%] md:object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl text-white"
        >
          <span className="block text-sm uppercase tracking-[0.3em] mb-4">New Arrivals</span>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-none mb-6">
            Elegance in <br /> Simplicity.
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 text-stone-200">
            Discover our latest collection of premium minimalist essentials, crafted with unparalleled attention to detail.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/stylehub/shop" 
              className="bg-white text-black px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-stone-200 transition-colors"
            >
              Shop Collection
            </Link>
            <Link 
              href="/stylehub/about" 
              className="bg-transparent border border-white text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
