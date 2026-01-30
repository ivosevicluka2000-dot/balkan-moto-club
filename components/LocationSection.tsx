
import React from 'react';

interface LocationSectionProps {
  onNavigate: () => void;
}

const LocationSection: React.FC<LocationSectionProps> = ({ onNavigate }) => {
  return (
    <section id="location" className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-1/3">
            <h2 className="serif text-4xl mb-6">Find The Pack</h2>
            <p className="text-white/50 text-sm mb-8 leading-relaxed">
              We operate across several key nodes in the Balkan region. Our doors are open to those who approach with respect.
            </p>
            
            <div className="space-y-8 mb-12">
              <div>
                <h4 className="uppercase tracking-widest text-[11px] font-bold mb-2">Central Chapter</h4>
                <p className="text-white/70 text-sm font-light">12 Bulevar Kralja Petra, Belgrade, Serbia</p>
              </div>
              <div>
                <h4 className="uppercase tracking-widest text-[11px] font-bold mb-2">Ride Days</h4>
                <p className="text-white/70 text-sm font-light">Sundays @ 08:00 AM — Dawn Patrol</p>
                <p className="text-white/70 text-sm font-light">Wednesdays @ 07:00 PM — Night Sessions</p>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <button 
                onClick={onNavigate}
                className="bg-white text-center text-black px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
              >
                View Full Network Map
              </button>
              <button className="border border-white/20 text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
                Message HQ
              </button>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div 
              className="relative h-[400px] lg:h-[600px] w-full bg-zinc-900 overflow-hidden grayscale contrast-125 border border-white/5 group cursor-pointer" 
              onClick={onNavigate}
            >
              {/* Mock Map View - Optimized */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:scale-110 transition-transform duration-[5000ms]"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=60&w=800')` }}
              />
              <div className="absolute inset-0 bg-black/40" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                 <span className="text-[10px] uppercase tracking-[0.5em] font-bold px-8 py-4 border border-white/20 bg-black">Enter Interactive Map</span>
              </div>

              {/* Pulsing Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full animate-ping absolute" />
                <div className="w-4 h-4 bg-white rounded-full relative" />
                <div className="ml-4 bg-black/80 border border-white/20 backdrop-blur-md px-4 py-2">
                  <span className="text-[10px] uppercase tracking-widest">HQ — Belgrade</span>
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
