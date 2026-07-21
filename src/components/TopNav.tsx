import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const navLinks = [
  { label: 'Shop All', path: '/products' },
  { label: 'Collections', path: '/shop' },
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '/journal' },
];

export default function TopNav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        id="top-nav"
        className={`w-full sticky top-0 z-50 bg-surface transition-shadow duration-300 ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="flex justify-between items-center px-container-margin py-gutter max-w-[1440px] mx-auto">
          {/* Left — desktop nav links */}
          <div className="flex-1 hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-label-caps text-label-caps transition-all duration-200 ${
                    isActive
                      ? 'text-primary border-b border-primary pb-1'
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Center — Brand logo */}
          <div className="flex-none">
            <Link to="/">
              <img
                src="/korzae_logo.png"
                alt="KORZAE"
                className="h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Right — icons */}
          <div className="flex-1 flex justify-end gap-6 items-center">
            <Link to="/search" className="material-symbols-outlined text-[24px] text-primary hover:opacity-70 transition-opacity">search</Link>
            <Link to="/profile" className="material-symbols-outlined text-[24px] text-primary hover:opacity-70 transition-opacity">person</Link>
            <Link to="/cart" className="relative group">
              <span className="material-symbols-outlined text-[24px] text-primary group-hover:opacity-70 transition-opacity">shopping_bag</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            {/* Mobile hamburger */}
            <button
              className="md:hidden transition-all duration-200 hover:text-primary text-on-background active:scale-90"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-surface border-t border-outline-variant ${
            menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col px-container-margin py-6 space-y-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-label-caps text-label-caps transition-colors duration-200 ${
                    isActive ? 'text-primary font-bold' : 'text-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-outline-variant">
              <Link
                to="/profile"
                className="font-label-caps text-label-caps text-secondary flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">person</span>
                My Account
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
