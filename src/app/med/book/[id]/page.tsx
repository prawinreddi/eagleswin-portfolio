"use client";
import { useRouter, useParams } from 'next/navigation';
import { useBooking } from '../../context/BookingContext';
import { useState } from 'react';
import { ChevronLeft, Info, Calendar, Clock, CreditCard, Lock, CheckCircle, Smartphone } from 'lucide-react';
import { formatCurrency } from '../../data';
import { motion } from 'framer-motion';

export default function BookingFormPage() {
  const router = useRouter();
  const { booking, setPatient, confirmBooking } = useBooking();
  const [form, setForm] = useState({ name: '', age: '', phone: '', reason: '' });
  const [processing, setProcessing] = useState(false);

  if (!booking.doctor || !booking.slot) {
    return <div className="p-20 text-center">Session expired. <button onClick={() => router.push('/med')} className="text-teal-600 underline">Search again</button></div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setPatient(form);
    setTimeout(() => {
      confirmBooking();
      router.push('/med/success');
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 bg-slate-50 min-h-screen">
      <button onClick={() => router.back()} className="flex items-center gap-1 text-slate-500 hover:text-teal-600 mb-8 transition-colors text-sm font-black uppercase tracking-widest">
        <ChevronLeft className="w-4 h-4" /> Go Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-50">
            <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4"><Info className="w-8 h-8 text-teal-500" /> Patient Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Ex: Srikanth Reddy" className="bg-slate-50 border-2 border-slate-50 rounded-2xl p-5 focus:outline-none focus:border-teal-500 transition-all font-bold text-slate-800" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Age</label>
                <input required value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} placeholder="Ex: 28" type="number" className="bg-slate-50 border-2 border-slate-50 rounded-2xl p-5 focus:outline-none focus:border-teal-500 transition-all font-bold text-slate-800" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Phone Number</label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">+91</span>
                  <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="98765 43210" className="w-full pl-16 bg-slate-50 border-2 border-slate-50 rounded-2xl p-5 focus:outline-none focus:border-teal-500 transition-all font-bold text-slate-800" />
                </div>
              </div>
              <div className="flex flex-col gap-3 col-span-1 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Reason for visit / Symptom</label>
                <textarea required value={form.reason} onChange={e => setForm({ ...form, reason: e.target.value })} placeholder="Briefly describe your health issue..." className="bg-slate-50 border-2 border-slate-50 rounded-2xl p-5 h-32 focus:outline-none focus:border-teal-500 transition-all font-bold text-slate-800" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-50">
            <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-4"><CreditCard className="w-7 h-7 text-teal-500" /> Payment & Trust</h2>
            <div className="bg-teal-50/50 p-8 rounded-3xl border border-teal-100 flex flex-col items-center gap-6 text-center">
              <ShieldCheckLogo />
              <p className="text-slate-600 font-medium text-sm leading-relaxed">Book securely now. Appointment fee can be paid at the clinic or you can proceed with a secure booking confirm through the admin dashboard.</p>
              <div className="flex flex-wrap gap-4 justify-center grayscale opacity-50">
                <UPIIcon /> <UPIIcon /> <UPIIcon />
              </div>
            </div>

            <button type="submit" disabled={processing} className="w-full mt-10 bg-slate-900 hover:bg-teal-600 text-white font-black py-6 rounded-[2rem] transition-all text-xl uppercase tracking-widest active:scale-95 shadow-xl shadow-slate-200">
              {processing ? 'Confirming Appointment...' : 'Complete My Booking'}
            </button>
            <p className="mt-6 flex justify-center items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <Lock className="w-4 h-4 text-green-500" /> 128-bit SSL Secure Booking
            </p>
          </div>
        </form>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-teal-500/10 border-4 border-teal-50 sticky top-28 overflow-hidden group">
            <h3 className="text-xl font-black text-slate-900 mb-8 border-b-2 border-slate-50 pb-6 uppercase tracking-widest text-xs">Final Summary</h3>

            <div className="flex gap-4 mb-10 items-start">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                <img src={booking.doctor.image} alt={booking.doctor.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-lg font-black text-slate-900 leading-tight">{booking.doctor.name}</p>
                <p className="text-[10px] font-black text-teal-600 uppercase tracking-widest mt-1">{booking.doctor.specialization}</p>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-center justify-between text-xs font-black uppercase tracking-widest text-slate-400 py-4 border-b border-slate-50">
                <span className="flex items-center gap-2 transition-transform group-hover:translate-x-1 duration-300"><Calendar className="w-4 h-4 text-teal-400" /> Date</span>
                <span className="text-slate-800">{booking.date}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-black uppercase tracking-widest text-slate-400 py-4 border-b border-slate-50">
                <span className="flex items-center gap-2 transition-transform group-hover:translate-x-1 duration-300"><Clock className="w-4 h-4 text-teal-400" /> Slot</span>
                <span className="text-slate-800">{booking.slot}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-black uppercase tracking-widest text-slate-400 py-4">
                <span className="flex items-center gap-2 transition-transform group-hover:translate-x-1 duration-300"><CreditCard className="w-4 h-4 text-teal-400" /> Fee</span>
                <span className="text-teal-600 text-lg">{formatCurrency(booking.doctor.fee)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShieldCheckLogo() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-teal-200 blur-2xl opacity-40 rounded-full" />
      <div className="relative w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-teal-200">
        <CheckCircle className="w-10 h-10" />
      </div>
    </div>
  );
}

function UPIIcon() {
  return <div className="w-12 h-6 bg-slate-200 rounded-md" />;
}
