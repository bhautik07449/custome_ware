import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useCart } from '../context/CartContext';
import { products, type Product } from '../data/products';

const newArrivals = products.slice(0, 4);

const sustainabilityItems = [
  {
    icon: 'eco',
    title: 'Ethical Sourcing',
    desc: 'We partner only with certified manufacturers who prioritize worker welfare and environmental stewardship. 100% traceability for all raw materials.',
  },
  {
    icon: 'recycling',
    title: 'Circular Lifecycle',
    desc: 'Our garments are engineered for longevity. We offer a lifetime repair program and a recycling initiative for end-of-life pieces.',
  },
  {
    icon: 'package_2',
    title: 'Zero Waste',
    desc: 'Packaging that leaves no trace. We use FSC-certified recycled card and 100% compostable shipping bags for every order.',
  },
];

export default function HomePage() {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<number | null>(null);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[0], product.colors[0].label, 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  useEffect(() => {
    // Intersection Observer for scroll-reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    // Immediately reveal hero
    const hero = document.querySelector('.hero-section');
    if (hero) {
      hero.classList.remove('opacity-0', 'translate-y-10');
      hero.classList.add('opacity-100', 'translate-y-0');
    }

    // Nav shadow on scroll
    const handleScroll = () => {
      const header = document.getElementById('top-nav');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('shadow-sm');
        } else {
          header.classList.remove('shadow-sm');
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <Helmet>
        <title>KORZAE | Architecture of Silence - Premium Streetwear</title>
        <meta name="description" content="KORZAE is an architectural streetwear brand building garments with purpose, precision, and an unwavering commitment to form." />
      </Helmet>

      {/* ── Hero Section ── */}
      <section className="hero-section reveal-section relative h-[90vh] w-full overflow-hidden flex items-center justify-center transition-all duration-[1000ms] ease-out">
        {/* Background */}
        <div className="hero-zoom absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-[2000ms] ease-out"
            style={{
              backgroundImage: `url('/hero_architecture.png')`,
            }}
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-container-margin">
          <span className="font-label-caps text-label-caps text-on-primary mb-4 block tracking-[0.4em] opacity-80">
            COLLECTION 01
          </span>
          <h1 className="font-display-lg text-[40px] md:text-[64px] lg:text-[100px] leading-tight md:leading-none text-on-primary tracking-tighter mb-8">
            The Architecture
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>of Silence
          </h1>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/shop"
              className="bg-on-primary text-primary px-10 py-4 font-button-text text-button-text uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-500"
            >
              Explore Collection
            </Link>
          </div>
        </div>

        {/* Bounce arrow */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <span className="material-symbols-outlined text-on-primary">expand_more</span>
        </div>
      </section>

      {/* ── New Arrivals Grid ── */}
      <section className="reveal-section max-w-[1440px] mx-auto px-container-margin py-section-gap transition-all duration-[1000ms] ease-out">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 md:gap-4">
          <div>
            <h2 className="font-headline-lg text-[32px] md:text-[40px] mb-2">New Arrivals</h2>
            <p className="font-body-md text-body-md text-secondary max-w-md">
              Precision engineered essentials designed for the modern landscape.
            </p>
          </div>
          <Link
            to="/shop"
            className="font-label-caps text-label-caps border-b border-outline pb-1 hover:border-primary transition-colors whitespace-nowrap self-start md:self-auto"
          >
            View All Arrivals
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {newArrivals.map((product) => (
            <Link key={product.id} to={`/products/${product.slug}`} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-container mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0 absolute inset-0 z-10"
                />
                {product.images[1] && (
                  <img
                    src={product.images[1]}
                    alt={`${product.name} Alternate`}
                    className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105 absolute inset-0 z-0"
                  />
                )}
                
                <button 
                  onClick={(e) => handleQuickAdd(product, e)}
                  className="absolute bottom-4 right-4 bg-white/90 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 active:scale-90 z-20 shadow-sm flex items-center justify-center rounded-full"
                >
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    {addedId === product.id ? 'check' : 'add'}
                  </span>
                </button>
              </div>
              
              <div className="flex justify-between items-start mt-2">
                <div>
                  <h3 className="font-body-md text-[16px] font-bold text-primary">{product.name}</h3>
                  <p className="font-label-caps text-[13px] text-secondary opacity-80 uppercase mt-1">
                    {product.colors[0].label}
                  </p>
                </div>
                <span className="font-body-md text-[16px] font-bold text-primary">${product.price.toFixed(2)}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Brand Philosophy ── */}
      <section className="reveal-section bg-primary py-section-gap overflow-hidden transition-all duration-[1000ms] ease-out">
        <div className="max-w-[1440px] mx-auto px-container-margin">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            {/* Text — left on desktop, bottom on mobile */}
            <div className="md:col-span-5 order-2 md:order-1 mt-12 md:mt-0 text-center md:text-left">
              <h2 className="font-display-lg text-[32px] md:text-[48px] lg:text-[64px] text-on-primary leading-tight mb-8">
                Minimalism is not a lack of something, but the perfect amount of it.
              </h2>
              <p className="font-body-md text-body-md text-on-primary/60 max-w-md mb-12">
                KORZAE is a study in restrained luxury. We strip away the unnecessary to reveal the architecture
                of modern clothing. Every stitch, every seam, and every fabric choice is an intentional act of
                design.
              </p>
              <button className="border border-on-primary text-on-primary px-8 py-3 font-button-text text-button-text uppercase hover:bg-on-primary hover:text-primary transition-all duration-300">
                Our Story
              </button>
            </div>

            {/* Image — right on desktop, top on mobile */}
            <div className="md:col-span-7 order-1 md:order-2">
              <div className="relative aspect-video">
                <img
                  src="/brand_philosophy.png"
                  alt="Craftsman at work"
                  className="w-full h-full object-cover"
                />
                {/* Floating label — desktop only */}
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white/5 backdrop-blur-xl border border-white/10 hidden md:flex items-center justify-center p-8">
                  <p className="font-label-caps text-[10px] text-on-primary leading-relaxed">
                    DESIGNED IN LONDON. MANUFACTURED WITH INTEGRITY.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sustainability & Ethics ── */}
      <section className="reveal-section py-section-gap max-w-[1440px] mx-auto px-container-margin transition-all duration-[1000ms] ease-out">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {sustainabilityItems.map((item) => (
            <div key={item.title}>
              <span className="material-symbols-outlined text-[40px] mb-6 block">{item.icon}</span>
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4">{item.title}</h3>
              <p className="font-body-md text-body-md text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Newsletter Signup ── */}
      <section className="reveal-section bg-surface-container-low py-section-gap transition-all duration-[1000ms] ease-out">
        <div className="max-w-[800px] mx-auto px-container-margin text-center">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6">Join the Registry</h2>
          <p className="font-body-md text-body-md text-secondary mb-10">
            Access early releases, exclusive capsule drops, and architectural insights. No noise, just essentials.
          </p>
          <form
            className="flex flex-col md:flex-row gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="YOUR@EMAIL.COM"
              className="flex-1 bg-surface border-0 border-b border-outline-variant focus:border-primary focus:ring-0 font-label-caps text-label-caps p-4 transition-colors outline-none"
            />
            <button
              type="submit"
              className="bg-primary text-on-primary font-button-text text-button-text px-12 py-4 uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
          <p className="font-label-caps text-[10px] text-secondary mt-6 uppercase">
            By subscribing you agree to our privacy policy.
          </p>
        </div>
      </section>
    </main>
  );
}
