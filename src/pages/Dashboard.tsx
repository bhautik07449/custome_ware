import { useState } from 'react';
import { Link } from 'react-router-dom';

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
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="p-md">
                    <div className="w-16 h-16 bg-surface-container rounded border border-outline-variant/30 overflow-hidden">
                      <img className="w-full h-full object-cover" alt="Order Preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFmqxhcDBFklQNBQ_CwRv10M-iJnpRMnRLcUqxxfXDjrHbTDuiwuI39_hS1ZmaOvK12QaFn9yp1PjlF2lBAF7I76phsdy3a-wFyTu5fR8MgKyNJEHsKX1Ar5cOMWYrwRqAL2QhswX8Er1AGVW7aOfl1Icwuger16WAxt2rD_q2rEbiYDJoMxgxt_B2Qlppw9gXZNF94f2izj9tr6xXiQEcPNiU0Tv0WrQ0_NXzTzCj4tIRXkGE14jazMnM21U7ZRPqbVcBFKve0Y8" />
                    </div>
                  </td>
                  <td className="p-md font-body-md text-body-md text-on-surface">#CW-92831</td>
                  <td className="p-md font-body-md text-body-md text-on-surface">Oct 24, 2023</td>
                  <td className="p-md">
                    <span className="px-sm py-xs bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-[12px] font-bold">Shipped</span>
                  </td>
                  <td className="p-md font-body-md text-body-md text-on-surface">$42.00</td>
                  <td className="p-md text-right">
                    <button className="px-md py-sm bg-primary text-on-primary rounded font-label-md text-label-md hover:bg-secondary active-scale">Reorder</button>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="p-md">
                    <div className="w-16 h-16 bg-surface-container rounded border border-outline-variant/30 overflow-hidden">
                      <img className="w-full h-full object-cover" alt="Order Preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO6QBkIcxd5vIV-it495Mu4fMeEKdCClusR-wK12AdpTIvNgU-qMxNbu-rmAK2u9BDzAk7RrFz1D-3ZdAFGjlzjheiSsR3oJwMg-vBololLlMxfcWM8sVOdVIhAs7JHetRKrke6P7tmA3CSe1ZZv0ChBH4vZHPCvr0VoM2ZjXzw3EBV1mqXOhufVEV-_5javvCebsQssyoPc5ZtUjIa_GHmMSKF0O1CHarJQsnKlw9tDDWBo1uQ6KLHB7siRxRv59t58uZZv31ZLE" />
                    </div>
                  </td>
                  <td className="p-md font-body-md text-body-md text-on-surface">#CW-92804</td>
                  <td className="p-md font-body-md text-body-md text-on-surface">Oct 12, 2023</td>
                  <td className="p-md">
                    <span className="px-sm py-xs bg-surface-container-high text-on-surface-variant rounded-full text-[12px] font-bold">Delivered</span>
                  </td>
                  <td className="p-md font-body-md text-body-md text-on-surface">$38.50</td>
                  <td className="p-md text-right">
                    <button className="px-md py-sm bg-primary text-on-primary rounded font-label-md text-label-md hover:bg-secondary active-scale">Reorder</button>
                  </td>
                </tr>
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
            <div className="group relative bg-surface-container-low rounded-xl border border-outline-variant/30 overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-square bg-white flex items-center justify-center p-md">
                <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" alt="Minimalist Peak" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk_567VbS9O15Eg-1p7vMBLO4hQ028hsF5fp9CMM0vsCPGg84Ag_1BCb4msU0fUNK_PDgsHGZui_SbrrWo5Zk2zAm1NqDvx-vVbiakSCkpv29JtuhqqanlBvsj7ecRjrbY62L1zLo2KB-Pa193TEb_irJO--mKVOb4QL8V-5AW4v9JcuBNzv-Z-HeQuEt6LzeoJuUHXAqTpiKQZNb6kEqV49xfk_PMLseQtxb-HMMxA-7HDpwpy-FIIB3LBStv6-ZoIqfucxK55Wo" />
              </div>
              <div className="p-md">
                <p className="font-label-md text-label-md text-on-surface truncate">Minimalist Peak</p>
                <p className="text-[12px] text-on-surface-variant">Edited 2 days ago</p>
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
            
            <div className="group relative bg-surface-container-low rounded-xl border border-outline-variant/30 overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-square bg-white flex items-center justify-center p-md">
                <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" alt="Neon Pulse" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjxL63nLSlASU7Q_k5kl4-dP0RwLEnC9CYKyYVN-dOLRsAvf8qFW2WMxL0Gm-vcZEYmB5htS5v9mrVuDT90KujTGTi0c_JGkPr-U5941-6VZ-bYSiUFWXIi4WAcWp8ULkWelGNCai80tNNbCnGcBfVASyifnEGOCA4jN7xPrWQR0osFT2DZmds0GAVxysV6QYwAfuBcyCepTzaEyx_pVOIQqLTXDqIDM_-a6I7Gy-Q3umrCHDhAZB_mKYU8XBYTOa1nR4mmlUljYo" />
              </div>
              <div className="p-md">
                <p className="font-label-md text-label-md text-on-surface truncate">Neon Pulse</p>
                <p className="text-[12px] text-on-surface-variant">Edited 1 week ago</p>
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

            <div className="group relative bg-surface-container-low rounded-xl border border-outline-variant/30 overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-square bg-white flex items-center justify-center p-md">
                <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" alt="Forest Emblem" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYeKv6h-GvrUwAuA1K_4Vew6EStbky1eukSI3q05nCph5Zw31zWshJBSathGlSup2U-SowzeA1aETM7kVMbE8N5tromnLCaHuG6rSNjQtJ-6Yn9sF4_K5m9UxyJjNE6LfXKfwY4pvoCNE8CKLBRURuSTEYOLrzvyTz06JTC0Vu7C8puO0h9cUFcPhA_IIzTLsV19dqPpSGrxt1GCzUGnp6alihdzRRkI368prmk7gNDykrvPpp1qI8J52u_5GnUOEdU3ykkE2jb0Q" />
              </div>
              <div className="p-md">
                <p className="font-label-md text-label-md text-on-surface truncate">Forest Emblem</p>
                <p className="text-[12px] text-on-surface-variant">Edited 2 weeks ago</p>
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

            <div className="group relative bg-surface-container-low rounded-xl border border-outline-variant/30 overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-square bg-white flex items-center justify-center p-md">
                <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" alt="Digital Dusk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG40XCoolQBCkfwGTD67tDu6SrssVHpnD7rmTnVYpORS0u5d96ql6A5SxRqzzd_-psx-E7oe9NLOZbFYkLE1CQAE0RFe4fqGBqKP_9hPJOgwaDME6S4M_JjZTOEJyYdgnET08CJaBhaD58x-C6mksmzyTQbMtbloB8EEvZFNyBrnwm03zBs7_Oy4QO_t6olNrwMSN8UesJnrEoWIibxdetNZqI2_UKM-s2KslWwtstQc9nt15tyBzZW4ySkv2-y_57rLy0augBIzc" />
              </div>
              <div className="p-md">
                <p className="font-label-md text-label-md text-on-surface truncate">Digital Dusk</p>
                <p className="text-[12px] text-on-surface-variant">Edited 1 month ago</p>
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
              {/* Order Card 1 */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-md shadow-sm">
                <div className="flex gap-md">
                  <div className="w-20 h-20 bg-surface-container-low rounded-lg flex items-center justify-center p-sm">
                    <img className="w-full h-full object-contain" alt="Abstract Geometry Tee" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAym2t6jaH51uJUJuEJijX1UCtl9LE1uvoTiArUmiQjrsSKp5qLbnKTXFdqtGxq97YL4Urnu3Wxse4x6jrwRADV2U5ch28VpU9vr7lk-c7CC4xi4yG3r2wY431-qXj04dQ0Lp-fJmrGxJP-iQnKmbdE-I7VylgExdkGHyhvtzqTx64alqwtrbbj7d1kCxk_4hknzZ2CDggoOAYtZcwCra2UJdB_-gZZUL_O5huvM5g7j9zO0Q120gDF1UMSa_YpCx6A76iJxUyHPXs" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <span className="font-label-sm text-label-sm text-secondary bg-secondary-container/20 px-sm py-xs rounded">In Transit</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">#ORD-8821</span>
                    </div>
                    <h4 className="font-label-md text-label-md text-on-surface mt-xs">Abstract Geometry Tee</h4>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Size L • Custom Navy</p>
                  </div>
                </div>
                <div className="mt-md pt-md border-t border-outline-variant/20 flex justify-between items-center">
                  <span className="font-label-md text-label-md text-on-surface">$45.00</span>
                  <button className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md hover:scale-[1.02] active:scale-95 transition-all">Track Order</button>
                </div>
              </div>
              {/* Order Card 2 */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-md shadow-sm">
                <div className="flex gap-md">
                  <div className="w-20 h-20 bg-surface-container-low rounded-lg flex items-center justify-center p-sm">
                    <img className="w-full h-full object-contain" alt="Minimalist Studio Crew" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByBOoiV4eeUXJljxbu5MBxByJckZCD6gJXcpRmqsQXgU_HwVFEVisNfedXNEiQEblRvwbMmASua3_gjNIB735ZUIVoL0PlLhJlbvS6VH9Ylo7-Njovm0f98YLQ-i5LcA6i82s-_pU9BsuxykZkA-YWqTbd8G2QToT76GABqf-wgoDWERJAt9zBwdzcdOS-vXNyJsH5SBKGtg749XDSrYUouhJCSGHuEfVY6M5HVY4jm2vbuq7NCFVg-N8c9g4Po16tJ7TXJg7wQyI" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-sm py-xs rounded">Delivered Oct 12</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">#ORD-7742</span>
                    </div>
                    <h4 className="font-label-md text-label-md text-on-surface mt-xs">Minimalist Studio Crew</h4>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Size M • Stealth Black</p>
                  </div>
                </div>
                <div className="mt-md pt-md border-t border-outline-variant/20 flex justify-between items-center">
                  <span className="font-label-md text-label-md text-on-surface">$72.00</span>
                  <button className="bg-surface-container-high text-on-surface px-lg py-sm rounded-lg font-label-md border border-outline-variant/50 flex items-center gap-xs active:scale-95 transition-all">
                    <span className="material-symbols-outlined text-[18px]">replay</span>
                    Reorder
                  </button>
                </div>
              </div>
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
                {/* Design Card 1 */}
                <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm group">
                  <div className="aspect-square bg-surface-container-low relative">
                    <img className="w-full h-full object-contain p-xl" alt="Urban Echo Prototype" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoHpA59Rz_6qw59Jnei3UMB3Yw9mWHsha1Zxo2pxtsle1256NXVmOxlbNK5KSN2JNKYIrDSx110qUzoS5KQ8qjt9tNebPzkWBWAUcSO1QD9ghi4LbkjAmyac4tRdUndayT1lmsk5q1LJsoXfe20VVzCUp_ub7MYgC2li9sKLkdFNdypTOJsCkuNEKxQ1flQ6Stg-Ytf9uzTyb-NOs_Sikh_3Rhi0MPAXja7Gm0raYGQ3oAP2PUqpVe7uldkPZmDlwBFvSO44_OK98" />
                    <div className="absolute top-md right-md">
                      <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur shadow-md flex items-center justify-center active:scale-95 transition-transform">
                        <span className="material-symbols-outlined text-error text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                      </button>
                    </div>
                  </div>
                  <div className="p-md">
                    <h4 className="font-label-md text-label-md text-on-surface">Urban Echo Prototype</h4>
                    <p className="font-label-sm text-label-sm text-on-surface-variant mb-md">Last edited 2 days ago</p>
                    <div className="flex gap-sm">
                      <Link to="/designer" className="flex-1 bg-primary text-on-primary py-sm rounded-lg font-label-md active:scale-95 transition-all text-center">Edit Design</Link>
                      <button className="w-12 border border-outline-variant rounded-lg flex items-center justify-center hover:bg-surface-container active:scale-95 transition-all">
                        <span className="material-symbols-outlined">share</span>
                      </button>
                    </div>
                  </div>
                </div>
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
