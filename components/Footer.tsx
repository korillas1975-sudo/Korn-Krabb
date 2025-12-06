import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl tracking-widest uppercase mb-2">Anna Paris</h3>
            <p className="text-xs font-sans tracking-[0.2em] text-white/60">JEWELRY</p>
          </div>

          {/* Links */}
          <div className="flex space-x-8">
            <a href="#" className="hover:text-champagne transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-champagne transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-champagne transition-colors"><Mail size={20} /></a>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right font-sans text-sm text-white/60 space-y-1">
            <p>Platinum Fashion Mall, Bangkok</p>
            <p>+66 2 123 4567</p>
            <p>contact@annaparis.com</p>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="font-sans text-[10px] uppercase tracking-widest text-white/30">
            © 2025 Anna Paris Jewelry. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;