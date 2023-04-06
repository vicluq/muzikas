import React from 'react';
import './Header.css';

import logo from './assets/muzikas.png'
import photo from './assets/Foto.png'

// Tem que fazer o redirect da logo ainda para a main page através da logo
// Substituir a foto placeholder pela foto de perfil q puxar do back

export const Header = () => {
    return (
      <div>
        <div className='header-main-div'>
          <div className='header-aux'/>
          <div className='header-logo'>
            <button>
              <img src={logo}/>
            </button>
          </div>
          <div className='header-user'>
            <p>Olá, {}</p>
            <img src={photo} />
          </div>
        </div>
      </div>
    );
  };
  