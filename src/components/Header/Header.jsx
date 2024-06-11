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
          <li><a href='/?showProjects=true'>Projects</a></li>
          <li><a href='https://github.com/ekaiser-512?tab=repositories'>GitHub</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

