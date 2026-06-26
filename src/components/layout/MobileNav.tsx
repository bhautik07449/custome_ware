import { PATHS } from '../../utils/routes';
import { Link, useLocation } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';

export default function MobileNav() {
  const location = useLocation();
  const { favorites } = useFavorites();
  const showDesigner = false; // Toggle this to true to show the Designer link, false to hide it

  return (
    <div className="fixed bottom-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-t border-outline-variant/30 px-md py-sm flex justify-around items-center md:hidden pb-safe">
      <Link to={PATHS.HOME} className={`flex flex-col items-center gap-xs ${location.pathname === '/' ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-secondary'}`}>
        <span className="material-symbols-outlined" style={location.pathname === '/' ? { fontVariationSettings: "'FILL' 1" } : {}}>home</span>
        <span className="font-label-sm text-label-sm">Home</span>
      </Link>
      <Link to={PATHS.SHOP} className={`flex flex-col items-center gap-xs ${location.pathname.startsWith(PATHS.SHOP) ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-secondary'}`}>
        <span className="material-symbols-outlined" style={location.pathname.startsWith(PATHS.SHOP) ? { fontVariationSettings: "'FILL' 1" } : {}}>storefront</span>
        <span className="font-label-sm text-label-sm">Shop</span>
      </Link>
      {showDesigner && (
        <Link to={PATHS.DESIGNER} className={`flex flex-col items-center gap-xs ${location.pathname.startsWith(PATHS.DESIGNER) ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-secondary'}`}>
          <span className="material-symbols-outlined" style={location.pathname.startsWith(PATHS.DESIGNER) ? { fontVariationSettings: "'FILL' 1" } : {}}>brush</span>
          <span className="font-label-sm text-label-sm">Designer</span>
        </Link>
      )}
      <Link to={PATHS.DASHBOARD} className={`flex flex-col items-center gap-xs ${location.pathname.startsWith(PATHS.DASHBOARD) ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-secondary'}`}>
        <span className="material-symbols-outlined" style={location.pathname.startsWith(PATHS.DASHBOARD) ? { fontVariationSettings: "'FILL' 1" } : {}}>person</span>
        <span className="font-label-sm text-label-sm">Profile</span>
      </Link>
      <Link to={PATHS.FAVORITES} className={`flex flex-col items-center gap-xs relative ${location.pathname.startsWith(PATHS.FAVORITES) ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-secondary'}`}>
        <div className="relative">
          <span className="material-symbols-outlined" style={location.pathname.startsWith(PATHS.FAVORITES) ? { fontVariationSettings: "'FILL' 1" } : {}}>favorite</span>
          {favorites.length > 0 && (
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></span>
          )}
        </div>
        <span className="font-label-sm text-label-sm">Saved</span>
      </Link>
    </div>
  );
}
