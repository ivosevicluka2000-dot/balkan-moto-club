
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
    <section id="offerings" className="py-32 lg:py-64 bg-[#050505]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-white/30 uppercase tracking-[0.5em] text-[9px] font-bold mb-6 block">Capabilities</span>
            <h3 className="serif text-5xl md:text-7xl font-extralight tracking-tight">The <span className="italic">Structure</span> of Freedom.</h3>
          </div>
          <div className="text-right">
             <p className="text-white/40 text-sm font-light max-w-xs ml-auto">
                We provide the framework. You provide the grit. Our offerings are designed to elevate the standard of riding in the region.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {offeringData.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-16 border border-white/5 group hover:bg-white/[0.02] transition-all duration-700 relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-1 h-1 bg-white rounded-full" />
              </div>
              
              <div className="mb-12">
                <span className="serif text-4xl text-white/10 group-hover:text-white/30 transition-colors italic">0{idx + 1}</span>
              </div>
              
              <h4 className="uppercase tracking-[0.4em] text-[11px] font-bold mb-6 text-white group-hover:translate-x-2 transition-transform duration-500">{item.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed font-light group-hover:text-white/60 transition-colors">{item.desc}</p>
              
              <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                 <div className="w-8 h-px bg-white/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
