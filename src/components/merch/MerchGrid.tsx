import React from 'react';
import MerchItem from './MerchItem';

const merchData = [
  {
    id: 1,
    name: 'Studio Grip Gloves',
    price: 28,
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600&h=600',
    description: 'Premium workout gloves with enhanced grip for equipment stability.'
  },
  {
    id: 2,
    name: 'Performance Tank',
    price: 48,
    image: 'https://images.unsplash.com/photo-1618354691792-d1d42acfd860?auto=format&fit=crop&q=80&w=600&h=600',
    description: 'Breathable, moisture-wicking fabric for intense workouts.'
  },
  {
    id: 3,
    name: 'High-Rise Leggings',
    price: 88,
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=600&h=600',
    description: 'Sculpting compression fabric with four-way stretch.'
  },
  {
    id: 4,
    name: 'Stainless Steel Water Bottle',
    price: 35,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600&h=600',
    description: 'Double-walled insulation keeps drinks cold for 24 hours.'
  },
  {
    id: 5,
    name: 'Premium Yoga Mat',
    price: 68,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=600&h=600',
    description: 'Extra-thick, non-slip exercise mat for optimal comfort.'
  },
  {
    id: 6,
    name: 'Sports Bra',
    price: 54,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=600&h=600',
    description: 'High-impact support with moisture-wicking technology.'
  },
  {
    id: 7,
    name: 'Microfiber Towel Set',
    price: 32,
    image: 'https://images.unsplash.com/photo-1616627052149-22c4f8a6316e?auto=format&fit=crop&q=80&w=600&h=600',
    description: 'Quick-dry towels with antimicrobial treatment, set of 2.'
  },
  {
    id: 8,
    name: 'Resistance Band Set',
    price: 45,
    image: 'https://images.unsplash.com/photo-1598632640487-6ea4a4e8b963?auto=format&fit=crop&q=80&w=600&h=600',
    description: 'Set of 5 bands with varying resistance levels.'
  },
  {
    id: 9,
    name: 'Quarter-Zip Pullover',
    price: 85,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600&h=600',
    description: 'Lightweight technical pullover for pre/post workout.'
  },
  {
    id: 10,
    name: 'Recovery Massage Ball',
    price: 25,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600&h=600',
    description: 'Deep tissue massage ball for muscle recovery.'
  },
  {
    id: 11,
    name: 'Studio Duffel Bag',
    price: 78,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600&h=600',
    description: 'Spacious bag with dedicated compartments for gear.'
  },
  {
    id: 12,
    name: 'Compression Socks',
    price: 22,
    image: 'https://images.unsplash.com/photo-1563826904577-6b72c5d75e53?auto=format&fit=crop&q=80&w=600&h=600',
    description: 'Enhanced circulation socks for better recovery.'
  },
  {
    id: 13,
    name: 'Workout Headband Set',
    price: 18,
    image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&q=80&w=600&h=600',
    description: 'Set of 3 moisture-wicking headbands.'
  },
  {
    id: 14,
    name: 'Studio Phone Holder',
    price: 24,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&q=80&w=600&h=600',
    description: 'Adjustable phone mount for recording workouts.'
  },
  {
    id: 15,
    name: 'Protein Shaker',
    price: 15,
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=600&h=600',
    description: 'Leak-proof shaker with mixing ball.'
  }
];

const MerchGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
      {merchData.map((item) => (
        <MerchItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default MerchGrid;