
import React, { useState, useEffect, useRef } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  subject: string;
  message: string;
  consent: boolean;
}

const FAQ_DATA = [
  {
    question: "Do I need a specific motorcycle brand to join?",
    answer: "No. While we appreciate the engineering of classic V-Twins and rugged cruisers, we value character and riding discipline over the emblem on your tank. Quality machinery is expected, regardless of the brand."
  },
  {
    question: "Can new riders apply for membership?",
    answer: "We welcome prospective brothers who demonstrate a commitment to learning and respect for the road. However, full membership requires proven competence and thousands of kilometers in various conditions."
  },
  {
    question: "What are the primary ride rules?",
    answer: "Formation protocol is absolute. We ride staggered, maintain consistent pace, and use standardized hand signals. Safety is handled through discipline, not luck."
  },
  {
    question: "Are there mandatory membership fees?",
    answer: "The club is self-funded through member contributions and chapter initiatives. Fees are structured to maintain our clubhouses and support brothers in need. Transparency is maintained at the chapter level."
  },
  {
    question: "How do I list my shop or service in the BMC Network?",
    answer: "Partner locations must be vetted by a Regional Sergeant. We only list establishments that demonstrate exceptional craft and provide fair value to the riding community."
  }
];

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    city: '',
    subject: 'General Inquiry',
    message: '',
    consent: false
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        subject: 'General Inquiry',
        message: '',
        consent: false
      });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  return (
    <div ref={sectionRef} className="bg-[#050505] min-h-screen pt-[100px]">
      {/* Hero Section */}
      <section className="relative h-[60dvh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.25]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558981396-5fcf84bdf14d?auto=format&fit=crop&q=90&w=2400')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center reveal">
          <div className="mb-6 inline-flex items-center space-x-4">
            <span className="text-white/40 uppercase tracking-[0.5em] text-[10px] font-bold">Established Channels</span>
          </div>
          <h1 className="serif text-6xl md:text-8xl lg:text-9xl mb-8 font-extralight tracking-tight">Liaison.</h1>
          <p className="max-w-xl mx-auto text-white/50 text-sm md:text-base font-light tracking-wide leading-relaxed">
            The road is wide, but the circle is tight. Whether you seek the pack or propose a partnership, speak with clarity and respect.
          </p>
          <div className="mt-12 text-[9px] uppercase tracking-[0.4em] text-white/20">
            Average response time: 24 — 48 Hours
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {[
              { title: "Visual Chronicle", desc: "Real-time updates and community sightings.", label: "Message Instagram", link: "#" },
              { title: "Direct Dispatch", desc: "High-priority coordination for active riders.", label: "Start WhatsApp", link: "#" },
              { title: "Official Inquiries", desc: "Partnerships, media, and legal matters.", label: "Send Email", link: "mailto:liaison@balkanmotoclub.com" },
              { title: "The Rendezvous", desc: "Coordinate your first presence at a ride.", label: "Find Meetup", link: "#network" }
            ].map((method, idx) => (
              <div key={idx} className="bg-[#050505] p-12 flex flex-col items-start group hover:bg-white/[0.02] transition-colors reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <span className="text-[9px] text-white/20 uppercase tracking-widest mb-4">0{idx + 1}</span>
                <h3 className="serif text-2xl mb-4 text-white/90">{method.title}</h3>
                <p className="text-white/40 text-xs font-light leading-relaxed mb-8 flex-grow">{method.desc}</p>
                <a 
                  href={method.link}
                  className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 group-hover:text-white transition-colors border-b border-white/10 pb-1"
                >
                  {method.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Form + Map info */}
      <section className="py-32 lg:py-48">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            
            {/* Form Side */}
            <div className="lg:col-span-7 reveal">
              <div className="mb-16">
                <h2 className="serif text-5xl md:text-7xl mb-8">Initiate <br /><span className="italic">Contact.</span></h2>
                <p className="text-white/40 text-sm font-light tracking-wide max-w-lg">
                  Provide detailed information to ensure your inquiry is routed to the correct chapter officer.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-bold group-focus-within:text-white transition-colors">Full Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Marko Petrovic"
                      className="w-full bg-transparent border-b border-white/10 py-4 text-sm font-light focus:outline-none focus:border-white transition-colors placeholder:text-white/5"
                    />
                  </div>
                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-bold group-focus-within:text-white transition-colors">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="marko@provider.com"
                      className="w-full bg-transparent border-b border-white/10 py-4 text-sm font-light focus:outline-none focus:border-white transition-colors placeholder:text-white/5"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-bold group-focus-within:text-white transition-colors">Primary City</label>
                    <input 
                      type="text" 
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Belgrade, RS"
                      className="w-full bg-transparent border-b border-white/10 py-4 text-sm font-light focus:outline-none focus:border-white transition-colors placeholder:text-white/5"
                    />
                  </div>
                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-bold group-focus-within:text-white transition-colors">Inquiry Subject</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-4 text-sm font-light focus:outline-none focus:border-white transition-colors appearance-none"
                    >
                      <option className="bg-[#111]" value="General Inquiry">General Inquiry</option>
                      <option className="bg-[#111]" value="Joining the Club">Joining the Club</option>
                      <option className="bg-[#111]" value="Strategic Partnerships">Strategic Partnerships</option>
                      <option className="bg-[#111]" value="Event Coordination">Event Coordination</option>
                      <option className="bg-[#111]" value="Media & Press">Media & Press</option>
                    </select>
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-bold group-focus-within:text-white transition-colors">Your Message</label>
                  <textarea 
                    required
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your request or proposal..."
                    className="w-full bg-transparent border-b border-white/10 py-4 text-sm font-light focus:outline-none focus:border-white transition-colors placeholder:text-white/5 resize-none"
                  />
                </div>

                <div className="flex items-center space-x-4 group cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="w-4 h-4 bg-transparent border border-white/20 accent-white cursor-pointer" 
                  />
                  <span className="text-[10px] text-white/40 uppercase tracking-widest font-medium group-hover:text-white/60 transition-colors">
                    I understand that all communications are handled with discretion.
                  </span>
                </div>

                <div className="pt-8">
                  <button 
                    disabled={status === 'submitting'}
                    className={`group relative px-16 py-6 bg-white text-black text-[11px] font-bold uppercase tracking-[0.5em] transition-all duration-500 flex items-center justify-center min-w-[280px] ${status === 'submitting' ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
                  >
                    {status === 'submitting' ? 'Transmitting...' : 'Send Message'}
                  </button>
                  
                  {status === 'success' && (
                    <p className="mt-6 text-[10px] text-green-500 uppercase tracking-widest font-bold animate-pulse">
                      Message Transmitted. Expect a response soon.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="mt-6 text-[10px] text-red-500 uppercase tracking-widest font-bold">
                      Transmission Failure. Please check your connection.
                    </p>
                  )}
                </div>
              </form>
            </div>

            {/* Info Side */}
            <div className="lg:col-span-5 space-y-24 reveal delay-300">
              
              {/* Meetup Info */}
              <div>
                <span className="text-white/20 uppercase tracking-[0.5em] text-[9px] font-bold mb-8 block">HQ Operations</span>
                <div className="space-y-12">
                  <div>
                    <h4 className="serif text-3xl mb-4">The Rendezvous</h4>
                    <p className="text-white/50 text-xs font-light leading-relaxed mb-6">
                      For those seeking to meet the club in person, our central chapter gathers weekly. 
                      Presence is the only true way to be recognized.
                    </p>
                    <div className="grid grid-cols-2 gap-8 py-6 border-y border-white/5">
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-white/30 block mb-2">Location</span>
                        <span className="text-[11px] font-bold tracking-wider">Belgrade Central Hub</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-white/30 block mb-2">Primary Ride</span>
                        <span className="text-[11px] font-bold tracking-wider">Sun @ 08:00 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <span className="text-white/20 uppercase tracking-[0.5em] text-[9px] font-bold mb-8 block">Frequency Asked</span>
                <div className="space-y-12">
                  {FAQ_DATA.map((faq, idx) => (
                    <div key={idx} className="group">
                      <h5 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-3 text-white group-hover:text-white/60 transition-colors">{faq.question}</h5>
                      <p className="text-xs text-white/40 font-light leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-48 lg:py-64 overflow-hidden border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <h2 className="serif text-6xl md:text-8xl mb-8">The First <span className="italic">Gear.</span></h2>
          <p className="text-white/40 text-sm md:text-base font-light tracking-wide mb-16 max-w-lg mx-auto leading-relaxed">
            Respect is earned on the asphalt, not in the inbox. If you're ready to prove your character, take the first step.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="px-12 py-5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-zinc-200 transition-colors">
              Apply to Join
            </button>
            <button className="px-12 py-5 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white/5 transition-colors">
              See Upcoming Rides
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
