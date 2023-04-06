import React from 'react';
import './index.css';

import { Header } from './pages/components/header/Header';
import { Links } from './pages/components/links/Links';
import { Register } from './pages/register/Register';
import { MainSupplier } from './pages/main_fornecedores/MainSupplier';
 
function App() {
  return (
      <div>
        <MainSupplier />
      </div>
  );
}

export default App;
