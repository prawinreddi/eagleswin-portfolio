'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Globe, Link as LinkIcon, MessageCircle, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const PersonalBrand = () => {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1A1A1A] font-serif selection:bg-black selection:text-white">
      {/* Project Metadata Bar */}
      <div className="pt-24 bg-[#FDFCF8] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-6 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
          <div className="flex items-center gap-2"><span className="text-black">CLIENT:</span> ARTHUR STERLING</div>
          <div className="flex items-center gap-2"><span className="text-black">INDUSTRY:</span> CREATIVE DIRECTION</div>
          <div className="flex items-center gap-2"><span className="text-black">DELIVERABLES:</span> BRAND IDENTITY</div>
          <div className="flex items-center gap-2"><span className="text-black">RESULTS:</span> LVMH SHORTLISTED</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[101] mix-blend-difference invert uppercase">
        <div className="max-w-7xl mx-auto px-10 py-8 flex justify-between items-center text-white">
          <div className="text-xl font-bold tracking-tighter italic">Arthur Sterling</div>
          <div className="hidden md:flex gap-12 text-xs font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:line-through transition-all">Projects</a>
            <a href="#" className="hover:line-through transition-all">About</a>
            <a href="#" className="hover:line-through transition-all">Studio</a>
          </div>
          <div className="flex gap-6 items-center">
            <Link href="/" className="px-4 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-gray-200 transition-all">
              Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-10 lg:px-24 py-32 overflow-hidden">
        {/* Background Text Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-gray-100/50 -z-10 select-none whitespace-nowrap leading-none italic">
          VISIONARY DIRECTOR
        </div>

        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400 mb-8 block">
              Based in London / Global Reach
            </span>
            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter leading-[0.85] mb-12">
                Crafting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">Masterpieces</span> <br />
                for the Bold.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row gap-12 items-start"
          >
            <div className="w-full md:w-1/2">
                <button className="group relative px-12 py-6 bg-black text-white font-bold uppercase tracking-widest text-[11px] hover:pr-16 transition-all overflow-hidden mb-8">
                    <span className="relative z-10">Start Your Journey</span>
                    <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
                </button>
                <p className="text-gray-500 max-w-xs text-sm italic leading-relaxed">
                  Award-winning creative executive specializing in high-end brand identity and cinematic experiences.
                </p>
            </div>
            <div className="w-full md:w-1/2 relative aspect-square bg-gray-100 overflow-hidden">
                <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
                    alt="Arthur Sterling" 
                    fill 
                    className="object-cover grayscale"
                    unoptimized
                />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-40 px-10 lg:px-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-gray-500 mb-10">Areas of Expertise</h2>
            <div className="space-y-6">
                {[
                  'Creative Strategy',
                  'Brand Architecture',
                  'Visual Storytelling',
                  'Motion Experience'
                ].map((skill, i) => (
                  <div key={i} className="text-2xl font-black italic group flex items-center gap-4 cursor-pointer">
                    <span className="text-gray-700 transition-colors group-hover:text-white">0{i+1}</span>
                    <span className="border-b-2 border-transparent group-hover:border-white transition-all">{skill}</span>
                  </div>
                ))}
            </div>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Project placeholders with minimalist aesthetic */}
            {[
              { title: 'Zenith Labs', desc: 'Luxury Skincare Identity', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1000' },
              { title: 'Nocturne', desc: 'Cinema Advertising', img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1000' },
              { title: 'Alpha X', desc: 'Automotive Digital', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000' },
              { title: 'Prime One', desc: 'Financial Tech Branding', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000' }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative cursor-pointer"
              >
                <div className="aspect-[3/4] bg-[#2A2A2A] rounded-sm mb-6 overflow-hidden">
                   <Image 
                     src={p.img} 
                     alt={p.title} 
                     fill 
                     className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                     unoptimized
                   />
                   <div className="absolute inset-0 flex items-center justify-center p-12">
                      <div className="text-4xl font-black italic text-white/10 uppercase select-none rotate-12 group-hover:rotate-0 transition-transform duration-700">
                        {p.title}
                      </div>
                   </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-lg font-bold mb-1 italic">{p.title}</h3>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">{p.desc}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-10 lg:px-24 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-xl font-black italic tracking-tighter">A.S</div>
        <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest">
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">Twitter</a>
        </div>
        <div className="flex items-center gap-4 group cursor-pointer">
          <Mail className="w-4 h-4" />
          <span className="text-[10px] font-black uppercase tracking-widest border-b border-black">hello@arthursterling.com</span>
        </div>
         <div className="text-gray-400 text-[10px] uppercase font-bold italic tracking-widest">
            © 2026 Build for Eagle$Win.
          </div>
      </footer>
    </div>
  );
};

export default PersonalBrand;
