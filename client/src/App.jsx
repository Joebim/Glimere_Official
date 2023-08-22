import './App.css'
import { lazy, Suspense } from 'react'
import { Routes, useLocation } from 'react-router-dom'
import { Route } from 'react-router-dom'
const AdminDashboard = lazy(() => import('./auth/AdminDashboard'));
const About = lazy(() => import('./pages/About'));
const Profile = lazy(() => import('./pages/Profile'));
const Cart = lazy(() => import('./pages/Cart'));
const Navbar = lazy(() => import('./global-components/Navbar'));
const Login = lazy(() => import('./auth/Login'));
const Register = lazy(() => import('./auth/Register'));
const Home = lazy(() => import('./pages/Home'));
const ForgotPassword = lazy(() => import('./auth/ForgotPassword'));
const ViewProduct = lazy(() => import('./components/ViewProduct'));
const Orders = lazy(() => import('./pages/Orders'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const Search = lazy(() => import('./components/Search'));
const Footer = lazy(() => import('./components/Footer'));
const Newsletter = lazy(() => import('./components/Newsletter'));
const Checkout = lazy(() => import('./pages/Checkout'));
const ViewCollection = lazy(() => import('./components/ViewCollection'));
const ViewAll = lazy(() => import('./components/ViewAll'));
const Stores = lazy(() => import('./pages/stores'));
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './auth/Auth'


function App() {

  const location = useLocation();

  const hideNavbarRoutes = ['/login'];

  const hideFooterRoutes = ['login', 'view-product'];

  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  const showFooter = !hideFooterRoutes.includes(location.pathname.split('/')[1]);

  const showNewsletter = !hideFooterRoutes.includes(location.pathname.split('/')[1]);


  return (
    <>
      {/* <AuthProvider> */}
      <Suspense fallback={<div>Loading...</div>}>
        {showNavbar && <Navbar />}
        <Routes>
          {/* Authentication routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Protected routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/view-product/:id" element={<ViewProduct />} />
          <Route path="/view-collection/:id" element={<ViewCollection />} />
          <Route path="/view-all/:id" element={<ViewAll />} />
          <Route path="/search" element={<Search />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/stores" element={<Stores />} />


        </Routes>
        {showNewsletter && <Newsletter />}
        {showFooter && <Footer />}
        <ToastContainer />
        {/* </AuthProvider> */}
      </Suspense>

    </>
  )
}

export default App
