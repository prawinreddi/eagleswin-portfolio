"use client";
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { formatPrice } from '../data';

export default function SuccessPage() {
  const { orderId, total, items, clearCart } = useCart();

  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', damping: 12 }}>
        <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <h1 className="text-3xl font-extrabold text-stone-900 mb-2">Order Placed! 🎉</h1>
        <p className="text-stone-500 mb-6">Your order has been received. We're preparing it fresh for you!</p>

        {orderId && (
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-6 text-left">
            <div className="flex justify-between mb-2">
              <span className="text-stone-500 text-sm">Order ID</span>
              <span className="font-bold text-orange-600">#{orderId}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-stone-500 text-sm">Amount Paid</span>
              <span className="font-bold">{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500 text-sm">Estimated Delivery</span>
              <span className="font-bold text-green-600">30–45 mins</span>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3 mb-8">
          <Link href="/restro/track" className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
            Track My Order <ChevronRight className="w-5 h-5" />
          </Link>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-full bg-green-500 text-white font-bold py-4 rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" /> WhatsApp Us
          </a>
          <Link href="/restro" onClick={clearCart} className="w-full border-2 border-stone-200 text-stone-700 font-bold py-4 rounded-xl hover:bg-stone-50 transition-colors">
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
