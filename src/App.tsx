import React from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Stylesheet
import './assets/styles/App.css';

// Utilities 
import PrivateRoutes from './utils/PrivateRoutes';

// Pages
import Login from './pages/login';
import Dashborad from './pages/dashboard';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          

          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/dashboard" element={<Dashborad/>} />
          </Route>

          
        </Routes>
      </Router>
  );
}

export default App;
