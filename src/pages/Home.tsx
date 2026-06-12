import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import DesktopFeatures from '../components/home/DesktopFeatures';
import FeaturedProducts from '../components/home/FeaturedProducts';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import MobileFeatures from '../components/home/MobileFeatures';
import MobileCTA from '../components/home/MobileCTA';

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
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col">

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
