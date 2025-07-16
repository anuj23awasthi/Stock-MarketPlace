import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      await axios.post("http://localhost:3001/signup", form);
      setMsg("Signup successful! Please login.");
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
