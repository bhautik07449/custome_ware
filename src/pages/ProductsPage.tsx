import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products as allProducts, type Product } from '../data/products';
import ProductCard from '../components/ProductCard';
import CustomSelect from '../components/CustomSelect';

// ── Extended catalog (cycle existing products for demo pagination feel) ──
const CATALOG: Product[] = [
  ...allProducts,
  ...allProducts.map((p) => ({ ...p, id: p.id + 100, slug: p.slug + '-v2', isNew: false })),
  ...allProducts.map((p) => ({ ...p, id: p.id + 200, slug: p.slug + '-v3', isNew: false })),
].slice(0, 24);

const CATEGORIES = ['T-Shirts', 'Hoodies', 'Outerwear', 'Bottoms'];
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const COLORS = [
  { label: 'Onyx Black', hex: '#1b1b1b' },
  { label: 'Stone White', hex: '#f9f9f9' },
  { label: 'Slate Grey', hex: '#3D3D3D' },
  { label: 'Desert Sand', hex: '#E8E4D9' },
  { label: 'Midnight Navy', hex: '#1A2A3A' },
];
const SORT_OPTIONS = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest Arrivals'];
const PAGE_SIZE = 8;

export default function ProductsPage() {
  // Filter state
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [activeSize, setActiveSize] = useState<string | null>(null);
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('Featured');
  const [page, setPage] = useState(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleCategory = (cat: string) =>
    setActiveCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );

  const filtered = useMemo(() => {
    let result = [...CATALOG];
    if (sortBy === 'Price: Low to High') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'Price: High to Low') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'Newest Arrivals') result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    return result;
  }, [sortBy]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const SidebarContent = () => (
    <div>
      <h2 className="font-label-caps text-label-caps mb-gutter opacity-40 uppercase tracking-widest">Filters</h2>

      {/* Category */}
      <div className="py-gutter border-b border-surface-container">
        <h3 className="font-label-caps text-label-caps mb-element-gap text-primary">Category</h3>
        <ul className="space-y-3">
          {CATEGORIES.map((cat) => (
            <li
              key={cat}
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => toggleCategory(cat)}
            >
              <span
                className={`w-3 h-3 border flex-shrink-0 flex items-center justify-center transition-all ${
                  activeCategories.includes(cat)
                    ? 'border-primary bg-primary'
                    : 'border-outline group-hover:border-primary'
                }`}
              >
                {activeCategories.includes(cat) && (
                  <span className="material-symbols-outlined text-on-primary text-[10px]">check</span>
                )}
              </span>
              <span
                className={`font-label-caps text-label-caps transition-colors ${
                  activeCategories.includes(cat) ? 'text-primary font-bold' : 'text-secondary group-hover:text-primary'
                }`}
              >
                {cat}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Size */}
      <div className="py-gutter border-b border-surface-container">
        <h3 className="font-label-caps text-label-caps mb-element-gap text-primary">Size</h3>
        <div className="grid grid-cols-3 gap-2">
          {SIZES.map((sz) => {
            const isSoldOut = sz === 'XXL';
            return (
              <button
                key={sz}
                disabled={isSoldOut}
                onClick={() => setActiveSize(activeSize === sz ? null : sz)}
                className={`border py-2 font-label-caps text-label-caps transition-all ${
                  isSoldOut
                    ? 'border-outline opacity-30 cursor-not-allowed line-through'
                    : activeSize === sz
                    ? 'border-primary bg-primary text-on-primary'
                    : 'border-outline hover:border-primary hover:bg-primary hover:text-on-primary'
                }`}
              >
                {sz}
              </button>
            );
          })}
        </div>
      </div>

      {/* Color */}
      <div className="py-gutter border-b border-surface-container">
        <h3 className="font-label-caps text-label-caps mb-element-gap text-primary">Color</h3>
        <div className="flex flex-wrap gap-3">
          {COLORS.map((c) => (
            <button
              key={c.hex}
              title={c.label}
              onClick={() => setActiveColor(activeColor === c.hex ? null : c.hex)}
              className={`w-6 h-6 rounded-full border border-outline transition-all ${
                activeColor === c.hex ? 'ring-2 ring-primary ring-offset-2' : 'hover:ring-1 hover:ring-black ring-offset-2'
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="py-gutter">
        <h3 className="font-label-caps text-label-caps mb-element-gap text-primary">Price Range</h3>
        <input
          type="range"
          min={0}
          max={500}
          defaultValue={500}
          className="w-full accent-black h-[2px] bg-surface-container rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between mt-2 font-label-caps text-[10px] text-secondary">
          <span>$0</span>
          <span>$500+</span>
        </div>
      </div>

    </div>
  );

  return (
    <div className="bg-background min-h-screen">
      <Helmet>
        <title>Shop All Products | KORZAE</title>
        <meta name="description" content="Browse the full KORZAE collection of heavyweight, structural textiles and modular uniform pieces." />
      </Helmet>

      {/* ── Mobile Filter Sidebar + Backdrop ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[59] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileFilterOpen(false)}
      />

      {/* Sidebar panel */}
      <div
        className={`fixed top-0 left-0 z-[60] h-full w-[80vw] max-w-xs bg-surface shadow-2xl transition-transform duration-500 ease-in-out md:hidden flex flex-col ${
          mobileFilterOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-outline-variant">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[20px]">tune</span>
            <span className="font-label-caps text-label-caps text-primary tracking-[0.2em]">FILTERS</span>
          </div>
          <button
            onClick={() => setMobileFilterOpen(false)}
            className="w-8 h-8 flex items-center justify-center border border-outline-variant hover:border-primary hover:bg-primary hover:text-on-primary transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Sidebar scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
          <SidebarContent />
        </div>

        {/* Sidebar footer */}
        <div className="px-6 py-4 border-t border-outline-variant">
          <button
            className="w-full bg-primary text-on-primary py-4 font-button-text text-button-text uppercase tracking-widest hover:opacity-90 transition-opacity"
            onClick={() => setMobileFilterOpen(false)}
          >
            Apply Filters
          </button>
          <button
            className="w-full mt-2 py-3 font-label-caps text-label-caps text-secondary tracking-widest hover:text-primary transition-colors"
            onClick={() => {
              setActiveCategories([]);
              setActiveSize(null);
              setActiveColor(null);
            }}
          >
            CLEAR ALL
          </button>
        </div>
      </div>

      <main className="max-w-[1440px] mx-auto flex px-container-margin pt-element-gap pb-section-gap gap-8">
        {/* ── Sidebar ── */}
        <aside className="w-64 hidden md:block flex-shrink-0 pr-8 sticky top-24 h-[calc(100vh-100px)] overflow-y-auto custom-scrollbar">
          <SidebarContent />
        </aside>

        {/* ── Product Grid Section ── */}
        <section className="flex-1 min-w-0">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-gutter gap-4">
            <div>
              <h1 className="font-headline-lg text-[32px] md:text-headline-lg text-primary">Shop All</h1>
              <p className="font-label-caps text-[11px] text-secondary mt-1 tracking-widest">
                SHOWING {paginated.length} OF {filtered.length} ITEMS
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
              {/* Mobile filter toggle */}
              <button
                className="md:hidden flex items-center gap-2 border border-outline-variant px-4 py-2 font-label-caps text-label-caps hover:border-primary transition-colors"
                onClick={() => setMobileFilterOpen(true)}
              >
                <span className="material-symbols-outlined text-[16px]">tune</span>
                FILTER
              </button>
              {/* Sort */}
              <CustomSelect
                value={sortBy}
                options={SORT_OPTIONS}
                onChange={(val) => { setSortBy(val); setPage(1); }}
                prefix="Sort By: "
              />
            </div>
          </div>

          {/* ── 4-Column Product Grid ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-gutter md:gap-y-12">
            {paginated.map((product) => {
              const baseProduct = allProducts.find(p => p.id === product.id % 100 || p.id === product.id) || product;
              const mappedProduct = {
                ...product,
                slug: baseProduct.slug || product.slug.replace(/-v[23]$/, '')
              };
              return <ProductCard key={product.id} product={mappedProduct} />;
            })}
          </div>

          {/* ── Pagination ── */}
          <div className="mt-section-gap flex justify-center items-center gap-8 border-t border-outline-variant pt-section-gap">
            <button
              onClick={() => { setPage((p) => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              disabled={page === 1}
              className={`font-label-caps text-label-caps flex items-center gap-2 transition-colors ${
                page === 1 ? 'text-secondary opacity-30 cursor-not-allowed' : 'text-secondary hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span> Previous
            </button>

            <div className="flex gap-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`font-label-caps text-label-caps transition-all ${
                    page === p
                      ? 'text-primary border-b border-primary'
                      : 'text-secondary hover:text-primary cursor-pointer'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <button
              onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              disabled={page === totalPages}
              className={`font-label-caps text-label-caps flex items-center gap-2 transition-colors ${
                page === totalPages ? 'text-secondary opacity-30 cursor-not-allowed' : 'text-primary hover:opacity-70'
              }`}
            >
              Next <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
