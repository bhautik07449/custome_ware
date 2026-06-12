interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSelectSize: (size: string) => void;
}

export default function SizeSelector({ sizes, selectedSize, onSelectSize }: SizeSelectorProps) {
  return (
    <div className="flex flex-col gap-sm md:gap-md">
      <div className="flex justify-between items-center">
        <label className="font-label-md text-label-md text-on-surface-variant md:text-on-surface uppercase md:normal-case tracking-wider md:tracking-normal block">Select Size</label>
        <button className="text-secondary font-label-md md:font-label-sm underline md:no-underline md:hover:underline">Size Guide</button>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 gap-sm">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelectSize(size)}
            className={`py-md rounded-lg font-label-md text-label-md transition-colors border ${
              selectedSize === size
                ? 'border-2 border-primary bg-surface-container-highest'
                : 'border-outline-variant hover:bg-surface-container md:hover:bg-transparent md:hover:border-primary'
            } ${size === 'XXL' ? 'hidden md:block' : ''}`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
