import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import ProfileScreen from './components/ProfileScreen';

function App() {
  const [page, setPage] = useState('welcome');
  const [user, setUser] = useState(null);

  const handleNavigate = (targetPage) => {
    setPage(targetPage);
  };

  const handleLogin = (userDetails) => {
    setUser(userDetails);
    setPage('profile');
  };

  const handleRegister = (userDetails) => {
    setUser(userDetails);
    setPage('profile');
  };

  const handleLogout = () => {
    setUser(null);
    setPage('welcome');
  };

  // Render current active screen inside the mockup viewport
  const renderScreen = () => {
    switch (page) {
      case 'welcome':
        return <WelcomeScreen onNavigate={handleNavigate} />;
      case 'login':
        return <LoginScreen onNavigate={handleNavigate} onLogin={handleLogin} />;
      case 'signup':
        return <SignupScreen onNavigate={handleNavigate} onRegister={handleRegister} />;
      case 'profile':
        return <ProfileScreen user={user} onLogout={handleLogout} />;
      default:
        return <WelcomeScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="simulator-wrapper">
      {/* Desktop Dashboard Headers */}
      <div className="desktop-header">
        <h1>PopX Interview Qualifier App</h1>
        <p>Interactive Mobile Simulator Interface Centered & Responsive</p>
      </div>

      {/* Simulated Smartphone Container */}
      <div className="simulator-frame">
        {/* Realistic Status Notch */}
        <div className="simulator-notch"></div>
        
        {/* Device Viewport content */}
        {renderScreen()}
      </div>
    </div>
  );
}

export default App;
