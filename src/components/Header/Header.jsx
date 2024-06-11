import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">Emily Kaiser</Link>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to='/?showProjects=true'>Projects</Link></li>
          <li><Link to='https://github.com/ekaiser-512?tab=repositories'>GitHub</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

