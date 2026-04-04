import Link from 'next/link';
import { ChevronLeft, Star, Clock, Calendar, Check, Stethoscope, Heart, ArrowRight, MessageCircle, Info, ShieldCheck, Layers, Maximize, Home, Mail, Phone, MapPin, Globe, CreditCard, Share2 } from 'lucide-react';

export default function EstateFooter() {
  return (
    <footer className="bg-slate-900 pt-32 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <Link href="/estate" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-slate-900 shadow-2xl shadow-amber-500/20 group-hover:rotate-6 transition-transform">
                <Home className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">EstateSync</span>
            </Link>
            <p className="text-base leading-relaxed font-medium">
              EstateSync is Hyderabad's most trusted real estate platform. We connect smart buyers with verified premium properties. Zero brokerage, 100% Transparency.
            </p>
            <div className="flex gap-4">
              {[Globe, MessageCircle, Share2, Mail].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-2xl border border-slate-800 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition-all text-slate-500 hover:text-slate-900 shadow-lg">
                  <Icon className="w-5 h-5 flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-4 font-bold text-sm">
              {['All Properties', 'Featured Villas', 'Luxury Plots', 'Commercial Space'].map(link => (
                <li key={link} className="hover:text-amber-500 transition-colors cursor-pointer flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-slate-800 rounded-full group-hover:bg-amber-500 group-hover:scale-150 transition-all" /> {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-8">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em]">Top Locations</h4>
            <ul className="space-y-4 font-bold text-sm">
              {['Gachibowli', 'Tellapur', 'Kokapet', 'Financial District', 'Banjara Hills'].map(link => (
                <li key={link} className="hover:text-amber-500 transition-colors cursor-pointer flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-slate-800 rounded-full group-hover:bg-amber-500 group-hover:scale-150 transition-all" /> {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-8">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em]">Agent Support</h4>
            <ul className="space-y-6 font-bold text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0" />
                <span className="leading-relaxed">12th Floor, Cyber Towers, <br />Hitech City, Hyderabad, 500081</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-amber-500 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4 border-2 border-slate-800 p-5 rounded-[2rem] hover:border-amber-500 transition-all group">
                <CreditCard className="w-8 h-8 text-amber-500 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">EMI Calculator</p>
                  <p className="text-white hover:text-amber-500 cursor-pointer">Plan Your Budget</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
          <div className="flex gap-10">
            <p>© 2024 EstateSync Portal. All rights reserved.</p>
            <p className="hidden sm:block">Built with Next.js 14</p>
          </div>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
