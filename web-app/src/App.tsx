import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';

function App() {
  return (
      <Router> 
        <ul>
          <li><Link to='/'> Home </Link> </li>
          <li><Link to='/cars'> Cars </Link> </li>
        </ul>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/cars' element={<Cars/>} /> 
        </Routes>        
      </Router>
  );
}

export default App;
