import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useUser } from '../context/UserContext';

export default function OrderHistoryPage() {
  const { orders } = useUser();

  return (
    <div className="max-w-[1440px] mx-auto px-container-margin py-12 min-h-screen">
      <Helmet>
        <title>Order History | KORZAE</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Sidebar Nav */}
        <div className="w-full md:w-64 shrink-0">
          <h1 className="font-display-lg text-[32px] text-primary mb-8 tracking-tighter">My Account</h1>
          <nav className="flex flex-col gap-4">
            <Link to="/profile" className="font-label-caps text-label-caps text-secondary hover:text-primary transition-colors py-2 border-b border-transparent">
              PROFILE DETAILS
            </Link>
            <Link to="/orders" className="font-label-caps text-label-caps text-primary border-b border-primary py-2 font-bold">
              ORDER HISTORY
            </Link>
            <button className="font-label-caps text-label-caps text-secondary hover:text-error transition-colors py-2 border-b border-transparent text-left">
              LOG OUT
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <h2 className="font-headline-lg-mobile text-primary mb-8">Order History</h2>
          
          <div className="flex flex-col gap-6">
            {orders.map((order) => (
              <div key={order.id} className="border border-outline-variant p-6 flex flex-col md:flex-row justify-between md:items-center gap-6 hover:border-primary transition-colors">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
                  <div>
                    <p className="font-label-caps text-[9px] text-secondary tracking-widest mb-1">ORDER NUMBER</p>
                    <p className="font-body-md text-primary">{order.id}</p>
                  </div>
                  <div>
                    <p className="font-label-caps text-[9px] text-secondary tracking-widest mb-1">DATE PLACED</p>
                    <p className="font-body-md text-primary">{order.date}</p>
                  </div>
                  <div>
                    <p className="font-label-caps text-[9px] text-secondary tracking-widest mb-1">TOTAL AMOUNT</p>
                    <p className="font-body-md text-primary">${order.total.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="font-label-caps text-[9px] text-secondary tracking-widest mb-1">STATUS</p>
                    <span className={`font-label-caps text-[10px] tracking-widest px-2 py-1 ${
                      order.status === 'DELIVERED' ? 'bg-green-100 text-green-800' : 'bg-surface-container-high text-primary'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
                
                <Link to={`/orders/${order.id}`} className="shrink-0 border-b border-primary font-label-caps text-[11px] text-primary pb-1 hover:text-secondary hover:border-secondary transition-colors self-start md:self-auto uppercase tracking-widest">
                  VIEW DETAILS
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
