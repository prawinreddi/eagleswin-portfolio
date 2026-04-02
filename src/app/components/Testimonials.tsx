'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    initial: 'R',
    content: 'Our revenue increased by 30% within just 3 months of launching the new site. Eagle$Win truly understands business growth and ROI.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Retail Entrepreneur',
    initial: 'P',
    content: 'A game-changer for our boutique. The e-commerce experience is so seamless that our online orders doubled in the first month!',
    rating: 5,
  },
  {
    name: 'Arun Mehta',
    role: 'Growth Consultant',
    initial: 'A',
    content: 'The custom dashboard UI has completely streamlined our operations. We\'ve reduced manual administrative work by over 70%!',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00e5ff]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#00e5ff]" />
            <span className="text-[#00e5ff] uppercase tracking-[0.3em] text-xs font-bold">Client Stories</span>
            <div className="h-[1px] w-12 bg-[#00e5ff]" />
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter">
            <span className="text-white">Proven </span>
            <span className="text-gradient-cyan italic">Results.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 60 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass-panel rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              <div className="absolute inset-0 rounded-2xl border border-[#00e5ff]/0 group-hover:border-[#00e5ff]/20 transition-all duration-500 pointer-events-none" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#00e5ff] fill-[#00e5ff]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-400 leading-relaxed text-sm mb-8 flex-grow">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.1)]">
                  <span className="text-[#00e5ff] font-black text-sm">{t.initial}</span>
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-gray-600 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
