import React from 'react';
import './Guide.css';

export default function Guide() {
  return (
    <div className="guide">
      <div className="guide-container">
        <h1>Rental Agreement Guide</h1>
        
        <section className="guide-section">
          <h2>What is a Rental Agreement?</h2>
          <p>
            A rental agreement is a legal contract between a landlord and a tenant that outlines the terms and conditions of renting a residential property. It protects both parties and clearly defines their rights and responsibilities.
          </p>
        </section>

        <section className="guide-section">
          <h2>Key Components of a Rental Agreement</h2>
          <div className="components-list">
            <div className="component-item">
              <h3>1. Contract Details</h3>
              <p>The agreement period, start date, end date, and renewal terms.</p>
            </div>
            <div className="component-item">
              <h3>2. Property Details</h3>
              <p>Complete address, property type, furnishing status, and amenities included.</p>
            </div>
            <div className="component-item">
              <h3>3. Landlord Details</h3>
              <p>Name, contact information, and bank details for rent collection.</p>
            </div>
            <div className="component-item">
              <h3>4. Tenant Details</h3>
              <p>Name, contact information, occupation, and emergency contact.</p>
            </div>
            <div className="component-item">
              <h3>5. Rent & Deposits</h3>
              <p>Monthly rent, security deposit, and any additional charges.</p>
            </div>
            <div className="component-item">
              <h3>6. Terms & Conditions</h3>
              <p>Rules about maintenance, utilities, guests, and termination clauses.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2>How to Use Our Wizard</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Fill Contract Details</h3>
              <p>Enter the rental period and key dates</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Add Property Information</h3>
              <p>Provide complete property details</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Enter Landlord Details</h3>
              <p>Fill in your complete information</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Add Tenant Information</h3>
              <p>Enter tenant's details</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Review & Sign</h3>
              <p>Review the agreement and complete e-signature</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2>Add-ons Available</h2>
          <div className="addons-grid">
            <div className="addon-item">
              <h3>✍️ Notarised Agreement</h3>
              <p>Get your agreement legally authenticated by a notary for enhanced credibility.</p>
            </div>
            <div className="addon-item">
              <h3>🔍 Tenant Verification</h3>
              <p>Instant tenant KYC verification to ensure tenant authenticity.</p>
            </div>
            <div className="addon-item">
              <h3>⚖️ Dispute Resolution</h3>
              <p>Access to our Online Dispute Resolution platform for rental disputes.</p>
            </div>
          </div>
        </section>

        <section className="guide-section faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>Is the e-signature legally binding?</h3>
            <p>Yes, e-signatures using Aadhaar verification are legally recognized in India under the Information Technology Act, 2000.</p>
          </div>
          <div className="faq-item">
            <h3>Can I modify the agreement after signing?</h3>
            <p>The agreement can be modified by mutual consent of both parties through an amendment letter.</p>
          </div>
          <div className="faq-item">
            <h3>What if there's a dispute?</h3>
            <p>With our Cadre Dispute Platform add-on, you can resolve disputes through our Online Dispute Resolution system without court visits.</p>
          </div>
          <div className="faq-item">
            <h3>How long is the agreement valid?</h3>
            <p>The validity period is as specified in the contract details section. Standard agreements are usually for 11-12 months.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
