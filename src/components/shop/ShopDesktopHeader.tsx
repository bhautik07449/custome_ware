import { Link } from 'react-router-dom';

export default function ShopDesktopHeader() {
  return (
    <div className="hidden md:flex max-w-7xl mx-auto px-grid-margin w-full flex-col md:flex-row md:items-center justify-between py-lg gap-md">
      <nav className="flex items-center gap-2 text-label-sm text-on-surface-variant">
        <Link className="hover:text-secondary transition-colors" to="/">Home</Link>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <Link className="hover:text-secondary transition-colors" to="/shop">Apparel</Link>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="text-on-surface font-semibold">T-Shirts</span>
      </nav>
      <div className="flex items-center gap-lg">
        <p className="text-label-md text-on-surface-variant">Showing <span className="text-on-surface font-bold">1-12</span> of 48 products</p>
        <div className="flex items-center gap-2">
          <label className="text-label-sm text-on-surface-variant" htmlFor="sort">Sort by:</label>
          <select className="bg-transparent border-none text-label-md font-bold focus:ring-0 cursor-pointer" id="sort" onChange={(e) => console.log('Sorting by:', e.target.value)}>
            <option>Newest Arrivals</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Best Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
}
