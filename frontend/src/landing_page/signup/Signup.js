import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL;

function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const res = await axios.post(`${BACKEND_URL}signup`, form);
      // Store the exact username entered at signup in localStorage for dashboard display
      if (res.data && (res.data.success || res.data._id)) {
        localStorage.setItem('user', JSON.stringify({ username: form.username }));
        setMsg("Signup successful! Redirecting to dashboard...");
        setTimeout(() => { window.location.href = `${DASHBOARD_URL}?username=${encodeURIComponent(form.username)}`; }, 1000);
      } else {
        setMsg("Signup failed. User may already exist.");
      }
    } catch {
      setMsg("Signup failed. User may already exist.");
    }
  };

  return (
    <div className="signup-bg">
      <form className="signup-card" onSubmit={handleSubmit}>
        <h2 className="signup-title">Create your account</h2>
        <div className="signup-fields">
          <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            value={form.username}
            required
            className="signup-input"
          />
          <input
            name="email"
            type="email"
            placeholder="Gmail ID"
            onChange={handleChange}
            value={form.email}
            required
            className="signup-input"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
            required
            className="signup-input"
          />
      
        </div>
        <button type="submit" className="signup-btn">Sign up</button>
            <div className="signup-msg" style={{color:msg.includes("success")?"#2563eb":"#e74c3c"}}>
              {msg}
              <br />
              Already have an account? <a href="/login">Login</a>
            </div>
      </form>
    </div>
  );
}

export default Signup;
