import { Link } from 'react-router-dom';

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  return (
    <header className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300 ${scrolled ? 'py-sm shadow-sm' : ''}`}>
      <nav className={`flex justify-between items-center px-grid-margin max-w-7xl mx-auto transition-all ${scrolled ? 'py-sm' : 'py-md'}`}>
        <div className="flex items-center gap-xl">
          <Link className="font-headline-md text-headline-md font-bold text-on-surface" to="/">CustomWear</Link>
          <div className="hidden md:flex gap-lg">
            <Link className="font-body-md text-body-md text-secondary border-b-2 border-secondary pb-1 font-bold" to="/shop">Shop</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200" to="/designer">Designer</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200 flex items-center" to="/login">Login</Link>
            <button className="bg-secondary text-on-primary px-lg py-xs rounded-full font-label-md text-label-md hover:brightness-110 transition-all active:scale-95">Sign Up</button>
          </div>
        </div>
        <div className="flex items-center gap-md">
          <Link to="/cart" className="p-xs text-on-surface-variant hover:text-secondary transition-colors active:scale-95 flex">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
          <Link to="/dashboard" className="p-xs text-on-surface-variant hover:text-secondary transition-colors active:scale-95 flex">
            <span className="material-symbols-outlined">account_circle</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
