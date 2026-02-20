import React, { useState } from 'react';
import './RentalAgreementWizard.css';

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

      {/* CADRE ARBITRATION CLAUSES */}
      <div className="cadre-clauses-section">
        <div className="cadre-clauses-header">
          <div className="cadre-clauses-icon">
            <i className="fa-solid fa-scale-balanced"></i>
          </div>
          <div>
            <h2>Arbitration &amp; Dispute Resolution Clauses</h2>
            <p>Powered by CADRE ODR — Online Dispute Resolution Platform</p>
          </div>
        </div>

        <div className="cadre-clauses-grid">
          {/* Clause 1 */}
          <div className="cadre-clause-card">
            <div className="clause-number">Clause 1</div>
            <h3>General Arbitration Clause</h3>
            <p>
              Any dispute, controversy, or claim arising out of or relating to this Agreement, including its interpretation, performance, breach, termination, or validity, shall be referred to and finally resolved by arbitration in accordance with the Arbitration and Conciliation Act, 1996.
            </p>
            <p>
              The arbitration shall be conducted by a sole arbitrator mutually appointed by the parties. The seat and venue of arbitration shall be [City, India]. The proceedings shall be conducted in the English language.
            </p>
            <p>
              The arbitral award shall be final and binding upon the parties.
            </p>
          </div>

          {/* Clause 2 */}
          <div className="cadre-clause-card">
            <div className="clause-number">Clause 2</div>
            <h3>CADRE ODR Administered Arbitration</h3>
            <p>
              All disputes, claims, counterclaims, or differences of any nature whatsoever, whether in contract, tort, statute, or otherwise, arising out of or relating to this Agreement or the relationship between the parties, shall be referred to arbitration administered by CADRE ODR in accordance with its applicable rules and the Arbitration and Conciliation Act, 1996, as amended.
            </p>
            <p>
              The arbitration shall be conducted by a sole arbitrator appointed as per the CADRE ODR Rules. The seat of arbitration shall be Bengaluru, India, and the language shall be English.
            </p>
            <p>
              The award rendered shall be final, conclusive, and binding on the parties.
            </p>
          </div>

          {/* Clause 3 */}
          <div className="cadre-clause-card">
            <div className="clause-number">Clause 3</div>
            <h3>CADRE ODR with Exclusive Jurisdiction</h3>
            <p>
              Any dispute, difference, or claim arising out of or in connection with this Agreement shall be referred to and finally resolved by arbitration administered by CADRE ODR in accordance with its rules and the Arbitration and Conciliation Act, 1996, as amended from time to time.
            </p>
            <p>
              The tribunal shall consist of a sole arbitrator appointed under the CADRE ODR Rules. The seat and legal place of arbitration shall be Bengaluru, India, and the language of arbitration shall be English.
            </p>
            <p>
              The courts at Bengaluru shall have exclusive jurisdiction in matters arising out of or relating to the arbitration proceedings. The award shall be final and binding on the parties.
            </p>
          </div>
        </div>

        <div className="cadre-clauses-footer-note">
          <i className="fa-solid fa-circle-info"></i>
          These clauses are included in your rental agreement to ensure fair, fast, and legally binding dispute resolution without the need for court visits.
        </div>
      </div>
    </div>
  );
}