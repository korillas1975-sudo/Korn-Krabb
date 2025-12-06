import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-bg reveal-section">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="relative h-[600px] w-full overflow-hidden">
           
           {/* Background Map/Image */}
           <img 
               src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=2000&auto=format&fit=crop" 
               alt="Store Atmosphere" 
               className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-1000"
           />

           {/* Floating Glass Card */}
           <div className="absolute top-1/2 left-1/2 md:left-24 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 w-[90%] md:w-[400px] bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl p-10">
              <div className="flex items-center gap-2 mb-6 text-ink/50">
                <MapPin size={16} />
                <span className="text-[10px] uppercase tracking-widest">The Atelier</span>
              </div>
              
              <h3 className="font-serif text-4xl text-ink mb-8">Visit Us</h3>
              
              <div className="space-y-6 text-sm font-sans text-ink/80">
                 <div className="border-l-2 border-ink/10 pl-4">
                    <p className="font-bold text-ink uppercase tracking-widest text-[10px] mb-1">Platinum Fashion Mall</p>
                    <p>Zone 2, Floor 3, Room 228A</p>
                    <p>Ratchathewi, Bangkok</p>
                 </div>
                 
                 <div className="border-l-2 border-ink/10 pl-4">
                    <p className="font-bold text-ink uppercase tracking-widest text-[10px] mb-1">Opening Hours</p>
                    <p>Every Day: 10:00 - 19:00</p>
                 </div>
              </div>

              <button className="mt-10 w-full py-4 border border-ink text-ink text-xs uppercase tracking-widest hover:bg-ink hover:text-white transition-all flex items-center justify-center gap-2 group">
                 Get Directions
                 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
              </button>
           </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;