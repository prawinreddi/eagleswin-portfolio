"use client";
import { useBooking } from '../context/BookingContext';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Clock, MapPin, MessageCircle, Share2, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  const { booking, resetBooking } = useBooking();

  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center min-h-[85vh] flex flex-col items-center justify-center">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', damping: 10, mass: 0.8 }} className="mb-12 relative">
        <div className="absolute inset-0 bg-green-200 blur-3xl opacity-30 rounded-full scale-150" />
        <div className="relative w-32 h-32 bg-green-500 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl shadow-green-200">
          <CheckCircle className="w-16 h-16" />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="space-y-4 mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">Appointment <span className="text-green-500">Confirmed!</span></h1>
        <p className="text-lg text-slate-500 font-medium max-w-lg mx-auto leading-relaxed">
          Your health journey starts here. Your appointment at <span className="text-teal-600 font-bold uppercase tracking-widest text-xs">{booking.doctor?.name}</span> is confirmed.
        </p>
      </motion.div>

      {booking.orderId && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl shadow-slate-200/50 border border-slate-50 w-full mb-16 text-left relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-[4rem] -z-10 group-hover:scale-110 transition-transform duration-500" />

          <div className="flex flex-wrap gap-10 items-start mb-12">
            <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-2xl shadow-teal-100 flex-shrink-0">
              <img src={booking.doctor?.image} alt={booking.doctor?.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-600 mb-2">Unique ID: #{booking.orderId}</p>
              <h3 className="text-3xl font-black text-slate-900">{booking.doctor?.name}</h3>
              <p className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest">{booking.doctor?.specialization}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-slate-50">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-all shadow-sm group-hover:shadow-teal-100">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Appointment Date</p>
                <p className="font-black text-slate-800 uppercase tracking-widest text-sm">{booking.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-all shadow-sm group-hover:shadow-teal-100">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Appointment Slot</p>
                <p className="font-black text-slate-800 uppercase tracking-widest text-sm">{booking.slot}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group col-span-1 md:col-span-2">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-all shadow-sm group-hover:shadow-teal-100">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Clinic Address</p>
                <p className="font-black text-slate-800 uppercase tracking-widest text-sm">Banjara Hills, Road No 12, Hyderabad</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <div className="flex flex-col sm:flex-row gap-5 w-full max-w-lg mb-10">
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-500 hover:bg-green-600 text-white font-black py-6 rounded-3xl transition-all shadow-xl shadow-green-100 flex items-center justify-center gap-3 active:scale-95 uppercase tracking-widest text-xs">
          <MessageCircle className="w-5 h-5" /> WhatsApp Receipt
        </a>
        <Link href="/med" onClick={resetBooking} className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-black py-6 rounded-3xl transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 active:scale-95 uppercase tracking-widest text-xs">
          Back to Home <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="flex gap-8 justify-center grayscale opacity-50">
        {[Share2, Heart].map((Icon, i) => (
          <button key={i} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
            <Icon className="w-4 h-4" /> Save To Wallet
          </button>
        ))}
      </div>
    </div>
  );
}
