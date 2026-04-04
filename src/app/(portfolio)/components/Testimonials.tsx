"use client";

import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: "Sandeep Rao",
    role: "Proprietor, StyleHub Textiles",
    content: "StyleHub completely transformed our retail business. Our customers are now ordering directly via Instagram. Razorpay and WhatsApp alerts have made our operations effortless. A game-changer for retailers!",
    image: "https://i.pravatar.cc/150?u=rao",
    project: "E-Commerce",
    rating: 5
  },
  {
    name: "Dr. Anirudh Varma",
    role: "Chief Dentist, Varma Dental Clinic",
    content: "The MedSync booking system has significantly reduced our phone workload. Patients now book their preferred slots directly. Automatic WhatsApp reminders decreased 'no-shows' by 80%. Highly recommended!",
    image: "https://i.pravatar.cc/150?u=anirudh",
    project: "Healthcare",
    rating: 5
  },
  {
    name: "Kiran Kumar",
    role: "Director, KKR Villa Projects",
    content: "Using EstateSync has drastically improved our property lead quality. The clear floor plans and integrated Maps provide a premium experience that our clients love. Our sales team is much more efficient now.",
    image: "https://i.pravatar.cc/150?u=kiran",
    project: "Real Estate",
    rating: 5
  },
  {
    name: "Mohammad Arif",
    role: "Wholesale Hardware Distributor",
    content: "StockSync tracks our warehouse inventory perfectly. The WhatsApp low-stock alert feature is brilliant. We haven't faced an 'Out of Stock' situation since the day we started using this dashboard.",
    image: "https://i.pravatar.cc/150?u=arif",
    project: "Inventory SaaS",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-indigo-500" />
            <span className="text-indigo-500 uppercase tracking-[0.3em] text-xs font-bold font-sans">Business Success</span>
            <div className="h-[1px] w-12 bg-indigo-500" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter">
            Words from Real <span className="text-gradient-indigo italic">Partners.</span> 
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-10 rounded-[3rem] relative group border-white/5 hover:border-indigo-500/30 transition-all duration-500"
            >
              <div className="absolute top-10 right-10 text-indigo-500 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote size={60} />
              </div>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-indigo-500/30">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{t.name}</h4>
                  <p className="text-indigo-400 text-sm font-medium">{t.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-indigo-500 text-indigo-500" />
                ))}
              </div>

              <p className="text-stone-400 leading-relaxed text-lg italic mb-8">
                "{t.content}"
              </p>

              <div className="flex items-center gap-2 pt-6 border-t border-white/5">
                <CheckCircle2 size={16} className="text-green-500" />
                <span className="text-xs font-black uppercase tracking-widest text-stone-500">Verified Client • {t.project} Project</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
