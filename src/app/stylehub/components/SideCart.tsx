"use client";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function SideCart() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, cartTotal } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-stone-200">
              <h2 className="text-lg font-medium tracking-tight">Your Bag ({items.length})</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-stone-500 gap-4">
                  <ShoppingBag className="w-12 h-12 stroke-1" />
                  <p>Your bag is empty.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 border border-black px-6 py-2 text-black uppercase tracking-widest text-xs font-medium hover:bg-black hover:text-white transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b border-stone-100 pb-6 group">
                    <div className="relative w-24 h-32 bg-stone-100 overflow-hidden flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-medium text-sm">{item.name}</h3>
                          <button onClick={() => removeItem(item.id)} className="text-stone-400 hover:text-red-500">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-stone-500 text-xs mt-1">{item.color} {item.size ? `| Size: ${item.size}` : ''}</p>
                        <p className="font-medium text-sm mt-2">{formatPrice(item.price)}</p>
                      </div>
                      
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center border border-stone-300">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-stone-100"><Minus className="w-3 h-3" /></button>
                          <span className="text-sm px-2 min-w-[2rem] text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-stone-100"><Plus className="w-3 h-3" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-stone-200 bg-stone-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-medium text-stone-600">Subtotal</span>
                  <span className="text-xl font-medium">{formatPrice(cartTotal)}</span>
                </div>
                <p className="text-xs text-stone-500 mb-6 text-center">Shipping & taxes calculated at checkout.</p>
                <Link 
                  href="/stylehub/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-black text-white py-4 flex items-center justify-center uppercase tracking-widest text-sm font-medium hover:bg-stone-800 transition-colors"
                >
                  Proceed to Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
