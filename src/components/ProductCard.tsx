import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.sizes.length > 0) {
      addToCart(product, product.sizes[0], product.colors[0].label, 1);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  return (
    <div className="group flex flex-col product-card-hover luxury-shadow p-2 bg-surface cursor-pointer h-full">
      <Link to={`/products/${product.slug}`} className="relative aspect-[4/5] overflow-hidden bg-surface-container mb-4 block shrink-0">
        <img src={product.images[0]} alt={product.name} className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 absolute inset-0 z-20 ${product.images[1] ? 'group-hover:opacity-0' : ''}`} />
        {product.images[1] && <img src={product.images[1]} alt="Alternate" className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105 opacity-0 group-hover:opacity-100 absolute inset-0 z-10" />}
        
        <button onClick={handleQuickAdd} className="absolute bottom-4 right-4 bg-primary/90 text-on-primary p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 active:scale-90 z-20 shadow-lg rounded-full flex items-center justify-center hover:bg-tertiary hover:text-black">
          <span className="material-symbols-outlined text-[20px]">{added ? 'check' : 'add'}</span>
        </button>
      </Link>
      <Link to={`/products/${product.slug}`} className="flex justify-between items-start px-2 pb-2 flex-grow">
        <div className="overflow-hidden pr-2">
          <h3 className="font-label-caps text-[12px] font-bold text-primary truncate w-full">{product.name}</h3>
          <p className="font-label-caps text-[10px] text-secondary opacity-80 uppercase mt-1 truncate">{product.colors[0]?.label}</p>
        </div>
        <span className="font-label-caps text-[12px] font-bold text-primary shrink-0">${product.price.toFixed(2)}</span>
      </Link>
    </div>
  );
}
