// filepath: [Private.jsx](http://_vscodecontentref_/0)
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Private() {
    const [user, setUser] = useState(null);

const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;
        fetch("https://zany-space-waffle-wrxpwq67pr963vg95-3001.app.github.dev/api/protected", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(() => setUser(null));
    }, []);

    if (!user) return <div>Loading or not authorized</div>;
    return (
        <div>
            <h1>Private Page</h1>
            <button onClick={() => {
                localStorage.removeItem("token");
                setUser(null);
                navigate("/login");
            }}>Log Out!</button>
        </div>
    );
}