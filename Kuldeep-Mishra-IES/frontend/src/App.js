// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Home from './home';
import About from './about';
import Login from './Login';
import SignUp from './signup';
import Contact from './contact';
import Service from './service';
import FamilyManagement from './FamilyManagement'; // Import FamilyManagement component
 // Import MonthlyMaintenance component
import FamilyMaintenance from './FamilyMaintenance';
import EmailReminders from './EmailReminders';
// Import other service pages

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/family-management" element={<FamilyManagement />} /> {/* Add FamilyManagement route */}
          <Route path="/monthly-maintenance" element={<FamilyMaintenance />} />
          <Route path="/EmailReminder" element={<EmailReminders />} />
          <Route path="/" element={<FamilyMaintenance />} /> {/* Add MonthlyMaintenance route */}
          {/* Add routes for other service pages */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
