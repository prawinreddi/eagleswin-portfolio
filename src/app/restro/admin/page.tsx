"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, CheckCircle, XCircle, Clock, TrendingUp, ShoppingBag, Users, IndianRupee, Plus, Edit, Trash2, ToggleLeft, ToggleRight, ChefHat } from 'lucide-react';
import { menuItems as initialItems, formatPrice } from '../data';

const mockOrders = [
  { id: 'ORD123456', items: 'Butter Chicken x1, Garlic Naan x2', total: 500, status: 'new', time: '2 min ago', customer: 'Ravi Kumar', phone: '+91 9876543210' },
  { id: 'ORD123455', items: 'Biryani x1, Mango Lassi x2', total: 680, status: 'preparing', time: '12 min ago', customer: 'Priya Singh', phone: '+91 9123456780' },
  { id: 'ORD123454', items: 'Paneer Tikka x2, Naan x3', total: 740, status: 'ready', time: '25 min ago', customer: 'Arjun Reddy', phone: '+91 9988776655' },
];

const statusColors: Record<string, string> = {
  new: 'bg-red-100 text-red-600 border-red-200',
  preparing: 'bg-orange-100 text-orange-600 border-orange-200',
  ready: 'bg-blue-100 text-blue-600 border-blue-200',
  dispatched: 'bg-purple-100 text-purple-600 border-purple-200',
  delivered: 'bg-green-100 text-green-600 border-green-200',
};

export default function AdminPage() {
  const [orders, setOrders] = useState(mockOrders);
  const [menuList, setMenuList] = useState(initialItems.slice(0, 6));
  const [activeTab, setActiveTab] = useState<'orders' | 'menu' | 'dashboard'>('orders');

  const updateStatus = (id: string, status: string) =>
    setOrders(o => o.map(x => x.id === id ? { ...x, status } : x));

  const toggleAvailable = (id: number) =>
    setMenuList(m => m.map(item => item.id === id ? { ...item, isPopular: !item.isPopular } : item));

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Admin Header */}
      <div className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <ChefHat className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg">SpiceHub Admin</h1>
            <p className="text-stone-400 text-xs">Restaurant Management Panel</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-green-400 text-sm font-medium">Live</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-stone-200 px-6">
        <div className="flex gap-0 max-w-4xl mx-auto">
          {[
            { id: 'orders', label: '📦 Orders', badge: orders.filter(o => o.status === 'new').length },
            { id: 'menu', label: '🍽️ Menu Editor', badge: 0 },
            { id: 'dashboard', label: '📊 Dashboard', badge: 0 },
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id as any)}
              className={`relative px-6 py-4 font-semibold text-sm border-b-2 transition-colors ${activeTab === tab.id ? 'border-orange-500 text-orange-600' : 'border-transparent text-stone-500 hover:text-stone-800'}`}>
              {tab.label}
              {tab.badge > 0 && <span className="absolute top-3 right-3 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">{tab.badge}</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">

          {/* ORDERS TAB */}
          {activeTab === 'orders' && (
            <motion.div key="orders" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              {orders.filter(o => o.status === 'new').length > 0 && (
                <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}
                  className="bg-red-50 border-2 border-red-400 rounded-2xl p-4 mb-6 flex items-center gap-4">
                  <Bell className="w-8 h-8 text-red-500 animate-bounce" />
                  <div>
                    <p className="font-extrabold text-red-600">🔔 New Order Alert!</p>
                    <p className="text-red-500 text-sm">You have {orders.filter(o => o.status === 'new').length} new order(s) waiting for acceptance.</p>
                  </div>
                </motion.div>
              )}

              <div className="flex flex-col gap-5">
                {orders.map(order => (
                  <div key={order.id} className="bg-white rounded-2xl shadow-sm p-5">
                    <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                      <div>
                        <p className="font-extrabold text-lg">#{order.id}</p>
                        <p className="text-stone-500 text-sm">{order.customer} · {order.phone}</p>
                        <p className="text-stone-400 text-xs mt-0.5">{order.time}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`border text-xs font-bold px-3 py-1 rounded-full uppercase ${statusColors[order.status]}`}>{order.status}</span>
                        <span className="font-extrabold text-orange-500">{formatPrice(order.total)}</span>
                      </div>
                    </div>
                    <p className="text-stone-600 text-sm bg-stone-50 rounded-lg p-3 mb-4">🛒 {order.items}</p>
                    <div className="flex flex-wrap gap-2">
                      {order.status === 'new' && <>
                        <button onClick={() => updateStatus(order.id, 'preparing')} className="flex items-center gap-1 bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-green-600"><CheckCircle className="w-4 h-4" /> Accept</button>
                        <button onClick={() => updateStatus(order.id, 'delivered')} className="flex items-center gap-1 bg-red-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-600"><XCircle className="w-4 h-4" /> Reject</button>
                      </>}
                      {order.status === 'preparing' && <button onClick={() => updateStatus(order.id, 'ready')} className="flex items-center gap-1 bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-600"><Clock className="w-4 h-4" /> Mark Ready</button>}
                      {order.status === 'ready' && <button onClick={() => updateStatus(order.id, 'dispatched')} className="flex items-center gap-1 bg-purple-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-purple-600"><CheckCircle className="w-4 h-4" /> Mark Dispatched</button>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* MENU TAB */}
          {activeTab === 'menu' && (
            <motion.div key="menu" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-extrabold text-xl">Menu Items</h2>
                <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-orange-600"><Plus className="w-4 h-4" /> Add Item</button>
              </div>
              <div className="flex flex-col gap-4">
                {menuList.map(item => (
                  <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm flex gap-4 items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-bold">{item.name}</p>
                      <p className="text-orange-500 font-semibold text-sm">{formatPrice(item.price)}</p>
                      <p className="text-xs text-stone-400 mt-1 capitalize">{item.category} · {item.isVeg ? '🟢 Veg' : '🔴 Non-veg'}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => toggleAvailable(item.id)} className={`text-sm font-bold flex items-center gap-1 px-3 py-1.5 rounded-lg border ${item.isPopular ? 'text-green-600 border-green-200 bg-green-50' : 'text-stone-400 border-stone-200'}`}>
                        {item.isPopular ? <ToggleRight className="w-4 h-4" /> : <ToggleLeft className="w-4 h-4" />}
                        {item.isPopular ? 'Available' : 'Hidden'}
                      </button>
                      <button className="p-2 text-blue-400 hover:text-blue-600"><Edit className="w-4 h-4" /></button>
                      <button className="p-2 text-red-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* DASHBOARD TAB */}
          {activeTab === 'dashboard' && (
            <motion.div key="dashboard" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Today's Orders", value: '24', icon: ShoppingBag, color: 'bg-orange-500' },
                  { label: "Today's Revenue", value: '₹12,480', icon: IndianRupee, color: 'bg-green-500' },
                  { label: 'Active Customers', value: '186', icon: Users, color: 'bg-blue-500' },
                  { label: 'Avg. Order Value', value: '₹520', icon: TrendingUp, color: 'bg-purple-500' },
                ].map(stat => (
                  <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm">
                    <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-2xl font-extrabold text-stone-900">{stat.value}</p>
                    <p className="text-stone-400 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-extrabold mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-orange-500" /> Daily Sales (This Week)</h3>
                <div className="flex items-end gap-3 h-32">
                  {[65, 82, 45, 90, 72, 88, 100].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <motion.div initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="w-full bg-orange-400 rounded-t-lg" style={{ height: `${h}%` }} />
                      <span className="text-[10px] text-stone-400">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
