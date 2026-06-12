export default function ShopMobileHeader() {
  return (
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
  );
}
