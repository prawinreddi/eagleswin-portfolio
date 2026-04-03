'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does it take to build my website?',
    answer: 'Depends on project type. Landing pages take 3-5 days, business websites 7-10 days, and complex projects like e-commerce or booking sites take 14-21 days.',
  },
  {
    question: 'Do you offer revisions?',
    answer: 'Yes! Basic plan includes 1 revision, Standard includes 3 revisions, and Premium includes unlimited revisions until you are 100% satisfied.',
  },
  {
    question: 'What do I need to provide to get started?',
    answer: 'Just your business details, logo (if available), content/text, and any design preferences. I will handle the rest.',
  },
  {
    question: 'What are the payment terms?',
    answer: '50% advance payment before starting, and the remaining 50% after final delivery and your approval.',
  },
  {
    question: 'Will my website work on mobile phones?',
    answer: 'Absolutely! Every website I build is 100% mobile-responsive and tested across all screen sizes and devices.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#00e5ff]" />
            <span className="text-[#00e5ff] uppercase tracking-[0.3em] text-xs font-bold">Inquiries</span>
            <div className="h-[1px] w-12 bg-[#00e5ff]" />
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter">
            <span className="text-white">Ask </span>
            <span className="text-gradient-cyan italic">Anything.</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden border-white/5 hover:border-[#00e5ff]/20 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 outline-none group"
              >
                <span className={`font-bold text-lg pr-8 transition-colors duration-300 ${openIndex === index ? 'text-[#00e5ff]' : 'text-white group-hover:text-[#00e5ff]'}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0, color: openIndex === index ? '#00e5ff' : '#6b7280' }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 group-hover:text-[#00e5ff] transition-colors" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-500 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
