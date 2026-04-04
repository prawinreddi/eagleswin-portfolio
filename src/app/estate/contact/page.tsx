"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin, Globe, ShieldCheck, Heart, User, ArrowRight, TrendingUp } from 'lucide-react';

export default function EstateContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          
          {/* LEFT: INFO & CONTACT CARDS */}
          <div className="lg:w-1/3 space-y-10 flex flex-col h-full">
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden group flex-shrink-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-[4rem] -z-10 group-hover:scale-110 transition-transform duration-500" />
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">Let's Connect.</h1>
              <p className="text-slate-400 font-medium text-base mb-10 leading-relaxed">Your real estate journey starts with a simple conversation. We are here to guide you to your next major investment.</p>
              
              <div className="space-y-8">
                {[
                  { icon: Phone, title: 'Direct Call', val: '+91 98765 43210' },
                  { icon: MessageCircle, title: 'WhatsApp Business', val: 'Chat with agent' },
                  { icon: Mail, title: 'Email Enquiry', val: 'kiran@estatesync.com' },
                ].map(item => (
                  <div key={item.title} className="flex gap-5 group/item transition-transform duration-300 hover:translate-x-3 cursor-pointer">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-amber-500 group-hover/item:bg-amber-500 group-hover/item:text-slate-900 transition-colors shadow-2xl">
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-0.5">{item.title}</p>
                      <p className="text-base font-black text-white tracking-tight">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-slate-200/50 border border-slate-50 flex-1 relative overflow-hidden group">
              <h3 className="text-xl font-black text-slate-900 mb-8 tracking-tight uppercase text-xs tracking-widest">Office Address</h3>
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-amber-100/50 border border-amber-50 rounded-2xl flex items-center justify-center text-amber-600 flex-shrink-0 shadow-lg">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                </div>
                <p className="text-slate-500 text-lg font-medium leading-[1.8] flex-1">
                  12th Floor, Cyber Towers,<br />
                  Hitech City Main Road, Hyderabad,<br />
                  Telangana, 500081
                </p>
              </div>
              <div className="mt-12 h-44 rounded-[2rem] overflow-hidden shadow-inner bg-slate-200 grayscale hover:grayscale-0 transition-all duration-700 relative group/map">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&auto=format&fit=crop" className="w-full h-full object-cover group-hover/map:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-x-0 bottom-4 px-4">
                  <button className="w-full py-3 bg-white text-slate-900 font-black text-[10px] uppercase tracking-widest rounded-xl shadow-2xl hover:bg-amber-500 hover:text-white transition-all">Get G-Map Directions</button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: ENQUIRY FORM */}
          <div className="flex-1 bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl shadow-slate-200/50 border border-slate-50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700 opacity-50" />
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">Start Your <span className="text-amber-500">Wealth Journey.</span></h2>
              <p className="text-slate-500 font-medium text-lg max-w-lg mb-0 text-lg leading-relaxed">Fill the form below and Kiran will personally get in touch within 30 minutes with a customized portfolio strategy.</p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                <input placeholder="Ex: Rahul Kumar" className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-bold text-slate-800" />
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-400">Contact Number</label>
                <input placeholder="+91 99887 76655" className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-bold text-slate-800" />
              </div>
              <div className="space-y-4 md:col-span-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-400">What are you looking for?</label>
                <div className="flex flex-wrap gap-3">
                  {['Flat / Apt', 'Luxury Villa', 'Invest in Plots', 'Commercial Space', 'Leasing'].map(tag => (
                    <button key={tag} type="button" className="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 transition-all active:scale-95">{tag}</button>
                  ))}
                </div>
              </div>
              <div className="space-y-4 md:col-span-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-400">Write your specific enquiry</label>
                <textarea placeholder="Example: Interested in a 3BHK villa in Kokapet with a budget of 2.5 CR..." className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-6 h-40 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-bold text-slate-800" />
              </div>
              
              <div className="md:col-span-2 pt-8 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex items-center gap-4 group/lock transition-all hover:translate-x-2">
                  <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 shadow-xl shadow-green-100 flex-shrink-0 group-hover/lock:bg-green-600 group-hover/lock:text-white transition-all">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 max-w-[140px] leading-relaxed">Your data is safe and encrypted for professional use only.</p>
                </div>
                <button type="submit" className="w-full md:w-fit bg-slate-900 hover:bg-amber-500 text-white hover:text-black font-black px-12 py-6 rounded-3xl transition-all shadow-xl shadow-slate-200 uppercase tracking-widest text-xs flex items-center justify-center gap-4 active:scale-95 group">
                  Submit Enquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
