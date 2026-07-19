import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'HOME', icon: 'home', path: '/' },
  { label: 'SHOP', icon: 'storefront', path: '/products' },
  { label: 'CART', icon: 'shopping_bag', path: '/cart' },
  { label: 'PROFILE', icon: 'person', path: '/profile' },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-3 bg-surface border-t border-outline-variant md:hidden">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path || (item.path === '/products' && location.pathname.startsWith('/products'));
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center font-label-caps text-label-caps transition-all ${
              isActive ? 'text-primary font-bold' : 'text-secondary hover:text-primary'
            }`}
          >
            <span
              className="material-symbols-outlined mb-1"
              style={isActive ? { fontVariationSettings: "'FILL' 1, 'wght' 400" } : {}}
            >
              {item.icon}
            </span>
            <span className="text-[9px] relative">
              {item.label}
              {item.label === 'CART' && (
                <span className="absolute -top-6 -right-4 bg-primary text-on-primary text-[8px] w-3 h-3 rounded-full flex items-center justify-center font-bold">2</span>
              )}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
