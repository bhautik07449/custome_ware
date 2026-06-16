import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import ProductDetails from '../pages/ProductDetails';
import Designer from '../pages/Designer';
import Cart from '../pages/Cart';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Favorites from '../pages/Favorites';
import Collections from '../pages/Collections';
import Templates from '../pages/Templates';
import Terms from '../pages/Terms';
import Privacy from '../pages/Privacy';
import Support from '../pages/Support';
import Contact from '../pages/Contact';
import Shipping from '../pages/Shipping';
import Refunds from '../pages/Refunds';
import { PATHS } from '../utils/routes';
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={PATHS.SHOP.slice(1)} element={<Shop />} />
        <Route path={`${PATHS.PRODUCT.slice(1)}/:id`} element={<ProductDetails />} />
        <Route path={PATHS.DESIGNER.slice(1)} element={<Designer />} />
        <Route path={PATHS.CART.slice(1)} element={<Cart />} />
        <Route path={PATHS.DASHBOARD.slice(1)} element={<Dashboard />} />
        <Route path={PATHS.LOGIN.slice(1)} element={<Login />} />
        <Route path={PATHS.SIGNUP.slice(1)} element={<Signup />} />
        <Route path={PATHS.FAVORITES.slice(1)} element={<Favorites />} />
        <Route path={PATHS.COLLECTIONS.slice(1)} element={<Collections />} />
        <Route path={PATHS.TEMPLATES.slice(1)} element={<Templates />} />
        <Route path={PATHS.TERMS.slice(1)} element={<Terms />} />
        <Route path={PATHS.PRIVACY.slice(1)} element={<Privacy />} />
        <Route path={PATHS.SUPPORT.slice(1)} element={<Support />} />
        <Route path={PATHS.CONTACT.slice(1)} element={<Contact />} />
        <Route path={PATHS.SHIPPING.slice(1)} element={<Shipping />} />
        <Route path={PATHS.REFUNDS.slice(1)} element={<Refunds />} />
      </Route>
    </Routes>
  );
}