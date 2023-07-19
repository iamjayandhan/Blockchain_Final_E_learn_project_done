// Navbar.js

import React, { useEffect, useState } from 'react';
import './navBar.css';
import LoginForm from '../Login/loginForm';
import { Link } from 'react-router-dom'; // Import the Link component from React Router

const Navbar = ({contract,account}) => {
  console.log("NavBar:",account)
  const [isNavActive, setNavActive] = useState(false);
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [user, setUser] = useState(["Unknown"]);
  // const [acc,setAcc] = useState("");
  // const [cont,setCont] = useState("");

  console.log("Navbar - Account:", account);
  console.log("Navbar - Contract:", contract);
 



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

  async function profile(account,contract) {
    console.log("In p:",account)
    try {
      if (!contract) {
        console.log('Contract not initialized.');
        return;
      }
      // const acc = await window.ethereum.request({ method: 'eth_requestAccounts' });
      // setAccount(acc[0]});
      const _userName = await contract.methods.displayUserProfile().call({from : account});
      console.log("Enbna da",_userName);
      setUser(_userName);
      console.log("UserName",_userName);
    } catch (error) {
      console.error('Error retrieving user profile:', error);
    }
  };


  
  useEffect(() => {
    if (contract && account) {
      profile(account,contract);
    }
  }, [contract, account]);

  


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
      <div className="pt-navbar-actions">
        <button onClick={handleSignInClick}>Sign In</button>
        <button>Hello, {user==""? "Admin" : user}</button>
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
