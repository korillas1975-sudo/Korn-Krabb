import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-platinum relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-ink mb-4">The Atelier</h2>
          <p className="font-sans text-ink-light tracking-wide">Visit our gallery at The Platinum Fashion Mall</p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Shop Image - Mimicking the Shop Image provided */}
          <div className="lg:w-3/5 h-[400px] lg:h-auto relative">
             <img 
              src="https://picsum.photos/1200/800?random=20" // Placeholder for Shop Interior
              alt="Anna Paris Jewelry Store Front" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/10 mix-blend-multiply"></div>
          </div>

          {/* Info Card */}
          <div className="lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center space-y-8 bg-white/50 backdrop-blur-sm">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-ink">Bangkok Flagship</h3>
              <div className="h-0.5 w-12 bg-champagne-dark"></div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-platinum rounded-full group-hover:bg-champagne transition-colors">
                  <MapPin className="text-ink w-5 h-5" />
                </div>
                <div>
                  <p className="font-sans font-bold text-ink text-sm uppercase tracking-wide mb-1">Address</p>
                  <p className="font-sans text-ink-light leading-relaxed">
                    Platinum Fashion Mall<br/>
                    Zone 2, Floor 3, Room 228A<br/>
                    Petchaburi Road, Bangkok
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-platinum rounded-full group-hover:bg-champagne transition-colors">
                  <Clock className="text-ink w-5 h-5" />
                </div>
                <div>
                  <p className="font-sans font-bold text-ink text-sm uppercase tracking-wide mb-1">Opening Hours</p>
                  <p className="font-sans text-ink-light">
                    Daily: 10:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            <button className="mt-4 px-6 py-3 border border-ink text-ink font-sans text-sm uppercase tracking-widest hover:bg-ink hover:text-white transition-all duration-300 w-fit">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;