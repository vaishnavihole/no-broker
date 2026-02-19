import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About NoBroker</h3>
          <p>Simplifying rental agreements with digital solutions.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/rental-agreement">Create Agreement</a></li>
            <li><a href="/guide">Guide</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@nobroker.com</p>
          <p>Phone: +91-XXX-XXX-XXXX</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 NoBroker. All rights reserved.</p>
      </div>
    </footer>
  );
}
