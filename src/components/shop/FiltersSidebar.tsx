export default function FiltersSidebar() {
  return (
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
  );
}
