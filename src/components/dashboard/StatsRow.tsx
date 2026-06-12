export default function StatsRow() {
  return (
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
  );
}
