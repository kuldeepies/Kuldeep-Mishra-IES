// Service.js
import React from 'react';
import { FaUsers, FaMoneyBill, FaBell, FaMoneyCheckAlt, FaChartLine } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Service = () => {
  const navigate = useNavigate();

  const redirectToFamilyManagement = () => {
    // Redirect to the family management route
    navigate('/Family');
  };

  const redirectToMonthlyMaintenance = () => {
    // Redirect to the monthly maintenance route
    navigate('/MonthlyPayment');
  };

  const redirectToEmailReminders = () => {
    // Redirect to the email reminders route
    navigate('/EmailService');
  };

  const redirectToLatePaymentFine = () => {
    // Redirect to the late payment fine route
    navigate('/Paymentservice');
  };

  const redirectToInwardPaymentReport = () => {
    // Redirect to the inward payment report route
    navigate('/InwardPaymentReportService');
  };

  const redirectToDelayedPaymentReport = () => {
    // Redirect to the delayed payment report route
    navigate('/DelayedPaymentReportService');
  };

  const redirectToYearlySpendingReport = () => {
    // Redirect to the yearly spending report route
    navigate('/YearlySpendingReportService');
  };

  const redirectToYoYIncreaseReport = () => {
    // Redirect to the YoY increase report route
    navigate('/YoYIncreaseReportService');
  };

  return (
    <div style={styles.container}>
      <section style={styles.section} onClick={redirectToFamilyManagement}>
        <FaUsers style={styles.icon} />
        <h2>Families Management</h2>
        <p>Onboarding and management of families living in the society with comprehensive information.</p>
      </section>

      <section style={styles.section} onClick={redirectToMonthlyMaintenance}>
        <FaMoneyBill style={styles.icon} />
        <h2>Monthly Maintenance Tracking</h2>
        <p>Real-time tracking of monthly maintenance payments received from each family.</p>
      </section>

      <section style={styles.section} onClick={redirectToEmailReminders}>
        <FaBell style={styles.icon} />
        <h2>Email Reminders</h2>
        <p>Automated email reminders for monthly maintenance payments from the 5th to the 10th of every month.</p>
      </section>

      <section style={styles.section} onClick={redirectToLatePaymentFine}>
        <FaMoneyCheckAlt style={styles.icon} />
        <h2>Late Payment Fine</h2>
        <p>Collection of a fine of Rs. 100 for all delayed payments.</p>
      </section>

      <section style={styles.section} onClick={redirectToInwardPaymentReport}>
        <FaChartLine style={styles.icon} />
        <h2>Inward Payment Report</h2>
        <p>View reports of inward payments for a given date range.</p>
      </section>

      <section style={styles.section} onClick={redirectToDelayedPaymentReport}>
        <FaChartLine style={styles.icon} />
        <h2>Families with Frequent Delayed Payment</h2>
        <p>View reports of families making frequent delayed payments.</p>
      </section>

      <section style={styles.section} onClick={redirectToYearlySpendingReport}>
        <FaChartLine style={styles.icon} />
        <h2>Yearly Spending's</h2>
        <p>View reports of yearly spending.</p>
      </section>

      <section style={styles.section} onClick={redirectToYoYIncreaseReport}>
        <FaChartLine style={styles.icon} />
        <h2>YoY Increase of Spending's</h2>
        <p>View reports of the increase in spending on a YoY basis for the last 6 years.</p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
  },
  section: {
    marginBottom: '30px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f0f0f0',
    transition: 'background-color 0.3s ease-in-out',
    cursor: 'pointer',
  },
  sectionHover: {
    backgroundColor: '#e0e0e0',
  },
  icon: {
    fontSize: '3em',
    marginBottom: '10px',
    color: '#3498db',
  },
};

export default Service;
