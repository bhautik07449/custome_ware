import { Link } from 'react-router-dom';
import { PATHS, getProductLink } from '../utils/routes';
import type { Product } from '../data/mockData';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card group relative bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden flex flex-col transition-all duration-300 md:hover:shadow-lg shadow-sm md:shadow-none md:hover:-translate-y-1 active:scale-[0.98] md:active:scale-100">
      <Link to={getProductLink(product.id)} className="relative aspect-[3/4] bg-[#F9FAFB] overflow-hidden block">
        <img alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={product.image} />
        
        {/* Mobile Favorite Button */}
        <button className="md:hidden absolute top-2 right-2 p-2 bg-surface/80 backdrop-blur rounded-full shadow-sm active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-secondary text-[20px]">favorite</span>
        </button>

        {/* Desktop Hover Action Overlay */}
        <div className="hidden md:flex action-overlay absolute inset-0 bg-on-surface/20 opacity-0 transition-all duration-300 flex-col items-center justify-end p-md translate-y-4">
          <div className="w-full space-y-sm">
            <Link to={getProductLink(product.id)} className="w-full py-3 bg-white text-on-surface font-label-md rounded-lg shadow-sm hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">visibility</span>
              Quick View
            </Link>
            <Link to={PATHS.DESIGNER} className="w-full py-3 bg-on-surface text-white font-label-md rounded-lg shadow-md hover:bg-secondary transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">palette</span>
              Customize
            </Link>
          </div>
        </div>

        {product.badge && (
          <span className={`absolute top-md left-md text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest ${product.badge === 'Sale' ? 'bg-error' : 'bg-secondary'}`}>
            {product.badge}
          </span>
        )}
      </Link>
      <div className="p-3 md:p-md flex flex-col flex-1 gap-1 md:gap-0">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start md:mb-xs">
          <Link to={getProductLink(product.id)} className="font-label-md text-label-md text-on-surface-variant truncate md:hidden hover:text-primary transition-colors">{product.name.replace(/ Signature| Organic| Heavyweight| Sport| Oversized| Active/gi, '').trim()}</Link>
          <Link to={getProductLink(product.id)} className="hidden md:block font-label-md text-on-surface hover:text-primary transition-colors"><h3>{product.name}</h3></Link>
          <div className="flex flex-col md:items-end">
            <p className="font-label-md text-label-md md:font-bold text-on-surface">${product.price.toFixed(2)}</p>
            {product.originalPrice && (
              <span className="hidden md:inline text-[10px] line-through text-on-surface-variant">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
        
        {/* Desktop Extras */}
        <div className="hidden md:flex items-center gap-1 mb-md">
          <div className="flex text-amber-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: `'FILL' ${product.rating >= star ? 1 : 0}` }}>
                {product.rating >= star ? 'star' : (product.rating >= star - 0.5 ? 'star_half' : 'star')}
              </span>
            ))}
          </div>
          <span className="text-label-sm text-on-surface-variant">({product.reviews})</span>
        </div>
        <div className="hidden md:flex mt-auto gap-2">
          {product.colors.map((colorClass, idx) => (
            <span key={idx} className={`w-4 h-4 rounded-full ${colorClass} border border-outline-variant/50 cursor-pointer hover:ring-1 ring-secondary ring-offset-1`}></span>
          ))}
        </div>

        {/* Mobile Customize Button */}
        <Link to={PATHS.DESIGNER} className="md:hidden mt-2 w-full py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-1 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[16px]">edit</span>
          Customize
        </Link>
      </div>
    </div>
  );
}
