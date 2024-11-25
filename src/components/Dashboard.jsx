import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />   
    </div>
  );
};

export default Dashboard;