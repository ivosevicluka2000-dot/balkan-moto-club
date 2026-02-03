
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isScrolled: boolean;
  currentView: 'home' | 'locations' | 'contact' | 'registry';
  onNavigate: (view: 'home' | 'locations' | 'contact' | 'registry') => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isTransparent = !isScrolled && currentView === 'home' && !isMobileMenuOpen;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavigate = (view: 'home' | 'locations' | 'contact' | 'registry') => {
    setIsMobileMenuOpen(false);
    onNavigate(view);
  };

  const navItems = [
    { view: 'home' as const, label: 'Home', hoverLabel: 'Home' },
    { view: 'registry' as const, label: 'Shop', hoverLabel: 'Gear' },
    { view: 'locations' as const, label: 'Locations', hoverLabel: 'Network' },
    { view: 'contact' as const, label: 'Contact', hoverLabel: 'Contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 px-6 lg:px-16 ${
          !isTransparent ? 'bg-black/95 py-4 lg:py-6 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6 lg:py-10'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => handleNavigate('home')}
            className="flex items-center group cursor-pointer z-[1001]"
          >
            <img 
              src="/logo.png" 
              alt="Balkan MotoCenta" 
              className="h-10 lg:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </button>
          
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map(item => (
              <button 
                key={item.view}
                onClick={() => handleNavigate(item.view)}
                className={`group relative overflow-hidden text-xs uppercase tracking-[0.2em] font-medium transition-colors py-2 px-1 ${currentView === item.view ? 'text-brand' : 'text-white/60 hover:text-white'}`}
              >
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">{item.label}</span>
                <span className="absolute top-2 left-1 block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-brand font-bold">{item.hoverLabel}</span>
              </button>
            ))}

            <a 
              href="#join" 
              className="px-6 py-3 bg-brand text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
            >
              Join Us
            </a>
          </div>

          {/* Hamburger Button */}
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsMobileMenuOpen(prev => !prev);
            }}
            className="lg:hidden flex flex-col justify-center items-center w-12 h-12 -mr-2 z-[1002] relative cursor-pointer"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[1px]' : '-translate-y-1.5'}`}></span>
            <span className={`block w-6 h-[2px] bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[1px]' : 'translate-y-1.5'}`}></span>
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div 
        className={`fixed inset-0 z-[999] bg-black transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/20 rotate-45"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white/10 rotate-12"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-8">
          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-8">
            {navItems.map((item, index) => (
              <button
                key={item.view}
                onClick={() => handleNavigate(item.view)}
                className={`group relative overflow-hidden transition-all duration-500 ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 100 + 200}ms` : '0ms' }}
              >
                <span className={`serif text-4xl sm:text-5xl font-extralight tracking-tight transition-colors duration-300 ${
                  currentView === item.view ? 'text-brand' : 'text-white hover:text-brand'
                }`}>
                  {item.label}
                </span>
                {currentView === item.view && (
                  <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-brand rounded-full"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Join Us CTA */}
          <div 
            className={`mt-16 transition-all duration-500 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? '600ms' : '0ms' }}
          >
            <a 
              href="#join"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block px-12 py-4 border border-brand text-brand text-xs uppercase tracking-[0.3em] font-bold hover:bg-brand hover:text-white transition-all duration-500"
            >
              Join Us
            </a>
          </div>

          {/* Footer Info */}
          <div 
            className={`absolute bottom-12 left-0 right-0 px-8 transition-all duration-500 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? '700ms' : '0ms' }}
          >
            <div className="flex justify-between items-end text-white/50 text-[10px] uppercase tracking-widest">
              <span>Est. 2012</span>
              <span>Balkan Brotherhood</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
