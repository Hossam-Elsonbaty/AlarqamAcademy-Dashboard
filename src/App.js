import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Login } from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import { AppProvider } from "./Context/getData";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
const MainApp = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

export default MainApp;