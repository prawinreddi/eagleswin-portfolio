'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    'Home',
    'Services',
    'Projects',
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
