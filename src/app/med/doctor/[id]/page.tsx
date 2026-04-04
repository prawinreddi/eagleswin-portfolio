"use client";
import { useParams, useRouter } from 'next/navigation';
import { doctors, formatCurrency } from '../../data';
import { useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { ChevronLeft, Star, MapPin, Clock, Calendar, Check, Stethoscope, Share2, Heart, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DoctorPage() {
  const { id } = useParams();
  const router = useRouter();
  const doctor = doctors.find(d => d.id === Number(id));
  const { setDoctor, setSlot, booking } = useBooking();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('Today');

  if (!doctor) return <div className="p-20 text-center">Doctor not found. <button onClick={() => router.back()} className="text-teal-600 underline">Go back</button></div>;

  const handleBooking = () => {
    if (!selectedSlot) return alert('Please select a time slot first!');
    setDoctor(doctor);
    setSlot(selectedSlot, selectedDate);
    router.push(`/med/book/${doctor.id}`);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <button onClick={() => router.back()} className="flex items-center gap-1.5 text-slate-500 hover:text-teal-600 mb-8 transition-colors text-sm font-bold uppercase tracking-widest">
          <ChevronLeft className="w-4 h-4" /> Back to Search
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT: Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-50 border-b-8 border-b-teal-500">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="relative w-40 h-44 md:w-56 md:h-64 rounded-[2rem] overflow-hidden shadow-2xl shadow-teal-100 flex-shrink-0">
                  <img src={doctor.image} alt={doctor.name} className="object-cover object-top w-full h-full" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-teal-100">Verified Professional</div>
                    <div className="flex gap-3">
                      <button className="p-3 text-slate-400 hover:text-teal-500 transition-colors bg-slate-50 rounded-xl"><Share2 className="w-4 h-4" /></button>
                      <button className="p-3 text-pink-400 hover:text-pink-500 transition-colors bg-pink-50 rounded-xl"><Heart className="w-4 h-4" /></button>
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 leading-tight">{doctor.name}</h1>
                  <p className="text-teal-600 font-black text-xs md:text-sm uppercase tracking-[0.2em] mb-6">{doctor.specialization}</p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase mb-1">Quals</p>
                      <p className="text-sm font-black text-slate-700 uppercase">{doctor.qualification}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase mb-1">Exp</p>
                      <p className="text-sm font-black text-slate-700 uppercase">{doctor.experience}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase mb-1">Fee</p>
                      <p className="text-sm font-black text-slate-700 uppercase">{formatCurrency(doctor.fee)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-50">
              <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3"><Stethoscope className="w-6 h-6 text-teal-500" /> Professional Bio</h3>
              <p className="text-slate-500 leading-loose font-medium mb-10">{doctor.about}</p>

              <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3"><Clock className="w-6 h-6 text-teal-500" /> Availability Timings</h3>
              <div className="flex items-center gap-2 bg-slate-50 p-6 rounded-3xl border border-slate-100/50 w-fit">
                <Calendar className="w-5 h-5 text-teal-600" />
                <span className="font-black text-slate-700 uppercase tracking-wide text-xs">{doctor.timings}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Slot Booking */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[3rem] p-8 md:p-10 shadow-2xl shadow-teal-500/10 border-4 border-teal-50 sticky top-28 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-[4rem] -z-10 transition-all duration-500 group-hover:scale-125" />

              <h3 className="text-2xl font-black text-slate-900 mb-8 border-b-2 border-slate-50 pb-6 uppercase tracking-tighter">Choose Your Slot</h3>

              <div className="flex gap-2 mb-8 overflow-x-auto pb-4 scrollbar-none">
                {['Today', 'Tomorrow', 'Oct 15', 'Oct 16'].map(d => (
                  <button key={d} onClick={() => setSelectedDate(d)} className={`flex-shrink-0 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${selectedDate === d ? 'bg-teal-500 text-white shadow-lg' : 'bg-slate-50 text-slate-400 hover:text-slate-700'}`}>
                    {d}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-10">
                {doctor.slots.map(s => (
                  <button
                    key={s}
                    onClick={() => setSelectedSlot(s)}
                    className={`px-4 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all text-center border-2 ${selectedSlot === s ? 'border-teal-500 bg-teal-50 text-teal-700' : 'border-slate-50 bg-slate-50/50 text-slate-500 hover:border-teal-200'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <button
                onClick={handleBooking}
                disabled={!selectedSlot}
                className="w-full bg-teal-500 hover:bg-teal-600 disabled:opacity-50 text-white font-black py-6 rounded-3xl transition-all shadow-xl shadow-teal-100 flex items-center justify-center gap-3 mb-6 active:scale-95 uppercase tracking-[0.2em] text-xs"
              >
                Proceed To Details <ChevronRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 justify-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <Check className="w-4 h-4 text-green-500" /> Instant Confirmation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
