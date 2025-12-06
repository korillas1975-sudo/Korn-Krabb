import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Heritage', href: '#story' },
  { label: 'Collection', href: '#collection' },
  { label: 'Atelier', href: '#location' },
  { label: 'Consultant', href: '#ai-stylist' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-hairline py-3 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className={`font-serif text-2xl tracking-widest uppercase transition-colors duration-300 text-ink`}>
          Anna Paris
          <span className="block text-[10px] tracking-[0.3em] text-center font-sans opacity-70">Jewelry</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm uppercase tracking-widest font-sans text-ink hover:text-[#8E7E6A] transition-colors relative group font-medium"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-ink transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-ink"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-hairline py-8 flex flex-col items-center space-y-6 md:hidden animate-fade-in shadow-xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-serif italic text-ink"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;