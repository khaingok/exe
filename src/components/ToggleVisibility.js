'use client'; // Required because we're using useState

import React, { useState } from 'react';

export default function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '30px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px 0',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#0070f3',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={toggleContent}>
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>

      {isVisible && (
        <p style={{ marginTop: '20px' }}>
          This is some sample text that appears when you click the button!
        </p>
      )}
    </div>
  );
}
