"use client";
import Link from 'next/link';
import { Home, Search, MapPin, Phone, MessageCircle, Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EstateNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Properties', href: '/estate/listings' },
    { name: 'Buy / Sell', href: '/estate/services' },
    { name: 'EMI', href: '/estate/emi' },
    { name: 'About Agent', href: '/estate/about' },
    { name: 'Contact', href: '/estate/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-slate-900/95 backdrop-blur-md shadow-xl' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <Link href="/estate" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-amber-500/30 group-hover:rotate-6 transition-transform duration-500">
            <Home className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <span className="text-2xl font-black text-white tracking-tighter block leading-none">EstateSync</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500">Premium Realty</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-black uppercase tracking-widest text-slate-300 hover:text-amber-500 transition-colors">
              {link.name}
            </Link>
          ))}
          <Link href="/estate/admin" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors border-l border-slate-700 pl-10">
            Agent Admin
          </Link>
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="https://wa.me/919876543210" className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:shadow-2xl hover:shadow-amber-500/40 active:scale-95 group">
            <MessageCircle className="w-4 h-4" /> WhatsApp Agent <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white border border-white/10 active:scale-90 transition-all">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-slate-900 border-t border-slate-800 overflow-hidden">
            <div className="px-6 py-10 space-y-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-2xl font-black text-white hover:text-amber-500 transition-colors">
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-slate-800">
                <a href="https://wa.me/919876543210" className="flex items-center justify-center gap-3 bg-amber-500 text-slate-900 px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest">
                  <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
