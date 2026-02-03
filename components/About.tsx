
import React, { useEffect, useRef } from 'react';
import OptimizedImage from './OptimizedImage';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-40 bg-[#050505]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-5 relative reveal">
            <div className="aspect-[3/4] overflow-hidden grayscale contrast-125 brightness-75 border border-white/5">
              <OptimizedImage 
                src="https://images.unsplash.com/photo-1542360561-19363d59649b" 
                alt="The Machine" 
                className="w-full h-full"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="absolute top-12 -left-6 lg:-left-12 flex flex-col space-y-4 items-center">
                <span className="[writing-mode:vertical-lr] uppercase tracking-[1em] text-[10px] text-white/20 font-light">ESTABLISHED MMXII</span>
                <div className="w-px h-32 bg-white/10" />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-24 reveal delay-200">
            <div className="mb-12 inline-flex items-center space-x-4">
                <span className="text-white/50 uppercase tracking-[0.5em] text-[10px] font-bold">Our Philosophy</span>
                <div className="h-px w-12 bg-white/20" />
            </div>
            
            <h2 className="serif text-5xl md:text-7xl lg:text-8xl mb-12 leading-[1.1] font-extralight tracking-tight">
              Built on <span className="italic">Trust</span>, <br />
              Driven by <span className="italic">Steel.</span>
            </h2>
            
            <div className="max-w-xl space-y-10 text-white/70 text-base md:text-lg leading-relaxed font-light">
              <p>
                The Balkan Moto Club is not for everyone. We do not exist for the weekend hobbyist or the social media enthusiast. We exist for those who understand that the road is a teacher, and the machine is a mirror.
              </p>
              <p>
                Our creed is simple: Respect the line. Protect the pack. Maintain the craft. Whether traversing the rugged peaks of the Dinaric Alps or the urban labyrinth of Belgrade, we move with a unified purpose that transcends borders.
              </p>
              
              <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-3">Discipline</h4>
                  <p className="text-xs font-light text-white/50 leading-relaxed">Safety is not a checklist; it is an instinct honed through thousands of shared kilometers.</p>
                </div>
                <div>
                  <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-3">Loyalty</h4>
                  <p className="text-xs font-light text-white/50 leading-relaxed">No rider is left behind. We are bound by a commitment that remains silent but absolute.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
