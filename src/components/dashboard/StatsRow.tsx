import { Card } from '../ui/Card';

export default function StatsRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter mb-3xl">
      <Card className="p-lg">
        <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm">Active Orders</p>
        <p className="font-headline-md text-headline-md text-on-surface">02</p>
      </Card>
      <Card className="p-lg">
        <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm">Total Designs</p>
        <p className="font-headline-md text-headline-md text-on-surface">14</p>
      </Card>
      <Card className="p-lg">
        <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm">Voucher Credit</p>
        <p className="font-headline-md text-headline-md text-secondary">$25.00</p>
      </Card>
    </div>
  );
}
