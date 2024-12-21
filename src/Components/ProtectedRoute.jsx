import { useNavigate } from "react-router-dom";
import React,{ useEffect } from "react";
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
    console.log('Token:', token);
    if (!token) {
      console.log('Navigating to login...');
      navigate('/login');
    }
  }, [token, navigate]); // Run this effect when token or navigate changes
  return token ? children : <div>Redirecting to login...</div>; // Render children if token exists, otherwise render nothing
};
export default ProtectedRoute;
