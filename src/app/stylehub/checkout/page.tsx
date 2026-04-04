"use client";
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import { ChevronRight, Lock } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { items, cartTotal } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate Razorpay processing delay
    setTimeout(() => {
      window.location.href = '/stylehub/success';
    }, 1500);
  };

  return (
    <div className="container mx-auto px-6 py-12 md:py-24 max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Form Section */}
        <div className="w-full lg:w-3/5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-12">
            <Link href="/stylehub/shop" className="hover:text-black">Cart</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-black">Information & Shipping</span>
            <ChevronRight className="w-3 h-3" />
            <span>Payment</span>
          </div>

          <form onSubmit={handleCheckout}>
            <h2 className="text-xl font-medium mb-6">Contact Information</h2>
            <div className="mb-8">
              <input type="email" placeholder="Email Address" required className="w-full border border-stone-300 p-4 mb-4 focus:outline-none focus:border-black" />
            </div>

            <h2 className="text-xl font-medium mb-6">Shipping Address</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <input type="text" placeholder="First Name" required className="w-full border border-stone-300 p-4 focus:outline-none focus:border-black" />
              <input type="text" placeholder="Last Name" required className="w-full border border-stone-300 p-4 focus:outline-none focus:border-black" />
              <input type="text" placeholder="Address" required className="w-full border border-stone-300 p-4 col-span-2 focus:outline-none focus:border-black" />
              <input type="text" placeholder="City" required className="w-full border border-stone-300 p-4 focus:outline-none focus:border-black" />
              <input type="text" placeholder="Postal Code" required className="w-full border border-stone-300 p-4 focus:outline-none focus:border-black" />
              <input type="text" placeholder="Phone" required className="w-full border border-stone-300 p-4 col-span-2 focus:outline-none focus:border-black" />
            </div>

            <button 
              type="submit" 
              disabled={isProcessing || items.length === 0}
              className="w-full bg-black text-white py-5 flex items-center justify-center gap-2 uppercase tracking-widest text-sm font-medium hover:bg-stone-800 transition-colors disabled:opacity-50"
            >
              {isProcessing ? "Processing..." : "Continue to Payment"}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-2/5 bg-stone-50 p-8 border border-stone-100">
          <h2 className="text-xl font-medium mb-8">Order Summary</h2>
          
          <div className="flex flex-col gap-6 mb-8">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-4">
                <div className="relative w-16 h-20 bg-stone-200 border border-stone-200 flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-stone-500 rounded-full text-white text-[10px] flex items-center justify-center">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <p className="text-stone-500 text-xs mt-1">{item.size}</p>
                </div>
                <div className="text-sm font-medium">
                  {formatPrice(item.price * item.quantity)}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-stone-200 pt-6 flex flex-col gap-4">
            <div className="flex justify-between text-sm">
              <span className="text-stone-500">Subtotal</span>
              <span className="font-medium">{formatPrice(cartTotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-stone-500">Shipping</span>
              <span className="font-medium">Free</span>
            </div>
          </div>

          <div className="border-t border-stone-200 mt-6 pt-6 flex justify-between items-center">
            <span className="font-medium text-lg">Total</span>
            <span className="font-medium text-xl">{formatPrice(cartTotal)}</span>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-stone-400">
            <Lock className="w-3 h-3" /> Secure SSL Checkout
          </div>
        </div>

      </div>
    </div>
  );
}
