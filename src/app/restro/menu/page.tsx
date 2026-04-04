"use client";
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import { menuItems, categories, formatPrice } from '../data';
import { useCart } from '../context/CartContext';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import DishImage from '../components/DishImage';

function MenuContent() {
  const searchParams = useSearchParams();
  const defaultCat = searchParams.get('cat') || 'all';
  const [activeCategory, setActiveCategory] = useState(defaultCat);
  const [vegOnly, setVegOnly] = useState(false);
  const [search, setSearch] = useState('');
  const { addItem, items } = useCart();

  const filtered = useMemo(() => {
    return menuItems.filter(item => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const matchVeg = !vegOnly || item.isVeg;
      const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchVeg && matchSearch;
    });
  }, [activeCategory, vegOnly, search]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Search & Filter bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder="Search for dishes..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:border-orange-400 text-sm"
          />
        </div>
        <button
          onClick={() => setVegOnly(!vegOnly)}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl border-2 font-semibold text-sm transition-all ${vegOnly ? 'bg-green-500 border-green-500 text-white' : 'border-green-500 text-green-600 bg-white'}`}
        >
          <span className="w-3 h-3 rounded-sm border-2 border-current inline-block" />
          Veg Only
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
        <button
          onClick={() => setActiveCategory('all')}
          className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === 'all' ? 'bg-orange-500 text-white' : 'bg-white text-stone-600 hover:bg-orange-50 border border-stone-200'}`}
        >
          🍽️ All Items
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === cat.id ? 'bg-orange-500 text-white' : 'bg-white text-stone-600 hover:bg-orange-50 border border-stone-200'}`}
          >
            {cat.emoji} {cat.name}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-stone-400">No items found. Try a different filter.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => {
            const inCart = items.find(c => c.id === item.id);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <Link href={`/restro/item/${item.id}`} className="relative aspect-[16/9] overflow-hidden block">
                  <DishImage src={item.image} alt={item.name} className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 flex gap-1 items-center">
                    <span className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center bg-white ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                      <span className={`w-2.5 h-2.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></span>
                    </span>
                    {item.isBestseller && <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">Bestseller</span>}
                  </div>
                </Link>
                <div className="p-4 flex flex-col flex-grow">
                  <Link href={`/restro/item/${item.id}`}>
                    <h3 className="font-bold text-stone-900 hover:text-orange-500 transition-colors">{item.name}</h3>
                  </Link>
                  <p className="text-stone-500 text-xs mt-1 mb-4 line-clamp-2 flex-grow">{item.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-bold text-lg">{formatPrice(item.price)}</span>
                    {inCart ? (
                      <div className="flex items-center gap-2 bg-orange-50 rounded-full px-3 py-1.5 border border-orange-200">
                        <span className="text-orange-600 font-bold text-sm">{inCart.quantity} in cart</span>
                      </div>
                    ) : (
                      <button onClick={() => addItem(item)} className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-colors">
                        Add +
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function MenuPage() {
  return (
    <div className="bg-orange-50 min-h-screen">
      <div className="bg-white border-b border-orange-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-extrabold text-stone-900">Our Full Menu</h1>
          <p className="text-stone-500 mt-1">Fresh, hot, and made to order — just for you.</p>
        </div>
      </div>
      <Suspense fallback={<div className="p-20 text-center text-stone-400">Loading menu...</div>}>
        <MenuContent />
      </Suspense>
    </div>
  );
}
