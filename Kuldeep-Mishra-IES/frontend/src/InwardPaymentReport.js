import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InwardPaymentReport = () => {
  const [inwardPaymentData, setInwardPaymentData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/InwardPaymentReportService') // Replace with your actual API endpoint
      .then(response => setInwardPaymentData(response.data))
      .catch(error => console.error('Error fetching inward payment report data:', error));
  }, []);

  return (
    <div>
      <h2>Inward Payment Report</h2>
      <pre>{JSON.stringify(inwardPaymentData, null, 2)}</pre>
    </div>
  );
};

export default InwardPaymentReport;
