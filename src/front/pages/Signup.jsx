import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"

export function Signup() {
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}