import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CART_ITEMS, UPSELL_ITEMS } from '../data/mockData';

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
      {/* ------------------------------------------------------------- */}
      {/* MOBILE SPECIFIC HEADER                                        */}
      {/* ------------------------------------------------------------- */}
      <header className="md:hidden fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 px-md py-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <button className="flex items-center justify-center p-xs active:scale-95 transition-transform" onClick={() => currentStep > 1 ? prevStep() : navigate(-1)}>
            <span className="material-symbols-outlined text-on-surface">arrow_back</span>
          </button>
          <h1 className="font-headline-md text-headline-md font-bold text-on-surface">CustomWear</h1>
          <div className="w-8"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* DESKTOP HEADER (Fallback if global header is hidden)          */}
      {/* ------------------------------------------------------------- */}
      <header className="hidden md:flex fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 px-grid-margin py-md items-center justify-between">
         <div className="flex items-center gap-xl">
           <Link className="font-headline-md text-headline-md font-bold text-on-surface" to="/">CustomWear</Link>
           <div className="hidden md:flex gap-lg">
             <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200" to="/shop">Shop</Link>
             <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200" to="/designer">Designer</Link>
           </div>
         </div>
         <div className="flex items-center gap-md">
           <Link to="/dashboard" className="p-xs text-on-surface-variant hover:text-secondary transition-colors active:scale-95 flex">
             <span className="material-symbols-outlined">account_circle</span>
           </Link>
         </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* MAIN LAYOUT WRAPPER                                           */}
      {/* ------------------------------------------------------------- */}
      <div className="flex-1 overflow-y-auto pt-[72px] md:pt-[100px] pb-32 md:pb-3xl px-md md:px-grid-margin w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-grid-gutter">
        
        {/* Left Side: Main Content Canvas */}
        <div className="flex-grow space-y-xl w-full">
          
          {/* DESKTOP Stepper Progress Bar */}
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

          {/* MOBILE Multi-Step Progress Indicator */}
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

          <div className="max-w-md md:max-w-none mx-auto space-y-lg w-full">
            {/* Step 1: Cart Items */}
            {currentStep === 1 && (
              <section className="step-content space-y-md fade-in">
                <header className="flex justify-between items-end mb-md">
                  <div>
                    <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Your Cart</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant md:hidden">2 items customized by you</p>
                  </div>
                  <span className="hidden md:inline font-label-md text-label-md text-on-surface-variant">2 Items</span>
                </header>

                <div className="space-y-md">
                  {CART_ITEMS.map((item) => (
                    <div key={item.id} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-md flex flex-row gap-md sm:gap-lg hover:shadow-lg hover:shadow-on-surface/5 transition-all duration-300 shadow-sm md:shadow-none">
                      <div className="w-24 sm:w-32 h-24 sm:h-32 bg-surface-container-low rounded-lg flex-shrink-0 relative overflow-hidden">
                        <img className="w-full h-full object-cover" alt={item.name} src={item.image} />
                        {item.isCustom && <div className="absolute top-1 right-1 bg-secondary/90 text-on-secondary px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Custom</div>}
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-label-md md:font-headline-md text-label-md md:text-body-lg font-bold text-on-surface">{item.name}</h3>
                            <p className="font-label-sm md:font-body-md text-label-sm text-on-surface-variant">Size: {item.size} • Color: {item.color}</p>
                          </div>
                          <span className="hidden md:inline font-headline-md text-body-lg font-bold text-secondary">${item.price.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center mt-sm md:mt-md">
                          <div className="flex items-center gap-md border border-outline-variant rounded-full px-sm py-[2px]">
                            <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant active:scale-75 transition-transform"><span className="material-symbols-outlined text-sm font-bold">remove</span></button>
                            <span className="font-label-md text-label-md">{item.quantity}</span>
                            <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant active:scale-75 transition-transform"><span className="material-symbols-outlined text-sm font-bold">add</span></button>
                          </div>
                          <span className="md:hidden font-headline-md text-label-md text-on-surface font-bold">${item.price.toFixed(2)}</span>
                          <button className="hidden md:flex text-error font-label-md text-label-md items-center gap-xs hover:underline">
                            <span className="material-symbols-outlined text-md">delete</span>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Recommendations / Upsell */}
                <section className="pt-lg md:hidden">
                  <h4 className="font-label-md text-label-md text-on-surface mb-md">Complete your kit</h4>
                  <div className="flex gap-md overflow-x-auto hide-scrollbar pb-md -mx-md px-md">
                    {UPSELL_ITEMS.map((item) => (
                      <div key={item.id} className="bg-surface-container-high rounded-xl p-md min-w-[140px] flex flex-col gap-sm flex-shrink-0">
                        <div className="w-full aspect-square bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant/20">
                          <img className="w-full h-full object-cover" alt={item.name} src={item.image} />
                        </div>
                        <span className="font-label-sm text-label-sm text-on-surface block truncate">{item.name}</span>
                        <span className="font-label-sm text-label-sm font-bold">${item.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Mobile Order Summary Outline */}
                <section className="bg-surface-container-lowest border-t border-outline-variant/30 pt-lg space-y-sm md:hidden">
                  <div className="flex justify-between font-body-md text-body-md">
                    <span className="text-on-surface-variant">Subtotal</span>
                    <span className="text-on-surface">$130.00</span>
                  </div>
                  <div className="flex justify-between font-body-md text-body-md">
                    <span className="text-on-surface-variant">Shipping</span>
                    <span className="text-on-surface font-label-md text-secondary uppercase">Free</span>
                  </div>
                  <div className="flex justify-between font-headline-md text-headline-md pt-md border-t border-outline-variant/10">
                    <span className="text-on-surface">Total</span>
                    <span className="text-on-surface">$130.00</span>
                  </div>
                </section>
              </section>
            )}

            {/* Step 2: Shipping Information */}
            {currentStep === 2 && (
              <section className="step-content space-y-lg md:space-y-xl fade-in">
                <div>
                  <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Shipping Address</h1>
                  <p className="font-body-md text-on-surface-variant">Where should we send your custom pieces?</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg">
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-md text-label-md text-on-surface">First Name</label>
                    <input className="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-md focus:border-secondary focus:ring-0 transition-all outline-none" placeholder="John" type="text" />
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-md text-label-md text-on-surface">Last Name</label>
                    <input className="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-md focus:border-secondary focus:ring-0 transition-all outline-none" placeholder="Doe" type="text" />
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-xs">
                    <label className="font-label-md text-label-md text-on-surface">Street Address</label>
                    <input className="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-md focus:border-secondary focus:ring-0 transition-all outline-none" placeholder="123 Creative Lane" type="text" />
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-md text-label-md text-on-surface">City</label>
                    <input className="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-md focus:border-secondary focus:ring-0 transition-all outline-none" placeholder="San Francisco" type="text" />
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-md text-label-md text-on-surface">ZIP / Postal Code</label>
                    <input className="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-md focus:border-secondary focus:ring-0 transition-all outline-none" placeholder="94103" type="text" />
                  </div>
                </div>
                <div className="space-y-md">
                  <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Delivery Method</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                    <label className="relative flex items-center p-md border-2 border-secondary rounded-xl bg-secondary/5 cursor-pointer">
                      <input defaultChecked className="hidden" name="delivery" type="radio" />
                      <div className="flex-grow">
                        <div className="flex justify-between items-center">
                          <span className="font-label-md text-label-md font-bold">Standard Shipping</span>
                          <span className="font-label-md text-label-md">FREE</span>
                        </div>
                        <p className="font-body-md text-on-surface-variant text-sm mt-xs">5-7 Business Days</p>
                      </div>
                      <span className="material-symbols-outlined text-secondary ml-md" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </label>
                    <label className="relative flex items-center p-md border-2 border-outline-variant rounded-xl hover:border-secondary/50 transition-all cursor-pointer">
                      <input className="hidden" name="delivery" type="radio" />
                      <div className="flex-grow">
                        <div className="flex justify-between items-center">
                          <span className="font-label-md text-label-md font-bold">Express Delivery</span>
                          <span className="font-label-md text-label-md">$15.00</span>
                        </div>
                        <p className="font-body-md text-on-surface-variant text-sm mt-xs">1-2 Business Days</p>
                      </div>
                    </label>
                  </div>
                </div>
              </section>
            )}

            {/* Step 3: Payment Section */}
            {currentStep === 3 && (
              <section className="step-content space-y-lg md:space-y-xl fade-in">
                <div>
                  <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Payment Method</h1>
                  <p className="font-body-md text-on-surface-variant">All transactions are secure and encrypted.</p>
                </div>
                <div className="space-y-md">
                  {/* Digital Wallets */}
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

                  {/* Credit Card Form */}
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
            )}
          </div>
        </div>

        {/* Right Side: Order Summary (Desktop) */}
        <aside className="hidden md:block w-[400px] flex-shrink-0">
          <div className="sticky top-[100px] bg-surface-container-low rounded-2xl p-xl border border-outline-variant space-y-xl">
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
          </div>
        </aside>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MOBILE Sticky Bottom Checkout Action                          */}
      {/* ------------------------------------------------------------- */}
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
