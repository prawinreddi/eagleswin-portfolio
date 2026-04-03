'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, User, X, ArrowRight, Star, Heart, Globe, MessageCircle, Link as LinkIcon, Check } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TrendyBoutique = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [addedId, setAddedId] = useState<number | null>(null);

  const products = [
    { id: 1, name: 'Chronos Silver Edition', category: 'Accessories', price: '$1,250.00', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=90&w=2000', rating: 4.9 },
    { id: 2, name: 'Noir Leather Handbag', category: 'Women', price: '$2,400.00', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=90&w=2000', rating: 5.0 },
    { id: 3, name: 'Silk Evening Blouse', category: 'Women', price: '$850.00', image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&q=90&w=2000', rating: 4.8 },
    { id: 4, name: 'Tailored Wool Coat', category: 'Men', price: '$1,800.00', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=90&w=2000', rating: 4.9 },
    { id: 5, name: 'Desert Nomad Sandals', category: 'Accessories', price: '$450.00', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=90&w=2000', rating: 4.7 },
    { id: 6, name: 'Cashmere Turtleneck', category: 'Men', price: '$620.00', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=90&w=2000', rating: 4.8 },
    { id: 7, name: 'Pearl Drop Earrings', category: 'Accessories', price: '$380.00', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=90&w=2000', rating: 4.9 },
    { id: 8, name: 'Linen Summer Dress', category: 'Women', price: '$975.00', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=90&w=2000', rating: 4.7 },
  ];

  const categories = ['All', 'Women', 'Men', 'Accessories'];

  const lookbookImages = [
    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=90&w=1200',
    'https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=90&w=1200',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=90&w=1200',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=90&w=1200',
  ];

  const filteredProducts = selectedCategory === 'All' ? products : products.filter(p => p.category === selectedCategory);

  const addToCart = (product: any) => {
    setCartItems(prev => [...prev, product]);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
    setIsCartOpen(true);
  };

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const cartTotal = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '').replace(',', '')), 0);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">

      {/* Announcement Bar */}
      <div className="bg-black text-white text-center py-2.5 text-[11px] font-bold uppercase tracking-[0.25em]">
        Complimentary Shipping on Orders Over $500 · New Spring Collection Available Now
      </div>

      {/* Meta Bar */}
      <div className="bg-white border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
          <div><span className="text-black">CLIENT:</span> VOGUE BOUTIQUE</div>
          <div><span className="text-black">INDUSTRY:</span> E-COMMERCE LUXURY</div>
          <div><span className="text-black">DELIVERABLES:</span> HEADLESS STOREFRONT</div>
          <div><span className="text-black">RESULTS:</span> 22% CONVERSION LIFT</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[101] bg-white/80 backdrop-blur-xl border-b border-gray-100" style={{ top: '36px' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <div className="text-3xl font-black tracking-tighter uppercase">VOGUE</div>
            <div className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
              {categories.map(cat => (
                <button key={cat} onClick={() => setSelectedCategory(cat)} className={`transition-colors ${selectedCategory === cat ? 'text-black' : 'text-gray-400 hover:text-black'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Search className="w-5 h-5 cursor-pointer text-gray-600 hover:text-black transition-colors" />
            <User className="w-5 h-5 cursor-pointer text-gray-600 hover:text-black transition-colors" />
            <div className="relative cursor-pointer" onClick={() => setIsCartOpen(true)}>
              <ShoppingBag className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartItems.length}
                </span>
              )}
            </div>
            <Link href="/" className="px-4 py-2 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-gray-800 transition-all">
              ← Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-[#F6F4F0] flex items-center overflow-hidden mt-[84px]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-0 w-full h-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 px-6 lg:px-0"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-6 block">Spring / Summer 2026</span>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
              REDEFINE<br />
              <span className="text-gray-300">ELEGANCE.</span>
            </h1>
            <p className="text-gray-500 max-w-xs mb-10 leading-relaxed font-medium">
              Curated luxury pieces designed for the modern individual who values quality over quantity.
            </p>
            <div className="flex gap-4">
              <button className="px-10 py-5 bg-black text-white font-bold uppercase tracking-widest text-[12px] hover:bg-gray-800 transition-all flex items-center gap-3">
                Shop Collection <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-5 border-2 border-black font-bold uppercase tracking-widest text-[12px] hover:bg-black hover:text-white transition-all">
                Lookbook
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full hidden lg:block"
          >
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=90&w=1800"
              alt="Spring Collection Model"
              fill
              className="object-cover object-top"
              priority
              unoptimized
            />
            <div className="absolute bottom-12 left-12 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl">
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Featured</div>
              <div className="font-bold text-sm">Noir Leather Handbag</div>
              <div className="text-gray-500 text-sm">$2,400.00</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press / Social Proof Bar */}
      <div className="py-8 border-y border-gray-100 bg-gray-50 overflow-hidden">
        <div className="flex gap-16 items-center justify-center opacity-30 grayscale">
          {['VOGUE', 'HARPER\'S BAZAAR', 'ELLE', 'ARCHITECTURAL DIGEST', 'THE CUT', 'WSJ STYLE'].map((name, i) => (
            <span key={i} className="text-xl font-black tracking-tighter whitespace-nowrap">{name}</span>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-3 uppercase">
              {selectedCategory === 'All' ? 'All Pieces' : selectedCategory}
            </h2>
            <p className="text-gray-400 text-[11px] font-black uppercase tracking-widest">{filteredProducts.length} products</p>
          </div>
          <div className="flex gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 text-[11px] font-black uppercase tracking-widest border transition-all ${selectedCategory === cat ? 'bg-black text-white border-black' : 'border-gray-200 text-gray-500 hover:border-black'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] bg-gray-50 mb-5 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <button
                    onClick={() => toggleWishlist(p.id)}
                    className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all"
                  >
                    <Heart className={`w-4 h-4 ${wishlist.includes(p.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                  </button>
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button
                      onClick={() => addToCart(p)}
                      className={`w-full py-3.5 font-bold uppercase text-[10px] tracking-widest shadow-xl transition-all flex items-center justify-center gap-2 ${addedId === p.id ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-black hover:text-white'}`}
                    >
                      {addedId === p.id ? <><Check className="w-4 h-4" /> Added!</> : <>Add to Cart</>}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold mb-1 uppercase tracking-tight">{p.name}</h3>
                    <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-2">{p.category}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-black text-black" />
                      <span className="text-[11px] font-bold">{p.rating}</span>
                    </div>
                  </div>
                  <div className="text-base font-black">{p.price}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lookbook Strip */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-3 block">Editorial</span>
            <h2 className="text-4xl font-black uppercase tracking-tight">The Lookbook</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {lookbookImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative overflow-hidden group cursor-pointer ${i === 0 || i === 3 ? 'aspect-[3/4]' : 'aspect-square'}`}
              >
                <Image src={img} alt={`Lookbook ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white px-4 py-2">Shop Look</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-[#F6F4F0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=90&w=1400"
              alt="Our Philosophy"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-6 block">Est. 2018</span>
            <h2 className="text-5xl font-black tracking-tight mb-8 uppercase leading-tight">Crafted for the<br />Modern Visionary.</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              We source only from ateliers with certified sustainable practices. Each piece is designed to transcend seasons — investments in your wardrobe, not just purchases.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Our curation process is rigorous. Less than 3% of brands we consider make it into our collection. We believe in fewer, better things.
            </p>
            <button className="px-10 py-5 bg-black text-white font-bold uppercase tracking-widest text-[11px] hover:bg-gray-800 transition-all">
              Our Story →
            </button>
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 z-[200] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-[420px] bg-white z-[201] shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center p-8 border-b border-gray-100">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">Your Bag</h3>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''}</p>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                {cartItems.length === 0 ? (
                  <div className="text-center py-20">
                    <ShoppingBag className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                    <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">Your bag is empty</p>
                  </div>
                ) : (
                  cartItems.map((item, idx) => (
                    <div key={idx} className="flex gap-5 items-start">
                      <div className="relative w-22 h-24 bg-gray-50 flex-shrink-0 w-20">
                        <Image src={item.image} alt={item.name} fill className="object-cover" unoptimized />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold uppercase text-[12px] mb-1">{item.name}</h4>
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">{item.category}</p>
                        <div className="flex justify-between items-center">
                          <span className="font-black text-sm">{item.price}</span>
                          <span className="text-[10px] text-gray-400 underline cursor-pointer hover:text-black">Remove</span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-8 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-bold uppercase text-xs tracking-widest text-gray-400">Subtotal</span>
                    <span className="text-2xl font-black">${cartTotal.toLocaleString()}</span>
                  </div>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest text-center mb-6">Complimentary shipping included</p>
                  <button className="w-full py-5 bg-black text-white font-bold uppercase tracking-widest text-[11px] hover:bg-gray-900 transition-all mb-3">
                    Proceed to Checkout
                  </button>
                  <button onClick={() => setIsCartOpen(false)} className="w-full py-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
                    Continue Shopping
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-4xl font-black mb-6 tracking-tighter uppercase">VOGUE</h3>
            <p className="text-gray-400 max-w-sm mb-8 text-[11px] uppercase tracking-widest leading-loose font-bold">
              Defining the future of minimalist fashion since 2018. Handcrafted pieces for the modern visionary.
            </p>
            <div className="flex gap-6">
              {[Globe, MessageCircle, LinkIcon].map((Icon, i) => (
                <div key={i} className="flex items-center gap-2 cursor-pointer group text-[11px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase text-[12px] tracking-[0.3em] mb-6">Support</h4>
            {['Returns & Exchanges', 'Shipping Policy', 'Size Guide', 'FAQ'].map((item, i) => (
              <a key={i} href="#" className="block text-gray-500 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-bold">{item}</a>
            ))}
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase text-[12px] tracking-[0.3em] mb-6">Journal</h4>
            {['Sustainability', 'Craftsmanship', 'Style Edit', 'News'].map((item, i) => (
              <a key={i} href="#" className="block text-gray-500 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-bold">{item}</a>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-gray-600 text-[10px] uppercase tracking-widest text-center font-bold">
          © 2026 Vogue Boutique — Built for Eagle$Win Portfolio Demo
        </div>
      </footer>
    </div>
  );
};

export default TrendyBoutique;
