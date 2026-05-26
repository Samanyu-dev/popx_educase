import React from 'react';

const WelcomeScreen = ({ onNavigate }) => {
  return (
    <div className="screen-container animate-fade-in" style={{ justifyContent: 'flex-end', minHeight: '100%' }}>
      {/* Lower portion content matching original XD Layout */}
      <div className="screen-header-block" style={{ marginBottom: '28px', marginTop: '0' }}>
        <h1 className="screen-title">Welcome to PopX</h1>
        <p className="screen-subtitle" style={{ fontSize: '16px', color: '#626262', marginTop: '6px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div className="screen-footer" style={{ marginBottom: '16px' }}>
        <button 
          className="btn-primary" 
          onClick={() => onNavigate('signup')}
          aria-label="Create new account"
        >
          Create Account
        </button>
        <button 
          className="btn-secondary" 
          style={{ backgroundColor: '#D8C2FF', color: '#1D2226' }}
          onClick={() => onNavigate('login')}
          aria-label="Already registered, login"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
