import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from 'react-router-dom'

import AuthProvider from './context/auth'
import ProtectedRoute from './components/ProtectedRoute'
import LoginSuppliers from './pages/LoginSuppliers/LoginSuppliers'
import SingleProduct from './pages/products/SingleProduct'
import { RegisterSupplier } from './pages/RegisterSupplier/RegisterSupplier'
import { Categories } from './pages/categories/Categories'
import { Home } from './pages/Home'
import Promotions from './pages/promotions/Promotions'
import Search from './pages/Search'
import { Products } from './pages/products/Products'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AuthProvider />}>
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/product/edit/:id" element={<h1>Edit product Page</h1>} />
      <Route path="/search" element={<Search />} />
      <Route path="/login" element={<h1>Common user login</h1>} />
      <Route path="/register" element={<h1>Common user login</h1>} />
      <Route path="/supplier/login" element={<LoginSuppliers />} />
      <Route path="/supplier/register" element={<RegisterSupplier />} />
      <Route path="/supplier/promotions" element={<Promotions />} />
      <Route
        path="/supplier/categories"
        element={
          <ProtectedRoute shouldBeSupplier>
            <Categories />
          </ProtectedRoute>
        }
      />
    </Route>,
  ),
)

export default router
