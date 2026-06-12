import { CART_ITEMS, UPSELL_ITEMS } from '../../data/mockData';
import CartItem from './CartItem';

export default function CartItemsStep() {
  return (
    <section className="step-content space-y-md fade-in">
      <header className="flex justify-between items-end mb-md">
        <div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Your Cart</h2>
          <p className="font-body-md text-body-md text-on-surface-variant md:hidden">2 items customized by you</p>
        </div>
        <span className="hidden md:inline font-label-md text-label-md text-on-surface-variant">2 Items</span>
      </header>

      <div className="space-y-md">
        {CART_ITEMS.map((item) => (
          <CartItem key={item.id} item={item as any} />
        ))}
      </div>

      <section className="pt-lg md:hidden">
        <h4 className="font-label-md text-label-md text-on-surface mb-md">Complete your kit</h4>
        <div className="flex gap-md overflow-x-auto hide-scrollbar pb-md -mx-md px-md">
          {UPSELL_ITEMS.map((item) => (
            <div key={item.id} className="bg-surface-container-high rounded-xl p-md min-w-[140px] flex flex-col gap-sm flex-shrink-0">
              <div className="w-full aspect-square bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant/20">
                <img className="w-full h-full object-cover" alt={item.name} src={item.image} />
              </div>
              <span className="font-label-sm text-label-sm text-on-surface block truncate">{item.name}</span>
              <span className="font-label-sm text-label-sm font-bold">${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-lowest border-t border-outline-variant/30 pt-lg space-y-sm md:hidden">
        <div className="flex justify-between font-body-md text-body-md">
          <span className="text-on-surface-variant">Subtotal</span>
          <span className="text-on-surface">$130.00</span>
        </div>
        <div className="flex justify-between font-body-md text-body-md">
          <span className="text-on-surface-variant">Shipping</span>
          <span className="text-on-surface font-label-md text-secondary uppercase">Free</span>
        </div>
        <div className="flex justify-between font-headline-md text-headline-md pt-md border-t border-outline-variant/10">
          <span className="text-on-surface">Total</span>
          <span className="text-on-surface">$130.00</span>
        </div>
      </section>
    </section>
  );
}
