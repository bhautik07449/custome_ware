import { PATHS } from '../../utils/routes';
import { Link, useLocation } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  const { favorites } = useFavorites();

  const isLoggedIn = false;
  const showDesigner = false; // Toggle this to true to show the Designer link, false to hide it

  const isActive = (path: string) => currentPath.startsWith(path) && path !== PATHS.HOME || (path === PATHS.HOME && currentPath === PATHS.HOME);

  return (
    <header className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300 ${scrolled ? 'py-sm shadow-sm' : ''}`}>
      <nav className={`flex justify-between items-center px-grid-margin max-w-7xl mx-auto transition-all ${scrolled ? 'py-sm' : 'py-md'}`}>
        <div className="flex items-center gap-xl">
          <Link className="font-headline-md text-headline-md font-bold text-on-surface" to={PATHS.HOME}>CustomWear</Link>
          <div className="hidden md:flex gap-lg">
            <Link
              className={`font-body-md text-body-md transition-colors duration-200 ${isActive(PATHS.SHOP) ? 'text-secondary border-b-2 border-secondary pb-1 font-bold' : 'text-on-surface-variant hover:text-secondary'}`}
              to={PATHS.SHOP}
            >
              Shop
            </Link>
            {showDesigner && (
              <Link
                className={`font-body-md text-body-md transition-colors duration-200 ${isActive(PATHS.DESIGNER) ? 'text-secondary border-b-2 border-secondary pb-1 font-bold' : 'text-on-surface-variant hover:text-secondary'}`}
                to={PATHS.DESIGNER}
              >
                Designer
              </Link>
            )}
          </div>
        </div>
        <div className="flex items-center gap-md">
          <Link to={PATHS.FAVORITES} className="hidden md:flex p-xs text-on-surface-variant hover:text-secondary transition-colors active:scale-95 relative">
            <span className="material-symbols-outlined">favorite</span>
            {favorites.length > 0 && (
              <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
            )}
          </Link>
          {isLoggedIn ? (
            <>
              <Link to={PATHS.CART} className="p-xs text-on-surface-variant hover:text-secondary transition-colors active:scale-95 flex">
                <span className="material-symbols-outlined">shopping_cart</span>
              </Link>
              <Link to={PATHS.DASHBOARD} className="p-xs text-on-surface-variant hover:text-secondary transition-colors active:scale-95 flex">
                <span className="material-symbols-outlined">account_circle</span>
              </Link>
            </>
          ) : (
            <div className="hidden md:flex gap-2 items-center">
              <Link className="font-label-md text-label-md text-on-surface hover:text-secondary transition-colors duration-200 px-4 py-2" to={PATHS.LOGIN}>Log in</Link>
              <Link className="bg-on-surface text-surface px-6 py-2 rounded-lg font-label-md hover:bg-secondary hover:text-on-primary shadow-sm hover:shadow transition-all active:scale-95" to={PATHS.SIGNUP}>Sign Up</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
