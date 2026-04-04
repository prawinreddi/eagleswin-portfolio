"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  color: string;
  size?: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Auto-calculated state
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  const addItem = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems(current => {
      const existing = current.find(i => i.id === newItem.id && i.size === newItem.size);
      if (existing) {
        return current.map(item => 
          item.id === newItem.id && item.size === newItem.size 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { ...newItem, quantity: 1 }];
    });
    setIsCartOpen(true); // Open block immediately when adding
  };

  const removeItem = (id: number) => {
    setItems(current => current.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setItems(current => 
      current.map(item => item.id === id ? { ...item, quantity } : item)
    );
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, cartCount, cartTotal, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
