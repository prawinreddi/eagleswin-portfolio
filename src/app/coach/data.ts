export const coachData = {
  instituteName: 'Elite Academy',
  primaryColor: 'blue',
  batches: [
    {
      id: 1,
      name: 'NEET 2025 - Alpha Batch',
      startDate: 'April 30, 2024',
      duration: '1 Year Intensive',
      mode: 'Hybrid (Online + Offline)',
      timings: '09:00 AM - 01:00 PM',
      seats: 12,
      price: 45000,
      discountPrice: 39999,
      subjects: ['Physics', 'Chemistry', 'Biology']
    },
    {
      id: 2,
      name: 'JEE Mains - Target 2025',
      startDate: 'May 15, 2024',
      duration: '1 Year Comprehensive',
      mode: 'Offline classes',
      timings: '02:00 PM - 06:00 PM',
      seats: 18,
      price: 55000,
      discountPrice: 48500,
      subjects: ['Maths', 'Physics', 'Chemistry']
    }
  ],
  stats: [
    { label: 'Total Selections', val: '500+' },
    { label: 'Pass Percentage', val: '98%' },
    { label: 'Top 100 Ranks', val: '14' },
    { label: 'Years of Excellence', val: '20+' }
  ],
  toppers: [
    { name: 'Sravani Reddy', rank: 'AIR 245', score: '692/720', college: 'AIIMS Delhi', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop' },
    { name: 'Vijay Kumar', rank: 'AIR 812', score: '99.2%', college: 'IIT Bombay', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop' }
  ],
  faculty: [
    { name: 'Dr. Ramesh Varma', qualification: 'PhD in Physics, IIT-M', exp: '15+ Years', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop' },
    { name: 'Prof. Anitha Rao', qualification: 'M.Sc Biology, Gold Medalist', exp: '12+ Years', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop' }
  ],
  faqs: [
    { q: 'Can I attend a demo class?', a: 'Yes, we provide 2 complimentary demo days for every new batch.' },
    { q: 'Is study material included in the fee?', a: 'Absolutely. We provide comprehensive printed books and digital notes.' },
    { q: 'Do you offer installment options?', a: 'Yes, the fee can be paid in 3-part easy installments.' }
  ]
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};
