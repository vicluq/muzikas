import React from 'react';
import './index.css';

import { Header } from './pages/components/header/Header';
import { Links } from './pages/components/links/Links';
import { Register } from './pages/register/Register';
import { MainSupplier } from './pages/main_fornecedores/MainSupplier';
import { Categories } from './pages/categories/Categories';
import Promotions from './pages/promotions/Promotions';
function App() {
  return (
    <div>
      <Promotions />
    </div>
  );
}

export default App;
