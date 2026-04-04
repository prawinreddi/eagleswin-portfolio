'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Globe, Link as LinkIcon, MessageCircle, Mail, Award, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const SterlingBrand = () => {
  const works = [
    { title: 'Heritage Law', desc: 'Elite Legal Firm Identity', year: '2025', tag: 'Identity', img: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=90&w=1400' },
    { title: 'Prime Dental', desc: 'Patient Experience Design', year: '2025', tag: 'UX/UI', img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=90&w=1400' },
    { title: 'Oak Realtors', desc: 'Market Dominance Campaign', year: '2024', tag: 'Marketing', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=90&w=1400' },
    { title: 'Wellness Hub', desc: 'Personal Brand Architecture', year: '2024', tag: 'Strategy', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=90&w=1400' },
    { title: 'Apex Finance', desc: 'Boutique Wealth Identity', year: '2023', tag: 'Branding', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=90&w=1400' },
    { title: 'City Clinic', desc: 'Healthcare Digital Platform', year: '2023', tag: 'Digital', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=90&w=1400' },
  ];

  const experience = [
    { role: 'Founder & Creative Director', company: 'Eagle$Win Studio', period: '2023 — Present', location: 'Regional / Virtual' },
    { role: 'Senior Brand Strategist', company: 'Metro Growth Agency', period: '2020 — 2023', location: 'City Tech Hub' },
    { role: 'Lead Visual Designer', company: 'Boutique Creative Firm', period: '2017 — 2020', location: 'Regional HQ' },
    { role: 'Junior Brand Designer', company: 'Global Identity Corp', period: '2015 — 2017', location: 'Remote' },
  ];

  const awards = [
    'Cannes Lions Gold 2025', 'D&AD Black Pencil 2024', 'One Show Best of Show 2024', 'Clio Award Grand Prix 2023',
    'Webby Award Winner 2023', 'BIMA Award 2022', 'Fast Company Innovation 2022', 'Communication Arts 2021'
  ];

  const pressLogos = ['WIRED', 'EYE', 'DEZEEN', 'WALLPAPER*', 'MONOCLE', 'THE GUARDIAN'];

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1A1A1A] selection:bg-black selection:text-white" style={{ fontFamily: "'Georgia', serif" }}>

      {/* Meta Bar */}
      <div className="bg-[#FDFCF8] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400" style={{ fontFamily: 'sans-serif' }}>
          <div><span className="text-black">CLIENT:</span> LOCAL PROFESSIONALS</div>
          <div><span className="text-black">INDUSTRY:</span> EXECUTIVE BRANDING</div>
          <div><span className="text-black">DELIVERABLES:</span> AUTHORITY ARCHITECTURE</div>
          <div><span className="text-black">RESULTS:</span> 3x LEAD QUALITY GROWTH</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[101] mix-blend-difference" style={{ fontFamily: 'sans-serif' }}>
        <div className="max-w-7xl mx-auto px-10 py-7 flex justify-between items-center text-white">
          <div className="text-xl font-bold tracking-tighter italic">Sterling Brand</div>
          <div className="hidden md:flex gap-12 text-xs font-bold uppercase tracking-[0.2em]">
            <a href="#work" className="hover:line-through transition-all">Work</a>
            <a href="#about" className="hover:line-through transition-all">About</a>
            <a href="#press" className="hover:line-through transition-all">Press</a>
          </div>
          <Link href="/" className="px-4 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-all">Portfolio</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=90&w=2560"
            alt="prawinreddi"
            fill
            className="object-cover grayscale"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-[#FDFCF8]/80" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-black/5 -z-10 select-none whitespace-nowrap leading-none italic pointer-events-none">
          AUTHORITY
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-10 lg:px-24 py-40 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.5em] text-gray-400 mb-8 block" style={{ fontFamily: 'sans-serif' }}>
              Creative Director · Regional / Global
            </span>
            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter leading-[0.85] mb-10">
              Crafting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-400">Masterpieces</span> <br />
              for the Bold.
            </h1>
            <p className="text-gray-500 max-w-sm italic leading-relaxed mb-10" style={{ fontFamily: 'sans-serif' }}>
              Award-winning creative executive with 13+ years crafting high-impact brand identities, campaigns, and digital experiences for global brands.
            </p>
            <div className="flex gap-4" style={{ fontFamily: 'sans-serif' }}>
              <button className="px-10 py-5 bg-black text-white font-bold uppercase tracking-widest text-[11px] hover:bg-gray-800 transition-all flex items-center gap-3">
                View Work <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-5 border-2 border-black font-bold uppercase tracking-widest text-[11px] hover:bg-black hover:text-white transition-all">
                Get in Touch
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=90&w=1200"
                alt="Creative Direction"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-black text-white p-8">
              <div className="text-4xl font-black mb-1">13+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400" style={{ fontFamily: 'sans-serif' }}>Years Experience</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards Ticker */}
      <div className="bg-black text-white py-5 overflow-hidden" style={{ fontFamily: 'sans-serif' }}>
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...awards, ...awards].map((award, i) => (
            <div key={i} className="flex items-center gap-6">
              <Award className="w-4 h-4 text-yellow-400 flex-shrink-0" />
              <span className="text-xs font-bold uppercase tracking-widest">{award}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Work Grid */}
      <section id="work" className="py-32 px-10 lg:px-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.5em] text-gray-500 mb-4 block" style={{ fontFamily: 'sans-serif' }}>Selected Works</span>
              <h2 className="text-5xl font-black italic tracking-tight">Recent Projects</h2>
            </div>
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest" style={{ fontFamily: 'sans-serif' }}>
              All Projects <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#2A2A2A]">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />
                  <div className="absolute top-4 left-4" style={{ fontFamily: 'sans-serif' }}>
                    <span className="text-[9px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full border border-white/30">
                      {project.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <button className="w-full py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-yellow-400 transition-colors" style={{ fontFamily: 'sans-serif' }}>
                      View Case Study →
                    </button>
                  </div>
                </div>
                <div className="pt-6 pb-2 flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-black italic mb-1">{project.title}</h3>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold" style={{ fontFamily: 'sans-serif' }}>{project.desc}</p>
                  </div>
                  <div style={{ fontFamily: 'sans-serif' }}>
                    <span className="text-gray-600 text-xs font-bold">{project.year}</span>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors ml-2 inline" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Experience */}
      <section id="about" className="py-32 px-10 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.5em] text-gray-400 mb-6 block" style={{ fontFamily: 'sans-serif' }}>About</span>
            <h2 className="text-5xl md:text-6xl font-black italic tracking-tight mb-10 leading-tight">A Director<br />Who Delivers.</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              I craft brand experiences that don't just look beautiful — they convert. With 13 years shaping visual languages for Fortune 500s and cultural institutions alike, I bring both strategic depth and creative excellence.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              My approach begins by understanding the business problem. The creative solution follows. I'm equally comfortable in a strategy room as I am directing a film shoot.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-200" style={{ fontFamily: 'sans-serif' }}>
              {[{ n: '120+', l: 'Clients Served' }, { n: '45+', l: 'Awards Won' }, { n: '3', l: 'Continents' }].map((s, i) => (
                <div key={i}>
                  <div className="text-3xl font-black mb-1">{s.n}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ fontFamily: 'sans-serif' }}>
            <span className="text-xs font-bold uppercase tracking-[0.5em] text-gray-400 mb-8 block">Experience</span>
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-black group-hover:bg-yellow-400 transition-colors mt-1 flex-shrink-0" />
                    {i < experience.length - 1 && <div className="w-px flex-1 bg-gray-200 mt-2" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-bold text-lg mb-1">{exp.role}</h3>
                    <div className="text-black font-black text-sm mb-2">{exp.company}</div>
                    <div className="flex gap-4 text-gray-400 text-[11px] font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{exp.period}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{exp.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section id="press" className="py-20 px-10 lg:px-24 bg-[#F6F4F0]" style={{ fontFamily: 'sans-serif' }}>
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400 mb-10 block">As seen in</span>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:opacity-60 transition-opacity">
            {pressLogos.map((logo, i) => (
              <span key={i} className="text-2xl font-black tracking-tighter">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-10 lg:px-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tight mb-10 leading-tight">
              Have a project<br />in mind?
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto" style={{ fontFamily: 'sans-serif' }}>
              I take on a select number of new client projects per year. If you have a challenging brief, let's talk.
            </p>
            <a href="mailto:hello@eagleswin.studio" className="inline-flex items-center gap-3 text-2xl font-bold border-b-2 border-white hover:text-yellow-400 hover:border-yellow-400 transition-all pb-2">
              <Mail className="w-6 h-6" /> hello@eagleswin.studio
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-10 lg:px-24 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8" style={{ fontFamily: 'sans-serif' }}>
        <div className="text-2xl font-black italic tracking-tighter">E.W.</div>
        <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest">
          <a href="#" className="hover:underline text-gray-500 hover:text-black transition-colors">Instagram</a>
          <a href="#" className="hover:underline text-gray-500 hover:text-black transition-colors">LinkedIn</a>
          <a href="#" className="hover:underline text-gray-500 hover:text-black transition-colors">Twitter</a>
        </div>
        <div className="text-gray-400 text-[10px] uppercase font-bold italic tracking-widest">© 2026 Eagle$Win Portfolio Demo</div>
      </footer>
    </div>
  );
};

export default SterlingBrand;
