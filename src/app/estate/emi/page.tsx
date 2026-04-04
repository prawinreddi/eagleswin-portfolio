"use client";
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, TrendingUp, Calendar, Info, ShieldCheck, ArrowRight, MessageCircle, DollarSign, PieChart, BarChart } from 'lucide-react';
import { formatCurrency } from '../data';

export default function EstateEmiPage() {
  const [loanAmount, setLoanAmount] = useState(10000000);
  const [tenure, setTenure] = useState(20);
  const [rate, setRate] = useState(8.5);

  const emi = useMemo(() => {
    const r = rate / 12 / 100;
    const n = tenure * 12;
    const emiValue = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emiValue);
  }, [loanAmount, tenure, rate]);

  const totalPayment = emi * tenure * 12;
  const totalInterest = totalPayment - loanAmount;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          
          {/* LEFT: SETTINGS */}
          <div className="lg:w-1/2 space-y-12 flex flex-col justify-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                <CreditCard className="w-4 h-4 text-amber-500" /> Financial Intelligence Tool
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
                Plan Your <span className="text-amber-500">Wealth</span> Strategy.
              </h1>
              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                Buying a property is a long-term commitment. Use our high-fidelity calculator to plan your EMIs and understand your debt-to-income ratio better.
              </p>
            </div>

            <div className="bg-slate-50 rounded-[4rem] p-12 md:p-16 border border-slate-100 shadow-2xl space-y-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-[4rem] -z-10 group-hover:scale-110 transition-transform duration-500" />
              
              <div className="space-y-6">
                <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-slate-400">
                  <label>Loan Amount Required</label>
                  <span className="text-amber-600 bg-amber-50 px-3 py-1 rounded-full">{formatCurrency(loanAmount)}</span>
                </div>
                <input type="range" min="1000000" max="500000000" step="1000000" value={loanAmount} onChange={e => setLoanAmount(Number(e.target.value))} className="w-full accent-amber-500 h-1 bg-slate-200 rounded-full appearance-none cursor-pointer" />
              </div>

              <div className="grid grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-slate-400 font-bold">
                    <label>Interest Rate (%)</label>
                    <span className="text-slate-900">{rate}%</span>
                  </div>
                  <input type="range" min="5" max="15" step="0.1" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full accent-slate-900 h-1 bg-slate-200 rounded-full appearance-none cursor-pointer" />
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-slate-400 font-bold">
                    <label>Tenure (Years)</label>
                    <span className="text-slate-900">{tenure} Yrs</span>
                  </div>
                  <input type="range" min="1" max="30" step="1" value={tenure} onChange={e => setTenure(Number(e.target.value))} className="w-full accent-slate-900 h-1 bg-slate-200 rounded-full appearance-none cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: SUMMARY CARD */}
          <div className="flex-1 lg:pl-10 flex flex-col justify-center">
            <div className="bg-slate-900 rounded-[5rem] p-12 md:p-24 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 rounded-l-full blur-3xl -z-0" />
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-12">
                <div className="space-y-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500 text-center">Your Monthly EMI Will Be</p>
                  <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} key={emi} className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">{formatCurrency(emi)}</motion.div>
                </div>

                <div className="grid grid-cols-2 gap-10 w-full pt-12 border-t border-white/5">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Total Interest Payable</p>
                    <p className="text-2xl font-black text-white">{formatCurrency(totalInterest)}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Total Amount Payable</p>
                    <p className="text-2xl font-black text-white">{formatCurrency(totalPayment)}</p>
                  </div>
                </div>

                <div className="w-full bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 space-y-8 group/card transition-transform hover:scale-105 duration-500">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-slate-900 shadow-2xl shadow-amber-500/30 flex-shrink-0 group-hover/card:rotate-6 transition-transform">
                      <PieChart className="w-8 h-8" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-white font-black text-lg leading-tight uppercase text-xs tracking-widest">Eligibility Check</h4>
                      <p className="text-slate-400 text-xs font-medium mt-1">Check if you qualify for a loan from top banks based on this EMI.</p>
                    </div>
                  </div>
                  <a href="https://wa.me/919876543210" className="w-full flex items-center justify-center gap-3 bg-white hover:bg-amber-500 text-slate-900 px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-slate-950 active:scale-95 group">
                    Speak to Wealth Manager <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>

                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-500" /> Bank Interest Rates updated for Oct 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
