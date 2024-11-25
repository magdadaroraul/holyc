import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar" style={{ width: '250px', height: '100vh' }}>
      <h2 className="logo">Holyc</h2>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/dashboard/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/dashboard/products" className="nav-link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/dashboard/favorites" className="nav-link">
            Favorites
          </Link>
        </li>
        <li>
          <Link to="/dashboard/mine" className="nav-link">
            Mine
          </Link>
        </li>
        <li>
          <Link to="/dashboard/yellowbucket" className="nav-link">
            Yellow Bucket
          </Link>
        </li>
        <li>
          <Link to="/dashboard/checkout" className="nav-link">
            Check out
          </Link>
        </li>
        <li>
          <Link to="/dashboard/logout" className="nav-link">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;