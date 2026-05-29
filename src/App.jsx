import React, { useState } from 'react';
import Login from './components/Login';

const App = () => {
  const [user, setUser] = useState(null);

  if (user) {
    return (
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2>Welcome, {user.username}!</h2>
        <button
          onClick={() => setUser(null)}
          style={{
            padding: '0.5rem 1.5rem',
            backgroundColor: '#ef4444',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  return <Login onLogin={setUser} />;
};

export default App;
