import React from 'react';
import './Header.css'; // CSS para el header

const Header = () => {
  return (
    <header className="header">
      <h1>Punto de Pago Air</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/flights">Flights</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
