import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Rental Agreement Made Simple</h1>
          <p>Fast. Digital. Secure.</p>
          {/* <Link to="/rental-agreement" className="cta-button">
            Create Agreement Now
          </Link> */}
        </div>
      </section>

      <section className="features">
        <h2>Why Choose NoBroker?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast & Easy</h3>
            <p>Complete your rental agreement in minutes with our intuitive wizard.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure</h3>
            <p>Your data is encrypted and protected with industry-standard security.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✍️</div>
            <h3>E-Signature</h3>
            <p>Get legally binding e-signatures with Aadhaar verification.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚖️</div>
            <h3>Legal Compliant</h3>
            <p>All agreements are compliant with Indian rental laws.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to get started?</h2>
        <Link to="/rental-agreement" className="cta-button-secondary">
          Create Your Agreement
        </Link>
      </section>
    </div>
  );
}
