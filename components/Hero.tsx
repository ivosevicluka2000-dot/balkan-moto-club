
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
        className={`absolute inset-0 bg-cover bg-center grayscale brightness-[0.3] transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: `url('${HERO_IMAGE}')`
        }}
      />
      
      {/* Sophisticated Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-10 inline-flex items-center space-x-4">
          <div className="h-px w-8 bg-brand/50" />
          <span className="text-brand uppercase tracking-[0.6em] text-[10px] font-bold">Est. 2012</span>
          <div className="h-px w-8 bg-brand/50" />
        </div>
        
        <h1 className="serif text-brand text-5xl sm:text-6xl md:text-9xl lg:text-[10rem] mb-8 md:mb-12 leading-[0.85] font-extralight tracking-tight">
          Balkan <br />
          <span className="italic font-light text-white opacity-80">Moto Club</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-white/70 text-sm md:text-lg font-light tracking-wide mb-10 md:mb-16 leading-relaxed px-4 sm:px-0">
          The premier motorcycle community in the Balkans. Join us for weekly rides, events, and the freedom of the open road.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full px-4 sm:px-0">
          <button 
            onClick={onNavigate}
            className="group relative w-full sm:w-auto px-8 sm:px-12 py-5 overflow-hidden shadow-lg shadow-brand/20 active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-brand transition-all duration-300 group-hover:bg-white" />
            <span className="relative z-10 text-white group-hover:text-black text-sm sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold transition-colors">Find a Location</span>
          </button>
          <a 
            href="#join"
            className="group relative w-full sm:w-auto text-center px-8 sm:px-12 py-5 overflow-hidden border border-white/30 hover:border-white active:scale-95 transition-all duration-300"
          >
            <span className="relative z-10 text-white/80 group-hover:text-white text-sm sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold transition-colors">How to Join</span>
          </a>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-12 left-12 flex-col items-start space-y-4">
        <div className="flex space-x-4">
            <div className="w-1 h-1 rounded-full bg-brand animate-pulse" />
            <div className="w-1 h-1 rounded-full bg-brand/20" />
            <div className="w-1 h-1 rounded-full bg-brand/20" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">HQ: 44.7866° N, 20.4489° E</span>
      </div>

      <div className="hidden md:flex absolute bottom-12 right-12 flex-col items-end">
        <div className="w-px h-24 bg-gradient-to-t from-brand to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
