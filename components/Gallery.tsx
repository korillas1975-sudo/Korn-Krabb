import React from 'react';
import { Product } from '../types';

// Mock data for display
const products: Product[] = [
  { id: 1, title: 'Baroque Drop Earrings', category: 'Earrings', image: 'https://picsum.photos/400/500?random=1', description: 'Organic freshwater pearls suspended in silver.' },
  { id: 2, title: 'The Modern Strand', category: 'Necklaces', image: 'https://picsum.photos/400/500?random=2', description: 'A contemporary twist on the classic strand.' },
  { id: 3, title: 'Celestial Cuff', category: 'Bracelets', image: 'https://picsum.photos/400/500?random=3', description: 'Structure meets nature.' },
  { id: 4, title: 'Midnight Tahitian', category: 'Rings', image: 'https://picsum.photos/400/500?random=4', description: 'Deep hues for evening elegance.' },
];

const Gallery: React.FC = () => {
  return (
    <section id="collection" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-serif text-4xl text-ink mb-2">Curated Collection</h2>
            <p className="font-sans text-ink-light italic">Designed for the 2025 Woman</p>
          </div>
          <div className="hidden md:block">
            <span className="font-sans text-xs uppercase tracking-[0.2em] border-b border-ink pb-1 cursor-pointer">View Full Archive</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-t-[2rem] aspect-[4/5] mb-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <span className="text-white font-serif italic text-xl border border-white px-4 py-2 rounded-full backdrop-blur-md">View Details</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs font-sans uppercase tracking-widest text-ink/60 mb-1">{item.category}</p>
                <h3 className="font-serif text-xl text-ink group-hover:text-[#8E7E6A] transition-colors">{item.title}</h3>
                <p className="text-sm font-sans text-ink-light mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <span className="font-sans text-xs uppercase tracking-[0.2em] border-b border-ink pb-1 cursor-pointer">View Full Archive</span>
        </div>
      </div>
    </section>
  );
};

export default Gallery;