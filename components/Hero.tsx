import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image - Shop Interior */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=2000&auto=format&fit=crop" 
          alt="Anna Paris Jewelry Store at Platinum Mall" 
          className="w-full h-full object-cover"
        />
        {/* Light overlay to manage contrast with the busy shop background */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/40"></div>
      </div>
      
      <div className="relative z-10 px-4 max-w-5xl mx-auto w-full">
        {/* Glassmorphism Card */}
        <div className="bg-white/60 backdrop-blur-xl border border-white/60 p-8 md:p-16 rounded-[2.5rem] shadow-2xl text-center transform hover:scale-[1.01] transition-transform duration-700">
          
          <span className="inline-block py-1.5 px-4 border border-ink/10 rounded-full text-xs font-sans tracking-[0.2em] uppercase text-ink/70 mb-8 bg-white/40">
            Est. 2005 • Platinum Fashion Mall
          </span>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink leading-tight mb-8 drop-shadow-sm">
            The Luster of <br/> 
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-ink to-[#5A6A7C]">Modernity</span>
          </h1>
          
          <p className="font-sans text-ink-light text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed">
            Curated pearls for the contemporary woman. 
            Designed in-house at our Bangkok atelier.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#collection" className="group relative px-10 py-4 overflow-hidden rounded-full bg-ink text-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative text-sm uppercase tracking-widest font-bold group-hover:tracking-[0.2em] transition-all">View Collection</span>
            </a>
            <a href="#story" className="text-sm uppercase tracking-widest text-ink hover:text-[#8E7E6A] transition-colors font-bold border-b-2 border-transparent hover:border-[#8E7E6A] pb-1">
              Our Story
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-60 z-20">
        <ArrowDown size={28} className="text-ink" />
      </div>
    </section>
  );
};

export default Hero;