'use client';

import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const secs = String(time % 60).padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  const containerStyle = {
    maxWidth: '300px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const buttonStyle = {
    margin: '5px',
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#0070f3',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2>Stopwatch</h2>
      <h1>{formatTime(seconds)}</h1>
      <div>
        <button style={buttonStyle} onClick={handleStart}>Start</button>
        <button style={buttonStyle} onClick={handlePause}>Pause</button>
        <button style={buttonStyle} onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
