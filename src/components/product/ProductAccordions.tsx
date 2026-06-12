import { useState } from 'react';

export default function ProductAccordions() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setActiveAccordion(prev => prev === section ? null : section);
  };

  return (
    <section className="md:hidden px-md mt-xl pb-xl">
      {/* Section 1 */}
      <div className="border-t border-outline-variant/30">
        <button 
          className="w-full py-xl flex justify-between items-center text-left outline-none"
          onClick={() => toggleAccordion('info')}
        >
          <span className="font-label-md text-label-md text-on-surface">Product Info</span>
          <span className={`material-symbols-outlined transition-transform ${activeAccordion === 'info' ? 'rotate-180' : ''}`}>expand_more</span>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === 'info' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="pb-xl font-body-md text-body-md text-on-surface-variant">
            Our Classic Essential Tee is the cornerstone of any modern wardrobe. Engineered with a relaxed fit and a durable ribbed neckline, it's designed to hold its shape wash after wash. Perfectly balanced for layering or wearing solo.
          </p>
        </div>
      </div>
      
      {/* Section 2 */}
      <div className="border-t border-outline-variant/30">
        <button 
          className="w-full py-xl flex justify-between items-center text-left outline-none"
          onClick={() => toggleAccordion('fabric')}
        >
          <span className="font-label-md text-label-md text-on-surface">Fabric & Care</span>
          <span className={`material-symbols-outlined transition-transform ${activeAccordion === 'fabric' ? 'rotate-180' : ''}`}>expand_more</span>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === 'fabric' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="pb-xl space-y-sm font-body-md text-body-md text-on-surface-variant list-disc pl-md ml-md">
            <li>100% Organic Supima Cotton</li>
            <li>Pre-shrunk for the perfect fit</li>
            <li>Machine wash cold with like colors</li>
            <li>Tumble dry low or hang dry for longevity</li>
          </ul>
        </div>
      </div>

      {/* Section 3 */}
      <div className="border-t border-b border-outline-variant/30">
        <button 
          className="w-full py-xl flex justify-between items-center text-left outline-none"
          onClick={() => toggleAccordion('reviews')}
        >
          <div className="flex items-center gap-md">
            <span className="font-label-md text-label-md text-on-surface">Reviews</span>
            <div className="flex items-center text-secondary">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="font-label-sm text-label-sm ml-xs">4.9 (124)</span>
            </div>
          </div>
          <span className={`material-symbols-outlined transition-transform ${activeAccordion === 'reviews' ? 'rotate-180' : ''}`}>expand_more</span>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === 'reviews' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pb-xl space-y-lg">
            <div className="bg-surface-container-low p-md rounded-xl">
              <div className="flex justify-between mb-sm">
                <p className="font-label-md text-label-md">Alex M.</p>
                <span className="font-label-sm text-on-surface-variant">Verified Buyer</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">"The best basic tee I've ever owned. The fabric feels substantial yet breathable. Buying 3 more!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
