
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
    <div className="fixed inset-0 z-[2000] flex items-end lg:items-center justify-center p-0 lg:p-12">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md" 
        onClick={onClose} 
      />
      
      <div className="relative w-full lg:max-w-6xl bg-[#050505] border-t lg:border border-white/10 shadow-2xl flex flex-col lg:flex-row animate-in fade-in slide-in-from-bottom lg:zoom-in-95 duration-500 max-h-[95vh] lg:max-h-[90vh] overflow-hidden rounded-t-2xl lg:rounded-none">
        
        {/* Close button - always visible on mobile */}
        <button 
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 rounded-full text-white/60 active:bg-white/20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {/* Left: Image */}
        <div className="lg:w-1/2 relative bg-zinc-900 overflow-hidden h-[35vh] lg:h-auto flex-shrink-0">
          <img 
            src={`${product.images[0].split('?')[0]}?auto=format&fit=crop&q=85&w=1000`}
            alt={product.name} 
            loading="eager"
            className="w-full h-full object-cover grayscale contrast-110 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          <div className="absolute top-4 left-4 lg:top-8 lg:left-8 flex flex-col gap-2">
            {product.tags.map(tag => (
              <span key={tag} className="bg-white text-black px-2 lg:px-3 py-1 text-[8px] lg:text-[9px] font-bold uppercase tracking-[0.2em]">{tag}</span>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="lg:w-1/2 p-6 lg:p-16 overflow-y-auto custom-scrollbar flex flex-col flex-grow">
          <button 
            onClick={onClose}
            className="hidden lg:block absolute top-8 right-8 text-white/30 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <div className="mb-8 lg:mb-12">
            <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
              <span className="text-white/50 uppercase tracking-[0.3em] text-xs font-bold">{product.category}</span>
              <div className="h-px w-6 lg:w-8 bg-white/20" />
              <span className={`text-xs font-bold uppercase tracking-widest ${product.availability === 'In Stock' ? 'text-green-500' : 'text-white/60'}`}>{product.availability}</span>
            </div>
            <h2 className="serif text-3xl sm:text-4xl lg:text-7xl text-white mb-4 lg:mb-6 leading-tight">{product.name}</h2>
            <p className="text-2xl lg:text-3xl text-white font-light mb-6 lg:mb-8">{product.priceEur}€</p>
            <p className="text-white/60 text-sm lg:text-base leading-relaxed font-light mb-8 lg:mb-12">
              {product.longDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-8 lg:pt-12 border-t border-white/10">
              {product.sizes && (
                <div>
                  <h4 className="text-white/50 uppercase tracking-[0.3em] text-xs font-bold mb-4 lg:mb-6">Select Size</h4>
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {product.sizes.map(s => (
                      <button key={s} className="w-11 h-11 lg:w-12 lg:h-12 border border-white/20 flex items-center justify-center text-xs font-bold hover:bg-white hover:text-black active:bg-brand active:text-white transition-all">
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {product.colors && (
                <div>
                  <h4 className="text-white/50 uppercase tracking-[0.3em] text-xs font-bold mb-4 lg:mb-6">Available Colors</h4>
                  <div className="flex flex-wrap gap-3 lg:gap-4">
                    {product.colors.map(c => (
                      <div key={c} className="flex items-center gap-2 group py-1">
                         <div className={`w-4 h-4 rounded-full border border-white/20 ${c.toLowerCase().includes('black') ? 'bg-black' : 'bg-zinc-600'}`} />
                         <span className="text-[10px] uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-auto pt-8 lg:pt-12 border-t border-white/10">
            <h4 className="text-white/50 uppercase tracking-[0.3em] text-xs font-bold mb-6 lg:mb-8">Acquisition Channels</h4>
            <div className="flex flex-col gap-3 lg:gap-4">
               <a 
                href="#"
                className="w-full bg-brand text-white py-5 text-center text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-colors"
               >
                 Reserve via WhatsApp
               </a>
               <div className="grid grid-cols-2 gap-4">
                  <a href="#" className="border border-white/20 py-5 text-center text-xs font-bold uppercase tracking-[0.3em] text-white/80 hover:bg-white hover:text-black transition-all">
                    Direct Message
                  </a>
                  <a href="mailto:liaison@balkanmotoclub.com" className="border border-white/20 py-5 text-center text-xs font-bold uppercase tracking-[0.3em] text-white/80 hover:bg-white hover:text-black transition-all">
                    Email Liaison
                  </a>
               </div>
            </div>
            <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] text-center mt-6 font-medium">
               Physical Pickup Available at HQ Belgrade or Niš.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductModal;
