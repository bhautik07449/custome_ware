import { PATHS } from '../../utils/routes';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';

const steps = [
  {
    num: '01',
    icon: 'checkroom',
    title: 'Choose Your Canvas',
    desc: 'Select from our range of premium T-shirts in various fits, weights, and sustainable fabrics.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    num: '02',
    icon: 'brush',
    title: 'Create Your Art',
    desc: 'Upload images, add typography, or use our library of graphic elements to design your masterpiece.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    num: '03',
    icon: 'preview',
    title: 'Preview in 3D',
    desc: 'See your design in a hyper-realistic 3D environment before committing to print.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    num: '04',
    icon: 'local_shipping',
    title: 'Order & Enjoy',
    desc: 'Checkout securely. We handle the craft and ship it directly to your door.',
    color: 'from-amber-500 to-amber-600',
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* Desktop How It Works */}
      <section className="py-3xl bg-primary text-on-primary overflow-hidden relative hidden md:block">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-7xl mx-auto px-grid-margin relative z-10">
          <div className="text-center mb-3xl reveal-up">
            <span className="text-secondary-fixed-dim font-label-md uppercase tracking-widest">Process</span>
            <h2 className="font-headline-lg text-headline-lg mt-base">Simple. Precise. Personal.</h2>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-4 gap-xl relative">
            {/* Connector line */}
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-white/20 hidden md:block pointer-events-none">
              <div className="h-full bg-white/40 draw-path" style={{ transformOrigin: 'left', transition: 'width 1.5s ease-out' }} />
            </div>

            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`flex flex-col items-center text-center space-y-md reveal-up stagger-${i + 1}`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-black/20`}>
                  <span className="material-symbols-outlined text-white text-[28px]">{step.icon}</span>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center text-[12px] font-bold text-white/70">
                  {i + 1}
                </div>
                <h3 className="font-headline-md text-headline-md">{step.title}</h3>
                <p className="text-on-primary/70 font-body-md text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-3xl text-center reveal-up">
            <Link
              to={PATHS.DESIGNER}
              className="inline-flex items-center gap-sm bg-white text-primary px-3xl py-md rounded-full font-label-md hover:bg-secondary hover:text-on-secondary transition-all shadow-lg active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">brush</span>
              Experience the Studio
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile How It Works */}
      <section className="px-md py-xl bg-surface-container md:hidden">
        <h2 className="font-headline-md text-headline-md mb-xl text-center reveal-up">How It Works</h2>
        <div className="flex flex-col gap-md">
          {steps.map((step, i) => (
            <Card
              key={step.num}
              className={`bg-surface p-xl rounded-2xl border-outline-variant/20 flex items-start gap-md reveal-up stagger-${i + 1}`}
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md`}>
                <span className="material-symbols-outlined text-white text-[20px]">{step.icon}</span>
              </div>
              <div>
                <span className="text-[11px] text-on-surface-variant font-bold uppercase tracking-widest">{step.num}</span>
                <h3 className="font-headline-md text-[18px] font-bold mb-xs">{step.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">{step.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
