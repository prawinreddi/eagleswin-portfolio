// MedSync Mock Data & Models
export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  qualification: string;
  experience: string;
  fee: number;
  rating: number;
  reviews: number;
  image: string;
  about: string;
  timings: string;
  category: string;
  slots: string[];
}

export const doctorCategories = [
  { id: 'general', name: 'General Physician', emoji: '👨‍⚕️' },
  { id: 'dentist', name: 'Dentist', emoji: '🦷' },
  { id: 'dermatologist', name: 'Dermatologist', emoji: '🧴' },
  { id: 'paediatrician', name: 'Paediatrician', emoji: '👶' },
  { id: 'orthopedic', name: 'Orthopaedic', emoji: '🦴' },
  { id: 'eye', name: 'Eye Clinic', emoji: '👁️' },
];

export const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Ramesh Kumar',
    specialization: 'Senior General Physician',
    qualification: 'MD (Internal Medicine)',
    experience: '12+ Years',
    fee: 500,
    rating: 4.9,
    reviews: 1240,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop',
    about: 'Dr. Ramesh is highly experienced in treating chronic illness, fever, and common health issues. He specializes in diabetes management and hypertension.',
    timings: '10:00 AM - 02:00 PM, 05:00 PM - 09:00 PM',
    category: 'general',
    slots: ['10:00 AM', '10:30 AM', '11:00 AM', '05:30 PM', '06:00 PM', '07:30 PM']
  },
  {
    id: 2,
    name: 'Dr. Sneha Reddy',
    specialization: 'Dental Surgeon & Cosmetologist',
    qualification: 'BDS, MDS (Orthodontics)',
    experience: '8+ Years',
    fee: 300,
    rating: 4.8,
    reviews: 860,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&auto=format&fit=crop',
    about: 'Skilled in painless root canals, dental implants, and orthodontic treatments. Committed to providing a gentle experience for children and adults.',
    timings: '11:00 AM - 08:00 PM',
    category: 'dentist',
    slots: ['11:00 AM', '12:00 PM', '04:00 PM', '05:00 PM', '06:00 PM']
  },
  {
    id: 3,
    name: 'Dr. Arjun Varma',
    specialization: 'Skin & Laser Specialist',
    qualification: 'MD (Dermatology)',
    experience: '15+ Years',
    fee: 600,
    rating: 4.9,
    reviews: 2100,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop',
    about: 'Expert in clinical dermatology, hair loss treatments, and advanced laser surgeries for skin rejuvenation.',
    timings: '09:00 AM - 01:00 PM',
    category: 'dermatologist',
    slots: ['09:30 AM', '10:00 AM', '11:15 AM', '12:00 PM']
  }
];

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
}
