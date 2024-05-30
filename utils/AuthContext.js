// utils/AuthContext.js
"use client";

import { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    console.log('RUOLO PAZZO preso', role);
    if (token) {
      setIsAuthenticated(true);
      setUserRole(role);
    }
  }, []);

  const login = (token, role) => {
    localStorage.setItem('token', token);
    console.log('RUOLO PAZZO inserimento', role);
    localStorage.setItem('role', role); // Salva il ruolo nel localStorage
    setIsAuthenticated(true);
    setUserRole(role);
    router.push('/corsi');
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsAuthenticated(false);
    setUserRole(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
