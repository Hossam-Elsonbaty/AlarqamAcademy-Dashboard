import React from "react";
import { Home } from './Pages/Home'
import {BrowserRouter as Router , Routes, Route, useLocation, Navigate  } from 'react-router-dom';
import { Login } from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import { AppProvider } from "./Context/getData";
const App = ()=> {
  const location = useLocation();
  return (
    <>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/dashboard" exact element={<Home />} />
      </Routes>
    </>
  )
}
const MainApp = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
    <ProtectedRoute>
      <AppProvider>
        <App />
      </AppProvider>
    </ProtectedRoute>
  </Router>
);
export default MainApp;
