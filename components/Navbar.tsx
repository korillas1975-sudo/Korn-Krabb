import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Story', href: '#story' },
  { label: 'Archive', href: '#collection' },
  { label: 'Atelier', href: '#location' },
  { label: 'Stylist', href: '#ai-stylist' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger animation immediately upon scroll
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 
        MORPHING CONTAINER 
        Handles the transition from Hero Title (Center) to Navigation Bar (Top)
      */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div 
          className={`
            relative w-full h-full transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1)
          `}
        >
          {/* THE PILL (Background) */}
          <div 
            className={`
              absolute left-1/2 -translate-x-1/2 flex items-center justify-between px-8 transition-all duration-1000
              ${scrolled 
                ? 'top-4 h-14 bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl rounded-full pointer-events-auto gap-12 min-w-[300px]' 
                : 'top-[45%] h-auto bg-transparent border-transparent shadow-none gap-0 min-w-0'
              }
            `}
          >
            {/* LOGO TEXT: Always "ANNA PARIS" */}
            <h1 
              className={`
                font-serif font-medium tracking-widest text-ink transition-all duration-1000 whitespace-nowrap
                ${scrolled 
                  ? 'text-lg scale-100' // Navbar State
                  : 'text-6xl md:text-8xl lg:text-9xl text-white mix-blend-overlay drop-shadow-sm scale-100' // Hero State
                }
              `}
            >
              ANNA PARIS
            </h1>

            {/* DESKTOP MENU LINKS: Only appear in Navbar state */}
            <div 
              className={`
                hidden md:flex items-center gap-6 overflow-hidden transition-all duration-700
                ${scrolled ? 'w-auto opacity-100 delay-300' : 'w-0 opacity-0'}
              `}
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/70 hover:text-ink transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button 
              className={`
                md:hidden text-ink transition-all duration-500
                ${scrolled ? 'opacity-100 scale-100 pointer-events-auto pl-4' : 'opacity-0 scale-0 w-0 p-0'}
              `}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="space-y-8 text-center">
          {navItems.map((item) => (
             <a
                key={item.label}
                href={item.href}
                className="block font-serif text-4xl text-ink hover:scale-110 transition-transform duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
          ))}
        </div>
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute bottom-12 text-[10px] uppercase tracking-widest text-ink/40"
        >
          Close Menu
        </button>
      </div>
    </>
  );
};

export default Navbar;