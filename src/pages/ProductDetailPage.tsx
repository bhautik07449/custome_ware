import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getProductBySlug, getRelatedProducts } from '../data/products';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = getProductBySlug(slug || '');

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'care'>('details');

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-container-margin">
        <span className="material-symbols-outlined text-[64px] text-secondary">
          inventory_2
        </span>
        <h1 className="font-headline-lg text-headline-lg text-primary">Product Not Found</h1>
        <Link
          to="/products"
          className="font-label-caps text-label-caps border-b border-primary pb-1 hover:text-secondary transition-colors"
        >
          BACK TO ALL PRODUCTS
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product, 4);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <div className="min-h-screen pb-32 md:pb-0">
      <Helmet>
        <title>{product.name} | KORZAE</title>
        <meta name="description" content={product.description} />
      </Helmet>

      {/* ── Breadcrumb ── */}
      <div className="px-container-margin py-4 max-w-[1440px] mx-auto">
        <nav className="flex items-center gap-2 font-label-caps text-[10px] text-secondary tracking-widest">
          <Link to="/" className="hover:text-primary transition-colors">HOME</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <Link to="/products" className="hover:text-primary transition-colors">PRODUCTS</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary">{product.name.toUpperCase()}</span>
        </nav>
      </div>

      {/* ── Main Product Section ── */}
      <section className="max-w-[1440px] mx-auto px-container-margin py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

          {/* Left — Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="aspect-[4/5] overflow-hidden bg-surface-container relative group">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-primary text-on-primary font-label-caps text-[10px] tracking-widest px-3 py-1">
                  NEW ARRIVAL
                </span>
              )}
              {/* Wishlist */}
              <button
                onClick={() => setWishlist(!wishlist)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow transition-transform active:scale-90"
              >
                <span
                  className="material-symbols-outlined text-primary text-[20px]"
                  style={wishlist ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  favorite
                </span>
              </button>
            </div>

            {/* Thumbnails strip */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 aspect-square overflow-hidden border-2 transition-all ${
                      selectedImage === i ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right — Product Info */}
          <div className="flex flex-col gap-6">
            {/* Category & SKU */}
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-[12px] text-secondary tracking-widest font-bold">
                {product.category}
              </span>
              <span className="font-label-caps text-[12px] text-secondary tracking-widest font-bold">
                {product.sku}
              </span>
            </div>

            {/* Name & Price */}
            <div>
              <h1 className="font-headline-lg text-headline-lg tracking-tighter text-primary mb-3">
                {product.name}
              </h1>
              <p className="font-display-lg text-[36px] leading-none text-primary">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div className="w-full h-px bg-outline-variant" />

            {/* Color Selector */}
            <div>
              <p className="font-label-caps text-[14px] text-secondary tracking-widest mb-4">
                COLOR: <span className="text-primary font-bold">{product.colors[selectedColor].label.toUpperCase()}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color, i) => (
                  <button
                    key={color.hex}
                    title={color.label}
                    onClick={() => setSelectedColor(i)}
                    className={`w-9 h-9 rounded-full border-2 transition-all active:scale-90 ${
                      selectedColor === i
                        ? 'border-primary scale-110'
                        : 'border-outline-variant hover:border-primary'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <p className="font-label-caps text-[14px] text-secondary tracking-widest">
                  SIZE{selectedSize ? `: ` : ''}<span className="text-primary font-bold">{selectedSize || ''}</span>
                </p>
                <button className="font-label-caps text-[12px] text-secondary underline hover:text-primary transition-colors">
                  SIZE GUIDE
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border font-label-caps text-[14px] font-bold tracking-widest transition-all active:scale-95 ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-on-primary'
                        : 'border-outline-variant text-secondary hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="font-label-caps text-[10px] text-error mt-2">
                  Please select a size
                </p>
              )}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mt-2">
              <p className="font-label-caps text-[14px] text-secondary tracking-widest">QTY:</p>
              <div className="flex items-center border border-outline-variant">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-surface-container transition-colors active:scale-90"
                >
                  <span className="material-symbols-outlined text-[18px]">remove</span>
                </button>
                <span className="w-12 text-center font-label-caps text-[16px] font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-surface-container transition-colors active:scale-90"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`w-full py-5 font-label-caps text-label-caps tracking-widest transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 ${
                  addedToCart
                    ? 'bg-green-600 text-white'
                    : !selectedSize
                    ? 'bg-surface-container-high text-secondary cursor-not-allowed'
                    : 'bg-primary text-on-primary hover:bg-tertiary'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {addedToCart ? 'check_circle' : 'shopping_bag'}
                </span>
                {addedToCart ? 'ADDED TO BAG' : 'ADD TO BAG'}
              </button>
              <button
                onClick={() => setWishlist(!wishlist)}
                className="w-full py-4 border border-outline-variant font-label-caps text-label-caps text-secondary tracking-widest hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]" style={wishlist ? { fontVariationSettings: "'FILL' 1" } : {}}>
                  favorite
                </span>
                {wishlist ? 'SAVED TO WISHLIST' : 'ADD TO WISHLIST'}
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-outline-variant">
              {[
                { icon: 'local_shipping', label: 'Free Shipping', sub: 'Over $150' },
                { icon: 'autorenew', label: 'Free Returns', sub: '30 Days' },
                { icon: 'verified', label: 'Authentic', sub: 'Guaranteed' },
              ].map((b) => (
                <div key={b.label} className="flex flex-col items-center text-center gap-1">
                  <span className="material-symbols-outlined text-[22px] text-secondary">{b.icon}</span>
                  <p className="font-label-caps text-[9px] text-primary tracking-widest">{b.label}</p>
                  <p className="font-label-caps text-[9px] text-secondary">{b.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Description & Details Tabs ── */}
      <section className="max-w-[1440px] mx-auto px-container-margin py-12 border-t border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Description */}
          <div>
            <h2 className="font-label-caps text-label-caps text-secondary tracking-widest mb-4">
              ABOUT THIS PIECE
            </h2>
            <p className="font-body-md text-body-md text-on-surface leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Tabbed details */}
          <div>
            <div className="flex gap-8 border-b border-outline-variant mb-6">
              {(['details', 'care'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`font-label-caps text-label-caps tracking-widest pb-3 border-b-2 transition-all -mb-px ${
                    activeTab === tab
                      ? 'border-primary text-primary'
                      : 'border-transparent text-secondary hover:text-primary'
                  }`}
                >
                  {tab === 'details' ? 'PRODUCT DETAILS' : 'CARE GUIDE'}
                </button>
              ))}
            </div>
            <ul className="space-y-3">
              {(activeTab === 'details' ? product.details : product.care).map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body-md text-[14px] text-secondary">
                  <span className="material-symbols-outlined text-[14px] text-primary mt-1 flex-shrink-0">
                    arrow_forward
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Related Products ── */}
      {related.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-container-margin py-12 border-t border-outline-variant">
          <div className="flex justify-between items-end mb-10">
            <h2 className="font-headline-lg text-headline-lg tracking-tighter text-primary">
              You May Also Like
            </h2>
            <Link
              to="/products"
              className="font-label-caps text-label-caps border-b border-primary pb-1 hover:text-secondary transition-colors hidden md:block"
            >
              VIEW ALL
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {related.map((rp) => (
              <Link
                key={rp.id}
                to={`/products/${rp.slug}`}
                className="group cursor-pointer block"
                onClick={() => { setSelectedSize(null); setSelectedImage(0); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                <div className="aspect-[4/5] overflow-hidden bg-surface-container mb-4 product-card-hover luxury-shadow transition-all duration-300">
                  <img
                    src={rp.images[0]}
                    alt={rp.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="font-label-caps text-[10px] text-secondary mb-1 tracking-widest">{rp.category}</p>
                <h3 className="font-body-md text-[14px] font-semibold text-primary truncate">{rp.name}</h3>
                <p className="font-label-caps text-label-caps text-primary mt-1">${rp.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
