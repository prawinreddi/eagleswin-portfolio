"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Users, Calendar, Settings, TrendingUp, IndianRupee, MessageCircle, MoreVertical, Search, Bell, CheckCircle, XCircle, Clock, Smartphone, User, Menu, Activity } from 'lucide-react';
import { doctors, formatCurrency } from '../data';

const mockAppointments = [
  { id: 'ORD123456', patient: 'Ravi Kumar', age: 28, phone: '+91 9876543210', slot: '10:00 AM', reason: 'Fever & Cold', status: 'pending', doctor: 'Dr. Ramesh Kumar' },
  { id: 'ORD123455', patient: 'Priya Singh', age: 34, phone: '+91 9123456780', slot: '11:15 AM', reason: 'Skin Allergy', status: 'checked-in', doctor: 'Dr. Arjun Varma' },
  { id: 'ORD123454', patient: 'Arjun Reddy', age: 45, phone: '+91 9988776655', slot: '12:30 PM', reason: 'Routine Checkup', status: 'completed', doctor: 'Dr. Ramesh Kumar' },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'appointments' | 'patients' | 'settings'>('overview');
  const [appointments, setAppointments] = useState(mockAppointments);

  const updateStatus = (id: string, status: string) =>
    setAppointments(a => a.map(x => x.id === id ? { ...x, status } : x));

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* ADMIN TOP NAV */}
      <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 text-slate-400 sm:hidden" />
          <div className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:bg-teal-400 transition-colors">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-black text-white tracking-tight">MedSync <span className="text-teal-400 uppercase text-[10px] tracking-widest ml-1 translate-y-[-1px] inline-block font-bold mt-0.5">Admin Central</span></span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-500 text-[10px] font-black uppercase tracking-widest">Live Cloud Data</span>
          </div>
          <button className="relative">
            <Bell className="w-5 h-5 text-slate-400" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-slate-900" />
          </button>
          <div className="w-10 h-10 bg-teal-900 border-2 border-teal-500/50 rounded-full flex items-center justify-center text-teal-400 font-black text-sm">
            DR
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full px-4 py-10 gap-10">
        {/* SIDEBAR TABS */}
        <aside className="w-full md:w-64 space-y-3 flex-shrink-0">
          {[
            { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'appointments', label: 'Appointments', icon: Calendar, badge: appointments.filter(a => a.status === 'pending').length },
            { id: 'patients', label: 'Patient Records', icon: Users },
            { id: 'settings', label: 'Slot Settings', icon: Settings },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${activeTab === tab.id ? 'bg-teal-500 text-white shadow-xl shadow-teal-100' : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-800 border border-slate-100/50'}`}
            >
              <div className="flex items-center gap-3">
                <tab.icon className="w-5 h-5" />
                <span className="font-black text-[11px] uppercase tracking-widest">{tab.label}</span>
              </div>
              {tab.badge ? <span className="bg-red-500 text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">{tab.badge}</span> : null}
            </button>
          ))}
          <div className="pt-10 space-y-6 opacity-40">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-4">Analytics Preview</h4>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100">
                <p className="text-2xl font-black text-slate-800">₹42.5k</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Weekly Earnings</p>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div key="overview" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: "Today's APTS", value: '24', icon: Calendar, color: 'bg-teal-500' },
                    { label: "Estimated Revenue", value: '₹12,480', icon: IndianRupee, color: 'bg-green-500' },
                    { label: 'New Patients', value: '08', icon: Users, color: 'bg-blue-500' },
                    { label: 'Wait Time (Avg)', value: '12m', icon: Clock, color: 'bg-purple-500' },
                  ].map(stat => (
                    <div key={stat.label} className="bg-white rounded-[2.5rem] p-6 shadow-2xl shadow-slate-200/50 border border-slate-50 group hover:border-teal-500/30 transition-all">
                      <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mb-4 text-white shadow-lg shadow-teal-50 group-hover:scale-110 transition-transform`}>
                        <stat.icon className="w-5 h-5" />
                      </div>
                      <p className="text-3xl font-black text-slate-900 tracking-tighter">{stat.value}</p>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-[3rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50 border border-slate-50 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-[4rem] -z-10 group-hover:scale-110 transition-transform duration-500" />
                  <div className="flex items-center justify-between mb-10">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                      <TrendingUp className="w-6 h-6 text-teal-600" /> No-Show Reduction Impact
                    </h3>
                  </div>
                  <div className="flex items-end gap-3 h-40">
                    {[35, 32, 28, 20, 15, 10, 8].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <motion.div initial={{ height: 0 }} animate={{ height: `${h * 2.5}px` }} transition={{ delay: i * 0.1, duration: 0.8 }}
                          className={`w-full ${h > 20 ? 'bg-slate-100' : 'bg-teal-500'} rounded-2xl shadow-sm`} />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">W{i+1}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-8 border-t border-slate-50 flex items-center gap-4">
                    <p className="text-xs font-bold text-slate-500 leading-relaxed">
                      <span className="text-teal-600 font-black">Success!</span> No-shows reduced from 35% to 8% in 7 weeks through automated WhatsApp reminders.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'appointments' && (
              <motion.div key="appointments" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-center bg-white rounded-3xl p-6 shadow-sm mb-8 gap-4 border border-slate-50">
                  <h3 className="text-xl font-black text-slate-900 tracking-tight px-4 uppercase text-xs tracking-widest">Today's Schedule</h3>
                  <div className="relative w-full sm:w-80 max-w-lg">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input placeholder="Search PT Name..." className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-teal-500 text-sm font-bold text-slate-700" />
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  {appointments.map(apt => (
                    <div key={apt.id} className="bg-white rounded-[2.5rem] p-6 shadow-2xl shadow-slate-200/40 border border-slate-50 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group hover:translate-x-2 transition-transform">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 font-black shadow-inner shadow-teal-100 text-sm">
                          {apt.patient.split(' ')[0][0]}{apt.patient.split(' ')[1][0]}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-black text-slate-800 uppercase tracking-widest">#{apt.id}</span>
                            <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest border ${apt.status === 'pending' ? 'bg-red-50 text-red-500 border-red-100' : 'bg-teal-50 text-teal-500 border-teal-100'}`}>{apt.status}</span>
                          </div>
                          <h4 className="text-2xl font-black text-slate-900 tracking-tight">{apt.patient}</h4>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Age {apt.age} · {apt.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-10 flex-wrap">
                        <div className="space-y-1">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Scheduled Time</p>
                          <p className="font-black text-slate-800 text-sm tracking-widest">{apt.slot}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Assigned Doctor</p>
                          <p className="font-black text-teal-600 text-sm tracking-widest uppercase">{apt.doctor.split('. ')[1]}</p>
                        </div>
                        <div className="flex gap-2">
                          {apt.status === 'pending' && (
                            <button onClick={() => updateStatus(apt.id, 'checked-in')} className="p-4 bg-teal-500 text-white rounded-2xl hover:bg-teal-600 transition-all shadow-xl shadow-teal-100"><CheckCircle className="w-5 h-5" /></button>
                          )}
                          <button className="p-4 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-100 transition-all border border-slate-100"><MessageCircle className="w-5 h-5" /></button>
                          <button className="p-4 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-100 transition-all border border-slate-100"><MoreVertical className="w-5 h-5" /></button>
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
