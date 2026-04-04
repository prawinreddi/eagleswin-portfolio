export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  type: 'flat' | 'villa' | 'plot' | 'commercial';
  status: 'available' | 'sold' | 'new-launch';
  bhk?: number;
  sqft: number;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  agentId: number;
  isFeatured: boolean;
  postedDate: string;
}

export interface Agent {
  id: number;
  name: string;
  role: string;
  experience: string;
  deals: number;
  image: string;
  phone: string;
  specialization: string[];
  bio: string;
}

export const agents: Agent[] = [
  {
    id: 1,
    name: 'Kiran Kumar',
    role: 'Senior Real Estate Consultant',
    experience: '12+ Years',
    deals: 450,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop',
    phone: '+91 98765 43210',
    specialization: ['Luxury Villas', 'High-rise Flats', 'Investment Plots'],
    bio: 'Helping families find their dream homes in Hyderabad for over a decade. Winner of the Best Agent Award 2024.'
  }
];

export const properties: Property[] = [
  {
    id: 101,
    title: 'Skywalk Ultra Luxury 3BHK',
    price: 18500000,
    location: 'Financial District, Gachibowli',
    type: 'flat',
    status: 'new-launch',
    bhk: 3,
    sqft: 2450,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687940-c52dfeb3ed8a?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1200&auto=format&fit=crop'
    ],
    description: 'Breathtaking views and world-class amenities at the heart of Hyderabad IT corridor. Experience luxury like never before.',
    amenities: ['Infinity Pool', 'Gym', 'Club House', 'EV Charging', '24/7 Security'],
    agentId: 1,
    isFeatured: true,
    postedDate: '2024-04-01'
  },
  {
    id: 102,
    title: 'Palm Breeze Gated Villa',
    price: 32000000,
    location: 'Tellapur, Hyderabad',
    type: 'villa',
    status: 'available',
    bhk: 4,
    sqft: 3800,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba334c389?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1200&auto=format&fit=crop'
    ],
    description: 'Spacious 4BHK villa with private garden and smart home features. Perfect for modern families seeking peace and luxury.',
    amenities: ['Private Garden', 'Smart Home', 'Home Theatre', 'Yoga Deck'],
    agentId: 1,
    isFeatured: true,
    postedDate: '2024-03-28'
  },
  {
    id: 103,
    title: 'Fortune Green Heights',
    price: 7500000,
    location: 'Kokapet, Hyderabad',
    type: 'flat',
    status: 'available',
    bhk: 2,
    sqft: 1250,
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=1200&auto=format&fit=crop',
    gallery: [],
    description: 'Modern 2BHK flats with excellent connectivity to ORR. Affordable luxury for working professionals.',
    amenities: ['Power Backup', 'Lift', 'Kids Play Area', 'Jogging Track'],
    agentId: 1,
    isFeatured: false,
    postedDate: '2024-03-15'
  }
];

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};
