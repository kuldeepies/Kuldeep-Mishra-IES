// Contact.js

import React from 'react';
import contactImage from './contactus.jpg'; // Replace with your actual image path

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <img src={contactImage} alt="Contact" style={styles.image} />

      <p style={styles.description}>
        <b>Have questions or need assistance? Feel free to reach out to us. We are here to help!</b>
      </p>

      <div style={styles.contactInfo}>
        <div>
          <strong>Email:</strong>{' '}
          <a href="mailto:info@societymanagement.com" style={styles.link}>
            info@societymanagement.com
          </a>
        </div>
        <div>
          <strong>Phone:</strong>{' '}
          <a href="tel:+1234567890" style={styles.link}>
            +123 456 7890
          </a>
        </div>
      </div>

      <p style={styles.thanks}>We look forward to hearing from you!</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '80px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#3498db', // Background color
    color: '#ecf0f1', // Text color
  },
  heading: {
    fontSize: '3em',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '15px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2em',
    marginBottom: '20px',
  },
  contactInfo: {
    fontSize: '1.2em',
    marginBottom: '20px',
  },
  link: {
    color: '#ecf0f1', // Text color for links
    textDecoration: 'none',
    fontWeight: 'bold',
    marginLeft: '5px',
  },
  thanks: {
    fontSize: '1.5em',
  },
};

export default Contact;
