"use client";
import { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem, COUPONS, formatPrice } from '../data';

export interface CartItem extends MenuItem {
  quantity: number;
  specialInstructions?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  coupon: string;
  couponMsg: string;
  applyCoupon: (code: string) => void;
  deliveryType: 'delivery' | 'pickup';
  setDeliveryType: (t: 'delivery' | 'pickup') => void;
  orderId: string;
  setOrderId: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [coupon, setCoupon] = useState('');
  const [couponMsg, setCouponMsg] = useState('');
  const [discount, setDiscount] = useState(0);
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  const [orderId, setOrderId] = useState('');

  const cartCount = items.reduce((s, i) => s + i.quantity, 0);
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const deliveryFee = deliveryType === 'pickup' ? 0 : subtotal > 500 ? 0 : 49;
  const total = Math.max(0, subtotal - discount + deliveryFee);

  const addItem = (item: MenuItem) => {
    setItems(curr => {
      const ex = curr.find(i => i.id === item.id);
      if (ex) return curr.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...curr, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (id: number) => setItems(curr => curr.filter(i => i.id !== id));

  const updateQty = (id: number, qty: number) => {
    if (qty < 1) return removeItem(id);
    setItems(curr => curr.map(i => i.id === id ? { ...i, quantity: qty } : i));
  };

  const clearCart = () => { setItems([]); setCoupon(''); setDiscount(0); };

  const applyCoupon = (code: string) => {
    const c = COUPONS[code.toUpperCase()];
    if (!c) { setCouponMsg('❌ Invalid coupon code'); setDiscount(0); return; }
    if (c.type === 'percent') {
      const d = Math.floor(subtotal * c.discount / 100);
      setDiscount(d);
      setCouponMsg(`✅ ${c.desc} — ₹${d} saved!`);
    } else {
      if (subtotal < 500) { setCouponMsg('❌ Min order ₹500 required'); return; }
      setDiscount(c.discount);
      setCouponMsg(`✅ ${c.desc}`);
    }
    setCoupon(code.toUpperCase());
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clearCart, cartCount, subtotal, discount, deliveryFee, total, coupon, couponMsg, applyCoupon, deliveryType, setDeliveryType, orderId, setOrderId }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be in CartProvider');
  return ctx;
}
