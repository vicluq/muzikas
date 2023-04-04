import React from 'react';
import './Header.css';
import logo from './assets/muzikas.png'

// Tem que fazer o redirect da logo ainda para a main page

export const Header = () => {
    return (
      <div>
        <div className='header-main-div'>
          <img src={logo}/> 
        </div>
      </div>
    );
  };
  