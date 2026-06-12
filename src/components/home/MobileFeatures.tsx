export default function MobileFeatures() {
  return (
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
  );
}
