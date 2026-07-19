const footerLinks = {
  Shop: ['All Products', 'Outerwear', 'Accessories'],
  Support: ['Shipping', 'Returns', 'Contact'],
  Social: ['Instagram', 'Twitter'],
};

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant">
      {/* Main footer body */}
      <div className="flex flex-col md:flex-row justify-between items-start px-container-margin py-section-gap max-w-[1440px] mx-auto gap-12">
        {/* Brand info */}
        <div className="mb-0">
          <img
            src="/korzae_logo.png"
            alt="KORZAE"
            className="h-16 w-auto object-contain mb-6"
          />
          <p className="font-label-caps text-label-caps text-secondary max-w-xs leading-loose">
            ARCHITECTURAL STREETWEAR
            <br />
            ESTABLISHED 2024
            <br />
            LONDON, UK
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col space-y-4">
              <p className="font-label-caps text-label-caps text-primary mb-2">{category}</p>
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-label-caps text-label-caps text-secondary hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-container-margin py-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-caps text-[10px] text-secondary uppercase tracking-widest">
          © 2024 KORZAE. ARCHITECTURAL STREETWEAR.
        </p>
        <div className="flex space-x-6">
          {['Terms', 'Privacy', 'Accessibility'].map((link) => (
            <a
              key={link}
              href="#"
              className="font-label-caps text-[10px] text-secondary hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
