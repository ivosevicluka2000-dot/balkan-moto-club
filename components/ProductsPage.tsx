
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { products, Product, ProductCategory } from '../data/products';
import ProductModal from './ProductModal';

const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  const [sortBy, setSortBy] = useState<'none' | 'low-high' | 'high-low'>('none');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const categories: (ProductCategory | 'All')[] = ['All', 'Apparel', 'Accessories', 'Gear', 'Stickers', 'Essentials'];

  const filteredProducts = useMemo(() => {
    let result = products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    if (sortBy === 'low-high') {
      result.sort((a, b) => a.priceEur - b.priceEur);
    } else if (sortBy === 'high-low') {
      result.sort((a, b) => b.priceEur - a.priceEur);
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSortBy('none');
  };

  return (
    <div className="bg-[#050505] min-h-screen pt-[100px]">
      {/* Hero Section */}
      <section className="relative h-[40dvh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.2]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=70&w=1600')` }}
        />
        <div className="relative z-10 text-center px-6">
          <span className="text-white/30 uppercase tracking-[0.6em] text-[10px] font-bold mb-4 block">The Registry</span>
          <h1 className="serif text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-white">Gear & <span className="italic">Supplies.</span></h1>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] lg:top-[80px] z-[500] bg-black/80 backdrop-blur-xl border-b border-white/5 px-4 lg:px-12 py-4 lg:py-6">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 lg:gap-6">
          
          {/* Categories - Horizontal scroll on mobile */}
          <div className="flex items-center gap-2 lg:gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-4 py-2.5 lg:py-2 text-[11px] lg:text-[10px] uppercase tracking-widest font-bold border transition-all ${selectedCategory === cat ? 'bg-white text-black border-white' : 'border-white/10 text-white/40 hover:border-white/30 active:bg-white/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 lg:gap-4 w-full lg:w-auto">
             <div className="relative flex-1 lg:w-[300px]">
                <input 
                  type="text" 
                  placeholder="SEARCH..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 px-4 lg:px-6 py-3 lg:py-2.5 text-[11px] lg:text-[10px] uppercase tracking-widest focus:outline-none focus:border-white/40 text-white rounded-none"
                />
             </div>
             
             <select 
               value={sortBy}
               onChange={(e) => setSortBy(e.target.value as any)}
               className="bg-white/5 border border-white/10 px-3 lg:px-4 py-3 lg:py-2.5 text-[11px] lg:text-[10px] uppercase tracking-widest text-white/50 focus:outline-none focus:border-white/40 rounded-none"
             >
                <option value="none" className="bg-black">SORT</option>
                <option value="low-high" className="bg-black">PRICE ↑</option>
                <option value="high-low" className="bg-black">PRICE ↓</option>
             </select>

             {(searchQuery || selectedCategory !== 'All' || sortBy !== 'none') && (
               <button onClick={clearFilters} className="text-[10px] lg:text-[9px] uppercase tracking-widest text-white/30 hover:text-white active:text-brand transition-colors underline underline-offset-4 py-2">
                 Reset
               </button>
             )}
          </div>

        </div>
      </section>

      {/* Grid */}
      <section className="py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-screen-2xl mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="py-40 text-center">
              <span className="text-white/20 uppercase tracking-[0.5em] text-xs">No items found in this sector.</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/5 border border-white/5">
              {filteredProducts.map((p, idx) => (
                <ProductCard key={p.id} product={p} index={idx} onClick={() => setSelectedProduct(p)} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  index: number;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-[#050505] group cursor-pointer overflow-hidden p-4 sm:p-6 lg:p-8 flex flex-col hover:bg-white/[0.02] active:bg-white/[0.05] transition-colors"
    >
      <div className="relative aspect-square mb-4 sm:mb-6 lg:mb-8 overflow-hidden bg-zinc-900">
        <img 
          src={`${product.images[0].split('?')[0]}?auto=format&fit=crop&q=70&w=600`}
          alt={product.name} 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-110 group-hover:brightness-100 transition-all duration-[1500ms]"
        />
        <div className="absolute top-3 left-3 lg:top-4 lg:left-4 flex flex-col gap-2">
           {product.tags.map(tag => (
             <span key={tag} className="bg-white text-black px-2 py-1 text-[8px] lg:text-[7px] font-bold uppercase tracking-widest">{tag}</span>
           ))}
        </div>
        {product.availability !== 'In Stock' && (
           <div className="absolute bottom-3 right-3 lg:bottom-4 lg:right-4">
              <span className={`px-2 py-1 text-[8px] lg:text-[7px] font-bold uppercase tracking-widest border ${product.availability === 'Sold Out' ? 'border-red-500/50 text-red-500' : 'border-white/30 text-white/50'}`}>
                {product.availability}
              </span>
           </div>
        )}
      </div>

      <div className="flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
           <span className="text-white/30 text-[10px] lg:text-[9px] uppercase tracking-widest">{product.category}</span>
           <span className="text-white text-sm lg:text-[11px] font-bold">{product.priceEur}€</span>
        </div>
        <h3 className="serif text-lg sm:text-xl text-white/90 group-hover:text-white transition-colors mb-3 lg:mb-4">{product.name}</h3>
        <p className="text-white/40 text-xs lg:text-[11px] font-light leading-relaxed line-clamp-2">{product.shortDesc}</p>
        
        <div className="mt-6 lg:mt-8 flex items-center space-x-4 lg:opacity-0 lg:group-hover:opacity-100 transition-all lg:translate-y-2 lg:group-hover:translate-y-0 duration-500">
           <div className="w-4 h-[1px] bg-white/40" />
           <span className="text-[9px] lg:text-[8px] uppercase tracking-[0.3em] font-bold text-white/60">View Details</span>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
