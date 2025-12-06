import React from 'react';

const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-32 bg-white relative overflow-hidden reveal-section">
      
      {/* Decorative large text background */}
      <div className="absolute top-10 left-10 opacity-[0.02] pointer-events-none select-none">
         <span className="font-serif text-[300px] leading-none">20</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        
        {/* Left: Image with Overlap */}
        <div className="relative order-2 md:order-1 group">
            <div className="relative w-[80%] aspect-[3/4] overflow-hidden ml-auto border-r border-b border-ink/10 shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1200&auto=format&fit=crop" 
                    alt="Anna Paris Artisan" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-[1.5s] ease-out-expo"
                  />
            </div>
            {/* Floating Glass Element */}
            <div className="absolute bottom-10 left-0 w-[60%] p-8 bg-white/80 backdrop-blur-md border border-white/50 shadow-xl">
                <p className="font-serif italic text-2xl text-ink">"We don't just sell pearls; we curate confidence."</p>
            </div>
        </div>

        {/* Right: Typography */}
        <div className="order-1 md:order-2">
           <span className="block w-20 h-[1px] bg-ink mb-8"></span>
           <h2 className="font-serif text-5xl md:text-6xl text-ink mb-8 leading-[1.1]">
             Two decades of <br/>
             <span className="italic text-ink/40">pearl mastery.</span>
           </h2>
           <div className="space-y-6 font-sans text-ink/60 leading-relaxed text-lg max-w-md">
             <p>
               Located in the bustling Platinum Fashion Mall, Anna Paris is an institution of style. For 20 years, we have been the secret destination for working women seeking that perfect balance of professional elegance and modern flair.
             </p>
           </div>
           
           <div className="mt-12 flex gap-12">
               <div>
                  <span className="block font-serif text-3xl text-ink">2005</span>
                  <span className="text-[10px] uppercase tracking-widest text-ink/40">Established</span>
               </div>
               <div>
                  <span className="block font-serif text-3xl text-ink">BKK</span>
                  <span className="text-[10px] uppercase tracking-widest text-ink/40">Location</span>
               </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default StorySection;