import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LatePaymentFine = () => {
  const [latePaymentData, setLatePaymentData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/PaymentService') // Replace with your actual API endpoint
      .then(response => setLatePaymentData(response.data))
      .catch(error => console.error('Error fetching late payment fine data:', error));
  }, []);

  return (
    <div>
      <h2>Late Payment Fine</h2>
      <table>
        <thead>
          <tr>
            <th>Family Name</th>
            <th>Due Date</th>
            <th>Fine Amount</th>
            {/* Add more fields as needed */}
          </tr>
        </thead>
        <tbody>
          {latePaymentData.map(payment => (
            <tr key={payment.id}>
              <td>{payment.familyName}</td>
              <td>{payment.dueDate}</td>
              <td>{payment.fineAmount}</td>
              {/* Display more fields as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatePaymentFine;
