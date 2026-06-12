import { PATHS } from '../utils/routes';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartStepper from '../components/cart/CartStepper';
import CartItemsStep from '../components/cart/CartItemsStep';
import ShippingStep from '../components/cart/ShippingStep';
import PaymentStep from '../components/cart/PaymentStep';
import OrderSummary from '../components/cart/OrderSummary';

export default function Cart() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const navigate = useNavigate();

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert('Order Successfully Placed! Redirecting to tracking...');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getNextButtonText = () => {
    if (currentStep === 1) return 'Proceed to Shipping';
    if (currentStep === 2) return 'Proceed to Payment';
    return 'Complete Purchase';
  };

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex flex-col w-full relative">

      <header className="md:hidden fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 px-md py-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <button className="flex items-center justify-center p-xs active:scale-95 transition-transform" onClick={() => currentStep > 1 ? prevStep() : navigate(-1)}>
            <span className="material-symbols-outlined text-on-surface">arrow_back</span>
          </button>
          <h1 className="font-headline-md text-headline-md font-bold text-on-surface">CustomWear</h1>
          <div className="w-8"></div> {/* Spacer for centering */}
        </div>
      </header>

      <header className="hidden md:flex fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 px-grid-margin py-md items-center justify-between">
        <div className="flex items-center gap-xl">
          <Link className="font-headline-md text-headline-md font-bold text-on-surface" to={PATHS.HOME}>CustomWear</Link>
          <div className="hidden md:flex gap-lg">
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200" to={PATHS.SHOP}>Shop</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200" to={PATHS.DESIGNER}>Designer</Link>
          </div>
        </div>
        <div className="flex items-center gap-md">
          <Link to={PATHS.DASHBOARD} className="p-xs text-on-surface-variant hover:text-secondary transition-colors active:scale-95 flex">
            <span className="material-symbols-outlined">account_circle</span>
          </Link>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto pt-[72px] md:pt-[100px] pb-32 md:pb-3xl px-md md:px-grid-margin w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-grid-gutter">

        <div className="flex-grow space-y-xl w-full">
          <CartStepper currentStep={currentStep} />

          <div className="max-w-md md:max-w-none mx-auto space-y-lg w-full">
            {currentStep === 1 && <CartItemsStep />}
            {currentStep === 2 && <ShippingStep />}
            {currentStep === 3 && <PaymentStep />}
          </div>
        </div>

        <OrderSummary
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
          getNextButtonText={getNextButtonText}
        />
      </div>

      <footer className="md:hidden fixed bottom-0 w-full bg-surface-container-lowest border-t border-outline-variant px-grid-margin py-md safe-area-pb z-50">
        <div className="max-w-md mx-auto space-y-sm">
          <button
            className="w-full bg-primary text-on-primary py-md rounded-xl font-label-md text-label-md flex items-center justify-center gap-md active:scale-95 transition-transform duration-100"
            onClick={nextStep}
          >
            {getNextButtonText()}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <div className="flex items-center justify-center gap-sm">
            <span className="material-symbols-outlined text-sm text-on-surface-variant">lock</span>
            <span className="text-[10px] font-label-sm text-on-surface-variant uppercase tracking-widest">Secure 256-bit encrypted payment</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
