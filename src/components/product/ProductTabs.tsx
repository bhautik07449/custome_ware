import { useState } from 'react';

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="hidden md:block mt-3xl">
      <div className="flex border-b border-outline-variant relative overflow-x-auto hide-scrollbar">
        {['description', 'fabric', 'shipping'].map((tab) => (
          <button
            key={tab}
            className={`px-lg md:px-xl py-lg font-label-md text-label-md whitespace-nowrap transition-colors relative z-10 ${
              activeTab === tab ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'description' && 'Description'}
            {tab === 'fabric' && 'Fabric & Care'}
            {tab === 'shipping' && 'Shipping'}
          </button>
        ))}
      </div>

      <div className="py-2xl max-w-4xl">
        {activeTab === 'description' && (
          <div className="flex flex-col gap-lg animate-fade-in">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              The Classic Essential Tee is more than just a basic—it's the foundation of a modern wardrobe. Engineered with a tailored yet comfortable fit, it features a reinforced crew neck and premium double-needle stitching that ensures it holds its shape through every wash.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-md list-none pl-0">
              <li className="flex items-center gap-md font-body-md text-body-md text-on-surface-variant">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span>
                Pre-shrunk for the perfect fit from day one
              </li>
              <li className="flex items-center gap-md font-body-md text-body-md text-on-surface-variant">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span>
                Smooth finish ideal for custom printing
              </li>
              <li className="flex items-center gap-md font-body-md text-body-md text-on-surface-variant">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span>
                Side-seamed construction
              </li>
              <li className="flex items-center gap-md font-body-md text-body-md text-on-surface-variant">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span>
                Unisex sizing available
              </li>
            </ul>
          </div>
        )}

        {activeTab === 'fabric' && (
          <div className="flex flex-col gap-lg animate-fade-in">
            <div className="bg-surface-container-low p-xl rounded-xl border border-outline-variant/30">
              <h4 className="font-label-md text-label-md mb-sm">Materials</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">100% GOTS Certified Organic Cotton. 180 GSM (Mid-weight).</p>
            </div>
            <div className="bg-surface-container-low p-xl rounded-xl border border-outline-variant/30">
              <h4 className="font-label-md text-label-md mb-sm">Care Instructions</h4>
              <div className="flex flex-wrap gap-xl">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-secondary">wash</span>
                  <span className="font-label-sm text-label-sm">Machine wash cold</span>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-secondary">dry_cleaning</span>
                  <span className="font-label-sm text-label-sm">Do not dry clean</span>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-secondary">iron</span>
                  <span className="font-label-sm text-label-sm">Iron on low heat</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'shipping' && (
          <div className="flex flex-col gap-lg animate-fade-in">
            <p className="font-body-md text-body-md text-on-surface-variant">
              We ship worldwide from our eco-friendly fulfillment centers. Orders are typically processed within 24-48 hours.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div className="flex flex-col gap-xs">
                <span className="font-label-md text-label-md">Standard Shipping</span>
                <span className="font-body-md text-body-md text-on-surface-variant">3-5 business days - $5.99 (Free over $50)</span>
              </div>
              <div className="flex flex-col gap-xs">
                <span className="font-label-md text-label-md">Express Shipping</span>
                <span className="font-body-md text-body-md text-on-surface-variant">1-2 business days - $14.99</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
