"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, MapPin, ShieldCheck, ArrowRight, Clock, Star, Users, Home, Search, Filter, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function EstateBlogPage() {
  const blogs = [
    { id: 1, title: 'Top 5 Areas in Hyderabad for 2024 Investment', excerpt: 'Discover why Kokapet and Tellapur are the hotspots for luxury real estate this year.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop', category: 'Market Analysis', date: 'Oct 12, 2024' },
    { id: 2, title: 'The Rise of Smart Villas in Financial District', excerpt: 'How automation is changing the luxury villa market in IT corridor.', image: 'https://images.unsplash.com/photo-1613977257363-707ba334c389?w=800&auto=format&fit=crop', category: 'Technology', date: 'Oct 10, 2024' },
    { id: 3, title: 'Understanding RERA: A Guide for Home Buyers', excerpt: 'Protect your investment by knowing your rights as a buyer in Hyderabad.', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop', category: 'Buyer Guide', date: 'Oct 05, 2024' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 border border-amber-500/20 backdrop-blur-md">
              <BookOpen className="w-4 h-4" /> Real Estate Intelligence
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight mb-6 tracking-tight leading-tight">Insight <span className="text-amber-500">Hub.</span></h1>
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-lg mb-0 text-lg leading-relaxed">Stay ahead with Hyderabad's most detailed property market reports, area guides, and investment strategies.</p>
          </div>
          <button className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all shadow-xl shadow-slate-200">
            Subscribe To Reports <TrendingUp className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {blogs.map((blog, i) => (
            <motion.div 
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-50 group border-b-8 border-b-slate-100 hover:border-b-amber-500 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden group">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <div className="bg-amber-500 text-slate-900 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">{blog.category}</div>
                </div>
              </div>

              <div className="p-10 space-y-6">
                <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-400">
                  <Clock className="w-4 h-4 text-amber-500" /> {blog.date}
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-amber-600 transition-colors">{blog.title}</h3>
                <p className="text-slate-500 font-medium text-base mb-10 leading-relaxed line-clamp-3">{blog.excerpt}</p>
                
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <button className="text-[10px] font-black uppercase tracking-widest text-slate-900 hover:text-amber-500 transition-all flex items-center gap-2 group/btn">
                    Read Report <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                  <div className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-widest">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> 12k Reads
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AREA GUIDES HIGHLIGHT */}
        <div className="mt-32 p-12 md:p-24 bg-slate-900 rounded-[4rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 rounded-l-full blur-3xl -z-0 group-hover:scale-110 transition-transform duration-500" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">Master Hyderabad <br /><span className="text-amber-500">Area Guides.</span></h3>
              <p className="text-slate-400 font-medium text-lg leading-relaxed">Get the most accurate information on schools, commute, malls and hospital distance for any location.</p>
              <div className="flex flex-wrap gap-4">
                {['Financial District', 'Tellapur', 'Kokapet', 'Banjara Hills', 'Miyapur'].map(area => (
                  <button key={area} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-300 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 transition-all active:scale-95">{area}</button>
                ))}
              </div>
            </div>
            <div className="bg-amber-500 p-12 rounded-[3.5rem] shadow-2xl relative group/card overflow-hidden">
               <div className="flex items-center gap-6 mb-8 text-slate-900">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-amber-500 shadow-2xl flex-shrink-0 group-hover/card:rotate-6 transition-transform">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h4 className="text-4xl font-black tracking-tighter leading-none">Interactive Heat Map</h4>
               </div>
               <p className="text-slate-900 font-bold mb-10 leading-relaxed text-sm uppercase tracking-widest">Track where Hyderabad is investing right now. Real-time data from 10k monthly searches.</p>
               <button className="w-full py-5 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest rounded-3xl hover:bg-slate-800 transition-all shadow-2xl active:scale-95 group">View Heat Map <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
