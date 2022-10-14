import React, { useState } from "react";

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]); 
    function handleSubmit(e) {
        e.preventDefault();
      
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
      
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }
    
    return (
        <div>
      <form onSubmit={handleSubmit}>
       <field>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </field>
      <field>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </field>
      <field>
        <button  type="submit">
          Login
        </button>
      </field>
      <field>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </field>
    </form>
        </div>
    );
}

export default LoginForm;