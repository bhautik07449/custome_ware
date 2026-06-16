import { Link } from 'react-router-dom';
import { PATHS } from '../../utils/routes';
import { PRODUCTS } from '../../data/mockData';
import { useFavorites } from '../../context/FavoritesContext';
import { useRef } from 'react';

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const onMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`card-3d transition-transform duration-150 ${className ?? ''}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}

export default function FeaturedProducts() {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <>
      {/* Desktop Trending Designs Grid */}
      <section className="py-3xl hidden md:block">
        <div className="max-w-7xl mx-auto px-grid-margin">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-2xl gap-4 reveal-up">
            <div>
              <span className="text-secondary font-label-md uppercase tracking-widest">Community Picks</span>
              <h2 className="font-headline-lg text-headline-lg mt-base">Trending Designs</h2>
            </div>
            <Link className="text-secondary font-label-md hover:underline flex items-center gap-xs" to={PATHS.SHOP}>
              View All Designs <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-grid-gutter">
            {PRODUCTS.slice(0, 4).map((product, i) => {
              return (
                <TiltCard key={product.id} className={`reveal-up stagger-${i + 1}`}>
                  <div className="group relative bg-surface rounded-2xl overflow-hidden border border-outline-variant/20 shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <div className="relative aspect-[3/4] bg-surface-container overflow-hidden">
                      <img
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src={product.image}
                      />

                      {/* Price badge */}
                      <div className="absolute top-3 left-3 bg-surface/95 backdrop-blur-sm px-sm py-xs rounded-full text-label-sm font-bold shadow-sm border border-outline-variant/30">
                        ${product.price.toFixed(2)}
                      </div>

                      {/* Customize overlay */}
                      <Link
                        to={PATHS.DESIGNER}
                        className="absolute bottom-md left-1/2 -translate-x-1/2 translate-y-12 group-hover:translate-y-0 transition-all duration-300 bg-secondary text-on-secondary px-xl py-sm rounded-full font-label-md opacity-0 group-hover:opacity-100 flex items-center gap-sm whitespace-nowrap shadow-lg shadow-secondary/30"
                      >
                        <span className="material-symbols-outlined text-[16px]">brush</span> Customize
                      </Link>
                    </div>
                    <div className="p-md">
                      <h4 className="font-label-md text-label-md font-semibold">{product.name}</h4>
                      <p className="text-on-surface-variant text-label-sm mt-xs">{product.badge || 'Trending'}</p>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile Trending Designs */}
      <section className="py-xl md:hidden">
        <div className="px-md flex justify-between items-center mb-md">
          <h2 className="font-headline-md text-headline-md">Trending Now</h2>
          <Link to={PATHS.SHOP} className="text-secondary font-label-md text-label-md flex items-center gap-xs">
            View all <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 px-md pb-md">
          {PRODUCTS.slice(0, 4).map(product => {
            const favorited = isFavorite(product.id);
            return (
              <div key={product.id} className="group bg-surface rounded-xl overflow-hidden border border-outline-variant/20 shadow-sm">
                <div className="bg-surface-container rounded-t-xl overflow-hidden aspect-[4/5] relative">
                  <img className="w-full h-full object-cover" alt={product.name} src={product.image} />
                  <button
                    onClick={e => { e.preventDefault(); toggleFavorite(product.id); }}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface/90 backdrop-blur-sm flex items-center justify-center active:scale-95 transition-transform shadow-sm border border-outline-variant/20"
                  >
                    <span
                      className={`material-symbols-outlined text-[18px] transition-colors ${favorited ? 'text-error' : 'text-on-surface'}`}
                      style={favorited ? { fontVariationSettings: "'FILL' 1" } : {}}
                    >
                      favorite
                    </span>
                  </button>
                  <div className="absolute bottom-2 left-2 bg-surface/90 backdrop-blur-sm px-xs py-[2px] rounded-full text-[11px] font-bold border border-outline-variant/20">
                    ${product.price.toFixed(2)}
                  </div>
                </div>
                <div className="p-sm">
                  <h4 className="font-label-md text-[13px] font-semibold line-clamp-1">{product.name}</h4>
                  <p className="text-on-surface-variant text-[11px] mt-[2px]">{product.badge || 'Trending'}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
