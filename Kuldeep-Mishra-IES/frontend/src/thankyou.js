// ThankYou.js
import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div>
      <p>Thank you for registering! Kindly login to explore.</p>
      <Link to="/login">Go to Login</Link>
    </div>
  );
};

export default ThankYou;
