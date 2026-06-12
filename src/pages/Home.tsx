import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.bento-item, .group, .animate-fade-in');
    elements.forEach(el => {
      // Don't override if it's already visible (e.g. fast scrolling or initial render)
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col">
      {/* ------------------------------------------------------------- */}
      {/* DESKTOP VIEW SECTIONS (Hidden on mobile)                        */}
      {/* ------------------------------------------------------------- */}
      
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

      {/* Desktop Features Bento Grid */}
      <section className="py-3xl bg-surface-container-low hidden md:block">
        <div className="max-w-7xl mx-auto px-grid-margin">
          <div className="text-center mb-3xl">
            <span className="text-secondary font-label-md uppercase tracking-widest">Why Us</span>
            <h2 className="font-headline-lg text-headline-lg mt-base">Built for Creative Excellence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            <div className="bento-item bg-surface p-xl rounded-2xl border border-outline-variant/30 flex flex-col gap-md">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">palette</span>
              </div>
              <h3 className="font-headline-md text-headline-md">Custom Colors</h3>
              <p className="text-on-surface-variant font-body-md">Unlimited palette control for every thread and panel of your design.</p>
            </div>
            <div className="bento-item bg-surface p-xl rounded-2xl border border-outline-variant/30 flex flex-col gap-md">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">title</span>
              </div>
              <h3 className="font-headline-md text-headline-md">Add Text</h3>
              <p className="text-on-surface-variant font-body-md">Premium typography engine with over 200 high-end fashion fonts.</p>
            </div>
            <div className="bento-item bg-surface p-xl rounded-2xl border border-outline-variant/30 flex flex-col gap-md">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">cloud_upload</span>
              </div>
              <h3 className="font-headline-md text-headline-md">Upload Images</h3>
              <p className="text-on-surface-variant font-body-md">Instant AI-enhanced vectorization for your personal artwork and logos.</p>
            </div>
            <div className="bento-item bg-surface p-xl rounded-2xl border border-outline-variant/30 flex flex-col gap-md">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
              <h3 className="font-headline-md text-headline-md">Fast Delivery</h3>
              <p className="text-on-surface-variant font-body-md">Worldwide express shipping with real-time tracking on every order.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Trending Designs Grid */}
      <section className="py-3xl hidden md:block">
        <div className="max-w-7xl mx-auto px-grid-margin">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-2xl gap-4">
            <div>
              <span className="text-secondary font-label-md uppercase tracking-widest">Community Picks</span>
              <h2 className="font-headline-lg text-headline-lg mt-base">Trending Designs</h2>
            </div>
            <Link className="text-secondary font-label-md hover:underline flex items-center gap-xs" to="/shop">
              View All Designs <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-grid-gutter">
            {/* Product Card 1 */}
            <div className="group">
              <div className="relative aspect-[3/4] bg-surface-container rounded-xl overflow-hidden mb-md">
                <img alt="Modern Graphic Tee" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNIJn12jci2MGvmRYwlWN50S_VGab3uueZogtjYdC75zaiWDQjNDabgoATAVi_JzHB42FS2FQVvOR4yfQ2VK_x2E0SSbNxH8G0RubyEBYUTp7Y9Afc44vyoriWn49Psy-xhs8vsHwiZ0wZYH6_NFKw1TXyB_N23tiHyRFiN6wIbOdGEnwa3xsJmaQt77WD9I5JxdmAQhZR-MMSq2mcmcw7PD-TbY-T6ZUcKyL4Q_kWM_Zo-22GeAyrRixAj61iLP2N8mfaj3D8X9E" />
                <div className="absolute top-md right-md bg-surface px-sm py-xs rounded-full text-label-sm font-bold shadow-sm">
                  $45.00
                </div>
                <Link to="/designer" className="absolute bottom-md left-1/2 -translate-x-1/2 translate-y-12 group-hover:translate-y-0 transition-all duration-300 bg-primary text-on-primary px-xl py-sm rounded-full font-label-md opacity-0 group-hover:opacity-100 flex items-center gap-sm whitespace-nowrap">
                  <span className="material-symbols-outlined text-[18px]">edit</span> Customize
                </Link>
              </div>
              <h4 className="font-label-md text-label-md">Abstract Core Tee</h4>
              <p className="text-on-surface-variant text-label-sm">Designer Collection</p>
            </div>
            {/* Product Card 2 */}
            <div className="group">
              <div className="relative aspect-[3/4] bg-surface-container rounded-xl overflow-hidden mb-md">
                <img alt="Urban Style Tee" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnVeEn49w_DMHaXetAKGX8EsnTBSD_lud3-HXuQnvQkiRMyB4ew4Ng6-_idf3Mkt3T1I8rV-tOtak2Ov2-cxk5ka1xRBgjl9ebbhKzbV9oKagE6tstiBdpjcmiuM05I2B2fBKN6dQ_ePLbnpekC38jEI3WAMGKP4Z2xVHrWCY3FuFIjtdWFLwQfuNrTCSW9TanG6agxsXtQxEJLdgy8QPMVIWmevkamQdp9uu3BdSUCm_9IupI7-XGmdqv2nUTGfsEvH4VJzqmNTM" />
                <div className="absolute top-md right-md bg-surface px-sm py-xs rounded-full text-label-sm font-bold shadow-sm">
                  $38.00
                </div>
                <Link to="/designer" className="absolute bottom-md left-1/2 -translate-x-1/2 translate-y-12 group-hover:translate-y-0 transition-all duration-300 bg-primary text-on-primary px-xl py-sm rounded-full font-label-md opacity-0 group-hover:opacity-100 flex items-center gap-sm whitespace-nowrap">
                  <span className="material-symbols-outlined text-[18px]">edit</span> Customize
                </Link>
              </div>
              <h4 className="font-label-md text-label-md">Urban Typo Series</h4>
              <p className="text-on-surface-variant text-label-sm">Limited Edition</p>
            </div>
            {/* Product Card 3 */}
            <div className="group">
              <div className="relative aspect-[3/4] bg-surface-container rounded-xl overflow-hidden mb-md">
                <img alt="Minimalist Tee" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkZ7nWebux-vfizwitSkwElqdo1CqEtkrTaO5EZTFCjHrzCnGrMgqboNVz6jV5vNsApyKT2trxe_mwgDMG4IdR6So_Z8TZ78bNofWs8PwzXwT6uJ49qDZTKURrUaZAokAo027KsRCYWghxo1qp3k34T2MxxG8Zc4fePcI76r0WhNXQwgPiceOCl34UlHkSwJ9I_Gx3AmT33o2D2aEmS5KUnpkMmFvB8r7RK-G0vWj9XGvmPGHMtnIL7MRcnOZfztENWK2tbU4IFaA" />
                <div className="absolute top-md right-md bg-surface px-sm py-xs rounded-full text-label-sm font-bold shadow-sm">
                  $52.00
                </div>
                <Link to="/designer" className="absolute bottom-md left-1/2 -translate-x-1/2 translate-y-12 group-hover:translate-y-0 transition-all duration-300 bg-primary text-on-primary px-xl py-sm rounded-full font-label-md opacity-0 group-hover:opacity-100 flex items-center gap-sm whitespace-nowrap">
                  <span className="material-symbols-outlined text-[18px]">edit</span> Customize
                </Link>
              </div>
              <h4 className="font-label-md text-label-md">Minimalist Stitch</h4>
              <p className="text-on-surface-variant text-label-sm">Premium Basics</p>
            </div>
            {/* Product Card 4 */}
            <div className="group">
              <div className="relative aspect-[3/4] bg-surface-container rounded-xl overflow-hidden mb-md">
                <img alt="Retro Tee" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE-f1Wyvxq_wwvIfz0rsOgwMqhrqCPWMeC5pW-HulCfwDB4xU5K_QbMuFheaX1nxagSKCKy3tPh9uLNGl3sXd1rNy-K8bMaUQbPFU8LFe0DuPwoBpmI28i9BaQ62jE5KJ7xmyr4xP20qiN8mVk7BN9v4Sd3u0ApNIhxeSqECqzg7hj9wydkF8rpqCBxUVsWBx8tbQnhDfh-SimFaVnMx2Bk2D7hJ_pk025gjWV3JpgbDQfUringEuxBojakHHcb7dcPrtQYUNeiFI" />
                <div className="absolute top-md right-md bg-surface px-sm py-xs rounded-full text-label-sm font-bold shadow-sm">
                  $42.00
                </div>
                <Link to="/designer" className="absolute bottom-md left-1/2 -translate-x-1/2 translate-y-12 group-hover:translate-y-0 transition-all duration-300 bg-primary text-on-primary px-xl py-sm rounded-full font-label-md opacity-0 group-hover:opacity-100 flex items-center gap-sm whitespace-nowrap">
                  <span className="material-symbols-outlined text-[18px]">edit</span> Customize
                </Link>
              </div>
              <h4 className="font-label-md text-label-md">Retro Wave Tee</h4>
              <p className="text-on-surface-variant text-label-sm">Artist Series</p>
            </div>
          </div>
        </div>
      </section>

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

      {/* Desktop Testimonials */}
      <section className="py-3xl hidden md:block">
        <div className="max-w-7xl mx-auto px-grid-margin">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
            <div>
              <span className="text-secondary font-label-md uppercase tracking-widest">Creator Stories</span>
              <h2 className="font-headline-lg text-headline-lg mt-base">Trusted by Global Brands and Indie Creators</h2>
              <div className="mt-2xl space-y-xl">
                <div className="flex gap-lg items-start">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex-shrink-0"></div>
                  <div>
                    <p className="font-body-lg text-body-lg italic mb-sm">"The design studio is the most intuitive tool I've used. The print quality on the shirts actually matches the digital preview perfectly."</p>
                    <p className="font-label-md text-label-md">Sarah Jenkins — Creative Director, Studio Flux</p>
                  </div>
                </div>
                <div className="flex gap-lg items-start">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex-shrink-0"></div>
                  <div>
                    <p className="font-body-lg text-body-lg italic mb-sm">"Fast delivery and exceptional customer support. CustomWear is now our go-to for all our company merchandise."</p>
                    <p className="font-label-md text-label-md">Markos Rivera — Founder, TechPulse</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-surface-container overflow-hidden">
                <img alt="Production Quality" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd095uEXn6yGEZ28upfzanXacJX5_dNdjoBrsU4DYsC48FEsdHnrTBVeyLMo9E4Gh77zbPdq_2dl5ub6fI0lqkXVSJR1JuO6PVH8ESNWrVwxGgcSEITTtvaCeR--Gx5ACJ4RgdtuaA0VVRjGfrB1eU9XawuM2-m-dUmNxnKbSL0kQX6zQgTTBcGbcGqZ--2driwnbooD1qR8FKazVOnU84Pe6F80GSP87M1YnQ9zEa_1ztY4yQpEgZ_iPrh1T6a45eNfy41_KB9nY" />
              </div>
              <div className="absolute -bottom-lg -left-lg glass-card p-xl rounded-2xl border border-outline-variant/30 max-w-xs hidden sm:block">
                <div className="flex gap-xs text-secondary mb-sm">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="font-label-md text-label-md">98% Satisfaction rate across 10k+ customers worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* MOBILE VIEW SECTIONS (Hidden on desktop)                        */}
      {/* ------------------------------------------------------------- */}
      
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

      {/* Mobile Features Grid */}
      <section className="px-md py-xl bg-surface-container-lowest md:hidden">
        <div className="grid grid-cols-1 gap-md">
          <div className="bento-item p-xl rounded-xl bg-surface border border-outline-variant/20 flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center mb-md">
              <span className="material-symbols-outlined text-secondary">brush</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-xs">Intuitive Editor</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Simple yet powerful tools to bring your creative vision to life in seconds.</p>
          </div>
          <div className="bento-item p-xl rounded-xl bg-surface border border-outline-variant/20 flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center mb-md">
              <span className="material-symbols-outlined text-secondary">high_quality</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-xs">Premium Quality</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">We use only the finest 100% organic cotton for maximum comfort and durability.</p>
          </div>
          <div className="bento-item p-xl rounded-xl bg-surface border border-outline-variant/20 flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center mb-md">
              <span className="material-symbols-outlined text-secondary">local_shipping</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-xs">Fast Shipping</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Global delivery with tracked shipping so you know exactly when it arrives.</p>
          </div>
        </div>
      </section>

      {/* Mobile Trending Designs (Horizontal Scroll) */}
      <section className="py-xl md:hidden">
        <div className="px-md flex justify-between items-center mb-md">
          <h2 className="font-headline-md text-headline-md">Trending Now</h2>
          <Link to="/shop" className="text-secondary font-label-md text-label-md">View all</Link>
        </div>
        <div className="flex gap-md overflow-x-auto px-md pb-md snap-x hide-scrollbar">
          {/* Card 1 */}
          <div className="flex-none w-64 snap-start group">
            <div className="bg-surface-container-low rounded-lg overflow-hidden mb-sm border border-outline-variant/30 aspect-[4/5] relative">
              <img className="w-full h-full object-cover" alt="Geometric Pulse" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIGC24EY4VnQUErGD3fBo4lZJkssqsOe6h-LdGDU6VsyRMnlw41apE_UhKAN60lrq-Cy2fwgk64f5TjI38YAMQtWX3eX_s-HrmIXdp3o7CLINunoJsd5gtzoHbwhfqjHwxMfvSSkFLjXtDpsIpYbeITgYkr4UaT4k05X_SvpIuL1iBYOm1NxJSTuwALAH1sF0CzIg-v-aK-RHSZ2mDW2tcytxkxTl8YPktQGFoIZAyJBTnOze-jBCAH6SnxLBKu7B8dM_CPN0WaIw" />
              <button className="absolute top-sm right-sm w-10 h-10 rounded-full glass-card flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface">favorite</span>
              </button>
            </div>
            <h4 className="font-label-md text-label-md text-on-surface">Geometric Pulse</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">$34.00</p>
          </div>
          {/* Card 2 */}
          <div className="flex-none w-64 snap-start group">
            <div className="bg-surface-container-low rounded-lg overflow-hidden mb-sm border border-outline-variant/30 aspect-[4/5] relative">
              <img className="w-full h-full object-cover" alt="Tokyo Minimal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUwJyJH2cvHLkEHlbufrZ1UAfFeeOuqx_65GJFk7adMW8EVR-pqFmd0L93ZRqOHs-UXPgnwSEbgsGDj-hwL1aZur-WjO8lVc5gt2nX4LV3v-b6oIYuHFAsspGHiT4gsW-Iul29rRfNUZTRRb1en4QRyMTCp1HJ3uitrFTRs0KGzPJrCkNEV3Xw-5_B4WMURwWD8Tigxkc8rgmpURlbDQt7PzLmnulSCqsCk89GGd2eUUXyHcrV_QUVnE5jk6ImDZfFcG7ieoqnyJI" />
              <button className="absolute top-sm right-sm w-10 h-10 rounded-full glass-card flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface">favorite</span>
              </button>
            </div>
            <h4 className="font-label-md text-label-md text-on-surface">Tokyo Minimal</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">$38.00</p>
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

      {/* Mobile Final CTA */}
      <section className="px-md py-3xl text-center md:hidden">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-md">Ready to start?</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-xl">Join over 10,000+ creators making their mark.</p>
        <Link to="/designer" className="inline-block w-full bg-primary text-on-primary py-xl rounded-xl font-label-md text-headline-md shadow-lg active:scale-95 transition-all">
          Launch Designer
        </Link>
      </section>

    </div>
  );
}
