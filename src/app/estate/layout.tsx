"use client";
import React from 'react';
import { EstateProvider } from './context/EstateContext';
import { ShieldCheck, Star, Clock, Home, TrendingUp, Users, ArrowRight, MessageCircle, Heart, BarChart, CreditCard, Layers, Maximize, MapPin, BookOpen, Shield, Search } from 'lucide-react';
import Navbar from './components/Navbar';
import EstateFooter from './components/Footer';

export default function EstateLayout({ children }: { children: React.ReactNode }) {
  return (
    <EstateProvider>
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <EstateFooter />
      </div>
    </EstateProvider>
  );
}
