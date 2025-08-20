import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("https://zany-space-waffle-wrxpwq67pr963vg95-3001.app.github.dev/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("token", data.token); // Save JWT
            navigate("/private");
        } else {
            alert("Login failed");
        }
    };

    return (
        <form onSubmit={handleLogin}>
           <div className="text-center mt-5">
            <h1>Login</h1>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <br />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <br />
            <button type="submit">Login</button>
            <Link to="/signup"><button>Sign up</button></Link>
            <br />
            <Link to="/"><button>Go Back</button></Link>
            </div>
        </form>
    );
}