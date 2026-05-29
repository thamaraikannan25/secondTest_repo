import { useState } from 'react';

export default function LoginForm() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError('Username and password are required.');
      return;
    }
    // Mock auth: accept admin/password
    if (formData.username === 'admin' && formData.password === 'password') {
      setSuccess(true);
    } else {
      setError('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setSuccess(false);
    setFormData({ username: '', password: '' });
    setError('');
  };

  if (success) {
    return (
      <div className="login-success">
        <h2>Welcome, {formData.username}!</h2>
        <p>You have successfully logged in.</p>
        <button onClick={handleLogout}>Log out</button>
      </div>
    );
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
      </div>
      <button type="submit">Login</button>
      <p className="hint">Demo credentials: admin / password</p>
    </form>
  );
}
