import React from 'react';
import ProductsGrid from '../components/ProductsGrid';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: "Shop All | StyleHub",
};

export default function ShopPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-8">
          <Link href="/stylehub" className="hover:text-black">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black">All Products</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 border-b border-stone-200 pb-8">
          <div>
            <h1 className="text-4xl font-medium tracking-tight mb-2">The Collection</h1>
            <p className="text-stone-500 text-sm">Essentials designed for the modern minimal wardrobe.</p>
          </div>

          <div className="flex gap-4 mt-6 md:mt-0">
            <button className="flex items-center gap-2 border border-stone-300 px-4 py-2 text-sm hover:border-black transition-colors">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
            <button className="flex items-center gap-2 border border-stone-300 px-4 py-2 text-sm hover:border-black transition-colors">
              Sort by: Featured <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* We reuse the ProductsGrid but since it has its own padding/header, we could just render it, 
            but for realism we just hide the top header of ProductsGrid using custom wrapper logic in a real app.
            Here we just render the grid! */}
      </div>

      {/* Reusing ProductsGrid but hiding its internal titles via CSS or just letting it be for the demo */}
      <div className="[&>section]:pt-0 [&_h2]:hidden [&_.text-center.mb-16]:hidden [&_.mt-16]:hidden">
        <ProductsGrid />
      </div>
    </div>
  );
}
