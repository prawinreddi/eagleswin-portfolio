"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Home, Star, ArrowRight, ShieldCheck, TrendingUp, Users, Clock, Filter, MessageCircle, ChevronRight } from 'lucide-react';
import { properties, formatCurrency } from './data';
import Link from 'next/link';

export default function EstateHome() {
  const [searchTerm, setSearchTerm] = useState('');
  const featured = properties.filter(p => p.isFeatured);

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
        {/* Background Image with Layering */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&auto=format&fit=crop" 
            alt="Estate Hero" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col lg:flex-row items-center gap-20">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 border border-amber-500/20 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4" /> Trusted Hyderabad Real Estate
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
              Your <span className="text-amber-500">Dream</span> Home. <br /> Our Commitment.
            </h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Find luxury apartments, villas, and premium plots in Hyderabad’s prime locations. Direct deals, zero hidden costs, 100% verified properties.
            </p>

            {/* SEARCH BOX */}
            <div className="bg-white/5 backdrop-blur-2xl p-4 md:p-6 rounded-[2.5rem] border border-white/10 shadow-2xl max-w-2xl mx-auto lg:mx-0 group">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-amber-500 w-5 h-5 pointer-events-none" />
                  <input 
                    type="text" 
                    placeholder="Search by area, location or BHK..." 
                    className="w-full pl-14 pr-6 py-5 bg-white/10 border border-white/10 rounded-2xl focus:outline-none focus:border-amber-500 text-white font-bold transition-all placeholder:text-slate-500"
                  />
                </div>
                <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-black px-10 py-5 rounded-2xl transition-all shadow-xl shadow-amber-500/30 flex items-center justify-center gap-3 uppercase tracking-widest text-xs active:scale-95 group">
                  Find Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap gap-12 items-center justify-center lg:justify-start">
              {[
                { label: 'Deals Closed', val: '450+' },
                { label: 'Happy Clients', val: '1.2k' },
                { label: 'Years Exp', val: '12+' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="text-4xl font-black text-white mb-1 tracking-tighter">{stat.val}</p>
                  <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Luxury Collections</h2>
            <p className="text-slate-500 font-medium max-w-lg mb-0 text-lg">Hand-picked premium listings that redefine standard of living. Verified luxury homes only.</p>
          </div>
          <Link href="/estate/listings" className="flex items-center gap-3 group bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all">
            See All Properties <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-all" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {featured.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-50 bg-slate-100">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute top-8 left-8 flex flex-col gap-2">
                  <div className="bg-amber-500 text-slate-900 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">Featured</div>
                  <div className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-500" /> New Launch
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-2 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> 4.9 Rating
                    </div>
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-white/70">{p.type}</span>
                  </div>
                  <h3 className="text-3xl font-black mb-1 group-hover:translate-x-2 transition-transform duration-500">{p.title}</h3>
                  <p className="flex items-center gap-2 text-white/70 font-medium text-sm">
                    <MapPin className="w-4 h-4 text-amber-500" /> {p.location}
                  </p>
                </div>

                <div className="absolute bottom-10 right-10">
                  <div className="bg-white text-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-6 px-4">
                <div className="flex gap-10">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Configuration</p>
                    <p className="text-lg font-black text-slate-900">{p.bhk} BHK Luxury</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Built Area</p>
                    <p className="text-lg font-black text-slate-900">{p.sqft.toLocaleString()} Sq.Ft</p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-1">Price EstateSync Direct</p>
                  <p className="text-3xl font-black text-slate-900 leading-none tracking-tighter">{formatCurrency(p.price)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY US - AGENT TRUST */}
      <section className="py-32 bg-slate-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1000&auto=format&fit=crop" 
              alt="Luxury Project" 
              className="rounded-[3.5rem] shadow-2xl border-8 border-white w-full aspect-[4/5] object-cover" 
            />
            <div className="absolute -bottom-10 -right-10 bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-800 hidden md:block max-w-xs transition-transform hover:scale-105 duration-500">
              <TrendingUp className="w-10 h-10 text-amber-400 mb-6" />
              <h4 className="text-xl font-black mb-3">Maximize Returns</h4>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">Our properties in Gachibowli have seen 22% ROI growth in the last 12 months. Invest smartly.</p>
            </div>
          </div>

          <div className="flex-1 space-y-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">The Best Only Get the <span className="text-amber-500">Best.</span></h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                We are more than just agents. We are your wealth creation partners. Each property in our database is strictly checked for legal compliance and valuation accuracy.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: 'Market Analytics', desc: 'Real-time neighborhood data and future appreciation trends.', icon: TrendingUp },
                { title: 'Verified Listings', desc: 'Every property goes through a 40-point verification checklist.', icon: ShieldCheck },
                { title: 'Zero Brokerage', desc: 'Direct-to-builder or direct-to-owner deals with minimal paper hassle.', icon: Users },
              ].map(item => (
                <div key={item.title} className="flex gap-6 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-xl shadow-slate-200 flex-shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-lg font-black text-slate-900 mb-1">{item.title}</h5>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/estate/about" className="inline-flex items-center gap-3 bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-900 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-slate-200 active:scale-95 group">
              Learn More About Us <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FOR SELLERS */}
      <section className="py-24 max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[4rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 rounded-l-full blur-3xl -z-0" />
          
          <div className="relative z-10 space-y-6 flex-1">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">Want to sell your <br /><span className="text-amber-500">Property</span> quickly?</h2>
            <p className="text-slate-400 font-medium max-w-lg mb-0 text-lg">Reach 10,000+ active buyers in Hyderabad IT corridor. Get your property sold within 30 days guaranteed.</p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-4 justify-center md:justify-end">
            <a href="https://wa.me/919876543210" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-2xl active:scale-95 group flex items-center gap-3">
              <MessageCircle className="w-5 h-5 flex-shrink-0" /> List Your Property <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
