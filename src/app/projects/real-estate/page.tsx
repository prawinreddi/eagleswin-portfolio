'use client';

import { motion } from 'framer-motion';
import { Search, MapPin, Bed, Bath, Square, ArrowRight, Phone, Mail, Star, Heart, ChevronDown, Globe, MessageCircle, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const SkylineRealEstate = () => {
  const [activeTab, setActiveTab] = useState('Buy');
  const [wishlist, setWishlist] = useState<number[]>([]);

  const tabs = ['Buy', 'Sell', 'Rent', 'Commercial'];

  const properties = [
    {
      id: 1,
      title: 'Azure Luxury Villa',
      location: 'Malibu, California',
      price: '$12,500,000',
      beds: 5, baths: 6, sqft: '8,500',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=90&w=2071',
      tag: 'For Sale',
      type: 'Villa',
    },
    {
      id: 2,
      title: 'Horizon Glass House',
      location: 'Manhattan, New York',
      price: '$8,200,000',
      beds: 3, baths: 4, sqft: '4,200',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=90&w=2070',
      tag: 'New Construction',
      type: 'Penthouse',
    },
    {
      id: 3,
      title: 'Zen Living Suite',
      location: 'Austin, Texas',
      price: '$4,500,000',
      beds: 4, baths: 3, sqft: '3,800',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=2070',
      tag: 'Exclusive',
      type: 'Estate',
    },
    {
      id: 4,
      title: 'Oceanview Residence',
      location: 'Miami Beach, Florida',
      price: '$6,800,000',
      beds: 4, baths: 5, sqft: '5,100',
      image: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&q=90&w=2067',
      tag: 'For Sale',
      type: 'Villa',
    },
    {
      id: 5,
      title: 'Mountain Ridge Manor',
      location: 'Aspen, Colorado',
      price: '$9,900,000',
      beds: 6, baths: 7, sqft: '9,200',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=90&w=2070',
      tag: 'Price Reduced',
      type: 'Manor',
    },
    {
      id: 6,
      title: 'The Pearl Tower Suite',
      location: 'San Francisco, CA',
      price: '$3,200,000',
      beds: 2, baths: 2, sqft: '2,400',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=90&w=2070',
      tag: 'New Listing',
      type: 'Penthouse',
    },
  ];

  const agents = [
    {
      name: 'Victoria Langley',
      title: 'Senior Luxury Specialist',
      deals: '240+ Closed',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      rating: 4.9,
    },
    {
      name: 'James Whitmore',
      title: 'Investment Properties',
      deals: '180+ Closed',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
      rating: 4.8,
    },
    {
      name: 'Sophia Marlowe',
      title: 'International Buyer\'s Agent',
      deals: '310+ Closed',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
      rating: 5.0,
    },
  ];

  const testimonials = [
    {
      quote: 'Skyline found us our dream beachfront home in less than 3 weeks. The entire experience was seamless and truly luxury-grade.',
      name: 'Michael & Sarah Chen',
      location: 'Malibu, CA',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200',
    },
    {
      quote: 'Their off-market network is unrivaled. I found an incredible Manhattan penthouse that wasn\'t even listed publicly.',
      name: 'Robert Ashworth',
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    },
    {
      quote: 'From first showing to closing, Skyline Estates delivered a white-glove experience I\'d recommend to anyone.',
      name: 'Elena Vasquez',
      location: 'Miami Beach, FL',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    },
  ];

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const tagColors: Record<string, string> = {
    'For Sale': 'bg-blue-600',
    'New Construction': 'bg-emerald-600',
    'Exclusive': 'bg-purple-600',
    'Price Reduced': 'bg-red-600',
    'New Listing': 'bg-amber-600',
    'Sale Out': 'bg-gray-600',
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">

      {/* Meta Bar */}
      <div className="bg-gray-900 border-b border-gray-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500">
          <div className="flex items-center gap-2"><span className="text-blue-500">CLIENT:</span> SKYLINE ESTATES GROUP</div>
          <div className="flex items-center gap-2"><span className="text-blue-500">INDUSTRY:</span> LUXURY REAL ESTATE</div>
          <div className="flex items-center gap-2"><span className="text-blue-500">DELIVERABLES:</span> FULL DIGITAL PORTAL</div>
          <div className="flex items-center gap-2"><span className="text-blue-500">RESULTS:</span> 34% INCREASE IN QUALIFIED LEADS</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-blue-500">
            SKYLINE<span className="text-white">ESTATES</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-gray-400">
            <a href="#properties" className="hover:text-blue-400 transition-colors">Properties</a>
            <a href="#agents" className="hover:text-blue-400 transition-colors">Agents</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Sell</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Insights</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+15551234567" className="hidden sm:flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white">
              <Phone className="w-4 h-4" /> +1 (555) 123-4567
            </a>
            <Link href="/" className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-all">
              ← Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=90&w=2560"
            alt="Luxury Villa"
            fill
            className="object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-gray-950/10" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            526 Active Listings
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[1.05]"
          >
            Find Your <span className="text-blue-400">Dream</span><br />Home Today
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Extraordinary homes, exceptional service. Discover the world's most exclusive properties with our white-glove concierge team.
          </motion.p>

          {/* Search Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-2xl overflow-hidden max-w-4xl mx-auto"
          >
            <div className="flex border-b border-gray-800">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3.5 text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="p-4 flex flex-col md:flex-row gap-3">
              <div className="flex-1 flex items-center px-5 bg-gray-800 rounded-xl">
                <Search className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="City, neighborhood, zip code, or address..."
                  className="w-full bg-transparent border-none focus:outline-none text-white py-4 placeholder:text-gray-600"
                />
              </div>
              <div className="flex items-center px-5 bg-gray-800 rounded-xl gap-2">
                <ChevronDown className="w-4 h-4 text-gray-500" />
                <select className="bg-transparent border-none focus:outline-none text-gray-400 py-4 text-sm appearance-none cursor-pointer">
                  <option>Any Price</option>
                  <option>$1M–$5M</option>
                  <option>$5M–$10M</option>
                  <option>$10M+</option>
                </select>
              </div>
              <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all text-sm uppercase tracking-wide shadow-lg shadow-blue-600/30">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-blue-600 py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '526+', label: 'Active Listings' },
            { value: '$2.4B+', label: 'Properties Sold' },
            { value: '18 yrs', label: 'Industry Experience' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-black mb-1">{s.value}</div>
              <div className="text-blue-200 text-[11px] font-bold uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Properties */}
      <section id="properties" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Handpicked</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Featured Properties</h2>
            <p className="text-gray-400 max-w-md">Our curated selection of the most luxurious and architecturally significant homes currently available.</p>
          </div>
          <button className="flex items-center gap-2 text-blue-400 font-semibold hover:gap-4 transition-all text-sm uppercase tracking-widest">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, i) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group cursor-pointer"
            >
              <div className="relative h-72 w-full overflow-hidden rounded-2xl mb-5">
                <Image
                  src={prop.image}
                  alt={prop.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white ${tagColors[prop.tag] || 'bg-blue-600'}`}>
                  {prop.tag}
                </div>
                <button
                  onClick={() => toggleWishlist(prop.id)}
                  className="absolute top-4 right-4 w-9 h-9 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Heart className={`w-4 h-4 ${wishlist.includes(prop.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                </button>
                <div className="absolute bottom-4 left-0 right-0 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="w-full py-3 bg-white text-black text-xs font-black uppercase tracking-widest rounded-xl hover:bg-blue-500 hover:text-white transition-colors">
                    View Property
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{prop.title}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 bg-gray-800 px-2 py-0.5 rounded-full">{prop.type}</span>
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-2">{prop.price}</div>
                <div className="flex items-center text-gray-500 mb-4 text-sm">
                  <MapPin className="w-4 h-4 mr-1.5 text-blue-600" /> {prop.location}
                </div>
                <div className="flex items-center justify-between p-3.5 bg-gray-900 rounded-xl border border-gray-800">
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-semibold text-gray-300">{prop.beds} Beds</span>
                  </div>
                  <div className="w-px h-5 bg-gray-700" />
                  <div className="flex items-center gap-1.5">
                    <Bath className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-semibold text-gray-300">{prop.baths} Baths</span>
                  </div>
                  <div className="w-px h-5 bg-gray-700" />
                  <div className="flex items-center gap-1.5">
                    <Square className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-semibold text-gray-300">{prop.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-28 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=90&w=2560"
          alt="Luxury Estate"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-blue-950/85" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Sell Your Property For<br /><span className="text-blue-400">Its True Value</span></h2>
          <p className="text-blue-200 mb-10 text-lg max-w-xl mx-auto">Our market analysts deliver data-driven valuations. Get a free, no-obligation assessment within 24 hours.</p>
          <button className="px-10 py-5 bg-white text-gray-950 font-bold rounded-xl hover:bg-blue-400 transition-all text-sm uppercase tracking-widest shadow-2xl">
            Request Free Valuation
          </button>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Our Team</span>
          <h2 className="text-4xl font-bold">Meet Your Advisors</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {agents.map((agent, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-800 group-hover:border-blue-500 transition-colors">
                <Image src={agent.image} alt={agent.name} fill className="object-cover" unoptimized />
              </div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">{agent.name}</h3>
              <p className="text-blue-500 text-[11px] font-bold uppercase tracking-widest mb-3">{agent.title}</p>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className={`w-3.5 h-3.5 ${s < Math.floor(agent.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-700'}`} />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-400">{agent.rating}</span>
              </div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{agent.deals}</p>
              <button className="mt-6 px-6 py-2.5 border border-gray-700 text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-all text-xs font-bold uppercase tracking-widest rounded-full">
                Contact Agent
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Client Stories</span>
            <h2 className="text-4xl font-bold">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-8"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-gray-300 leading-relaxed mb-8 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 border-t border-gray-700/50 pt-6">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image src={t.image} alt={t.name} fill className="object-cover" unoptimized />
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-20 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold tracking-tighter text-blue-500 mb-6">SKYLINE<span className="text-white">ESTATES</span></div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">We define luxury living by providing exceptional real estate services that exceed expectations. Your journey to the perfect home starts here.</p>
            <div className="flex space-x-4">
              {[Globe, LinkIcon, MessageCircle].map((Icon, i) => (
                <div key={i} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-blue-500" /> +1 (555) 123-4567</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-blue-500" /> info@skylineestates.com</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-blue-500" /> 123 Luxury Way, Malibu, CA</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Get exclusive off-market listings first.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:border-blue-500 text-white" />
              <button className="bg-blue-600 p-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          © 2026 Skyline Estates. Built for Eagle$Win Portfolio Demo.
        </div>
      </footer>

      <style jsx global>{`
        @keyframes kenburns {
          0% { transform: scale(1.05) translate(0, 0); }
          100% { transform: scale(1.15) translate(-1%, -1%); }
        }
      `}</style>
    </div>
  );
};

export default SkylineRealEstate;
