export default function ProductInfo() {
  return (
    <div className="flex flex-col md:block border-b border-outline-variant/20 md:border-none pb-md md:pb-0">
      <div className="hidden md:flex items-center gap-sm mb-md">
        <span className="text-secondary font-label-md text-label-md uppercase tracking-wider">
          Sustainable Essentials
        </span>
        <div className="flex items-center gap-xs">
          <div className="flex text-[#FFB800]">
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[18px]">star_half</span>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant">(124 Reviews)</span>
        </div>
      </div>

      <div className="flex justify-between items-start md:block">
        <div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-xs md:mb-sm">Classic Essential Tee</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs md:hidden">Premium Grade Cotton</p>
        </div>
        <p className="font-headline-md md:font-headline-md text-headline-md font-bold text-primary md:text-on-surface-variant md:font-normal mt-1 md:mt-0">$34.99</p>
      </div>
    </div>
  );
}
