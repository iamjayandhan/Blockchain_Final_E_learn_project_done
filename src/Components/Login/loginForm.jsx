import React, { useState } from 'react';
import "./loginForm.css"
const LoginForm = ({ contract,account,onCloseForm}) => {


  const [userName,setUserName] = useState("");
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
      const isAdmin = await contract.methods.checkAdmin().call({from : account});
      const verify = await contract.methods.Login().call({from : account});
      console.log("VErify : ",verify);
      if(isAdmin){
        alert("Admin Logged in ");
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
    setUserName('');
    onCloseForm()
   

  };
  return (
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
  );
};

export default LoginForm;
