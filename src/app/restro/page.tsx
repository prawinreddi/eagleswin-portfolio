"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Clock, Bike, ChevronRight, Tag } from 'lucide-react';
import { menuItems, categories, formatPrice } from './data';
import { useCart } from './context/CartContext';
import DishImage from './components/DishImage';

function ItemCard({ item }: { item: typeof menuItems[0] }) {
  const { addItem, items } = useCart();
  const inCart = items.find(i => i.id === item.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <DishImage src={item.image} alt={item.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3 flex gap-1">
          <span className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center ${item.isVeg ? 'border-green-600 bg-white' : 'border-red-600 bg-white'}`}>
            <span className={`w-2.5 h-2.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></span>
          </span>
          {item.isBestseller && <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">Bestseller</span>}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-stone-900 mb-1">{item.name}</h3>
        <p className="text-stone-500 text-xs mb-3 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg text-stone-900">{formatPrice(item.price)}</span>
          <button
            onClick={() => addItem(item)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${inCart ? 'bg-green-500 text-white' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
          >
            {inCart ? `+${inCart.quantity} Added` : 'Add +'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function RestroHome() {
  const bestsellers = menuItems.filter(i => i.isBestseller);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop"
          alt="SpiceHub Restaurant"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">● Open Now</span>
              <span className="text-white/70 text-sm">Closes at 11 PM</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
              Taste the<br /><span className="text-orange-400">Real Spice.</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-lg">Authentic Hyderabadi cuisine, cooked fresh and delivered hot. No apps, no commissions — just great food.</p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.8 (2.1K reviews)
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                <Clock className="w-4 h-4 text-orange-400" /> 25–40 mins delivery
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                <Bike className="w-4 h-4 text-green-400" /> Free delivery above ₹500
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/restro/menu" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors text-lg">
                Order Now
              </Link>
              <Link href="/restro/menu" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-colors text-lg border border-white/30">
                View Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OFFER BANNER */}
      <div className="bg-orange-500 text-white py-3">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
          <span className="flex items-center gap-2"><Tag className="w-4 h-4" /> Use code <strong>FIRST50</strong> — 50% off your first order!</span>
          <span className="flex items-center gap-2"><Tag className="w-4 h-4" /> <strong>WELCOME</strong> — Flat ₹100 off above ₹500</span>
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">What are you craving?</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {categories.map(cat => (
              <Link key={cat.id} href={`/restro/menu?cat=${cat.id}`} className="flex flex-col items-center gap-2 p-4 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-colors group">
                <span className="text-3xl">{cat.emoji}</span>
                <span className="text-xs font-semibold text-stone-700 text-center">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="py-12 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">🔥 Bestsellers</h2>
            <Link href="/restro/menu" className="text-orange-500 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map(item => <ItemCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      {/* WHY ORDER DIRECT */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Why order directly? 🤔</h2>
          <p className="text-stone-400 mb-10">Skip the middlemen. 100% of your money comes to us — we pass the savings to you!</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { emoji: '💰', title: '0% Commission', desc: 'No Swiggy/Zomato fees. Better prices for you.' },
              { emoji: '⚡', title: 'Faster Delivery', desc: 'Direct kitchen-to-door. No relay stops.' },
              { emoji: '❤️', title: 'Loyalty Rewards', desc: 'Points on every order. Redeem on next visit.' },
            ].map(card => (
              <div key={card.title} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-4xl mb-3">{card.emoji}</div>
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-stone-400 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
