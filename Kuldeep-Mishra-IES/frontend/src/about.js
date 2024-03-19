import React from 'react';
import societyImage from './Society-Software.png'; // Replace with your actual image paths

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.heading}>Welcome to Society Management System</h2>
        <div style={styles.imageContainer}>
          <img src={societyImage} alt="Society" style={styles.image} />
        </div>
        <p>
          At Society Management System, we aim to revolutionize the management of your housing society's financial operations. Our cloud-based application simplifies the process of collecting monthly maintenance fees and ensures transparent and efficient financial management.
        </p>
        <p>
          <b>Say goodbye to manual spreadsheet errors and tedious calculations. With eSociety, you can easily calculate monthly funds, manage corpus funds, and estimate costs for planned activities seamlessly.</b>
        </p>
        <p>
          <strong>Key Features:</strong>
        </p>
        <ul style={styles.featureList}>
          <li>Automated Monthly Maintenance Calculation</li>
          <li>Transparent Financial Reporting</li>
          <li>Maker-Checker Approval Workflow</li>
          <li>Invoice Generation for Outward Payments</li>
          <li>Year-over-Year Spending Reports</li>
        </ul>
        <p>
          <b>Join us in creating a hassle-free and transparent financial environment for your housing society.</b>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#2c3e50', // Background color for the entire page
    color: '#ecf0f1', // Text color
  },
  content: {
    maxWidth: '800px',
    width: '100%',
    textAlign: 'left',
    background: '#34495e', // Content background color
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
  },
  heading: {
    fontSize: '2.5em',
    marginBottom: '20px',
    color: '#3498db',
  },
  imageContainer: {
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  featureList: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '1.2em',
    marginLeft: '20px',
  },
};

export default About;
