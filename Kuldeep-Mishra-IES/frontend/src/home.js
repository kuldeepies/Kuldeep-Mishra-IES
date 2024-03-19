// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Home = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.heading}>Society Financial Management System</h1>
        <nav>
          <ul style={styles.navList}>
            <li><Link to="/" style={styles.navLink}>Home</Link></li>
            <li><Link to="/about" style={styles.navLink}>About</Link></li>
            <li><Link to="/contact" style={styles.navLink}>Contact</Link></li>
            <li><Link to="/service" style={styles.navLink}>Service</Link></li>
            {isAuthenticated ? (
              <li><button onClick={logout} style={styles.navLink}>Logout</button></li>
            ) : (
              <li><Link to="/login" style={styles.navLink}>Login</Link></li>
            )}
          </ul>
        </nav>
      </header>
      <section style={styles.introSection}>
        <p style={styles.introText}>
          Welcome to the Society Management System. Manage your society efficiently and effortlessly.
        </p>
      </section>
      <section style={styles.missionVisionSection}>
        <h2 style={styles.sectionHeading}>Mission</h2>
        <p style={styles.sectionText}>
          Our mission is to provide transparent and efficient financial management solutions for societies,
          ensuring the well-being and satisfaction of residents.
        </p>
        <h2 style={styles.sectionHeading}>Vision</h2>
        <p style={styles.sectionText}>
          Our vision is to be the leading platform for society financial management, promoting harmony and
          prosperity within communities.
        </p>
      </section>
    </div>
  );
};





const styles = {
  container: {
    backgroundColor: '#f0f0f0',
    color: '#333',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    padding: '20px',
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#3498db',
  },
  heading: {
    fontSize: '3em',
    margin: 0,
    color: '#fff',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    transition: 'color 0.3s ease-in-out',
  },
  introSection: {
    padding: '20px',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  introText: {
    fontSize: '1.5em',
    lineHeight: '1.5',
  },
  missionVisionSection: {
    backgroundColor: '#fff',
    color: '#333',
    padding: '40px',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '20px auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  sectionHeading: {
    fontSize: '2.5em',
    marginBottom: '20px',
    color: '#3498db',
  },
  sectionText: {
    fontSize: '1.2em',
    lineHeight: '1.6',
  },
};

export default Home;
