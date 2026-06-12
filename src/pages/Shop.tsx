import { Link } from 'react-router-dom';

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
          <div className="flex gap-sm overflow-x-auto no-scrollbar py-1 -mx-md px-md">
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
            
            {/* Product Card 1 */}
            <div className="product-card group relative bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden flex flex-col transition-all duration-300 md:hover:shadow-lg shadow-sm md:shadow-none md:hover:-translate-y-1 active:scale-[0.98] md:active:scale-100">
              <div className="relative aspect-[3/4] bg-[#F9FAFB] overflow-hidden">
                <img alt="White Essential Tee" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAoMPsvXoxt7O2JUQHweWMlHcTMYQhn177IYT8wWJieBzKrckY8vlauDYlBhhan9etu8ZIzbWEL89OJzwMcZ1u6EUs1psXUFIhaaXi3SGpfWa5SLf7Pr33KGKP7TUa1QQBKLW742JxgVU5MqMN-hxNRyYvWaN2sRs8HJZtJcbK6sJhYf_34cPrxsQWwLWrVIzN5dN-mV5C0vXLaGVqHRVYE7CKwK-NmuNkusE-q_JJF9oWKXhjrZNt-lFO7gKokZEYfLxHq712tLI" />
                
                {/* Mobile Favorite Button */}
                <button className="md:hidden absolute top-2 right-2 p-2 bg-surface/80 backdrop-blur rounded-full shadow-sm active:scale-90 transition-transform">
                  <span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                </button>

                {/* Desktop Hover Action Overlay */}
                <div className="hidden md:flex action-overlay absolute inset-0 bg-on-surface/20 opacity-0 transition-all duration-300 flex-col items-center justify-end p-md translate-y-4">
                  <div className="w-full space-y-sm">
                    <button className="w-full py-3 bg-white text-on-surface font-label-md rounded-lg shadow-sm hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                      Quick View
                    </button>
                    <Link to="/designer" className="w-full py-3 bg-on-surface text-white font-label-md rounded-lg shadow-md hover:bg-secondary transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">palette</span>
                      Customize
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-3 md:p-md flex flex-col flex-1 gap-1 md:gap-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start md:mb-xs">
                  <p className="font-label-md text-label-md text-on-surface-variant truncate md:hidden">Essential Tee</p>
                  <h3 className="hidden md:block font-label-md text-on-surface">Essential Tee</h3>
                  <p className="font-label-md text-label-md md:font-bold text-on-surface">$29.00</p>
                </div>
                
                {/* Desktop Extras */}
                <div className="hidden md:flex items-center gap-1 mb-md">
                  <div className="flex text-amber-400">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>star</span>
                  </div>
                  <span className="text-label-sm text-on-surface-variant">(124)</span>
                </div>
                <div className="hidden md:flex mt-auto gap-2">
                  <span className="w-4 h-4 rounded-full bg-on-surface border border-outline-variant/50 cursor-pointer hover:ring-1 ring-secondary ring-offset-1"></span>
                  <span className="w-4 h-4 rounded-full bg-surface-container-high border border-outline-variant/50 cursor-pointer hover:ring-1 ring-secondary ring-offset-1"></span>
                </div>

                {/* Mobile Customize Button */}
                <Link to="/designer" className="md:hidden mt-2 w-full py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-1 active:scale-95 transition-transform">
                  <span className="material-symbols-outlined text-[16px]">edit</span>
                  Customize
                </Link>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="product-card group relative bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden flex flex-col transition-all duration-300 md:hover:shadow-lg shadow-sm md:shadow-none md:hover:-translate-y-1 active:scale-[0.98] md:active:scale-100">
              <div className="relative aspect-[3/4] bg-[#F9FAFB] overflow-hidden">
                <img alt="Classic Black Tee" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQNS9d2PXj9Xot099cALI5kQjBTCbR8rIToGQbAuGs_Kam56VVQ5T9L-ILbsnY1odZuy2DUzUb5YutjActnYo6eUYQ5begzUsdV_-mQpdv0gLFUZFTP3B8jkVj5z-4E-vl5Gharv6RXXtJRvHuvLuN89p4R-T9Vh_QlMDdoqoZYzrlDix4mwgdLnblz7SDIigUlMzmgZB_BaRerX5vESE_c1UlJ-_l2g1PBFuf_5gk-4gWvV3GzTaAOyYbaI87jMjHxiXO3PQy70I" />
                
                {/* Mobile Favorite Button */}
                <button className="md:hidden absolute top-2 right-2 p-2 bg-surface/80 backdrop-blur rounded-full shadow-sm active:scale-90 transition-transform">
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">favorite</span>
                </button>

                {/* Desktop Hover Action Overlay */}
                <div className="hidden md:flex action-overlay absolute inset-0 bg-on-surface/20 opacity-0 transition-all duration-300 flex-col items-center justify-end p-md translate-y-4">
                  <div className="w-full space-y-sm">
                    <button className="w-full py-3 bg-white text-on-surface font-label-md rounded-lg shadow-sm hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                      Quick View
                    </button>
                    <Link to="/designer" className="w-full py-3 bg-on-surface text-white font-label-md rounded-lg shadow-md hover:bg-secondary transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">palette</span>
                      Customize
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-3 md:p-md flex flex-col flex-1 gap-1 md:gap-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start md:mb-xs">
                  <p className="font-label-md text-label-md text-on-surface-variant truncate md:hidden">Premium Black</p>
                  <h3 className="hidden md:block font-label-md text-on-surface">Premium Black</h3>
                  <p className="font-label-md text-label-md md:font-bold text-on-surface">$34.00</p>
                </div>
                
                {/* Desktop Extras */}
                <div className="hidden md:flex items-center gap-1 mb-md">
                  <div className="flex text-amber-400">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>star_half</span>
                  </div>
                  <span className="text-label-sm text-on-surface-variant">(89)</span>
                </div>
                <div className="hidden md:flex mt-auto gap-2">
                  <span className="w-4 h-4 rounded-full bg-on-surface border border-outline-variant/50 cursor-pointer ring-1 ring-secondary ring-offset-1"></span>
                </div>

                {/* Mobile Customize Button */}
                <Link to="/designer" className="md:hidden mt-2 w-full py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-1 active:scale-95 transition-transform">
                  <span className="material-symbols-outlined text-[16px]">edit</span>
                  Customize
                </Link>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="product-card group relative bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden flex flex-col transition-all duration-300 md:hover:shadow-lg shadow-sm md:shadow-none md:hover:-translate-y-1 active:scale-[0.98] md:active:scale-100">
              <div className="relative aspect-[3/4] bg-[#F9FAFB] overflow-hidden">
                <img alt="Oversized Sage" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBow-HH6laHJOtN9zN5NchZ6CM8KwACYTuVCZfBceFlTl8JHTM03vkycBzDS0PYZq9tM8qX6tkYSrMhv3Sc27PyKkBP9Zh87j2waAyteKaxRWYEa_5CBmuCJAoBdhyMCHfknTj7KP1TJjE39I2pUcwKglm3dZaZnOsotfKhPsMabnDN10G90PgYpMlvGxbyhS-IbFrcd_AVfOu4wtpNlja9ARkAmlGYET_kxjEyFIVvQr3eUujH7J9GtattN1mw6D2czbyLvEPiXz4" />
                
                {/* Mobile Favorite Button */}
                <button className="md:hidden absolute top-2 right-2 p-2 bg-surface/80 backdrop-blur rounded-full shadow-sm active:scale-90 transition-transform">
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">favorite</span>
                </button>

                {/* Desktop Hover Action Overlay */}
                <div className="hidden md:flex action-overlay absolute inset-0 bg-on-surface/20 opacity-0 transition-all duration-300 flex-col items-center justify-end p-md translate-y-4">
                  <div className="w-full space-y-sm">
                    <button className="w-full py-3 bg-white text-on-surface font-label-md rounded-lg shadow-sm hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                      Quick View
                    </button>
                    <Link to="/designer" className="w-full py-3 bg-on-surface text-white font-label-md rounded-lg shadow-md hover:bg-secondary transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">palette</span>
                      Customize
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-3 md:p-md flex flex-col flex-1 gap-1 md:gap-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start md:mb-xs">
                  <p className="font-label-md text-label-md text-on-surface-variant truncate md:hidden">Oversized Sage</p>
                  <h3 className="hidden md:block font-label-md text-on-surface">Oversized Sage</h3>
                  <p className="font-label-md text-label-md md:font-bold text-on-surface">$42.00</p>
                </div>
                
                {/* Desktop Extras */}
                <div className="hidden md:flex items-center gap-1 mb-md">
                  <div className="flex text-amber-400">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <span className="text-label-sm text-on-surface-variant">(215)</span>
                </div>
                <div className="hidden md:flex mt-auto gap-2">
                  <span className="w-4 h-4 rounded-full bg-green-800 border border-outline-variant/50 cursor-pointer hover:ring-1 ring-secondary ring-offset-1"></span>
                  <span className="w-4 h-4 rounded-full bg-stone-300 border border-outline-variant/50 cursor-pointer hover:ring-1 ring-secondary ring-offset-1"></span>
                </div>

                {/* Mobile Customize Button */}
                <Link to="/designer" className="md:hidden mt-2 w-full py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-1 active:scale-95 transition-transform">
                  <span className="material-symbols-outlined text-[16px]">edit</span>
                  Customize
                </Link>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="product-card group relative bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden flex flex-col transition-all duration-300 md:hover:shadow-lg shadow-sm md:shadow-none md:hover:-translate-y-1 active:scale-[0.98] md:active:scale-100">
              <div className="relative aspect-[3/4] bg-[#F9FAFB] overflow-hidden">
                <img alt="Boxy Sand" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2wLe2cGUUO3gc6VOpW1Wpz0JjJlmgwDiLeiQwWZq8ZPVjgNjZ3peQii-PMZmGdkKKaKx3GDzKhjYUtZo2_ervnCEhOtr2xiPb6vthm5yMJrWKoi5gkQG8Lrg8hky9-BECnQtoQF4sKFbfGCOQNGIUHVzlLDL-sSp1vPSiBAr4AFRvMvMHfek-rZDoOUMEafZ8kARzV7KiaD_Rv-hGuoVdIih9DQ4PIBRYpILXuCjeFRHmGilZz-QMLn_ea3Kke8FxiiI8kvZqno4" />
                
                {/* Mobile Favorite Button */}
                <button className="md:hidden absolute top-2 right-2 p-2 bg-surface/80 backdrop-blur rounded-full shadow-sm active:scale-90 transition-transform">
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">favorite</span>
                </button>

                {/* Desktop Hover Action Overlay */}
                <div className="hidden md:flex action-overlay absolute inset-0 bg-on-surface/20 opacity-0 transition-all duration-300 flex-col items-center justify-end p-md translate-y-4">
                  <div className="w-full space-y-sm">
                    <button className="w-full py-3 bg-white text-on-surface font-label-md rounded-lg shadow-sm hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                      Quick View
                    </button>
                    <Link to="/designer" className="w-full py-3 bg-on-surface text-white font-label-md rounded-lg shadow-md hover:bg-secondary transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">palette</span>
                      Customize
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-3 md:p-md flex flex-col flex-1 gap-1 md:gap-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start md:mb-xs">
                  <p className="font-label-md text-label-md text-on-surface-variant truncate md:hidden">Boxy Sand</p>
                  <h3 className="hidden md:block font-label-md text-on-surface">Boxy Sand</h3>
                  <p className="font-label-md text-label-md md:font-bold text-on-surface">$39.00</p>
                </div>
                
                {/* Desktop Extras */}
                <div className="hidden md:flex items-center gap-1 mb-md">
                  <div className="flex text-amber-400">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>star</span>
                  </div>
                  <span className="text-label-sm text-on-surface-variant">(56)</span>
                </div>
                <div className="hidden md:flex mt-auto gap-2">
                  <span className="w-4 h-4 rounded-full bg-amber-100 border border-outline-variant/50 cursor-pointer hover:ring-1 ring-secondary ring-offset-1"></span>
                </div>

                {/* Mobile Customize Button */}
                <Link to="/designer" className="md:hidden mt-2 w-full py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-1 active:scale-95 transition-transform">
                  <span className="material-symbols-outlined text-[16px]">edit</span>
                  Customize
                </Link>
              </div>
            </div>

            {/* Product Card 5 */}
            <div className="product-card group relative bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden flex flex-col transition-all duration-300 md:hover:shadow-lg shadow-sm md:shadow-none md:hover:-translate-y-1 active:scale-[0.98] md:active:scale-100">
              <div className="relative aspect-[3/4] bg-[#F9FAFB] overflow-hidden">
                <img alt="Heather Grey Sport" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl60ieMtpXDe9rPmAPFRZgoe5P_RMzY36MUxIy2Vg4K7ySHvx_oc7I_85m6PZsXh5C_OHoR0DxgpxqNBOKvOMbJ7j62bST2onjnhIVK43EjefhogSF7TVWPCNHW0EBdAz3o3k6gMGI3gQOkI6iPZDg3dbPWOFgKrKx2ulEc1aGXtiXtXJcdBfUW8VRxqmZnzdWibWQj3pGzxifXAHpx4a4sVBhga0RrVqaD_tbMZ0Lha7Wkz7YJlY7trSlUlyuOTE7pdbN_Fhe4ZY" />
                
                {/* Mobile Favorite Button */}
                <button className="md:hidden absolute top-2 right-2 p-2 bg-surface/80 backdrop-blur rounded-full shadow-sm active:scale-90 transition-transform">
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">favorite</span>
                </button>

                {/* Desktop Hover Action Overlay */}
                <div className="hidden md:flex action-overlay absolute inset-0 bg-on-surface/20 opacity-0 transition-all duration-300 flex-col items-center justify-end p-md translate-y-4">
                  <div className="w-full space-y-sm">
                    <button className="w-full py-3 bg-white text-on-surface font-label-md rounded-lg shadow-sm hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                      Quick View
                    </button>
                    <Link to="/designer" className="w-full py-3 bg-on-surface text-white font-label-md rounded-lg shadow-md hover:bg-secondary transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">palette</span>
                      Customize
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-3 md:p-md flex flex-col flex-1 gap-1 md:gap-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start md:mb-xs">
                  <p className="font-label-md text-label-md text-on-surface-variant truncate md:hidden">Heather Grey</p>
                  <h3 className="hidden md:block font-label-md text-on-surface">Heather Grey Sport</h3>
                  <p className="font-label-md text-label-md md:font-bold text-on-surface">$32.00</p>
                </div>
                
                {/* Desktop Extras */}
                <div className="hidden md:flex items-center gap-1 mb-md">
                  <div className="flex text-amber-400">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <span className="text-label-sm text-on-surface-variant">(41)</span>
                </div>
                <div className="hidden md:flex mt-auto gap-2">
                  <span className="w-4 h-4 rounded-full bg-slate-300 border border-outline-variant/50 cursor-pointer hover:ring-1 ring-secondary ring-offset-1"></span>
                </div>

                {/* Mobile Customize Button */}
                <Link to="/designer" className="md:hidden mt-2 w-full py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-1 active:scale-95 transition-transform">
                  <span className="material-symbols-outlined text-[16px]">edit</span>
                  Customize
                </Link>
              </div>
            </div>

            {/* Product Card 6 */}
            <div className="product-card group relative bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden flex flex-col transition-all duration-300 md:hover:shadow-lg shadow-sm md:shadow-none md:hover:-translate-y-1 active:scale-[0.98] md:active:scale-100">
              <div className="relative aspect-[3/4] bg-[#F9FAFB] overflow-hidden">
                <img alt="Midnight Navy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC23JJF9ZlbMTr9XYM6D7W8qOy90AZtW2SrOVafv1OrdrbrDzZts1w0yan43-Oh9yMP9o0ckMysIa8ZQuZwt7H-tMCXw-o-a2PhjLM0C_mnajWAJFcYAxiXrF1A6G9ijOo1mjGXzLyMlt4brZzpeW_xel2lD3LfNw7fR6JJ2x6HyrvXX_QDeelhp6hRVL55rGVXozQvVXL6-Kn6cVUFa2FgNBKblgd6UMhP9cqaxGFyEQMoxsI3zSXfG3sHTvupi9hVuozTmGK-bX4" />
                
                {/* Mobile Favorite Button */}
                <button className="md:hidden absolute top-2 right-2 p-2 bg-surface/80 backdrop-blur rounded-full shadow-sm active:scale-90 transition-transform">
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">favorite</span>
                </button>

                {/* Desktop Hover Action Overlay */}
                <div className="hidden md:flex action-overlay absolute inset-0 bg-on-surface/20 opacity-0 transition-all duration-300 flex-col items-center justify-end p-md translate-y-4">
                  <div className="w-full space-y-sm">
                    <button className="w-full py-3 bg-white text-on-surface font-label-md rounded-lg shadow-sm hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                      Quick View
                    </button>
                    <Link to="/designer" className="w-full py-3 bg-on-surface text-white font-label-md rounded-lg shadow-md hover:bg-secondary transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">palette</span>
                      Customize
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-3 md:p-md flex flex-col flex-1 gap-1 md:gap-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start md:mb-xs">
                  <p className="font-label-md text-label-md text-on-surface-variant truncate md:hidden">Midnight Navy</p>
                  <h3 className="hidden md:block font-label-md text-on-surface">Midnight Navy</h3>
                  <p className="font-label-md text-label-md md:font-bold text-on-surface">$34.00</p>
                </div>
                
                {/* Desktop Extras */}
                <div className="hidden md:flex items-center gap-1 mb-md">
                  <div className="flex text-amber-400">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>star</span>
                  </div>
                  <span className="text-label-sm text-on-surface-variant">(112)</span>
                </div>
                <div className="hidden md:flex mt-auto gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-950 border border-outline-variant/50 cursor-pointer hover:ring-1 ring-secondary ring-offset-1"></span>
                </div>

                {/* Mobile Customize Button */}
                <Link to="/designer" className="md:hidden mt-2 w-full py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-1 active:scale-95 transition-transform">
                  <span className="material-symbols-outlined text-[16px]">edit</span>
                  Customize
                </Link>
              </div>
            </div>

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
