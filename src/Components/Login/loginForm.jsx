import React, { useState } from 'react';
import "./loginForm.css"
const LoginForm = ({ onClose }) => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending the username to the server
    console.log('Submitted username:', username);
    setUsername('');
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Enter Your Username</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
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
