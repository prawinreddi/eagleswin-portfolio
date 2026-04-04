"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, Clock, ShieldCheck, TrendingUp, ChevronRight, MapPin, User, Stethoscope } from 'lucide-react';
import { doctors, doctorCategories, formatCurrency } from './data';
import Link from 'next/link';

export default function MedHome() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-slate-50">
      {/* HERO SECTION */}
      <section className="relative px-4 pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50 rounded-l-[10rem] -z-10 opacity-50" />
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} className="absolute -top-20 -right-20 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center lg:items-start lg:text-left gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-teal-100 shadow-sm">
              <ShieldCheck className="w-4 h-4" /> Trusted Healthcare Expert
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
              Find The Best <span className="text-teal-600">Doctors</span> In One Click.
            </h1>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg">
              Book appointments 24/7. No phone calls, no waiting. Get automatic WhatsApp reminders and 100% verified doctors.
            </p>

            {/* SEARCH BAR */}
            <div className="relative max-w-xl group">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-500 transition-colors">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search specialty, doctor, or clinic..."
                className="w-full pl-16 pr-6 py-5 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-slate-700 font-medium transition-all"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg active:scale-95">
                Search
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 items-center justify-center lg:justify-start grayscale opacity-50">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Trusted By</span>
              <ActivityLogo />
              <ActivityLogo />
              <ActivityLogo />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Browse Specialties</h2>
              <p className="text-slate-500 text-sm font-medium">Find the right specialist for your healthcare needs.</p>
            </div>
            <button className="hidden sm:flex items-center gap-1 text-teal-600 font-bold text-sm group hover:gap-2 transition-all">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {doctorCategories.map(cat => (
              <Link key={cat.id} href="#" className="flex flex-col items-center gap-4 p-8 rounded-3xl border border-slate-50 bg-slate-50/50 hover:bg-teal-500 hover:border-teal-500 hover:text-white transition-all group active:scale-95">
                <span className="text-4xl group-hover:scale-125 transition-transform duration-300">{cat.emoji}</span>
                <span className="text-center text-xs font-black uppercase tracking-wider text-slate-800 group-hover:text-white">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED DOCTORS */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Our Top Rated Doctors</h2>
          <p className="text-slate-500 max-w-lg mx-auto font-medium leading-relaxed">Book with confidence. Verified qualifications and verified patient reviews from local Hyderabad community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map(doctor => (
            <motion.div
              key={doctor.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/60 border border-slate-50 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={doctor.image} alt={doctor.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 flex gap-2">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 text-[10px] font-black text-slate-800 shadow-sm">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /> 4.9 (2k+)
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-slate-900 mb-1">{doctor.name}</h3>
                  <p className="text-teal-600 font-bold text-xs uppercase tracking-widest">{doctor.specialization}</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between text-sm py-3 border-b border-slate-50">
                    <div className="flex items-center gap-2 text-slate-400 font-bold">
                      <Stethoscope className="w-4 h-4 text-teal-400" /> Experience
                    </div>
                    <span className="font-bold text-slate-700">{doctor.experience}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-3 border-b border-slate-50">
                    <div className="flex items-center gap-2 text-slate-400 font-bold">
                      <MapPin className="w-4 h-4 text-teal-400" /> Location
                    </div>
                    <span className="font-bold text-slate-700">Hyderabad</span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-3">
                    <div className="flex items-center gap-2 text-slate-400 font-bold">
                      <User className="w-4 h-4 text-teal-400" /> Appointment Fee
                    </div>
                    <span className="font-black text-slate-900 text-lg">{formatCurrency(doctor.fee)}</span>
                  </div>
                </div>

                <Link href={`/med/doctor/${doctor.id}`} className="block w-full bg-slate-900 hover:bg-teal-600 text-white text-center font-black py-5 rounded-2xl transition-all shadow-xl hover:shadow-teal-100 uppercase tracking-widest text-xs">
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE SECTION (No-show reduction pitch) */}
      <section className="py-24 bg-teal-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Eliminate No-Shows &<br /><span className="text-teal-200">Scale Your Clinic.</span></h2>
          <p className="text-teal-100 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
            Our platform reduces missed appointments by up to 80% through automatic WhatsApp reminders and prepaid bookings. Join the future of healthcare management.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { val: '80%', label: 'No-Show Reduction', icon: TrendingUp },
              { val: '24/7', label: 'Online Booking', icon: Clock },
              { val: '100%', label: 'Data Security', icon: ShieldCheck },
              { val: '2k+', label: 'Monthly Patients', icon: User },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-2">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-black">{stat.val}</p>
                <p className="text-xs text-teal-100 font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ActivityLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-5 h-5 bg-slate-400 rounded-md" />
      <span className="text-sm font-black tracking-tight">HEALTHCARE</span>
    </div>
  );
}
