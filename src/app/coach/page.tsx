"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, Star, Clock, MapPin, CheckCircle2, User, BookOpen, ShieldCheck, TrendingUp, Users, ChevronRight, X, PhoneCall, School, Award, Layers, Info } from 'lucide-react';
import { coachData, formatPrice } from './data';
import Link from 'next/link';

export default function CoachLandingPage() {
  const [activeBatch, setActiveBatch] = useState(coachData.batches[0]);
  const [timeLeft, setTimeLeft] = useState(60 * 60 * 24); // 24 hours in seconds
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => (prev > 0 ? prev - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-slate-50 min-h-screen relative font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&auto=format&fit=crop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-blue-500/20 backdrop-blur-md">
              <Award className="w-4 h-4" /> Admissions Open for 2025 Batch
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tighter">
              Get <span className="text-blue-400">650+ Score</span> <br /> In NEET 2025
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              Personal mentorship from the top 1% faculty. Join 5,000+ successful students who achieved their medical dreams with Elite Academy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <button 
                onClick={() => setShowForm(true)}
                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-3 group"
              >
                Enroll Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest"><span className="text-blue-400">1.2k+ Students</span> <br /> registered this week</p>
              </div>
            </div>

            <div className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-wrap gap-10 justify-center lg:justify-start backdrop-blur-xl">
              <div className="text-center md:text-left">
                <p className="text-3xl font-black text-white leading-none mb-1">Only {activeBatch.seats} Seats</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Remaining In New Batch</p>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block" />
              <div className="text-center md:text-left">
                <p className="text-3xl font-black text-blue-400 leading-none mb-1">{formatTimer(timeLeft)}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Early Bird Discount Ends</p>
              </div>
            </div>
          </motion.div>

          {/* URGENCY CARD / FAST ENROLL */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="lg:w-[400px] bg-white rounded-[3.5rem] p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[4rem] group-hover:scale-110 transition-transform duration-500 -z-0" />
            <div className="relative z-10">
              <div className="bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest mb-8 flex items-center gap-2 w-fit animate-pulse">
                <Clock className="w-3.5 h-3.5" /> High Demand: 4 Slots Left Today
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Quick Enrollment</h3>
              <form className="space-y-6">
                <input placeholder="Student Name" className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:bg-white focus:border-blue-500 transition-all font-bold text-slate-800 text-sm" />
                <input placeholder="WhatsApp Number" className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:bg-white focus:border-blue-500 transition-all font-bold text-slate-800 text-sm" />
                <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:bg-white focus:border-blue-500 transition-all font-black text-slate-800 text-xs uppercase tracking-widest appearance-none">
                  <option>NEET Intensive</option>
                  <option>JEE Target</option>
                  <option>Coding Bootcamp</option>
                </select>
                <button className="w-full bg-slate-900 hover:bg-blue-600 text-white font-black py-5 rounded-2xl transition-all shadow-xl active:scale-95 uppercase tracking-widest text-xs">
                  Book Free Demo Class
                </button>
              </form>
              <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest mt-6">
                <ShieldCheck className="w-3.5 h-3.5 inline mr-1 text-green-500" /> Your data is secure with us
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. RESULTS / SUCCESS STATS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center mb-20">
            {coachData.stats.map(stat => (
              <div key={stat.label} className="space-y-1 group">
                <p className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter group-hover:text-blue-600 transition-colors">{stat.val}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {coachData.toppers.map((topper, i) => (
              <div key={topper.name} className="flex gap-8 bg-slate-50 p-8 rounded-[3rem] border border-slate-100 group hover:translate-x-3 transition-transform">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] overflow-hidden shadow-2xl flex-shrink-0 group-hover:rotate-3 transition-transform">
                  <img src={topper.image} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">{topper.rank}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">NEET Rank 2024</span>
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-1">{topper.name}</h4>
                  <p className="font-bold text-blue-600 text-sm mb-3">Score: {topper.score}</p>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                    <School className="w-3.5 h-3.5" /> Admitted: {topper.college}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 & 4. BATCH DETAILS & FEE */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">Choose Your <span className="text-blue-600">Batch.</span></h2>
            <p className="text-slate-500 font-medium max-w-lg mx-auto">Start your journey today. Early bird registration gets you flat ₹5,000 OFF on full course fee.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {coachData.batches.map(batch => (
              <div key={batch.id} className="bg-white rounded-[4rem] p-12 shadow-2xl shadow-slate-200/50 border border-slate-50 relative overflow-hidden group">
                <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-green-600">Batch Starting: {batch.startDate}</span>
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">{batch.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest line-through mb-1">Old Fee: {formatPrice(batch.price)}</p>
                    <p className="text-4xl font-black text-blue-600 tracking-tighter leading-none">{formatPrice(batch.discountPrice)}</p>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2">+ Monthly EMI Options</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-12">
                  {[
                    { label: 'Mode', val: batch.mode, icon: MapPin },
                    { label: 'Time', val: batch.timings, icon: Clock },
                    { label: 'Seats', val: `${batch.seats} Left`, icon: Users },
                    { label: 'Includes', val: 'Study Material', icon: BookOpen },
                  ].map(item => (
                    <div key={item.label} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 group/item hover:bg-blue-50 hover:border-blue-100 transition-all">
                      <item.icon className="w-5 h-5 text-blue-500 mb-3 group-hover/item:scale-110 transition-transform" />
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{item.label}</p>
                      <p className="text-sm font-black text-slate-800 tracking-tight">{item.val}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mb-12">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-4">Syllabus Coverage</p>
                  <div className="flex flex-wrap gap-2">
                    {batch.subjects.map(s => (
                      <span key={s} className="bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">{s}</span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-slate-900 hover:bg-blue-600 text-white font-black py-6 rounded-3xl transition-all shadow-xl active:scale-95 uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                  Enroll Me Now <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FACULTY PROFILE */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">Learn From <span className="text-blue-600">Experts.</span></h2>
              <p className="text-slate-500 font-medium max-w-lg mt-6">Our teachers are graduates from top IITs and Medical Colleges with decades of teaching experience.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {coachData.faculty.map(f => (
              <div key={f.name} className="flex flex-col md:flex-row gap-10 items-center p-12 bg-slate-900 rounded-[4rem] text-white group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full group-hover:scale-125 transition-transform duration-700" />
                <div className="w-40 h-40 md:w-56 md:h-64 rounded-[2rem] overflow-hidden shadow-2xl flex-shrink-0 border-4 border-blue-500 group-hover:rotate-2 transition-transform">
                  <img src={f.image} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 space-y-6">
                  <div>
                    <h4 className="text-3xl font-black mb-1 group-hover:text-blue-400 transition-colors uppercase tracking-widest text-xs tracking-tighter">{f.name}</h4>
                    <p className="text-blue-400 font-bold uppercase tracking-widest text-[10px]">{f.qualification}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                      <Clock className="w-5 h-5 text-blue-400" /> {f.exp} Teaching Excellence
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" /> Subject Expert
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                      <Users className="w-5 h-5 text-blue-400" /> Mentored 10k+ Students
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US - USP */}
      <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none">The <span className="text-black">Elite</span> <br /> Advantage.</h2>
              <p className="text-blue-100 text-lg font-medium leading-relaxed max-w-xl">
                We believe in quality over quantity. That is why we limit our batch size and focus on personal mentorship for every single student.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: 'Small Batches', desc: 'Max 30 students per class for focused attention.', icon: Users },
                  { title: 'Daily Doubts', desc: '1 Hour dedicated session every day.', icon: MessageCircle },
                  { title: 'Test Series', icon: Layers, desc: 'Weekly mock tests based on latest exam pattern.' },
                  { title: 'Study Material', icon: BookOpen, desc: 'Premium printed books and digital archives.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0"><item.icon className="w-6 h-6" /></div>
                    <div>
                      <h5 className="font-black text-sm uppercase tracking-widest mb-1">{item.title}</h5>
                      <p className="text-blue-100 text-xs font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/10 group">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef14697593?w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter mb-12 text-center uppercase text-xs tracking-widest">Common Questions</h2>
          <div className="space-y-6">
            {coachData.faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 transition-all hover:border-blue-200 group">
                <h4 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-3">
                  <Info className="w-5 h-5 text-blue-500" /> {faq.q}
                </h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section id="enroll" className="py-24 max-w-7xl mx-auto px-6">
         <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center space-y-12 relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 rounded-l-full blur-3xl -z-0" />
           <div className="relative z-10 space-y-6">
             <div className="bg-blue-500 w-fit mx-auto px-4 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-widest mb-4">Limited Availability</div>
             <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none mb-4">Secure Your Seat <br /><span className="text-blue-400">Join The Batch.</span></h2>
             <p className="text-slate-400 max-w-lg mx-auto font-medium leading-relaxed">
               Don't miss the chance to learn from the best. Standard classes starting May 15.
             </p>
           </div>
           
           <div className="relative z-10 max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              <button onClick={() => setShowForm(true)} className="bg-blue-500 hover:bg-blue-600 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl active:scale-95 transition-all">
                Book My Free Demo
              </button>
              <a href="tel:919876543210" className="bg-white hover:bg-blue-50 text-slate-900 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3">
                 <PhoneCall className="w-5 h-5" /> Speak to Admission Head
              </a>
           </div>

           <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center justify-center gap-2">
             <CheckCircle2 className="w-4 h-4 text-green-500" /> Over 10,000+ Admission Queries handled this month
           </p>
         </div>
      </section>

      {/* STICKY WHATSAPP & CALL */}
      <div className="fixed bottom-10 right-10 z-[60] flex flex-col gap-4">
        <a href="https://wa.me/919876543210" className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 active:scale-90 transition-all group relative">
          <MessageCircle className="w-8 h-8 flex-shrink-0" />
          <span className="absolute right-20 bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-black shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 uppercase tracking-widest">Chat with us</span>
        </a>
        <a href="tel:919876543210" className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 active:scale-90 transition-all group relative">
          <PhoneCall className="w-8 h-8 flex-shrink-0" />
           <span className="absolute right-20 bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-black shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 uppercase tracking-widest">Call Now</span>
        </a>
      </div>

      {/* ENROLLMENT MODAL FORM */}
      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowForm(false)} className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }} className="relative bg-white rounded-[4rem] p-12 max-w-lg w-full shadow-2xl">
              <button 
                onClick={() => setShowForm(false)}
                className="absolute top-8 right-8 w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center mb-10">
                <h3 className="text-3xl font-black text-slate-900 mb-2">Book Your Demo</h3>
                <p className="text-slate-500 font-medium text-sm">Join our 24-hour priority waitlist today.</p>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Student Name</label>
                  <input placeholder="Enter your full name" className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:bg-white focus:border-blue-500 transition-all font-bold text-slate-800" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Contact Number</label>
                  <input placeholder="+91 99887 76655" className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:bg-white focus:border-blue-500 transition-all font-bold text-slate-800" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Exam Interested In</label>
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:bg-white focus:border-blue-500 transition-all font-black text-slate-800 text-xs uppercase tracking-widest appearance-none">
                    <option>NEET (UG)</option>
                    <option>JEE (Mains/Adv)</option>
                    <option>B.Tech Tuition</option>
                  </select>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-black py-6 rounded-[2rem] shadow-xl shadow-blue-500/20 active:scale-95 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                  Submit Request <ChevronRight className="w-5 h-5" />
                </button>
                <p className="text-[9px] text-center text-slate-400 font-bold uppercase tracking-widest">
                  Thank you for choosing Elite Academy. We will call you within 30 mins.
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
