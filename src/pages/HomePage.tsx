import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const newArrivals = [
  {
    sku: 'M01-CORE',
    name: 'Heavyweight Box Tee',
    price: '$85.00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDv2zZbO-x1_g1l53KKcefkGaGw87c7aILUW0Io1NCZ07V60qU6oRdP8OWe3mRkLM7K4FUIRxI1yQg7B6ck96oD9SME1saRPWG6h7qqiO9A2KcCH8azAtORcBBxRP4llVQ12xjc5Xf_F4j0Q6WRF286Z7wQkw_hsmoeIaNUG6_-H01AoEFeumWvqrj6Z82yDtXn3mzw2RuL-eKg5W4j5NFja9Q4_hTzqiRNIVPKaDSDVTUNzabC6LZT',
  },
  {
    sku: 'M02-TECH',
    name: 'Structural Cargo Pant',
    price: '$195.00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBw3FIgU5dcETRMEZWgqA7w1zCNp9TdlPmwwJXLl3T3FGZPaGOmS85VKSUK9KPDDCRmIaOOZv5LGzLoRFU0poQdNIDFjcWEBAYUjLZPnAE-kf_vbtMRyu40vrO4xffSm9w77TQOJDnR1423lnqjyletGpjS2yzpHRQLjCJO-pZIobvgvLg3V3xBylbZX1l2sJQGh7zruQu-SYbnMbensYu-UVqunR9VXbKTfIiZevM28KLoghTguxxg',
  },
  {
    sku: 'M03-ESSENTIAL',
    name: 'Washed Sand Hoodie',
    price: '$140.00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBz-nelyzocnEn3JLA6eooxfgYUU7PFlLmfI0qMRgTV9IyhNXlihKDMWstctv1cn6OoVKFAJ8PYBvZmXoO5QCgvMG-Dg6Bk0PNH2ZduLaMOLTaCRtgXy9KqNsvP2054cqc2saguzoD5e22maV_50BkFKKI133iv2WjBzsLVXjnObOyyswk2EIlB22RtXpAV0SMhGKD_Pe9_cE36hHaoRVjfBnldn9ELjh_HvcnWHyOSnV2DnHCvwuQs',
  },
  {
    sku: 'A01-ACCESSORY',
    name: 'Pebbled Leather Crossbody',
    price: '$210.00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAKcxmVagT-mf7zNCRrsJR_ol7OtRxOazOKnhZp8K4xo_KSPEqi5f8ob4TibXChoaTlvodPslf6e4aP11kZ6mWMKWRyTwZwYUT2PzR7-zIlffukhV96tI5ckfQnjWk482DbQvfYkX3CjwtVQxtdSftfZPUt_4RhprjcbacTL1XUWzGcwqa4Jpmn5gnO4PsFS7SV4iRU1K0U2dn1PK8IJoTm4AVFxVGIs6mGbioH2CoyukuSNbbelVoG',
  },
];

