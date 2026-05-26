import React, { useState } from 'react';

const SignupScreen = ({ onNavigate, onRegister }) => {
  // Initial states set to "Marry Doe" to match the XD screenshot exactly, but fully editable!
  const [fullName, setFullName] = useState('Marry Doe');
  const [phoneNumber, setPhoneNumber] = useState('Marry Doe');
  const [emailAddress, setEmailAddress] = useState('Marry Doe');
  const [password, setPassword] = useState('Marry Doe');
  const [companyName, setCompanyName] = useState('Marry Doe');
  const [isAgency, setIsAgency] = useState('yes'); // yes or no, defaults to 'yes' (Yes checked in screenshot)
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName.trim() || !phoneNumber.trim() || !emailAddress.trim() || !password.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    // Determine the email format for presentation (if it's Marry Doe, format as a real email Marry@Gmail.Com)
    let finalEmail = emailAddress;
    if (emailAddress === 'Marry Doe') {
      finalEmail = 'Marry@Gmail.Com';
    }

    setError('');
    onRegister({
      name: fullName,
      email: finalEmail,
      phone: phoneNumber,
      company: companyName,
      agency: isAgency === 'yes' ? 'Yes' : 'No'
    });
  };

  return (
    <div className="screen-container animate-fade-in" style={{ paddingTop: '20px' }}>
      {/* Header Block */}
      <div className="screen-header-block" style={{ marginBottom: '24px', marginTop: '12px' }}>
        <h1 className="screen-title" style={{ fontSize: '28px' }}>Create your PopX account</h1>
      </div>

      {/* Main Registration Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        
        {/* Full Name* */}
        <div className="input-group required">
          <input
            type="text"
            id="reg-fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter full name"
            required
            enterkeyhint="next"
          />
          <label htmlFor="reg-fullname">Full Name</label>
        </div>

        {/* Phone number* */}
        <div className="input-group required">
          <input
            type="text"
            id="reg-phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            required
            enterkeyhint="next"
          />
          <label htmlFor="reg-phone">Phone number</label>
        </div>

        {/* Email address* */}
        <div className="input-group required">
          <input
            type="text"
            id="reg-email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            placeholder="Enter email address"
            required
            enterkeyhint="next"
          />
          <label htmlFor="reg-email">Email address</label>
        </div>

        {/* Password* */}
        <div className="input-group required">
          <input
            type="text"
            id="reg-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
            enterkeyhint="next"
          />
          <label htmlFor="reg-password">Password</label>
        </div>

        {/* Company name */}
        <div className="input-group">
          <input
            type="text"
            id="reg-company"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter company name"
            enterkeyhint="done"
          />
          <label htmlFor="reg-company">Company name</label>
        </div>

        {/* Agency Selection (Radio Buttons) */}
        <div className="agency-selection">
          <span className="agency-label">Are you an Agency?<span>*</span></span>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={isAgency === 'yes'}
                onChange={() => setIsAgency('yes')}
              />
              <span className="radio-custom"></span>
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={isAgency === 'no'}
                onChange={() => setIsAgency('no')}
              />
              <span className="radio-custom"></span>
              No
            </label>
          </div>
        </div>

        {error && (
          <div style={{ color: '#FF2525', fontSize: '13px', marginBottom: '16px', fontWeight: '500' }}>
            {error}
          </div>
        )}

        {/* Create Account Submit Button */}
        <button
          type="submit"
          className="btn-primary"
          style={{ marginTop: 'auto', marginBottom: '16px' }}
          aria-label="Create your account"
        >
          Create Account
        </button>
      </form>

      {/* Back navigation */}
      <div style={{ textAlign: 'center', paddingBottom: '10px' }}>
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

export default SignupScreen;
