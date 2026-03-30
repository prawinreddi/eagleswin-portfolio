'use client';

import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, ArrowRight, Check, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const EliteBooking = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const services = [
    { id: '1', title: 'Deep Tissue Massage', price: '$120', duration: '60 min', icon: '💆‍♀️' },
    { id: '2', title: 'Facial Rejuvenation', price: '$150', duration: '90 min', icon: '✨' },
    { id: '3', title: 'Hot Stone Therapy', price: '$180', duration: '75 min', icon: '🔥' },
    { id: '4', title: 'Aromatherapy Session', price: '$110', duration: '60 min', icon: '🌿' },
  ];

  const timeSlots = ['09:00 AM', '10:30 AM', '12:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1D1D1D] font-sans selection:bg-[#E5DACE]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#FDFBF7]/80 backdrop-blur-xl border-b border-[#F2EDE4]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-2xl font-light tracking-[0.2em] uppercase">ELITE<span className="font-bold">SPA</span></div>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
              Exit Demo
            </Link>
            <button className="px-6 py-2 border border-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              Membership
            </button>
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-16 relative">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border-2 transition-all ${
                step >= s ? 'bg-black border-black text-white' : 'bg-white border-[#F2EDE4] text-gray-300'
              }`}>
                {step > s ? <Check className="w-4 h-4" /> : s}
              </div>
              <span className={`text-[10px] uppercase font-bold tracking-widest mt-3 ${step >= s ? 'text-black' : 'text-gray-300'}`}>
                {s === 1 ? 'Service' : s === 2 ? 'Schedule' : 'Confirm'}
              </span>
            </div>
          ))}
          <div className="absolute top-5 left-0 w-full h-[2px] bg-[#F2EDE4] -z-10" />
          <motion.div 
            className="absolute top-5 left-0 h-[2px] bg-black -z-10"
            initial={{ width: 0 }}
            animate={{ width: `${(step - 1) * 50}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Step Content */}
        <div className="min-h-[60vh]">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-3xl font-light mb-2 italic">Select your treatment</h2>
              <p className="text-gray-400 mb-10 font-medium">Choose from our curated wellness experiences.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((s) => (
                  <div 
                    key={s.id}
                    onClick={() => {
                        setSelectedService(s.title);
                        setStep(2);
                    }}
                    className={`group p-8 border-2 cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 ${
                        selectedService === s.title ? 'border-black bg-white' : 'border-[#F2EDE4] hover:border-black'
                    }`}
                  >
                    <div className="text-4xl mb-6">{s.icon}</div>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{s.title}</h3>
                        <span className="text-lg font-light text-gray-400 italic">{s.price}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                        <Clock className="w-4 h-4" /> {s.duration}
                        <div className="flex items-center gap-1 ml-auto text-black">
                            <Star className="w-3 h-3 fill-black" /> 5.0
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-light mb-8 italic flex items-center gap-2">
                    <button onClick={() => setStep(step-1)} className="hover:text-gray-400"><ChevronLeft className="w-6 h-6" /></button>
                    Select Date
                </h2>
                <div className="bg-white p-8 border border-[#F2EDE4] rounded-2xl shadow-sm">
                    <div className="flex justify-between items-center mb-8 px-2">
                        <span className="font-bold text-sm uppercase tracking-widest">October 2026</span>
                        <div className="flex gap-4">
                            <ChevronLeft className="w-4 h-4 text-gray-400 cursor-pointer" />
                            <ChevronRight className="w-4 h-4 text-gray-400 cursor-pointer" />
                        </div>
                    </div>
                    <div className="grid grid-cols-7 gap-y-4 text-center">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                            <span key={d} className="text-[10px] font-bold text-gray-300 uppercase">{d}</span>
                        ))}
                        {[...Array(31)].map((_, i) => (
                            <div 
                                key={i}
                                onClick={() => setSelectedDate(i + 1)}
                                className={`aspect-square flex items-center justify-center text-sm font-bold rounded-full cursor-pointer transition-all hover:bg-black hover:text-white ${
                                    selectedDate === i + 1 ? 'bg-black text-white shadow-xl' : i < 15 ? 'text-gray-300 cursor-not-allowed opacity-30' : ''
                                }`}
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-8 italic">Available Slots</h2>
                <div className="grid grid-cols-2 gap-4">
                    {timeSlots.map(t => (
                        <div 
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`px-6 py-4 border-2 text-center text-sm font-bold tracking-widest cursor-pointer transition-all ${
                                selectedTime === t ? 'border-black bg-white scale-105 shadow-md' : 'border-[#F2EDE4] hover:border-black'
                            }`}
                        >
                            {t}
                        </div>
                    ))}
                </div>
                {selectedDate && selectedTime && (
                    <motion.button 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        onClick={() => setStep(3)}
                        className="w-full mt-12 py-5 bg-black text-white font-bold uppercase tracking-widest text-[11px] hover:px-8 transition-all flex items-center justify-center gap-2"
                    >
                        Confirm Booking Details <ArrowRight className="w-4 h-4" />
                    </motion.button>
                )}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto text-center">
                <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-3xl">
                    <Check className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-light mb-4 italic">Almost there...</h2>
                <p className="text-gray-400 mb-12 font-medium">Review your treatment details before we finalize your appointment.</p>
                
                <div className="bg-white border border-[#F2EDE4] rounded-3xl p-10 text-left shadow-xl shadow-grey-100">
                    <div className="space-y-6 mb-10 pb-10 border-b border-[#F2EDE4]">
                        <div className="flex justify-between">
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Treatment</span>
                            <span className="font-bold italic">{selectedService}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Date</span>
                            <span className="font-bold">October {selectedDate}, 2026</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Time Slot</span>
                            <span className="font-bold">{selectedTime}</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-10">
                        <span className="text-xl font-light italic">Total Price</span>
                        <span className="text-4xl font-black">{services.find(s => s.title === selectedService)?.price}</span>
                    </div>
                    <button className="w-full py-6 bg-black text-white font-bold uppercase tracking-widest text-sm hover:shadow-2xl transition-all">
                        Book Appointment Now
                    </button>
                    <button onClick={() => setStep(2)} className="w-full mt-4 py-4 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
                        Modify Schedule
                    </button>
                </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="py-20 text-center opacity-40">
        <div className="text-sm font-light italic tracking-widest uppercase">Pure Serenity / Luxury Wellness</div>
      </div>
    </div>
  );
};

export default EliteBooking;
