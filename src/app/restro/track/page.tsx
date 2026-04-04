"use client";
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Bike, Package, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data';

const steps = [
  { icon: CheckCircle, label: 'Order Accepted', desc: 'Restaurant confirmed your order', color: 'text-green-500', done: true },
  { icon: Clock, label: 'Preparing', desc: 'Chef is cooking your food fresh', color: 'text-orange-500', done: true, active: true },
  { icon: Package, label: 'Ready for Pickup', desc: 'Packed and ready for dispatch', color: 'text-blue-500', done: false },
  { icon: Bike, label: 'Out for Delivery', desc: 'Rider is on the way to you', color: 'text-purple-500', done: false },
  { icon: MapPin, label: 'Delivered', desc: 'Enjoy your meal! ❤️', color: 'text-green-600', done: false },
];

export default function TrackPage() {
  const { orderId, total } = useCart();

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-extrabold mb-2">Track Your Order 📍</h1>
      <p className="text-stone-500 mb-8">Live status updates for your order.</p>

      {orderId && (
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 mb-8 flex justify-between">
          <div>
            <p className="text-xs text-stone-500">Order ID</p>
            <p className="font-bold text-orange-600">#{orderId}</p>
          </div>
          <div>
            <p className="text-xs text-stone-500">Amount</p>
            <p className="font-bold">{formatPrice(total)}</p>
          </div>
          <div>
            <p className="text-xs text-stone-500">Est. Time</p>
            <p className="font-bold text-green-600">30–40 min</p>
          </div>
        </div>
      )}

      {!orderId && (
        <div className="bg-stone-100 rounded-2xl p-4 mb-8 text-center text-stone-500 text-sm">
          No active order. Place an order first to track it here.
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm p-6 relative">
        <div className="absolute left-[42px] top-16 bottom-10 w-0.5 bg-stone-100" />
        <div className="flex flex-col gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-5"
              >
                <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${step.done ? 'bg-orange-50 border-2 border-orange-400' : 'bg-stone-100 border-2 border-stone-200'}`}>
                  <Icon className={`w-5 h-5 ${step.done ? step.color : 'text-stone-300'}`} />
                  {step.active && (
                    <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full border-2 border-white" />
                  )}
                </div>
                <div className={`pt-1 ${!step.done ? 'opacity-40' : ''}`}>
                  <p className={`font-bold ${step.active ? 'text-orange-500' : ''}`}>{step.label}</p>
                  <p className="text-stone-400 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
