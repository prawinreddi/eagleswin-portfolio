"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Doctor } from '../data';

interface Booking {
  doctor: Doctor | null;
  slot: string | null;
  date: string | null;
  patientDetails: { name: string; age: string; phone: string; reason: string } | null;
  orderId: string | null;
}

interface BookingContextType {
  booking: Booking;
  setDoctor: (doctor: Doctor) => void;
  setSlot: (slot: string, date: string) => void;
  setPatient: (details: { name: string; age: string; phone: string; reason: string }) => void;
  confirmBooking: () => string;
  resetBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [booking, setBooking] = useState<Booking>({
    doctor: null,
    slot: null,
    date: null,
    patientDetails: null,
    orderId: null
  });

  const setDoctor = (doctor: Doctor) => setBooking(prev => ({ ...prev, doctor }));
  const setSlot = (slot: string, date: string) => setBooking(prev => ({ ...prev, slot, date }));
  const setPatient = (details: { name: string; age: string; phone: string; reason: string }) => setBooking(prev => ({ ...prev, patientDetails: details }));

  const confirmBooking = () => {
    const newId = 'APT' + Math.floor(Math.random() * 900000 + 100000);
    setBooking(prev => ({ ...prev, orderId: newId }));
    return newId;
  };

  const resetBooking = () => setBooking({
    doctor: null,
    slot: null,
    date: null,
    patientDetails: null,
    orderId: null
  });

  return (
    <BookingContext.Provider value={{ booking, setDoctor, setSlot, setPatient, confirmBooking, resetBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBooking must be used within a BookingProvider');
  return context;
}
