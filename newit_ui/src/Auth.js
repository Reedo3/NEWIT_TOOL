import React, { useState } from 'react';
import axios from 'axios';

// React Forms are how we interact with buttons and actually do stuff in the code.
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a request to the user authentication microservice to authenticate the user
      const response = await axios.post('http://localhost:3002/authenticate', { username, password });

      // If the user was successfully authenticated, display a success message
      if (response.data.authenticated) {
        alert('Login successful!');
      } else {
        setError('Invalid username or password.');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while logging in.');
    }
  };

  return (
    // We defined the function handleSubmit which is an eventHandler when the Submit gets pressed.
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
      </div>
      {error && <div>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
}

// This is an export default function, so this will be called into the App.js
export default LoginForm;
