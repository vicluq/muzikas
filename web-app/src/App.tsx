import React from "react";
import { RouterProvider } from "react-router-dom";
import "./index.css";

import {
  Routes,
  Route,
} from 'react-router-dom'

import AuthProvider from './context/auth'
import LoginSuppliers from './pages/LoginSuppliers/LoginSuppliers'
import SingleProduct from './pages/products/SingleProduct'
import { RegisterSupplier } from './pages/RegisterSupplier/RegisterSupplier'
import { Categories } from './pages/categories/Categories'
import { Home } from './pages/Home'
import Promotions from './pages/promotions/Promotions'
import Search from './pages/Search'
import { Products } from './pages/products/Products'
import { Header } from './pages/components/header/Header';
import { Links } from './pages/components/links/Links';
import { MainSupplier } from './pages/main_fornecedores/MainSupplier';


function App() {
  return (
    <AuthProvider>
      <Routes>
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
            <Categories />
          }
        />
      </Routes>
    </AuthProvider>
  );

}

export default App;