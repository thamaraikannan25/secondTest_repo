import React, { useState } from 'react';
import './Login.css';

const DEMO_CREDENTIALS = { username: 'admin', password: 'password123' };

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password.trim()) {
      setError('Username and password are required.');
      return;
    }

    if (username === DEMO_CREDENTIALS.username && password === DEMO_CREDENTIALS.password) {
      onLogin(username);
    } else {
      setError('Invalid username or password.');
    }
  }

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <h1 className="login-title">Sign In</h1>

        {error && <p className="login-error" role="alert">{error}</p>}

        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          placeholder="Enter username"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          placeholder="Enter password"
        />

        <button type="submit">Login</button>

        <p className="login-hint">Demo — username: <code>admin</code> / password: <code>password123</code></p>
      </form>
    </div>
  );
}
