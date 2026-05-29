import { useState } from 'react';
import Login from './components/Login';

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  if (loggedInUser) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Welcome, {loggedInUser}!</h2>
        <p style={{ marginTop: '0.5rem', color: '#555' }}>You are now logged in.</p>
        <button
          onClick={handleLogout}
          style={{
            marginTop: '1.5rem',
            padding: '0.5rem 1.5rem',
            background: '#ef4444',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.95rem',
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  return <Login onLogin={handleLogin} />;
}
