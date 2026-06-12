export interface CartItemType {
  id: string | number;
  name: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
  isCustom?: boolean;
}

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-md flex flex-row gap-md sm:gap-lg hover:shadow-lg hover:shadow-on-surface/5 transition-all duration-300 shadow-sm md:shadow-none">
      <div className="w-24 sm:w-32 h-24 sm:h-32 bg-surface-container-low rounded-lg flex-shrink-0 relative overflow-hidden">
        <img className="w-full h-full object-cover" alt={item.name} src={item.image} />
        {item.isCustom && <div className="absolute top-1 right-1 bg-secondary/90 text-on-secondary px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Custom</div>}
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-label-md md:font-headline-md text-label-md md:text-body-lg font-bold text-on-surface">{item.name}</h3>
            <p className="font-label-sm md:font-body-md text-label-sm text-on-surface-variant">Size: {item.size} • Color: {item.color}</p>
          </div>
          <span className="hidden md:inline font-headline-md text-body-lg font-bold text-secondary">${item.price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mt-sm md:mt-md">
          <div className="flex items-center gap-md border border-outline-variant rounded-full px-sm py-[2px]">
            <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant active:scale-75 transition-transform"><span className="material-symbols-outlined text-sm font-bold">remove</span></button>
            <span className="font-label-md text-label-md">{item.quantity}</span>
            <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant active:scale-75 transition-transform"><span className="material-symbols-outlined text-sm font-bold">add</span></button>
          </div>
          <span className="md:hidden font-headline-md text-label-md text-on-surface font-bold">${item.price.toFixed(2)}</span>
          <button className="hidden md:flex text-error font-label-md text-label-md items-center gap-xs hover:underline">
            <span className="material-symbols-outlined text-md">delete</span>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
