export interface ColorType {
  name: string;
  hex: string;
}

interface ColorSelectorProps {
  colors: ColorType[];
  selectedColor: ColorType;
  onSelectColor: (color: ColorType) => void;
}

export default function ColorSelector({ colors, selectedColor, onSelectColor }: ColorSelectorProps) {
  return (
    <div className="flex flex-col gap-sm md:gap-md">
      <label className="font-label-md text-label-md text-on-surface-variant md:text-on-surface uppercase md:normal-case tracking-wider md:tracking-normal block">
        <span className="md:hidden">Select Color</span>
        <span className="hidden md:inline">Color: <span className="font-normal">{selectedColor.name}</span></span>
      </label>
      <div className="flex gap-md">
        {colors.map((c) => (
          <button
            key={c.name}
            aria-label={c.name}
            className={`w-12 h-12 md:w-10 md:h-10 rounded-full transition-all border ${
              selectedColor.name === c.name
                ? 'border-transparent ring-2 ring-primary ring-offset-2'
                : `border-outline-variant hover:border-primary`
            }`}
            style={{ backgroundColor: c.hex }}
            onClick={() => onSelectColor(c)}
          />
        ))}
      </div>
    </div>
  );
}
