import { Link } from 'react-router-dom';

export default function HowItWorks() {
  return (
    <>
      {/* Desktop How It Works */}
      <section className="py-3xl bg-primary text-on-primary overflow-hidden relative hidden md:block">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-grid-margin relative z-10">
          <div className="text-center mb-3xl">
            <span className="text-secondary-fixed-dim font-label-md uppercase tracking-widest">Process</span>
            <h2 className="font-headline-lg text-headline-lg mt-base">Simple. Precise. Personal.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-xl">
            <div className="flex flex-col items-center text-center space-y-md">
              <div className="w-16 h-16 rounded-full border-2 border-on-primary/30 flex items-center justify-center font-headline-md text-headline-md text-on-primary">
                1
              </div>
              <h3 className="font-headline-md text-headline-md">Choose</h3>
              <p className="text-on-primary-container font-body-md">Select your preferred fit and sustainable fabric weight.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-md">
              <div className="w-16 h-16 rounded-full border-2 border-on-primary/30 flex items-center justify-center font-headline-md text-headline-md text-on-primary">
                2
              </div>
              <h3 className="font-headline-md text-headline-md">Customize</h3>
              <p className="text-on-primary-container font-body-md">Add art, text, or patterns using our pro-grade editor.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-md">
              <div className="w-16 h-16 rounded-full border-2 border-on-primary/30 flex items-center justify-center font-headline-md text-headline-md text-on-primary">
                3
              </div>
              <h3 className="font-headline-md text-headline-md">Preview</h3>
              <p className="text-on-primary-container font-body-md">See your design in hyper-realistic 3D environment.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-md">
              <div className="w-16 h-16 rounded-full border-2 border-on-primary/30 flex items-center justify-center font-headline-md text-headline-md text-on-primary">
                4
              </div>
              <h3 className="font-headline-md text-headline-md">Order</h3>
              <p className="text-on-primary-container font-body-md">Checkout securely and we handle the craft.</p>
            </div>
          </div>
          <div className="mt-3xl text-center">
            <Link to="/designer" className="inline-block bg-secondary text-on-primary px-3xl py-md rounded-full font-label-md text-label-md hover:brightness-110 transition-all">
              Experience the Studio
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile How It Works (Bento Pattern) */}
      <section className="px-md py-xl bg-surface-container md:hidden">
        <h2 className="font-headline-md text-headline-md mb-xl text-center">How It Works</h2>
        <div className="flex flex-col gap-md">
          <div className="bg-surface p-xl rounded-2xl border border-outline-variant/20 flex flex-col gap-md">
            <span className="text-display-xl font-display-xl text-secondary opacity-20">01</span>
            <h3 className="font-headline-md text-headline-md -mt-xl">Pick Your Canvas</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Select from our range of premium T-shirts, hoodies, and accessories in various colors and sizes.</p>
          </div>
          <div className="bg-surface p-xl rounded-2xl border border-outline-variant/20 flex flex-col gap-md">
            <span className="text-display-xl font-display-xl text-secondary opacity-20">02</span>
            <h3 className="font-headline-md text-headline-md -mt-xl">Create Your Art</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Upload images, add typography, or use our massive library of graphic elements to design your piece.</p>
          </div>
          <div className="bg-surface p-xl rounded-2xl border border-outline-variant/20 flex flex-col gap-md">
            <span className="text-display-xl font-display-xl text-secondary opacity-20">03</span>
            <h3 className="font-headline-md text-headline-md -mt-xl">Order &amp; Enjoy</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">We print your design using eco-friendly inks and ship it directly to your door in sustainable packaging.</p>
          </div>
        </div>
      </section>
    </>
  );
}
