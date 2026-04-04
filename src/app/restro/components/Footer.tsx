"use client";
import Link from 'next/link';
import { ChefHat, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Spice<span className="text-orange-500">Hub</span></span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">Authentic Indian cuisine, delivered fresh to your door. Zero Swiggy commission — 100% your profit.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm text-stone-400">
              <li><Link href="/restro/menu" className="hover:text-orange-400 transition-colors">Full Menu</Link></li>
              <li><Link href="/restro/track" className="hover:text-orange-400 transition-colors">Track My Order</Link></li>
              <li><Link href="/restro/admin" className="hover:text-orange-400 transition-colors">Admin Panel</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-stone-400">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-orange-500" /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-500" /> MG Road, Hyderabad, TS</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-orange-500" /> Daily: 10 AM – 11 PM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-6 text-center text-xs text-stone-500">
          &copy; {new Date().getFullYear()} SpiceHub. All rights reserved. | Powered by Eagle$Win
        </div>
      </div>
    </footer>
  );
}
