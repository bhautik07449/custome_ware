interface CartStepperProps {
  currentStep: number;
}

export default function CartStepper({ currentStep }: CartStepperProps) {
  return (
    <>
      <div className="hidden md:flex bg-surface-container-low rounded-xl p-md items-center justify-between mb-xl">
        <div className="flex-1 flex flex-col items-center gap-xs">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${currentStep >= 1 ? (currentStep === 1 ? 'bg-secondary text-on-secondary ring-4 ring-secondary/20' : 'bg-secondary text-on-secondary') : 'bg-surface-container-highest text-on-surface-variant'}`}>
            <span className="material-symbols-outlined text-md">{currentStep > 1 ? 'check' : 'shopping_cart'}</span>
          </div>
          <span className={`font-label-sm text-label-sm ${currentStep >= 1 ? 'text-secondary' : 'text-on-surface-variant'}`}>Cart</span>
        </div>
        <div className="flex-1 h-1 bg-outline-variant/30 rounded-full mx-md relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-secondary transition-all duration-500" style={{ width: currentStep > 1 ? '100%' : (currentStep === 1 ? '50%' : '0%') }}></div>
        </div>
        
        <div className="flex-1 flex flex-col items-center gap-xs">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${currentStep >= 2 ? (currentStep === 2 ? 'bg-secondary text-on-secondary ring-4 ring-secondary/20' : 'bg-secondary text-on-secondary') : 'bg-surface-container-highest text-on-surface-variant'}`}>
            <span className="material-symbols-outlined text-md">{currentStep > 2 ? 'check' : 'local_shipping'}</span>
          </div>
          <span className={`font-label-sm text-label-sm ${currentStep >= 2 ? 'text-secondary' : 'text-on-surface-variant'}`}>Shipping</span>
        </div>
        <div className="flex-1 h-1 bg-outline-variant/30 rounded-full mx-md relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-secondary transition-all duration-500" style={{ width: currentStep > 2 ? '100%' : (currentStep === 2 ? '50%' : '0%') }}></div>
        </div>
        
        <div className="flex-1 flex flex-col items-center gap-xs">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${currentStep === 3 ? 'bg-secondary text-on-secondary ring-4 ring-secondary/20' : 'bg-surface-container-highest text-on-surface-variant'}`}>
            <span className="material-symbols-outlined text-md">payments</span>
          </div>
          <span className={`font-label-sm text-label-sm ${currentStep === 3 ? 'text-secondary' : 'text-on-surface-variant'}`}>Payment</span>
        </div>
      </div>

      <nav className="md:hidden bg-surface-container-lowest -mx-md px-md py-md mb-lg border-b border-outline-variant/30">
        <div className="flex items-center justify-between max-w-md mx-auto relative">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant/30 -translate-y-1/2 z-0"></div>
          <div className="absolute top-1/2 left-0 h-[2px] bg-secondary -translate-y-1/2 z-10 transition-all duration-500" style={{ width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '100%' }}></div>
          
          <div className="relative z-20 flex flex-col items-center gap-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-label-md text-label-md transition-all ${currentStep >= 1 ? 'bg-secondary text-on-secondary' : 'bg-surface-container-highest text-on-surface-variant border-2 border-outline-variant/50'}`}>{currentStep > 1 ? <span className="material-symbols-outlined text-sm">check</span> : '1'}</div>
            <span className={`font-label-sm text-label-sm ${currentStep >= 1 ? 'text-secondary' : 'text-on-surface-variant'}`}>Cart</span>
          </div>
          <div className="relative z-20 flex flex-col items-center gap-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-label-md text-label-md transition-all ${currentStep >= 2 ? 'bg-secondary text-on-secondary' : 'bg-surface-container-highest text-on-surface-variant border-2 border-outline-variant/50'}`}>{currentStep > 2 ? <span className="material-symbols-outlined text-sm">check</span> : '2'}</div>
            <span className={`font-label-sm text-label-sm ${currentStep >= 2 ? 'text-secondary' : 'text-on-surface-variant'}`}>Shipping</span>
          </div>
          <div className="relative z-20 flex flex-col items-center gap-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-label-md text-label-md transition-all ${currentStep >= 3 ? 'bg-secondary text-on-secondary' : 'bg-surface-container-highest text-on-surface-variant border-2 border-outline-variant/50'}`}>3</div>
            <span className={`font-label-sm text-label-sm ${currentStep >= 3 ? 'text-secondary' : 'text-on-surface-variant'}`}>Payment</span>
          </div>
        </div>
      </nav>
    </>
  );
}
