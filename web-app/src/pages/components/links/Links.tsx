import React from 'react';
import { Link } from 'react-router-dom';

import './Links.css';

import { MainSupplier } from '../../main_fornecedores/MainSupplier';
import { Cars } from '../../Cars';
import { RegisterSupplier } from '../../RegisterSupplier/RegisterSupplier';

export const Links = () => {
  return (
    <div className='links-main-div'>
      <ul>
        <li><Link to='/'> Home </Link></li>
        <li><Link to=''> Meus Produtos </Link></li>
        <li><Link to=''> Minhas Categorias </Link></li>
        <li><Link to=''> Minhas Promoções </Link></li>
      </ul>
    </div>
  );
};
