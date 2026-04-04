'use client';

import { motion } from 'framer-motion';
import {
  BarChart3, PieChart, TrendingUp, Users, DollarSign,
  ArrowUpRight, ArrowDownRight, Search, Bell, Settings,
  Home, Wallet, CreditCard, LayoutGrid, Calendar, HelpCircle, LogOut,
  Activity, ShoppingCart, Package, ChevronRight, Filter, Download,
  Zap, Globe
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const LocalStreamCRM = () => {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [activeRange, setActiveRange] = useState('1M');

  const stats = [
    { title: 'Monthly Sales', value: '$42,850', change: '+12.5%', changeVal: '+$4,450', isUp: true, icon: DollarSign, sparkline: [30, 50, 45, 60, 55, 80, 72, 90, 85, 100] },
    { title: 'New Leads', value: '1,204', change: '+18.2%', changeVal: '+120', isUp: true, icon: Users, sparkline: [20, 35, 30, 55, 48, 70, 65, 80, 75, 95] },
    { title: 'Retention Rate', value: '88.3%', change: '+4.1%', changeVal: '+2.1%', isUp: true, icon: TrendingUp, sparkline: [40, 38, 45, 42, 55, 50, 60, 58, 65, 70] },
    { title: 'Customer LTV', value: '$1,245', change: '-2.4%', changeVal: '-$12.00', isUp: false, icon: ShoppingCart, sparkline: [90, 85, 88, 82, 80, 78, 75, 76, 72, 70] },
  ];

  const transactions = [
    { id: 1, name: 'Shopify Online Sale', category: 'Revenue', date: 'Apr 03, 2026', amount: '+$1,280', status: 'Completed', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100' },
    { id: 2, name: 'Local Facebook Ad', category: 'Marketing', date: 'Apr 02, 2026', amount: '-$450', status: 'Pending', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100' },
    { id: 3, name: 'In-Store Purchase', category: 'POS', date: 'Apr 02, 2026', amount: '+$840', status: 'Completed', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100' },
    { id: 4, name: 'Inventory Restock', category: 'Ops', date: 'Apr 01, 2026', amount: '-$2,450', status: 'Completed', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100' },
    { id: 5, name: 'Bulk Client Order', category: 'Revenue', date: 'Mar 31, 2026', amount: '+$5,500', status: 'Completed', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100' },
    { id: 6, name: 'Email Marketing Pro', category: 'Software', date: 'Mar 30, 2026', amount: '-$99', status: 'Failed', avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=100' },
  ];

  const navItems = [
    { icon: Home, label: 'Dashboard' },
    { icon: Users, label: 'Customers' },
    { icon: Wallet, label: 'Sales' },
    { icon: Globe, label: 'Marketing' },
    { icon: Calendar, label: 'Schedule' },
    { icon: Activity, label: 'Analytics' },
    { icon: Settings, label: 'Settings' },
  ];

  const chartHeights = [35, 55, 45, 70, 60, 85, 65, 90, 72, 88, 75, 95];

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col font-sans selection:bg-blue-500/30">
      {/* Meta Bar */}
      <div className="w-full bg-[#0A0A0A] border-b border-white/10">
        <div className="max-w-full px-6 py-3 flex flex-wrap justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
          <div><span className="text-blue-500">CLIENT:</span> REGIONAL RETAIL & SERVICES</div>
          <div><span className="text-blue-500">INDUSTRY:</span> LOCAL BUSINESS GROWTH</div>
          <div><span className="text-blue-500">DELIVERABLES:</span> GROWTH CRM PLATFORM</div>
          <div className="font-black"><span className="text-blue-500">RESULTS:</span> 45% LEAD GROWTH</div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-[#0C0C0C] border-r border-white/5 flex flex-col p-5 hidden lg:flex flex-shrink-0">
          <div className="flex items-center gap-3 mb-10 px-2">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight">LocalStream</span>
              <div className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">SMB Growth Pro</div>
            </div>
          </div>

          <div className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-700 mb-3 px-3">Main Menu</div>
          <nav className="flex-1 space-y-1">
            {navItems.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveNav(item.label)}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all cursor-pointer ${activeNav === item.label ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'}`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-semibold">{item.label}</span>
                {item.label === 'Customers' && (
                  <span className="ml-auto bg-blue-600/20 text-blue-400 text-[9px] font-black px-2 py-0.5 rounded-full">12 New</span>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-6 p-4 bg-blue-600/10 border border-blue-500/20 rounded-xl mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-blue-400 fill-blue-400" />
              <span className="text-xs font-bold text-blue-400">Pro Plan</span>
            </div>
            <p className="text-gray-500 text-[10px] leading-relaxed mb-3">Upgrade for unlimited data exports and team seats.</p>
            <button className="text-[10px] font-black uppercase tracking-widest text-blue-400 hover:text-blue-300">Manage Plan →</button>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-3 px-3 py-3 text-gray-600 hover:text-gray-400 cursor-pointer rounded-xl hover:bg-white/5">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Support</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-3 text-red-500/60 hover:text-red-500 cursor-pointer rounded-xl hover:bg-red-500/5">
              <LogOut className="w-4 h-4" />
              <span className="text-sm font-semibold">Logout</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {/* Header */}
          <header className="h-18 bg-[#0C0C0C]/60 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-8 py-4 sticky top-0 z-20">
            <div>
              <h1 className="text-xl font-bold">Business Hub</h1>
              <p className="text-gray-600 text-xs font-medium mt-0.5">Thursday, April 3, 2026 · Store Performance</p>
            </div>

            <div className="flex items-center gap-5">
              <div className="hidden md:flex items-center gap-3 bg-white/5 border border-white/5 rounded-full px-5 py-2.5 w-72">
                <Search className="w-3.5 h-3.5 text-gray-600" />
                <input
                  type="text"
                  placeholder="Search transactions, reports..."
                  className="bg-transparent border-none focus:outline-none text-sm w-full text-gray-400 placeholder-gray-700"
                />
              </div>
              <div className="relative cursor-pointer">
                <Bell className="w-5 h-5 text-gray-500 hover:text-white transition-colors" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-[#0C0C0C]" />
              </div>
              <Link href="/" className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10 transition-all">
                ← Portfolio
              </Link>
              <div className="flex items-center gap-3 pl-4 border-l border-white/5">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
                    alt="Alex"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="hidden xl:block">
                  <div className="text-sm font-bold tracking-tight">prawinreddi</div>
                  <div className="text-[9px] uppercase font-black text-gray-600 tracking-widest">Founder</div>
                </div>
              </div>
            </div>
          </header>

          <div className="p-8 space-y-8 max-w-screen-2xl">
            {/* Welcome Row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Welcome back, prawinreddi 👋</h2>
                <p className="text-gray-500 text-sm mt-1">Here's your business snapshot for today.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <Filter className="w-4 h-4" /> Filter
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20">
                  <Download className="w-4 h-4" /> Export Report
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-[#0E0E0E] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all group"
                >
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-blue-600/10 transition-colors">
                      <stat.icon className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg ${stat.isUp ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                      {stat.isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      {stat.change}
                    </div>
                  </div>
                  <div className="text-2xl font-black mb-1">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-4">{stat.title}</div>
                  {/* Mini Sparkline */}
                  <div className="flex items-end gap-0.5 h-10">
                    {stat.sparkline.map((h, j) => (
                      <div
                        key={j}
                        className={`flex-1 rounded-sm transition-all ${stat.isUp ? 'bg-green-500/30 group-hover:bg-green-500/50' : 'bg-red-500/30 group-hover:bg-red-500/50'}`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className={`text-xs font-bold mt-2 ${stat.isUp ? 'text-green-500' : 'text-red-500'}`}>{stat.changeVal} this month</div>
                </motion.div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Revenue Chart */}
              <div className="lg:col-span-2 bg-[#0E0E0E] rounded-2xl border border-white/5 p-7">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-lg font-bold">Sales Growth</h3>
                    <p className="text-gray-600 text-xs mt-0.5">Revenue and orders over time</p>
                  </div>
                  <div className="flex gap-1.5">
                    {['1D', '1W', '1M', '3M', '1Y'].map(t => (
                      <button
                        key={t}
                        onClick={() => setActiveRange(t)}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${t === activeRange ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white/5 text-gray-600 hover:bg-white/10 hover:text-gray-400'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="h-56 flex items-end gap-2 relative">
                  {chartHeights.map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col gap-1.5 items-center group cursor-pointer">
                      <div className="relative w-full group-hover:opacity-100">
                        <div
                          className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-2.5 py-1.5 rounded-lg text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap z-10 shadow-xl"
                        >
                          ${(h * 1.8 + 10).toFixed(1)}k
                        </div>
                      </div>
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1.2, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full bg-gradient-to-t from-blue-600/30 to-blue-400/80 rounded-t-lg group-hover:from-blue-600/60 group-hover:to-blue-300 transition-all relative"
                      >
                        {i === chartHeights.length - 1 && (
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-blue-400 rounded-full border-2 border-[#0E0E0E] shadow-lg shadow-blue-400/50" />
                        )}
                      </motion.div>
                      <span className="text-[9px] font-bold text-gray-700 uppercase">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                      </span>
                    </div>
                  ))}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
                    {[...Array(5)].map((_, i) => <div key={i} className="border-t border-white/4 w-full h-px" />)}
                  </div>
                </div>
              </div>

              {/* Asset Pie */}
              <div className="bg-[#0E0E0E] rounded-2xl border border-white/5 p-7 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-lg font-bold">Lead Attribution</h3>
                  <p className="text-gray-600 text-xs mt-0.5">Where your customers find you</p>
                </div>
                <div className="flex-1 flex items-center justify-center relative">
                  <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 192 192">
                    <circle cx="96" cy="96" r="80" fill="transparent" stroke="#1A1A1A" strokeWidth="22" />
                    <circle cx="96" cy="96" r="80" fill="transparent" stroke="#3B82F6" strokeWidth="22" strokeDasharray="502" strokeDashoffset="155" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    <circle cx="96" cy="96" r="80" fill="transparent" stroke="#8B5CF6" strokeWidth="22" strokeDasharray="502" strokeDashoffset="355" strokeLinecap="round" />
                    <circle cx="96" cy="96" r="80" fill="transparent" stroke="#10B981" strokeWidth="22" strokeDasharray="502" strokeDashoffset="450" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-3xl font-black">74%</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Utilized</div>
                  </div>
                </div>
                <div className="space-y-3 mt-4">
                  {[
                    { color: 'bg-blue-500', label: 'Facebook Ads', value: '42.5%' },
                    { color: 'bg-purple-500', label: 'Google Search', value: '31.2%' },
                    { color: 'bg-emerald-500', label: 'Referrals', value: '18.8%' },
                    { color: 'bg-gray-600', label: 'Walk-ins', value: '7.5%' },
                  ].map((asset, i) => (
                    <div key={i} className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-2 font-bold text-gray-400">
                        <div className={`w-2 h-2 rounded-full ${asset.color}`} />
                        {asset.label}
                      </div>
                      <div className="font-black text-white">{asset.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { title: 'Store Activity', value: '$84,200', sub: 'Regional Sales', icon: TrendingUp, color: 'green', up: true, pct: '+8.4%' },
                { title: 'New Customer Rate', value: '1.2%', sub: 'Avg 45 per day', icon: Users, color: 'blue', up: true, pct: '-0.3%' },
                { title: 'Customer Satisfaction', value: '92%', sub: '+4% vs last mo', icon: Activity, color: 'purple', up: true, pct: '+4 pts' },
              ].map((kpi, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-[#0E0E0E] rounded-2xl border border-white/5 p-6 flex items-center gap-5"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${kpi.color === 'green' ? 'bg-green-500/10' : kpi.color === 'purple' ? 'bg-purple-500/10' : 'bg-blue-500/10'}`}>
                    <kpi.icon className={`w-6 h-6 ${kpi.color === 'green' ? 'text-green-400' : kpi.color === 'purple' ? 'text-purple-400' : 'text-blue-400'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1">{kpi.title}</div>
                    <div className="text-2xl font-black mb-0.5">{kpi.value}</div>
                    <div className="text-gray-600 text-xs">{kpi.sub}</div>
                  </div>
                  <div className={`text-xs font-bold px-2 py-1 rounded-lg ${kpi.up ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>{kpi.pct}</div>
                </motion.div>
              ))}
            </div>

            {/* Transactions Table */}
            <div className="bg-[#0E0E0E] rounded-2xl border border-white/5 overflow-hidden">
              <div className="flex items-center justify-between p-7 border-b border-white/5">
                <div>
                  <h3 className="text-lg font-bold">Recent Transactions</h3>
                  <p className="text-gray-600 text-xs mt-0.5">Last 30 days activity</p>
                </div>
                <button className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest">
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div>
                <div className="grid grid-cols-5 px-7 py-4 border-b border-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
                  <div className="col-span-2">Transaction</div>
                  <div>Category</div>
                  <div>Amount</div>
                  <div>Status</div>
                </div>
                <div className="divide-y divide-white/5">
                  {transactions.map((t, i) => (
                    <motion.div
                      key={t.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.06 }}
                      className="grid grid-cols-5 py-5 px-7 hover:bg-white/3 transition-colors cursor-pointer group items-center"
                    >
                      <div className="col-span-2 flex items-center gap-3">
                        <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/10">
                          <Image src={t.avatar} alt={t.name} fill className="object-cover" unoptimized />
                        </div>
                        <div>
                          <div className="text-sm font-bold group-hover:text-blue-400 transition-colors">{t.name}</div>
                          <div className="text-gray-600 text-xs">{t.date}</div>
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-600 bg-white/5 px-2 py-0.5 rounded-full">{t.category}</span>
                      </div>
                      <div className={`text-sm font-black ${t.amount.startsWith('+') ? 'text-green-400' : 'text-white'}`}>{t.amount}</div>
                      <div>
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${t.status === 'Completed' ? 'bg-green-500/10 text-green-400' : t.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-400' : 'bg-red-500/10 text-red-400'}`}>
                          {t.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LocalStreamCRM;
