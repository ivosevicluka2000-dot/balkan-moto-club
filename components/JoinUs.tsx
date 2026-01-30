
import React from 'react';

const JoinUs: React.FC = () => {
  return (
    <section id="join" className="relative py-48 lg:py-80 overflow-hidden bg-black">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-fixed bg-center grayscale brightness-[0.25]"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558981420-c532902e58b4?auto=format&fit=crop&q=90&w=2400')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-12 flex justify-center items-center space-x-6">
            <div className="w-12 h-px bg-white/20" />
            <span className="text-white/40 uppercase tracking-[0.6em] text-[10px] font-bold">Initiation Registry</span>
            <div className="w-12 h-px bg-white/20" />
        </div>

        <h2 className="serif text-6xl md:text-[8rem] mb-12 leading-tight font-extralight tracking-tighter">
            Earn the <br />
            <span className="italic">Emblem.</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-white/60 text-lg md:text-xl mb-16 font-light leading-relaxed tracking-wide">
            Many seek the club. Few possess the character. Membership is earned through presence, proven competence, and the consensus of the brothers.
          </p>
          
          <div className="flex flex-col items-center">
            <button className="group relative px-20 py-6 bg-white text-black text-[11px] font-bold uppercase tracking-[0.5em] hover:scale-105 transition-all duration-500 active:scale-95">
              Request Vetting
            </button>
            
            <p className="mt-8 text-[9px] uppercase tracking-[0.3em] text-white/30 font-medium">
              Note: A Valid Balkan Chapter Reference is Required.
            </p>
          </div>
          
          <div className="mt-32 grid grid-cols-3 gap-8 opacity-20">
             <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 border border-white flex items-center justify-center">
                    <span className="text-[10px] font-bold">S</span>
                </div>
                <span className="text-[8px] uppercase tracking-widest">Strength</span>
             </div>
             <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 border border-white flex items-center justify-center">
                    <span className="text-[10px] font-bold">H</span>
                </div>
                <span className="text-[8px] uppercase tracking-widest">Honor</span>
             </div>
             <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 border border-white flex items-center justify-center">
                    <span className="text-[10px] font-bold">F</span>
                </div>
                <span className="text-[8px] uppercase tracking-widest">Faith</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
