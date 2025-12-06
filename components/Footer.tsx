import React from 'react';
import { Facebook } from 'lucide-react';

// Custom Line Icon Component
const LineIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.1 10.4C21.1 5.3 16.5 1.2 10.9 1.2C5.3 1.2 0.7 5.3 0.7 10.4C0.7 14.7 3.9 18.3 8.3 19.2C8.6 19.3 8.8 19.5 8.7 19.8C8.7 20.3 8.4 21.6 8.3 22.1C8.2 22.4 8.5 22.7 8.8 22.5C10.7 21.4 15 18.2 15.6 17.8C18.9 16.3 21.1 13.5 21.1 10.4ZM6.6 13.6H4.4C4.1 13.6 3.9 13.4 3.9 13.1V7.7C3.9 7.4 4.1 7.2 4.4 7.2C4.7 7.2 4.9 7.4 4.9 7.7V12.6H6.6C6.9 12.6 7.1 12.8 7.1 13.1C7.1 13.4 6.9 13.6 6.6 13.6ZM9.3 13.6H9.1C8.8 13.6 8.6 13.4 8.6 13.1V7.7C8.6 7.4 8.8 7.2 9.1 7.2C9.4 7.2 9.6 7.4 9.6 7.7V13.6H9.3ZM13.4 13.6H11.2C10.9 13.6 10.7 13.4 10.7 13.1V7.7C10.7 7.4 10.9 7.2 11.2 7.2C11.5 7.2 11.7 7.4 11.7 7.7V12.6L14 8.8C14.1 8.6 14.3 8.5 14.4 8.6C14.6 8.7 14.7 8.9 14.6 9V13.1C14.6 13.4 14.4 13.6 14.1 13.6C13.8 13.6 13.6 13.4 13.6 13.1V8.2L11.3 12C11.2 12.2 11.1 12.2 10.9 12.2H13.4C13.7 13.6 13.4 13.6 13.4 13.6ZM18.2 13.6H16C15.7 13.6 15.5 13.4 15.5 13.1V7.7C15.5 7.4 15.7 7.2 16 7.2C16.3 7.2 16.5 7.4 16.5 7.7V12.6H18.2C18.5 12.6 18.7 12.8 18.7 13.1C18.7 13.4 18.5 13.6 18.2 13.6Z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg text-ink py-20 border-t border-ink/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Brand Big */}
          <div className="md:w-1/2">
             <h2 className="font-serif text-6xl md:text-8xl text-ink/10 leading-none select-none">
                ANNA
             </h2>
             <div className="mt-8 space-y-4">
                <p className="font-serif text-xl italic">Contact the Atelier</p>
                <p className="font-sans text-ink-light text-sm tracking-wide">
                    Platinum Fashion Mall, Zone 2, Floor 3<br/>
                    Bangkok, Thailand
                </p>
                <div className="pt-4 space-y-3">
                   <a href="#" className="flex items-center gap-3 font-sans text-ink-light text-sm tracking-wide hover:text-ink transition-colors group">
                      <div className="w-8 h-8 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-[#06C755] group-hover:border-[#06C755] group-hover:text-white transition-all">
                        <LineIcon size={14} />
                      </div>
                      <span>LINE: @annaparis</span>
                   </a>
                   <a href="#" className="flex items-center gap-3 font-sans text-ink-light text-sm tracking-wide hover:text-ink transition-colors group">
                      <div className="w-8 h-8 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-[#1877F2] group-hover:border-[#1877F2] group-hover:text-white transition-all">
                        <Facebook size={14} />
                      </div>
                      <span>Facebook: Anna Paris Jewelry</span>
                   </a>
                </div>
             </div>
          </div>

          {/* Links Grid */}
          <div className="md:w-1/2 grid grid-cols-2 gap-8">
             <div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6">Collections</h4>
                <ul className="space-y-3 font-sans text-sm text-ink-light">
                    <li className="hover:text-ink cursor-pointer transition-colors">New Arrivals</li>
                    <li className="hover:text-ink cursor-pointer transition-colors">Necklaces</li>
                    <li className="hover:text-ink cursor-pointer transition-colors">Earrings</li>
                    <li className="hover:text-ink cursor-pointer transition-colors">Bridal</li>
                </ul>
             </div>
             <div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6">Service</h4>
                <ul className="space-y-3 font-sans text-sm text-ink-light">
                    <li className="hover:text-ink cursor-pointer transition-colors">Styling Consultation</li>
                    <li className="hover:text-ink cursor-pointer transition-colors">Care Instructions</li>
                    <li className="hover:text-ink cursor-pointer transition-colors">Repair Service</li>
                </ul>
             </div>
          </div>
        </div>
        
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-ink/30">
          <p>© 2025 Anna Paris Jewelry.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span>Privacy</span>
             <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;