import React, { useState } from 'react';
import Login from './components/Login';

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  if (loggedInUser) {
    return (
      <div style={styles.welcome}>
        <h2>Welcome, {loggedInUser}!</h2>
        <button style={styles.logoutBtn} onClick={() => setLoggedInUser(null)}>
          Logout
        </button>
      </div>
    );
  }

  return <Login onLogin={setLoggedInUser} />;
}

const styles = {
  welcome: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20vh',
    fontFamily: 'sans-serif',
  },
  logoutBtn: {
    marginTop: 16,
    padding: '8px 24px',
    cursor: 'pointer',
    background: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    fontSize: 16,
  },
};
