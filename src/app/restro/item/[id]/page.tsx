"use client";
import { useParams, useRouter } from 'next/navigation';
import { menuItems, formatPrice } from '../../data';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { ChevronLeft, Minus, Plus, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ItemPage() {
  const { id } = useParams();
  const router = useRouter();
  const item = menuItems.find(i => i.id === Number(id));
  const { addItem, items, updateQty } = useCart();
  const [added, setAdded] = useState(false);

  if (!item) return <div className="p-20 text-center">Item not found. <button onClick={() => router.back()} className="text-orange-500 underline">Go back</button></div>;

  const cartItem = items.find(i => i.id === item.id);

  const handleAdd = () => {
    addItem(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button onClick={() => router.back()} className="flex items-center gap-1 text-stone-500 hover:text-orange-500 mb-6 transition-colors text-sm font-medium">
        <ChevronLeft className="w-4 h-4" /> Back to Menu
      </button>

      <div className="bg-white rounded-3xl overflow-hidden shadow-md">
        <div className="relative aspect-[16/7] w-full">
          <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className={`w-6 h-6 rounded-sm border-2 flex items-center justify-center bg-white ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
              <span className={`w-3 h-3 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></span>
            </span>
            {item.isBestseller && <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase">Bestseller</span>}
          </div>
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-extrabold mb-2">{item.name}</h1>
          <p className="text-stone-500 mb-6 leading-relaxed">{item.description}</p>
          <p className="text-2xl font-bold text-orange-500 mb-8">{formatPrice(item.price)}</p>

          {item.addons && item.addons.length > 0 && (
            <div className="mb-8">
              <h3 className="font-bold text-stone-800 mb-3">Add-ons (Optional)</h3>
              <div className="flex flex-wrap gap-3">
                {item.addons.map(addon => (
                  <div key={addon.name} className="border border-stone-200 rounded-xl px-4 py-2 text-sm text-stone-600">
                    {addon.name} <span className="text-orange-500 font-semibold">+{formatPrice(addon.price)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-4">
            {cartItem ? (
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="flex items-center gap-4 bg-orange-50 rounded-full px-4 py-3 border-2 border-orange-200">
                <button onClick={() => updateQty(item.id, cartItem.quantity - 1)} className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-bold text-lg w-8 text-center">{cartItem.quantity}</span>
                <button onClick={() => updateQty(item.id, cartItem.quantity + 1)} className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600">
                  <Plus className="w-4 h-4" />
                </button>
              </motion.div>
            ) : (
              <button onClick={handleAdd} className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all ${added ? 'bg-green-500' : 'bg-orange-500 hover:bg-orange-600'} text-white`}>
                {added ? <><Check className="w-5 h-5" /> Added!</> : 'Add to Cart'}
              </button>
            )}

            <button onClick={() => router.push('/restro/cart')} className="px-8 py-4 rounded-full font-bold text-lg border-2 border-orange-500 text-orange-500 hover:bg-orange-50 transition-colors">
              Go to Cart →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
