import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const cartItems = [
    { product: products[0], quantity: 1, size: 'M' },
    { product: products[3], quantity: 1, size: 'ONE SIZE' },
  ];
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = 15;
  const total = subtotal + shipping;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(4); // Success step
    }, 2000);
  };

  if (step === 4) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-20 px-container-margin text-center">
        <Helmet>
          <title>Order Confirmed | KORZAE</title>
        </Helmet>
        <span className="material-symbols-outlined text-[64px] text-green-600 mb-6">check_circle</span>
        <h1 className="font-display-lg text-[36px] text-primary mb-4">Order Confirmed</h1>
        <p className="font-body-md text-secondary mb-2">Thank you for your purchase.</p>
        <p className="font-label-caps text-label-caps text-secondary tracking-widest mb-8">
          ORDER NUMBER: #KRZ-{Math.floor(100000 + Math.random() * 900000)}
        </p>
        <Link
          to="/orders"
          className="bg-primary text-on-primary px-8 py-3 font-label-caps text-label-caps tracking-widest hover:bg-opacity-90 transition-all mb-4"
        >
          VIEW ORDER HISTORY
        </Link>
        <Link
          to="/products"
          className="font-label-caps text-label-caps text-primary border-b border-primary hover:text-secondary transition-colors"
        >
          CONTINUE SHOPPING
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-container-margin py-12 min-h-screen">
      <Helmet>
        <title>Checkout | KORZAE</title>
      </Helmet>
      <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-4 custom-scrollbar">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-4 shrink-0">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-label-caps text-[12px] font-bold ${
              step >= s ? 'bg-primary text-on-primary' : 'bg-surface-container text-secondary'
            }`}>
              {step > s ? <span className="material-symbols-outlined text-[16px]">check</span> : s}
            </div>
            <span className={`font-label-caps text-[10px] tracking-widest ${
              step >= s ? 'text-primary' : 'text-secondary'
            }`}>
              {s === 1 ? 'SHIPPING' : s === 2 ? 'PAYMENT' : 'REVIEW'}
            </span>
            {s < 3 && <div className={`w-12 h-[1px] ${step > s ? 'bg-primary' : 'bg-outline-variant'}`} />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
        {/* Main Checkout Flow */}
        <div className="lg:col-span-2">
          {step === 1 && (
            <form onSubmit={handleNext} className="flex flex-col gap-8">
              <h2 className="font-headline-lg-mobile text-primary">Shipping Information</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="First Name" className="col-span-1 korzae-input" />
                <input required placeholder="Last Name" className="col-span-1 korzae-input" />
                <input required type="email" placeholder="Email Address" className="col-span-2 korzae-input" />
                <input required placeholder="Address Line 1" className="col-span-2 korzae-input" />
                <input placeholder="Apartment, suite, etc. (optional)" className="col-span-2 korzae-input" />
                <input required placeholder="City" className="col-span-1 korzae-input" />
                <div className="col-span-1 flex gap-4">
                  <input required placeholder="State" className="col-span-1 korzae-input" />
                  <input required placeholder="ZIP" className="col-span-1 korzae-input" />
                </div>
              </div>
              
              <button type="submit" className="w-full bg-primary text-on-primary py-4 font-button-text text-button-text uppercase tracking-widest mt-4 hover:bg-opacity-90">
                CONTINUE TO PAYMENT
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNext} className="flex flex-col gap-8">
              <h2 className="font-headline-lg-mobile text-primary">Payment Method</h2>
              
              <div className="flex flex-col gap-4">
                <div className="border border-primary p-4 flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" defaultChecked className="accent-black w-4 h-4 cursor-pointer" />
                    <span className="font-body-md font-bold text-primary">Credit Card</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-5 bg-surface-container rounded" />
                    <div className="w-8 h-5 bg-surface-container rounded" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <input required placeholder="Card Number" className="col-span-2 korzae-input" />
                  <input required placeholder="Name on Card" className="col-span-2 korzae-input" />
                  <input required placeholder="MM/YY" className="col-span-1 korzae-input" />
                  <input required placeholder="CVC" className="col-span-1 korzae-input" />
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <button type="button" onClick={() => setStep(1)} className="w-1/3 border border-outline-variant py-4 font-label-caps text-label-caps text-secondary tracking-widest hover:border-primary hover:text-primary">
                  BACK
                </button>
                <button type="submit" className="w-2/3 bg-primary text-on-primary py-4 font-button-text text-button-text uppercase tracking-widest hover:bg-opacity-90">
                  REVIEW ORDER
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-8">
              <h2 className="font-headline-lg-mobile text-primary">Review Your Order</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-surface-container-low p-6">
                <div>
                  <h3 className="font-label-caps text-[10px] text-secondary tracking-widest mb-3">SHIPPING TO</h3>
                  <p className="font-body-md text-primary">John Doe</p>
                  <p className="font-body-md text-secondary">123 Architecture Blvd</p>
                  <p className="font-body-md text-secondary">Apt 4B</p>
                  <p className="font-body-md text-secondary">New York, NY 10001</p>
                </div>
                <div>
                  <h3 className="font-label-caps text-[10px] text-secondary tracking-widest mb-3">PAYMENT METHOD</h3>
                  <p className="font-body-md text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">credit_card</span>
                    Ending in 4242
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 mt-4">
                <button type="button" onClick={() => setStep(2)} disabled={isProcessing} className="w-1/3 border border-outline-variant py-4 font-label-caps text-label-caps text-secondary tracking-widest hover:border-primary hover:text-primary disabled:opacity-50">
                  BACK
                </button>
                <button onClick={handlePlaceOrder} disabled={isProcessing} className="w-2/3 bg-primary text-on-primary py-4 font-button-text text-button-text uppercase tracking-widest hover:bg-opacity-90 flex items-center justify-center gap-2 disabled:opacity-70">
                  {isProcessing ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                      PROCESSING...
                    </>
                  ) : (
                    'PLACE ORDER'
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary Sidebar */}
        <div className="bg-surface-container-low p-8 h-fit">
          <h2 className="font-label-caps text-label-caps tracking-widest text-primary mb-6">IN YOUR BAG</h2>
          
          <div className="flex flex-col gap-6 mb-8 border-b border-outline-variant pb-6">
            {cartItems.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-16 aspect-[4/5] bg-surface-container shrink-0">
                  <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="font-label-caps text-[11px] font-bold text-primary leading-tight">{item.product.name}</h3>
                  <p className="font-label-caps text-[9px] text-secondary tracking-widest mt-1">QTY: {item.quantity} | SIZE: {item.size}</p>
                  <p className="font-label-caps text-label-caps text-primary mt-auto">${item.product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col gap-3 font-label-caps text-[11px] tracking-widest text-secondary border-b border-outline-variant pb-6 mb-6">
            <div className="flex justify-between">
              <span>SUBTOTAL</span>
              <span className="text-primary">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>SHIPPING</span>
              <span className="text-primary">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>TAXES</span>
              <span className="text-primary">Calculated</span>
            </div>
          </div>
          
          <div className="flex justify-between font-headline-lg-mobile text-primary">
            <span>TOTAL</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
