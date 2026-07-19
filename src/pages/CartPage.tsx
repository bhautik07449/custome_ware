import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';

export default function CartPage() {
  // Dummy cart data for display
  const cartItems = [
    { product: products[0], quantity: 1, size: 'M' },
    { product: products[3], quantity: 1, size: 'ONE SIZE' },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="max-w-[1440px] mx-auto px-container-margin py-12 min-h-screen">
      <Helmet>
        <title>Shopping Cart | KORZAE</title>
      </Helmet>
      <h1 className="font-display-lg text-[36px] tracking-tighter text-primary mb-10">
        Your Cart
      </h1>
      
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <span className="material-symbols-outlined text-[48px] text-secondary mb-4">
            shopping_bag
          </span>
          <p className="font-headline-lg-mobile text-headline-lg-mobile text-secondary mb-6">
            Your cart is empty
          </p>
          <Link
            to="/products"
            className="bg-primary text-on-primary px-8 py-3 font-label-caps text-label-caps tracking-widest hover:bg-opacity-90 transition-all"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="hidden md:grid grid-cols-5 gap-4 pb-4 border-b border-outline-variant font-label-caps text-[10px] text-secondary tracking-widest">
              <div className="col-span-2">PRODUCT</div>
              <div className="text-center">PRICE</div>
              <div className="text-center">QUANTITY</div>
              <div className="text-right">TOTAL</div>
            </div>
            
            {cartItems.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center pb-8 border-b border-outline-variant">
                <div className="col-span-2 flex gap-4">
                  <div className="w-24 aspect-[4/5] bg-surface-container shrink-0">
                    <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-body-md font-semibold text-primary">{item.product.name}</h3>
                    <p className="font-label-caps text-[12px] font-bold text-secondary tracking-widest mt-1">SIZE: <span className="text-primary">{item.size}</span></p>
                    <p className="font-label-caps text-[12px] font-bold text-secondary tracking-widest mt-1">COLOR: <span className="text-primary">{item.product.colors[0].label.toUpperCase()}</span></p>
                    <button className="text-left font-label-caps text-[10px] text-error mt-3 hover:underline">REMOVE</button>
                  </div>
                </div>
                
                <div className="hidden md:block text-center font-body-md text-[16px] font-bold text-primary">
                  ${item.product.price.toFixed(2)}
                </div>
                
                <div className="flex justify-start md:justify-center items-center gap-4">
                  <div className="flex items-center border border-outline-variant">
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container active:scale-90 transition-all">
                      <span className="material-symbols-outlined text-[16px]">remove</span>
                    </button>
                    <span className="w-8 text-center font-label-caps text-label-caps">{item.quantity}</span>
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container active:scale-90 transition-all">
                      <span className="material-symbols-outlined text-[16px]">add</span>
                    </button>
                  </div>
                </div>
                
                <div className="text-left md:text-right font-body-md text-[16px] font-bold text-primary">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-surface-container-low p-8 h-fit sticky top-24">
            <h2 className="font-label-caps text-label-caps tracking-widest text-primary mb-6">ORDER SUMMARY</h2>
            
            <div className="flex flex-col gap-4 font-body-md text-secondary border-b border-outline-variant pb-6 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-primary">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            
            <div className="flex justify-between font-headline-lg-mobile text-primary mb-8">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <Link
              to="/checkout"
              className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary py-4 font-button-text text-button-text uppercase tracking-widest hover:bg-opacity-90 transition-all"
            >
              PROCEED TO CHECKOUT
              <span className="material-symbols-outlined text-[18px]">lock</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
