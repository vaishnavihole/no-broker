import React, { useState } from 'react';

export default function Summary({ formData, onBack }) {
  const [added, setAdded] = useState({});
  const [addonTotal, setAddonTotal] = useState(0);
  const baseAmount = 1148;

  const addons = [
    { key: 'notary', title: 'Notarised Agreement', icon: 'fa-stamp', desc: 'Legal authentication by notary', price: 350 },
    { key: 'tenant', title: 'Tenant Verification', icon: 'fa-id-card', desc: 'Instant tenant KYC verification', price: 99 },
    { key: 'cadre', title: 'Cadre Dispute Platform', icon: 'fa-scale-balanced', desc: 'Future rental dispute? Resolve legally through our Online Dispute Resolution platform. Fast digital settlement. No court visits.', price: 400, recommended: true },
  ];

  const toggleAddon = (key, price) => {
    if (!added[key]) {
      setAdded({ ...added, [key]: true });
      setAddonTotal(addonTotal + price);
    } else {
      setAdded({ ...added, [key]: false });
      setAddonTotal(addonTotal - price);
    }
  };

  return (
    <div className="step-container">
      <div className="step-header">
        <h2>Step 5: Summary & Payment</h2>
        <p>Review your rental agreement details</p>
      </div>

      <div className="summary-content">
        <div className="summary-section">
          <h3><i className="fa-solid fa-check-circle"></i> Agreement Details</h3>
          <div className="detail-grid">
            <div>
              <label>City:</label>
              <p>{formData.city}</p>
            </div>
            <div>
              <label>Duration:</label>
              <p>{formData.duration} Months</p>
            </div>
            <div>
              <label>Monthly Rent:</label>
              <p>₹{formData.rentAmount}</p>
            </div>
            <div>
              <label>Deposit:</label>
              <p>₹{formData.deposit}</p>
            </div>
            <div>
              <label>Start Date:</label>
              <p>{formData.startDate}</p>
            </div>
            <div>
              <label>Agreement Type:</label>
              <p>{formData.userType === 'tenant' ? 'As Tenant' : 'As Owner'}</p>
            </div>
          </div>
        </div>

        <div className="summary-section">
          <h3><i className="fa-solid fa-home"></i> Property Details</h3>
          <div className="detail-grid">
            <div>
              <label>Address:</label>
              <p>{formData.address}</p>
            </div>
            <div>
              <label>Property Type:</label>
              <p>{formData.propType}</p>
            </div>
            <div>
              <label>Bedrooms:</label>
              <p>{formData.bedrooms} BHK</p>
            </div>
            <div>
              <label>Furnishing:</label>
              <p>{formData.furnishing}</p>
            </div>
          </div>
        </div>

        <div className="summary-section">
          <h3><i className="fa-solid fa-user"></i> Landlord Details</h3>
          <div className="detail-grid">
            <div>
              <label>Name:</label>
              <p>{formData.landlordName}</p>
            </div>
            <div>
              <label>Email:</label>
              <p>{formData.landlordEmail}</p>
            </div>
            <div>
              <label>Phone:</label>
              <p>{formData.landlordPhone}</p>
            </div>
          </div>
        </div>

        <div className="summary-section">
          <h3><i className="fa-solid fa-users"></i> Tenant Details</h3>
          <div className="detail-grid">
            <div>
              <label>Name:</label>
              <p>{formData.tenantName}</p>
            </div>
            <div>
              <label>Email:</label>
              <p>{formData.tenantEmail}</p>
            </div>
            <div>
              <label>Phone:</label>
              <p>{formData.tenantPhone}</p>
            </div>
            <div>
              <label>Family Members:</label>
              <p>{formData.familyMembers}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ADDONS */}
      <div className="section">
        <b><i className="fa-solid fa-puzzle-piece"></i> Add-ons (Optional)</b>

        {addons.map((addon) => (
          <div key={addon.key} className={`addon ${addon.recommended ? 'highlight' : ''}`}>
            <div>
              <div className="addon-title">
                <i className={`fa-solid ${addon.icon}`}></i> {addon.title}
                {addon.recommended && <span className="badge">Recommended</span>}
              </div>
              <small>{addon.desc}</small><br />
              <b>₹{addon.price}</b>
            </div>
            <button
              className={`btn ${added[addon.key] ? 'remove-btn' : 'add-btn'}`}
              onClick={() => toggleAddon(addon.key, addon.price)}
            >
              {added[addon.key] ? 'Remove' : 'Add'}
            </button>
          </div>
        ))}
      </div>

      {/* PAYMENT PANEL */}
      <div className="payment">
        <div style={{ fontWeight: '700', fontSize: '18px', marginBottom: '15px' }}>
          <i className="fa-solid fa-receipt"></i> Payment Summary
        </div>

        <div className="row">
          <span>Convenience Charges</span>
          <span>₹399</span>
        </div>
        <div className="row">
          <span>ESIGN</span>
          <span>₹249</span>
        </div>
        <div className="row">
          <span>Govt Stamp Duty</span>
          <span>₹500</span>
        </div>
        <div className="row">
          <span>Add-ons</span>
          <span id="addonAmount">₹{addonTotal}</span>
        </div>

        <hr />

        <div className="row total">
          <span>Total Amount</span>
          <span id="totalAmount">₹{baseAmount + addonTotal}</span>
        </div>

        <div className="button-group">
          <button className="btn-back" onClick={onBack}>
            <i className="fa-solid fa-arrow-left"></i> Back
          </button>
          <button className="pay-btn">
            <i className="fa-solid fa-lock"></i> Make Payment
          </button>
        </div>
      </div>
    </div>
  );
}
