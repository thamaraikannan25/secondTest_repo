import React, { useState } from 'react';
import LoginForm from './LoginForm';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setUsername(user);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUsername('');
    setLoggedIn(false);
  };

  if (loggedIn) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>Welcome, {username}!</h2>
        <button onClick={handleLogout} style={{ marginTop: '1rem', padding: '0.5rem 1.5rem', cursor: 'pointer' }}>
          Logout
        </button>
      </div>
    );
  }

  return <LoginForm onLogin={handleLogin} />;
}
