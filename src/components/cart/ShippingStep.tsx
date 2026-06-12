export default function ShippingStep() {
  return (
    <section className="step-content space-y-lg md:space-y-xl fade-in">
      <div>
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Shipping Address</h1>
        <p className="font-body-md text-on-surface-variant">Where should we send your custom pieces?</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg">
        <div className="flex flex-col gap-xs">
          <label className="font-label-md text-label-md text-on-surface">First Name</label>
          <input className="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-md focus:border-secondary focus:ring-0 transition-all outline-none" placeholder="John" type="text" />
        </div>
        <div className="flex flex-col gap-xs">
          <label className="font-label-md text-label-md text-on-surface">Last Name</label>
          <input className="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-md focus:border-secondary focus:ring-0 transition-all outline-none" placeholder="Doe" type="text" />
        </div>
        <div className="md:col-span-2 flex flex-col gap-xs">
          <label className="font-label-md text-label-md text-on-surface">Street Address</label>
          <input className="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-md focus:border-secondary focus:ring-0 transition-all outline-none" placeholder="123 Creative Lane" type="text" />
        </div>
        <div className="flex flex-col gap-xs">
          <label className="font-label-md text-label-md text-on-surface">City</label>
          <input className="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-md focus:border-secondary focus:ring-0 transition-all outline-none" placeholder="San Francisco" type="text" />
        </div>
        <div className="flex flex-col gap-xs">
          <label className="font-label-md text-label-md text-on-surface">ZIP / Postal Code</label>
          <input className="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-md focus:border-secondary focus:ring-0 transition-all outline-none" placeholder="94103" type="text" />
        </div>
      </div>
      <div className="space-y-md">
        <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Delivery Method</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          <label className="relative flex items-center p-md border-2 border-secondary rounded-xl bg-secondary/5 cursor-pointer">
            <input defaultChecked className="hidden" name="delivery" type="radio" />
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <span className="font-label-md text-label-md font-bold">Standard Shipping</span>
                <span className="font-label-md text-label-md">FREE</span>
              </div>
              <p className="font-body-md text-on-surface-variant text-sm mt-xs">5-7 Business Days</p>
            </div>
            <span className="material-symbols-outlined text-secondary ml-md" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </label>
          <label className="relative flex items-center p-md border-2 border-outline-variant rounded-xl hover:border-secondary/50 transition-all cursor-pointer">
            <input className="hidden" name="delivery" type="radio" />
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <span className="font-label-md text-label-md font-bold">Express Delivery</span>
                <span className="font-label-md text-label-md">$15.00</span>
              </div>
              <p className="font-body-md text-on-surface-variant text-sm mt-xs">1-2 Business Days</p>
            </div>
          </label>
        </div>
      </div>
    </section>
  );
}
