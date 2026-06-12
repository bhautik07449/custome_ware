export default function Pagination() {
  return (
    <div className="mt-xl md:mt-2xl py-md md:py-0 flex justify-center items-center">
      {/* Mobile Bouncing Dots */}
      <div className="md:hidden flex items-center gap-2 text-on-surface-variant">
        <div className="w-2 h-2 rounded-full bg-secondary animate-bounce"></div>
        <div className="w-2 h-2 rounded-full bg-secondary animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 rounded-full bg-secondary animate-bounce [animation-delay:-0.3s]"></div>
      </div>
      
      {/* Desktop Pagination */}
      <div className="hidden md:flex gap-2">
        <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="w-10 h-10 rounded-full bg-on-surface text-white flex items-center justify-center font-bold">1</button>
        <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">2</button>
        <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">3</button>
        <span className="px-2">...</span>
        <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">8</button>
        <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
