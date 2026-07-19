import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';

export default function SearchPage() {
  const [query, setQuery] = useState('');

  // Filter products based on query matching name or category
  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    
    const lowerQuery = query.toLowerCase();
    return products.filter((product) => 
      product.name.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  return (
    <div className="bg-surface min-h-screen pt-32 pb-section-gap">
      <Helmet>
        <title>Search | KORZAE</title>
        <meta name="description" content="Search the KORZAE catalog for architectural streetwear." />
      </Helmet>

      <div className="max-w-[1440px] mx-auto px-container-margin">
        <h1 className="font-display-lg text-[40px] tracking-tighter text-primary mb-8 text-center">
          Search
        </h1>
        
        {/* ── Search Input ── */}
        <div className="max-w-2xl mx-auto relative mb-16">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary">
            search
          </span>
          <input
            type="text"
            placeholder="Search products, categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="korzae-input pl-12 py-4 font-body-md text-[16px]"
            autoFocus
          />
        </div>

        {/* ── Results ── */}
        {query.trim() && (
          <div className="mb-8 font-label-caps text-[13px] text-secondary tracking-widest text-center">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'RESULT' : 'RESULTS'} FOR "{query.toUpperCase()}"
          </div>
        )}

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-gutter gap-y-12">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.slug}`}
                className="group flex flex-col cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low mb-element-gap">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0 absolute inset-0 z-10"
                  />
                  {product.images[1] && (
                    <img
                      src={product.images[1]}
                      alt={`${product.name} Alternate`}
                      className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105 absolute inset-0 z-0"
                    />
                  )}
                </div>

                {/* Product info */}
                <div className="flex justify-between items-start mt-2">
                  <div>
                    <h3 className="font-body-md text-[16px] font-bold text-primary">{product.name}</h3>
                    <p className="font-label-caps text-[13px] text-secondary opacity-80 uppercase mt-1">
                      {product.colors[0].label}
                    </p>
                  </div>
                  <span className="font-body-md text-[16px] font-bold text-primary">${product.price}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : query.trim() ? (
          <div className="text-center py-20 flex flex-col items-center">
            <span className="material-symbols-outlined text-[64px] text-outline-variant mb-6">
              search_off
            </span>
            <p className="font-body-md text-[17px] text-secondary max-w-md">
              We couldn't find any products matching your search. Please check the spelling or try a broader term.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
