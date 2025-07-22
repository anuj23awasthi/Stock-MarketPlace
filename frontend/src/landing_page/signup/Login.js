
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../index.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Removed duplicate and misplaced code block
  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await axios.post(`${BACKEND_URL}/login`, { username, password });
      if (res.data.success) {
        localStorage.setItem('user', JSON.stringify({ username }));
        setMessage('Login successful!');
        setTimeout(() => { window.location.href = `${DASHBOARD_URL}?username=${encodeURIComponent(username)}`; }, 1000);
      } else {
        setMessage(res.data.message || 'Login failed');
      }
    } catch (err) {
      setMessage('Invalid credentials or server error');
    }
  };

  return (
    <div className="signup-bg">
      <div className="signup-card">
        <h2 className="signup-title">Login</h2>
        <form className="signup-fields" onSubmit={handleLogin}>
          <input
            className="signup-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            className="signup-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button className="signup-btn" type="submit">Login</button>
        </form>
        {message && <div className="signup-msg">{message}</div>}
        <div className="signup-msg">
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
