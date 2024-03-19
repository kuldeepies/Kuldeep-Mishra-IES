import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YearlySpendingReport = () => {
  const [yearlySpendingData, setYearlySpendingData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/api/YearlySpendingReportService') // Replace with your actual API endpoint
      .then(response => setYearlySpendingData(response.data))
      .catch(error => console.error('Error fetching yearly spending report data:', error));
  }, []);

  return (
    <div>
      <h2>Yearly Spending Report</h2>
      <pre>{JSON.stringify(yearlySpendingData, null, 2)}</pre>
    </div>
  );
};

export default YearlySpendingReport;
