"use client";
import Link from 'next/link';
import { ShoppingCart, Menu, X, ChefHat } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Navbar() {
  const { cartCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '/restro', label: 'Home' },
    { href: '/restro/menu', label: 'Menu' },
    { href: '/restro/track', label: 'Track Order' },
    { href: '/restro/admin', label: '🔧 Admin' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-orange-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/restro" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <ChefHat className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-stone-900">Spice<span className="text-orange-500">Hub</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-orange-500 transition-colors">{l.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/restro/cart" className="relative flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors">
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-orange-100 px-4 py-4 flex flex-col gap-3">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-stone-700 font-medium py-2 border-b border-stone-100">{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
