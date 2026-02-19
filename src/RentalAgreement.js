import React, { useState } from 'react';
import './RentalAgreement.css';

export default function RentalAgreement() {
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
    <div>
      <div className="header">
        <i className="fa-solid fa-file-contract"></i> Rental Agreement Demo Panel
      </div>

      <div className="container">
        {/* LEFT CARD */}
        <div className="card">
          <div className="summary-title">
            Paperless Rental Agreement with Aadhaar E-Sign
          </div>
          <div style={{ color: '#777' }}>Fast. Digital. Secure.</div>

          <div className="section">
            <b><i className="fa-solid fa-house"></i> Rental Agreement</b>

            <div className="row">
              <div>
                Contract Detail<br />
                <small>Agreement Period: 6 Months</small>
              </div>
              <div className="status"><i className="fa-solid fa-circle-check"></i> 100%</div>
            </div>

            <div className="row">
              <div>
                Property Detail<br />
                <small>Indiranagar, Bangalore</small>
              </div>
              <div className="status"><i className="fa-solid fa-circle-check"></i> 100%</div>
            </div>

            <div className="row">
              <div>Landlord Detail</div>
              <div className="status"><i className="fa-solid fa-circle-check"></i> 100%</div>
            </div>

            <div className="row">
              <div>Tenant Detail</div>
              <div className="status"><i className="fa-solid fa-circle-check"></i> 100%</div>
            </div>

            <div style={{ marginTop: '10px', fontWeight: '700', color: '#18a957' }}>
              Total completion: 100%
            </div>
          </div>

          {/* ADDONS */}
          <div className="section">
            <b><i className="fa-solid fa-puzzle-piece"></i> Add-ons</b>

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

          <button className="pay-btn">
            <i className="fa-solid fa-lock"></i> Make Payment
          </button>
        </div>
      </div>
    </div>
  );
}
