import React from 'react';

const ProfileScreen = ({ user, onLogout }) => {
  // Use default "Marry Doe" details if no user state is provided
  const profile = user || {
    name: 'Marry Doe',
    email: 'Marry@Gmail.Com',
    phone: '9999999999',
    company: 'Educase popx',
    agency: 'Yes'
  };

  return (
    <div className="screen-container animate-fade-in" style={{ padding: '0', backgroundColor: 'var(--bg-app)' }}>
      {/* Account Settings Header Bar */}
      <div 
        style={{ 
          backgroundColor: '#FFFFFF', 
          padding: '24px 20px 18px 20px', 
          borderBottom: '1px solid #EAEAEA',
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <span style={{ fontSize: '18px', fontWeight: '500', color: 'var(--text-primary)' }}>
          Account Settings
        </span>
      </div>

      {/* Main Settings Body */}
      <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        
        {/* Profile Card Info Block */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
          
          {/* Avatar Circle with Floating Camera Icon */}
          <div style={{ position: 'relative', width: '80px', height: '80px', flexShrink: '0' }}>
            <img 
              src="/avatar.png" 
              alt={profile.name} 
              style={{ 
                width: '100%', 
                height: '100%', 
                borderRadius: '50%', 
                objectFit: 'cover' 
              }} 
            />
            {/* Violet Camera Edit Icon Overlay */}
            <div 
              style={{ 
                position: 'absolute', 
                bottom: '0', 
                right: '0', 
                backgroundColor: 'var(--primary)', 
                width: '24px', 
                height: '24px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                border: '1.5px solid #FFFFFF',
                cursor: 'pointer'
              }}
              title="Upload profile picture"
            >
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#FFFFFF" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
          </div>

          {/* Name and Email Details */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span 
              style={{ 
                fontSize: '16px', 
                fontWeight: '600', 
                color: 'var(--text-primary)',
                lineHeight: '1.2' 
              }}
            >
              {profile.name}
            </span>
            <span 
              style={{ 
                fontSize: '13px', 
                color: 'var(--text-primary)', 
                marginTop: '4px',
                opacity: '0.8' 
              }}
            >
              {profile.email}
            </span>
          </div>

        </div>

        {/* Bio/Description Text Block */}
        <div style={{ marginBottom: '24px' }}>
          <p 
            style={{ 
              fontSize: '14px', 
              color: 'var(--text-primary)', 
              lineHeight: '1.6',
              fontWeight: '400' 
            }}
          >
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        {/* First Dashed Layout Divider Line */}
        <div 
          style={{ 
            borderTop: '1px dashed #CBCBCB', 
            width: '100%', 
            margin: '0 0 24px 0' 
          }}
        ></div>

        {/* Additional Mock Settings Options (Interactive Details) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1 }}>
          <div style={{ fontSize: '13px', color: '#989898', fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Registered Metadata
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #F1F1F1' }}>
            <span style={{ fontSize: '14px', color: '#626262' }}>Phone Number:</span>
            <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>{profile.phone}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #F1F1F1' }}>
            <span style={{ fontSize: '14px', color: '#626262' }}>Company:</span>
            <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>{profile.company}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #F1F1F1' }}>
            <span style={{ fontSize: '14px', color: '#626262' }}>Agency:</span>
            <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>{profile.agency}</span>
          </div>
        </div>

        {/* Second Dashed Layout Divider Line placed at the bottom */}
        <div 
          style={{ 
            borderTop: '1px dashed #CBCBCB', 
            width: '100%', 
            margin: '24px 0 24px 0' 
          }}
        ></div>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="btn-primary"
          style={{ 
            marginTop: 'auto', 
            backgroundColor: '#FF3B30', 
            boxShadow: '0 4px 12px rgba(255, 59, 48, 0.2)' 
          }}
          aria-label="Logout of account"
        >
          Logout / Sign Out
        </button>

      </div>
    </div>
  );
};

export default ProfileScreen;
