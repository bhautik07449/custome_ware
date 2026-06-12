export default function DesktopFeatures() {
  return (
    <section className="py-3xl bg-surface-container-low hidden md:block">
      <div className="max-w-7xl mx-auto px-grid-margin">
        <div className="text-center mb-3xl">
          <span className="text-secondary font-label-md uppercase tracking-widest">Why Us</span>
          <h2 className="font-headline-lg text-headline-lg mt-base">Built for Creative Excellence</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
          <div className="bento-item bg-surface p-xl rounded-2xl border border-outline-variant/30 flex flex-col gap-md">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">palette</span>
            </div>
            <h3 className="font-headline-md text-headline-md">Custom Colors</h3>
            <p className="text-on-surface-variant font-body-md">Unlimited palette control for every thread and panel of your design.</p>
          </div>
          <div className="bento-item bg-surface p-xl rounded-2xl border border-outline-variant/30 flex flex-col gap-md">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">title</span>
            </div>
            <h3 className="font-headline-md text-headline-md">Add Text</h3>
            <p className="text-on-surface-variant font-body-md">Premium typography engine with over 200 high-end fashion fonts.</p>
          </div>
          <div className="bento-item bg-surface p-xl rounded-2xl border border-outline-variant/30 flex flex-col gap-md">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">cloud_upload</span>
            </div>
            <h3 className="font-headline-md text-headline-md">Upload Images</h3>
            <p className="text-on-surface-variant font-body-md">Instant AI-enhanced vectorization for your personal artwork and logos.</p>
          </div>
          <div className="bento-item bg-surface p-xl rounded-2xl border border-outline-variant/30 flex flex-col gap-md">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">local_shipping</span>
            </div>
            <h3 className="font-headline-md text-headline-md">Fast Delivery</h3>
            <p className="text-on-surface-variant font-body-md">Worldwide express shipping with real-time tracking on every order.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
