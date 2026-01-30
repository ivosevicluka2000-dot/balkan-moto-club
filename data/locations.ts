
export type LocationType = 'shop' | 'service';

export interface Location {
  id: string;
  type: LocationType;
  name: string;
  category: string;
  lat: number;
  lng: number;
  address: string;
  city: string;
  hours: string;
  phone: string;
  website: string;
  description: string;
}

export const locations: Location[] = [
  // SHOPS
  {
    id: 's1',
    type: 'shop',
    name: 'Balkan Custom Gear',
    category: 'Boutique Apparel',
    lat: 44.7866,
    lng: 20.4489,
    address: 'Kralja Petra 12',
    city: 'Belgrade',
    hours: '10:00 - 19:00',
    phone: '+381 11 234 567',
    website: 'https://balkancustomgear.com',
    description: 'Hand-crafted leather jackets and bespoke riding boots forged for the rugged Balkan roads.'
  },
  {
    id: 's2',
    type: 'shop',
    name: 'Adriatic Moto Parts',
    category: 'Performance Parts',
    lat: 45.8150,
    lng: 15.9819,
    address: 'Ilica 45',
    city: 'Zagreb',
    hours: '09:00 - 18:00',
    phone: '+385 1 987 654',
    website: 'https://adriaticmoto.hr',
    description: 'Specializing in high-performance exhaust systems and custom engine components.'
  },
  {
    id: 's3',
    type: 'shop',
    name: 'Iron Peak Dealership',
    category: 'Official Dealer',
    lat: 43.8563,
    lng: 18.4131,
    address: 'Ferhadija 18',
    city: 'Sarajevo',
    hours: '08:00 - 20:00',
    phone: '+387 33 111 222',
    website: 'https://ironpeak.ba',
    description: 'The official home for premium cruiser brands in the heart of Bosnia.'
  },
  {
    id: 's4',
    type: 'shop',
    name: 'Skopje Steel Boutique',
    category: 'Vintage Gear',
    lat: 41.9981,
    lng: 21.4254,
    address: 'Macedonia Square 4',
    city: 'Skopje',
    hours: '10:00 - 18:30',
    phone: '+389 2 555 666',
    website: 'https://skopjesteel.mk',
    description: 'Restored vintage helmets and legacy riding apparel for the discerning rider.'
  },
  {
    id: 's5',
    type: 'shop',
    name: 'Podgorica Ride Store',
    category: 'General Parts',
    lat: 42.4304,
    lng: 19.2594,
    address: 'Njegoševa 7',
    city: 'Podgorica',
    hours: '09:00 - 19:00',
    phone: '+382 20 888 999',
    website: 'https://ridepodgorica.me',
    description: 'The largest selection of tires and maintenance fluids in Montenegro.'
  },
  {
    id: 's6',
    type: 'shop',
    name: 'Niš Road Armor',
    category: 'Technical Apparel',
    lat: 43.3209,
    lng: 21.8958,
    address: 'Obrenovićeva 22',
    city: 'Niš',
    hours: '09:00 - 18:00',
    phone: '+381 18 333 444',
    website: 'https://nisarmor.rs',
    description: 'Specialized protective gear for long-distance touring and off-road expeditions.'
  },
  {
    id: 's7',
    type: 'shop',
    name: 'Split Sea Riders',
    category: 'Lifestyle Store',
    lat: 43.5081,
    lng: 16.4402,
    address: 'Riva 1',
    city: 'Split',
    hours: '10:00 - 22:00',
    phone: '+385 21 000 111',
    website: 'https://splitriders.hr',
    description: 'Coastal riding lifestyle shop with premium summer gear and casual wear.'
  },
  {
    id: 's8',
    type: 'shop',
    name: 'Ljubljana Moto Craft',
    category: 'Accessories',
    lat: 46.0569,
    lng: 14.5058,
    address: 'Slovenska cesta 15',
    city: 'Ljubljana',
    hours: '09:00 - 17:00',
    phone: '+386 1 444 555',
    website: 'https://motocraft.si',
    description: 'High-end luggage systems and navigation tech for Alpine riders.'
  },
  {
    id: 's9',
    type: 'shop',
    name: 'Novi Sad Chrome Shop',
    category: 'Custom Detailing',
    lat: 45.2671,
    lng: 19.8335,
    address: 'Zmaj Jovina 10',
    city: 'Novi Sad',
    hours: '11:00 - 20:00',
    phone: '+381 21 777 888',
    website: 'https://novisadchrome.rs',
    description: 'Specialized polishing supplies and aesthetic bolt-on parts for cruisers.'
  },
  {
    id: 's10',
    type: 'shop',
    name: 'Banja Luka Ironworks',
    category: 'Tooling & Parts',
    lat: 44.7722,
    lng: 17.1910,
    address: 'Kralja Alfonsa 5',
    city: 'Banja Luka',
    hours: '08:00 - 17:00',
    phone: '+387 51 666 777',
    website: 'https://ironworks.ba',
    description: 'Heavy duty workshop tools and essential engine hardware.'
  },

  // SERVICES
  {
    id: 'v1',
    type: 'service',
    name: 'Belgrade Moto Clinic',
    category: 'Authorized Mechanic',
    lat: 44.8125,
    lng: 20.4612,
    address: 'Dunavska 8',
    city: 'Belgrade',
    hours: '08:00 - 17:00',
    phone: '+381 11 999 000',
    website: 'https://motoclinic.rs',
    description: 'Full engine diagnostics and restoration services for American and European V-Twins.'
  },
  {
    id: 'v2',
    type: 'service',
    name: 'Zagreb Rapid Repair',
    category: 'Quick Service',
    lat: 45.7950,
    lng: 15.9519,
    address: 'Vukovarska 102',
    city: 'Zagreb',
    hours: '07:00 - 19:00',
    phone: '+385 1 222 333',
    website: 'https://rapidrepair.hr',
    description: 'Tire changes and fluid maintenance with no appointment necessary.'
  },
  {
    id: 'v3',
    type: 'service',
    name: 'Sarajevo Custom Lab',
    category: 'Custom Builds',
    lat: 43.8400,
    lng: 18.3500,
    address: 'Skenderija 12',
    city: 'Sarajevo',
    hours: '10:00 - 18:00',
    phone: '+387 33 444 555',
    website: 'https://customlab.ba',
    description: 'Where art meets engineering. We build the most unique choppers in the region.'
  },
  {
    id: 'v4',
    type: 'service',
    name: 'Skopje Recovery Unit',
    category: 'Towing & Rescue',
    lat: 42.0100,
    lng: 21.4500,
    address: 'Prvomajska 45',
    city: 'Skopje',
    hours: '24/7',
    phone: '+389 70 123 456',
    website: 'https://recoveryunit.mk',
    description: 'Professional motorcycle towing and roadside emergency support across North Macedonia.'
  },
  {
    id: 'v5',
    type: 'service',
    name: 'Tara Pass Tech Support',
    category: 'Mountain Service',
    lat: 43.9100,
    lng: 19.4500,
    address: 'Tara Mountain Road km 12',
    city: 'Bajina Bašta',
    hours: '08:00 - 18:00',
    phone: '+381 31 555 000',
    website: 'https://taratech.rs',
    description: 'Strategically located service point for riders crossing the Tara national park.'
  },
  {
    id: 'v6',
    type: 'service',
    name: 'Dubrovnik Coastal Service',
    category: 'General Repair',
    lat: 42.6507,
    lng: 18.0944,
    address: 'Vukovarska 30',
    city: 'Dubrovnik',
    hours: '09:00 - 17:00',
    phone: '+385 20 111 222',
    website: 'https://dubrovnikmoto.hr',
    description: 'Expert maintenance for cruisers touring the Adriatic Highway.'
  },
  {
    id: 'v7',
    type: 'service',
    name: 'Novi Sad Paint & Polish',
    category: 'Refinishing',
    lat: 45.2400,
    lng: 19.8500,
    address: 'Futoški put 12',
    city: 'Novi Sad',
    hours: '09:00 - 16:00',
    phone: '+381 21 444 888',
    website: 'https://nspaint.rs',
    description: 'Premium powder coating and custom airbrushing services.'
  },
  {
    id: 'v8',
    type: 'service',
    name: 'Niš Diesel & Steel',
    category: 'Heavy Repair',
    lat: 43.3400,
    lng: 21.9200,
    address: 'Bulevar Medijana 4',
    city: 'Niš',
    hours: '08:00 - 17:00',
    phone: '+381 18 999 777',
    website: 'https://dieselnsteel.rs',
    description: 'Specialized in repairing frame damage and heavy mechanical failure.'
  },
  {
    id: 'v9',
    type: 'service',
    name: 'Durmitor Rescue Base',
    category: 'Emergency Depot',
    lat: 43.1500,
    lng: 19.1200,
    address: 'Žabljak Road BB',
    city: 'Žabljak',
    hours: '06:00 - 22:00',
    phone: '+382 67 000 999',
    website: 'https://durmitorrescue.me',
    description: 'Essential spare parts and fuel depot for mountain explorers.'
  },
  {
    id: 'v10',
    type: 'service',
    name: 'Prishtina Moto Hub',
    category: 'Authorized Service',
    lat: 42.6629,
    lng: 21.1655,
    address: 'Bill Clinton Blvd 8',
    city: 'Prishtina',
    hours: '09:00 - 18:00',
    phone: '+383 38 111 000',
    website: 'https://motohub.ks',
    description: 'Modern facility with computerized diagnostics for the latest model motorcycles.'
  }
];
