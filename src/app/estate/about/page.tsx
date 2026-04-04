"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, Award, TrendingUp, Users, Clock, ArrowRight, MessageCircle, Phone, Mail, Globe, CheckCircle2, Share2 } from 'lucide-react';
import { agents } from '../data';
import Link from 'next/link';

export default function EstateAboutPage() {
  const agent = agents[0];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex-1 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl -z-10" />
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group">
              <img src={agent.image} alt={agent.name} className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent">
                <div className="flex items-center gap-2 bg-amber-500 text-slate-900 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest w-fit mb-4">
                  #1 Top Performer 2024
                </div>
                <h2 className="text-4xl font-black text-white tracking-tighter">{agent.name}</h2>
                <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mt-1">{agent.role}</p>
              </div>
            </div>
            {/* Experience Floating Card */}
            <div className="absolute -bottom-10 -right-10 bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-800 hidden md:block group-hover:translate-x-2 transition-transform">
              <p className="text-4xl font-black text-amber-500 mb-1">{agent.experience}</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Industry Veteran</p>
            </div>
          </motion.div>

          <div className="flex-1 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                <ShieldCheck className="w-4 h-4" /> Trusted Real Estate Partner
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
                Building Wealth Through <span className="text-amber-500">Premium</span> Realty.
              </h1>
              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                {agent.bio} I don't just sell properties; I analyze markets to ensure your investment grows by at least 15% YoY.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { label: 'Deals Closed', val: agent.deals + '+', icon: TrendingUp },
                { label: 'Client Retention', val: '98%', icon: Users },
                { label: 'Awards Won', val: '14', icon: Award },
                { label: 'Active Listings', val: '24', icon: Clock },
              ].map(stat => (
                <div key={stat.label} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 group hover:bg-amber-500 hover:border-amber-500 transition-all">
                  <stat.icon className="w-6 h-6 text-amber-500 mb-3 group-hover:text-slate-900" />
                  <p className="text-2xl font-black text-slate-900 group-hover:text-slate-900 leading-none mb-1">{stat.val}</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900/60">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-10 border-t border-slate-100">
              <a href="https://wa.me/919876543210" className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-900 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-amber-100 flex items-center justify-center gap-3">
                <MessageCircle className="w-5 h-5" /> Let's Talk
              </a>
              <div className="flex gap-2">
                {[Globe, Share2, Mail].map((Icon, i) => (
                  <button key={i} className="w-16 h-16 rounded-2xl border border-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all text-slate-400 group">
                    <Icon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  </button>
                ))}
            </div>
            </div>
          </div>
        </div>

        {/* MISSION SECTION */}
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 rounded-l-full blur-3xl -z-0" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">My Philosophy for <br /><span className="text-amber-500">Wealth Creation.</span></h2>
              <div className="space-y-6">
                {[
                  '100% Legal Transparency & Verification.',
                  'Data-Driven Market Valuations.',
                  'Post-Purchase Asset Management Support.',
                  'Exclusive Access to Pre-Launch Gems.'
                ].map(item => (
                  <div key={item} className="flex items-center gap-4 text-slate-300 font-medium text-lg">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-12 border border-white/10 space-y-8 text-center group-hover:rotate-1 transition-transform">
              <p className="text-xl text-slate-300 italic font-medium leading-relaxed">
                "Kiran's knowledge of the Hyderabad market is unmatched. He helped us secure a villa in Kokapet that appreciated by 30% in just 14 months."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800" />
                <div className="text-left">
                  <p className="text-white font-black text-sm uppercase tracking-widest">Rahul Deshmukh</p>
                  <p className="text-amber-500 text-[10px] font-bold uppercase tracking-widest">CEO, TechNova Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
