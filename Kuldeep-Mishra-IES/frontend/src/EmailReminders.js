import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmailReminder = () => {
  const [emailReminderData, setEmailReminderData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/ReminderService') // Replace with your actual API endpoint
      .then(response => setEmailReminderData(response.data))
      .catch(error => console.error('Error fetching email reminder data:', error));
  }, []);

  return (
    <div>
      <h2>Email Reminders</h2>
      <ul>
        {emailReminderData.map(reminder => (
          <li key={reminder.id}>
            <strong>{reminder.familyName}</strong>: {reminder.reminderMessage}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailReminder;
