
import React from 'react';

const offeringData = [
  {
    title: "Formation Protocol",
    desc: "Advanced group riding maneuvers and signaling forged through years of cross-peninsula expeditions."
  },
  {
    title: "Master Workshop",
    desc: "Private access to shared tools, technical expertise, and custom engineering support."
  },
  {
    title: "Pathfinder Missions",
    desc: "Curated, high-intensity long-range tours designed to test both rider and machine."
  },
  {
    title: "The Inner Circle",
    desc: "A strictly vetted brotherhood offering mutual aid, housing, and support across the Balkan network."
  },
  {
    title: "Heritage Merch",
    desc: "Limited-run, technical apparel designed for longevity and rugged Balkan conditions."
  },
  {
    title: "Member Registry",
    desc: "Digital and physical identification signifying status and access to partner clubhouses globally."
  }
];

const Offerings: React.FC = () => {
  return (
    <section id="offerings" className="py-16 md:py-24 lg:py-40 bg-[#050505]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-10 md:mb-16 lg:mb-24 gap-6 md:gap-8 lg:gap-12">
          <div className="max-w-2xl">
            <span className="text-white/50 uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] font-bold mb-4 md:mb-6 block">Capabilities</span>
            <h3 className="serif text-4xl sm:text-5xl md:text-7xl font-extralight tracking-tight">The <span className="italic">Structure</span> of Freedom.</h3>
          </div>
          <div className="text-right">
             <p className="text-white/60 text-sm font-light max-w-xs ml-auto">
                We provide the framework. You provide the grit. Our offerings are designed to elevate the standard of riding in the region.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/10">
          {offeringData.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-6 md:p-8 lg:p-12 border-b md:border-r border-white/10 last:border-b-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+2)]:border-b lg:[&:nth-last-child(-n+3)]:border-b-0 group hover:bg-white/[0.03] transition-all duration-300 relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-1.5 h-1.5 bg-brand rounded-full" />
              </div>
              
              <div className="mb-4 md:mb-8">
                <span className="serif text-2xl md:text-3xl lg:text-4xl text-white/20 group-hover:text-brand/40 transition-colors italic">0{idx + 1}</span>
              </div>
              
              <h4 className="uppercase tracking-[0.15em] md:tracking-[0.3em] text-xs font-bold mb-3 md:mb-4 text-white group-hover:text-brand transition-colors duration-300">{item.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed font-light group-hover:text-white/80 transition-colors">{item.desc}</p>
              
              <div className="mt-6 md:mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="w-8 h-px bg-brand/50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
