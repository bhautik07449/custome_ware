import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useUser } from '../context/UserContext';

export default function OrderDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { orders } = useUser();

  const order = orders.find((o) => o.id === id);

  if (!order) {
    return (
      <div className="max-w-[1440px] mx-auto px-container-margin py-32 min-h-screen text-center">
        <Helmet>
          <title>Order Not Found | KORZAE</title>
        </Helmet>
        <span className="material-symbols-outlined text-[48px] text-secondary mb-4">search_off</span>
        <h1 className="font-headline-lg text-primary mb-4">Order Not Found</h1>
        <p className="font-body-md text-secondary mb-8">We couldn't find an order with this ID.</p>
        <Link to="/orders" className="bg-primary text-on-primary px-8 py-3 font-label-caps text-label-caps tracking-widest hover:bg-opacity-90 transition-all">
          BACK TO ORDERS
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-container-margin py-12 min-h-screen">
      <Helmet>
        <title>Order {order.id} | KORZAE</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="mb-8">
        <Link to="/orders" className="font-label-caps text-[11px] tracking-widest text-secondary hover:text-primary transition-colors flex items-center gap-2 w-fit">
          <span className="material-symbols-outlined text-[14px]">arrow_back</span>
          BACK TO ORDERS
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <div className="mb-10">
            <h1 className="font-display-lg text-[32px] text-primary tracking-tighter mb-2">Order {order.id}</h1>
            <p className="font-label-caps text-[11px] text-secondary tracking-widest uppercase">
              Placed on {order.date}
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="border border-outline-variant p-6">
              <h2 className="font-label-caps text-label-caps tracking-widest text-primary mb-6">ITEMS IN ORDER</h2>
              <div className="flex flex-col gap-6">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex gap-4 pb-6 border-b border-outline-variant last:border-0 last:pb-0">
                    <div className="w-20 aspect-[4/5] bg-surface-container shrink-0">
                      <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="font-body-md font-semibold text-primary">{item.product.name}</h3>
                      <p className="font-label-caps text-[10px] font-bold text-secondary tracking-widest mt-1 uppercase">SIZE: <span className="text-primary">{item.size}</span></p>
                      <p className="font-label-caps text-[10px] font-bold text-secondary tracking-widest mt-1 uppercase">COLOR: <span className="text-primary">{item.color}</span></p>
                      <p className="font-label-caps text-[10px] font-bold text-secondary tracking-widest mt-1">QTY: <span className="text-primary">{item.quantity}</span></p>
                    </div>
                    <div className="text-right font-body-md font-bold text-primary self-center">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Summary */}
        <div className="w-full md:w-80 shrink-0 flex flex-col gap-6">
          <div className="bg-surface-container-low p-6">
            <h2 className="font-label-caps text-label-caps tracking-widest text-primary mb-6">ORDER SUMMARY</h2>
            
            <div className="flex flex-col gap-3 font-body-md text-secondary border-b border-outline-variant pb-6 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>$0.00</span>
              </div>
            </div>
            
            <div className="flex justify-between font-headline-lg-mobile text-primary mb-2">
              <span>Total</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>

          <div className="border border-outline-variant p-6">
            <h2 className="font-label-caps text-[11px] tracking-widest text-secondary mb-4 uppercase">Status</h2>
            <span className={`font-label-caps text-[10px] tracking-widest px-3 py-1.5 inline-block ${
              order.status === 'DELIVERED' ? 'bg-green-100 text-green-800' : 'bg-surface-container-high text-primary'
            }`}>
              {order.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
