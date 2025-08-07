'use client';
import React from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

export default function Home() {
  const { theme } = useTheme();

  const styles = {
    container: {
      backgroundColor: theme === 'light' ? '#fff' : '#1a1a1a',
      color: theme === 'light' ? '#000' : '#fff',
      minHeight: '100vh',
      padding: '2rem',
      transition: '0.3s all ease-in-out',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to the Theme Switcher App</h1>
      <p>The current theme is <strong>{theme}</strong>.</p>
      <ThemeToggle />
    </div>
  );
}
