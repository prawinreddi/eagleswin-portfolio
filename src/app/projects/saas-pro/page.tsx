'use client';

import { ChevronRight, BarChart3, Shield, Zap, Globe, CheckCircle2, X, ArrowRight, Play, Star, Users, TrendingUp, Clock } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const useCounter = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
};

const ZenithMedical = () => {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [activeTab, setActiveTab] = useState('portal');
  const [activePlan, setActivePlan] = useState('family');
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const users = useCounter(10000, 2200, statsVisible);
  const uptime = useCounter(9999, 2000, statsVisible);
  const integrations = useCounter(150, 1800, statsVisible);
  const speed = useCounter(99, 1600, statsVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setStatsVisible(true); }, { threshold: 0.3 });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleAction = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const featureTabs = {
    portal: {
      title: 'Digital Health Records',
      desc: 'Access your full medical history, lab results, and prescriptions in one centralized, secure dashboard. Empowering you with data.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=90&w=1600',
      points: ['Instant lab result access', 'Prescription renewal requests', 'Vaccination tracking', 'Secure physician messaging'],
    },
    telehealth: {
      title: 'Virtual Consultations',
      desc: 'Connect with your specialists from the comfort of your home. High-definition video with integrated health monitoring tools.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=90&w=1600',
      points: ['Secure HD video calls', 'Real-time vital sharing', 'Screen sharing for docs', 'Digital session notes'],
    },
    security: {
      title: 'HIPAA Compliant Privacy',
      desc: 'Military-grade encryption for all patient data. We prioritize your privacy above all else with advanced security protocols.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=90&w=1600',
      points: ['End-to-end encryption', 'Multi-factor authentication', 'Regular security audits', 'Privacy-first data storage'],
    },
  };

  const plans = [
    { id: 'starter', name: 'Starter', price: '$49', period: '/mo', features: ['5 projects', '10k events/mo', 'Basic analytics', '5 automations', 'Email support'] },
    { id: 'pro', name: 'Professional', price: '$149', period: '/mo', features: ['Unlimited projects', '1M events/mo', 'Advanced analytics', 'Unlimited automations', 'Priority support', 'Custom integrations', 'Team management'], featured: true },
    { id: 'enterprise', name: 'Enterprise', price: 'Custom', period: '', features: ['Everything in Pro', 'Dedicated infrastructure', 'SLA guarantee', 'On-premise option', '24/7 phone support', 'Compliance package', 'White-label'] },
  ];

  const testimonials = [
    {
      quote: 'The patient portal has completely changed how I manage my chronic condition. Everything I need is right there.',
      name: 'Michael Sanghavi',
      role: 'Patient for 5+ years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      rating: 5,
    },
    {
      quote: 'Telehealth sessions mean I can see my specialist without the 2-hour commute. The video quality is amazing.',
      name: 'Jessica Lee',
      role: 'Remote Patient',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      rating: 5,
    },
    {
      quote: 'As a doctor, the Zenith dashboard allows me to focus on patients rather than paperwork. Highly recommended for clinicians.',
      name: 'Dr. David Miller',
      role: 'Senior Cardiologist',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
      rating: 5,
    },
  ];

  const integrationLogos = ['Stripe', 'Salesforce', 'HubSpot', 'Slack', 'GitHub', 'AWS', 'Snowflake', 'Datadog', 'Zapier', 'Notion'];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 flex flex-col">

      {/* Meta Bar */}
      <div className="bg-[#0A0A0A] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
          <div><span className="text-blue-500">CLIENT:</span> ZENITH MEDICAL CENTER</div>
          <div><span className="text-blue-500">INDUSTRY:</span> LOCAL HEALTHCARE</div>
          <div><span className="text-blue-500">DELIVERABLES:</span> PATIENT CARE PORTAL</div>
          <div><span className="text-blue-500">RESULTS:</span> 15+ HOURS SAVED PER WEEK</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-black uppercase tracking-tighter">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl">Zenith Medical</span>
          </div>
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Product</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Customers</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="px-5 py-2 bg-white/5 hover:bg-white/10 text-white text-[11px] font-bold uppercase tracking-widest rounded-full border border-white/10 transition-all">
              ← Portfolio
            </Link>
            <button
              onClick={() => setShowModal(true)}
              className="px-5 py-2 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <div className="flex-1">
        {/* Hero */}
        <section className="relative pt-24 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] -z-10 rounded-full" />
          <div className="absolute -top-[10%] right-[5%] w-[400px] h-[400px] bg-purple-600/8 blur-[100px] -z-10 rounded-full" />

          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              V2.5 is now live — See what's new
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.02]"
            >
              Modern Care <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 italic">for the Local</span><br />
              Community.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Experience world-class healthcare with Zenith Medical. Our patient-first portal brings your doctors, prescriptions, and results into one secure digital hub.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
            >
              <button
                onClick={() => setShowModal(true)}
                className="px-9 py-5 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2.5 shadow-2xl shadow-white/5 text-sm"
              >
                Start Free Trial <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={handleAction}
                className="px-9 py-5 bg-white/5 text-white font-bold border border-white/10 rounded-xl hover:bg-white/10 transition-all flex items-center gap-2.5 text-sm"
              >
                <Play className="w-4 h-4 fill-white" /> Watch Demo
              </button>
            </motion.div>
            <p className="text-gray-600 text-sm">No credit card required · 14-day free trial · Cancel anytime</p>
          </div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-20 max-w-5xl mx-auto"
          >
            <div className="p-1.5 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
              <div className="rounded-xl overflow-hidden bg-[#0A0A0A]">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-[#111]">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <div className="flex-1 mx-4 h-6 bg-white/5 rounded-md flex items-center px-3">
                    <span className="text-[10px] text-gray-600">portal.zenithmedical.org/my-health</span>
                  </div>
                </div>
                {/* Dashboard Content */}
                <div className="p-6 flex gap-4 overflow-hidden" style={{ height: '380px' }}>
                  {/* Sidebar mini */}
                  <div className="w-14 flex flex-col items-center gap-4 py-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className={`w-8 h-8 rounded-xl flex items-center justify-center ${i === 0 ? 'bg-blue-600' : 'bg-white/5'}`}>
                        <div className="w-3 h-3 rounded bg-white/40" />
                      </div>
                    ))}
                  </div>
                  {/* Main area */}
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { label: 'Patient Visits', value: '1,280', change: '+12.4%', up: true },
                        { label: 'Avg Wait Time', value: '8.5 min', change: '-2.3 min', up: true },
                        { label: 'Docs Active', value: '42', change: 'Online Now', up: true },
                        { label: 'Success Rate', value: '99.8%', change: 'Post-Op', up: true },
                      ].map((card, i) => (
                        <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/5">
                          <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-2">{card.label}</div>
                          <div className="text-xl font-black mb-1">{card.value}</div>
                          <div className="text-[9px] font-bold text-green-400">{card.change}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-4 flex-1">
                      <div className="flex-1 bg-white/5 rounded-xl p-4 border border-white/5">
                        <div className="text-xs font-bold text-gray-400 mb-4">Event Stream — Live</div>
                        <div className="flex items-end gap-1.5 h-28">
                          {[...Array(24)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{ height: [20, Math.random() * 80 + 20, 20] }}
                              transition={{ duration: 3, repeat: Infinity, delay: i * 0.15 }}
                              className="flex-1 bg-gradient-to-t from-blue-600/60 to-blue-400/80 rounded-sm"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="w-48 bg-white/5 rounded-xl p-4 border border-white/5 flex flex-col gap-3">
                        <div className="text-xs font-bold text-gray-400">Recent Flows</div>
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                            className="flex items-center gap-2"
                          >
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            <div className="flex-1 h-2 bg-white/10 rounded-full" />
                            <div className="text-[9px] text-gray-600">4ms</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </section>

        {/* Stats */}
        <section ref={statsRef} className="py-20 border-y border-white/5">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { value: `${users.toLocaleString()}+`, label: 'Patients Treated' },
              { value: `${(uptime / 1000).toFixed(2)}%`, label: 'Patient Satisfaction' },
              { value: `${integrations}+`, label: 'Specialist Doctors' },
              { value: `${speed}%`, label: 'On-Time Appointments' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">{stat.value}</div>
                <div className="text-gray-500 text-[11px] font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Tab Section */}
        <section id="features" className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Capabilities</span>
              <h2 className="text-5xl font-black tracking-tight mb-6">Everything you need to scale.</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">One platform. Three pillars of enterprise power.</p>
            </div>

            <div className="flex justify-center gap-2 mb-12">
              {Object.keys(featureTabs).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white/5 text-gray-500 hover:text-white hover:bg-white/10 border border-white/10'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="text-3xl font-bold mb-5">{featureTabs[activeTab as keyof typeof featureTabs].title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-8 text-lg">{featureTabs[activeTab as keyof typeof featureTabs].desc}</p>
                  <div className="space-y-4">
                    {featureTabs[activeTab as keyof typeof featureTabs].points.map((point, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span className="text-gray-300 font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-10 flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-[11px] hover:gap-4 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={featureTabs[activeTab as keyof typeof featureTabs].image}
                    alt={featureTabs[activeTab as keyof typeof featureTabs].title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/10" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20 border-t border-white/5 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 text-center mb-10">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em]">Connects with your entire stack</span>
          </div>
          <div className="flex gap-10 items-center justify-center flex-wrap opacity-20 grayscale mx-6">
            {integrationLogos.map((logo, i) => (
              <span key={i} className="text-xl font-black tracking-tighter whitespace-nowrap">{logo}</span>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-28 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Transparent Pricing</span>
              <h2 className="text-5xl font-black tracking-tight">Simple. Honest. Scalable.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map(plan => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onClick={() => setActivePlan(plan.id)}
                  className={`relative p-8 rounded-2xl border cursor-pointer transition-all ${plan.featured ? 'bg-blue-600/10 border-blue-500/50 shadow-xl shadow-blue-500/10' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
                >
                  {plan.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-8">
                    <span className="text-5xl font-black">{plan.price}</span>
                    <span className="text-gray-500 mb-2">{plan.period}</span>
                  </div>
                  <div className="space-y-3 mb-8">
                    {plan.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${plan.featured ? 'text-blue-400' : 'text-gray-500'}`} />
                        <span className="text-gray-400 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setShowModal(true)}
                    className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] transition-all ${plan.featured ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'}`}
                  >
                    {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-28 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Customer Love</span>
              <h2 className="text-5xl font-black tracking-tight">Trusted by Industry Leaders</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all"
                >
                  <div className="flex mb-4">
                    {[...Array(t.rating)].map((_, s) => <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-8 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image src={t.image} alt={t.name} fill className="object-cover" unoptimized />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{t.name}</div>
                      <div className="text-gray-500 text-xs">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 italic">NexFlow?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">Join 10,000+ teams already shipping 10x faster.</p>
            <button
              onClick={() => setShowModal(true)}
              className="px-12 py-6 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all text-base shadow-2xl shadow-blue-600/30 flex items-center gap-3 mx-auto"
            >
              Start Your Free Trial <ChevronRight className="w-5 h-5" />
            </button>
            <p className="text-gray-600 text-sm mt-4">14-day free trial · No credit card needed</p>
          </div>
        </section>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowModal(false)} className="fixed inset-0 bg-[#050505]/90 backdrop-blur-md z-[200]" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#0A0A0A] border border-white/10 p-10 rounded-3xl z-[201] shadow-2xl"
            >
              <button className="absolute top-6 right-6 text-gray-500 hover:text-white" onClick={() => setShowModal(false)}><X className="w-5 h-5" /></button>
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-8"><Zap className="w-6 h-6 fill-white text-white" /></div>
              <h3 className="text-2xl font-bold mb-3">Start for free</h3>
              <p className="text-gray-400 mb-8">Full access for 14 days. No credit card required.</p>
              <div className="space-y-3 mb-8">
                {['14-Day Free Trial — All Features', 'Full API Access', '24/7 Priority Support'].map((f, i) => (
                  <div key={i} className="flex gap-3 items-center text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" /> {f}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <input type="email" placeholder="Work email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 text-white text-sm" />
                <button onClick={() => { setShowModal(false); handleAction(); }} className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                  Create Free Account →
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-4 rounded-2xl shadow-2xl z-[300] flex items-center gap-4"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-white" /></div>
            <div className="text-sm font-bold">Demo Activated — Simulation Running!</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ZenithMedical;
