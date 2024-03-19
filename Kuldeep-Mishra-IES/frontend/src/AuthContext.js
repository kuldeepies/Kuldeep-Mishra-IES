// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user data is stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setAuthenticated(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    // Simulate a successful login (replace this with your actual authentication logic)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);

      // Check if the entered credentials match the stored user data
      if (userData.email === email && userData.password === password) {
        setAuthenticated(true);
        setUser(userData);
        return true; // Login successful
      }
    }

    return false; // Login failed
  };

  const logout = () => {
    setAuthenticated(false);
    setUser(null);

    // Remove user data from localStorage
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
