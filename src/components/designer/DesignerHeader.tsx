import { Link } from 'react-router-dom';
import { useDesigner } from '../../context/DesignerContext';

export default function DesignerHeader() {
  const { handleDownload } = useDesigner();

  return (
    <>
      {/* ------------------------------------------------------------- */}
      {/* DESKTOP HEADER                                                */}
      {/* ------------------------------------------------------------- */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 hidden md:flex justify-between items-center px-grid-margin py-md max-w-7xl mx-auto left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-xl">
          <Link to="/" className="font-headline-md text-headline-md font-bold text-on-surface">CustomWear</Link>
          <nav className="hidden md:flex gap-lg">
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200" to="/shop">Shop</Link>
            <Link className="font-body-md text-body-md text-secondary font-bold border-b-2 border-secondary pb-1" to="/designer">Designer</Link>
          </nav>
        </div>
        <div className="flex items-center gap-md">
          <Link to="/cart" className="p-sm hover:text-secondary transition-colors duration-200 active:scale-95 transition-transform flex">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
          <Link to="/dashboard" className="p-sm hover:text-secondary transition-colors duration-200 active:scale-95 transition-transform flex">
            <span className="material-symbols-outlined">account_circle</span>
          </Link>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* MOBILE HEADER (Studio Specific)                               */}
      {/* ------------------------------------------------------------- */}
      <header className="md:hidden fixed top-0 w-full bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 flex justify-between items-center px-md py-sm z-50">
        <div className="flex items-center gap-sm">
          <Link to="/" className="p-base active:scale-95 transition-transform flex items-center justify-center">
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
