"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  Search, 
  Plus, 
  FileText, 
  MessageCircle, 
  ArrowUpRight, 
  ArrowDownRight, 
  CreditCard, 
  Settings, 
  LogOut,
  ArrowRight,
  ChevronRight,
  Printer,
  Download,
  Filter,
  MoreVertical,
  CheckCircle2,
  Clock,
  X
} from 'lucide-react';
import { stockData, formatCurrency, Product, Sale, Customer } from './data';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const chartData = [
  { name: 'Mon', sales: 12400 },
  { name: 'Tue', sales: 15600 },
  { name: 'Wed', sales: 11200 },
  { name: 'Thu', sales: 18450 },
  { name: 'Fri', sales: 14200 },
  { name: 'Sat', sales: 22000 },
  { name: 'Sun', sales: 19800 },
];

export default function StockDashboard() {
  const [activeTab, setActiveTab] = useState<'dashboard'|'inventory'|'sales'|'customers'>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBilling, setShowBilling] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  // Stats calculation
  const totalSalesToday = 18450;
  const lowStockCount = stockData.products.filter(p => p.stock < p.minStock).length;
  const totalDueAmount = stockData.customers.reduce((acc, c) => acc + c.dueAmount, 0);

  const filteredProducts = useMemo(() => {
    return stockData.products.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const notify = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* 1. SIDEBAR NAVIGATION */}
      <aside className="w-20 lg:w-72 bg-white border-r border-slate-100 flex flex-col transition-all duration-500">
        <div className="p-8 pb-12 flex items-center gap-3">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-indigo-600/30 shrink-0">
            <TrendingUp className="w-6 h-6 stroke-[2.5]" />
          </div>
          <span className="text-2xl font-black text-slate-900 tracking-tighter hidden lg:block">StockSync</span>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {[
            { id: 'dashboard', icon: LayoutDashboard, label: 'Control Center' },
            { id: 'inventory', icon: Package, label: 'Inventory Vault' },
            { id: 'sales', icon: ShoppingCart, label: 'Sales & Billing' },
            { id: 'customers', icon: Users, label: 'Customer Ledger' },
          ].map(item => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-[1.25rem] transition-all duration-300 group
                ${activeTab === item.id 
                  ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-600'}`}
            >
              <item.icon className={`w-5 h-5 shrink-0 ${activeTab === item.id ? 'stroke-[2.5]' : ''}`} />
              <span className="font-bold text-sm hidden lg:block uppercase tracking-widest">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-50">
          <div className="bg-indigo-50/50 p-6 rounded-[2rem] space-y-4 hidden lg:block group hover:bg-indigo-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-200 overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=4" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs font-black text-slate-900 uppercase tracking-widest">Rahul Reddy</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Business Owner</p>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-red-500 transition-colors py-2 text-[10px] font-black uppercase tracking-widest">
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* HEADER */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100 flex items-center justify-between px-10 py-6">
          <div className="flex items-center gap-10">
            <h2 className="text-xl font-bold text-slate-900 uppercase tracking-[0.3em] hidden md:block">
              {activeTab === 'dashboard' ? 'Overview' : activeTab.toUpperCase()}
            </h2>
            <div className="relative group hidden sm:block">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
              <input 
                placeholder="Search products, invoices, customers..." 
                className="bg-slate-50 border border-slate-100 rounded-[1.25rem] pl-12 pr-6 py-3 w-80 text-sm font-bold focus:bg-white focus:border-indigo-600 transition-all outline-none" 
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowBilling(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-[1.25rem] font-black text-[10px] uppercase tracking-widest shadow-xl shadow-indigo-600/20 active:scale-95 transition-all flex items-center gap-3 group"
            >
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" /> New Sale Entry
            </button>
            <div className="relative w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all cursor-pointer">
              <AlertTriangle className={`w-5 h-5 ${lowStockCount > 0 ? 'text-orange-500 animate-pulse' : ''}`} />
              {lowStockCount > 0 && (
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
              )}
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="p-10 space-y-10">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.div 
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-10"
              >
                {/* STATS TILES */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { label: 'Today Revenue', val: formatCurrency(totalSalesToday), icon: TrendingUp, trend: '+12.5%', color: 'indigo' },
                    { label: 'Inventory Items', val: '342 Items', icon: Package, trend: '4 New Added', color: 'blue' },
                    { label: 'Low Stock Alert', val: `${lowStockCount} Products`, icon: AlertTriangle, trend: 'Critial Needs', color: 'orange', active: lowStockCount > 0 },
                    { label: 'Customer Dues', val: formatCurrency(totalDueAmount), icon: Users, trend: formatCurrency(4200) + ' Paid Today', color: 'green' },
                  ].map(stat => (
                    <div key={stat.label} className="bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-slate-200/50 border border-slate-50 hover:-translate-y-1 transition-all group overflow-hidden relative">
                      <div className={`absolute top-0 right-0 w-24 h-24 bg-${stat.color}-50 rounded-bl-[4rem] group-hover:scale-110 transition-transform -z-0`} />
                      <div className="relative z-10">
                        <div className={`w-12 h-12 bg-${stat.color}-100 rounded-2xl flex items-center justify-center text-${stat.color}-600 mb-6 group-hover:rotate-6 transition-transform`}>
                          <stat.icon className="w-6 h-6" />
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{stat.label}</p>
                        <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-4">{stat.val}</h3>
                        <p className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-1 ${stat.active ? 'text-red-500' : 'text-slate-400'}`}>
                          {stat.trend.includes('+') ? <ArrowUpRight className="w-3.5 h-3.5" /> : null} {stat.trend}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CHARTS ROW */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2 bg-white rounded-[3.5rem] p-10 shadow-2xl shadow-slate-200/50 border border-slate-50">
                    <div className="flex items-center justify-between mb-12">
                      <div>
                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest flex items-center gap-3">
                          <TrendingUp className="w-5 h-5 text-indigo-600" /> Revenue Growth
                        </h3>
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">Weekly Sales Performance Analysis</p>
                      </div>
                      <div className="flex gap-2">
                        {['Day', 'Week', 'Month'].map(t => (
                          <button key={t} className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest border border-slate-100 ${t === 'Week' ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}>{t}</button>
                        ))}
                      </div>
                    </div>
                    <div className="h-80 w-full overflow-hidden">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f5f9" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900, fill: '#94a3b8' }} dy={10} />
                          <YAxis hide />
                          <Tooltip 
                            contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.1)', fontWeight: 900, fontSize: '12px' }}
                            cursor={{ stroke: '#4f46e5', strokeWidth: 2 }}
                          />
                          <Area type="monotone" dataKey="sales" stroke="#4f46e5" strokeWidth={4} fillOpacity={1} fill="url(#colorSales)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="bg-slate-900 rounded-[3.5rem] p-10 text-white relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full group-hover:scale-125 transition-transform duration-700" />
                     <h3 className="text-xl font-black mb-8 uppercase tracking-widest flex items-center gap-3">
                       <CheckCircle2 className="w-5 h-5 text-indigo-400" /> Top Performer
                     </h3>
                     <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden mb-8 border border-white/10 group-hover:rotate-1 transition-transform">
                       <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex flex-col justify-end p-6">
                         <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">Essential Grain</span>
                         <h4 className="text-2xl font-black tracking-tight">Rice 25kg Bag</h4>
                       </div>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                       <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                         <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Sold Units</p>
                         <p className="text-xl font-black">245 Bags</p>
                       </div>
                       <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                         <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Net Profit</p>
                         <p className="text-xl font-black text-indigo-400">₹14,500</p>
                       </div>
                     </div>
                  </div>
                </div>

                {/* LOW STOCK TABLE PREVIEW */}
                <div className="bg-white rounded-[3.5rem] p-10 shadow-2xl shadow-slate-200/50 border border-slate-50 overflow-hidden relative group">
                  <div className="flex items-center justify-between mb-10">
                    <div>
                      <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-orange-500" /> Critical Stock Alerts
                      </h3>
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">Refill these items to avoid sales loss</p>
                    </div>
                    <button className="text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-400 transition-all flex items-center gap-2 group/btn">
                      View All Stock <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-separate border-spacing-0">
                      <thead>
                        <tr className="text-left text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-50">
                          <th className="px-6 py-4">Product Name</th>
                          <th className="px-6 py-4">Category</th>
                          <th className="px-6 py-4">Current Stock</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4">Request Stock</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm font-bold text-slate-700">
                        {stockData.products.filter(p => p.stock < p.minStock).map((p, i) => (
                          <tr key={p.id} className="group hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-6 border-t border-slate-100 flex items-center gap-4">
                              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
                                <Package className="w-5 h-5" />
                              </div>
                              {p.name}
                            </td>
                            <td className="px-6 py-6 border-t border-slate-100 uppercase text-[10px] tracking-widest text-slate-400">{p.category}</td>
                            <td className="px-6 py-6 border-t border-slate-100 text-red-500 font-black">{p.stock} {p.unit} left</td>
                            <td className="px-6 py-6 border-t border-slate-100 text-[10px] font-black uppercase tracking-widest">
                               <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full border border-orange-100">Reorder Level</span>
                            </td>
                            <td className="px-6 py-6 border-t border-slate-100">
                              <button 
                                onClick={() => notify(`WhatsApp alert sent to supplier for ${p.name}`)}
                                className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center hover:bg-green-600 hover:text-white transition-all shadow-lg active:scale-95"
                              >
                                <MessageCircle className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'inventory' && (
              <motion.div 
                key="inventory"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-[3.5rem] p-10 shadow-2xl shadow-slate-200/50 border border-slate-50 min-h-[60vh]"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
                   <div>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase text-xs tracking-widest">Master Inventory Vault</h3>
                      <p className="text-slate-400 font-medium text-sm mt-1">Manage 342 products across 12 categories</p>
                   </div>
                   <div className="flex gap-4 w-full md:w-auto">
                     <div className="relative flex-1 md:w-80 group">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 transition-colors group-focus-within:text-indigo-600" />
                        <input 
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search stock..." 
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 py-4 text-xs font-black uppercase tracking-widest focus:bg-white focus:border-indigo-600 transition-all outline-none shadow-inner" 
                        />
                     </div>
                     <button className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all"><Filter className="w-5 h-5" /></button>
                   </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-50">
                        <th className="px-6 py-6 font-black uppercase tracking-widest">Product Info</th>
                        <th className="px-6 py-6 font-black uppercase tracking-widest">Purchase / Selling</th>
                        <th className="px-6 py-6 font-black uppercase tracking-widest">Stock Level</th>
                        <th className="px-6 py-6 font-black uppercase tracking-widest">Estimated Value</th>
                        <th className="px-6 py-6 font-black uppercase tracking-widest text-center">Manage</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm font-bold text-slate-700">
                      {filteredProducts.map((p, i) => (
                        <tr key={p.id} className="group hover:bg-slate-50/50 transition-all border-b border-slate-50">
                          <td className="px-6 py-8">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shadow-lg group-hover:rotate-6 transition-transform"><Package className="w-6 h-6" /></div>
                              <div>
                                <h5 className="font-black text-slate-900 group-hover:text-indigo-600 transition-colors uppercase text-xs tracking-widest">{p.name}</h5>
                                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">ID: #{p.id} • {p.category}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-8">
                            <div className="space-y-1">
                               <p className="text-xs font-black text-slate-400 uppercase tracking-widest">In: <span className="text-slate-900">{formatCurrency(p.purchasePrice)}</span></p>
                               <p className="text-xs font-black text-indigo-600 uppercase tracking-widest">Out: {formatCurrency(p.sellingPrice)}</p>
                            </div>
                          </td>
                          <td className="px-6 py-8">
                             <div className="flex items-center gap-3">
                               <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                                 <div 
                                  className={`h-full rounded-full transition-all duration-1000 ${p.stock < p.minStock ? 'bg-red-500' : 'bg-green-500'}`} 
                                  style={{ width: `${Math.min((p.stock / (p.minStock * 2)) * 100, 100)}%` }} 
                                 />
                               </div>
                               <span className={`text-xs font-black ${p.stock < p.minStock ? 'text-red-500' : 'text-slate-900'}`}>{p.stock} units</span>
                             </div>
                          </td>
                          <td className="px-6 py-8 font-black text-slate-900 text-lg tracking-tighter">
                            {formatCurrency(p.stock * p.sellingPrice)}
                          </td>
                          <td className="px-6 py-8">
                            <div className="flex justify-center gap-2">
                              <button className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white transition-all"><Settings className="w-4 h-4 mx-auto" /></button>
                              <button className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 hover:bg-red-500 hover:text-white transition-all"><MoreVertical className="w-4 h-4 mx-auto" /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === 'sales' && (
               <motion.div 
                 key="sales"
                 initial={{ opacity: 0, scale: 0.98 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.98 }}
                 className="space-y-10"
               >
                 <div className="bg-indigo-600 rounded-[3.5rem] p-12 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-bl-[8rem] group-hover:scale-125 transition-transform duration-1000 -z-0" />
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
                      <div className="space-y-4 text-center md:text-left">
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-300">Net Business Volume</p>
                        <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">{formatCurrency(totalSalesToday * 12.5)}</h3>
                        <p className="text-indigo-200 text-sm font-medium">This month revenue is 15% higher than previous cycle.</p>
                      </div>
                      <div className="flex flex-col gap-4 w-full md:w-auto">
                        <button className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3">
                          <Download className="w-4 h-4" /> Download PDF Statement
                        </button>
                        <button className="bg-indigo-500/50 hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3">
                          <Printer className="w-4 h-4" /> Print Daily Bills
                        </button>
                      </div>
                    </div>
                 </div>

                 <div className="bg-white rounded-[3.5rem] p-10 shadow-2xl shadow-slate-200/50 border border-slate-50">
                    <h3 className="text-xl font-black text-slate-900 mb-10 uppercase text-xs tracking-widest underline decoration-indigo-200 underline-offset-8">Recent Transaction History</h3>
                    <div className="space-y-4">
                      {stockData.sales.map((sale, i) => (
                        <div key={sale.id} className="flex flex-wrap items-center justify-between p-6 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:bg-white hover:border-indigo-100 hover:shadow-xl transition-all cursor-pointer">
                           <div className="flex items-center gap-6">
                             <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black ${sale.status === 'paid' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                               {sale.status === 'paid' ? <CheckCircle2 className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                             </div>
                             <div>
                               <p className="text-xs font-black text-slate-400 uppercase tracking-widest">INV #{sale.id} • {sale.date}</p>
                               <h5 className="text-lg font-black text-slate-900 leading-tight">{sale.productName} (x{sale.quantity})</h5>
                               <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-0.5">Sold to: <span className="text-slate-600">{sale.customerName}</span></p>
                             </div>
                           </div>
                           <div className="text-right">
                             <p className="text-2xl font-black text-slate-900 tracking-tighter">{formatCurrency(sale.total)}</p>
                             <p className="text-[10px] font-black text-green-600 uppercase tracking-widest">Profit: +{formatCurrency(sale.profit)}</p>
                           </div>
                        </div>
                      ))}
                    </div>
                 </div>
               </motion.div>
            )}

            {activeTab === 'customers' && (
              <motion.div 
                key="customers"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {stockData.customers.map(c => (
                  <div key={c.name} className="bg-white rounded-[3.5rem] p-10 shadow-2xl shadow-slate-200/50 border border-slate-50 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full group-hover:scale-110 transition-transform -z-0" />
                    <div className="relative z-10 flex items-center gap-5 mb-8">
                      <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-600 text-white flex items-center justify-center text-2xl font-black shadow-xl shadow-indigo-600/30 group-hover:rotate-3 transition-transform">
                        {c.name[0]}
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-slate-900 leading-none mb-1">{c.name}</h4>
                        <p className="text-xs font-bold text-slate-400 tracking-widest">{c.phone}</p>
                      </div>
                    </div>

                    <div className="space-y-6 mb-10 pt-6 border-t border-slate-50">
                      <div className="flex justify-between items-center">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Creditor Balance</p>
                        <p className={`text-2xl font-black tracking-tighter ${c.dueAmount > 0 ? 'text-red-500' : 'text-green-600'}`}>{formatCurrency(c.dueAmount)}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Last Visited</p>
                        <p className="text-xs font-black text-slate-800 uppercase tracking-widest">{c.lastPurchase}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {c.dueAmount > 0 && (
                        <button 
                          onClick={() => notify(`Reminder sent to ${c.name} for ${formatCurrency(c.dueAmount)}`)}
                          className="bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-green-500/20 active:scale-95 flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" /> Send Reminder
                        </button>
                      )}
                      <button className="bg-slate-900 hover:bg-indigo-600 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2">
                         View Ledger
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* 3. NOTIFICATION OVERLAY */}
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-10 left-1/2 z-[100] bg-slate-900 text-white px-10 py-5 rounded-3xl shadow-2xl flex items-center gap-4 border border-white/10"
          >
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0"><CheckCircle2 className="w-5 h-5" /></div>
            <p className="font-black text-xs uppercase tracking-widest">{notification}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. BILLING MODAL (DEMO) */}
      <AnimatePresence>
        {showBilling && (
           <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowBilling(false)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
             <motion.div initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }} className="relative bg-white rounded-[4rem] p-12 max-w-lg w-full shadow-2xl">
                <button onClick={() => setShowBilling(false)} className="absolute top-8 right-8 w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all"><X className="w-6 h-6" /></button>
                <div className="mb-10 text-center">
                  <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase text-xs tracking-widest">New Sale Invoice</h3>
                  <p className="text-slate-400 font-medium text-sm mt-1">Select products to generate instant bill</p>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Search Product</label>
                    <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 font-black text-xs uppercase tracking-widest appearance-none outline-none focus:border-indigo-600 transition-all">
                      {stockData.products.map(p => (
                        <option key={p.id}>{p.name} - {formatCurrency(p.sellingPrice)}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Quantity</label>
                      <input type="number" defaultValue="1" className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 font-black text-lg text-slate-900 outline-none focus:border-indigo-600 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Unit Type</label>
                      <div className="w-full bg-slate-100 rounded-2xl p-5 font-black text-xs uppercase tracking-widest text-slate-400">Fixed: Bag</div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-100 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Calculation</span>
                      <span className="text-3xl font-black text-slate-900 tracking-tighter">{formatCurrency(1450)}</span>
                    </div>
                    <button 
                      onClick={() => { setShowBilling(false); notify("Sale entry added & Invoice generated successfully!"); }}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 rounded-[2.5rem] font-black text-xs uppercase tracking-widest transition-all shadow-2xl shadow-indigo-600/20 active:scale-95"
                    >
                      Process Sale & Print
                    </button>
                  </div>
                </div>
             </motion.div>
           </div>
        )}
      </AnimatePresence>
    </div>
  );
}
