import React from 'react';
import './Header.module.scss';

function Header() {
    return (
      <header className="header">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;
