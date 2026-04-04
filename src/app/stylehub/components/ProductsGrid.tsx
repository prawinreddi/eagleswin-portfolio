"use client";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function ProductsGrid() {
  const products = [
    {
      id: 1,
      name: "Cashmere Wool Sweater",
      price: 14999,
      originalPrice: 18999,
      color: "Beige",
      image: "/images/stylehub/product-1.png",
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Genuine Leather Biker Jacket",
      price: 24999,
      originalPrice: 28999,
      color: "Black",
      image: "/images/stylehub/product-2.png",
      tag: "Limited"
    },
    {
      id: 3,
      name: "Minimalist Leather Sneakers",
      price: 8999,
      color: "White / Cream",
      image: "/images/stylehub/product-3.png",
      tag: "New"
    },
    {
      id: 4,
      name: "Structured Wool Coat",
      price: 21999,
      color: "Charcoal",
      image: "/images/stylehub/hero-banner.png", // Reusing hero image crop for realistic flow
      tag: ""
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4">New Arrivals.</h2>
          <p className="text-stone-500 uppercase tracking-widest text-sm">The latest iterations of our core silhouettes.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative aspect-[3/4] bg-stone-200 mb-4 overflow-hidden">
                {product.tag && (
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-black text-[10px] uppercase tracking-widest px-3 py-1 font-medium">
                    {product.tag}
                  </div>
                )}
                
                <Link href={`/stylehub/product/${product.id}`} className="block w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                
                {/* Quick Add Button / Interaction */}
                <button className="absolute bottom-4 left-4 right-4 bg-white text-black py-3 px-4 flex items-center justify-center gap-2 font-medium text-xs uppercase tracking-widest translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Plus className="w-4 h-4" /> Quick Add
                </button>
              </div>

              <div className="flex flex-col gap-1 px-1">
                <div className="flex items-start justify-between gap-4">
                  <Link href={`/stylehub/product/${product.id}`} className="font-medium text-sm hover:underline underline-offset-4">
                    {product.name}
                  </Link>
                  <div className="flex flex-col items-end text-sm">
                    <span className="font-medium">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-stone-400 line-through text-xs">{formatPrice(product.originalPrice)}</span>
                    )}
                  </div>
                </div>
                <span className="text-stone-500 text-xs">{product.color}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/stylehub/shop" className="inline-block border border-black px-10 py-4 text-sm font-medium uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
