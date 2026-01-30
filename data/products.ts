
export type ProductCategory = 'Apparel' | 'Accessories' | 'Gear' | 'Stickers' | 'Essentials';
export type AvailabilityStatus = 'In Stock' | 'Limited' | 'Preorder' | 'Sold Out';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  priceEur: number;
  shortDesc: string;
  longDesc: string;
  images: string[];
  sizes?: string[];
  colors?: string[];
  tags: string[];
  availability: AvailabilityStatus;
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Midnight Ride Hoodie',
    category: 'Apparel',
    priceEur: 85,
    shortDesc: 'Heavyweight fleece with reinforced stitching for night sessions.',
    longDesc: 'The definitive garment for the late-night brotherhood. Crafted from 450GSM ultra-thick cotton, this hoodie features a wind-resistant weave and a discrete interior pocket for long-range communication devices. Screen-printed by hand in Belgrade with crack-resistant ink.',
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Obsidian Black', 'Steel Gray'],
    tags: ['Best Seller', 'Core Collection'],
    availability: 'In Stock'
  },
  {
    id: 'p2',
    name: 'Iron Cross Leather Patch',
    category: 'Accessories',
    priceEur: 24,
    shortDesc: 'Hand-embossed full-grain leather patch for vests.',
    longDesc: 'A mark of affiliation. Our signature cross is embossed into 4mm vegetable-tanned leather. Designed to weather with age, gaining character from the sun, rain, and road debris. Each piece is unique due to the natural grain of the hide.',
    images: ['https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&q=80&w=800'],
    tags: ['Limited Drop'],
    availability: 'Limited'
  },
  {
    id: 'p3',
    name: 'Formation Armband',
    category: 'Gear',
    priceEur: 32,
    shortDesc: 'High-visibility reflective band with magnetic closure.',
    longDesc: 'Essential for formation discipline. This armband features 3M reflective tech that remains subtle in daylight but pierces through the darkness when hit by headlights. Tactical magnetic clasp ensures it stays fixed at high speeds.',
    images: ['https://images.unsplash.com/photo-1618354721011-7a4d2d70993d?auto=format&fit=crop&q=80&w=800'],
    tags: ['New', 'Safety'],
    availability: 'In Stock'
  },
  {
    id: 'p4',
    name: 'Balkan Soul T-Shirt',
    category: 'Apparel',
    priceEur: 42,
    shortDesc: 'Pima cotton tee featuring the classic BMC crest.',
    longDesc: 'A rugged everyday staple. Minimalist front chest print with a large-scale map of the Balkan peninsula on the back. Tapered fit designed to be worn comfortably under riding jackets.',
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800'],
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['New'],
    availability: 'In Stock'
  },
  {
    id: 'p5',
    name: 'Piston Head Keychain',
    category: 'Accessories',
    priceEur: 18,
    shortDesc: 'Solid brass casting of a vintage V-Twin piston.',
    longDesc: 'Weighty and substantial. Cast in small batches in a local Sarajevo foundry. This keychain is designed to take a beating and look better for it. Brass will develop a deep patina over months of use.',
    images: ['https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'],
    tags: ['Best Seller'],
    availability: 'In Stock'
  },
  {
    id: 'p6',
    name: 'Asphalt Patrol Beanie',
    category: 'Apparel',
    priceEur: 28,
    shortDesc: 'Merino wool blend for sub-zero mountain crossings.',
    longDesc: 'The ultimate thermal layer for Dinaric Alp expeditions. Double-layered merino wool provides warmth even when damp. Features a subtle woven label with the BMC coordinates.',
    images: ['https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=800'],
    colors: ['Charcoal', 'Navy'],
    tags: ['Essentials'],
    availability: 'Limited'
  },
  {
    id: 'p7',
    name: 'Technical Riding Gloves',
    category: 'Gear',
    priceEur: 145,
    shortDesc: 'Kangaroo leather palms with carbon fiber knuckles.',
    longDesc: 'Professional grade protection. These gloves are the result of three years of testing on the rugged coastal roads of Croatia. Maximum tactile feedback combined with extreme abrasion resistance.',
    images: ['https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800'],
    sizes: ['M', 'L', 'XL'],
    tags: ['Limited Drop', 'High End'],
    availability: 'Preorder'
  },
  {
    id: 'p8',
    name: 'BMC Sticker Pack v.2',
    category: 'Stickers',
    priceEur: 12,
    shortDesc: 'Weatherproof vinyl decals for helmets and tanks.',
    longDesc: 'UV-resistant and waterproof. This pack contains 6 unique designs ranging from the club emblem to "Road Rules" typography. Designed to survive gas spills and high-pressure washes.',
    images: ['https://images.unsplash.com/photo-1572375927501-447a75150242?auto=format&fit=crop&q=80&w=800'],
    tags: ['Essentials'],
    availability: 'In Stock'
  },
  {
    id: 'p9',
    name: 'Mountain Gaiter',
    category: 'Gear',
    priceEur: 22,
    shortDesc: 'Seamless microfiber protection against wind and dust.',
    longDesc: 'Multi-functional headwear. Acts as a dust mask on gravel roads or a thermal barrier on cold morning starts. Breathable, moisture-wicking, and fast-drying.',
    images: ['https://images.unsplash.com/photo-1589363423714-388f625902b1?auto=format&fit=crop&q=80&w=800'],
    tags: ['Essentials'],
    availability: 'In Stock'
  },
  {
    id: 'p10',
    name: 'Founders Enamel Pin',
    category: 'Accessories',
    priceEur: 15,
    shortDesc: 'Black nickel plated soft enamel pin.',
    longDesc: 'A subtle mark for lapels or bags. Features the original 2012 club silhouette. High-polish finish with a secure military-style clutch.',
    images: ['https://images.unsplash.com/photo-1590483736622-39da8af75bba?auto=format&fit=crop&q=80&w=800'],
    tags: ['Collector'],
    availability: 'Limited'
  },
  {
    id: 'p11',
    name: 'Waterproof Gear Cover',
    category: 'Essentials',
    priceEur: 38,
    shortDesc: 'Siliconized nylon cover for backpacks and luggage.',
    longDesc: 'Dont let the Balkan rains ruin your journey. This ultra-lightweight cover packs down to the size of an apple but expands to cover up to 40L of luggage. Fully taped seams.',
    images: ['https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800'],
    tags: ['Practical'],
    availability: 'In Stock'
  },
  {
    id: 'p12',
    name: 'Member Welcome Kit',
    category: 'Essentials',
    priceEur: 120,
    shortDesc: 'The complete set for newly inducted brothers.',
    longDesc: 'This kit is only available to those who have passed the vetting process. Includes the official member handbook, a personalized metal ID card, a founder\'s t-shirt, and a set of master workshop keys.',
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800'],
    tags: ['Exclusive'],
    availability: 'Limited'
  }
];
