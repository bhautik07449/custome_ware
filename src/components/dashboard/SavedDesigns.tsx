import { PATHS } from '../../utils/routes';
import { Link } from 'react-router-dom';
import { SAVED_DESIGNS } from '../../data/mockData';

export default function SavedDesigns() {
  return (
    <section className="mb-3xl">
      <div className="flex justify-between items-center mb-lg">
        <h2 className="font-headline-md text-headline-md text-on-surface">Saved Designs</h2>
        <Link to={PATHS.DESIGNER} className="flex items-center gap-xs font-label-md text-label-md text-secondary hover:underline">
          <span className="material-symbols-outlined text-[18px]">add</span>
          New Design
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-grid-gutter">
        {SAVED_DESIGNS.map(design => (
          <div key={design.id} className="group relative bg-surface-container-low rounded-xl border border-outline-variant/30 overflow-hidden hover:shadow-lg transition-all">
            <div className="aspect-square bg-white flex items-center justify-center p-md">
              <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" alt={design.name} src={design.image} />
            </div>
            <div className="p-md">
              <p className="font-label-md text-label-md text-on-surface truncate">{design.name}</p>
              <p className="text-[12px] text-on-surface-variant">{design.lastEdited}</p>
            </div>
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-md transition-opacity">
              <button className="p-sm bg-white rounded-full text-primary hover:bg-secondary hover:text-white transition-colors">
                <span className="material-symbols-outlined">edit</span>
              </button>
              <button className="p-sm bg-white rounded-full text-primary hover:bg-secondary hover:text-white transition-colors">
                <span className="material-symbols-outlined">shopping_cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
