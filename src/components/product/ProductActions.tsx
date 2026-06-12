import { Link } from 'react-router-dom';

export default function ProductActions() {
  return (
    <div className="hidden md:flex flex-col gap-md mt-lg">
      <button className="bg-primary text-on-primary py-lg rounded-xl font-label-md text-label-md flex items-center justify-center gap-md hover:opacity-90 transition-all active:scale-[0.98]">
        <span className="material-symbols-outlined">shopping_bag</span>
        Add to Cart
      </button>
      <Link
        to="/designer"
        className="border-2 border-primary text-primary py-lg rounded-xl font-label-md text-label-md flex items-center justify-center gap-md hover:bg-surface-container-low transition-all active:scale-[0.98]"
      >
        <span className="material-symbols-outlined">auto_fix_high</span>
        Customize in Studio
      </Link>
    </div>
  );
}
