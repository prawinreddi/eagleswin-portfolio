'use client';

import { motion } from 'framer-motion';
import { Mail, Code2, Terminal, Cpu, ExternalLink, Link as LinkIcon } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Code2 className="w-5 h-5 text-[#00e5ff]" />,
      items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    },
    {
      category: 'Backend',
      icon: <Terminal className="w-5 h-5 text-[#00e5ff]" />,
      items: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'REST APIs'],
    },
    {
      category: 'Core',
      icon: <Cpu className="w-5 h-5 text-[#00e5ff]" />,
      items: ['Performance SEO', 'UI/UX Design', 'Cloud Hosting', 'Git/GitHub'],
    },
  ];

  const socialLinks = [
    { icon: <LinkIcon className="w-5 h-5" />, label: 'GitHub', href: '#' },
    { icon: <ExternalLink className="w-5 h-5" />, label: 'LinkedIn', href: '#' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:contact@example.com' },
  ];

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#050505]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00e5ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group lg:pr-12"
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-white/10 group-hover:border-[#00e5ff]/30 transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-gray-500 font-black text-xl italic uppercase tracking-tighter group-hover:text-[#00e5ff]">Photo</span>
                  </div>
                  <p className="text-gray-500 text-xs font-bold tracking-[0.3em] uppercase group-hover:text-white transition-colors">
                    Your Image Here
                  </p>
                </div>
              </div>
              
              {/* Animated Corner Ornaments */}
              <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-[#00e5ff] opacity-40" />
              <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-[#00e5ff] opacity-40" />
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#00e5ff]/10 rounded-full blur-3xl -z-10 animate-pulse" />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#00e5ff]" />
              <span className="text-[#00e5ff] uppercase tracking-[0.3em] text-xs font-bold">About the Studio</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black mb-8 tracking-tighter text-white leading-tight">
              Bridging the gap between <span className="text-gradient-cyan italic">Art & Performance.</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
              I specialize in crafting high-conversion digital experiences that look premium and perform flawlessly. With a deep focus on Next.js and high-fidelity UI, I help ambitious brands dominate their digital space.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {skills.map((skill, index) => (
                <div key={index} className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-[#00e5ff]/20 transition-all duration-300 group/skill">
                  <div className="mb-4 group-hover/skill:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3">{skill.category}</h4>
                  <ul className="space-y-1.5">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-gray-500 text-[10px] uppercase font-medium tracking-wider">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-6">
              <span className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">Connect:</span>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00e5ff] hover:border-[#00e5ff]/50 hover:bg-[#00e5ff]/5 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
