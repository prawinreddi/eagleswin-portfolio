"use client";
import { useCart } from '../context/CartContext';
import { MapPin, Smartphone, Banknote, Lock, ChevronRight } from 'lucide-react';
import { formatPrice } from '../data';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { items, total, subtotal, discount, deliveryFee, clearCart, setOrderId } = useCart();
  const [payMethod, setPayMethod] = useState<'upi' | 'gpay' | 'cod'>('upi');
  const [processing, setProcessing] = useState(false);
  const router = useRouter();

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    const newOrderId = 'ORD' + Math.floor(Math.random() * 900000 + 100000);
    setOrderId(newOrderId);
    setTimeout(() => {
      router.push('/restro/success');
    }, 1800);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex items-center gap-2 text-xs text-stone-500 mb-8">
        <span>Cart</span><ChevronRight className="w-3 h-3" /><span className="text-orange-500 font-semibold">Checkout</span><ChevronRight className="w-3 h-3" /><span>Confirmation</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <form onSubmit={handleOrder} className="flex-1">
          {/* Address */}
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <h2 className="font-extrabold text-lg mb-5 flex items-center gap-2"><MapPin className="w-5 h-5 text-orange-500" /> Delivery Address</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required placeholder="Full Name" className="col-span-2 border border-stone-200 rounded-xl p-3 focus:outline-none focus:border-orange-400 text-sm" />
              <input required placeholder="Phone Number" className="border border-stone-200 rounded-xl p-3 focus:outline-none focus:border-orange-400 text-sm" type="tel" />
              <input required placeholder="Pincode" className="border border-stone-200 rounded-xl p-3 focus:outline-none focus:border-orange-400 text-sm" />
              <input required placeholder="Address Line 1" className="col-span-2 border border-stone-200 rounded-xl p-3 focus:outline-none focus:border-orange-400 text-sm" />
              <input placeholder="Landmark (Optional)" className="col-span-2 border border-stone-200 rounded-xl p-3 focus:outline-none focus:border-orange-400 text-sm" />
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <h2 className="font-extrabold text-lg mb-5 flex items-center gap-2"><Smartphone className="w-5 h-5 text-orange-500" /> Payment Method</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'upi', label: '📱 UPI / PhonePe', desc: 'Pay using any UPI app' },
                { id: 'gpay', label: '🟢 Google Pay', desc: 'Fast & secure via GPay' },
                { id: 'cod', label: '💵 Cash on Delivery', desc: 'Pay when delivered' },
              ].map(m => (
                <button key={m.id} type="button" onClick={() => setPayMethod(m.id as any)}
                  className={`flex flex-col items-start p-4 rounded-xl border-2 transition-all text-left ${payMethod === m.id ? 'border-orange-500 bg-orange-50' : 'border-stone-200 hover:border-orange-300'}`}>
                  <span className="font-bold text-sm">{m.label}</span>
                  <span className="text-xs text-stone-400 mt-1">{m.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <button type="submit" disabled={processing || items.length === 0}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-extrabold py-5 rounded-2xl transition-colors text-lg flex items-center justify-center gap-2">
            <Lock className="w-5 h-5" /> {processing ? 'Placing your order...' : `Pay ${formatPrice(total)}`}
          </button>
        </form>

        {/* Order summary */}
        <div className="lg:w-72 bg-white rounded-2xl p-6 shadow-sm self-start">
          <h3 className="font-extrabold mb-4">Order Summary</h3>
          <div className="flex flex-col gap-3 mb-4 max-h-64 overflow-y-auto">
            {items.map(item => (
              <div key={item.id} className="flex gap-3 border-b border-stone-100 pb-3">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-stone-500">x{item.quantity} · {formatPrice(item.price * item.quantity)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-sm text-stone-600 flex flex-col gap-2 border-t pt-4">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            {discount > 0 && <div className="flex justify-between text-green-600"><span>Discount</span><span>- {formatPrice(discount)}</span></div>}
            <div className="flex justify-between"><span>Delivery</span><span>{deliveryFee === 0 ? 'FREE' : formatPrice(deliveryFee)}</span></div>
          </div>
          <div className="flex justify-between font-extrabold text-lg mt-3 pt-3 border-t">
            <span>Total</span><span className="text-orange-500">{formatPrice(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
