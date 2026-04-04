"use client";
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BookingProvider } from './context/BookingContext';

export default function MedLayout({ children }: { children: React.ReactNode }) {
  return (
    <BookingProvider>
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </BookingProvider>
  );
}
