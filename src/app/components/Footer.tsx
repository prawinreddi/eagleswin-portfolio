'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

// Custom SVG Social Icons (Lucide-style: 2px stroke, etc.)
const Github = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    'Home',
    'Services',
    'Pricing',
    'Contact',
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full h-[600px] bg-[#00e5ff]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          {/* Brand & Mission */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-black tracking-tighter text-white mb-6">
                Eagle<span className="text-[#00e5ff]">$</span>Win
              </h3>
              <p className="text-gray-500 max-w-sm leading-relaxed text-sm mb-8">
                I build high-performance digital experiences that empower ambitious brands to dominate their market through design and performance.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, translateY: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 glass-panel rounded-xl flex items-center justify-center text-gray-500 hover:text-[#00e5ff] hover:border-[#00e5ff]/30 transition-all border-white/5"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Nav */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00e5ff] mb-8">
                Navigation
              </h4>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-500 hover:text-white transition-colors text-sm font-medium inline-block w-fit"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Contact Details */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00e5ff] mb-8">
                Office
              </h4>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 text-sm group">
                  <Mail className="w-4 h-4 text-gray-700 group-hover:text-[#00e5ff] transition-colors mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Email Me</span>
                    <span className="text-white font-medium">eagleswin1524@gmail.com</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-sm group">
                  <Phone className="w-4 h-4 text-gray-700 group-hover:text-[#00e5ff] transition-colors mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Call Anywhere</span>
                    <span className="text-white font-medium">+91 70754 57159</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-sm group">
                  <MapPin className="w-4 h-4 text-gray-700 group-hover:text-[#00e5ff] transition-colors mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Location</span>
                    <span className="text-white font-medium">Remote — India</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]"
          >
            &copy; {currentYear} Eagle$Win — Digital Studio.
          </motion.p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em]">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
