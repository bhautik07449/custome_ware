export default function PaymentStep() {
  return (
    <section className="step-content space-y-lg md:space-y-xl fade-in">
      <div>
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Payment Method</h1>
        <p className="font-body-md text-on-surface-variant">All transactions are secure and encrypted.</p>
      </div>
      <div className="space-y-md">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-md">
          <button className="flex flex-col items-center gap-sm p-md border border-outline-variant rounded-xl hover:border-secondary transition-all group">
            <span className="material-symbols-outlined text-2xl group-hover:text-secondary">apps</span>
            <span className="font-label-sm text-label-sm">Apple Pay</span>
          </button>
          <button className="flex flex-col items-center gap-sm p-md border border-outline-variant rounded-xl hover:border-secondary transition-all group">
            <span className="material-symbols-outlined text-2xl group-hover:text-secondary">contactless</span>
            <span className="font-label-sm text-label-sm">UPI / QR</span>
          </button>
          <button className="flex flex-col items-center gap-sm p-md border border-outline-variant rounded-xl hover:border-secondary transition-all group">
            <span className="material-symbols-outlined text-2xl group-hover:text-secondary">account_balance</span>
            <span className="font-label-sm text-label-sm">PayPal</span>
          </button>
        </div>
        
        <div className="relative py-md">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant"></div></div>
          <div className="relative flex justify-center"><span className="bg-surface px-md text-on-surface-variant text-sm font-label-md">Or pay with card</span></div>
        </div>

        <div className="bg-surface-container-lowest md:bg-surface-container-low border border-outline-variant/30 md:border-none rounded-2xl p-md md:p-xl space-y-lg shadow-sm md:shadow-none">
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-label-md text-on-surface">Cardholder Name</label>
            <input className="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-md focus:border-secondary focus:ring-0 transition-all outline-none" placeholder="John Doe" type="text" />
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-label-md text-on-surface">Card Number</label>
            <div className="relative">
              <input className="w-full bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-md focus:border-secondary focus:ring-0 transition-all outline-none pr-12" placeholder="0000 0000 0000 0000" type="text" />
              <span className="absolute right-md top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">credit_card</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-md md:gap-lg">
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface">Expiry Date</label>
              <input className="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-md focus:border-secondary focus:ring-0 transition-all outline-none" placeholder="MM / YY" type="text" />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface">CVV</label>
              <input className="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-md focus:border-secondary focus:ring-0 transition-all outline-none" placeholder="***" type="password" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
