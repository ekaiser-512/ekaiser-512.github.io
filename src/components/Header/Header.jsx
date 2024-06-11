import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/">Emily Kaiser</a>
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/project">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

