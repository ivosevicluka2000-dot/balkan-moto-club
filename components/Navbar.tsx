
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
  currentView: 'home' | 'locations' | 'contact' | 'registry';
  onNavigate: (view: 'home' | 'locations' | 'contact' | 'registry') => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, currentView, onNavigate }) => {
  const isTransparent = !isScrolled && currentView === 'home';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-700 px-8 lg:px-16 ${
        !isTransparent ? 'bg-black/90 backdrop-blur-xl py-6 border-b border-white/5 shadow-2xl' : 'bg-transparent py-10'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-4 group cursor-pointer"
        >
          <div className="w-10 h-10 border border-white/20 flex items-center justify-center rotate-45 group-hover:border-white transition-all duration-500">
            <span className="text-white -rotate-45 font-bold text-[10px] tracking-tighter">BMC</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="uppercase tracking-[0.4em] font-bold text-[11px]">Balkan Moto Club</span>
            <span className="uppercase tracking-[0.5em] font-light text-[7px] text-white/30 group-hover:text-white/60 transition-colors">The Brotherhood</span>
          </div>
        </button>
        
        <div className="hidden lg:flex items-center space-x-12">
          <button 
            onClick={() => onNavigate('home')}
            className={`group relative overflow-hidden text-[10px] uppercase tracking-[0.3em] font-medium transition-colors ${currentView === 'home' ? 'text-white' : 'text-white/40 hover:text-white'}`}
          >
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">Home</span>
            <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 italic font-bold">Home</span>
          </button>

          <button 
            onClick={() => onNavigate('registry')}
            className={`group relative overflow-hidden text-[10px] uppercase tracking-[0.3em] font-medium transition-colors ${currentView === 'registry' ? 'text-white' : 'text-white/40 hover:text-white'}`}
          >
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">Registry</span>
            <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 italic font-bold">Gear</span>
          </button>

          <button 
            onClick={() => onNavigate('locations')}
            className={`group relative overflow-hidden text-[10px] uppercase tracking-[0.3em] font-medium transition-colors ${currentView === 'locations' ? 'text-white' : 'text-white/40 hover:text-white'}`}
          >
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">Network</span>
            <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 italic font-bold">Network</span>
          </button>

          <button 
            onClick={() => onNavigate('contact')}
            className={`group relative overflow-hidden text-[10px] uppercase tracking-[0.3em] font-medium transition-colors ${currentView === 'contact' ? 'text-white' : 'text-white/40 hover:text-white'}`}
          >
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">Liaison</span>
            <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 italic font-bold">Contact</span>
          </button>

          <a 
            href="#join" 
            className="px-8 py-3 border border-white/10 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-500"
          >
            Join Us
          </a>
        </div>

        <button className="lg:hidden flex flex-col space-y-2 p-2 group">
          <span className="w-8 h-[1px] bg-white group-hover:w-6 transition-all"></span>
          <span className="w-6 h-[1px] bg-white group-hover:w-8 transition-all ml-auto"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
