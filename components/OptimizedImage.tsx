import React, { useState, useRef, useEffect, memo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean; // For above-the-fold images
  sizes?: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
}

// Generate optimized Unsplash URL with different sizes
const getOptimizedUrl = (src: string, width: number, quality: number = 80): string => {
  if (src.includes('unsplash.com')) {
    const url = new URL(src);
    url.searchParams.set('w', width.toString());
    url.searchParams.set('q', quality.toString());
    url.searchParams.set('auto', 'format');
    url.searchParams.set('fit', 'crop');
    return url.toString();
  }
  return src;
};

// Get blur placeholder (tiny image for LQIP effect)
const getBlurUrl = (src: string): string => {
  return getOptimizedUrl(src, 20, 10);
};

const OptimizedImage: React.FC<OptimizedImageProps> = memo(({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '100vw',
  aspectRatio,
  objectFit = 'cover'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Start loading 200px before entering viewport
        threshold: 0
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate srcSet for responsive images
  const generateSrcSet = (baseSrc: string): string => {
    const widths = [400, 800, 1200, 1600, 2000];
    return widths
      .map(w => `${getOptimizedUrl(baseSrc, w)} ${w}w`)
      .join(', ');
  };

  const blurUrl = getBlurUrl(src);
  const optimizedSrc = getOptimizedUrl(src, 1200);

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {/* Blur placeholder */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: `url(${blurUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(20px)',
          transform: 'scale(1.1)'
        }}
      />
      
      {/* Actual image */}
      {isInView && (
        <img
          src={optimizedSrc}
          srcSet={generateSrcSet(src)}
          sizes={sizes}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ objectFit }}
        />
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;

// Hook to preload critical images
export const usePreloadImages = (urls: string[]) => {
  useEffect(() => {
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = getOptimizedUrl(url, 1200);
      document.head.appendChild(link);
    });
  }, []);
};

// Preload critical hero image on module load
if (typeof window !== 'undefined') {
  const heroImg = new Image();
  heroImg.src = 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&q=80&w=1200';
}
