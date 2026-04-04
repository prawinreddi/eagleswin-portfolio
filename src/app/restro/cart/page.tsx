"use client";
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, Tag, Bike, Store, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { formatPrice } from '../data';

export default function CartPage() {
  const { items, updateQty, removeItem, subtotal, discount, deliveryFee, total, coupon, couponMsg, applyCoupon, deliveryType, setDeliveryType } = useCart();
  const [couponInput, setCouponInput] = useState('');

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 text-stone-500">
        <ShoppingBag className="w-16 h-16 stroke-1 text-orange-300" />
        <h2 className="text-2xl font-bold text-stone-800">Your cart is empty</h2>
        <p>Add some items from our menu to get started!</p>
        <Link href="/restro/menu" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold mb-8">Your Cart 🛒</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Items */}
        <div className="flex-1">
          {/* Delivery Toggle */}
          <div className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
            <h3 className="font-bold mb-4 text-stone-800">Delivery Option</h3>
            <div className="grid grid-cols-2 gap-3">
              {(['delivery', 'pickup'] as const).map(type => (
                <button
                  key={type}
                  onClick={() => setDeliveryType(type)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 font-semibold text-sm transition-all ${deliveryType === type ? 'border-orange-500 bg-orange-50 text-orange-600' : 'border-stone-200 text-stone-600 hover:bg-stone-50'}`}
                >
                  {type === 'delivery' ? <Bike className="w-6 h-6" /> : <Store className="w-6 h-6" />}
                  {type === 'delivery' ? 'Home Delivery' : 'Self Pickup'}
                  {type === 'delivery' && <span className="text-xs text-stone-400">{subtotal > 500 ? 'FREE' : '+ ₹49'}</span>}
                  {type === 'pickup' && <span className="text-xs text-green-500">No delivery fee</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Items */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <AnimatePresence>
              {items.map(item => (
                <motion.div
                  key={item.id}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex gap-4 p-4 border-b border-stone-100 last:border-none"
                >
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-bold text-stone-900">{item.name}</h4>
                    <p className="text-orange-500 font-semibold">{formatPrice(item.price)}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center gap-2 bg-orange-50 rounded-full border border-orange-200 px-3 py-1">
                        <button onClick={() => updateQty(item.id, item.quantity - 1)} className="text-orange-500 hover:text-orange-700 font-bold"><Minus className="w-3 h-3" /></button>
                        <span className="font-bold w-5 text-center text-sm">{item.quantity}</span>
                        <button onClick={() => updateQty(item.id, item.quantity + 1)} className="text-orange-500 hover:text-orange-700 font-bold"><Plus className="w-3 h-3" /></button>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                  <div className="font-bold text-stone-900 text-right text-sm">{formatPrice(item.price * item.quantity)}</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Summary */}
        <div className="lg:w-80">
          {/* Coupon */}
          <div className="bg-white rounded-2xl p-5 shadow-sm mb-5">
            <h3 className="font-bold mb-4 text-stone-800 flex items-center gap-2"><Tag className="w-4 h-4 text-orange-500" /> Apply Coupon</h3>
            <div className="flex gap-2">
              <input
                value={couponInput}
                onChange={e => setCouponInput(e.target.value.toUpperCase())}
                placeholder="FIRST50"
                className="flex-1 border border-stone-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-orange-400 uppercase"
              />
              <button onClick={() => applyCoupon(couponInput)} className="bg-orange-500 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:bg-orange-600 transition-colors">Apply</button>
            </div>
            {couponMsg && <p className="text-xs mt-2 text-stone-600">{couponMsg}</p>}
            <div className="flex flex-wrap gap-2 mt-3">
              {['FIRST50', 'WELCOME', 'EAGLE20'].map(code => (
                <button key={code} onClick={() => { setCouponInput(code); applyCoupon(code); }} className="text-xs border border-dashed border-orange-300 text-orange-500 px-2 py-1 rounded-lg hover:bg-orange-50 transition-colors">{code}</button>
              ))}
            </div>
          </div>

          {/* Bill */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold mb-4 text-stone-800">Bill Summary</h3>
            <div className="flex flex-col gap-3 text-sm text-stone-600">
              <div className="flex justify-between"><span>Subtotal</span><span className="font-medium">{formatPrice(subtotal)}</span></div>
              {discount > 0 && <div className="flex justify-between text-green-600"><span>Discount ({coupon})</span><span>- {formatPrice(discount)}</span></div>}
              <div className="flex justify-between"><span>Delivery Fee</span><span className="font-medium">{deliveryFee === 0 ? <span className="text-green-500">FREE</span> : formatPrice(deliveryFee)}</span></div>
              <div className="flex justify-between"><span>Taxes & Charges</span><span className="font-medium">₹0</span></div>
            </div>
            <div className="border-t border-stone-200 mt-4 pt-4 flex justify-between font-extrabold text-lg">
              <span>Total</span><span className="text-orange-500">{formatPrice(total)}</span>
            </div>
            <Link href="/restro/checkout" className="mt-5 block w-full bg-orange-500 hover:bg-orange-600 text-white text-center font-bold py-4 rounded-xl transition-colors text-lg">
              Proceed to Checkout →
            </Link>
            <p className="text-xs text-stone-400 mt-3 text-center">🔒 100% Safe & Secure Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
