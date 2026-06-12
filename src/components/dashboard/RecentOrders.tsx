import { ORDERS } from '../../data/mockData';

export default function RecentOrders() {
  return (
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
  );
}
