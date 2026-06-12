import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/mockData';
import FiltersSidebar from '../components/shop/FiltersSidebar';
import Pagination from '../components/shop/Pagination';
import ShopMobileHeader from '../components/shop/ShopMobileHeader';
import ShopDesktopHeader from '../components/shop/ShopDesktopHeader';

export default function Shop() {
  return (
    <div className="w-full">
      <ShopMobileHeader />
      <ShopDesktopHeader />

      <div className="max-w-7xl mx-auto px-md md:px-grid-margin pb-3xl w-full flex flex-col lg:flex-row gap-grid-gutter">

        <FiltersSidebar />

        <section className="flex-1">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-md md:gap-grid-gutter">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination />
        </section>
      </div>
    </div>
  );
}
