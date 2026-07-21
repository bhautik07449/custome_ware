import { useState, useRef, useEffect } from 'react';

interface CustomSelectProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  prefix?: string;
}

export default function CustomSelect({ value, options, onChange, prefix = '' }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2 bg-transparent border-none font-label-caps text-label-caps text-primary cursor-pointer focus:outline-none focus:ring-0 uppercase tracking-widest"
      >
        <span>{prefix}{value}</span>
        <span className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 min-w-[220px] bg-surface luxury-shadow border border-outline-variant z-50 animate-fade-in origin-top-right">
          <div className="flex flex-col py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`text-left px-4 py-3 font-label-caps text-label-caps uppercase tracking-widest transition-colors ${
                  value === option
                    ? 'bg-primary text-on-primary'
                    : 'text-secondary hover:bg-surface-container hover:text-primary'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
