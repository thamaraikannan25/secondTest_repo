import React, { useState } from 'react';
import Login from './components/Login';

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  if (loggedInUser) {
    return (
      <div style={{ textAlign: 'center', marginTop: '4rem', fontFamily: 'sans-serif' }}>
        <h2>Welcome, {loggedInUser}!</h2>
        <button onClick={() => setLoggedInUser(null)} style={{ marginTop: '1rem', padding: '0.5rem 1.5rem', cursor: 'pointer' }}>
          Logout
        </button>
      </div>
    );
  }

  return <Login onLogin={setLoggedInUser} />;
}
