// Navbar.js

import React, { useState } from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

export default function NavBarOther() {
    const [isNavActive, setNavActive] = useState(false);

    return (
        <nav className={`pt-navbar ${isNavActive ? '-visible' : ''}`}>
          <div className="pt-navbar-logo">
          <a href="https://www.freepnglogos.com/pics/graduation-cap" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/graduation-cap-png/graduation-cap-variant-education-icons-27.png" width="43px" alt="graduation cap variant education icons" />  E-Learning</a>      
          </div>
          <div className={`pt-navbar-navs ${isNavActive ? '-active' : ''}`}>
          <div className="pt-navbar-nav">
        <Link to="/">
            <span>Home</span>
          </Link>
        </div>
        <div className="pt-navbar-nav">
        <Link to="/courses">
            <span>Courses</span>
          </Link>
        </div>
        <div className="pt-navbar-nav">
        <Link to="/about">
            <span>About</span>
          </Link>
        </div>
        <div className="pt-navbar-nav">
        <Link to="/contact">
            <span>Contact</span>
          </Link>
        </div>
      </div>
          
    
        </nav>
      );
}


