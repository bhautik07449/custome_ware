import { Card } from '../ui/Card';

const FEATURES = [
  {
    icon: 'palette',
    title: 'Custom Colors',
    desc: 'Unlimited palette control for every thread and panel of your design.',
    gradient: 'from-blue-500/10 to-blue-600/5',
    iconBg: 'bg-blue-500/15 text-blue-600',
  },
  {
    icon: 'title',
    title: 'Add Text',
    desc: 'Premium typography engine with over 200 high-end fashion fonts.',
    gradient: 'from-purple-500/10 to-purple-600/5',
    iconBg: 'bg-purple-500/15 text-purple-600',
  },
  {
    icon: 'cloud_upload',
    title: 'Upload Images',
    desc: 'Instant AI-enhanced vectorization for your personal artwork and logos.',
    gradient: 'from-emerald-500/10 to-emerald-600/5',
    iconBg: 'bg-emerald-500/15 text-emerald-600',
  },
  {
    icon: 'local_shipping',
    title: 'Fast Delivery',
    desc: 'Worldwide express shipping with real-time tracking on every order.',
    gradient: 'from-amber-500/10 to-amber-600/5',
    iconBg: 'bg-amber-500/15 text-amber-600',
  },
];

export default function DesktopFeatures() {
  return (
    <section className="py-3xl bg-surface-container-low hidden md:block">
      <div className="max-w-7xl mx-auto px-grid-margin">
        <div className="text-center mb-3xl reveal-up">
          <span className="text-secondary font-label-md uppercase tracking-widest">Why Us</span>
          <h2 className="font-headline-lg text-headline-lg mt-base">Built for Creative Excellence</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
          {FEATURES.map((f, i) => (
            <Card
              key={f.title}
              interactive
              className={`bento-item bg-gradient-to-br ${f.gradient} bg-surface p-xl rounded-2xl flex flex-col gap-md reveal-up stagger-${i + 1} cursor-default`}
            >
              <div className={`w-12 h-12 rounded-xl ${f.iconBg} flex items-center justify-center`}>
                <span className="material-symbols-outlined text-[22px]">{f.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md">{f.title}</h3>
              <p className="text-on-surface-variant font-body-md text-sm">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
