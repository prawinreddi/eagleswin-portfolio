'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">FAQ</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Frequently asked questions about my services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden"
            >
              <motion.button
                whileHover={{ backgroundColor: 'rgb(31 41 55)' }}
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <span className="text-white font-semibold text-lg pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-400 leading-relaxed">
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
