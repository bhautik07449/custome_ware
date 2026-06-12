import { useState, useRef } from 'react';

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const zoomImageRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!zoomImageRef.current) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    zoomImageRef.current.style.transformOrigin = `${x}% ${y}%`;
  };

  const handleMouseLeave = () => {
    if (!zoomImageRef.current) return;
    zoomImageRef.current.style.transformOrigin = 'center';
  };

  return (
    <>
      {/* ============================================================ */}
      {/* MOBILE: Image Carousel                                       */}
      {/* ============================================================ */}
      <section className="relative aspect-[3/4] bg-surface-container-low overflow-hidden md:hidden">
        <div 
          className="flex h-full overflow-x-auto snap-x snap-mandatory no-scrollbar hide-scrollbar" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={(e) => {
            const carousel = e.currentTarget;
            const scrollPercent = carousel.scrollLeft / (carousel.scrollWidth - carousel.clientWidth);
            const index = Math.round(scrollPercent * (images.length - 1));
            if (!isNaN(index)) setImageIndex(index);
          }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="min-w-full h-full snap-center">
              <img className="w-full h-full object-cover" src={img} alt={`Preview ${idx + 1}`} />
            </div>
          ))}
        </div>
        {/* Indicators */}
        <div className="absolute bottom-md left-1/2 -translate-x-1/2 flex gap-sm pointer-events-none">
          {images.map((_, idx) => (
            <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-colors ${imageIndex === idx ? 'bg-primary' : 'bg-outline-variant'}`}></div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* DESKTOP: Image Gallery                                       */}
      {/* ============================================================ */}
      <div className="hidden md:flex lg:col-span-7 flex-col md:flex-row gap-lg">
        {/* Thumbnails */}
        <div className="flex md:flex-col order-2 md:order-1 gap-md overflow-x-auto md:overflow-y-auto custom-scrollbar md:max-h-[600px] pb-2 md:pb-0 hide-scrollbar">
          {images.map((img, idx) => (
            <button
              key={idx}
              className={`flex-shrink-0 w-20 h-24 bg-surface-container rounded-lg overflow-hidden transition-all duration-200 border-2 ${
                imageIndex === idx ? 'border-primary' : 'border-transparent hover:border-outline-variant'
              }`}
              onClick={() => setImageIndex(idx)}
            >
              <img
                className="w-full h-full object-cover"
                src={img}
                alt={`Thumbnail ${idx + 1}`}
              />
            </button>
          ))}
        </div>

        {/* Main Preview */}
        <div className="flex-1 order-1 md:order-2">
          <div
            className="zoom-container group relative overflow-hidden rounded-xl bg-surface-container-low aspect-[4/5] border border-outline-variant/30 cursor-crosshair"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              ref={zoomImageRef}
              className="w-full h-full object-cover transition-transform duration-500 origin-center group-hover:scale-[1.5]"
              id="main-product-image"
              src={images[imageIndex]}
              alt="Main Product"
            />
            <div className="absolute bottom-md right-md bg-surface/90 backdrop-blur-sm px-md py-sm rounded-full flex items-center gap-xs shadow-sm">
              <span className="material-symbols-outlined text-sm">zoom_in</span>
              <span className="font-label-sm text-label-sm">Hover to zoom</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
