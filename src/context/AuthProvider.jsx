import { useState } from 'react';
import AuthContext from './AuthContext';

const getInitialUser = () => {
  const storedUser = localStorage.getItem('userInfo');
  if (storedUser) {
    try {
      return JSON.parse(storedUser);
    } catch {
      localStorage.removeItem('userInfo');
    }
  }
  return null;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getInitialUser);
  const isAuth = !!user;

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('userInfo', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('userInfo');
  };

  return (
    <AuthContext.Provider value={{ user, isAuth, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};