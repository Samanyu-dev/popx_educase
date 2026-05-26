import React, { useState } from 'react';

const LoginScreen = ({ onNavigate, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    // Basic regex validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    // Trigger successful login passing the entered email (or fallback to Marry Doe details)
    onLogin({
      name: 'Marry Doe',
      email: email,
      phone: '9999999999',
      company: 'Educase popx',
      agency: 'Yes'
    });
  };

  return (
    <div className="screen-container animate-fade-in" style={{ paddingTop: '24px' }}>
      {/* Header Block */}
      <div className="screen-header-block" style={{ marginBottom: '24px' }}>
        <h1 className="screen-title" style={{ fontSize: '28px' }}>Signin to your PopX account</h1>
        <p className="screen-subtitle" style={{ fontSize: '15px', color: '#626262', marginTop: '6px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      {/* Main Login Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div className="input-group">
          <input
            type="email"
            id="current-email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError('');
            }}
            placeholder="Enter email address"
            autocomplete="username"
            required
            enterkeyhint="next"
          />
          <label htmlFor="current-email">Email Address</label>
        </div>

        <div className="input-group" style={{ marginBottom: '12px' }}>
          <input
            type="password"
            id="current-password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError('');
            }}
            placeholder="Enter password"
            autocomplete="current-password"
            required
            enterkeyhint="done"
          />
          <label htmlFor="current-password">Password</label>
        </div>

        {error && (
          <div style={{ color: '#FF2525', fontSize: '13px', marginBottom: '16px', fontWeight: '500' }}>
            {error}
          </div>
        )}

        {/* Login Button positioned at top container style or pushed lower, original design places it right below fields */}
        <button
          type="submit"
          className="btn-primary"
          disabled={!isFormValid}
          style={{
            marginTop: '12px',
            backgroundColor: isFormValid ? 'var(--primary)' : '#CBCBCB',
            boxShadow: isFormValid ? '0 4px 12px rgba(108, 37, 255, 0.2)' : 'none',
            color: '#FFFFFF'
          }}
          aria-label="Log in to your account"
        >
          Login
        </button>
      </form>

      {/* Back to welcome navigation */}
      <div style={{ marginTop: 'auto', textAlign: 'center', paddingTop: '20px' }}>
        <button 
          onClick={() => onNavigate('welcome')}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'var(--primary)', 
            fontSize: '14px', 
            fontWeight: '600', 
            cursor: 'pointer' 
          }}
        >
          ← Back to Welcome
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
