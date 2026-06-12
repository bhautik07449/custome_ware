import { PATHS } from '../../utils/routes';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="hidden md:block w-full max-w-[1400px] mx-auto px-4 md:px-6 mb-6 mt-16">
      <div className="bg-surface-container-highest rounded-3xl p-12 lg:p-16 border border-outline-variant/50 shadow-sm relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-7xl mx-auto relative z-10">
          
          {/* Brand & Newsletter Column */}
          <div className="col-span-1 md:col-span-4 space-y-6">
            <Link className="font-headline-md text-headline-md font-bold text-on-surface" to={PATHS.HOME}>CustomWear</Link>
            <p className="text-on-surface-variant font-body-md pr-4">Crafting the future of personalized apparel through technology and design.</p>
            
            <div className="pt-4 space-y-3">
              <h5 className="font-label-md text-label-md uppercase tracking-widest text-on-surface">Subscribe to our Newsletter</h5>
              <div className="flex gap-2">
                <input type="email" placeholder="Enter your email" className="flex-1 bg-surface rounded-lg px-4 py-3 text-body-md border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" />
                <button className="bg-on-surface text-surface px-6 py-3 rounded-lg font-label-md hover:bg-secondary hover:text-on-primary transition-colors">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 md:col-start-6 space-y-6">
            <h5 className="font-label-md text-label-md uppercase tracking-widest text-on-surface">Explore</h5>
            <ul className="space-y-4">
              <li><Link className="text-on-surface-variant font-body-md hover:text-secondary transition-colors duration-300" to={PATHS.SHOP}>Shop</Link></li>
              <li><Link className="text-on-surface-variant font-body-md hover:text-secondary transition-colors duration-300" to={PATHS.DESIGNER}>Designer</Link></li>
              <li><Link className="text-on-surface-variant font-body-md hover:text-secondary transition-colors duration-300" to="/collections">Collections</Link></li>
              <li><Link className="text-on-surface-variant font-body-md hover:text-secondary transition-colors duration-300" to="/templates">Templates</Link></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h5 className="font-label-md text-label-md uppercase tracking-widest text-on-surface">Company</h5>
            <ul className="space-y-4">
              <li><Link className="text-on-surface-variant font-body-md hover:text-secondary transition-colors duration-300" to="/terms">Terms</Link></li>
              <li><Link className="text-on-surface-variant font-body-md hover:text-secondary transition-colors duration-300" to="/privacy">Privacy</Link></li>
              <li><Link className="text-on-surface-variant font-body-md hover:text-secondary transition-colors duration-300" to="/support">Support</Link></li>
              <li><Link className="text-on-surface-variant font-body-md hover:text-secondary transition-colors duration-300" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-3 space-y-6">
            <h5 className="font-label-md text-label-md uppercase tracking-widest text-on-surface">Stay Connected</h5>
            <div className="flex gap-3">
              <a className="w-10 h-10 rounded-full bg-surface border border-outline-variant/50 flex items-center justify-center text-on-surface-variant hover:bg-secondary hover:text-on-primary hover:border-secondary transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">public</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-surface border border-outline-variant/50 flex items-center justify-center text-on-surface-variant hover:bg-secondary hover:text-on-primary hover:border-secondary transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-surface border border-outline-variant/50 flex items-center justify-center text-on-surface-variant hover:bg-secondary hover:text-on-primary hover:border-secondary transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-label-sm font-label-sm text-on-surface-variant">© 2024 CustomWear Studio. All rights reserved.</p>
          <div className="flex gap-8 text-label-sm font-label-sm text-on-surface-variant">
            <Link to="/shipping" className="hover:text-secondary transition-colors">Shipping Policy</Link>
            <Link to="/refunds" className="hover:text-secondary transition-colors">Refunds</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
