import React from 'react';
import './Header.css';
import logo from './assets/muzikas.png'

export const SimpleHeader = () => {
    return (
      <div>
        <div className='header-main-div'>
          <div className='header-aux'/>
          <div className='header-logo'>
            <img src={logo}/>
          </div>
        </div>
      </div>
    );
  };
  