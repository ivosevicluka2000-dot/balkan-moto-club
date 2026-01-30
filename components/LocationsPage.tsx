
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { locations, Location, LocationType } from '../data/locations';
import L from 'leaflet';

const LocationsPage: React.FC = () => {
  const [activeType, setActiveType] = useState<LocationType>('shop');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [isMobileListOpen, setIsMobileListOpen] = useState(false);
  
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Filtered data based on toggle and search
  const filteredLocations = useMemo(() => {
    return locations.filter(loc => {
      const matchesType = loc.type === activeType;
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        loc.name.toLowerCase().includes(query) ||
        loc.city.toLowerCase().includes(query) ||
        loc.category.toLowerCase().includes(query) ||
        loc.address.toLowerCase().includes(query);
      return matchesType && matchesSearch;
    });
  }, [activeType, searchQuery]);

  // Initialize Map
  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current, {
        center: [44.7866, 20.4489],
        zoom: 6,
        zoomControl: false,
        attributionControl: false
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
      }).addTo(mapRef.current);

      L.control.zoom({ position: 'bottomright' }).addTo(mapRef.current);
      markersRef.current = L.layerGroup().addTo(mapRef.current);

      // Fix for gray maps or broken tiles on initial load
      setTimeout(() => {
        if (mapRef.current) mapRef.current.invalidateSize();
      }, 200);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Update Markers when filteredLocations changes
  useEffect(() => {
    if (!mapRef.current || !markersRef.current) return;

    markersRef.current.clearLayers();

    filteredLocations.forEach(loc => {
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div class="relative group">
            <div class="w-4 h-4 bg-white rounded-full border-2 border-black transition-transform duration-300 group-hover:scale-150 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black border border-white/20 px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-[8px] uppercase tracking-widest z-50">
              ${loc.name}
            </div>
          </div>
        `,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });

      const marker = L.marker([loc.lat, loc.lng], { icon: customIcon });
      
      marker.on('click', () => {
        handleLocationSelect(loc);
      });

      markersRef.current?.addLayer(marker);
    });

    // Auto-fit bounds if we have locations
    if (filteredLocations.length > 0 && mapRef.current) {
      const group = L.featureGroup(filteredLocations.map(l => L.marker([l.lat, l.lng])));
      mapRef.current.fitBounds(group.getBounds(), { padding: [50, 50], maxZoom: 12 });
    }
  }, [filteredLocations]);

  const handleLocationSelect = (loc: Location) => {
    setSelectedLocation(loc);
    if (mapRef.current) {
      mapRef.current.setView([loc.lat, loc.lng], 14, { animate: true, duration: 1 });
    }
    if (window.innerWidth < 1024) {
      setIsMobileListOpen(false);
    }
  };

  return (
    <div className="pt-[100px] h-screen flex flex-col bg-[#050505] overflow-hidden">
      {/* Header / Controls */}
      <div className="flex-none px-6 lg:px-12 py-8 border-b border-white/5 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <h1 className="serif text-3xl lg:text-4xl">The Network</h1>
          <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] mt-2">Verified Chapters & Partners</p>
        </div>

        <div className="flex items-center gap-4 w-full lg:w-auto">
          {/* Toggle */}
          <div className="bg-white/5 p-1 flex rounded-none border border-white/10 w-full lg:w-[300px]">
            <button 
              onClick={() => setActiveType('shop')}
              className={`flex-1 py-3 text-[10px] uppercase tracking-widest font-bold transition-all ${activeType === 'shop' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
            >
              Shops
            </button>
            <button 
              onClick={() => setActiveType('service')}
              className={`flex-1 py-3 text-[10px] uppercase tracking-widest font-bold transition-all ${activeType === 'service' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
            >
              Services
            </button>
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-[400px]">
            <input 
              type="text" 
              placeholder="SEARCH BY CITY OR NAME..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 px-6 py-3.5 text-[10px] uppercase tracking-widest focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20"
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex-1 flex flex-col lg:flex-row relative overflow-hidden">
        
        {/* List View (Left) */}
        <div className={`
          absolute lg:relative inset-0 lg:inset-auto z-[900] lg:z-auto bg-[#050505] lg:w-[450px] border-r border-white/5 flex flex-col transition-transform duration-500
          ${isMobileListOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-6 bg-[#0a0a0a] border-b border-white/5 lg:hidden flex justify-between items-center">
             <span className="text-[10px] uppercase tracking-widest font-bold">Results ({filteredLocations.length})</span>
             <button onClick={() => setIsMobileListOpen(false)} className="text-white/50 text-[10px] uppercase tracking-widest">Close</button>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {filteredLocations.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center p-12 text-center">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center mb-6 rotate-45">
                   <span className="text-white/20 -rotate-45 font-bold">!</span>
                </div>
                <p className="text-white/20 text-[10px] uppercase tracking-widest">No connections found in this sector.</p>
              </div>
            ) : (
              filteredLocations.map(loc => (
                <button 
                  key={loc.id}
                  onClick={() => handleLocationSelect(loc)}
                  className={`w-full text-left p-8 border-b border-white/5 group transition-all hover:bg-white/[0.02] ${selectedLocation?.id === loc.id ? 'bg-white/[0.04]' : ''}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-medium">{loc.category}</span>
                    <span className="text-[10px] text-white/20 uppercase tracking-widest">{loc.city}</span>
                  </div>
                  <h3 className="serif text-xl mb-3 group-hover:translate-x-1 transition-transform">{loc.name}</h3>
                  <p className="text-white/40 text-[11px] font-light leading-relaxed line-clamp-2">{loc.description}</p>
                  
                  <div className="mt-6 flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-4 h-[1px] bg-white/40" />
                    <span className="text-[8px] uppercase tracking-[0.3em] font-bold">View Location Details</span>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Map View (Right) */}
        <div className="flex-1 relative bg-black">
          <div ref={mapContainerRef} className="h-full w-full" />
          
          {/* Mobile Overlay Toggle */}
          <button 
            onClick={() => setIsMobileListOpen(true)}
            className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-[1000] bg-white text-black px-8 py-4 text-[10px] font-bold uppercase tracking-widest shadow-2xl"
          >
            Show List
          </button>

          {/* Selected Location Modal/Card */}
          {selectedLocation && (
            <div className="absolute inset-0 lg:inset-auto lg:top-8 lg:right-8 z-[1001] pointer-events-none flex items-center justify-center lg:block">
               <div className="pointer-events-auto w-[90%] lg:w-[400px] bg-black border border-white/20 shadow-2xl animate-in slide-in-from-right-4 duration-500">
                  <div className="relative h-32 bg-zinc-900 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center grayscale brightness-50 opacity-50" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558981403-c5f9100d2b17?auto=format&fit=crop&q=80&w=600')` }} />
                    <button 
                      onClick={() => setSelectedLocation(null)}
                      className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black transition-colors"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    <div className="absolute bottom-4 left-6">
                       <span className="bg-white text-black px-2 py-1 text-[8px] font-bold uppercase tracking-widest">{selectedLocation.category}</span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h2 className="serif text-3xl mb-2">{selectedLocation.name}</h2>
                    <p className="text-white/40 text-xs mb-8 italic">{selectedLocation.address}, {selectedLocation.city}</p>
                    
                    <div className="space-y-6 mb-8">
                       <div className="flex items-start gap-4">
                          <span className="text-white/20 text-[9px] uppercase tracking-widest w-16 pt-1">Hours:</span>
                          <span className="text-white/70 text-[11px] tracking-wide">{selectedLocation.hours}</span>
                       </div>
                       <div className="flex items-start gap-4">
                          <span className="text-white/20 text-[9px] uppercase tracking-widest w-16 pt-1">Contact:</span>
                          <span className="text-white/70 text-[11px] tracking-wide">{selectedLocation.phone}</span>
                       </div>
                       <p className="text-white/50 text-[11px] leading-relaxed font-light">
                         {selectedLocation.description}
                       </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       <a 
                        href={`https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.lat},${selectedLocation.lng}`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white text-black flex items-center justify-center py-4 text-[9px] font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
                       >
                         Directions
                       </a>
                       <a 
                        href={selectedLocation.website}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-white/20 flex items-center justify-center py-4 text-[9px] font-bold uppercase tracking-widest hover:bg-white/5 transition-colors"
                       >
                         Website
                       </a>
                    </div>
                    <button 
                      className="w-full mt-4 border border-white/5 py-4 text-[9px] font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors"
                      onClick={() => window.location.href = `tel:${selectedLocation.phone}`}
                    >
                      Call Shop
                    </button>
                  </div>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
