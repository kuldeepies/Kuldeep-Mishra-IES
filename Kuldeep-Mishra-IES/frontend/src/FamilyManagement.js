import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FamilyManagement = () => {
  const [familyData, setFamilyData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/Family') // Replace with your actual API endpoint
      .then(response => setFamilyData(response.data))
      .catch(error => console.error('Error fetching family management data:', error));
  }, []);

  return (
    <div>
      <h2>Family Management</h2>
      <table>
        <thead>
          <tr>
            <th>Family Name</th>
            <th>Contact Number</th>
            {/* Add more fields as needed */}
          </tr>
        </thead>
        <tbody>
          {familyData.map(family => (
            <tr key={family.id}>
              <td>{family.name}</td>
              <td>{family.contactNumber}</td>
              {/* Display more fields as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FamilyManagement;
