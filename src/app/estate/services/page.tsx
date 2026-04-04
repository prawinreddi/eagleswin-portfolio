"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, Clock, Home, TrendingUp, Users, ArrowRight, MessageCircle, Heart, BarChart, CreditCard, Layers, Maximize, MapPin, BookOpen, Shield, Search } from 'lucide-react';
import { properties, formatCurrency } from '../data';
import Link from 'next/link';

export default function EstateServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HERO SERVICES */}
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 border border-amber-500/20 backdrop-blur-md">
            <Layers className="w-4 h-4" /> End-to-End Real Estate Solutions
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
            Buy, <span className="text-amber-500">Sell</span> or Rent. <br /> Effortlessly.
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
            Whether you are a first-time buyer or a seasoned investor, our suite of specialized services ensures a seamless experience with zero friction.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
          {[
            { id: 1, title: 'Expert Buying Strategy', desc: 'Personalized property search based on your budget, lifestyle, and growth potential.', icon: Search, color: 'text-blue-500' },
            { id: 2, title: 'Premium Selling Portal', desc: 'List your property on EstateSync and reach 10,000+ active buyers in Hyderabad IT hub.', icon: TrendingUp, color: 'text-amber-500' },
            { id: 3, title: 'Rental Management', desc: 'We take care of tenant verification, documentation, and rent collection for your peace of mind.', icon: ShieldCheck, color: 'text-green-500' },
          ].map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[3rem] p-12 shadow-2xl shadow-slate-200/50 border border-slate-50 group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[4rem] group-hover:scale-110 transition-transform duration-500 -z-0" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <service.icon className={`w-8 h-8 ${service.color} group-hover:text-white`} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight leading-tight">{service.title}</h3>
                <p className="text-slate-500 font-medium text-base mb-10 leading-relaxed">{service.desc}</p>
                <button className="text-[10px] font-black uppercase tracking-widest text-slate-900 hover:text-amber-500 flex items-center gap-2 group/btn">
                  Learn Process <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PROCESS TIMELINE */}
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 rounded-l-full blur-3xl -z-0" />
          <div className="relative z-10 text-center mb-20 space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500">The EstateSync Advantage</p>
            <h2 className="text-3xl md:text-6xl font-black text-white leading-tight uppercase tracking-widest">How It <span className="text-amber-500 font-black">Works.</span></h2>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
            {[
              { step: '01', title: 'Consultation', desc: 'Expert strategy session to define goals.' },
              { step: '02', title: 'Shortlisting', desc: 'Handpicked properties with HD tours.' },
              { step: '03', title: 'Verification', desc: 'Deep dive legal and RERA checks.' },
              { step: '04', title: 'Closure', desc: 'Smooth handover with direct paperwork.' }
            ].map((p, i) => (
              <div key={p.step} className="text-center md:text-left space-y-6 group/step transition-all hover:translate-x-1">
                <span className="text-7xl font-black text-white/5 block group-hover/step:text-amber-500/10 transition-colors leading-none">{p.step}</span>
                <h4 className="text-xl font-black text-white uppercase tracking-widest">{p.title}</h4>
                <p className="text-slate-400 font-medium text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY ESTATE SYNC CALLOUT */}
        <div className="mt-32 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">Expert <span className="text-amber-500">Analysis</span> <br />For Every Step.</h3>
            <div className="space-y-8">
              {[
                { title: 'Tax Consultancy', desc: 'Capital gains tax management and saving advice.' },
                { title: 'Interior Design Partner', desc: 'Pre-vetted luxury interior firms for your new home.' },
                { title: 'NRI Property Mgmt', desc: 'Secure asset management for clients outside India.' },
              ].map(item => (
                 <div key={item.title} className="flex gap-6 group hover:translate-x-2 transition-transform">
                   <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 shadow-xl shadow-amber-100 flex-shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-all">
                     <Shield className="w-6 h-6" />
                   </div>
                   <div>
                     <h5 className="text-lg font-black text-slate-900 mb-1">{item.title}</h5>
                     <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                   </div>
                 </div>
              ))}
            </div>
            <Link href="/estate/contact" className="inline-flex items-center gap-3 bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-900 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95 group">
              Speak To Specialist <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="relative rounded-[4rem] overflow-hidden shadow-2xl shadow-slate-200 border-8 border-white group">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-12">
               <div className="bg-amber-500 w-fit px-4 py-2 rounded-full text-slate-900 text-xs font-black uppercase tracking-widest mb-4">Investment Spotlight</div>
               <h4 className="text-3xl font-black text-white leading-tight">Tellapur Rise Project</h4>
               <p className="text-slate-300 font-medium text-base mt-2">The highest ROI potential in West Hyderabad for the 2024-25 cycle.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
