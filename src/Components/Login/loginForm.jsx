import React, { useState } from 'react';
import "./loginForm.css"
import { isAddress } from 'web3-validator';
import CoursesNadmin from '../../pages/courses/CoursesNadmin';
import Courses from '../../pages/courses/Courses';
import Home from '../home/Home';
import App from '../../App';
import Navbar from '../navBar/NavBar';
const LoginForm = ({ contract,account,onCloseForm}) => {


  const [userName,setUserName] = useState("");
  const [isAdmin,setIsAdmin] = useState(false);

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };

  
  
  console.log("Login Form Contrarct : ",contract);
  console.log("Login Form Account :",account);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!contract) {
        console.log('Contract not initialized.');
        return;
      }
      const isAdmin_ = await contract.methods.checkAdmin().call({from : account});
      const verify = await contract.methods.Login().call({from : account});
      console.log("VErify : ",verify);
      setIsAdmin(isAdmin_);
      console.log("out:",isAdmin_)
      if(isAdmin_){
        console.log("prg : ",isAdmin_);
        alert("Admin Logged in :",isAdmin);
        
      }
      else{
        if(!verify){
          console.log(userName)
          const result = await contract.methods.registerNewUser(userName).send({ from: account});
          if (result) {
            console.log('Submitted username:', userName);
            alert("Registration Successful!");
            console.log('Registration successful!');
          }
          else {
            alert("You already have an account");
            console.log('You already have an account');
        }
        }
        else{
          alert("Log In successful");
        }
      }
      
      
    } catch (error) {
      console.error(error);
    }
    setUserName("");
    // console.log("Admin",isAdmin);
    onCloseForm()
   

  };
   console.log("outfun:",isAdmin);

  return (
    <>
    <div className="modal">
      <div className="modal-content">
        <h2>Enter Your Username</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={handleUsernameChange}
            placeholder="Username"
          />
          <button type="submit">Submit</button>
        </form>
      </div>

    </div>
    <Navbar admin={isAdmin ? "admin" : ""} />

    </>
  );
};

export default LoginForm;

//        { isAdmin ? <CoursesNadmin/>:<h1>Nothing</h1>  }
