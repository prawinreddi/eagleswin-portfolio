"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';
import { Minus, Plus, ChevronRight, Check } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Mock DB
const productsDB: Record<string, any> = {
  "1": { name: "Cashmere Wool Sweater", price: 14999, color: "Beige", image: "/images/stylehub/product-1.png", desc: "Our signature cashmere sweater is knitted from the finest yarns for unparalleled softness and warmth. Designed with a modern, slightly relaxed fit." },
  "2": { name: "Genuine Leather Biker Jacket", price: 24999, color: "Black", image: "/images/stylehub/product-2.png", desc: "A timeless classic. Hand-crafted from premium full-grain leather, featuring heavy-duty hardware and a tailored fit that molds to your body over time." },
  "3": { name: "Minimalist Leather Sneakers", price: 8999, color: "White / Cream", image: "/images/stylehub/product-3.png", desc: "The perfect everyday sneaker. Made in Portugal with premium Italian leather and set on a durable custom rubber sole." },
  "4": { name: "Structured Wool Coat", price: 21999, color: "Charcoal", image: "/images/stylehub/hero-banner.png", desc: "A masterclass in modern tailoring. This heavyweight wool-blend coat features sharp shoulders and a clean, hidden-button placket." }
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = productsDB[id as string] || productsDB["1"];
  const { addItem } = useCart();
  
  const [size, setSize] = useState('M');
  const [added, setAdded] = useState(false);

  const sizes = ['S', 'M', 'L', 'XL'];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  const handleAddToCart = () => {
    addItem({
      id: parseInt(id as string) || 1,
      name: product.name,
      price: product.price,
      color: product.color,
      image: product.image,
      size: size
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container mx-auto px-6 py-12 md:py-24">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-12">
        <Link href="/stylehub" className="hover:text-black">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/stylehub/shop" className="hover:text-black">Shop</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-black">{product.name}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
        {/* Gallery */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="relative aspect-[3/4] w-full bg-stone-100">
            <Image src={product.image} alt={product.name} fill className="object-cover" priority />
          </div>
        </div>

        {/* Info */}
        <div className="w-full md:w-1/2 md:py-10">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">{product.name}</h1>
          <p className="text-xl mb-8">{formatPrice(product.price)}</p>
          
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest text-stone-500 mb-4">Color</h3>
            <p className="text-sm border border-stone-300 inline-block px-4 py-2">{product.color}</p>
          </div>

          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xs uppercase tracking-widest text-stone-500">Size</h3>
              <button className="text-xs text-stone-500 underline underline-offset-4">Size Guide</button>
            </div>
            <div className="flex gap-3">
              {sizes.map((s) => (
                <button 
                  key={s} 
                  onClick={() => setSize(s)}
                  className={`w-12 h-12 flex items-center justify-center border text-sm transition-colors ${
                    size === s ? 'border-black bg-black text-white' : 'border-stone-300 hover:border-black'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-5 flex items-center justify-center gap-2 uppercase tracking-widest text-sm font-medium hover:bg-stone-800 transition-colors mb-12"
          >
            {added ? <><Check className="w-4 h-4" /> Added to Bag</> : 'Add to Bag'}
          </button>

          <div className="border-t border-stone-200 pt-8">
            <h3 className="font-medium mb-4">Details</h3>
            <p className="text-stone-500 leading-relaxed text-sm">{product.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
