import { getProductLink } from '../../utils/routes';
import { Link } from 'react-router-dom';

export default function RelatedProducts() {
  return (
    <section className="px-md md:px-0 mt-xl md:mt-3xl mb-[40px] md:mb-0">
      <h2 className="font-headline-md text-headline-md mb-2xl">Complete the Look</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-lg">
        {/* Related Product 1 */}
        <Link to={getProductLink('raw-edge-slim-jeans')} className="group flex flex-col gap-md">
          <div className="relative aspect-[3/4] rounded-xl bg-surface-container-low overflow-hidden border border-outline-variant/20">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop"
              alt="Raw Edge Slim Jeans"
            />
            <button className="absolute bottom-md right-md bg-surface p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
              <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
            </button>
          </div>
          <div>
            <h4 className="font-label-md text-label-md group-hover:text-secondary transition-colors">Raw Edge Slim Jeans</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">$89.00</p>
          </div>
        </Link>

        {/* Related Product 2 */}
        <Link to={getProductLink('essential-bomber-jacket')} className="group flex flex-col gap-md">
          <div className="relative aspect-[3/4] rounded-xl bg-surface-container-low overflow-hidden border border-outline-variant/20">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop"
              alt="Essential Bomber Jacket"
            />
            <button className="absolute bottom-md right-md bg-surface p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
              <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
            </button>
          </div>
          <div>
            <h4 className="font-label-md text-label-md group-hover:text-secondary transition-colors">Essential Bomber Jacket</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">$125.00</p>
          </div>
        </Link>

        {/* Related Product 3 */}
        <Link to={getProductLink('minimalist-field-watch')} className="group flex flex-col gap-md">
          <div className="relative aspect-[3/4] rounded-xl bg-surface-container-low overflow-hidden border border-outline-variant/20">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop"
              alt="Minimalist Field Watch"
            />
            <button className="absolute bottom-md right-md bg-surface p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
              <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
            </button>
          </div>
          <div>
            <h4 className="font-label-md text-label-md group-hover:text-secondary transition-colors">Minimalist Field Watch</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">$149.00</p>
          </div>
        </Link>

        {/* Related Product 4 */}
        <Link to={getProductLink('studio-leather-sneakers')} className="group flex flex-col gap-md">
          <div className="relative aspect-[3/4] rounded-xl bg-surface-container-low overflow-hidden border border-outline-variant/20">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop"
              alt="Studio Leather Sneakers"
            />
            <button className="absolute bottom-md right-md bg-surface p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
              <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
            </button>
          </div>
          <div>
            <h4 className="font-label-md text-label-md group-hover:text-secondary transition-colors">Studio Leather Sneakers</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">$110.00</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
