export default function ProductBenefits() {
  return (
    <div className="hidden md:grid grid-cols-2 gap-lg pt-lg border-t border-outline-variant/30 mt-md">
      <div className="flex items-start gap-md">
        <span className="material-symbols-outlined text-secondary">eco</span>
        <div>
          <p className="font-label-md text-label-md">Organic Cotton</p>
          <p className="font-label-sm text-label-sm text-on-surface-variant">Sustainably sourced</p>
        </div>
      </div>
      <div className="flex items-start gap-md">
        <span className="material-symbols-outlined text-secondary">local_shipping</span>
        <div>
          <p className="font-label-md text-label-md">Free Shipping</p>
          <p className="font-label-sm text-label-sm text-on-surface-variant">On orders over $50</p>
        </div>
      </div>
    </div>
  );
}
