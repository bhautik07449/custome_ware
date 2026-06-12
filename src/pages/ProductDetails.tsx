import { useState } from 'react';
import ImageGallery from '../components/product/ImageGallery';
import ColorSelector, { type ColorType } from '../components/product/ColorSelector';
import SizeSelector from '../components/product/SizeSelector';
import ProductAccordions from '../components/product/ProductAccordions';
import ProductTabs from '../components/product/ProductTabs';
import ProductInfo from '../components/product/ProductInfo';
import ProductActions from '../components/product/ProductActions';
import ProductBenefits from '../components/product/ProductBenefits';
import RelatedProducts from '../components/product/RelatedProducts';
import MobileStickyAction from '../components/product/MobileStickyAction';

export default function ProductDetails() {
  const [color, setColor] = useState<ColorType>({ name: 'Black', hex: '#111827' });
  const [selectedSize, setSelectedSize] = useState('M');

  const images = [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop'
  ];

  const availableColors = [
    { name: 'Black', hex: '#111827' },
    { name: 'White', hex: '#F3F4F6' },
    { name: 'Navy', hex: '#1E3A8A' },
    { name: 'Heather Gray', hex: '#9CA3AF' }
  ];

  const availableSizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="w-full pb-[140px] md:pb-0">
      <main className="pt-0 md:pt-8 lg:pt-32 pb-3xl max-w-7xl mx-auto px-0 md:px-grid-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 md:gap-2xl">
          
          <ImageGallery images={images} />

          <div className="lg:col-span-5 flex flex-col gap-lg md:gap-xl px-md md:px-0 pt-md md:pt-0">
            <ProductInfo />

            <ColorSelector 
              colors={availableColors} 
              selectedColor={color} 
              onSelectColor={setColor} 
            />

            <SizeSelector 
              sizes={availableSizes} 
              selectedSize={selectedSize} 
              onSelectSize={setSelectedSize} 
            />

            <ProductActions />
            <ProductBenefits />
          </div>
        </div>

        <ProductAccordions />
        <ProductTabs />
        <RelatedProducts />
      </main>

      <MobileStickyAction />
    </div>
  );
}
