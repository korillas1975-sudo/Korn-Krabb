import React from 'react';

const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              20 Years of <span className="italic">Artistry</span>
            </h2>
            <div className="w-16 h-[1px] bg-ink/30"></div>
            
            <p className="font-sans text-lg text-ink-light leading-relaxed">
              Founded two decades ago in the heart of Bangkok, <b>Anna Paris Jewelry</b> began with a simple vision: to liberate pearls from the realm of old-fashioned tradition and introduce them to the dynamic lifestyle of the modern working woman.
            </p>
            
            <p className="font-sans text-lg text-ink-light leading-relaxed">
              Every piece in our gallery is designed in-house. We believe jewelry is not just an accessory, but a dialogue between the wearer and the world—a statement of grace, strength, and individuality.
            </p>

            <blockquote className="border-l-2 border-champagne-dark pl-6 italic font-serif text-xl text-ink/80 my-8">
              "Pearls are the only gem that require no cutting or polishing to reveal their beauty. They are perfect as they are, just like the women who wear them."
            </blockquote>
          </div>

          {/* Image Content - Owner/Artisan */}
          <div className="order-1 lg:order-2 relative">
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[3/4] group">
                <img 
                  src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1600&auto=format&fit=crop" // Artisan/Jeweler placeholder
                  alt="Anna, Founder of Anna Paris Jewelry" 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay card */}
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent">
                  <p className="text-white font-serif text-2xl italic">Anna</p>
                  <p className="text-white/80 font-sans text-xs tracking-widest uppercase mt-1">Founder & Lead Designer</p>
                </div>
             </div>
             
             {/* Decorative Element */}
             <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 border border-champagne rounded-full"></div>
             <div className="absolute -z-10 -top-10 -left-10 w-full h-full border border-hairline rounded-[3.5rem]"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StorySection;