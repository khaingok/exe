'use client';
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '0.5rem 1rem',
        backgroundColor: theme === 'light' ? '#333' : '#eee',
        color: theme === 'light' ? '#fff' : '#000',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}
