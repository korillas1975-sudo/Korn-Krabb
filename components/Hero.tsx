import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-ink">
      {/* 
        Full Screen Parallax Image 
        No Text. No Overlay. The Logo in Navbar.tsx acts as the title over this.
      */}
      <div 
        className="absolute inset-0 w-full h-[120vh] top-0 left-0 will-change-transform"
        style={{ transform: `translateY(${offset * 0.4}px)` }} 
      >
        <img 
          src="https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1600&auto=format&fit=crop" 
          alt="Anna Paris Jewelry Store" 
          className="w-full h-full object-cover"
        />
        {/* Slight gradient from bottom to ensure smooth transition to next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent opacity-20"></div>
      </div>
    </section>
  );
};

export default Hero;