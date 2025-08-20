import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://zany-space-waffle-wrxpwq67pr963vg95-3001.app.github.dev/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    if (response.ok) {
      navigate("/login");
    } else {
      const data = await response.json().catch(() => ({}));
      alert(data.msg || "Signup failed");
    }
  };

  return (
    <div className="text-center mt-5">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Signup</button>
        <Link to="/"><button>Go Back</button></Link>
      </form>
    </div>
  );
}