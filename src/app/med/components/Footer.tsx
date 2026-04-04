import Link from 'next/link';
import { Activity, Mail, Phone, MapPin, Globe, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/med" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:bg-teal-400 transition-colors">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">MedSync</span>
                <p className="text-[10px] text-teal-400 font-bold uppercase tracking-wider -mt-1">Healthcare Solutions</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Innovative healthcare solutions for modern clinics. Simplifying appointments and enhancing patient care through technology.
            </p>
            <div className="flex gap-4">
              {[Globe, Share2, Mail].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-teal-500 hover:border-teal-500 transition-all text-slate-400 hover:text-white">
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Services</h4>
            <ul className="space-y-4 text-sm">
              {['Home Consultation', 'Video Consultation', 'Emergency Care', 'Pathology Tests'].map(link => (
                <li key={link} className="hover:text-teal-400 transition-colors cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>

          {/* Clinics */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Clinics</h4>
            <ul className="space-y-4 text-sm">
              {['General Physicians', 'Dental Clinics', 'Eye Centers', 'Skin Centers'].map(link => (
                <li key={link} className="hover:text-teal-400 transition-colors cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Support</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-teal-500" /> +91 98765 43210</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-teal-500" /> support@medsync.com</li>
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-teal-500 mt-0.5" /> Banjara Hills, Hyderabad,<br />TS 500034</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
          <p>© 2026 MedSync. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
