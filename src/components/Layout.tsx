import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const isNoShell = location.pathname === '/designer' || location.pathname === '/cart';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col font-body-md overflow-x-hidden ${isNoShell ? 'bg-background text-on-background selection:bg-secondary-fixed-dim selection:text-on-secondary-fixed' : 'bg-surface text-on-surface'}`}>
      {/* TopNavBar */}
      {!isNoShell && (
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
      )}

      {/* Bottom Navigation Bar (Mobile) */}
      {!isNoShell && (
        <div className="fixed bottom-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-t border-outline-variant/30 px-md py-sm flex justify-around items-center md:hidden pb-safe">
          <Link to="/" className="flex flex-col items-center gap-xs text-secondary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
            <span className="font-label-sm text-label-sm">Home</span>
          </Link>
          <Link to="/shop" className="flex flex-col items-center gap-xs text-on-surface-variant hover:text-secondary">
            <span className="material-symbols-outlined">search</span>
            <span className="font-label-sm text-label-sm">Shop</span>
          </Link>
          <Link to="/designer" className="flex flex-col items-center gap-xs text-on-surface-variant hover:text-secondary">
            <span className="material-symbols-outlined">palette</span>
            <span className="font-label-sm text-label-sm">Create</span>
          </Link>
          <Link to="/dashboard" className="flex flex-col items-center gap-xs text-on-surface-variant hover:text-secondary">
            <span className="material-symbols-outlined">person</span>
            <span className="font-label-sm text-label-sm">Profile</span>
          </Link>
        </div>
      )}

      {/* Main Content */}
      <main className={!isNoShell ? "flex-1 pt-[72px] pb-[64px] md:pb-0" : "flex-1 pb-[64px] md:pb-0 w-full"}>
        <Outlet />
      </main>

      {/* Footer */}
      {!isNoShell && (
        <footer className="w-full py-3xl px-grid-margin bg-surface-container-highest border-t border-outline-variant mt-auto mb-[64px] md:mb-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-grid-gutter max-w-7xl mx-auto">
          <div className="col-span-1 md:col-span-1 space-y-md">
            <Link className="font-headline-md text-headline-md font-bold text-on-surface" to="/">CustomWear</Link>
            <p className="text-on-surface-variant font-body-md pr-lg">Crafting the future of personalized apparel through technology and design.</p>
          </div>
          <div className="space-y-md">
            <h5 className="font-label-md text-label-md uppercase tracking-widest text-on-surface">Explore</h5>
            <ul className="space-y-sm">
              <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-opacity duration-300" to="/shop">Shop</Link></li>
              <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-opacity duration-300" to="/designer">Designer</Link></li>
              <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-opacity duration-300" to="/collections">Collections</Link></li>
              <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-opacity duration-300" to="/templates">Templates</Link></li>
            </ul>
          </div>
          <div className="space-y-md">
            <h5 className="font-label-md text-label-md uppercase tracking-widest text-on-surface">Company</h5>
            <ul className="space-y-sm">
              <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-opacity duration-300" to="/terms">Terms</Link></li>
              <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-opacity duration-300" to="/privacy">Privacy</Link></li>
              <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-opacity duration-300" to="/support">Support</Link></li>
              <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-opacity duration-300" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-md">
            <h5 className="font-label-md text-label-md uppercase tracking-widest text-on-surface">Stay Connected</h5>
            <div className="flex gap-md">
              <a className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center hover:bg-secondary hover:text-on-primary transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">public</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center hover:bg-secondary hover:text-on-primary transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center hover:bg-secondary hover:text-on-primary transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-3xl pt-xl border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="text-label-sm font-label-sm text-on-surface-variant">© 2024 CustomWear Studio. All rights reserved.</p>
          <div className="flex gap-xl text-label-sm font-label-sm text-on-surface-variant">
            <span>Shipping Policy</span>
            <span>Refunds</span>
          </div>
        </div>
      </footer>
      )}
    </div>
  );
}
