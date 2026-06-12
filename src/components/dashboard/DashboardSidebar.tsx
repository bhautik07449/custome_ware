export default function DashboardSidebar() {
  return (
    <aside className="hidden md:flex flex-col h-[calc(100vh-72px)] w-[320px] fixed left-0 bg-surface-container-low border-r border-outline-variant z-40">
      <div className="p-lg">
        <div className="flex items-center gap-md mb-3xl">
          <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center text-on-primary overflow-hidden">
            <img alt="User Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIXhlfejFaKw2AdRvlMdLfbGaaH92xtCFDl52QTZHyp3RWSOBVeTwm39471UyVAakFzCVm2xO1fBKr_nd4d8B5zdO6l40Rdn54h1-j_MOQ2GHfRWzmO_3zxobIHAtpR8mHjai8C53eiGR1QSeAjIS2N5BtRKfgwJud_kxR9_VGO0jKYAgigSoksmUDOcB2tp796irf-mrp2acbd923S3itg1aGqRAak9Cbf_tTY-VSCK2yj2CtyeZbxqskfhdhxSLkH18W21oQyTQ" />
          </div>
          <div>
            <p className="font-label-md text-label-md text-on-surface">Alex Chen</p>
            <p className="text-xs text-on-surface-variant">Member since 2024</p>
          </div>
        </div>
        <nav className="space-y-sm">
          <a className="flex flex-row items-center border-l-2 border-secondary bg-surface-container-highest text-secondary p-md rounded-r-lg sidebar-item-transition" href="#">
            <span className="material-symbols-outlined mr-md">shopping_bag</span>
            <span className="font-label-md text-label-md">My Orders</span>
          </a>
          <a className="flex flex-row items-center text-on-surface-variant p-md hover:bg-surface-container sidebar-item-transition" href="#">
            <span className="material-symbols-outlined mr-md">cloud_upload</span>
            <span className="font-label-md text-label-md">Saved Designs</span>
          </a>
          <a className="flex flex-row items-center text-on-surface-variant p-md hover:bg-surface-container sidebar-item-transition" href="#">
            <span className="material-symbols-outlined mr-md">favorite</span>
            <span className="font-label-md text-label-md">Wishlist</span>
          </a>
          <a className="flex flex-row items-center text-on-surface-variant p-md hover:bg-surface-container sidebar-item-transition" href="#">
            <span className="material-symbols-outlined mr-md">account_circle</span>
            <span className="font-label-md text-label-md">Profile</span>
          </a>
        </nav>
      </div>
      <div className="mt-auto p-lg border-t border-outline-variant/30">
        <button className="w-full py-md bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-secondary transition-all active-scale">
          Support
        </button>
      </div>
    </aside>
  );
}
