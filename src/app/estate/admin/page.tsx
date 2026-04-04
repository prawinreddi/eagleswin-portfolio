"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Home, Users, MessageCircle, BarChart, Settings, Plus, Search, Bell, MapPin, TrendingUp, User, Clock, Menu, Activity, ShieldCheck, ArrowUpRight, TrendingDown } from 'lucide-react';
import { properties, formatCurrency } from '../data';

const mockLeads = [
  { id: 1, name: 'Srinivas Rao', phone: '+91 9988776655', property: 'Skywalk Ultra Luxury 3BHK', budget: '1.8 Cr', status: 'new', date: 'Oct 14, 2024' },
  { id: 2, name: 'Lakshmi Priya', phone: '+91 9123456780', property: 'Palm Breeze Gated Villa', budget: '3.2 Cr', status: 'follow-up', date: 'Oct 13, 2024' },
  { id: 3, name: 'Rahul Varma', phone: '+91 9876543210', property: 'Fortune Green Heights', budget: '75 L', status: 'converted', date: 'Oct 10, 2024' },
];

export default function EstateAdminPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'listings' | 'leads' | 'analytics'>('dashboard');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-20">
      <div className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full px-6 py-12 gap-12">
        {/* SIDE BAR */}
        <aside className="w-full md:w-72 space-y-4 flex-shrink-0">
          <div className="bg-slate-900 rounded-[3rem] p-10 text-white mb-10 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
            <div className="w-20 h-20 bg-amber-500 rounded-3xl flex items-center justify-center text-slate-900 shadow-2xl shadow-amber-500/20 mb-6 group-hover:rotate-6 transition-transform">
              <User className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white leading-tight">Kiran Kumar</h3>
            <p className="text-xs font-black text-amber-500 uppercase tracking-widest mt-1">Super Admin Agent</p>
          </div>

          {[
            { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
            { id: 'listings', label: 'My Listings', icon: Home, badge: properties.length },
            { id: 'leads', label: 'Lead Station', icon: Users, badge: mockLeads.length },
            { id: 'analytics', label: 'Pro Analytics', icon: BarChart },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`w-full flex items-center justify-between p-5 rounded-3xl transition-all active:scale-95 border-2 ${activeTab === tab.id ? 'bg-amber-500 border-amber-500 text-slate-900 shadow-2xl shadow-amber-500/20' : 'bg-white border-white text-slate-500 hover:border-slate-100 hover:text-slate-800 shadow-xl'}`}
            >
              <div className="flex items-center gap-4">
                <tab.icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-black text-[11px] uppercase tracking-widest">{tab.label}</span>
              </div>
              {tab.badge && <span className={`w-6 h-6 flex items-center justify-center rounded-full text-[9px] font-black border-2 ${activeTab === tab.id ? 'bg-slate-900 text-white border-amber-400' : 'bg-slate-50 text-slate-400 border-white'}`}>{tab.badge}</span>}
            </button>
          ))}
          
          <button className="w-full flex items-center gap-4 p-5 rounded-3xl mt-12 bg-slate-100 text-slate-400 font-black text-[11px] uppercase tracking-widest hover:bg-red-50 hover:text-red-500 transition-all shadow-xl border-2 border-white">
            <Activity className="w-5 h-5" /> Logout Session
          </button>
        </aside>

        {/* MAIN AREA */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.div key="dashboard" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: 'Total Listings', value: '42', icon: Home, color: 'bg-blue-500' },
                    { label: 'Active Leads', value: '1,240', icon: Users, color: 'bg-amber-500' },
                    { label: 'Revenue Pool', value: '₹4.2k Cr', icon: TrendingUp, color: 'bg-green-500' },
                    { label: 'Visits Today', value: '86', icon: Activity, color: 'bg-purple-500' },
                  ].map(stat => (
                    <div key={stat.label} className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-50 group hover:-translate-y-1 transition-all">
                      <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-100 mb-6 group-hover:scale-110 transition-transform`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <p className="text-3xl font-black text-slate-900 tracking-tighter leading-none mb-1">{stat.value}</p>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-[3rem] p-12 shadow-2xl shadow-slate-200/50 border border-slate-50 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-amber-50 rounded-bl-[4rem] -z-10 group-hover:scale-110 transition-transform duration-500" />
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12">
                    <div>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tight">Lead Concentration <span className="text-amber-500">Analytics</span></h3>
                      <p className="text-slate-400 font-medium text-sm mt-1">Real-time heat map of area interests across Hyderabad.</p>
                    </div>
                    <div className="flex gap-3">
                      {['Week', 'Month', 'Year'].map(t => (
                        <button key={t} className="px-5 py-2 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-900 hover:text-white transition-all">{t}</button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-end gap-6 h-48">
                    {[65, 82, 45, 90, 75, 100, 85, 95].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-4 group/bar">
                        <motion.div initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.1, duration: 1 }} className={`w-full rounded-2xl shadow-2xl relative ${h > 80 ? 'bg-amber-500' : h > 50 ? 'bg-slate-900' : 'bg-slate-200'}`}>
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-black px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">
                            {h}%
                          </div>
                        </motion.div>
                        <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">P{i+1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'leads' && (
              <motion.div key="leads" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50 border border-slate-50 flex flex-col md:flex-row justify-between items-center gap-10">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-4"><Users className="w-8 h-8 text-amber-500" /> Incoming Hot Leads</h3>
                  <div className="relative w-full md:w-80">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input placeholder="Filter leads by name..." className="w-full pl-10 pr-4 py-4 bg-slate-50 border border-slate-50 rounded-2xl focus:bg-white focus:border-amber-500 transition-all font-bold text-slate-800 text-sm" />
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  {mockLeads.map((lead, i) => (
                    <div key={lead.id} className="bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-slate-200/50 border border-slate-50 flex flex-col lg:flex-row lg:items-center justify-between gap-10 hover:translate-x-3 transition-transform duration-300 group">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 font-black text-xl group-hover:bg-amber-500 group-hover:text-white transition-all shadow-inner">
                          {lead.name[0]}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1.5 font-black text-[10px] uppercase tracking-widest">
                            <span className="text-slate-400">#{lead.id}</span>
                            <span className={`px-2.5 py-1 rounded-md border ${lead.status === 'new' ? 'bg-red-50 text-red-500 border-red-100' : lead.status === 'follow-up' ? 'bg-blue-50 text-blue-500 border-blue-100' : 'bg-green-50 text-green-500 border-green-100'}`}>
                              {lead.status}
                            </span>
                          </div>
                          <h4 className="text-2xl font-black text-slate-900 tracking-tight">{lead.name}</h4>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{lead.phone} · {lead.date}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-10">
                        <div className="space-y-1">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Interested Property</p>
                          <p className="font-black text-slate-800 text-sm tracking-tight">{lead.property}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Budget Reported</p>
                          <p className="font-black text-amber-600 text-sm tracking-tight">{lead.budget}</p>
                        </div>
                        <div className="flex gap-2">
                          <a href={`https://wa.me/${lead.phone}`} className="w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center hover:bg-green-600 transition-all shadow-xl shadow-green-100 active:scale-90 flex-shrink-0">
                            <MessageCircle className="w-6 h-6 flex-shrink-0" />
                          </a>
                          <button className="w-14 h-14 bg-slate-50 text-slate-400 border border-slate-100 rounded-2xl flex items-center justify-center hover:bg-slate-100 hover:text-slate-600 transition-all flex-shrink-0">
                            <Activity className="w-6 h-6 flex-shrink-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
