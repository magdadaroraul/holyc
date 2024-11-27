import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar" >
      <h2 className="logo">Holyc</h2>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/favorites" className="nav-link">
            Favorites
          </Link>
        </li>
        <li>
          <Link to="/mine" className="nav-link">
            Mine
          </Link>
        </li>
        <li>
          <Link to="/yellowbucket" className="nav-link">
            Yellow Bucket
          </Link>
        </li>
        <li>
          <Link to="/checkout" className="nav-link">
            Check out
          </Link>
        </li>
        <li>
          <Link to="/logout" className="nav-link">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;