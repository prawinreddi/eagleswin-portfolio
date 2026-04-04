"use client";
import { useParams, useRouter } from 'next/navigation';
import { properties, formatCurrency } from '../../data';
import { useState, useMemo } from 'react';
import { ChevronLeft, Star, Clock, Calendar, Check, Stethoscope, Heart, ArrowRight, MessageCircle, Info, ShieldCheck, Layers, Maximize, Home, Mail, Phone, MapPin, Globe, CreditCard, Share2, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PropertyDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const p = properties.find(prop => prop.id === Number(id));
  const [selectedImg, setSelectedImg] = useState(p?.image);
  
  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(p ? p.price * 0.8 : 0);
  const [tenure, setTenure] = useState(20);
  const [rate, setRate] = useState(8.5);

  const emi = useMemo(() => {
    const r = rate / 12 / 100;
    const n = tenure * 12;
    const emiValue = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emiValue);
  }, [loanAmount, tenure, rate]);

  if (!p) return <div className="p-32 text-center text-slate-400 font-black uppercase tracking-widest flex flex-col items-center gap-6">Property not found. <button onClick={() => router.push('/estate/listings')} className="bg-amber-500 text-slate-900 px-6 py-3 rounded-2xl">Return to Listings</button></div>;

  return (
    <div className="bg-slate-50 min-h-screen py-10 pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-slate-400 hover:text-amber-500 mb-12 transition-all group font-black text-xs uppercase tracking-widest">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" /> Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* LEFT: GALLERY & INFO */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <div className="relative aspect-[16/9] rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                <img src={selectedImg} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute top-10 left-10 flex flex-col gap-3">
                  <div className="bg-amber-500 text-slate-900 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest shadow-2xl">Verified Premium</div>
                  <div className="bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest shadow-2xl flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-green-500" /> RERA Registered
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none px-2">
                {[p.image, ...p.gallery].map((img, i) => (
                  <button key={img} onClick={() => setSelectedImg(img)} className={`flex-shrink-0 w-24 h-24 rounded-3xl overflow-hidden border-4 transition-all duration-300 transform ${selectedImg === img ? 'border-amber-500 scale-110 shadow-xl' : 'border-white opacity-60 hover:opacity-100'}`}>
                    <img src={img} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[4rem] p-12 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-50 relative overflow-hidden group">
              <div className="flex flex-wrap items-center justify-between gap-10 mb-12">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-500">{p.type} Luxury</span>
                    <div className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                    <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">Listed 4 days ago</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter leading-tight">{p.title}</h1>
                  <p className="flex items-center gap-2 text-slate-500 text-lg font-medium">
                    <MapPin className="w-5 h-5 text-amber-500" /> {p.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Value Estimated</p>
                  <p className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">{formatCurrency(p.price)}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-10 border-y border-slate-50">
                {[
                  { label: 'BHK Unit', val: `${p.bhk} BHK`, icon: Home },
                  { label: 'Total Area', val: `${p.sqft} Sq.Ft`, icon: Maximize },
                  { label: 'Status', val: p.status === 'available' ? 'Ready to Move' : 'Under Const', icon: Layers },
                  { label: 'Facing', val: 'East Facing', icon: MapPin },
                ].map(item => (
                  <div key={item.label} className="space-y-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-amber-500"><item.icon className="w-5 h-5" /></div>
                    <div className="space-y-0.5">
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{item.label}</p>
                      <p className="text-base font-black text-slate-800 uppercase tracking-wide">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 space-y-8">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">Property Insights</h3>
                <p className="text-slate-500 leading-loose text-lg font-medium">{p.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {p.amenities.map(a => (
                    <div key={a} className="flex items-center gap-3 font-black text-[11px] uppercase tracking-widest text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100 transition-all hover:bg-amber-50 hover:border-amber-100 hover:text-amber-700">
                      <Check className="w-4 h-4 text-green-500" /> {a}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* EMI CALCULATOR SECTION */}
            <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 rounded-l-full blur-3xl -z-0 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="space-y-10">
                  <h3 className="text-3xl font-black mb-8 flex items-center gap-4">Financial Planner <CreditCard className="w-8 h-8 text-amber-500" /></h3>
                  <div className="space-y-12">
                    <div className="space-y-4">
                      <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-400">
                        <span>Down Payment</span>
                        <span className="text-amber-500">{formatCurrency(p.price - loanAmount)}</span>
                      </div>
                      <input type="range" min={p.price * 0.1} max={p.price * 0.9} step={100000} value={p.price - loanAmount} onChange={e => setLoanAmount(p.price - Number(e.target.value))} className="w-full accent-amber-500" />
                    </div>
                    <div className="flex gap-10">
                      <div className="flex-1 space-y-4">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">Rate (%)</label>
                        <input type="number" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-amber-500 text-white font-black" />
                      </div>
                      <div className="flex-1 space-y-4">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">Tenure (Yrs)</label>
                        <input type="number" value={tenure} onChange={e => setTenure(Number(e.target.value))} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-amber-500 text-white font-black" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-500 rounded-[3rem] p-12 flex flex-col justify-center items-center text-center text-slate-900 shadow-2xl relative group/card overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none" />
                  <p className="text-[11px] font-black uppercase tracking-[0.3em] mb-4 opacity-70">Estimated Monthly EMI</p>
                  <p className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">₹{emi.toLocaleString()}</p>
                  <p className="text-xs font-bold leading-relaxed opacity-80 uppercase tracking-widest">Calculated based on {rate}% interest rate over {tenure} years.</p>
                  <button className="mt-10 px-8 py-4 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl active:scale-95 transition-all shadow-2xl hover:bg-slate-800">Check Eligibility</button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: ENQUIRY & AGENT CARD */}
          <div className="lg:col-span-1 space-y-10">
            <div className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-slate-200/50 border border-slate-50 sticky top-32 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-[4rem] -z-10 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-black text-slate-900 mb-10 tracking-tight uppercase text-xs tracking-widest">Reserve Your Visit</h3>
              
              <form className="space-y-6">
                <input placeholder="Your Name" className="w-full bg-slate-50 border border-slate-50 rounded-2xl p-5 focus:bg-white focus:border-amber-500 transition-all font-bold text-slate-800" />
                <input placeholder="WhatsApp Number" className="w-full bg-slate-50 border border-slate-50 rounded-2xl p-5 focus:bg-white focus:border-amber-500 transition-all font-bold text-slate-800" />
                <textarea placeholder="Tell us your requirement..." className="w-full bg-slate-50 border border-slate-50 rounded-2xl p-5 h-32 focus:bg-white focus:border-amber-500 transition-all font-bold text-slate-800" />
                
                <button type="submit" className="w-full bg-slate-900 hover:bg-amber-500 text-white hover:text-black font-black py-6 rounded-3xl transition-all shadow-xl shadow-slate-200 uppercase tracking-widest text-xs flex items-center justify-center gap-3 active:scale-95">
                  Confirm Visit <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="text-center mt-10 pt-10 border-t border-slate-50 flex flex-col gap-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Directly Connect with Agent</p>
                <div className="flex gap-4">
                  <a href="https://wa.me/919876543210" className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-3xl py-5 flex items-center justify-center gap-3 transition-all shadow-xl shadow-green-100 active:scale-90">
                    <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  </a>
                  <a href="tel:919876543210" className="flex-1 bg-white border border-slate-100 text-slate-900 rounded-3xl py-5 flex items-center justify-center gap-3 transition-all shadow-xl shadow-slate-200 active:scale-90">
                    <Phone className="w-5 h-5 flex-shrink-0 text-amber-500" />
                  </a>
                </div>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-500" /> No Commission on Direct Deals
                </p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="flex gap-6 items-center">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-500 shadow-xl flex-shrink-0 shadow-amber-500/20 group-hover:rotate-3 transition-transform duration-500">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-white leading-tight">Kiran Kumar</h4>
                  <p className="text-xs font-black text-amber-500 uppercase tracking-widest mt-1">Certified Consultant</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-white/40">
                  <span>Deals Processed</span>
                  <span className="text-white">450+ Solid Deals</span>
                </div>
                <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-white/40">
                  <span>Experience</span>
                  <span className="text-white">12 Years Premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
