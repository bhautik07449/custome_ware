import { PATHS } from '../../utils/routes';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export default function ShopDesktopHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Newest Arrivals');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    'Newest Arrivals',
    'Price: Low to High',
    'Price: High to Low',
    'Best Rating'
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="hidden md:flex max-w-7xl mx-auto px-grid-margin w-full flex-col md:flex-row md:items-center justify-between py-lg gap-md">
      <nav className="flex items-center gap-2 text-label-sm text-on-surface-variant">
        <Link className="hover:text-secondary transition-colors" to={PATHS.HOME}>Home</Link>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <Link className="hover:text-secondary transition-colors" to={PATHS.SHOP}>Apparel</Link>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="text-on-surface font-semibold">T-Shirts</span>
      </nav>
      <div className="flex items-center gap-lg">
        <p className="text-label-md text-on-surface-variant">Showing <span className="text-on-surface font-bold">1-12</span> of 48 products</p>
        <div className="flex items-center gap-2 relative" ref={dropdownRef}>
          <label className="text-label-sm text-on-surface-variant shrink-0" htmlFor="sort">Sort by:</label>
          <div 
            className="relative bg-surface border border-outline-variant/50 rounded-full px-4 py-2 pr-10 text-label-md font-bold cursor-pointer shadow-sm hover:shadow hover:border-secondary transition-all min-w-[190px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="select-none">{selectedSort}</span>
            <span className={`material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </div>

          {/* Custom Dropdown List */}
          {isOpen && (
            <div className="absolute top-[120%] right-0 w-[220px] bg-surface rounded-2xl shadow-xl border border-outline-variant/30 py-2 z-50">
              {options.map((option) => (
                <button
                  key={option}
                  className={`w-full text-left px-4 py-3 text-body-md transition-colors ${
                    selectedSort === option 
                      ? 'text-secondary font-bold bg-secondary/5' 
                      : 'text-on-surface hover:bg-surface-variant'
                  }`}
                  onClick={() => {
                    setSelectedSort(option);
                    setIsOpen(false);
                    console.log('Sorting by:', option);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
