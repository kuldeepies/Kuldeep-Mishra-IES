import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YoYIncreaseReport = () => {
  const [yoYIncreaseData, setYoYIncreaseData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/YoYIncreaseReportService') // Replace with your actual API endpoint
      .then(response => setYoYIncreaseData(response.data))
      .catch(error => console.error('Error fetching YoY increase report data:', error));
  }, []);

  return (
    <div>
      <h2>YoY Increase Report</h2>
      <pre>{JSON.stringify(yoYIncreaseData, null, 2)}</pre>
    </div>
  );
};

export default YoYIncreaseReport;
