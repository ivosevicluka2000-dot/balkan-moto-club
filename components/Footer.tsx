
import React from 'react';

interface FooterProps {
  onNavigate: (view: 'home' | 'locations' | 'contact' | 'registry') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          <div className="col-span-1 md:col-span-2">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-3 mb-8 group"
            >
              <div className="w-8 h-8 border border-white flex items-center justify-center rotate-45 group-hover:bg-white transition-all duration-500">
                <span className="text-white group-hover:text-black -rotate-45 font-bold text-[10px]">BM</span>
              </div>
              <span className="uppercase tracking-[0.3em] font-light text-sm">Balkan Moto Club</span>
            </button>
            <p className="text-white/30 text-xs leading-relaxed max-w-sm">
              Established 2012. Dedicated to the preservation of road culture and the advancement of the riding spirit across the Balkan Peninsula.
            </p>
          </div>

          <div>
            <h5 className="uppercase tracking-widest text-[10px] font-bold mb-6 text-white/50">Follow The Pack</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-xs text-white/40 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-xs text-white/40 hover:text-white transition-colors">Vimeo</a></li>
              <li><a href="#" className="text-xs text-white/40 hover:text-white transition-colors">The Journal</a></li>
            </ul>
          </div>

          <div>
            <h5 className="uppercase tracking-widest text-[10px] font-bold mb-6 text-white/50">Explorer</h5>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('home')} className="text-xs text-white/40 hover:text-white transition-colors text-left">Home</button></li>
              <li><button onClick={() => onNavigate('registry')} className="text-xs text-white/40 hover:text-white transition-colors text-left">The Registry</button></li>
              <li><button onClick={() => onNavigate('locations')} className="text-xs text-white/40 hover:text-white transition-colors text-left">The Network</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-xs text-white/40 hover:text-white transition-colors text-left">Contact Liaison</button></li>
              <li><a href="#join" className="text-xs text-white/40 hover:text-white transition-colors">Join Us</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">© 2024 Balkan Moto Club — Built for the open road.</p>
          <p className="text-[10px] text-white/20 uppercase tracking-widest">V. 2.01 // Belgrade HQ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
