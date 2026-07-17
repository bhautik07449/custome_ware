import { Link, useLocation } from 'react-router-dom';

export default function TopNav() {
  const location = useLocation();
  const isShop = location.pathname === '/shop';

  return (
    <header
      className="bg-surface sticky top-0 z-50 border-b border-transparent transition-all duration-300"
      id="top-nav"
    >
      <nav className="flex justify-between items-center px-container-margin py-4 w-full max-w-[1440px] mx-auto">
        {/* Left Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`font-label-caps text-label-caps transition-colors duration-300 ${
              !isShop ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary hover:text-primary'
            }`}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className={`font-label-caps text-label-caps transition-colors duration-300 ${
              isShop ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary hover:text-primary'
            }`}
          >
            New Arrivals
          </Link>
          <a href="#" className="font-label-caps text-label-caps text-secondary hover:text-primary transition-colors duration-300">
            Archive
          </a>
        </div>

        {/* Brand Logo - Center */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/">
            <span className="font-headline-lg text-[28px] leading-none tracking-tighter text-primary font-extrabold uppercase">
              MONOGRAM
            </span>
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <button className="active:scale-95 transition-transform hover:opacity-70 text-primary">
            <span className="material-symbols-outlined">person</span>
          </button>
          <button className="active:scale-95 transition-transform hover:opacity-70 text-primary relative">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-tertiary text-[8px] text-white rounded-full w-3 h-3 flex items-center justify-center font-bold">
              2
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
