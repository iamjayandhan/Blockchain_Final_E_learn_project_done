// Navbar.js

import React, { useState } from 'react';
import './navBar.css';
import LoginForm from '../Login/loginForm';

const Navbar = ({contract,account}) => {
  const [isNavActive, setNavActive] = useState(false);
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [User, setUser] = useState(["Unk"]);

  const handleNavToggle = () => {
    setNavActive((prevNavActive) => !prevNavActive);
  };

 

  const handleSignInClick = () => {
    setLoginFormVisible(true);
  };

  const handleSignUpClick = () => {
    setLoginFormVisible(true);
  };

  const handleCloseLoginForm = () => {
    setLoginFormVisible(false);
  };

  const profile = async () => {
    console.log("In p:",account)
    try {
      if (!contract) {
        console.log('Contract not initialized.');
        return;
      }
      // const acc = await window.ethereum.request({ method: 'eth_requestAccounts' });
      // setAccount(acc[0]});
      const _userName = await contract.methods.displayUserProfile().call({from : account});
      console.log("Enbna da");
      setUser(_userName);
      console.log("UserName",_userName);
    } catch (error) {
      console.error('Error retrieving user profile:', error);
    }
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
        <button onClick={handleSignInClick}>Sign In</button>
        <button onClick={profile}>{User}</button>
      </div>
      <div className="pt-navbar-toggle" onClick={handleNavToggle}>
       
      </div>
      <div className="pt-navbar-bg" onClick={handleNavToggle}></div>
      {isLoginFormVisible &&     <LoginForm
          contract={contract}
          account={account}
          onCloseForm={handleCloseLoginForm} // Pass the function as a prop
        />}

    </nav>
  );
};

export default Navbar;
