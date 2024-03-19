import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {
  const { login, signUp } = useAuth();
  const navigate = useNavigate();
  const [isSignIn, setSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const handleSubmit = async () => {
    if (isSignIn) {
      try {
        await login(email, password);
        navigate('/');
      } catch (error) {
        console.error('Login error:', error);
      }
    } else {
      try {
        await signUp(email, password);
        setRegistrationComplete(true);
      } catch (error) {
        console.error('Sign-up error:', error);
      }
    }
  };

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      fontSize: '2em',
      marginBottom: '20px',
      color: '#333',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    input: {
      width: '30%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '1em',
      boxSizing: 'border-box',
    },
    loginButton: {
      padding: '10px 20px',
      fontSize: '1.2em',
      cursor: 'pointer',
      backgroundColor: '#3498db',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      marginTop: '10px',
    },
    toggleText: {
      marginTop: '15px',
      fontSize: '1.1em',
      color: '#555',
    },
    thankYouMessage: {
      fontSize: '1.5em',
      marginBottom: '20px',
      color: '#27ae60',
    },
    loginLink: {
      color: '#3498db',
      textDecoration: 'none',
      marginLeft: '5px',
    },
  };

  return (
    <div style={styles.container}>
      {registrationComplete ? (
        <div>
          <p style={styles.thankYouMessage}>
            Thank you for registering! Kindly login to explore.
          </p>
          <Link to="/login" style={styles.loginLink}>Go to Login</Link>
        </div>
      ) : (
        <>
          <h2 style={styles.heading}>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
          <form style={styles.form}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              style={styles.input}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={styles.input}
            />
            <button
              type="button"
              onClick={handleSubmit}
              style={styles.loginButton}
            >
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </button>
          </form>
          <p style={styles.toggleText}>
            {isSignIn ? "Don't have an account? " : 'Already have an account? '}
            <Link to="/signup" style={styles.loginLink}>Sign Up</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default Login;