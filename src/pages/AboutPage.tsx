import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <div className="bg-surface">
      <Helmet>
        <title>About Us | Architecture of Silence | KORZAE</title>
        <meta name="description" content="Discover KORZAE's philosophy of bridging brutalist architecture and contemporary streetwear. Precision cutting, material integrity, and seasonless design." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/brand_philosophy.png"
            alt="Atelier"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center px-container-margin max-w-3xl">
          <h1 className="font-display-lg text-[48px] md:text-[72px] tracking-tighter text-white mb-6">
            Architecture of Silence
          </h1>
          <p className="font-body-md text-white/90 text-[16px] md:text-[20px] max-w-xl mx-auto font-light">
            We build garments the way an architect builds a structure—with purpose, precision, and an unwavering commitment to form.
          </p>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="max-w-[1000px] mx-auto px-container-margin py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-label-caps text-label-caps tracking-widest text-secondary mb-6">OUR PHILOSOPHY</h2>
            <h3 className="font-headline-lg text-[32px] md:text-[40px] tracking-tighter text-primary mb-6 leading-tight">
              Stripping away the noise to reveal what remains.
            </h3>
            <p className="font-body-md text-secondary leading-relaxed mb-6">
              Founded in 2024, KORZAE emerged from a desire to bridge the gap between brutalist architecture and contemporary streetwear. We believe that luxury is not defined by excess, but by restraint.
            </p>
            <p className="font-body-md text-secondary leading-relaxed">
              Every seam, every rivet, every carefully sourced textile serves a specific function. There are no superfluous details. What you see is exactly what is necessary. We call this the Architecture of Silence.
            </p>
          </div>
          <div className="aspect-square bg-surface-container-low p-8 flex flex-col justify-center">
            <span className="material-symbols-outlined text-[48px] text-primary mb-8">straighten</span>
            <h4 className="font-label-caps text-[14px] font-bold tracking-widest text-primary mb-4">
              PRECISION CUTTING
            </h4>
            <p className="font-body-md text-secondary">
              Our patterns are drafted using mathematical precision, ensuring that the drape and structure of each garment interact seamlessly with the human form.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="bg-primary text-on-primary py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-container-margin">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <div className="flex flex-col items-center text-center max-w-sm mx-auto">
              <span className="material-symbols-outlined text-[48px] mb-6 font-light">category</span>
              <h4 className="font-label-caps text-label-caps tracking-widest mb-4">MATERIAL INTEGRITY</h4>
              <p className="font-body-md opacity-70">
                We source only heavyweight, structural textiles from mills in Japan and Italy that share our obsessive standard for durability and texture.
              </p>
            </div>
            <div className="flex flex-col items-center text-center max-w-sm mx-auto">
              <span className="material-symbols-outlined text-[48px] mb-6 font-light">hourglass_empty</span>
              <h4 className="font-label-caps text-label-caps tracking-widest mb-4">SEASONLESS DESIGN</h4>
              <p className="font-body-md opacity-70">
                Our collections do not follow the traditional fashion calendar. We release modular uniform pieces designed to be worn year-round and layer intuitively.
              </p>
            </div>
            <div className="flex flex-col items-center text-center max-w-sm mx-auto">
              <span className="material-symbols-outlined text-[48px] mb-6 font-light">verified</span>
              <h4 className="font-label-caps text-label-caps tracking-widest mb-4">BUILT TO LAST</h4>
              <p className="font-body-md opacity-70">
                Reinforced stitching, custom hardware, and over-engineered construction mean a KORZAE piece will outlive any trend.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
