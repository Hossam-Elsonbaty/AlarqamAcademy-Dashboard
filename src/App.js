import React from "react";
import { Home } from './Pages/Home'
import {BrowserRouter as Router , Routes, Route, useLocation } from 'react-router-dom';
import { Login } from "./Pages/Login";
const App = ()=> {
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </>
  )
}
const MainApp = () => (
  <Router>
    <App />
  </Router>
);
export default MainApp;
