import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Profile from './components/Profile';
import Logout from './pages/Logout';
import Favorites from './components/Favorites';
import Mine from './components/Mine';


function AppFunction() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} /> 
          <Route path="products" element={<Products />} />
          <Route path="logout" element={<Logout />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="mine" element={<Mine />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppFunction;