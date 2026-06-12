import { Link, useLocation } from 'react-router-dom';

export default function MobileNav() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-t border-outline-variant/30 px-md py-sm flex justify-around items-center md:hidden pb-safe">
      <Link to="/" className={`flex flex-col items-center gap-xs ${location.pathname === '/' ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-secondary'}`}>
        <span className="material-symbols-outlined" style={location.pathname === '/' ? { fontVariationSettings: "'FILL' 1" } : {}}>home</span>
        <span className="font-label-sm text-label-sm">Home</span>
      </Link>
      <Link to="/shop" className={`flex flex-col items-center gap-xs ${location.pathname.startsWith('/shop') ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-secondary'}`}>
        <span className="material-symbols-outlined" style={location.pathname.startsWith('/shop') ? { fontVariationSettings: "'FILL' 1" } : {}}>storefront</span>
        <span className="font-label-sm text-label-sm">Shop</span>
      </Link>
      <Link to="/designer" className={`flex flex-col items-center gap-xs ${location.pathname.startsWith('/designer') ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-secondary'}`}>
        <span className="material-symbols-outlined" style={location.pathname.startsWith('/designer') ? { fontVariationSettings: "'FILL' 1" } : {}}>brush</span>
        <span className="font-label-sm text-label-sm">Designer</span>
      </Link>
      <Link to="/dashboard" className={`flex flex-col items-center gap-xs ${location.pathname.startsWith('/dashboard') ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-secondary'}`}>
        <span className="material-symbols-outlined" style={location.pathname.startsWith('/dashboard') ? { fontVariationSettings: "'FILL' 1" } : {}}>person</span>
        <span className="font-label-sm text-label-sm">Profile</span>
      </Link>
    </div>
  );
}
