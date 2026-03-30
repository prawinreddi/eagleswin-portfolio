'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, User, Menu, X, ArrowRight, Star, Plus, Globe, MessageCircle, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TrendyBoutique = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const products = [
    {
      id: 1,
      name: 'Chronos Silver Edition',
      category: 'Accessories',
      price: '$1,250.00',
      image: '/projects/fashion-store/watch.png',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Noir Leather Handbag',
      category: 'Leather Goods',
      price: '$2,400.00',
      image: '/projects/fashion-store/bag.png',
      rating: 5.0
    }
  ];

  const addToCart = (product: any) => {
    setCartItems([...cartItems, product]);
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <div className="text-3xl font-black tracking-tighter uppercase">VOGUE</div>
            <div className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
              <a href="#" className="hover:text-black transition-colors">Spring 24</a>
              <a href="#" className="hover:text-black transition-colors">Women</a>
              <a href="#" className="hover:text-black transition-colors">Men</a>
              <a href="#" className="hover:text-black transition-colors">Our Story</a>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-400">
              <Search className="w-4 h-4" /> Search
            </div>
            <User className="w-5 h-5 cursor-pointer" />
            <div 
              className="relative cursor-pointer"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartItems.length}
                </span>
              )}
            </div>
            <Link href="/" className="px-4 py-2 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-gray-800 transition-all">
              Exit Demo
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] bg-[#F6F6F6] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-6 block">
              Spring / Summer Collection
            </span>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
              REDEFINE<br />
              <span className="text-gray-300">MINIMALISM</span>
            </h1>
            <p className="text-gray-500 max-w-sm mb-10 leading-relaxed font-medium">
              Discover our latest collection of curated luxury pieces designed for the modern individual who values quality over quantity.
            </p>
            <button className="px-10 py-5 bg-black text-white font-bold uppercase tracking-widest text-[12px] hover:px-12 transition-all flex items-center gap-3">
              Shop Now <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[80vh] w-full"
          >
            <Image 
              src="/projects/fashion-store/hero.png" 
              alt="Model" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20 gap-4">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-4 uppercase">Featured Pieces</h2>
            <p className="text-gray-400 uppercase tracking-widest text-[11px] font-bold">Timeless elegance, crafted with precision.</p>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
              <ArrowRight className="w-5 h-5 rotate-180" />
            </div>
            <div className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] bg-gray-50 mb-8 overflow-hidden">
                <Image 
                  src={p.image} 
                  alt={p.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <button 
                  onClick={() => addToCart(p)}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 px-8 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-widest shadow-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all"
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1 uppercase tracking-tight">{p.name}</h3>
                  <p className="text-gray-400 font-bold text-[11px] uppercase tracking-widest mb-2">{p.category}</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-black" />
                    <span className="text-[11px] font-bold">{p.rating} / 5.0</span>
                  </div>
                </div>
                <div className="text-xl font-black">{p.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cart Sidebar Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-[450px] bg-white z-[101] shadow-2xl p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <h3 className="text-2xl font-black uppercase tracking-tighter">Your Bag</h3>
                <X className="w-6 h-6 cursor-pointer" onClick={() => setIsCartOpen(false)} />
              </div>

              <div className="flex-1 overflow-y-auto space-y-8">
                {cartItems.length === 0 ? (
                  <div className="text-center py-20 text-gray-400 uppercase tracking-widest text-xs font-bold">
                    Your bag is empty
                  </div>
                ) : (
                  cartItems.map((item, idx) => (
                    <div key={idx} className="flex gap-6 items-center">
                      <div className="relative w-24 h-24 bg-gray-50 flex-shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold uppercase text-[13px] mb-1">{item.name}</h4>
                        <p className="text-gray-400 text-[11px] font-bold mb-2 uppercase">{item.category}</p>
                        <div className="flex justify-between items-center">
                          <span className="font-black">{item.price}</span>
                          <span className="text-xs underline cursor-pointer">Remove</span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-auto pt-10 border-t border-gray-100">
                <div className="flex justify-between mb-8">
                  <span className="font-bold uppercase text-xs tracking-widest text-gray-400">Total Est.</span>
                  <span className="text-2xl font-black">
                    ${cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '').replace(',', '')), 0).toLocaleString()}
                  </span>
                </div>
                <button className="w-full py-6 bg-black text-white font-bold uppercase tracking-widest text-[11px] hover:bg-gray-900 transition-all">
                  Proceed to Checkout
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-black text-white py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-4xl font-black mb-8 tracking-tighter uppercase">VOGUE</h3>
            <p className="text-gray-400 max-w-sm mb-12 uppercase tracking-widest text-[11px] leading-loose font-bold">
              Defining the future of minimalist fashion since 2024. Handcrafted pieces for the modern visionary.
            </p>
            <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2 cursor-pointer group">
                <Globe className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                <span className="underline">Global</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer group">
                <MessageCircle className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                <span className="underline">Social</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer group">
                <LinkIcon className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                <span className="underline">Connect</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase text-[12px] tracking-[0.3em] mb-8">Support</h4>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-bold">Returns</a>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-bold">Shipping</a>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-bold">FAQ</a>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase text-[12px] tracking-[0.3em] mb-8">Journal</h4>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-bold">Sustainability</a>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-bold">Craftsmanship</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrendyBoutique;
