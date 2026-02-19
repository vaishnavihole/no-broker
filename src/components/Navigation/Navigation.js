import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          📄 NoBroker
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/rental-agreement" className="nav-link">
              Create Agreement
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/guide" className="nav-link">
              Guide
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
