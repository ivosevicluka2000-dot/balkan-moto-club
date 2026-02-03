
import React from 'react';

const JoinUs: React.FC = () => {
  return (
    <section id="join" className="relative py-20 md:py-32 lg:py-80 overflow-hidden bg-black">
      {/* Dynamic Background - Uses bg-scroll on mobile to fix iOS Safari issues */}
      <div 
        className="absolute inset-0 bg-cover bg-scroll lg:bg-fixed bg-center grayscale brightness-[0.25]"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558981420-c532902e58b4?auto=format&fit=crop&q=90&w=2400')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-8 md:mb-12 flex justify-center items-center space-x-4 md:space-x-6">
            <div className="w-8 md:w-12 h-px bg-white/30" />
            <span className="text-white/50 uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] font-bold">Initiation Registry</span>
            <div className="w-8 md:w-12 h-px bg-white/30" />
        </div>

        <h2 className="serif text-5xl sm:text-6xl md:text-[8rem] mb-8 md:mb-12 leading-tight font-extralight tracking-tighter">
            Earn the <br />
            <span className="italic">Emblem.</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-white/70 text-base md:text-xl mb-10 md:mb-16 font-light leading-relaxed tracking-wide">
            Many seek the club. Few possess the character. Membership is earned through presence, proven competence, and the consensus of the brothers.
          </p>
          
          <div className="flex flex-col items-center">
            <button className="group relative w-full sm:w-auto px-10 md:px-16 py-5 bg-white text-black text-sm sm:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] hover:scale-105 transition-all duration-300 active:scale-95 shadow-lg shadow-white/10">
              Request Vetting
            </button>
            
            <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-white/50 font-medium">
              Note: A Valid Balkan Chapter Reference is Required.
            </p>
          </div>
          
          <div className="mt-12 md:mt-20 grid grid-cols-3 gap-4 md:gap-8 opacity-40">
             <div className="flex flex-col items-center space-y-2 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 border border-white/60 flex items-center justify-center">
                    <span className="text-xs font-bold">S</span>
                </div>
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest">Strength</span>
             </div>
             <div className="flex flex-col items-center space-y-2 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 border border-white/60 flex items-center justify-center">
                    <span className="text-xs font-bold">H</span>
                </div>
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest">Honor</span>
             </div>
             <div className="flex flex-col items-center space-y-2 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 border border-white/60 flex items-center justify-center">
                    <span className="text-xs font-bold">F</span>
                </div>
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest">Faith</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