export default function HomePage() {
  // Scroll-based parallax + nav shadow
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;

      // Parallax hero
      const hero = document.getElementById('hero-bg');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.15}px)`;
      }

      // Nav shadow
      const header = document.getElementById('top-nav');
      if (header) {
        if (scrolled > 50) {
          header.classList.add('shadow-sm', 'border-outline-variant/30');
          header.classList.remove('border-transparent');
        } else {
          header.classList.remove('shadow-sm', 'border-outline-variant/30');
          header.classList.add('border-transparent');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      {/* ── Editorial Hero ── */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0" id="hero-bg">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdpBmYfTWRAgOIdaigT820TywGb1gQhV_KhP43CW4aJ7cj_FkYfkwV9PBXMMHLc5rDKUgNHNXKpUyazn81InD56rxOxDBeX3SCWAxW_WQ6GkEfVL9OMYsdrN_MqCn3x2P8xlgn9wa6gkrz6pNiGkFW90ffBHZa2FzdWQ7b6nmVnhPJjR3f_oAtb8dssYwrtPNHM8bkWyR8To2OHUSvC9_xd4a-VPUueUyWuzDWBPCkCT_Tjayb0UeI')`,
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
        <div className="relative z-20 h-full flex flex-col justify-end items-start px-container-margin pb-16 max-w-[1440px] mx-auto w-full">
          <p className="font-label-caps text-label-caps text-white mb-4 tracking-[0.3em]">FW24 COLLECTION</p>
          <h1 className="font-display-lg text-display-lg text-white max-w-2xl mb-8 leading-tight">
            THE ARCHITECTURE<br />OF SILENCE
          </h1>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/shop"
              className="bg-primary text-on-primary px-10 py-4 font-label-caps text-label-caps tracking-widest hover:bg-white hover:text-black transition-all duration-500 uppercase"
            >
              Shop Collection
            </Link>
            <button className="border border-white text-white px-10 py-4 font-label-caps text-label-caps tracking-widest hover:bg-white/10 transition-all duration-500 uppercase">
              View Editorial
            </button>
          </div>
        </div>
      </section>

      {/* ── New Arrivals Grid ── */}
      <section className="py-section-gap px-container-margin max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="font-label-caps text-label-caps text-tertiary mb-2">CURATED RELEASES</p>
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase">New Arrivals</h2>
          </div>
          <Link
            to="/shop"
            className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 hover:text-tertiary hover:border-tertiary transition-all"
          >
            VIEW ALL
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {newArrivals.map((product) => (
            <div key={product.sku} className="group cursor-pointer">
              <div className="relative aspect-[4/5] bg-surface-container mb-4 overflow-hidden luxury-shadow product-card-hover transition-all duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] reveal-on-hover">
                  <button className="w-full bg-tertiary text-white py-3 font-label-caps text-[10px] tracking-widest uppercase">
                    Quick Add
                  </button>
                </div>
              </div>
              <p className="font-label-caps text-[11px] text-secondary mb-1">{product.sku}</p>
              <h3 className="font-body-md text-primary font-bold mb-1">{product.name}</h3>
              <p className="font-label-caps text-label-caps text-primary">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Collections Bento ── */}
      <section className="py-section-gap px-container-margin max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-auto md:h-[800px]">
          {/* Large card */}
          <div className="md:col-span-8 relative group overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 min-h-[400px] md:min-h-0"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUlfQpfU0WeehcvAbCLRVoTIs6Ju-4xdKYsSEtSp5QnPKWQQDHrC0kze_Z-6kqpdKmGIKWe3swGmWrQsyEFK9vDRlU83-yeFhAJVEe3U_Tz7LS2zibQKc_k6k7vxC48eu1scL232noFZRMLA94Ho2o-MvXiHlesNvq1hFxB8uQCJ9SIhCpzHm6gtZKPDoytoN3lH3rfb_4E3QlUABA67fBPvwy1zIV6TMGmMIBzRkRW8buH9uTuaVt')`,
              }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="absolute bottom-12 left-12 text-white">
              <p className="font-label-caps text-label-caps mb-2">LIMITED SERIES</p>
              <h3 className="text-[40px] font-bold leading-none mb-6">URBAN BRUTALISM</h3>
              <button className="bg-white text-black px-8 py-3 font-label-caps text-label-caps hover:bg-tertiary hover:text-white transition-colors uppercase">
                Explore Series
              </button>
            </div>
          </div>

          {/* Small cards stack */}
          <div className="md:col-span-4 flex flex-col gap-gutter">
            <div className="h-1/2 relative group overflow-hidden min-h-[300px] md:min-h-0">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAO-HYEP6g9vYDwdsLusrE2KtH0oJIie3w-2JeAiirPqOmBgYc-vC2uujNAyoAs1BFPg4hGQt9Ung1SUo0PsQrtXoz7hS7HqrRq82iLeK944eqGYGPdMAw6WSyE7-BE4Qd1a0_9bYKnTAlj48y1wUN80D06NLw0xMWC5k7XSD3c66JZGVgDZ9WFr4gUXggfxEsSYhvSu3q8PaOFo3u7jywXYsC7kki91kv7sZI_GubvCu0yWRZmzXcs')`,
                }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center text-center px-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase">The Minimalist Edit</h3>
                  <a href="#" className="font-label-caps text-[10px] text-white border-b border-white pb-1 uppercase">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="h-1/2 relative group overflow-hidden min-h-[300px] md:min-h-0">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZXt261K3aBRb-b6jeQluGgusTuiNHo3qTMPCd2XtcEmSTognhvoTLcB8F3vYf53Odg4mKuHvhNw3lxFNyvel4LfHl1-IpQ-Ubf05Nv2IVT74xQZj2bSFMKA_LrOAaH4KQ4cHp1pNYrU0DF5piWbpjmZszxqNP1tItDlN-9sArHwn3oH0kx7PhlJ_4iy3HAT9IWty5Wz7whZlYP41edZNfAyBdtkZqqwWbB0KP8RjtP7navTdPteUc')`,
                }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center text-center px-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase">Accessories</h3>
                  <a href="#" className="font-label-caps text-[10px] text-white border-b border-white pb-1 uppercase">
                    Discover
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Story ── */}
      <section className="bg-primary text-on-primary py-section-gap">
        <div className="max-w-[1440px] mx-auto px-container-margin grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] border border-tertiary/30 p-8 translate-x-4 translate-y-4 absolute inset-0 -z-10" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY-J5wHiSl31C33gJn8k8w41X1KAlrHPpu8KVBcY8eOySUCcQBOlwzRavfj0fz0h_0-beynFU6na7zour2r3BpDD1m4aZXupD90RmNKFjhobUEZ8sGG49kkcT4C3EBzh70k8FuN6hvdxeJJDUnSUWDagQUHaAXqnK2e8DKZ6bNlJIxrRV0f2t9B05_De14wn0gbs10a6tdrb1jzbko67kpEIcahGGFykGyzPFlAttFkL8WfjRPhbJC"
              alt="Designer at work"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-8">
            <p className="font-label-caps text-label-caps text-tertiary">OUR PHILOSOPHY</p>
            <h2 className="font-display-lg text-display-lg leading-tight uppercase">
              Where Quality Meets the Pavement.
            </h2>
            <p className="text-on-primary-container leading-relaxed text-lg max-w-lg">
              Monogram was founded on the belief that luxury should be felt, not just seen. Our garments are
              architectural expressions of the modern urban experience—rigorously constructed, thoughtfully
              detailed, and finished with our signature metallic gold accents.
            </p>
            <div className="pt-8 flex items-center gap-12">
              {[
                { num: '01', label: 'Ethical Sourcing' },
                { num: '02', label: 'Artisanal Finish' },
                { num: '03', label: 'Lifetime Quality' },
              ].map((item) => (
                <div key={item.num}>
                  <p className="text-3xl font-bold text-white">{item.num}</p>
                  <p className="font-label-caps text-[10px] text-tertiary uppercase">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-section-gap px-container-margin max-w-[1440px] mx-auto text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase">Join the Archive</h2>
          <p className="text-secondary">
            Be the first to access limited drops, editorial lookbooks, and exclusive archival pieces.
          </p>
          <form className="flex flex-col md:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="border-b border-outline bg-transparent py-4 px-2 w-full md:w-80 focus:border-primary focus:ring-0 font-label-caps text-[11px] transition-all outline-none"
            />
            <button
              type="submit"
              className="bg-primary text-on-primary px-12 py-4 font-label-caps text-label-caps tracking-widest hover:bg-tertiary transition-all uppercase"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
