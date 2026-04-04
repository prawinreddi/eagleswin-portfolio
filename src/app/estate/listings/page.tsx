"use client";
import React, { useState } from 'react';
import { useEstate } from '../context/EstateContext';
import { Search, Filter, MapPin, Grid, List, Star, Clock, Home, MessageCircle, ArrowRight, X } from 'lucide-react';
import { properties, formatCurrency } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function ListingsPage() {
  const { filteredProperties, searchTerm, setSearchTerm, activeFilter, setActiveFilter, handleSearch, resetFilters } = useEstate();
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState(50000000);

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">Explore Premium <span className="text-amber-500">Properties.</span></h1>
          <p className="text-slate-500 font-medium text-lg">Browse {properties.length} active high-fidelity listings across Hyderabad.</p>
        </div>

        {/* SEARCH AND FILTER BAR */}
        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 flex flex-col lg:flex-row gap-6 items-center mb-16 transform transition-all hover:border-amber-200 duration-500 group">
          <div className="flex-1 relative w-full">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={e => { setSearchTerm(e.target.value); handleSearch(); }}
              placeholder="Search area, project or BHK..." 
              className="w-full pl-16 pr-6 py-5 bg-slate-50 border border-slate-50 rounded-2xl focus:outline-none focus:border-amber-500 text-slate-800 font-bold transition-all placeholder:text-slate-400 group-focus-within:bg-white"
            />
          </div>
          <div className="flex gap-3 w-full lg:w-auto">
            <button 
              onClick={() => setShowFilters(!showFilters)} 
              className={`flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 border-2 ${showFilters ? 'bg-amber-500 border-amber-500 text-slate-900' : 'bg-white border-slate-100 text-slate-700 hover:border-amber-200'}`}
            >
              <Filter className="w-4 h-4" /> Advanced Filters
            </button>
            <button className="w-14 h-14 bg-slate-900 flex items-center justify-center rounded-2xl text-white hover:bg-amber-500 hover:text-black transition-all active:scale-95 shadow-xl shadow-slate-200">
              <Grid className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ADVANCED FILTERS DRAWER */}
        <AnimatePresence>
          {showFilters && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mb-12">
              <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-[4rem] -z-10 group-hover:scale-110 transition-transform duration-500" />
                
                <div className="space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2 relative">Property Type <span className="w-1 h-1 bg-amber-500 rounded-full" /></h4>
                  <div className="flex flex-wrap gap-2">
                    {['all', 'flat', 'villa', 'plot', 'commercial'].map(type => (
                      <button key={type} onClick={() => { setActiveFilter(type); handleSearch(); }} className={`px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${activeFilter === type ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-500 border-transparent hover:bg-amber-50 hover:text-amber-600'}`}>
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2 relative">Budget Range <span className="w-1 h-1 bg-amber-500 rounded-full" /></h4>
                  <input type="range" min="3000000" max="100000000" step="5000000" value={priceRange} onChange={e => setPriceRange(Number(e.target.value))} className="w-full accent-amber-500 h-1 bg-slate-100 rounded-full appearance-none cursor-pointer" />
                  <div className="flex justify-between text-[11px] font-black text-slate-800 uppercase tracking-widest">
                    <span>{formatCurrency(3000000)}</span>
                    <span>{formatCurrency(priceRange)}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2 relative">BHK Selection <span className="w-1 h-1 bg-amber-500 rounded-full" /></h4>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, '5+'].map(bhk => (
                      <button key={bhk} className="w-12 h-12 bg-slate-50 border-2 border-slate-50 rounded-xl flex items-center justify-center font-black text-sm text-slate-500 hover:border-amber-400 transition-all">{bhk}</button>
                    ))}
                  </div>
                </div>

                <div className="flex items-end flex-col justify-end gap-3">
                  <button onClick={resetFilters} className="w-full py-4 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-amber-500 hover:text-black transition-all shadow-xl shadow-slate-200">Apply Filters</button>
                  <button onClick={resetFilters} className="text-[10px] font-black uppercase tracking-widest text-slate-400 underline underline-offset-4 decoration-amber-300">Clear All</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* LISTING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProperties.length === 0 ? (
            <div className="col-span-full py-32 text-center text-slate-400 font-bold">No properties match your criteria. <button onClick={resetFilters} className="text-amber-500 underline">Reset All</button></div>
          ) : (
            filteredProperties.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-50 group border-b-8 border-b-slate-100 hover:border-b-amber-500 hover:-translate-y-2 transition-all duration-500"
              >
                <Link href={`/estate/property/${p.id}`} className="block relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl flex items-center gap-1.5 ${p.status === 'available' ? 'bg-green-500 text-white' : 'bg-amber-500 text-slate-900'}`}>
                      {p.status}
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[9px] font-black text-slate-800 shadow-xl">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> 4.9 (24)
                  </div>
                </Link>

                <div className="p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500 transform transition-transform group-hover:translate-x-1">{p.type}</span>
                    <div className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{p.sqft.toLocaleString()} Sq.Ft</span>
                  </div>
                  <Link href={`/estate/property/${p.id}`} className="block text-2xl font-black text-slate-900 mb-2 transition-colors hover:text-amber-600 line-clamp-1">{p.title}</Link>
                  <p className="flex items-center gap-1.5 text-slate-400 font-medium text-xs mb-8">
                    <MapPin className="w-4 h-4 text-amber-500" /> {p.location}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Value EstateSync</p>
                      <p className="text-2xl font-black text-slate-900 tracking-tighter">{formatCurrency(p.price)}</p>
                    </div>
                    <a href={`https://wa.me/919876543210?text=I am interested in ${p.title}`} className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all shadow-xl shadow-amber-100 flex-shrink-0 active:scale-90">
                      <MessageCircle className="w-5 h-5 flex-shrink-0" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
