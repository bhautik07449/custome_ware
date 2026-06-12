import { Link } from 'react-router-dom';
import { PATHS } from '../utils/routes';
import { PRODUCTS } from '../data/mockData';
import { useFavorites } from '../context/FavoritesContext';
import ProductCard from '../components/ProductCard';

export default function Favorites() {
  const { favorites } = useFavorites();

  const favoriteProducts = PRODUCTS.filter(product => favorites.includes(product.id));

  return (
    <div className="w-full min-h-screen pt-6 md:pt-12 pb-16 md:pb-24 px-md md:px-grid-margin max-w-7xl mx-auto flex flex-col">
      <div className="flex items-center gap-4 mb-6 md:mb-10">
        <h1 className="font-headline-md text-headline-md md:font-headline-lg md:text-headline-lg font-bold text-on-surface">Your Favorites</h1>
        <div className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-label-md text-label-md font-bold">
          {favoriteProducts.length} Items
        </div>
      </div>

      {favoriteProducts.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center flex-grow py-10 md:py-20 text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-surface-container-high rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-[40px] md:text-[48px] text-on-surface-variant/50">favorite</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-2 font-bold">No favorites yet</h2>
          <p className="text-on-surface-variant font-body-md text-body-md max-w-md mb-8">
            Keep track of the designs you love. Click the heart icon on any product to save it here for later.
          </p>
          <Link
            to={PATHS.SHOP}
            className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:bg-secondary transition-all active:scale-95 shadow-md flex items-center gap-2"
          >
            Explore Designs
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      )}
    </div>
  );
}