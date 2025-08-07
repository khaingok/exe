'use client';
import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (value) => {
    if (!value.includes('@')) {
      setEmailError('Email must contain "@"');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (value) => {
    if (value.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError && email && password) {
      setSuccessMessage('Login successful!');
    } else {
      setSuccessMessage('');
    }
  };

  const isFormValid = email && password && !emailError && !passwordError;

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
              setSuccessMessage('');
            }}
            onBlur={(e) => validateEmail(e.target.value)}
            className={emailError ? 'error' : ''}
          />
          {emailError && <p className="error-text">{emailError}</p>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
              setSuccessMessage('');
            }}
            onBlur={(e) => validatePassword(e.target.value)}
            className={passwordError ? 'error' : ''}
          />
          {passwordError && <p className="error-text">{passwordError}</p>}
        </div>

        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>

        {successMessage && <p className="success">{successMessage}</p>}
      </form>

      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 90vh;
          background: #f7f7f7;
        }

        .login-form {
          background: white;
          padding: 2rem 2.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 100%;
          color: black;
        }

        h2 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: black;
        }

        .form-group {
          margin-bottom: 1.2rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: black;
        }

        input {
          width: 100%;
          padding: 0.6rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
          color: black;
        }

        input:focus {
          outline: none;
          border-color: #4f46e5;
        }

        .error {
          border-color: #e11d48;
        }

        .error-text {
          color: #e11d48;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }

        .success {
          margin-top: 1rem;
          color: black;
          text-align: center;
          font-weight: 500;
        }

        button {
          width: 100%;
          padding: 0.75rem;
          background-color: #4f46e5;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover:enabled {
          background-color: #4338ca;
        }

        button:disabled {
          background-color: #a5b4fc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
