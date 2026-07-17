export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center px-container-margin py-section-gap w-full max-w-[1440px] mx-auto gap-element-gap">
        {/* Brand Logo */}
        <div className="mb-8 md:mb-0">
          <span className="font-label-caps text-[13px] font-bold text-primary uppercase tracking-[0.2em]">
            MONOGRAM
          </span>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
          {['Sustainability', 'Shipping', 'Returns', 'Legal', 'Privacy'].map((link) => (
            <a
              key={link}
              href="#"
              className="font-label-caps text-label-caps text-secondary hover:text-primary transition-colors uppercase"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p className="font-label-caps text-label-caps text-secondary opacity-60">
            © 2024 MONOGRAM STREETWEAR. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
