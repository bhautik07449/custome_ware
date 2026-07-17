import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'HOME', icon: 'home', path: '/' },
  { label: 'SHOP', icon: 'storefront', path: '/shop' },
  { label: 'BAG', icon: 'shopping_bag', path: '/bag' },
  { label: 'PROFILE', icon: 'person', path: '/profile' },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-3 bg-surface border-t border-outline-variant md:hidden">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
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
            <span className="text-[9px]">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
