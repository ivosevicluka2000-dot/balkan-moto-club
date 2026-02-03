
import React from 'react';

interface LocationSectionProps {
  onNavigate: () => void;
}

const LocationSection: React.FC<LocationSectionProps> = ({ onNavigate }) => {
  return (
    <section id="location" className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a] border-y border-white/10">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-16">
          
          <div className="lg:w-1/3">
            <span className="text-white/50 uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] font-bold mb-3 md:mb-4 block">The Network</span>
            <h2 className="serif text-3xl sm:text-4xl lg:text-5xl mb-4 md:mb-6">Our Locations</h2>
            <p className="text-white/60 text-sm mb-6 md:mb-8 leading-relaxed">
              We have chapters active throughout the region. Come visit us or join a ride.
            </p>
            
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
              <div>
                <h4 className="uppercase tracking-widest text-xs font-bold mb-2 text-white/80">Belgrade HQ</h4>
                <p className="text-white/60 text-sm font-light">12 Bulevar Kralja Petra, Belgrade, Serbia</p>
              </div>
              <div>
                <h4 className="uppercase tracking-widest text-xs font-bold mb-2 text-white/80">Weekly Schedule</h4>
                <p className="text-white/60 text-sm font-light">Sundays @ 08:00 AM — Dawn Patrol</p>
                <p className="text-white/60 text-sm font-light">Wednesdays @ 07:00 PM — Night Sessions</p>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <button 
                onClick={onNavigate}
                className="bg-brand text-center text-white px-6 md:px-8 py-4 text-sm sm:text-xs font-bold uppercase tracking-[0.15em] md:tracking-widest hover:bg-white hover:text-black transition-colors duration-300 active:scale-95"
              >
                View All Locations
              </button>
              <button className="border border-white/30 text-white/80 px-6 md:px-8 py-4 text-sm sm:text-xs font-bold uppercase tracking-[0.15em] md:tracking-widest hover:border-white hover:text-white transition-colors duration-300 active:scale-95">
                Contact Us
              </button>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div 
              className="relative h-[280px] sm:h-[350px] lg:h-[500px] w-full bg-zinc-900 overflow-hidden grayscale contrast-125 border border-white/10 group cursor-pointer" 
              onClick={onNavigate}
            >
              {/* Mock Map View - Optimized */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:scale-110 transition-transform duration-[5000ms]"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=60&w=800')` }}
              />
              <div className="absolute inset-0 bg-black/40" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-[2px]">
                 <span className="text-xs uppercase tracking-[0.3em] font-bold px-8 py-4 border border-white/30 bg-black/80 text-white">Enter Interactive Map</span>
              </div>

              {/* Pulsing Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <div className="w-4 h-4 bg-brand rounded-full animate-ping absolute" />
                <div className="w-4 h-4 bg-brand rounded-full relative shadow-[0_0_15px_rgba(207,10,10,0.8)]" />
                <div className="ml-4 bg-black/90 border border-brand/30 backdrop-blur-md px-4 py-2">
                  <span className="text-xs uppercase tracking-widest text-brand font-bold">HQ — Belgrade</span>
                </div>
              </div>

              {/* Texture Overlays */}
              <div className="absolute inset-0 pointer-events-none border-[20px] border-black/20" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;
