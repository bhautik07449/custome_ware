import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

gsap.registerPlugin(ScrollTrigger);

const newArrivals = products.slice(0, 4);

// Mock data for the new sections
const trendingCategories = [
  { name: 'Outerwear', image: '/product_wool_coat.png', colSpan: 'col-span-2', rowSpan: 'row-span-2' },
  { name: 'Heavyweight Hoodies', image: '/product_embroidered_hoodie.png', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { name: 'Structural Bottoms', image: '/product_trousers.png', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
];

const editorialImages = [
  '/hero_architecture.png',
  '/product_wool_coat.png',
  '/brand_philosophy.png',
];

const sustainabilityItems = [
  { icon: 'eco', title: 'Ethical Sourcing', desc: 'We partner only with certified manufacturers who prioritize worker welfare and environmental stewardship. 100% traceability for all raw materials.' },
  { icon: 'recycling', title: 'Circular Lifecycle', desc: 'Our garments are engineered for longevity. We offer a lifetime repair program and a recycling initiative for end-of-life pieces.' },
  { icon: 'package_2', title: 'Zero Waste', desc: 'Packaging that leaves no trace. We use FSC-certified recycled card and 100% compostable shipping bags for every order.' },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    '/hero_architecture.png',
    '/product_wool_coat.png',
    '/brand_philosophy.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const mainRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance Animation
      const heroTl = gsap.timeline();
      heroTl.from('.hero-badge', { y: 20, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
            .from('.hero-title-line', { y: 100, opacity: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out' }, '-=0.8')
            .from('.hero-btn', { y: 20, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.6');

      // Scroll reveals for all sections
      gsap.utils.toArray('.gsap-reveal').forEach((section: any) => {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          }
        });
      });

      // Parallax Editorial Section
      gsap.to('.parallax-img', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.editorial-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Nav shadow logic
      const handleScroll = () => {
        const header = document.getElementById('top-nav');
        if (header) {
          if (window.scrollY > 50) header.classList.add('shadow-md', 'bg-surface/95');
          else header.classList.remove('shadow-md', 'bg-surface/95');
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="bg-background text-on-background">
      <Helmet>
        <title>KORZAE | Architecture of Silence - Premium Streetwear</title>
        <meta name="description" content="KORZAE is an architectural streetwear brand building garments with purpose, precision, and an unwavering commitment to form." />
      </Helmet>

      {/* ── Hero Section ── */}
      <section ref={heroRef} className="relative h-[100vh] w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 bg-black">
          {heroImages.map((img, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-[2000ms] ease-in-out ${idx === currentSlide ? 'opacity-100 scale-105 z-10' : 'opacity-0 scale-100 z-0'}`}
              style={{ backgroundImage: `url('${img}')` }} 
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-20 pointer-events-none" />
        </div>

        <div className="relative z-10 text-center px-container-margin w-full max-w-[1440px] flex flex-col items-center">
          <div className="overflow-hidden mb-6">
            <span className="hero-badge font-label-caps text-[12px] text-tertiary block tracking-[0.4em] uppercase border border-tertiary/30 px-4 py-1.5 backdrop-blur-sm">
              COLLECTION 01
            </span>
          </div>
          <h1 className="font-display-lg text-[12vw] md:text-[8vw] leading-[0.9] text-on-primary tracking-tighter mb-12 uppercase flex flex-col items-center">
            <div className="overflow-hidden"><span className="hero-title-line block">The Architecture</span></div>
            <div className="overflow-hidden"><span className="hero-title-line block text-outline">of Silence</span></div>
          </h1>
          <div className="hero-btn overflow-hidden">
            <Link to="/shop" className="bg-primary text-on-primary px-12 py-5 font-button-text text-button-text uppercase tracking-widest hover:bg-tertiary hover:text-black transition-all duration-500">
              Explore Collection
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-10">
          <span className="material-symbols-outlined text-primary">expand_more</span>
        </div>
      </section>

      {/* ── [NEW] Trending Categories Bento Box ── */}
      <section className="gsap-reveal max-w-[1440px] mx-auto px-container-margin py-section-gap">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-headline-lg text-[32px] md:text-headline-lg uppercase tracking-tight">Structured Essentials</h2>
          <Link to="/shop" className="font-label-caps text-label-caps border-b border-outline pb-1 hover:border-primary hover:text-primary transition-colors">
            SHOP ALL CATEGORIES
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-auto md:h-[600px]">
          {trendingCategories.map((cat, idx) => (
            <Link key={idx} to="/shop" className={`group relative overflow-hidden bg-surface-container ${cat.colSpan} ${cat.rowSpan}`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 z-10" />
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
              <div className="absolute bottom-8 left-8 z-20">
                <h3 className="font-display-lg text-[24px] text-white uppercase tracking-tight group-hover:text-tertiary transition-colors">{cat.name}</h3>
                <div className="w-0 h-[2px] bg-tertiary mt-2 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── New Arrivals Grid ── */}
      <section className="gsap-reveal max-w-[1440px] mx-auto px-container-margin py-section-gap">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 md:gap-4">
          <div>
            <h2 className="font-headline-lg text-[32px] md:text-headline-lg uppercase tracking-tight mb-2">New Arrivals</h2>
            <p className="font-body-md text-secondary max-w-md">Precision engineered elements designed for the modern landscape.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-gutter">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ── [NEW] Editorial / Lookbook Parallax ── */}
      <section className="editorial-section relative h-[80vh] w-full overflow-hidden flex items-center justify-center my-section-gap">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src="/brand_philosophy.png" alt="Editorial" className="parallax-img w-full h-[140%] object-cover absolute top-[-20%]" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-container-margin max-w-3xl">
          <span className="material-symbols-outlined text-[48px] text-tertiary mb-6 block">architecture</span>
          <h2 className="font-display-lg text-[40px] md:text-[64px] text-white leading-none mb-8 uppercase tracking-tighter">
            Minimalism is not a lack of something, but the perfect amount of it.
          </h2>
          <p className="font-body-md text-white/70 max-w-xl mx-auto mb-10">
            KORZAE is a study in restrained luxury. We strip away the unnecessary to reveal the architecture of modern clothing. Every stitch, every seam, and every fabric choice is an intentional act of design.
          </p>
          <button className="border border-white text-white px-10 py-4 font-button-text text-[14px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            Read Our Manifesto
          </button>
        </div>
      </section>

      {/* ── Sustainability & Ethics ── */}
      <section className="gsap-reveal py-section-gap max-w-[1440px] mx-auto px-container-margin">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {sustainabilityItems.map((item) => (
            <div key={item.title} className="flex flex-col items-start p-8 bg-surface-container-low hover:bg-surface-container transition-colors duration-500 border border-outline-variant">
              <span className="material-symbols-outlined text-[40px] mb-6 text-tertiary">{item.icon}</span>
              <h3 className="font-headline-lg text-[24px] uppercase tracking-tight mb-4">{item.title}</h3>
              <p className="font-body-md text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── [NEW] Community / Gallery Marquee ── */}
      <section className="gsap-reveal py-section-gap overflow-hidden border-t border-outline-variant">
        <div className="px-container-margin max-w-[1440px] mx-auto mb-12 text-center">
          <h2 className="font-headline-lg text-[32px] uppercase tracking-tight mb-4">The Architecture in Motion</h2>
          <p className="font-body-md text-secondary">Tag @korzae to be featured in our seasonal archives.</p>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar pb-8">
          {[...editorialImages, ...editorialImages].map((img, i) => (
            <div key={i} className="w-[280px] md:w-[400px] aspect-[4/5] shrink-0 overflow-hidden group cursor-pointer">
              <img src={img} alt="Community" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* ── Newsletter Signup ── */}
      <section className="gsap-reveal bg-surface-container py-[120px] border-t border-outline-variant">
        <div className="max-w-[800px] mx-auto px-container-margin text-center">
          <h2 className="font-headline-lg text-[40px] uppercase tracking-tighter mb-6">Join the Registry</h2>
          <p className="font-body-md text-secondary mb-10">
            Access early releases, exclusive capsule drops, and architectural insights. No noise, just essentials.
          </p>
          <form className="flex flex-col md:flex-row gap-0 shadow-2xl" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="YOUR@EMAIL.COM"
              className="flex-1 bg-surface border border-outline-variant focus:border-tertiary focus:ring-1 focus:ring-tertiary font-label-caps text-label-caps p-5 transition-all outline-none"
            />
            <button
              type="submit"
              className="bg-primary text-on-primary font-button-text px-12 py-5 uppercase tracking-widest hover:bg-tertiary hover:text-black transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="font-label-caps text-[10px] text-secondary mt-8 uppercase tracking-widest opacity-50">
            By subscribing you agree to our privacy architecture.
          </p>
        </div>
      </section>
    </main>
  );
}
