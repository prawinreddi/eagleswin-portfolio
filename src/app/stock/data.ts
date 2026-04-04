export interface Product {
  id: string;
  name: string;
  category: string;
  unit: 'kg' | 'piece' | 'litre' | 'bag';
  purchasePrice: number;
  sellingPrice: number;
  stock: number;
  minStock: number; // For low stock alerts
}

export interface Sale {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  total: number;
  profit: number;
  customerName: string;
  date: string;
  status: 'paid' | 'credit';
}

export interface Customer {
  name: string;
  phone: string;
  dueAmount: number;
  lastPurchase: string;
}

export const stockData = {
  products: [
    { id: '1', name: 'Sona Masoori Rice 25kg', category: 'Grains', unit: 'bag', purchasePrice: 1200, sellingPrice: 1450, stock: 45, minStock: 10 },
    { id: '2', name: 'Aashirvaad Atta 5kg', category: 'Flour', unit: 'piece', purchasePrice: 280, sellingPrice: 340, stock: 8, minStock: 15 }, // Low stock!
    { id: '3', name: 'Parachute Coconut Oil 500ml', category: 'Oils', unit: 'piece', purchasePrice: 180, sellingPrice: 220, stock: 65, minStock: 20 },
    { id: '4', name: 'Toor Dal 1kg', category: 'Pulses', unit: 'kg', purchasePrice: 140, sellingPrice: 175, stock: 12, minStock: 25 }, // Low stock!
  ] as Product[],
  
  sales: [
    { id: 'S1', productId: '1', productName: 'Sona Masoori Rice 25kg', quantity: 2, total: 2900, profit: 500, customerName: 'Rahul Kumar', date: '2024-04-04', status: 'paid' },
    { id: 'S2', productId: '3', productName: 'Parachute Coconut Oil 500ml', quantity: 5, total: 1100, profit: 200, customerName: 'Suresh Varma', date: '2024-04-04', status: 'credit' },
  ] as Sale[],

  customers: [
    { name: 'Suresh Varma', phone: '+91 98765 43210', dueAmount: 1100, lastPurchase: '2024-04-04' },
    { name: 'Anitha Devi', phone: '+91 99887 76655', dueAmount: 0, lastPurchase: '2024-04-02' },
  ] as Customer[]
};

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};
