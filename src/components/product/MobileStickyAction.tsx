import { PATHS } from '../../utils/routes';
import { Link } from 'react-router-dom';

export default function MobileStickyAction() {
  return (
    <div className="md:hidden fixed bottom-[72px] w-full bg-surface/90 backdrop-blur-lg border-t border-outline-variant/30 px-md py-md z-[60] pb-safe shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
      <div className="max-w-md mx-auto flex gap-md">
        <button aria-label="Add to Wishlist" className="w-14 h-14 flex items-center justify-center border border-outline-variant rounded-xl active:scale-95 transition-transform bg-surface">
          <span className="material-symbols-outlined text-on-surface">favorite</span>
        </button>
        <Link to={PATHS.DESIGNER} className="flex-1 bg-primary text-on-primary font-label-md text-label-md py-md flex items-center justify-center rounded-xl shadow-lg active:scale-[0.98] transition-all hover:bg-secondary">
          Customize Now
        </Link>
      </div>
    </div>
  );
}
