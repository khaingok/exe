'use client';

import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const containerStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#0070f3',
    color: 'white',
  };

  const resetButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#e63946',
  };

  return (
    <div style={containerStyle}>
      <h2>Counter</h2>
      <p style={{ fontSize: '24px' }}>Count: {count}</p>
      <div>
        <button style={buttonStyle} onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button style={buttonStyle} onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button style={resetButtonStyle} onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}
