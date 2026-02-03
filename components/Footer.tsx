
import React from 'react';

interface FooterProps {
  onNavigate: (view: 'home' | 'locations' | 'contact' | 'registry') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black py-12 lg:py-20 border-t border-white/10">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-20">
          
          <div className="col-span-2">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-3 mb-6 lg:mb-8 group"
            >
              <div className="w-8 h-8 border border-white/60 flex items-center justify-center rotate-45 group-hover:border-brand group-hover:bg-brand transition-all duration-300">
                <span className="text-white group-hover:text-white -rotate-45 font-bold text-[10px]">BM</span>
              </div>
              <span className="uppercase tracking-[0.2em] font-medium text-sm group-hover:text-brand transition-colors">Balkan Moto Club</span>
            </button>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Established 2012. Dedicated to the preservation of road culture and the advancement of the riding spirit across the Balkan Peninsula.
            </p>
          </div>

          <div>
            <h5 className="uppercase tracking-widest text-[10px] font-bold mb-4 lg:mb-6 text-brand">Social</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white/60 hover:text-white active:text-brand transition-colors py-2 inline-block">Instagram</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white active:text-brand transition-colors py-2 inline-block">Vimeo</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white active:text-brand transition-colors py-2 inline-block">The Journal</a></li>
            </ul>
          </div>

          <div>
            <h5 className="uppercase tracking-widest text-[10px] font-bold mb-4 lg:mb-6 text-white/60">Menu</h5>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('home')} className="text-sm text-white/60 hover:text-white active:text-brand transition-colors text-left py-2">Home</button></li>
              <li><button onClick={() => onNavigate('registry')} className="text-sm text-white/60 hover:text-white active:text-brand transition-colors text-left py-2">Shop</button></li>
              <li><button onClick={() => onNavigate('locations')} className="text-sm text-white/60 hover:text-white active:text-brand transition-colors text-left py-2">Locations</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-sm text-white/60 hover:text-white active:text-brand transition-colors text-left py-2">Contact Us</button></li>
              <li><a href="#join" className="text-sm text-white/60 hover:text-white active:text-brand transition-colors py-2 inline-block">Join Us</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 uppercase tracking-widest">© 2024 Balkan Moto Club — Built for the open road.</p>
          <p className="text-xs text-white/40 uppercase tracking-widest">V. 2.01 // Belgrade HQ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
