'use client';

import { motion } from 'framer-motion';
import { 
  BarChart3, PieChart, TrendingUp, Users, DollarSign, 
  ArrowUpRight, ArrowDownRight, Search, Bell, Settings, 
  Home, Wallet, CreditCard, LayoutGrid, Calendar, HelpCircle, LogOut 
} from 'lucide-react';
import Link from 'next/link';

const DashboardDemo = () => {
  const stats = [
    { title: 'Total Revenue', value: '$84,250.00', change: '+12.5%', isUp: true, icon: DollarSign },
    { title: 'Active Users', value: '1,240', change: '+18.2%', isUp: true, icon: Users },
    { title: 'Conversions', value: '42.3%', change: '-2.4%', isUp: false, icon: TrendingUp },
    { title: 'Avg. Order', value: '$245.00', change: '+5.1%', isUp: true, icon: BarChart3 },
  ];

  const transactions = [
    { id: 1, name: 'Stripe Payout', date: 'Oct 24, 2026', amount: '+$12,400.00', status: 'Completed' },
    { id: 2, name: 'AWS Cloud Services', date: 'Oct 23, 2026', amount: '-$1,250.00', status: 'Pending' },
    { id: 3, name: 'Premium Subscription', date: 'Oct 22, 2026', amount: '+$49.00', status: 'Completed' },
    { id: 4, name: 'Apple Store Purchase', date: 'Oct 21, 2026', amount: '-$849.00', status: 'Completed' },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col font-sans selection:bg-blue-500/30">
      {/* Project Metadata Bar */}
      <div className="w-full bg-[#0A0A0A] border-b border-white/10 relative z-[110]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-6 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
          <div className="flex items-center gap-2"><span className="text-blue-500">CLIENT:</span> FORTUNE 500 FINTECH</div>
          <div className="flex items-center gap-2"><span className="text-blue-500">INDUSTRY:</span> QUANTITATIVE ANALYTICS</div>
          <div className="flex items-center gap-2"><span className="text-blue-500">DELIVERABLES:</span> B2B DASHBOARD</div>
          <div className="flex items-center gap-2 font-black"><span className="text-blue-500">RESULTS:</span> 60% IMPROVEMENT IN OPS</div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-[#0A0A0A] border-r border-white/10 flex flex-col p-6 hidden lg:flex">
          <div className="flex items-center gap-3 mb-12 px-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <PieChart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">FinTrack</span>
          </div>

        <nav className="flex-1 space-y-2">
          {[
            { icon: Home, label: 'Dashboard', active: true },
            { icon: Wallet, label: 'Portfolio' },
            { icon: CreditCard, label: 'Payments' },
            { icon: LayoutGrid, label: 'Apps' },
            { icon: Calendar, label: 'Schedule' },
            { icon: Settings, label: 'Settings' },
          ].map((item, i) => (
            <div 
              key={i} 
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer ${
                item.active ? 'bg-blue-600/10 text-blue-500 border border-blue-500/20' : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-bold">{item.label}</span>
            </div>
          ))}
        </nav>

        <div className="mt-auto space-y-2">
          <div className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-white cursor-pointer">
            <HelpCircle className="w-5 h-5" />
            <span className="text-sm font-bold tracking-tight">Support</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-red-500/80 hover:text-red-500 cursor-pointer">
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-bold tracking-tight">Logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Header */}
        <header className="h-20 bg-[#0A0A0A]/50 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-full px-6 py-2 w-96">
            <Search className="w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search data, reports, transactions..." 
              className="bg-transparent border-none focus:ring-0 text-sm w-full"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer">
              <Bell className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full border-2 border-[#0A0A0A]" />
            </div>
            <Link href="/" className="px-5 py-2 bg-white/5 hover:bg-white/10 text-white text-[11px] font-bold uppercase tracking-widest rounded-full border border-white/10 transition-all">
              Back to Portfolio
            </Link>
            <div className="flex items-center gap-3 pl-6 border-l border-white/5">
              <div className="text-right">
                <div className="text-sm font-bold tracking-tight mb-0.5">Alex Sterling</div>
                <div className="text-[10px] uppercase font-black text-gray-500 tracking-widest">Admin</div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border border-white/10 shadow-xl" />
            </div>
          </div>
        </header>

        <div className="p-10 space-y-10 max-w-7xl">
          {/* Welcome Header */}
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">Financial Overview</h1>
              <p className="text-gray-500 text-sm font-medium">Welcome back, Alex. Here is what has happened since your last login.</p>
            </div>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all shadow-xl shadow-blue-500/10">
              Download Report
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0A0A0A] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-bold ${stat.isUp ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {stat.change}
                  </div>
                </div>
                <div className="text-2xl font-black mb-1">{stat.value}</div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-gray-500">{stat.title}</div>
              </motion.div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-[#0A0A0A] rounded-2xl border border-white/5 p-8">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-lg font-bold">Revenue Growth</h3>
                <div className="flex gap-2">
                  {['1D', '1W', '1M', '1Y'].map((t, idx) => (
                    <button key={idx} className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest ${t === '1M' ? 'bg-blue-600' : 'bg-white/5 text-gray-500 hover:bg-white/10'}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-64 flex items-end gap-3 relative">
                 {/* Visual Chart Mockup */}
                 {[...Array(12)].map((_, i) => (
                   <div key={i} className="flex-1 flex flex-col gap-2 items-center group">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${Math.random() * 80 + 20}%` }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                        className="w-full bg-gradient-to-t from-blue-600/20 to-blue-500/80 rounded-t-lg group-hover:from-blue-600/40 group-hover:to-blue-400 transition-all cursor-pointer relative"
                      >
                         <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-all">
                            +$1.2k
                         </div>
                      </motion.div>
                      <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest">Oct {i+1}</span>
                   </div>
                 ))}
                 {/* Decorative Grid Lines */}
                 <div className="absolute inset-0 flex flex-col justify-between pointer-events-none -z-10">
                    {[...Array(4)].map((_, i) => <div key={i} className="border-t border-white/5 w-full h-px" />)}
                 </div>
              </div>
            </div>

            <div className="bg-[#0A0A0A] rounded-2xl border border-white/5 p-8 flex flex-col">
              <h3 className="text-lg font-bold mb-8">Asset Allocation</h3>
              <div className="flex-1 flex items-center justify-center relative">
                 {/* SVG Pie Chart Mockup */}
                 <svg className="w-48 h-48 transform -rotate-90">
                    <circle cx="96" cy="96" r="80" fill="transparent" stroke="#1A1A1A" strokeWidth="24" />
                    <circle cx="96" cy="96" r="80" fill="transparent" stroke="#3B82F6" strokeWidth="24" strokeDasharray="502" strokeDashoffset="150" strokeLinecap="round" className="animate-pulse" />
                    <circle cx="96" cy="96" r="80" fill="transparent" stroke="#8B5CF6" strokeWidth="24" strokeDasharray="502" strokeDashoffset="400" strokeLinecap="round" />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-3xl font-black">74%</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Utility</div>
                 </div>
              </div>
              <div className="space-y-4 mt-8">
                 <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2 font-bold text-gray-400"><div className="w-2 h-2 bg-blue-500 rounded-full" /> Crypto</div>
                    <div className="font-black text-white">42.5%</div>
                 </div>
                 <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2 font-bold text-gray-400"><div className="w-2 h-2 bg-purple-500 rounded-full" /> Stocks</div>
                    <div className="font-black text-white">31.2%</div>
                 </div>
              </div>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="bg-[#0A0A0A] rounded-2xl border border-white/5 p-8 overflow-hidden">
            <h3 className="text-lg font-bold mb-8">Recent Transactions</h3>
            <div className="w-full">
               <div className="grid grid-cols-4 pb-4 border-b border-white/5 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 px-4">
                  <div>Entity</div>
                  <div>Date</div>
                  <div>Amount</div>
                  <div>Status</div>
               </div>
               <div className="divide-y divide-white/5">
                  {transactions.map((t, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="grid grid-cols-4 py-6 px-4 hover:bg-white/5 transition-colors cursor-pointer group rounded-xl"
                    >
                       <div className="text-sm font-bold group-hover:text-blue-400 transition-colors">{t.name}</div>
                       <div className="text-xs font-medium text-gray-500">{t.date}</div>
                       <div className={`text-sm font-black ${t.amount.startsWith('+') ? 'text-green-500' : 'text-white'}`}>
                          {t.amount}
                       </div>
                       <div>
                          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${t.status === 'Completed' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
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

export default DashboardDemo;
