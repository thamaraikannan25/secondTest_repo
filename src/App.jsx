import React from 'react';
import Login from './components/Login';

function App() {
  function handleLogin({ email, password }) {
    console.log('Login attempted with:', email);
  }

  return (
    <div className="app">
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
