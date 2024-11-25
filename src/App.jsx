import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Profile from './components/Profile';
import Logout from './pages/Logout';
import Favorites from './components/Favorites';
import Mine from './components/Mine';
import Yellowbucket from './components/Yellowbucket';
import Checkout from './components/Checkout';


function AppFunction() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default AppFunction;