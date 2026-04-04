"use client";
import Link from "next/link";
import { ShoppingBag, Search, Menu, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Mobile Menu */}
        <button className="md:hidden p-2 -ml-2 text-stone-600">
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link href="/stylehub" className="text-2xl font-semibold tracking-tighter uppercase">
          Style<span className="text-stone-400">Hub</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium text-stone-600">
          <Link href="/stylehub" className="hover:text-black transition-colors">Home</Link>
          <Link href="/stylehub/shop" className="hover:text-black transition-colors">Shop</Link>
          <Link href="/stylehub/collections" className="hover:text-black transition-colors">Collections</Link>
          <Link href="/stylehub/about" className="hover:text-black transition-colors">Our Story</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 text-stone-600">
          <button className="p-2 hover:text-black transition-colors hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:text-black transition-colors hidden sm:block">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 hover:text-black transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
