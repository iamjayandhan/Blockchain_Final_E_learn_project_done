// Navbar.js

import React, { useState } from 'react';
import './navBar.css';

const Navbar = () => {
  const [isNavActive, setNavActive] = useState();

  const handleNavToggle = () => {
    setNavActive((prevNavActive) => !prevNavActive);
  };

  return (
    <nav className={`pt-navbar ${isNavActive ? '-visible' : ''}`}>
      <div className="pt-navbar-logo">
      <a href="https://www.freepnglogos.com/pics/graduation-cap" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/graduation-cap-png/graduation-cap-variant-education-icons-27.png" width="43px" alt="graduation cap variant education icons" />  E-Learning</a>      
      </div>
      <div className={`pt-navbar-navs ${isNavActive ? '-active' : ''}`}>
        <div className="pt-navbar-nav">
          <a href="/">
            <span>Home</span>
          </a>
        </div>
        <div className="pt-navbar-nav">
          <a href="/courses">
            <span>Courses</span>
          </a>
        </div>
        <div className="pt-navbar-nav">
          <a href="/about">
            <span>About</span>
          </a>
        </div>
        <div className="pt-navbar-nav">
          <a href="/contact">
            <span>Contact</span>
          </a>
        </div>
      </div>
      <div className="pt-navbar-actions">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
      <div className="pt-navbar-toggle" onClick={handleNavToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="pt-navbar-bg" onClick={handleNavToggle}></div>
      <div className="pt-navbar-fill">
        <div className="pt-navbar-nav -active">
          <a href="/">
            <span>Home</span>
          </a>
          <a href="/about">
            <span>About</span>
          </a>
          <a href="/services">
            <span>Services</span>
          </a>
          <a href="/contact">
            <span>Contact</span>
          </a>
        </div>
        <div className="pt-navbar-actions">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
