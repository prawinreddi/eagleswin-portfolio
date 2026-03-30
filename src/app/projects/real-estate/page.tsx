'use client';

import { motion } from 'framer-motion';
import { Search, MapPin, Bed, Bath, Square, ArrowRight, Phone, Mail, Link as LinkIcon, Globe, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SkylineRealEstate = () => {
  const properties = [
    {
      id: 1,
      title: 'Azure Luxury Villa',
      location: 'Malibu, California',
      price: '$12,500,000',
      beds: 5,
      baths: 6,
      sqft: '8,500',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2071',
      tag: 'For Sale'
    },
    {
      id: 2,
      title: 'Horizon Glass House',
      location: 'Manhattan, New York',
      price: '$8,200,000',
      beds: 3,
      baths: 4,
      sqft: '4,200',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070',
      tag: 'New Construction'
    },
    {
      id: 3,
      title: 'Zen Living Suite',
      location: 'Austin, Texas',
      price: '$4,500,000',
      beds: 4,
      baths: 3,
      sqft: '3,800',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070',
      tag: 'Sale Out'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-blue-500">
            SKYLINE<span className="text-white">ESTATES</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-blue-500 transition-colors">Buy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Sell</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Rent</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Agents</a>
          </div>
          <Link href="/" className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-all">
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Project Metadata Bar */}
      <div className="pt-24 bg-gray-950 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-6 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500">
          <div className="flex items-center gap-2"><span className="text-blue-500">CLIENT:</span> SKYLINE ESTATES</div>
          <div className="flex items-center gap-2"><span className="text-blue-500">INDUSTRY:</span> LUXURY REAL ESTATE</div>
          <div className="flex items-center gap-2"><span className="text-blue-500">DELIVERABLES:</span> FULL DIGITAL PORTAL</div>
          <div className="flex items-center gap-2"><span className="text-blue-500">RESULTS:</span> 34% INCREASE IN LEADS</div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2071" 
            alt="Luxury Villa" 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Find Your <span className="text-blue-500">Dream</span> Home
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Extraordinary homes, exceptional service. Discover the most exclusive properties in the world.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-900/90 backdrop-blur-xl p-3 rounded-2xl border border-gray-800 shadow-2xl flex flex-col md:flex-row gap-2 max-w-3xl mx-auto"
          >
            <div className="flex-1 flex items-center px-4 bg-gray-800 rounded-xl">
              <Search className="w-5 h-5 text-gray-500 mr-3" />
              <input 
                type="text" 
                placeholder="Search by city, neighborhood, or zip..." 
                className="w-full bg-transparent border-none focus:ring-0 text-white py-4"
              />
            </div>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
              Search
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-gray-400 max-w-md">Our hand-picked selection of the most luxurious and architectural masterpieces currently available.</p>
          </div>
          <button className="flex items-center gap-2 text-blue-500 font-semibold hover:gap-4 transition-all">
            View All Properties <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((prop, i) => (
            <motion.div 
              key={prop.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 w-full overflow-hidden rounded-3xl mb-6">
                <Image 
                  src={prop.image} 
                  alt={prop.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {prop.tag}
                </div>
              </div>
              
              <div className="px-2">
                <div className="text-2xl font-bold mb-1 text-blue-400">{prop.price}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{prop.title}</h3>
                <div className="flex items-center text-gray-500 mb-4 text-sm">
                  <MapPin className="w-4 h-4 mr-1" /> {prop.location}
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-900 rounded-2xl border border-gray-800">
                  <div className="flex items-center gap-1.5 border-r border-gray-700 pr-4">
                    <Bed className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-gray-300">{prop.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1.5 border-r border-gray-700 px-4">
                    <Bath className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-gray-300">{prop.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1.5 pl-4">
                    <Square className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-gray-300">{prop.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="bg-gray-900 py-20 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold tracking-tighter text-blue-500 mb-6">
              SKYLINE<span className="text-white">ESTATES</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              We define luxury living by providing exceptional real estate services that exceed expectations. Your journey to the perfect home starts here.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Globe className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <LinkIcon className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <MessageCircle className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500" /> +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500" /> info@skylineestates.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-500" /> 123 Luxury Way, Malibu, CA
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for the latest luxury listings.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-gray-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-blue-500" />
              <button className="bg-blue-600 p-2 rounded-lg"><ArrowRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          © 2026 Skyline Estates. Built for Eagle$Win Portfolio.
        </div>
      </footer>
    </div>
  );
};

export default SkylineRealEstate;
