"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Calendar, User, Phone, Menu, X, Activity } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-teal-50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/med" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-teal-200">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-black text-slate-800 tracking-tight">MedSync</span>
              <p className="text-[10px] text-teal-600 font-bold uppercase tracking-wider -mt-1">Healthcare Solutions</p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 translate-x-12">
            {[
              { label: 'Find Doctors', href: '/med' },
              { label: 'Consultation', href: '#' },
              { label: 'Services', href: '#' },
              { label: 'Contact', href: '#' },
            ].map(link => (
              <Link key={link.label} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <Link href="/med/admin" className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-teal-600 transition-colors uppercase tracking-widest px-3 border-r border-slate-100">
              Admin Panel
            </Link>
            <div className="hidden md:flex flex-col items-end">
              <p className="text-xs text-slate-400 font-medium">Emergency Line</p>
              <p className="text-sm font-black text-slate-800">+91 00000 11111</p>
            </div>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold p-3 rounded-xl shadow-lg shadow-teal-100 transition-all active:scale-95 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="hidden sm:inline">Book Now</span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-slate-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <motion.div animate={{ height: isOpen ? 'auto' : 0 }} className="lg:hidden overflow-hidden bg-white border-b border-teal-50">
        <div className="flex flex-col gap-4 p-6 translate-y-[-1px]">
          {['Find Doctors', 'Consultation', 'Services', 'Contact', 'My Appointments'].map(link => (
            <Link key={link} href="#" onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-700 hover:text-teal-600">
              {link}
            </Link>
          ))}
          <Link href="/med/admin" onClick={() => setIsOpen(false)} className="text-teal-600 font-bold mt-4 pt-4 border-t border-slate-50 uppercase tracking-widest text-xs">
            Admin Panel Login
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
