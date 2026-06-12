import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import ProductDetails from '../pages/ProductDetails';
import Designer from '../pages/Designer';
import Cart from '../pages/Cart';
import Dashboard from '../pages/Dashboard';
import { PATHS } from '../utils/routes';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* We slice(1) to remove the leading '/' for relative route definitions */}
        <Route path={PATHS.SHOP.slice(1)} element={<Shop />} />
        <Route path={`${PATHS.PRODUCT.slice(1)}/:id`} element={<ProductDetails />} />
        <Route path={PATHS.DESIGNER.slice(1)} element={<Designer />} />
        <Route path={PATHS.CART.slice(1)} element={<Cart />} />
        <Route path={PATHS.DASHBOARD.slice(1)} element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
