'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Vikram Malhotra',
    role: 'MD, Horizon Realty Group',
    content: 'Our high-end property inquiries jumped by 34% within weeks. The digital portal experience is pure luxury and local buyers love it.',
    rating: 5,
    linkedin: 'https://linkedin.com/in/vikram-malhotra-realty',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Ananya Rao',
    role: 'Founder, Vogue Lifestyle Boutique',
    content: 'Finally, an e-commerce store that reflects the premium feel of our physical boutique. Our online orders have doubled since launch.',
    rating: 5,
    linkedin: 'https://linkedin.com/in/ananya-rao-fashion',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Dr. Sanjay Gupta',
    role: 'Director, Zenith Medical Center',
    content: 'The patient dashboard and automated booking fixed years of scheduling headaches. We save over 15 hours of admin work every week.',
    rating: 5,
    linkedin: 'https://linkedin.com/in/dr-sanjay-health',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
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
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.1)] overflow-hidden relative">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-gray-600 text-xs">{t.role}</div>
                  </div>
                </div>
                <a 
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#00e5ff] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
