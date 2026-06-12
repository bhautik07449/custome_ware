export default function Testimonials() {
  return (
    <section className="py-3xl hidden md:block">
      <div className="max-w-7xl mx-auto px-grid-margin">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
          <div>
            <span className="text-secondary font-label-md uppercase tracking-widest">Creator Stories</span>
            <h2 className="font-headline-lg text-headline-lg mt-base">Trusted by Global Brands and Indie Creators</h2>
            <div className="mt-2xl space-y-xl">
              <div className="flex gap-lg items-start">
                <div className="w-12 h-12 rounded-full bg-surface-container flex-shrink-0"></div>
                <div>
                  <p className="font-body-lg text-body-lg italic mb-sm">"The design studio is the most intuitive tool I've used. The print quality on the shirts actually matches the digital preview perfectly."</p>
                  <p className="font-label-md text-label-md">Sarah Jenkins — Creative Director, Studio Flux</p>
                </div>
              </div>
              <div className="flex gap-lg items-start">
                <div className="w-12 h-12 rounded-full bg-surface-container flex-shrink-0"></div>
                <div>
                  <p className="font-body-lg text-body-lg italic mb-sm">"Fast delivery and exceptional customer support. CustomWear is now our go-to for all our company merchandise."</p>
                  <p className="font-label-md text-label-md">Markos Rivera — Founder, TechPulse</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-surface-container overflow-hidden">
              <img alt="Production Quality" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd095uEXn6yGEZ28upfzanXacJX5_dNdjoBrsU4DYsC48FEsdHnrTBVeyLMo9E4Gh77zbPdq_2dl5ub6fI0lqkXVSJR1JuO6PVH8ESNWrVwxGgcSEITTtvaCeR--Gx5ACJ4RgdtuaA0VVRjGfrB1eU9XawuM2-m-dUmNxnKbSL0kQX6zQgTTBcGbcGqZ--2driwnbooD1qR8FKazVOnU84Pe6F80GSP87M1YnQ9zEa_1ztY4yQpEgZ_iPrh1T6a45eNfy41_KB9nY" />
            </div>
            <div className="absolute -bottom-lg -left-lg glass-card p-xl rounded-2xl border border-outline-variant/30 max-w-xs hidden sm:block">
              <div className="flex gap-xs text-secondary mb-sm">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-label-md text-label-md">98% Satisfaction rate across 10k+ customers worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
