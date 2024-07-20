import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLogin, onToggleSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://18.218.141.58:8000/api/login/', {
        username,
        password,
      });
      onLogin(response.data.token); // Ensure response.data.token matches what the backend sends
    } catch (error) {
      console.error('Login error:', error.response || error.message); // Log detailed error
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Login</button>
      </form>
      <button onClick={onToggleSignup}>Sign Up</button>
    </div>
  );
}

export default Login;
