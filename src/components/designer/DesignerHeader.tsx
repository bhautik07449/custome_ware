import { PATHS } from '../../utils/routes';
import { Link, useLocation } from 'react-router-dom';
import { useDesigner } from '../../context/DesignerContext';

export default function DesignerHeader() {
  const { handleDownload, undo, redo, canUndo, canRedo, saveDesign } = useDesigner();
  const location = useLocation();
  const currentPath = location.pathname;

  const isLoggedIn = false;

  const isActive = (path: string) =>
    (currentPath.startsWith(path) && path !== PATHS.HOME) ||
    (path === PATHS.HOME && currentPath === PATHS.HOME);

  return (
    <>
      {/* ─── DESKTOP HEADER ─── */}
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 hidden md:block">
        <nav className="flex justify-between items-center px-grid-margin max-w-7xl mx-auto py-md">
          <div className="flex items-center gap-xl">
            <Link to={PATHS.HOME} className="font-headline-md text-[18px] font-bold text-on-surface hover:text-secondary transition-colors">
              CustomWear
            </Link>
            <div className="hidden md:flex gap-lg">
              {[
                { path: PATHS.SHOP, label: 'Shop' },
                { path: PATHS.DESIGNER, label: 'Designer' },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  className={`font-body-md text-body-md transition-colors duration-200 ${isActive(path) ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`}
                  to={path}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-md">
            {isLoggedIn ? (
              <>
                <Link to={PATHS.CART} className="p-xs text-on-surface-variant hover:text-secondary transition-colors flex">
                  <span className="material-symbols-outlined">shopping_cart</span>
                </Link>
                <Link to={PATHS.DASHBOARD} className="p-xs text-on-surface-variant hover:text-secondary transition-colors flex">
                  <span className="material-symbols-outlined">account_circle</span>
                </Link>
              </>
            ) : (
              <div className="hidden md:flex gap-2 items-center">
                <Link className="font-label-md text-label-md text-on-surface hover:text-secondary transition-colors px-4 py-2" to="/login">Log in</Link>
                <button className="bg-on-surface text-surface px-6 py-2 rounded-lg font-label-md hover:bg-secondary hover:text-on-primary shadow-sm transition-all active:scale-95">Sign Up</button>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* ─── MOBILE DESIGNER HEADER ─── */}
      <header className="md:hidden fixed top-0 w-full bg-surface/95 backdrop-blur-md border-b border-outline-variant/30 flex justify-between items-center px-md py-sm z-50 shadow-sm">
        <div className="flex items-center gap-sm">
          <Link
            to={PATHS.HOME}
            className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center active:scale-95 transition-transform border border-outline-variant"
          >
            <span className="material-symbols-outlined text-on-surface text-[20px]">arrow_back</span>
          </Link>
          <div>
            <h1 className="font-bold text-[14px] text-on-surface">Design Studio</h1>
            <p className="text-[9px] text-on-surface-variant uppercase tracking-widest">Premium Custom T-Shirt</p>
          </div>
        </div>

        <div className="flex items-center gap-xs">
          {/* Undo */}
          <button
            onClick={undo}
            disabled={!canUndo}
            title="Undo"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all active:scale-95 ${canUndo ? 'text-on-surface hover:bg-surface-container' : 'text-on-surface-variant/30 cursor-not-allowed'}`}
          >
            <span className="material-symbols-outlined text-[20px]">undo</span>
          </button>

          {/* Redo */}
          <button
            onClick={redo}
            disabled={!canRedo}
            title="Redo"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all active:scale-95 ${canRedo ? 'text-on-surface hover:bg-surface-container' : 'text-on-surface-variant/30 cursor-not-allowed'}`}
          >
            <span className="material-symbols-outlined text-[20px]">redo</span>
          </button>

          {/* Save */}
          <button
            onClick={() => saveDesign()}
            title="Save Design"
            className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center active:scale-95 transition-all border border-outline-variant hover:bg-surface-container-high"
          >
            <span className="material-symbols-outlined text-secondary text-[20px]">save</span>
          </button>

          {/* Download */}
          <button
            onClick={handleDownload}
            className="bg-secondary text-on-secondary font-label-md px-md py-xs rounded-full shadow-sm active:scale-95 transition-transform flex items-center gap-xs hover:brightness-110"
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            Export
          </button>
        </div>
      </header>
    </>
  );
}
