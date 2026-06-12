import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="hidden md:block w-full py-3xl px-grid-margin bg-surface-container-highest border-t border-outline-variant mt-auto mb-[64px] md:mb-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-grid-gutter max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1 space-y-md">
          <Link className="font-headline-md text-headline-md font-bold text-on-surface" to="/">CustomWear</Link>
          <p className="text-on-surface-variant font-body-md pr-lg">Crafting the future of personalized apparel through technology and design.</p>
        </div>
        <div className="space-y-md">
          <h5 className="font-label-md text-label-md uppercase tracking-widest text-on-surface">Explore</h5>
          <ul className="space-y-sm">
            <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-opacity duration-300" to="/shop">Shop</Link></li>
            <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-opacity duration-300" to="/designer">Designer</Link></li>
            <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-opacity duration-300" to="/collections">Collections</Link></li>
            <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-opacity duration-300" to="/templates">Templates</Link></li>
          </ul>
        </div>
        <div className="space-y-md">
          <h5 className="font-label-md text-label-md uppercase tracking-widest text-on-surface">Company</h5>
          <ul className="space-y-sm">
            <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-opacity duration-300" to="/terms">Terms</Link></li>
            <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-opacity duration-300" to="/privacy">Privacy</Link></li>
            <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-opacity duration-300" to="/support">Support</Link></li>
            <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-opacity duration-300" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="space-y-md">
          <h5 className="font-label-md text-label-md uppercase tracking-widest text-on-surface">Stay Connected</h5>
          <div className="flex gap-md">
            <a className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center hover:bg-secondary hover:text-on-primary transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">public</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center hover:bg-secondary hover:text-on-primary transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">share</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center hover:bg-secondary hover:text-on-primary transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-3xl pt-xl border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-md">
        <p className="text-label-sm font-label-sm text-on-surface-variant">© 2024 CustomWear Studio. All rights reserved.</p>
        <div className="flex gap-xl text-label-sm font-label-sm text-on-surface-variant">
          <span>Shipping Policy</span>
          <span>Refunds</span>
        </div>
      </div>
    </footer>
  );
}
