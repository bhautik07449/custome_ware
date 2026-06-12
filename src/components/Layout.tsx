import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './layout/Header';
import MobileNav from './layout/MobileNav';
import Footer from './layout/Footer';
import { PATHS } from '../utils/routes';

export default function Layout() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const isNoShell = location.pathname === PATHS.DESIGNER || location.pathname === PATHS.CART;
  const isDashboard = location.pathname.startsWith(PATHS.DASHBOARD);

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
    <div className={`min-h-[100dvh] flex flex-col font-body-md ${isNoShell ? 'bg-background text-on-background selection:bg-secondary-fixed-dim selection:text-on-secondary-fixed' : 'bg-surface text-on-surface'}`}>
      {/* TopNavBar */}
      {!isNoShell && (
        <Header scrolled={scrolled} />
      )}

      {/* Bottom Navigation Bar (Mobile) */}
      {!isNoShell && (
        <MobileNav />
      )}

      {/* Main Content */}
      <main className={!isNoShell ? "flex-1 pt-[72px] pb-[64px] md:pb-0" : "flex-1 pb-[64px] md:pb-0 w-full"}>
        <Outlet />
      </main>

      {/* Footer */}
      {!isNoShell && !isDashboard && (
        <Footer />
      )}
    </div>
  );
}
