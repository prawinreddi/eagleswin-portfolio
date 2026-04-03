'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Check, ChevronLeft, ChevronRight, Star, User, Phone, MapPin, Camera } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EliteBooking = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedTherapist, setSelectedTherapist] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const services = [
    { id: '1', title: 'Deep Tissue Massage', price: '$120', duration: '60 min', icon: '💆‍♀️', desc: 'Targets deep muscle tension and chronic pain with firm, therapeutic pressure.', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=90&w=1200' },
    { id: '2', title: 'Facial Rejuvenation', price: '$150', duration: '90 min', icon: '✨', desc: 'A luxury facial combining micro-needling and gua sha for a radiant glow.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=90&w=1200' },
    { id: '3', title: 'Hot Stone Therapy', price: '$180', duration: '75 min', icon: '🔥', desc: 'Volcanic basalt stones ease tension and restore energy flow throughout the body.', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=90&w=1200' },
    { id: '4', title: 'Aromatherapy Session', price: '$110', duration: '60 min', icon: '🌿', desc: 'Essential oil blends crafted to reduce stress, improve mood, and deepen relaxation.', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=90&w=1200' },
    { id: '5', title: 'Couples Retreat', price: '$240', duration: '90 min', icon: '💑', desc: 'A shared luxury experience in our private suite designed for two.', image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=90&w=1200' },
    { id: '6', title: 'CBD Recovery', price: '$160', duration: '75 min', icon: '🌱', desc: 'Full-spectrum CBD oil massage targeting inflammation and deep muscle recovery.', image: 'https://images.unsplash.com/photo-1591343395902-1adcb454c4e2?auto=format&fit=crop&q=90&w=1200' },
  ];

  const therapists = [
    { id: 1, name: 'Elena Nakamura', specialty: 'Deep Tissue & Hot Stone', rating: 5.0, reviews: 124, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600', available: true },
    { id: 2, name: 'Sophie Laurent', specialty: 'Aromatherapy & Facial', rating: 4.9, reviews: 98, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600', available: true },
    { id: 3, name: 'Mia Chen', specialty: 'CBD & Couples Retreat', rating: 4.9, reviews: 87, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600', available: false },
  ];

  const timeSlots = ['09:00 AM', '10:30 AM', '12:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'];

  const galleryImages = [
    'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=90&w=800',
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=90&w=800',
    'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=90&w=800',
    'https://images.unsplash.com/photo-1591343395902-1adcb454c4e2?auto=format&fit=crop&q=90&w=800',
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=90&w=800',
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=90&w=800',
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1D1D1D] selection:bg-[#E5DACE]" style={{ fontFamily: 'Georgia, serif' }}>

      {/* Meta Bar */}
      <div className="bg-[#FDFBF7] border-b border-[#F2EDE4]" style={{ fontFamily: 'sans-serif' }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
          <div><span className="text-black">CLIENT:</span> ELITE WELLNESS GROUP</div>
          <div><span className="text-black">INDUSTRY:</span> LUXURY HOSPITALITY</div>
          <div><span className="text-black">DELIVERABLES:</span> BOOKING & CRM</div>
          <div><span className="text-black">RESULTS:</span> 98% CLIENT SATISFACTION</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-[41px] w-full z-[101] bg-[#FDFBF7]/90 backdrop-blur-xl border-b border-[#F2EDE4]" style={{ fontFamily: 'sans-serif' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-light tracking-[0.2em] uppercase">ELITE<span className="font-bold">SPA</span></div>
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
            <a href="#services" className="hover:text-black transition-colors">Services</a>
            <a href="#therapists" className="hover:text-black transition-colors">Team</a>
            <a href="#gallery" className="hover:text-black transition-colors">Gallery</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
              ← Portfolio
            </Link>
            <button className="px-6 py-2.5 bg-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-end overflow-hidden" style={{ marginTop: '84px' }}>
        <Image
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=90&w=2560"
          alt="Elite Spa"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7]/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-gray-500 mb-6 block" style={{ fontFamily: 'sans-serif' }}>Est. 2015 · Beverly Hills</span>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.9] mb-8">
              Pure Serenity.<br />
              <span className="text-[#8B7355]">Redefined.</span>
            </h1>
            <p className="text-gray-600 max-w-sm leading-relaxed mb-10" style={{ fontFamily: 'sans-serif' }}>
              An oasis of calm in the heart of Beverly Hills. Our therapists hold international certifications and bring a decade of experience to every treatment.
            </p>
            <div className="flex gap-4" style={{ fontFamily: 'sans-serif' }}>
              <a href="#booking" className="px-10 py-5 bg-black text-white font-bold uppercase tracking-widest text-[11px] hover:bg-[#8B7355] transition-all flex items-center gap-3">
                Book a Treatment <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" className="px-8 py-5 border-2 border-black font-bold uppercase tracking-widest text-[11px] hover:bg-black hover:text-white transition-all">
                Our Services
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 right-12 flex gap-3" style={{ fontFamily: 'sans-serif' }}>
          {[{ n: '10+', l: 'Therapists' }, { n: '2k+', l: 'Happy Clients' }, { n: '4.9★', l: 'Rating' }].map((s, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm px-6 py-4 text-center border border-[#F2EDE4]">
              <div className="text-2xl font-black">{s.n}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#8B7355] mb-4 block" style={{ fontFamily: 'sans-serif' }}>Curated Treatments</span>
          <h2 className="text-5xl font-black italic tracking-tight">Our Signature Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group cursor-pointer bg-white border border-[#F2EDE4] hover:border-[#8B7355] hover:shadow-xl transition-all overflow-hidden"
              onClick={() => { setSelectedService(s); document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' }); setStep(1); setSelectedService(s); setTimeout(() => setStep(2), 100); }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-lg">{s.icon}</div>
              </div>
              <div className="p-6" style={{ fontFamily: 'sans-serif' }}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <div className="text-right">
                    <div className="font-black text-lg">{s.price}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{s.duration}</div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-[#8B7355] group-hover:gap-2 transition-all">
                  Book This Treatment <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking Flow */}
      <section id="booking" className="py-24 px-6 bg-[#F9F6F0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#8B7355] mb-4 block" style={{ fontFamily: 'sans-serif' }}>Reservation</span>
            <h2 className="text-5xl font-black italic">Book Your Experience</h2>
          </div>

          {/* Progress */}
          {!confirmed && (
            <div className="flex justify-center mb-16" style={{ fontFamily: 'sans-serif' }}>
              <div className="flex items-center gap-4">
                {['Service', 'Therapist', 'Schedule', 'Confirm'].map((label, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`flex flex-col items-center gap-2 transition-all ${step >= i + 1 ? '' : 'opacity-40'}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border-2 transition-all ${step > i + 1 ? 'bg-black border-black text-white' : step === i + 1 ? 'bg-white border-black text-black shadow-lg' : 'border-[#F2EDE4] bg-white text-gray-300'}`}>
                        {step > i + 1 ? <Check className="w-4 h-4" /> : i + 1}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
                    </div>
                    {i < 3 && <div className={`w-16 h-[2px] mb-6 transition-all ${step > i + 1 ? 'bg-black' : 'bg-[#F2EDE4]'}`} />}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Service */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h3 className="text-2xl font-light italic mb-8 text-center">Select your treatment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ fontFamily: 'sans-serif' }}>
                {services.map(s => (
                  <div
                    key={s.id}
                    onClick={() => { setSelectedService(s); setStep(2); }}
                    className={`group p-6 border-2 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 flex gap-5 ${selectedService?.id === s.id ? 'border-black bg-white' : 'border-[#F2EDE4] hover:border-black bg-white'}`}
                  >
                    <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden">
                      <Image src={s.image} alt={s.title} fill className="object-cover" unoptimized />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold">{s.title}</h3>
                        <span className="font-black">{s.price}</span>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed mb-2">{s.desc}</p>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400"><Clock className="w-3 h-3 inline mr-1" />{s.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Therapist */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center justify-between mb-8">
                <button onClick={() => setStep(1)} className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors text-sm font-bold uppercase tracking-widest" style={{ fontFamily: 'sans-serif' }}>
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <h3 className="text-2xl font-light italic">Choose your therapist</h3>
                <button onClick={() => setStep(3)} className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors text-[10px] font-bold uppercase tracking-widest" style={{ fontFamily: 'sans-serif' }}>
                  Skip <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ fontFamily: 'sans-serif' }}>
                {therapists.map(t => (
                  <div
                    key={t.id}
                    onClick={() => { if (t.available) { setSelectedTherapist(t); setStep(3); } }}
                    className={`relative p-6 border-2 text-center transition-all bg-white ${!t.available ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:border-black hover:-translate-y-1 hover:shadow-lg'} ${selectedTherapist?.id === t.id ? 'border-black' : 'border-[#F2EDE4]'}`}
                  >
                    {!t.available && <div className="absolute top-3 right-3 text-[9px] font-black uppercase tracking-widest bg-gray-200 px-2 py-0.5">Unavailable</div>}
                    <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-[#F2EDE4]">
                      <Image src={t.image} alt={t.name} fill className="object-cover" unoptimized />
                    </div>
                    <h3 className="font-bold text-base mb-1">{t.name}</h3>
                    <p className="text-gray-400 text-[11px] uppercase tracking-widest font-bold mb-3">{t.specialty}</p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex">{[...Array(5)].map((_, s) => <Star key={s} className={`w-3 h-3 ${s < Math.floor(t.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />)}</div>
                      <span className="text-xs font-bold">{t.rating} ({t.reviews})</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Schedule */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ fontFamily: 'sans-serif' }}>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <button onClick={() => setStep(2)} className="text-gray-400 hover:text-black"><ChevronLeft className="w-5 h-5" /></button>
                  <h3 className="text-2xl font-light" style={{ fontFamily: 'Georgia, serif' }}>Select Date</h3>
                </div>
                <div className="bg-white p-8 border border-[#F2EDE4] rounded-2xl shadow-sm">
                  <div className="flex justify-between items-center mb-8 px-2">
                    <span className="font-bold text-sm uppercase tracking-widest">April 2026</span>
                    <div className="flex gap-4">
                      <ChevronLeft className="w-4 h-4 text-gray-400 cursor-pointer hover:text-black" />
                      <ChevronRight className="w-4 h-4 text-gray-400 cursor-pointer hover:text-black" />
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-y-3 text-center">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                      <span key={d} className="text-[10px] font-bold text-gray-300 uppercase">{d}</span>
                    ))}
                    {[...Array(3)].map((_, i) => <div key={`empty-${i}`} />)}
                    {[...Array(30)].map((_, i) => {
                      const day = i + 1;
                      const isPast = day < 4;
                      return (
                        <div
                          key={day}
                          onClick={() => !isPast && setSelectedDate(day)}
                          className={`aspect-square flex items-center justify-center text-sm font-bold rounded-full cursor-pointer transition-all ${selectedDate === day ? 'bg-black text-white shadow-lg' : isPast ? 'text-gray-200 cursor-not-allowed' : 'hover:bg-black hover:text-white hover:scale-110'}`}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-8" style={{ fontFamily: 'Georgia, serif' }}>Available Times</h3>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {timeSlots.map(t => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`px-4 py-4 border-2 text-center text-sm font-bold tracking-widest transition-all ${selectedTime === t ? 'border-black bg-black text-white scale-105 shadow-lg' : 'border-[#F2EDE4] bg-white hover:border-black'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                {selectedDate && selectedTime && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    onClick={() => setStep(4)}
                    className="w-full py-5 bg-black text-white font-bold uppercase tracking-widest text-[11px] hover:bg-[#8B7355] transition-all flex items-center justify-center gap-2"
                  >
                    Confirm Details <ArrowRight className="w-4 h-4" />
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}

          {/* Step 4: Confirm */}
          {step === 4 && !confirmed && (
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl mx-auto" style={{ fontFamily: 'sans-serif' }}>
              <div className="flex items-center gap-3 mb-8">
                <button onClick={() => setStep(3)} className="text-gray-400 hover:text-black"><ChevronLeft className="w-5 h-5" /></button>
                <h3 className="text-2xl font-light" style={{ fontFamily: 'Georgia, serif' }}>Your Reservation</h3>
              </div>
              <div className="bg-white border border-[#F2EDE4] rounded-3xl p-8 shadow-xl">
                {selectedService?.image && (
                  <div className="relative h-40 rounded-2xl overflow-hidden mb-8">
                    <Image src={selectedService.image} alt={selectedService.title} fill className="object-cover" unoptimized />
                    <div className="absolute inset-0 bg-black/30 flex items-end p-5">
                      <div className="text-white">
                        <div className="font-black text-xl">{selectedService.title}</div>
                        <div className="text-white/70 text-xs font-bold uppercase tracking-widest">{selectedService.duration}</div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="space-y-4 mb-8 pb-8 border-b border-[#F2EDE4]">
                  {[
                    { label: 'Treatment', value: selectedService?.title },
                    { label: 'Therapist', value: selectedTherapist?.name || 'Any Available' },
                    { label: 'Date', value: `April ${selectedDate}, 2026` },
                    { label: 'Time', value: selectedTime },
                    { label: 'Duration', value: selectedService?.duration },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{label}</span>
                      <span className="font-bold text-sm">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-lg font-light italic">Total Price</span>
                  <span className="text-4xl font-black">{selectedService?.price}</span>
                </div>
                <button
                  onClick={() => setConfirmed(true)}
                  className="w-full py-5 bg-black text-white font-bold uppercase tracking-widest text-sm hover:bg-[#8B7355] transition-all"
                >
                  Confirm & Book Appointment
                </button>
                <button onClick={() => setStep(3)} className="w-full mt-3 py-3 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
                  Modify Schedule
                </button>
              </div>
            </motion.div>
          )}

          {/* Confirmation */}
          {confirmed && (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto text-center" style={{ fontFamily: 'sans-serif' }}>
              <div className="w-24 h-24 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Check className="w-12 h-12" />
              </div>
              <h2 className="text-4xl font-light italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>Booking Confirmed!</h2>
              <p className="text-gray-400 mb-10">A confirmation will be sent to your email. We look forward to welcoming you.</p>
              <div className="bg-white border border-[#F2EDE4] rounded-2xl p-6 text-left mb-8">
                <div className="space-y-3">
                  {[
                    { l: 'Treatment', v: selectedService?.title },
                    { l: 'Date', v: `April ${selectedDate}, 2026` },
                    { l: 'Time', v: selectedTime },
                    { l: 'Confirmation #', v: 'ES-' + Math.random().toString(36).substring(2, 8).toUpperCase() },
                  ].map(({ l, v }) => (
                    <div key={l} className="flex justify-between text-sm">
                      <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">{l}</span>
                      <span className="font-bold">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={() => { setStep(1); setSelectedService(null); setSelectedTherapist(null); setSelectedDate(null); setSelectedTime(null); setConfirmed(false); }} className="w-full py-4 border-2 border-black font-bold uppercase tracking-widest text-[11px] hover:bg-black hover:text-white transition-all">
                Book Another Treatment
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Therapists */}
      <section id="therapists" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#8B7355] mb-4 block" style={{ fontFamily: 'sans-serif' }}>Our Team</span>
          <h2 className="text-5xl font-black italic tracking-tight">Certified Specialists</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10" style={{ fontFamily: 'sans-serif' }}>
          {therapists.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group text-center">
              <div className="relative h-72 overflow-hidden mb-6">
                <Image src={t.image} alt={t.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
              </div>
              <h3 className="text-xl font-bold mb-1">{t.name}</h3>
              <p className="text-[#8B7355] text-[11px] font-bold uppercase tracking-widest mb-3">{t.specialty}</p>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex">{[...Array(5)].map((_, s) => <Star key={s} className={`w-3.5 h-3.5 ${s < Math.floor(t.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />)}</div>
                <span className="text-xs font-bold text-gray-500">{t.rating} · {t.reviews} reviews</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#8B7355] mb-4 block" style={{ fontFamily: 'sans-serif' }}>Our Space</span>
            <h2 className="text-4xl font-black italic">Inside Elite Spa</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative overflow-hidden group cursor-pointer ${i === 0 || i === 5 ? 'row-span-2' : ''}`}
                style={{ aspectRatio: i === 0 || i === 5 ? '1/2' : '1/1' }}
              >
                <Image src={img} alt={`Gallery ${i}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-20 px-6" style={{ fontFamily: 'sans-serif' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-2xl font-light tracking-[0.2em] uppercase mb-4">ELITE<span className="font-bold">SPA</span></div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">An oasis of calm in Beverly Hills. Certified luxury wellness for the discerning individual.</p>
          </div>
          <div>
            <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-gray-400">Visit Us</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[#8B7355]" /> 450 N Rodeo Drive, Beverly Hills</div>
              <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#8B7355]" /> +1 (310) 555-0190</div>
              <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-[#8B7355]" /> Mon–Sun: 9AM – 8PM</div>
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-gray-400">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Exclusive member offers and new treatment announcements.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-[#2A2A2A] border border-gray-700 px-4 py-2.5 text-sm w-full focus:outline-none focus:border-[#8B7355] text-white rounded" />
              <button className="bg-[#8B7355] p-2.5 rounded hover:bg-[#7A634A] transition-colors"><ArrowRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 text-center text-gray-600 text-[10px] uppercase tracking-widest font-bold">
          © 2026 Elite Spa & Wellness · Built for Eagle$Win Portfolio Demo
        </div>
      </footer>
    </div>
  );
};

export default EliteBooking;
