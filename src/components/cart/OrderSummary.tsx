import { Card } from '../ui/Card';

interface OrderSummaryProps {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  getNextButtonText: () => string;
}

export default function OrderSummary({ currentStep, nextStep, prevStep, getNextButtonText }: OrderSummaryProps) {
  return (
    <aside className="hidden md:block w-[400px] flex-shrink-0">
      <Card variant="flat" className="sticky top-[100px] rounded-2xl p-xl space-y-xl">
        <h2 className="font-headline-md text-headline-md text-on-surface">Order Summary</h2>
        <div className="space-y-md border-b border-outline-variant pb-xl">
          <div className="flex justify-between font-body-md text-on-surface-variant">
            <span>Subtotal</span>
            <span className="text-on-surface font-bold">$130.00</span>
          </div>
          <div className="flex justify-between font-body-md text-on-surface-variant">
            <span>Shipping</span>
            <span className="text-on-surface font-bold">FREE</span>
          </div>
          <div className="flex justify-between font-body-md text-on-surface-variant">
            <span>Tax (Estimated)</span>
            <span className="text-on-surface font-bold">$10.40</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center py-md">
          <span className="font-headline-md text-body-lg font-bold">Total Amount</span>
          <span className="font-headline-md text-headline-md font-extrabold text-on-surface">$140.40</span>
        </div>
        
        <div className="space-y-md pt-md">
          <button 
            className="w-full bg-primary text-on-primary py-lg rounded-xl font-label-md text-label-md flex items-center justify-center gap-md hover:bg-on-surface transition-all active:scale-95 group" 
            onClick={nextStep}
          >
            <span>{getNextButtonText()}</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          
          {currentStep > 1 && (
            <button 
              className="w-full text-on-surface-variant py-md rounded-xl font-label-md text-label-md hover:text-secondary transition-all" 
              onClick={prevStep}
            >
              Back to Previous Step
            </button>
          )}
        </div>
        
        <div className="flex items-center gap-md justify-center pt-md opacity-60">
          <span className="material-symbols-outlined text-md">lock</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest">Secure Checkout</span>
        </div>
      </Card>
    </aside>
  );
}
