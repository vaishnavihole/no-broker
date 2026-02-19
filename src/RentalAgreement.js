import React, { useState } from 'react';
import './RentalAgreement.css';

export default function RentalAgreement() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Contract Detail
    city: '',
    depositAmount: '',
    agreementDuration: '6 Months',
    monthlyRent: '',
    rentExcludingMaintenance: 'Yes',
    stampDuty: '',
    agreementStartDate: '',
    userRole: 'Tenant',
    lockInPeriod: '0',
    rentDay: '',
    noticePeriod: '0',
    
    // Property Detail
    propertyAddress: '',
    propertyType: '',
    bedroomCount: '',
    squareFeet: '',
    
    // Landlord Detail
    landlordName: '',
    landlordPhone: '',
    landlordEmail: '',
    landlordAddress: '',
    landlordIdProof: '',
    
    // Tenant Detail
    tenantName: '',
    tenantPhone: '',
    tenantEmail: '',
    tenantAddress: '',
    tenantIdProof: '',
    tenantCompany: '',
  });

  const [added, setAdded] = useState({});
  const [addonTotal, setAddonTotal] = useState(0);
  const baseAmount = 1148;

  const addons = [
    { key: 'notary', title: 'Notarised Agreement', icon: 'fa-stamp', desc: 'Legal authentication by notary', price: 350 },
    { key: 'tenant', title: 'Tenant Verification', icon: 'fa-id-card', desc: 'Instant tenant KYC verification', price: 99 },
    { key: 'cadre', title: 'Cadre Dispute Platform', icon: 'fa-scale-balanced', desc: 'Future rental dispute? Resolve legally through our Online Dispute Resolution platform. Fast digital settlement. No court visits.', price: 400, recommended: true },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

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
        <i className="fa-solid fa-file-contract"></i> Rental Agreement - Multi-Step Form
      </div>

      {/* STEP INDICATOR */}
      <div className="steps-container">
        <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
          <div className="step-number">1</div>
          <div className="step-label">Contract Detail</div>
        </div>
        <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
          <div className="step-number">2</div>
          <div className="step-label">Property Detail</div>
        </div>
        <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
          <div className="step-number">3</div>
          <div className="step-label">Landlord Detail</div>
        </div>
        <div className={`step ${currentStep >= 4 ? 'active' : ''}`}>
          <div className="step-number">4</div>
          <div className="step-label">Tenant Detail</div>
        </div>
        <div className={`step ${currentStep >= 5 ? 'active' : ''}`}>
          <div className="step-number">5</div>
          <div className="step-label">Summary</div>
        </div>
      </div>

      <div className="container form-container">
        {/* FORM CARD */}
        <div className="card form-card">
          {currentStep === 1 && <Step1 formData={formData} handleChange={handleChange} />}
          {currentStep === 2 && <Step2 formData={formData} handleChange={handleChange} />}
          {currentStep === 3 && <Step3 formData={formData} handleChange={handleChange} />}
          {currentStep === 4 && <Step4 formData={formData} handleChange={handleChange} />}
          {currentStep === 5 && <Step5 formData={formData} addons={addons} added={added} addonTotal={addonTotal} toggleAddon={toggleAddon} />}

          {/* NAVIGATION BUTTONS */}
          <div className="button-group">
            <button 
              className="btn-prev" 
              onClick={handlePrev}
              disabled={currentStep === 1}
            >
              <i className="fa-solid fa-arrow-left"></i> Back
            </button>
            <span className="step-counter">Step {currentStep} of 5</span>
            <button 
              className="btn-next" 
              onClick={handleNext}
              disabled={currentStep === 5}
            >
              Next <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* SIDE PANEL */}
        {currentStep === 5 && (
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
              <span>₹{formData.stampDuty || '500'}</span>
            </div>
            <div className="row">
              <span>Add-ons</span>
              <span id="addonAmount">₹{addonTotal}</span>
            </div>

            <hr />

            <div className="row total">
              <span>Total Amount</span>
              <span id="totalAmount">₹{baseAmount + addonTotal + 399 + 249 + (parseInt(formData.stampDuty) || 500)}</span>
            </div>

            <button className="pay-btn">
              <i className="fa-solid fa-lock"></i> Make Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// STEP 1: CONTRACT DETAIL
function Step1({ formData, handleChange }) {
  return (
    <div>
      <h2 className="step-title"><i className="fa-solid fa-file-lines"></i> Step 1: Contract Detail</h2>
      
      <div className="form-group">
        <label>City of the Property *</label>
        <input 
          type="text" 
          name="city" 
          placeholder="e.g., Bangalore"
          value={formData.city}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Refundable Deposit Amount *</label>
        <input 
          type="number" 
          name="depositAmount" 
          placeholder="e.g., 50000"
          value={formData.depositAmount}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Agreement Duration *</label>
        <select name="agreementDuration" value={formData.agreementDuration} onChange={handleChange}>
          <option>6 Months</option>
          <option>11 Months</option>
          <option>12 Months</option>
          <option>24 Months</option>
        </select>
      </div>

      <div className="form-group">
        <label>Monthly Rent Amount *</label>
        <input 
          type="number" 
          name="monthlyRent" 
          placeholder="e.g., 25000"
          value={formData.monthlyRent}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Rent is Excluding Maintenance</label>
        <select name="rentExcludingMaintenance" value={formData.rentExcludingMaintenance} onChange={handleChange}>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      <div className="form-group">
        <label>Government Suggested Stamp Duty Amount</label>
        <input 
          type="number" 
          name="stampDuty" 
          placeholder="e.g., 500"
          value={formData.stampDuty}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Paper Agreement Start Date *</label>
        <input 
          type="date" 
          name="agreementStartDate" 
          value={formData.agreementStartDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>I am:</label>
        <div className="radio-group">
          <label>
            <input 
              type="radio" 
              name="userRole" 
              value="Tenant"
              checked={formData.userRole === 'Tenant'}
              onChange={handleChange}
            />
            Tenant
          </label>
          <label>
            <input 
              type="radio" 
              name="userRole" 
              value="Owner"
              checked={formData.userRole === 'Owner'}
              onChange={handleChange}
            />
            Owner
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Minimum Lockin Period (In months) *</label>
        <input 
          type="number" 
          name="lockInPeriod" 
          min="0"
          value={formData.lockInPeriod}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Enter Rent Day *</label>
        <input 
          type="number" 
          name="rentDay" 
          min="1"
          max="31"
          placeholder="e.g., 1"
          value={formData.rentDay}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Notice Period (In months) *</label>
        <select name="noticePeriod" value={formData.noticePeriod} onChange={handleChange}>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    </div>
  );
}

// STEP 2: PROPERTY DETAIL
function Step2({ formData, handleChange }) {
  return (
    <div>
      <h2 className="step-title"><i className="fa-solid fa-building"></i> Step 2: Property Detail</h2>
      
      <div className="form-group">
        <label>Property Address *</label>
        <textarea 
          name="propertyAddress" 
          placeholder="Enter complete property address"
          rows="3"
          value={formData.propertyAddress}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Property Type *</label>
        <select name="propertyType" value={formData.propertyType} onChange={handleChange}>
          <option value="">Select Property Type</option>
          <option>1 BHK Apartment</option>
          <option>2 BHK Apartment</option>
          <option>3 BHK Apartment</option>
          <option>Studio</option>
          <option>Villa</option>
          <option>Independent House</option>
        </select>
      </div>

      <div className="form-group">
        <label>Bedroom Count</label>
        <input 
          type="number" 
          name="bedroomCount" 
          min="0"
          placeholder="e.g., 2"
          value={formData.bedroomCount}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Square Feet</label>
        <input 
          type="number" 
          name="squareFeet" 
          placeholder="e.g., 1200"
          value={formData.squareFeet}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

// STEP 3: LANDLORD DETAIL
function Step3({ formData, handleChange }) {
  return (
    <div>
      <h2 className="step-title"><i className="fa-solid fa-user"></i> Step 3: Landlord Detail</h2>
      
      <div className="form-group">
        <label>Full Name *</label>
        <input 
          type="text" 
          name="landlordName" 
          placeholder="Enter landlord full name"
          value={formData.landlordName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Phone Number *</label>
        <input 
          type="tel" 
          name="landlordPhone" 
          placeholder="e.g., 9876543210"
          value={formData.landlordPhone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Email Address *</label>
        <input 
          type="email" 
          name="landlordEmail" 
          placeholder="e.g., landlord@example.com"
          value={formData.landlordEmail}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Address *</label>
        <textarea 
          name="landlordAddress" 
          placeholder="Enter complete address"
          rows="3"
          value={formData.landlordAddress}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>ID Proof Type *</label>
        <select name="landlordIdProof" value={formData.landlordIdProof} onChange={handleChange}>
          <option value="">Select ID Proof</option>
          <option>Aadhar Card</option>
          <option>Pan Card</option>
          <option>Passport</option>
          <option>Voter ID</option>
        </select>
      </div>
    </div>
  );
}

// STEP 4: TENANT DETAIL
function Step4({ formData, handleChange }) {
  return (
    <div>
      <h2 className="step-title"><i className="fa-solid fa-users"></i> Step 4: Tenant Detail</h2>
      
      <div className="form-group">
        <label>Full Name *</label>
        <input 
          type="text" 
          name="tenantName" 
          placeholder="Enter tenant full name"
          value={formData.tenantName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Phone Number *</label>
        <input 
          type="tel" 
          name="tenantPhone" 
          placeholder="e.g., 9876543210"
          value={formData.tenantPhone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Email Address *</label>
        <input 
          type="email" 
          name="tenantEmail" 
          placeholder="e.g., tenant@example.com"
          value={formData.tenantEmail}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Address *</label>
        <textarea 
          name="tenantAddress" 
          placeholder="Enter complete address"
          rows="3"
          value={formData.tenantAddress}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>ID Proof Type *</label>
        <select name="tenantIdProof" value={formData.tenantIdProof} onChange={handleChange}>
          <option value="">Select ID Proof</option>
          <option>Aadhar Card</option>
          <option>Pan Card</option>
          <option>Passport</option>
          <option>Voter ID</option>
        </select>
      </div>

      <div className="form-group">
        <label>Company / Organization</label>
        <input 
          type="text" 
          name="tenantCompany" 
          placeholder="(Optional)"
          value={formData.tenantCompany}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

// STEP 5: SUMMARY & ADD-ONS
function Step5({ formData, addons, added, addonTotal, toggleAddon }) {
  return (
    <div>
      <h2 className="step-title"><i className="fa-solid fa-clipboard-check"></i> Step 5: Summary & Add-ons</h2>
      
      <div className="summary-section">
        <h3><i className="fa-solid fa-file-lines"></i> Contract Information</h3>
        <div className="summary-row">
          <span>City:</span>
          <strong>{formData.city || 'Not provided'}</strong>
        </div>
        <div className="summary-row">
          <span>Agreement Duration:</span>
          <strong>{formData.agreementDuration}</strong>
        </div>
        <div className="summary-row">
          <span>Monthly Rent:</span>
          <strong>₹{formData.monthlyRent || '0'}</strong>
        </div>
        <div className="summary-row">
          <span>Deposit Amount:</span>
          <strong>₹{formData.depositAmount || '0'}</strong>
        </div>
        <div className="summary-row">
          <span>User Role:</span>
          <strong>{formData.userRole}</strong>
        </div>
      </div>

      <div className="summary-section">
        <h3><i className="fa-solid fa-building"></i> Property Information</h3>
        <div className="summary-row">
          <span>Address:</span>
          <strong>{formData.propertyAddress || 'Not provided'}</strong>
        </div>
        <div className="summary-row">
          <span>Type:</span>
          <strong>{formData.propertyType || 'Not provided'}</strong>
        </div>
        <div className="summary-row">
          <span>Size:</span>
          <strong>{formData.squareFeet ? formData.squareFeet + ' Sq.ft' : 'Not provided'}</strong>
        </div>
      </div>

      <div className="summary-section">
        <h3><i className="fa-solid fa-user-tie"></i> Landlord Information</h3>
        <div className="summary-row">
          <span>Name:</span>
          <strong>{formData.landlordName || 'Not provided'}</strong>
        </div>
        <div className="summary-row">
          <span>Phone:</span>
          <strong>{formData.landlordPhone || 'Not provided'}</strong>
        </div>
        <div className="summary-row">
          <span>Email:</span>
          <strong>{formData.landlordEmail || 'Not provided'}</strong>
        </div>
        <div className="summary-row">
          <span>Address:</span>
          <strong>{formData.landlordAddress || 'Not provided'}</strong>
        </div>
      </div>

      <div className="summary-section">
        <h3><i className="fa-solid fa-user-graduate"></i> Tenant Information</h3>
        <div className="summary-row">
          <span>Name:</span>
          <strong>{formData.tenantName || 'Not provided'}</strong>
        </div>
        <div className="summary-row">
          <span>Phone:</span>
          <strong>{formData.tenantPhone || 'Not provided'}</strong>
        </div>
        <div className="summary-row">
          <span>Email:</span>
          <strong>{formData.tenantEmail || 'Not provided'}</strong>
        </div>
        <div className="summary-row">
          <span>Address:</span>
          <strong>{formData.tenantAddress || 'Not provided'}</strong>
        </div>
      </div>

      {/* ADD-ONS SECTION */}
      <div className="summary-section">
        <h3><i className="fa-solid fa-puzzle-piece"></i> Select Add-ons</h3>

        {addons.map((addon) => (
          <div key={addon.key} className={`addon-item ${addon.recommended ? 'highlight' : ''}`}>
            <div className="addon-content">
              <div className="addon-title">
                <i className={`fa-solid ${addon.icon}`}></i> {addon.title}
                {addon.recommended && <span className="badge">Recommended</span>}
              </div>
              <small>{addon.desc}</small><br />
              <b>₹{addon.price}</b>
            </div>
            <label className="addon-checkbox">
              <input 
                type="checkbox" 
                checked={!!added[addon.key]}
                onChange={() => toggleAddon(addon.key, addon.price)}
              />
              <span>{added[addon.key] ? 'Added' : 'Add'}</span>
            </label>
          </div>
        ))}
      </div>

      <div className="summary-section" style={{ backgroundColor: '#f0fdf4', borderColor: '#86efac' }}>
        <h3 style={{ color: '#15803d' }}><i className="fa-solid fa-check-circle"></i> All Information Complete!</h3>
        <p>Your rental agreement form is ready for final review and payment.</p>
      </div>
    </div>
  );
}
