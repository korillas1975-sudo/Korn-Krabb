import React from 'react';
import { Product } from '../types';
import { ArrowUpRight } from 'lucide-react';

const products: Product[] = [
  { id: 1, title: 'Baroque Drop', category: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600', description: 'Organic freshwater' },
  { id: 2, title: 'Modern Strand', category: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&q=80&w=600', description: 'Contemporary' },
  { id: 3, title: 'Celestial Cuff', category: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600', description: 'Structure' },
  { id: 4, title: 'Midnight Ring', category: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600', description: 'Deep hues' },
  { id: 5, title: 'Bridal Set', category: 'Sets', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600', description: 'Special day' },
  { id: 6, title: 'Classic Studs', category: 'Earrings', image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95076?auto=format&fit=crop&q=80&w=600', description: 'Everyday' },
  { id: 7, title: 'Tahitian Black', category: 'Special', image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=600', description: 'Rare finds' },
];

const Gallery: React.FC = () => {
  return (
    <section id="collection" className="relative py-24 overflow-hidden reveal-section bg-[#0F1A24]">
      
      {/* 
         BACKGROUND: Deep Metallic/Onyx
         Provides contrast for the "Icy White" glass to pop.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-slate-900"></div>
      
      {/* Subtle Light Leaks */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/5 rounded-full blur-[100px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between border-b border-white/10 pb-6">
        <h2 className="font-serif text-3xl md:text-5xl text-white">The Archive</h2>
        <p className="text-white/40 text-[10px] uppercase tracking-widest animate-pulse">Swipe &rarr;</p>
      </div>

      {/* 
        CONTINUOUS FILM STRIP CAROUSEL 
        - Gap 0
        - Border separated
        - Small cards (Compact)
        - ICY FROSTED GLASS (High white opacity + blur)
      */}
      <div className="relative w-full overflow-x-auto snap-x snap-mandatory px-6 pb-12 hide-scrollbar flex gap-0">
          
          {products.map((item, index) => (
              <div 
                  key={item.id} 
                  className="group relative w-[220px] shrink-0 snap-start border-r border-white/20 last:border-r-0"
              >
                  {/* 
                     ICY GLASS SLAB 
                     Using high opacity white gradient for "Milky" look.
                  */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-xl transition-all duration-500 group-hover:from-white/30 group-hover:to-white/10"></div>
                  
                  {/* Content */}
                  <div className="relative p-4 h-[350px] flex flex-col items-center text-center transition-all duration-500 group-hover:-translate-y-2">
                      
                      {/* Image Frame */}
                      <div className="relative w-full aspect-[4/5] mb-4 overflow-hidden bg-black/20">
                          <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                          />
                          {/* Ice Sheen */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      </div>

                      {/* Text Details - Minimal */}
                      <div className="mt-auto w-full">
                          <h3 className="font-serif text-lg text-white mb-1">{item.title}</h3>
                          <p className="text-[9px] uppercase tracking-widest text-white/60 mb-3">{item.category}</p>
                          
                          {/* Hidden Explore Button - Appears on Hover */}
                          <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                             <span className="inline-flex items-center gap-1 text-[9px] text-white border border-white/30 px-3 py-1 uppercase tracking-wider hover:bg-white hover:text-ink transition-colors cursor-pointer">
                                Explore <ArrowUpRight size={10} />
                             </span>
                          </div>
                      </div>
                  </div>
              </div>
          ))}

          {/* End Spacer */}
          <div className="w-12 shrink-0"></div>
      </div>

    </section>
  );
};

export default Gallery;