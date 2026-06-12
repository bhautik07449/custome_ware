import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/mockData';

export default function Shop() {
  return (
    <div className="w-full">
      {/* ------------------------------------------------------------- */}
      {/* MOBILE HEADER & FILTERS                                       */}
      {/* ------------------------------------------------------------- */}
      <section className="md:hidden px-md mb-lg pt-md">
        <div className="flex flex-col gap-md">
          <div className="flex items-center justify-between">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">All Products</h1>
            <span className="text-on-surface-variant font-label-sm text-label-sm">128 Items</span>
          </div>
          
          {/* Mobile Filter Chips */}
          <div className="flex gap-sm overflow-x-auto hide-scrollbar pb-sm -mx-md px-md md:hidden">
            <button className="flex items-center gap-2 px-md py-sm bg-primary text-on-primary rounded-full font-label-md text-label-md shrink-0 active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-[18px]">tune</span>
              Filters
            </button>
            <button className="px-md py-sm bg-surface-container-high text-on-surface rounded-full font-label-md text-label-md shrink-0 border border-outline-variant/50 active:scale-95 transition-transform">
              Cotton
            </button>
            <button className="px-md py-sm bg-surface-container-high text-on-surface rounded-full font-label-md text-label-md shrink-0 border border-outline-variant/50 active:scale-95 transition-transform">
              Oversized
            </button>
            <button className="px-md py-sm bg-surface-container-high text-on-surface rounded-full font-label-md text-label-md shrink-0 border border-outline-variant/50 active:scale-95 transition-transform">
              New Arrivals
            </button>
            <button className="px-md py-sm bg-surface-container-high text-on-surface rounded-full font-label-md text-label-md shrink-0 border border-outline-variant/50 active:scale-95 transition-transform">
              Premium
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* DESKTOP HEADER & BREADCRUMBS                                  */}
      {/* ------------------------------------------------------------- */}
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
      
      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-md md:px-grid-margin pb-3xl w-full flex flex-col lg:flex-row gap-grid-gutter">
        
        {/* DESKTOP SIDEBAR FILTERS */}
        <aside className="hidden lg:block w-64 flex-shrink-0 space-y-xl">
          <div className="bg-surface-container-low rounded-xl p-lg border border-outline-variant/20 sticky top-[100px]">
            <div className="flex items-center justify-between mb-lg">
              <h3 className="font-headline-md text-[18px] font-bold">Filters</h3>
              <button className="text-label-sm text-secondary hover:underline">Clear all</button>
            </div>
            {/* Category */}
            <div className="mb-xl">
              <h4 className="text-label-md font-bold mb-md uppercase tracking-wider text-on-surface-variant">Category</h4>
              <div className="space-y-sm">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input defaultChecked className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="text-body-md text-on-surface group-hover:text-secondary transition-colors">Premium Cotton</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="text-body-md text-on-surface group-hover:text-secondary transition-colors">Organic Series</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="text-body-md text-on-surface group-hover:text-secondary transition-colors">Heavyweight Tech</span>
                </label>
              </div>
            </div>
            {/* Size */}
            <div className="mb-xl">
              <h4 className="text-label-md font-bold mb-md uppercase tracking-wider text-on-surface-variant">Size</h4>
              <div className="grid grid-cols-4 gap-xs">
                <button className="h-10 border border-outline-variant rounded flex items-center justify-center text-label-md hover:border-secondary transition-colors">XS</button>
                <button className="h-10 border-2 border-secondary rounded flex items-center justify-center text-label-md bg-secondary/5 font-bold">S</button>
                <button className="h-10 border border-outline-variant rounded flex items-center justify-center text-label-md hover:border-secondary transition-colors">M</button>
                <button className="h-10 border border-outline-variant rounded flex items-center justify-center text-label-md hover:border-secondary transition-colors">L</button>
                <button className="h-10 border border-outline-variant rounded flex items-center justify-center text-label-md hover:border-secondary transition-colors">XL</button>
                <button className="h-10 border border-outline-variant rounded flex items-center justify-center text-label-md hover:border-secondary transition-colors">2X</button>
              </div>
            </div>
            {/* Color Swatches */}
            <div className="mb-xl">
              <h4 className="text-label-md font-bold mb-md uppercase tracking-wider text-on-surface-variant">Colors</h4>
              <div className="flex flex-wrap gap-sm">
                <button className="w-8 h-8 rounded-full border border-outline-variant p-0.5 bg-on-surface ring-offset-2 ring-secondary ring-2"></button>
                <button className="w-8 h-8 rounded-full border border-outline-variant p-0.5 bg-white"></button>
                <button className="w-8 h-8 rounded-full border border-outline-variant p-0.5 bg-red-600"></button>
                <button className="w-8 h-8 rounded-full border border-outline-variant p-0.5 bg-blue-600"></button>
                <button className="w-8 h-8 rounded-full border border-outline-variant p-0.5 bg-emerald-700"></button>
                <button className="w-8 h-8 rounded-full border border-outline-variant p-0.5 bg-amber-400"></button>
              </div>
            </div>
            {/* Material */}
            <div className="mb-xl">
              <h4 className="text-label-md font-bold mb-md uppercase tracking-wider text-on-surface-variant">Material</h4>
              <div className="space-y-sm">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="text-body-md text-on-surface group-hover:text-secondary transition-colors">Supima Cotton</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                  <span className="text-body-md text-on-surface group-hover:text-secondary transition-colors">Bamboo Blend</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* PRODUCT GRID */}
        <section className="flex-1">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-md md:gap-grid-gutter">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Loading Indicator (Mobile) / Pagination (Desktop) */}
          <div className="mt-xl md:mt-2xl py-md md:py-0 flex justify-center items-center">
            {/* Mobile Bouncing Dots */}
            <div className="md:hidden flex items-center gap-2 text-on-surface-variant">
              <div className="w-2 h-2 rounded-full bg-secondary animate-bounce"></div>
              <div className="w-2 h-2 rounded-full bg-secondary animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 rounded-full bg-secondary animate-bounce [animation-delay:-0.3s]"></div>
            </div>
            
            {/* Desktop Pagination */}
            <div className="hidden md:flex gap-2">
              <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-on-surface text-white flex items-center justify-center font-bold">1</button>
              <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">2</button>
              <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">3</button>
              <span className="px-2">...</span>
              <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">8</button>
              <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
