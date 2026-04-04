'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  ChevronRight, 
  Filter, 
  Star, 
  ArrowLeft, 
  CheckCircle2, 
  X, 
  Layout, 
  MessageCircle,
  Truck,
  ShieldCheck,
  CreditCard,
  Plus,
  Minus
} from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// --- TYPES ---
type ViewState = 'home' | 'shop' | 'product' | 'checkout' | 'success';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  colors: string[];
  sizes: string[];
}

// --- DATA ---
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Midnight Tech-Knit Hoodie',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600',
    category: 'Hoodies',
    rating: 4.8,
    colors: ['#000000', '#2d3436', '#636e72'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 2,
    name: 'Aero-Fit Training Tee',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=600',
    category: 'T-Shirts',
    rating: 4.9,
    colors: ['#ffffff', '#0984e3', '#d63031'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3,
    name: 'Urban Cargo Joggers',
    price: 3299,
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=600',
    category: 'Bottoms',
    rating: 4.7,
    colors: ['#2d3436', '#00b894'],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: 4,
    name: 'StyleHub Essential Cap',
    price: 899,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=600',
    category: 'Accessories',
    rating: 4.5,
    colors: ['#000000', '#fdcb6e'],
    sizes: ['One Size']
  }
];

export default function StyleHubDemo() {
  const [view, setView] = useState<ViewState>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<{product: Product, size: string, quantity: number}[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  // Helper: Format Currency
  const fmt = (val: number) => `₹${val.toLocaleString('en-IN')}`;

  // Helper: Open Product
  const openProduct = (p: Product) => {
    setSelectedProduct(p);
    setView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper: Add to Cart
  const addToCart = (product: Product, size: string) => {
    setCart([...cart, { product, size, quantity: 1 }]);
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#00e5ff] selection:text-black">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div 
          onClick={() => setView('home')}
          className="text-2xl font-black tracking-tighter flex items-center gap-1 cursor-pointer"
        >
          STYLE<span className="text-[#00e5ff]">HUB</span>
        </div>
        
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#00e5ff] text-black text-[10px] font-bold rounded-full flex items-center justify-center translate-x-1/4 -translate-y-1/4">
                {cart.length}
              </span>
            )}
          </button>
          <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors border border-white/10 px-3 py-1 rounded-full">
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="pt-24 pb-32">
        <AnimatePresence mode="wait">
          
          {/* VIEW: HOME */}
          {view === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-6 space-y-24"
            >
              {/* Hero Banner */}
              <section className="relative rounded-3xl overflow-hidden h-[70vh] flex items-center px-12 group">
                <Image 
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=2000"
                  alt="Hero"
                  fill
                  className="object-cover brightness-[0.4] group-hover:scale-105 transition-transform duration-[3000ms]"
                />
                <div className="relative z-10 max-w-2xl">
                  <motion.h1 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none"
                  >
                    THE FUTURE OF <span className="text-gradient-cyan">STREETWEAR.</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-gray-400 mb-8 max-w-lg"
                  >
                    Experience the perfect blend of performance fabrics and urban aesthetics. Built for the modern move.
                  </motion.p>
                  <motion.button
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => setView('shop')}
                    className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-[#00e5ff] transition-all"
                  >
                    Shop Collection <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </section>

              {/* Collections Grid */}
              <section>
                <div className="flex justify-between items-end mb-12">
                  <div>
                    <span className="text-[#00e5ff] uppercase tracking-[0.4em] text-[10px] font-black mb-4 block underline decoration-2 underline-offset-8">Featured Items</span>
                    <h2 className="text-4xl font-black tracking-tighter">New Arrivals</h2>
                  </div>
                  <button onClick={() => setView('shop')} className="text-sm font-bold text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                    View All <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {PRODUCTS.map((p) => (
                    <ProductCard key={p.id} product={p} onClick={() => openProduct(p)} />
                  ))}
                </div>
              </section>

              {/* Brand Story */}
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center glass-panel rounded-[40px] p-12">
                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80&w=1000"
                    alt="Founder"
                    fill
                    className="object-cover filter grayscale"
                  />
                </div>
                <div>
                  <Layout className="w-12 h-12 text-[#00e5ff] mb-8" />
                  <h3 className="text-4xl font-black tracking-tighter mb-6">Built by Community, Defined by Style.</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Started as an Instagram passion project, StyleHub has grown into a movement. We believe clothing is more than fabric—it's your digital identity in the real world.
                  </p>
                  <div className="flex gap-4">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold">12K+</span>
                      <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Happy Customers</span>
                    </div>
                    <div className="w-[1px] bg-white/10" />
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold">4.9/5</span>
                      <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Client Rating</span>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* VIEW: SHOP */}
          {view === 'shop' && (
            <motion.div 
               key="shop"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0 }}
               className="px-6"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                <div>
                  <h2 className="text-5xl font-black tracking-tighter mb-2">Shop All</h2>
                  <p className="text-gray-500">Showing {PRODUCTS.length} functional results</p>
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
                  {['All', 'Hoodies', 'T-Shirts', 'Bottoms', 'Accessories'].map((cat) => (
                    <button 
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-6 py-2 rounded-full border text-xs font-bold transition-all whitespace-nowrap ${
                        activeCategory === cat ? 'bg-[#00e5ff] border-[#00e5ff] text-black shadow-[0_0_20px_rgba(0,229,255,0.3)]' : 'border-white/10 text-gray-500 hover:border-white/30'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                  <button className="p-2 border border-white/10 rounded-full text-gray-500 ml-4">
                    <Filter className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {PRODUCTS.filter(p => activeCategory === 'All' || p.category === activeCategory).map((p) => (
                  <ProductCard key={p.id} product={p} onClick={() => openProduct(p)} />
                ))}
              </div>
            </motion.div>
          )}

          {/* VIEW: PRODUCT DETAIL */}
          {view === 'product' && selectedProduct && (
            <motion.div 
              key="product"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-6 max-w-7xl mx-auto"
            >
              <button 
                onClick={() => setView('shop')}
                className="flex items-center gap-2 text-gray-500 hover:text-white mb-8 group transition-colors"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Shop
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Image Gallery Mockup */}
                <div className="space-y-4">
                  <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-white/5">
                    <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-cover" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="aspect-square rounded-2xl bg-white/5 overflow-hidden filter brightness-50 opacity-50 cursor-not-allowed border border-white/5" />
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col">
                  <div className="mb-8">
                    <div className="flex items-center gap-2 text-yellow-400 mb-4">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-bold text-white">{selectedProduct.rating}</span>
                      <span className="text-gray-500 text-xs">(128 reviews)</span>
                    </div>
                    <h1 className="text-5xl font-black tracking-tighter mb-4 leading-none">{selectedProduct.name}</h1>
                    <p className="text-3xl font-bold text-[#00e5ff]">{fmt(selectedProduct.price)}</p>
                  </div>

                  <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                    Designed for movement and engineered for style. This piece features our signature tech-knit fabric that provides maximum comfort with a premium structured look.
                  </p>

                  <div className="space-y-10 mb-12">
                    {/* Color Select */}
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4">Choose Color</h4>
                      <div className="flex gap-3">
                        {selectedProduct.colors.map((c) => (
                          <button 
                            key={c}
                            className="w-10 h-10 rounded-full border-2 border-white/10 hover:border-[#00e5ff] transition-all p-1"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Size Select */}
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Select Size</h4>
                        <button className="text-[10px] font-bold text-[#00e5ff] underline tracking-widest">SIZE GUIDE</button>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {selectedProduct.sizes.map((s) => (
                          <button 
                            key={s}
                            className="w-14 h-14 rounded-xl border border-white/10 flex items-center justify-center font-bold hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button 
                      onClick={() => addToCart(selectedProduct, 'M')}
                      className="flex-1 py-5 bg-[#00e5ff] text-black font-black uppercase tracking-widest rounded-2xl hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] transition-all flex items-center justify-center gap-3"
                    >
                      <ShoppingBag className="w-5 h-5" /> Add to Cart
                    </button>
                    <button className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors">
                      <Star className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="mt-12 grid grid-cols-2 gap-6 pt-12 border-t border-white/5">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <Truck className="w-5 h-5 text-[#00e5ff]" /> 48h Delivery
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <ShieldCheck className="w-5 h-5 text-[#00e5ff]" /> Genuine Product
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* VIEW: CHECKOUT */}
          {view === 'checkout' && (
            <motion.div 
               key="checkout"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0 }}
               className="px-6 max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-black mb-12 flex items-center gap-4">
                Secure Checkout <ShieldCheck className="text-[#00e5ff]" />
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form Simulation */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#00e5ff]">Contact Details</h3>
                    <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#00e5ff] transition-all" value="Prawin Reddi" readOnly />
                    <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none" value="prawin@test.com" readOnly />
                    <input type="text" placeholder="WhatsApp Number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none" value="+91 70754 57159" readOnly />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#00e5ff]">Shipping Address</h3>
                    <textarea placeholder="Complete Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 h-24 outline-none" readOnly value="123 Luxury Lane, High-Performance Plaza, Cyber Hub, 500001" />
                  </div>

                  <div className="p-6 bg-[#00e5ff]/5 border border-[#00e5ff]/20 rounded-2xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#00e5ff] uppercase tracking-widest mb-1">Payment Method</p>
                      <p className="text-sm font-bold flex items-center gap-2">UPI / GPay <CreditCard className="w-4 h-4" /></p>
                    </div>
                    <span className="px-3 py-1 bg-[#00e5ff] text-black text-[10px] font-black rounded-full uppercase tracking-tighter">Verified</span>
                  </div>
                </div>

                {/* Summary */}
                <div className="glass-panel p-8 rounded-[32px] h-fit">
                  <h3 className="text-xl font-bold mb-8">Order Summary</h3>
                  <div className="space-y-4 mb-8">
                    {cart.map((item, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-gray-400">{item.quantity}x {item.product.name} ({item.size})</span>
                        <span className="font-bold">{fmt(item.product.price * item.quantity)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Shipping</span>
                      <span className="text-green-400 font-bold uppercase tracking-tighter">Free</span>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/10 flex justify-between items-center mb-8">
                    <span className="text-xl font-bold">Total</span>
                    <span className="text-3xl font-black text-[#00e5ff]">{fmt(cart.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0))}</span>
                  </div>
                  <button 
                    onClick={() => setView('success')}
                    className="w-full py-5 bg-[#00e5ff] text-black font-black uppercase tracking-widest rounded-2xl hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all"
                  >
                    Pay & Place Order
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* VIEW: SUCCESS */}
          {view === 'success' && (
            <motion.div 
               key="success"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="px-6 flex flex-col items-center justify-center text-center py-24"
            >
              <div className="w-32 h-32 bg-green-500/10 rounded-full flex items-center justify-center mb-12 shadow-[0_0_60px_rgba(34,197,94,0.2)]">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              </div>
              <h2 className="text-6xl font-black tracking-tighter mb-6">Payment Successful!</h2>
              <p className="text-xl text-gray-400 max-w-md mb-12">
                Your order <span className="text-white font-bold">#STHUB-4581</span> has been placed. We've sent an automated confirmation to your WhatsApp.
              </p>
              
              <div className="space-y-4 px-8 py-6 rounded-2xl bg-white/5 border border-white/10 mb-12 max-w-sm w-full">
                <div className="flex items-center gap-3 text-green-400">
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span className="text-[10px] font-black uppercase tracking-widest">WhatsApp Alert Sent</span>
                </div>
                <p className="text-xs text-left text-gray-500 leading-relaxed italic">
                  "Hi Prawin! Your order #STHUB-4581 for {cart.length} items is confirmed. Check tracking details here: sthub.io/track/4581"
                </p>
              </div>

              <button 
                onClick={() => setView('home')}
                className="px-12 py-4 glass-panel text-white font-bold rounded-full hover:bg-white/10 transition-colors"
              >
                Back to Home
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* --- CART DRAWER OVERLAY --- */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-[#050505] border-l border-white/5 z-[101] shadow-[-20px_0_60px_rgba(0,0,0,0.5)] p-8 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
                <h3 className="text-2xl font-black tracking-tighter">Your Bag ({cart.length})</h3>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/5 rounded-full"><X className="w-6 h-6" /></button>
              </div>

                {cart.length === 0 ? (
                  <div className="text-center py-24 text-gray-600 font-bold uppercase tracking-widest">Your cart is empty.</div>
                ) : (
                  <>
                    <div className="space-y-8 mb-12">
                      {cart.map((item, i) => (
                        <CartItem key={i} item={item} fmt={fmt} />
                      ))}
                    </div>
                    <div className="pt-12 border-t border-white/5">
                      <div className="flex justify-between text-gray-400 mb-2">
                        <span>Subtotal</span>
                        <span>{fmt(cart.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0))}</span>
                      </div>
                      <div className="flex justify-between text-white text-xl font-bold mb-8">
                         <span>Total</span>
                         <span className="text-[#00e5ff]">{fmt(cart.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0))}</span>
                      </div>
                      <button 
                         onClick={() => {
                           setIsCartOpen(false);
                           setView('checkout');
                         }}
                         className="w-full py-5 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:bg-[#00e5ff] transition-all"
                      >
                        Checkout Now
                      </button>
                      <p className="mt-4 text-[10px] text-center text-gray-600 font-bold uppercase tracking-widest">Secure Payment Processing</p>
                    </div>
                  </>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>

      {/* --- FOOTER --- */}
      <footer className="px-6 py-12 border-t border-white/5 opacity-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-lg font-black tracking-tighter">STYLE<span className="text-[#00e5ff]">HUB</span></div>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Returns</span>
            <span className="hover:text-white cursor-pointer transition-colors">Track Order</span>
          </div>
          <div className="text-[10px] text-gray-500 font-bold tracking-widest">© 2026 PROTOTYPE ONLY BY EAGLE$WIN</div>
        </div>
      </footer>
    </div>
  );
}

// --- SUB-COMPONENTS ---

const ProductCard = ({ product, onClick }: { product: Product, onClick: () => void }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6 bg-white/5 border border-white/5 transition-all group-hover:border-[#00e5ff]/30 shadow-2xl">
         <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-1000" 
        />
        <div className="absolute top-4 left-4">
           <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[8px] font-black rounded-full uppercase tracking-widest border border-white/10">
            {product.category}
           </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
           <button className="w-full py-4 bg-[#00e5ff] text-black font-black uppercase tracking-widest text-[10px] rounded-2xl shadow-xl">Quick View</button>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1 tracking-tight group-hover:text-[#00e5ff] transition-colors">{product.name}</h3>
        <p className="text-gray-400 font-bold">₹{product.price.toLocaleString('en-IN')}</p>
      </div>
    </motion.div>
  );
};

const CartItem = ({ item, fmt }: { item: any, fmt: any }) => {
  return (
    <div className="flex gap-4 group">
      <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-white/5 shrink-0 border border-white/5">
        <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-between py-1 flex-1">
        <div>
          <h4 className="font-bold text-sm leading-tight text-white group-hover:text-[#00e5ff] transition-colors">{item.product.name}</h4>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Size: {item.size}</p>
        </div>
        <div className="flex justify-between items-center">
           <div className="flex items-center gap-4 bg-white/5 rounded-lg px-2 py-1">
             <button className="p-1 hover:text-white text-gray-600"><Minus className="w-3 h-3" /></button>
             <span className="text-xs font-bold">{item.quantity}</span>
             <button className="p-1 hover:text-white text-gray-600"><Plus className="w-3 h-3" /></button>
           </div>
           <span className="font-bold text-sm text-white">{fmt(item.product.price)}</span>
        </div>
      </div>
    </div>
  );
};
