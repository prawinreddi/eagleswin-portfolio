"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function SuccessPage() {
  const { cartTotal, items } = useCart();
  
  // Clean cart after a delay to simulate order placement. In real world, do this on mount.
  // Actually we shouldn't wipe it immediately if we want to show order details, but let's keep it simple.

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="container mx-auto px-6 py-24 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 15, stiffness: 100 }}
        className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8"
      >
        <Check className="w-10 h-10 text-green-600" />
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-5xl font-medium tracking-tight mb-4"
      >
        Order Confirmed
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-stone-500 mb-8 max-w-md"
      >
        Thank you for your purchase! Your order #ORD-{Math.floor(Math.random() * 900000) + 100000} has been received and is being processed. 
        A confirmation email will be sent shortly.
      </motion.p>

      {items.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-stone-50 p-6 w-full max-w-md text-left mb-10 border border-stone-200"
        >
          <div className="flex justify-between font-medium mb-2 border-b border-stone-200 pb-4">
            <span>Amount Paid</span>
            <span>{formatPrice(cartTotal)}</span>
          </div>
          <div className="pt-2 text-sm text-stone-500 flex justify-between">
            <span>Payment Method</span>
            <span className="text-black">Prepaid (Razorpay)</span>
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link 
          href="/stylehub"
          className="border border-black px-10 py-4 text-sm font-medium uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
        >
          Continue Shopping
        </Link>
      </motion.div>
    </div>
  );
}
