import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ORDERS, SAVED_DESIGNS } from '../data/mockData';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="flex w-full">
      {/* ------------------------------------------------------------- */}
      {/* DESKTOP SIDEBAR                                               */}
      {/* ------------------------------------------------------------- */}
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

      {/* ------------------------------------------------------------- */}
      {/* DESKTOP MAIN CONTENT                                          */}
      {/* ------------------------------------------------------------- */}
      <div className="hidden md:block flex-1 ml-[320px] p-grid-margin max-w-7xl mx-auto w-full">
        {/* Dashboard Header */}
        <section className="mb-3xl">
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Welcome back, Alex.</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Manage your creations, track shipments, and explore new styles.</p>
        </section>

        {/* Stats/Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter mb-3xl">
          <div className="p-lg bg-surface-container-lowest border border-outline-variant/50 rounded-xl">
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm">Active Orders</p>
            <p className="font-headline-md text-headline-md text-on-surface">02</p>
          </div>
          <div className="p-lg bg-surface-container-lowest border border-outline-variant/50 rounded-xl">
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm">Total Designs</p>
            <p className="font-headline-md text-headline-md text-on-surface">14</p>
          </div>
          <div className="p-lg bg-surface-container-lowest border border-outline-variant/50 rounded-xl">
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm">Voucher Credit</p>
            <p className="font-headline-md text-headline-md text-secondary">$25.00</p>
          </div>
        </div>

        {/* Recent Orders Section */}
        <section className="mb-3xl">
          <div className="flex justify-between items-center mb-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface">Recent Orders</h2>
            <a className="font-label-md text-label-md text-secondary hover:underline" href="#">View All</a>
          </div>
          <div className="overflow-x-auto bg-surface-container-lowest border border-outline-variant/50 rounded-xl">
            <table className="w-full text-left min-w-[700px]">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/30">
                  <th className="p-md font-label-md text-label-md text-on-surface-variant">Design Preview</th>
                  <th className="p-md font-label-md text-label-md text-on-surface-variant">Order ID</th>
                  <th className="p-md font-label-md text-label-md text-on-surface-variant">Date</th>
                  <th className="p-md font-label-md text-label-md text-on-surface-variant">Status</th>
                  <th className="p-md font-label-md text-label-md text-on-surface-variant">Total</th>
                  <th className="p-md font-label-md text-label-md text-on-surface-variant text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {ORDERS.map(order => (
                  <tr key={order.id} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="p-md">
                      <div className="w-16 h-16 bg-surface-container rounded border border-outline-variant/30 overflow-hidden">
                        <img className="w-full h-full object-cover" alt={order.name} src={order.image} />
                      </div>
                    </td>
                    <td className="p-md font-body-md text-body-md text-on-surface">{order.orderNumber}</td>
                    <td className="p-md font-body-md text-body-md text-on-surface">{order.date}</td>
                    <td className="p-md">
                      <span className={`px-sm py-xs ${order.status === 'Shipped' || order.status === 'In Transit' ? 'bg-secondary-fixed text-on-secondary-fixed-variant' : 'bg-surface-container-high text-on-surface-variant'} rounded-full text-[12px] font-bold`}>{order.status}</span>
                    </td>
                    <td className="p-md font-body-md text-body-md text-on-surface">${order.total.toFixed(2)}</td>
                    <td className="p-md text-right">
                      <button className="px-md py-sm bg-primary text-on-primary rounded font-label-md text-label-md hover:bg-secondary active-scale">Reorder</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Saved Designs Grid */}
        <section className="mb-3xl">
          <div className="flex justify-between items-center mb-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface">Saved Designs</h2>
            <Link to="/designer" className="flex items-center gap-xs font-label-md text-label-md text-secondary hover:underline">
              <span className="material-symbols-outlined text-[18px]">add</span>
              New Design
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-grid-gutter">
            {SAVED_DESIGNS.map(design => (
              <div key={design.id} className="group relative bg-surface-container-low rounded-xl border border-outline-variant/30 overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-square bg-white flex items-center justify-center p-md">
                  <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" alt={design.name} src={design.image} />
                </div>
                <div className="p-md">
                  <p className="font-label-md text-label-md text-on-surface truncate">{design.name}</p>
                  <p className="text-[12px] text-on-surface-variant">{design.lastEdited}</p>
                </div>
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-md transition-opacity">
                  <button className="p-sm bg-white rounded-full text-primary hover:bg-secondary hover:text-white transition-colors">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button className="p-sm bg-white rounded-full text-primary hover:bg-secondary hover:text-white transition-colors">
                    <span className="material-symbols-outlined">shopping_cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MOBILE MAIN CONTENT                                           */}
      {/* ------------------------------------------------------------- */}
      <div className="md:hidden flex-1 px-md w-full">
        {/* User Welcome Section */}
        <section className="py-lg">
          <div className="flex items-center gap-md mb-xl">
            <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center border-2 border-surface-container-high overflow-hidden">
              <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh51E3HM_gXBRY642HsD1yx2KiewjXUUTbBP_r_FGRbTFf23D9YAO5Ju4hLoIjmbaSz56tuoc_5OIoI-G2A8QmSShwOsiScOzXjz_Wu6WlSI-QU4abp7slYyVEn6rKpWTRcQPztyLJtUjAMojVexmHIQqnjfEA7SrYtIIS1sJIpHXWSgHdCy4oi4Gruf41PbO-ooxxymLw9XHqbIPc8u7blwBWZlBD43rwR6B2imjhqqMpDEiBjg6eWrx4Qw4hxm24q2_4yKUkGaA" />
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Hello, Alex</h2>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Manage your style studio</p>
            </div>
          </div>

          {/* Dashboard Tabs */}
          <div className="flex border-b border-outline-variant/30 mb-lg sticky top-[72px] bg-background/95 backdrop-blur-sm z-40 -mx-md px-md">
            <button 
              className={`flex-1 py-md font-label-md text-label-md transition-all ${activeTab === 'orders' ? 'text-secondary border-b-2 border-secondary' : 'text-on-surface-variant border-b-2 border-transparent'}`}
              onClick={() => setActiveTab('orders')}
            >
              Orders
            </button>
            <button 
              className={`flex-1 py-md font-label-md text-label-md transition-all ${activeTab === 'designs' ? 'text-secondary border-b-2 border-secondary' : 'text-on-surface-variant border-b-2 border-transparent'}`}
              onClick={() => setActiveTab('designs')}
            >
              Designs
            </button>
            <button 
              className={`flex-1 py-md font-label-md text-label-md transition-all ${activeTab === 'profile' ? 'text-secondary border-b-2 border-secondary' : 'text-on-surface-variant border-b-2 border-transparent'}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
          </div>

          {/* Content Area: Orders */}
          {activeTab === 'orders' && (
            <div className="space-y-md fade-in">
              <div className="flex justify-between items-center mb-sm">
                <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Recent Orders</h3>
              </div>
              {ORDERS.map(order => (
                <div key={order.id} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-md shadow-sm">
                  <div className="flex gap-md">
                    <div className="w-20 h-20 bg-surface-container-low rounded-lg flex items-center justify-center p-sm">
                      <img className="w-full h-full object-contain" alt={order.name} src={order.image} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <span className={`font-label-sm text-label-sm ${order.status === 'Shipped' || order.status === 'In Transit' ? 'text-secondary bg-secondary-container/20' : 'text-on-surface-variant bg-surface-container'} px-sm py-xs rounded`}>{order.status}</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">{order.orderNumber}</span>
                      </div>
                      <h4 className="font-label-md text-label-md text-on-surface mt-xs">{order.name}</h4>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">{order.details}</p>
                    </div>
                  </div>
                  <div className="mt-md pt-md border-t border-outline-variant/20 flex justify-between items-center">
                    <span className="font-label-md text-label-md text-on-surface">${order.total.toFixed(2)}</span>
                    <button className={order.status === 'Delivered' ? 'bg-surface-container-high text-on-surface px-lg py-sm rounded-lg font-label-md border border-outline-variant/50 flex items-center gap-xs active:scale-95 transition-all' : 'bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md hover:scale-[1.02] active:scale-95 transition-all'}>
                      {order.status === 'Delivered' ? (
                        <><span className="material-symbols-outlined text-[18px]">replay</span>Reorder</>
                      ) : (
                        'Track Order'
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Content Area: Saved Designs */}
          {activeTab === 'designs' && (
            <div className="space-y-md fade-in">
              <div className="flex justify-between items-center mb-sm">
                <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Your Creations</h3>
                <Link to="/designer" className="text-secondary font-label-sm">+ New Design</Link>
              </div>
              <div className="grid grid-cols-1 gap-md">
                {SAVED_DESIGNS.map(design => (
                  <div key={design.id} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm group">
                    <div className="aspect-square bg-surface-container-low relative">
                      <img className="w-full h-full object-contain p-xl" alt={design.name} src={design.image} />
                      <div className="absolute top-md right-md">
                        <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur shadow-md flex items-center justify-center active:scale-95 transition-transform">
                          <span className="material-symbols-outlined text-error text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                        </button>
                      </div>
                    </div>
                    <div className="p-md">
                      <h4 className="font-label-md text-label-md text-on-surface">{design.name}</h4>
                      <p className="font-label-sm text-label-sm text-on-surface-variant mb-md">{design.lastEdited}</p>
                      <div className="flex gap-sm">
                        <Link to="/designer" className="flex-1 bg-primary text-on-primary py-sm rounded-lg font-label-md active:scale-95 transition-all text-center">Edit Design</Link>
                        <button className="w-12 border border-outline-variant rounded-lg flex items-center justify-center hover:bg-surface-container active:scale-95 transition-all">
                          <span className="material-symbols-outlined">share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Content Area: Profile */}
          {activeTab === 'profile' && (
            <div className="space-y-md fade-in">
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-md space-y-md">
                <div className="flex items-center justify-between p-sm hover:bg-surface-container transition-colors rounded-lg cursor-pointer">
                  <div className="flex items-center gap-md">
                    <span className="material-symbols-outlined text-secondary">person_outline</span>
                    <div>
                      <p className="font-label-md text-on-surface">Personal Information</p>
                      <p className="text-[12px] text-on-surface-variant">Name, Email, Phone</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                </div>
                <div className="flex items-center justify-between p-sm hover:bg-surface-container transition-colors rounded-lg cursor-pointer">
                  <div className="flex items-center gap-md">
                    <span className="material-symbols-outlined text-secondary">location_on</span>
                    <div>
                      <p className="font-label-md text-on-surface">Shipping Addresses</p>
                      <p className="text-[12px] text-on-surface-variant">3 saved locations</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                </div>
                <div className="flex items-center justify-between p-sm hover:bg-surface-container transition-colors rounded-lg cursor-pointer">
                  <div className="flex items-center gap-md">
                    <span className="material-symbols-outlined text-secondary">payments</span>
                    <div>
                      <p className="font-label-md text-on-surface">Payment Methods</p>
                      <p className="text-[12px] text-on-surface-variant">Visa ending in 4242</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                </div>
                <div className="flex items-center justify-between p-sm hover:bg-surface-container transition-colors rounded-lg cursor-pointer">
                  <div className="flex items-center gap-md">
                    <span className="material-symbols-outlined text-secondary">notifications</span>
                    <div>
                      <p className="font-label-md text-on-surface">Notifications</p>
                      <p className="text-[12px] text-on-surface-variant">Order updates, Promotions</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                </div>
              </div>
              <button className="w-full py-md text-error font-label-md border border-error/30 rounded-xl active:bg-error/5 transition-colors">Sign Out</button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
