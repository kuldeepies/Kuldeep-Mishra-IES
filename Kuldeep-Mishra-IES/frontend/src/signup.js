import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const SignUp = ({ onSignUp }) => {
  const { login } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError('All fields are required');
      return;
    }

    setIsSubmitting(true);

    try {
      const userData = { name, email, phoneNumber };
      login(userData);
      navigate('/');

      if (onSignUp) {
        onSignUp({ name, email, phoneNumber, password });
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError('Error during signup. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign Up</h2>

      <form onSubmit={handleSignUp} style={styles.form}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} />
        </label>

        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
        </label>

        <label>
          Phone Number:
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={styles.input} />
        </label>

        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
        </label>

        {error && <p style={styles.error}>{error}</p>}

        <button type="submit" disabled={isSubmitting} style={styles.signupButton}>
          {isSubmitting ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>

      <p style={styles.toggleText}>
        Already have an account? <Link to="/login" style={styles.link}>Sign In</Link>
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#3498db',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1em',
    boxSizing: 'border-box',
  },
  error: {
    color: 'red',
    margin: '10px 0',
  },
  signupButton: {
    padding: '12px',
    fontSize: '1.2em',
    cursor: 'pointer',
    background: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    marginTop: '10px',
    transition: 'background 0.3s ease',
  },
  signupButtonHover: {
    background: '#2980b9',
  },
  toggleText: {
    marginTop: '15px',
    fontSize: '1.1em',
    color: '#555',
  },
  link: {
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default SignUp;
