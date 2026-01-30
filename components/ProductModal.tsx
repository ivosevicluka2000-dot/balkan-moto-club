
import React, { useEffect } from 'react';
import { Product } from '../data/products';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6 lg:p-12">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-6xl bg-[#050505] border border-white/10 shadow-2xl flex flex-col lg:flex-row animate-in fade-in zoom-in-95 duration-500 max-h-[90vh] overflow-hidden">
        
        {/* Left: Image */}
        <div className="lg:w-1/2 relative bg-zinc-900 overflow-hidden">
          <img 
            src={`${product.images[0].split('?')[0]}?auto=format&fit=crop&q=85&w=1000`}
            alt={product.name} 
            loading="eager"
            className="w-full h-full object-cover grayscale contrast-110 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          <div className="absolute top-8 left-8 flex flex-col gap-2">
            {product.tags.map(tag => (
              <span key={tag} className="bg-white text-black px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em]">{tag}</span>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="lg:w-1/2 p-8 lg:p-16 overflow-y-auto custom-scrollbar flex flex-col">
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 text-white/30 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-white/40 uppercase tracking-[0.4em] text-[10px] font-bold">{product.category}</span>
              <div className="h-px w-8 bg-white/10" />
              <span className={`text-[10px] font-bold uppercase tracking-widest ${product.availability === 'In Stock' ? 'text-green-500' : 'text-white/60'}`}>{product.availability}</span>
            </div>
            <h2 className="serif text-5xl lg:text-7xl text-white mb-6 leading-tight">{product.name}</h2>
            <p className="text-3xl text-white font-light mb-8">{product.priceEur}€</p>
            <p className="text-white/60 text-base leading-relaxed font-light mb-12">
              {product.longDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
              {product.sizes && (
                <div>
                  <h4 className="text-white/30 uppercase tracking-[0.3em] text-[9px] font-bold mb-6">Select Size</h4>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map(s => (
                      <button key={s} className="w-12 h-12 border border-white/10 flex items-center justify-center text-[11px] font-bold hover:bg-white hover:text-black transition-all">
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {product.colors && (
                <div>
                  <h4 className="text-white/30 uppercase tracking-[0.3em] text-[9px] font-bold mb-6">Available Colors</h4>
                  <div className="flex flex-wrap gap-4">
                    {product.colors.map(c => (
                      <div key={c} className="flex items-center gap-2 group">
                         <div className={`w-4 h-4 rounded-full border border-white/20 ${c.toLowerCase().includes('black') ? 'bg-black' : 'bg-zinc-600'}`} />
                         <span className="text-[10px] uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-auto pt-12 border-t border-white/10">
            <h4 className="text-white/30 uppercase tracking-[0.3em] text-[9px] font-bold mb-8">Acquisition Channels</h4>
            <div className="flex flex-col gap-4">
               <a 
                href="#"
                className="w-full bg-white text-black py-5 text-center text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-zinc-200 transition-colors"
               >
                 Reserve via WhatsApp
               </a>
               <div className="grid grid-cols-2 gap-4">
                  <a href="#" className="border border-white/10 py-5 text-center text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">
                    Direct Message
                  </a>
                  <a href="mailto:liaison@balkanmotoclub.com" className="border border-white/10 py-5 text-center text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">
                    Email Liaison
                  </a>
               </div>
            </div>
            <p className="text-[8px] text-white/20 uppercase tracking-[0.4em] text-center mt-6 font-medium">
               Physical Pickup Available at HQ Belgrade or Niš.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductModal;
