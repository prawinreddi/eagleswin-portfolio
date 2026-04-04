// Mock product/menu data for the Restro demo
export const categories = [
  { id: 'starters', name: 'Starters', emoji: '🥗' },
  { id: 'mains', name: 'Main Course', emoji: '🍛' },
  { id: 'breads', name: 'Breads & Rice', emoji: '🫓' },
  { id: 'desserts', name: 'Desserts', emoji: '🍮' },
  { id: 'drinks', name: 'Drinks', emoji: '🧃' },
];

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  isVeg: boolean;
  isPopular?: boolean;
  isBestseller?: boolean;
  image: string;
  addons?: { name: string; price: number }[];
}

export const menuItems: MenuItem[] = [
  { id: 1, name: 'Paneer Tikka', description: 'Marinated cottage cheese grilled to perfection with peppers & onions', price: 280, category: 'starters', isVeg: true, isPopular: true, isBestseller: true, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1280&auto=format&fit=crop', addons: [{ name: 'Extra Mint Chutney', price: 20 }, { name: 'Extra Onion', price: 10 }] },
  { id: 2, name: 'Chicken Tikka', description: 'Juicy chicken marinated in spiced yogurt, chargrilled in a tandoor', price: 340, category: 'starters', isVeg: false, isPopular: true, image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=1280&auto=format&fit=crop', addons: [{ name: 'Extra Sauce', price: 30 }] },
  { id: 3, name: 'Veg Spring Rolls', description: 'Crispy golden rolls stuffed with fresh vegetables and glass noodles', price: 190, category: 'starters', isVeg: true, image: 'https://images.unsplash.com/photo-1542336391-ae2936d8efe4?q=80&w=1280&auto=format&fit=crop' },
  { id: 4, name: 'Butter Chicken', description: 'Tender chicken in a rich, creamy tomato-butter gravy. A timeless classic.', price: 380, category: 'mains', isVeg: false, isPopular: true, isBestseller: true, image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=1280&auto=format&fit=crop', addons: [{ name: 'Extra Gravy', price: 40 }, { name: 'Add Cream', price: 20 }] },
  { id: 5, name: 'Palak Paneer', description: 'Fresh cottage cheese cubes in a smooth, spiced spinach gravy', price: 320, category: 'mains', isVeg: true, isPopular: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1280&auto=format&fit=crop' },
  { id: 6, name: 'Dal Makhani', description: 'Slow-cooked black lentils simmered overnight in a buttery tomato gravy', price: 260, category: 'mains', isVeg: true, image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?q=80&w=1280&auto=format&fit=crop' },
  { id: 7, name: 'Garlic Naan', description: 'Soft leavened bread brushed with garlic butter, baked in a tandoor', price: 60, category: 'breads', isVeg: true, isBestseller: true, image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=1280&auto=format&fit=crop', addons: [{ name: 'Extra Butter', price: 15 }] },
  { id: 8, name: 'Biryani (Hyderabadi)', description: 'Aromatic basmati rice layered with spiced chicken, slow cooked dum style', price: 420, category: 'breads', isVeg: false, isPopular: true, isBestseller: true, image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1280&auto=format&fit=crop', addons: [{ name: 'Extra Raita', price: 40 }] },
  { id: 9, name: 'Gulab Jamun', description: 'Soft, spongy milk dumplings soaked in rose-flavoured sugar syrup', price: 120, category: 'desserts', isVeg: true, isBestseller: true, image: 'https://images.unsplash.com/photo-1589113155026-66f849ffca86?q=80&w=1280&auto=format&fit=crop' },
  { id: 10, name: 'Mango Lassi', description: 'Chilled creamy yogurt blended with fresh Alphonso mango pulp', price: 130, category: 'drinks', isVeg: true, isPopular: true, image: 'https://images.unsplash.com/photo-1571006682855-3fc355787b8d?q=80&w=1280&auto=format&fit=crop' },
];

export const COUPONS: Record<string, { discount: number; type: 'flat' | 'percent'; desc: string }> = {
  FIRST50: { discount: 50, type: 'percent', desc: '50% off on your first order!' },
  WELCOME: { discount: 100, type: 'flat', desc: 'Flat ₹100 off on orders above ₹500' },
  EAGLE20: { discount: 20, type: 'percent', desc: '20% off sitewide' },
};

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
}
