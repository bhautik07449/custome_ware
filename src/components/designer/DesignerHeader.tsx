import { PATHS } from '../../utils/routes';
import { Link, useLocation } from 'react-router-dom';
import { useDesigner } from '../../context/DesignerContext';

export default function DesignerHeader() {
  const { handleDownload } = useDesigner();
  const location = useLocation();
  const currentPath = location.pathname;

  // TODO: Replace with real authentication context later
  const isLoggedIn = false; 

  const isActive = (path: string) => currentPath.startsWith(path) && path !== PATHS.HOME || (path === PATHS.HOME && currentPath === PATHS.HOME);

  return (
    <>
      {/* ------------------------------------------------------------- */}
      {/* DESKTOP HEADER                                                */}
      {/* ------------------------------------------------------------- */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 hidden md:block">
        <nav className="flex justify-between items-center px-grid-margin max-w-7xl mx-auto py-md">
          <div className="flex items-center gap-xl">
            <Link to={PATHS.HOME} className="font-headline-md text-headline-md font-bold text-on-surface">CustomWear</Link>
            <div className="hidden md:flex gap-lg">
              <Link 
                className={`font-body-md text-body-md transition-colors duration-200 ${isActive(PATHS.SHOP) ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`} 
                to={PATHS.SHOP}
              >
                Shop
              </Link>
              <Link 
                className={`font-body-md text-body-md transition-colors duration-200 ${isActive(PATHS.DESIGNER) ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`} 
                to={PATHS.DESIGNER}
              >
                Designer
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-md">
            {isLoggedIn ? (
              <>
                <Link to={PATHS.CART} className="p-xs text-on-surface-variant hover:text-secondary transition-colors duration-200 active:scale-95 flex">
                  <span className="material-symbols-outlined">shopping_cart</span>
                </Link>
                <Link to={PATHS.DASHBOARD} className="p-xs text-on-surface-variant hover:text-secondary transition-colors duration-200 active:scale-95 flex">
                  <span className="material-symbols-outlined">account_circle</span>
                </Link>
              </>
            ) : (
              <div className="hidden md:flex gap-2 items-center">
                <Link className="font-label-md text-label-md text-on-surface hover:text-secondary transition-colors duration-200 px-4 py-2" to="/login">Log in</Link>
                <button className="bg-on-surface text-surface px-6 py-2 rounded-lg font-label-md hover:bg-secondary hover:text-on-primary shadow-sm hover:shadow transition-all active:scale-95">Sign Up</button>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* MOBILE HEADER (Studio Specific)                               */}
      {/* ------------------------------------------------------------- */}
      <header className="md:hidden fixed top-0 w-full bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 flex justify-between items-center px-md py-sm z-50">
        <div className="flex items-center gap-sm">
          <Link to={PATHS.HOME} className="p-base active:scale-95 transition-transform flex items-center justify-center">
            <span className="material-symbols-outlined text-on-surface">close</span>
          </Link>
          <div>
            <h1 className="font-headline-md text-label-md text-on-surface font-bold">Design Studio</h1>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Premium Custom T-Shirt</p>
          </div>
        </div>
        <div className="flex items-center gap-md">
          <button className="material-symbols-outlined text-on-surface-variant active:scale-95">undo</button>
          <button className="material-symbols-outlined text-on-surface-variant active:scale-95">redo</button>
          <button onClick={handleDownload} className="bg-primary text-on-primary font-label-md px-md py-xs rounded-full shadow-sm active:scale-95 transition-transform flex items-center gap-xs">
            <span className="material-symbols-outlined text-[16px]">download</span>
            Save
          </button>
        </div>
      </header>
    </>
  );
}
