import { useEffect, useRef } from 'react';
import HeroSection from '../components/home/HeroSection';
import DesktopFeatures from '../components/home/DesktopFeatures';
import FeaturedProducts from '../components/home/FeaturedProducts';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import MobileFeatures from '../components/home/MobileFeatures';
import MobileCTA from '../components/home/MobileCTA';

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll-reveal: watch all elements with reveal-* classes
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    revealEls.forEach((el) => revealObserver.observe(el));

    // Draw-path SVG animation
    const pathObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );
    const pathEls = document.querySelectorAll('.draw-path');
    pathEls.forEach((el) => pathObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      pathObserver.disconnect();
    };
  }, []);

  return (
    <div ref={pageRef} className="flex flex-col">
      <HeroSection />
      <DesktopFeatures />
      <FeaturedProducts />
      <HowItWorks />
      <Testimonials />
      <MobileFeatures />
      <MobileCTA />
    </div>
  );
}