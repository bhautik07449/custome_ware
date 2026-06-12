import { PATHS } from '../../utils/routes';
import { Link } from 'react-router-dom';
import { ORDERS, SAVED_DESIGNS } from '../../data/mockData';

interface MobileDashboardProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function MobileDashboard({ activeTab, setActiveTab }: MobileDashboardProps) {
  return (
    <div className="md:hidden flex-1 px-md w-full">
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

        {activeTab === 'designs' && (
          <div className="space-y-md fade-in">
            <div className="flex justify-between items-center mb-sm">
              <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Your Creations</h3>
              <Link to={PATHS.DESIGNER} className="text-secondary font-label-sm">+ New Design</Link>
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
                      <Link to={PATHS.DESIGNER} className="flex-1 bg-primary text-on-primary py-sm rounded-lg font-label-md active:scale-95 transition-all text-center">Edit Design</Link>
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
  );
}
