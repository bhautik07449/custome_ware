import { Routes, Route } from 'react-router-dom';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import ProductsPage from '../pages/ProductsPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import ProfilePage from '../pages/ProfilePage';
import OrderHistoryPage from '../pages/OrderHistoryPage';
import OrderDetailPage from '../pages/OrderDetailPage';
import AboutPage from '../pages/AboutPage';
import SearchPage from '../pages/SearchPage';

export default function AppRoutes() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
        <Route path="/orders/:id" element={<OrderDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchPage />} />
        
        <Route
          path="*"
          element={
            <div className="flex flex-col items-center justify-center h-[60vh] gap-4 px-container-margin text-center">
              <span className="material-symbols-outlined text-[64px] text-secondary">error</span>
              <h1 className="font-headline-lg text-headline-lg text-primary">404</h1>
              <p className="font-label-caps text-label-caps text-secondary tracking-widest">
                PAGE NOT FOUND
              </p>
            </div>
          }
        />
      </Routes>
      <Footer />
      <BottomNav />
    </>
  );
}