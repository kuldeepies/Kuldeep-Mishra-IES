import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FamilyMaintenance = () => {
  const [maintenanceData, setMaintenanceData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/MonthlyPayment') // Replace with your actual API endpoint
      .then(response => setMaintenanceData(response.data))
      .catch(error => console.error('Error fetching family maintenance data:', error));
  }, []);

  return (
    <div>
      <h2>Family Maintenance Tracking</h2>
      <table>
        <thead>
          <tr>
            <th>Family Name</th>
            <th>Payment Status</th>
            <th>Amount Paid</th>
            {/* Add more fields as needed */}
          </tr>
        </thead>
        <tbody>
          {maintenanceData.map(payment => (
            <tr key={payment.id}>
              <td>{payment.familyName}</td>
              <td>{payment.paymentStatus}</td>
              <td>{payment.amountPaid}</td>
              {/* Display more fields as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FamilyMaintenance;
