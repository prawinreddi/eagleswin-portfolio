"use client";
import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/stylehub" className="text-2xl font-semibold tracking-tighter uppercase mb-6 block">
              Style<span className="text-stone-500">Hub</span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Defining the modern minimal wardrobe. Quality over quantity, always.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-stone-400 transition-colors"><Mail className="w-5 h-5" /></a>
              <a href="#" className="hover:text-stone-400 transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="#" className="hover:text-stone-400 transition-colors"><Globe className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-sm tracking-widest uppercase mb-6">Shop</h4>
            <ul className="flex flex-col gap-4 text-sm text-stone-400">
              <li><Link href="/stylehub/shop?category=mens" className="hover:text-white transition-colors">Mens</Link></li>
              <li><Link href="/stylehub/shop?category=womens" className="hover:text-white transition-colors">Womens</Link></li>
              <li><Link href="/stylehub/shop?category=accessories" className="hover:text-white transition-colors">Accessories</Link></li>
              <li><Link href="/stylehub/shop?category=sale" className="hover:text-white transition-colors">Sale</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm tracking-widest uppercase mb-6">Support</h4>
            <ul className="flex flex-col gap-4 text-sm text-stone-400">
              <li><Link href="/stylehub/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/stylehub/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/stylehub/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/stylehub/sizes" className="hover:text-white transition-colors">Size Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm tracking-widest uppercase mb-6">Newsletter</h4>
            <p className="text-stone-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-transparent border-b border-stone-600 py-3 pl-0 pr-10 text-sm focus:outline-none focus:border-white transition-colors"
                required
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 hover:text-stone-400 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} StyleHub. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/stylehub/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/stylehub/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
