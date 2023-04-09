import React from "react";
import { RouterProvider } from "react-router-dom";
import "./index.css";

import appRouter from "./router";


import { Header } from './pages/components/header/Header';
import { Links } from './pages/components/links/Links';
import { MainSupplier } from './pages/main_fornecedores/MainSupplier';
import { Categories } from './pages/categories/Categories';
import Promotions from './pages/promotions/Promotions';
import router from "./router";
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );

}

export default App;
