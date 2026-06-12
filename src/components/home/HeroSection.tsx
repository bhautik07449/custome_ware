import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <>
      {/* Desktop Hero Section */}
      <section className="relative min-h-[921px] hidden md:flex items-center overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-grid-margin grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center relative z-10">
          <div className="space-y-xl animate-fade-in">
            <h1 className="font-display-xl text-display-xl tracking-tight leading-none">
              Design Your <br />
              <span className="text-secondary">Perfect</span> T-Shirt
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Elevate your personal style with our studio-grade customization tools. Create premium, sustainable garments that tell your unique story.
            </p>
            <div className="flex flex-wrap gap-md">
              <Link to="/designer" className="bg-primary text-on-primary px-3xl py-md rounded-full font-label-md text-label-md hover:bg-secondary transition-all transform active:scale-95 text-center">
                Start Designing
              </Link>
              <Link to="/templates" className="border-2 border-outline-variant text-on-surface px-3xl py-md rounded-full font-label-md text-label-md hover:bg-surface-container transition-all active:scale-95 text-center">
                Browse Templates
              </Link>
            </div>
            <div className="flex items-center gap-md pt-lg">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-surface bg-surface-container"></div>
                <div className="w-12 h-12 rounded-full border-2 border-surface bg-surface-container"></div>
                <div className="w-12 h-12 rounded-full border-2 border-surface bg-surface-container"></div>
              </div>
              <p className="text-label-sm font-label-sm text-on-surface-variant">
                <span className="font-bold text-on-surface">5,000+</span> Designers already creating
              </p>
            </div>
          </div>
          <div className="relative lg:h-[700px] flex items-center justify-center mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-secondary/5 rounded-full blur-3xl transform scale-110"></div>
            <div className="relative z-10 w-full max-w-md aspect-[4/5] bg-surface-container rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30">
              <img alt="3D T-Shirt Mockup" className="w-full h-full object-cover mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDHuJhNpUOA7utowVhvXpe741XYmmN_ZOG2XwOwwYBNMlNgQZheDmdbxm0B5ZM8E3j2PkJ57f0hMFZuFU9OK8u-8sj5OKhl-q-uOtU0yo6RUTOoOzP7n8orOKZijX5ZrkROVkT5ahVARM0nTy000onGA3TNIfBwT2c12QdvIhxBtvWUREtzBcNBWrf5Bf6UuhRe7KqWP09jV23dIxP71Q_ZB9CQBdFxaj8AQ5iZIRm6uNdcHzifoXKMMzg6J6JcDT8gkiI5Pmi0PE" />
              <div className="absolute bottom-md right-md glass-card p-md rounded-xl flex items-center gap-sm">
                <span className="material-symbols-outlined text-secondary">verified</span>
                <span className="text-label-md font-label-md">Studio Quality Garment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Hero Section */}
      <section className="px-md py-xl flex flex-col items-center text-center md:hidden">
        <div className="inline-flex items-center gap-xs bg-secondary-fixed text-on-secondary-fixed-variant px-sm py-xs rounded-full mb-md font-label-sm text-label-sm">
          <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
          New Designer Studio 1.0
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile mb-md text-primary">Wear Your Imagination</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mb-xl max-w-xs">Create premium custom apparel with our professional design studio. Quality that feels as good as it looks.</p>
        
        {/* Hero Mockup */}
        <div className="relative w-full aspect-square bg-surface-container-low rounded-xl overflow-hidden mb-xl border border-outline-variant/30">
          <img className="w-full h-full object-cover" alt="T-Shirt Studio Mockup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiKIbDFN_FS76CLr-bygklNXfMbYCZS4nOcckoGimdycOrky9oWX9NlekU8v0pIhEEsy-cdjmsMXnTdcoIXfHCyXCtEJsgUECKQVQGcItRiaPnzwCKsya6rA5NIDFoHDo_T93Qpp3kR2zTl79CDLOfe04y67CBUpRMx12HXZXaa32v9ExZQ54SdzIqLdCDXAoGmZ0jyGqS7HCwaK8CPA6tIYynUg6pmh4ttsodTAlO8emKpBVlXhGKFHVMRNeqMoy4rZ-rH6P6fq0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div className="absolute bottom-md left-md right-md flex justify-center">
            <Link to="/designer" className="w-full bg-primary text-on-primary py-md rounded-lg font-label-md text-label-md flex items-center justify-center gap-sm active:scale-95 transition-transform">
              Start Designing
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
