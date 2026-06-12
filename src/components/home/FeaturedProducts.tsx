import { Link } from 'react-router-dom';
import { PATHS } from '../../utils/routes';
import { PRODUCTS } from '../../data/mockData';
import { useFavorites } from '../../context/FavoritesContext';

export default function FeaturedProducts() {
  const { isFavorite, toggleFavorite } = useFavorites();
  return (
    <>
      {/* Desktop Trending Designs Grid */}
      <section className="py-3xl hidden md:block">
        <div className="max-w-7xl mx-auto px-grid-margin">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-2xl gap-4">
            <div>
              <span className="text-secondary font-label-md uppercase tracking-widest">Community Picks</span>
              <h2 className="font-headline-lg text-headline-lg mt-base">Trending Designs</h2>
            </div>
            <Link className="text-secondary font-label-md hover:underline flex items-center gap-xs" to={PATHS.SHOP}>
              View All Designs <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-grid-gutter">
            {PRODUCTS.slice(0, 4).map(product => {
              const favorited = isFavorite(product.id);
              return (
              <div key={product.id} className="group relative">
                <div className="relative aspect-[3/4] bg-surface-container rounded-xl overflow-hidden mb-md">
                  <img alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={product.image} />
                  
                  {/* Desktop Favorite Button */}
                  <button 
                    onClick={(e) => { e.preventDefault(); toggleFavorite(product.id); }}
                    className={`absolute top-2 right-2 p-2 bg-surface/80 backdrop-blur rounded-full shadow-sm transition-all z-10 ${favorited ? 'opacity-100 scale-100' : 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 active:scale-90'}`}
                  >
                    <span className={`material-symbols-outlined text-[20px] transition-colors ${favorited ? 'text-error' : 'text-on-surface-variant hover:text-error'}`} style={favorited ? { fontVariationSettings: "'FILL' 1" } : {}}>
                      favorite
                    </span>
                  </button>

                  <div className="absolute top-md left-md bg-surface px-sm py-xs rounded-full text-label-sm font-bold shadow-sm">
                    ${product.price.toFixed(2)}
                  </div>
                  <Link to={PATHS.DESIGNER} className="absolute bottom-md left-1/2 -translate-x-1/2 translate-y-12 group-hover:translate-y-0 transition-all duration-300 bg-primary text-on-primary px-xl py-sm rounded-full font-label-md opacity-0 group-hover:opacity-100 flex items-center gap-sm whitespace-nowrap">
                    <span className="material-symbols-outlined text-[18px]">edit</span> Customize
                  </Link>
                </div>
                <h4 className="font-label-md text-label-md">{product.name}</h4>
                <p className="text-on-surface-variant text-label-sm">{product.badge || 'Trending'}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile Trending Designs (Horizontal Scroll) */}
      <section className="py-xl md:hidden">
        <div className="px-md flex justify-between items-center mb-md">
          <h2 className="font-headline-md text-headline-md">Trending Now</h2>
          <Link to={PATHS.SHOP} className="text-secondary font-label-md text-label-md">View all</Link>
        </div>
        <div className="grid grid-cols-2 gap-4 px-md pb-md">
          {PRODUCTS.slice(0, 4).map(product => {
            const favorited = isFavorite(product.id);
            return (
            <div key={product.id} className="w-full group">
              <div className="bg-surface-container-low rounded-lg overflow-hidden mb-sm border border-outline-variant/30 aspect-[4/5] relative">
                <img className="w-full h-full object-cover" alt={product.name} src={product.image} />
                <button 
                  onClick={(e) => { e.preventDefault(); toggleFavorite(product.id); }}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center active:scale-95 transition-transform shadow-sm"
                >
                  <span className={`material-symbols-outlined text-[18px] transition-colors ${favorited ? 'text-error' : 'text-on-surface'}`} style={favorited ? { fontVariationSettings: "'FILL' 1" } : {}}>favorite</span>
                </button>
              </div>
              <h4 className="font-label-md text-label-md text-on-surface line-clamp-1">{product.name}</h4>
              <p className="font-body-md text-body-md text-on-surface-variant font-bold">${product.price.toFixed(2)}</p>
            </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
