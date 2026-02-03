
import React, { useEffect, useState } from 'react';
import { usePreloadImages } from './OptimizedImage';

// Critical hero image URL
const HERO_IMAGE = 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&q=80&w=1920';

interface HeroProps {
  onNavigate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload hero image
  usePreloadImages([HERO_IMAGE]);

  useEffect(() => {
    // Preload image before showing
    const img = new Image();
    img.src = HERO_IMAGE;
    img.onload = () => setImageLoaded(true);
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Immersive Backdrop - High-end Harley Davidson Visual */}
      <div 
        className={`absolute inset-0 bg-cover bg-center grayscale brightness-[0.3] scale-105 transition-all duration-[10s] ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: `url('${HERO_IMAGE}')`,
          transform: isVisible ? 'scale(1)' : 'scale(1.1)'
        }}
      />
      
      {/* Sophisticated Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-black/10 backdrop-grayscale-[0.2]" />

      <div className={`relative z-10 max-w-7xl mx-auto px-6 text-center transition-all duration-[2000ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-10 inline-flex items-center space-x-4">
          <div className="h-px w-8 bg-brand/50" />
          <span className="text-brand/80 uppercase tracking-[0.6em] text-[9px] font-bold">Est. 2012</span>
          <div className="h-px w-8 bg-brand/50" />
        </div>
        
        <h1 className="serif text-brand text-6xl md:text-9xl lg:text-[10rem] mb-12 leading-[0.85] font-extralight tracking-tight">
          Balkan <br />
          <span className="italic font-light text-white opacity-80">Moto Club</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-white/50 text-sm md:text-lg font-light tracking-wide mb-16 leading-relaxed">
          The premier motorcycle community in the Balkans. Join us for weekly rides, events, and the freedom of the open road.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 w-full px-4 sm:px-0">
          <button 
            onClick={onNavigate}
            className="group relative w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 overflow-hidden"
          >
            <div className="absolute inset-0 bg-brand transition-transform duration-500 group-hover:scale-105" />
            <span className="relative z-10 text-black text-[11px] uppercase tracking-[0.4em] font-bold">Find a Location</span>
          </button>
          <a 
            href="#join"
            className="group relative w-full sm:w-auto text-center px-10 sm:px-12 py-4 sm:py-5 overflow-hidden border border-white/20 hover:border-brand/50 active:bg-white/10 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white transition-all duration-500" />
            <span className="relative z-10 text-white group-hover:text-black text-[11px] uppercase tracking-[0.4em] font-bold transition-colors duration-500">How to Join</span>
          </a>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-12 left-12 flex-col items-start space-y-4">
        <div className="flex space-x-4">
            <div className="w-1 h-1 rounded-full bg-brand animate-pulse" />
            <div className="w-1 h-1 rounded-full bg-brand/20" />
            <div className="w-1 h-1 rounded-full bg-brand/20" />
        </div>
        <span className="text-[8px] uppercase tracking-[0.4em] text-white/30">HQ: 44.7866° N, 20.4489° E</span>
      </div>

      <div className="hidden md:flex absolute bottom-12 right-12 flex-col items-end">
        <div className="w-px h-24 bg-gradient-to-t from-brand to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
