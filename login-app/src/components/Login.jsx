import React, { useState } from 'react';

const DEMO_CREDENTIALS = { username: 'admin', password: 'password123' };

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    if (
      username === DEMO_CREDENTIALS.username &&
      password === DEMO_CREDENTIALS.password
    ) {
      onLogin(username);
    } else {
      setError('Invalid username or password.');
    }
  }

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit} noValidate>
        <h2 style={styles.title}>Sign In</h2>

        {error && <p style={styles.error}>{error}</p>}

        <label style={styles.label}>
          Username
          <input
            style={styles.input}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            placeholder="Enter username"
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            style={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="Enter password"
          />
        </label>

        <button style={styles.button} type="submit">
          Login
        </button>

        <p style={styles.hint}>Demo credentials: admin / password123</p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: '#f0f2f5',
    fontFamily: 'sans-serif',
  },
  form: {
    background: '#fff',
    padding: '40px 36px',
    borderRadius: 10,
    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
    width: 340,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  title: {
    margin: '0 0 8px',
    textAlign: 'center',
    color: '#333',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    fontSize: 14,
    color: '#555',
  },
  input: {
    padding: '10px 12px',
    border: '1px solid #ccc',
    borderRadius: 6,
    fontSize: 15,
    outline: 'none',
  },
  button: {
    padding: '11px',
    background: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    fontSize: 16,
    cursor: 'pointer',
    marginTop: 4,
  },
  error: {
    color: '#e74c3c',
    margin: 0,
    fontSize: 13,
    textAlign: 'center',
  },
  hint: {
    margin: 0,
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
};
