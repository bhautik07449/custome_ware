import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function ProfilePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-container-margin py-12 min-h-screen">
      <Helmet>
        <title>My Profile | KORZAE</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Sidebar Nav */}
        <div className="w-full md:w-64 shrink-0">
          <h1 className="font-display-lg text-[32px] text-primary mb-8 tracking-tighter">My Account</h1>
          <nav className="flex flex-col gap-4">
            <Link to="/profile" className="font-label-caps text-label-caps text-primary border-b border-primary py-2 font-bold">
              PROFILE DETAILS
            </Link>
            <Link to="/orders" className="font-label-caps text-label-caps text-secondary hover:text-primary transition-colors py-2 border-b border-transparent">
              ORDER HISTORY
            </Link>
            <button className="font-label-caps text-label-caps text-secondary hover:text-error transition-colors py-2 border-b border-transparent text-left">
              LOG OUT
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-2xl">
          <h2 className="font-headline-lg-mobile text-primary mb-8">Profile Details</h2>
          
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-label-caps text-[10px] text-secondary tracking-widest mb-2">FIRST NAME</label>
                <input defaultValue="John" className="korzae-input" />
              </div>
              <div>
                <label className="block font-label-caps text-[10px] text-secondary tracking-widest mb-2">LAST NAME</label>
                <input defaultValue="Doe" className="korzae-input" />
              </div>
            </div>
            
            <div>
              <label className="block font-label-caps text-[10px] text-secondary tracking-widest mb-2">EMAIL ADDRESS</label>
              <input type="email" defaultValue="john.doe@example.com" className="korzae-input" />
            </div>

            <div>
              <label className="block font-label-caps text-[10px] text-secondary tracking-widest mb-2">PHONE NUMBER (OPTIONAL)</label>
              <input type="tel" placeholder="+1 (555) 000-0000" className="korzae-input" />
            </div>

            <button type="submit" className="w-fit bg-primary text-on-primary px-8 py-4 font-button-text text-button-text uppercase tracking-widest mt-4 hover:bg-opacity-90">
              SAVE CHANGES
            </button>
          </form>

          <div className="mt-16 border-t border-outline-variant pt-12">
            <h3 className="font-headline-lg-mobile text-primary mb-6">Saved Addresses</h3>
            <div className="border border-outline-variant p-6 relative">
              <span className="absolute top-4 right-4 bg-surface-container-high px-2 py-1 font-label-caps text-[9px] tracking-widest">DEFAULT</span>
              <p className="font-body-md font-bold text-primary mb-1">John Doe</p>
              <p className="font-body-md text-secondary">123 Architecture Blvd, Apt 4B</p>
              <p className="font-body-md text-secondary">New York, NY 10001</p>
              <p className="font-body-md text-secondary">United States</p>
              
              <div className="flex gap-4 mt-6">
                <button className="font-label-caps text-[11px] text-primary border-b border-primary hover:text-secondary hover:border-secondary transition-colors pb-1">EDIT</button>
                <button className="font-label-caps text-[11px] text-error border-b border-error hover:opacity-70 transition-colors pb-1">DELETE</button>
              </div>
            </div>
            <button className="mt-6 font-label-caps text-label-caps border border-primary px-6 py-3 hover:bg-primary hover:text-on-primary transition-colors">
              + ADD NEW ADDRESS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
