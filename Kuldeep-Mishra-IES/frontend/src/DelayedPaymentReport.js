import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DelayedPaymentReport = () => {
  const [delayedPaymentData, setDelayedPaymentData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/DelayedPaymentReportService') // Replace with your actual API endpoint
      .then(response => setDelayedPaymentData(response.data))
      .catch(error => console.error('Error fetching delayed payment report data:', error));
  }, []);

  return (
    <div>
      <h2>Delayed Payment Report</h2>
      <pre>{JSON.stringify(delayedPaymentData, null, 2)}</pre>
    </div>
  );
};

export default DelayedPaymentReport;
