import { Card } from '../components/ui/Card';
import { Link } from 'react-router-dom';
import { PATHS } from '../utils/routes';

export default function Templates() {
  return (
    <div className="max-w-7xl mx-auto px-grid-margin py-xl fade-in">
      <div className="text-center mb-2xl">
        <h1 className="font-headline-md text-headline-lg font-bold mb-md text-on-surface ">Design Templates</h1>
        <p className="font-body-md text-body-lg text-on-surface-variant max-w-2xl mx-auto  ">
          Jumpstart your creativity with our premium, customizable templates. 
          Perfect for events, businesses, and personal brands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
        {[
          { title: 'Tech Startup', category: 'Business', color: 'bg-blue-500' },
          { title: 'Summer Festival', category: 'Events', color: 'bg-orange-500' },
          { title: 'Local Coffee Shop', category: 'Business', color: 'bg-amber-700' },
          { title: 'Esports Team', category: 'Gaming', color: 'bg-purple-600' },
          { title: 'Family Reunion', category: 'Events', color: 'bg-emerald-500' },
          { title: 'Marathon Finisher', category: 'Sports', color: 'bg-red-500' },
          { title: 'Retro 80s Club', category: 'Fashion', color: 'bg-pink-500' },
          { title: 'Minimalist Logo', category: 'Brand', color: 'bg-slate-800' },
        ].map((template, i) => (
          <Card key={i} interactive className="overflow-hidden group  p-0" style={{ animationDelay: `${(i + 1) * 50}ms` }}>
            <div className={`aspect-square ${template.color} flex flex-col items-center justify-center p-md text-white relative`}>
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="material-symbols-outlined text-[48px] mb-sm drop-shadow-md">palette</span>
              <span className="font-label-md text-center drop-shadow-md">{template.title}</span>
            </div>
            <div className="p-md flex justify-between items-center bg-surface">
              <span className="text-[12px] text-on-surface-variant uppercase tracking-wider font-bold">{template.category}</span>
              <Link to={PATHS.DESIGNER} className="text-secondary hover:underline text-[13px] font-bold">Use Template</Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
