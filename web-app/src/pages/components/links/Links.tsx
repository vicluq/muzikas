import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import './Links.css';

import { Home } from '../../Home';
import { Cars } from '../../Cars';
import { Register } from '../../register/Register';

export const Links = () => {
  return (
    <Router>
      <div className='links-main-div'>
        <ul>
          <li><Link to='/'> Home </Link></li>
          <li><Link to='/cars'> Cars </Link></li>
          <li><Link to='/cadastro'> Cadastro </Link></li>
        </ul>
      </div>

      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/cars' element={<Cars/>} /> 
        <Route path='/cadastro' element={<Register/>} /> 
      </Routes>
    </Router>
  );
};
  