import { useState, useRef, useEffect } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const categories = ['OUTERWEAR', 'TOPS', 'BOTTOMS', 'ACCESSORIES'];
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const colorOptions = [
  { label: 'GOLD', value: '#D4AF37', ring: true },
  { label: 'BLACK', value: '#000000', ring: false },
  { label: 'WHITE', value: '#ffffff', ring: false },
  { label: 'SAND', value: '#f5f5dc', ring: false },
];

export default function ShopPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('OUTERWEAR');
  const [selectedSize, setSelectedSize] = useState<string | null>('L');
  const [selectedColor, setSelectedColor] = useState<string | null>('#D4AF37');
  const [searchQuery, setSearchQuery] = useState('');
  const sheetRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when filter sheet is open
  useEffect(() => {
    document.body.style.overflow = filterOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [filterOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* ── Mobile Top Bar (search + favorites) ── */}
      <div className="flex justify-between items-center px-container-margin py-4 w-full border-b border-outline-variant md:hidden sticky top-[65px] bg-surface/90 backdrop-blur-md z-40">
        <button className="text-primary hover:opacity-70 transition-opacity active:scale-95">
          <span className="material-symbols-outlined">search</span>
        </button>
        <h2 className="font-label-caps text-[13px] tracking-[0.25em] text-primary">SHOP</h2>
        <button className="text-primary hover:opacity-70 transition-opacity active:scale-95">
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </div>

      <main className="min-h-screen pb-32 md:pb-0">
        {/* ── Search & Sort Bar ── */}
        <section className="px-container-margin py-6 flex flex-col gap-4 max-w-[1440px] mx-auto">
          <div className="relative w-full">
            <input
              className="w-full bg-surface-container-low border-none border-b border-primary py-3 px-4 font-label-caps text-label-caps tracking-widest focus:ring-0 focus:border-black transition-all outline-none"
              placeholder="SEARCH COLLECTION"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary text-[18px]">
              search
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-outline-variant pt-4">
            <button
              className="flex items-center gap-2 group"
              onClick={() => setFilterOpen(true)}
            >
              <span className="material-symbols-outlined text-primary">tune</span>
              <span className="font-label-caps text-label-caps tracking-widest text-primary group-hover:opacity-70 transition-opacity">
                FILTERS
              </span>
            </button>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="font-label-caps text-label-caps tracking-widest text-secondary">SORT BY: RELEVANCE</span>
              <span className="material-symbols-outlined text-secondary text-[18px]">expand_more</span>
            </div>
          </div>
        </section>

        {/* ── Active Filter Chips ── */}
        <section className="px-container-margin pb-4 flex gap-2 overflow-x-auto no-scrollbar max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-full whitespace-nowrap">
            <span className="font-label-caps text-[10px] tracking-widest">{selectedCategory}</span>
            <span className="material-symbols-outlined text-[14px]">close</span>
          </div>
          <div className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-full whitespace-nowrap">
            <span className="font-label-caps text-[10px] tracking-widest">SIZE: {selectedSize}</span>
            <span className="material-symbols-outlined text-[14px]">close</span>
          </div>
          <button
            className="flex items-center gap-2 bg-surface-container-high text-primary px-4 py-2 rounded-full whitespace-nowrap"
            onClick={() => { setSelectedCategory('OUTERWEAR'); setSelectedSize('L'); setSelectedColor('#D4AF37'); }}
          >
            <span className="font-label-caps text-[10px] tracking-widest">CLEAR ALL</span>
          </button>
        </section>

        {/* ── Product Grid ── */}
        <section className="px-container-margin grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-gutter max-w-[1440px] mx-auto">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

        {/* ── Load More ── */}
        <section className="mt-section-gap px-container-margin flex flex-col items-center gap-4 max-w-[1440px] mx-auto pb-section-gap">
          <button className="w-full max-w-xs bg-primary text-on-primary font-button-text text-button-text py-4 tracking-widest active:scale-95 transition-transform hover:bg-tertiary transition-colors">
            LOAD MORE
          </button>
          <p className="font-label-caps text-[10px] text-secondary tracking-widest uppercase">
            Showing {filtered.length} of 48 items
          </p>
          <div className="w-full max-w-[200px] h-[1px] bg-outline-variant relative">
            <div className="absolute top-0 left-0 h-full bg-primary" style={{ width: `${(filtered.length / 48) * 100}%` }} />
          </div>
        </section>
      </main>

      {/* ── Filter Overlay ── */}
      <div
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 ${
          filterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setFilterOpen(false)}
      />

      {/* ── Bottom Sheet Filter ── */}
      <div
        ref={sheetRef}
        className={`bottom-sheet fixed bottom-0 left-0 right-0 bg-surface z-[70] rounded-t-xl px-container-margin pt-4 pb-12 max-h-[85vh] overflow-y-auto ${
          filterOpen ? 'open' : ''
        }`}
      >
        {/* Drag Handle */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-1 bg-outline-variant rounded-full" />
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile tracking-tighter">FILTERS</h2>
          <button
            className="font-label-caps text-label-caps text-secondary underline"
            onClick={() => { setSelectedCategory('OUTERWEAR'); setSelectedSize('L'); setSelectedColor('#D4AF37'); }}
          >
            CLEAR ALL
          </button>
        </div>

        <div className="flex flex-col gap-10">
          {/* Categories */}
          <div className="flex flex-col gap-4">
            <h3 className="font-label-caps text-label-caps tracking-widest text-secondary">CATEGORIES</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 border font-label-caps text-[10px] tracking-widest transition-all ${
                    selectedCategory === cat
                      ? 'border-primary bg-primary text-on-primary'
                      : 'border-outline-variant hover:border-primary text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="flex flex-col gap-4">
            <h3 className="font-label-caps text-label-caps tracking-widest text-secondary">PRICE RANGE</h3>
            <div className="px-2">
              <input
                className="w-full accent-black bg-surface-container-high h-1 rounded-full appearance-none"
                type="range"
                min={0}
                max={1000}
                defaultValue={500}
              />
              <div className="flex justify-between mt-2 font-label-caps text-[10px] text-primary">
                <span>$0</span>
                <span>$1000+</span>
              </div>
            </div>
          </div>

          {/* Colors */}
          <div className="flex flex-col gap-4">
            <h3 className="font-label-caps text-label-caps tracking-widest text-secondary">COLORS</h3>
            <div className="flex gap-4 flex-wrap">
              {colorOptions.map((c) => (
                <button
                  key={c.value}
                  className="group flex flex-col items-center gap-2"
                  onClick={() => setSelectedColor(c.value)}
                >
                  <div
                    className={`w-8 h-8 rounded-full border border-outline-variant transition-all ${
                      selectedColor === c.value ? 'ring-2 ring-offset-2 ring-black scale-110' : ''
                    }`}
                    style={{ backgroundColor: c.value }}
                  />
                  <span className={`font-label-caps text-[9px] ${selectedColor === c.value ? 'text-primary font-bold' : 'text-secondary'}`}>
                    {c.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="flex flex-col gap-4">
            <h3 className="font-label-caps text-label-caps tracking-widest text-secondary">SIZE</h3>
            <div className="grid grid-cols-4 gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`py-3 border font-label-caps text-[10px] transition-all ${
                    selectedSize === s
                      ? 'border-primary bg-primary text-on-primary'
                      : 'border-outline-variant text-secondary hover:border-primary'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <button
          className="w-full bg-primary text-on-primary font-button-text text-button-text py-5 mt-10 tracking-widest hover:bg-tertiary transition-colors"
          onClick={() => setFilterOpen(false)}
        >
          SHOW {filtered.length} RESULTS
        </button>
      </div>
    </>
  );
}
