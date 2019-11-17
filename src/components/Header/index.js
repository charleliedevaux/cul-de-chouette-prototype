import React from 'react';

import './styles.sass';


const backHome = () => {
  document.location = '/';
};

// Presentational Component
const Header = () => {
  return <a onClick={backHome}>
    <header className="app-header">
      <h1 className="app-header-title">
        Cul de Chouette !
      </h1>
    </header>
  </a>;
};


export default Header;
