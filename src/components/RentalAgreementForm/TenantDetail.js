import React from 'react';

export default function TenantDetail({ formData, setFormData, onNext, onBack }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="step-container">
      <div className="step-header">
        <h2>Step 4: Tenant Detail</h2>
        <p>Enter tenant information</p>
      </div>

      <div className="form-group">
        <label>Tenant Full Name *</label>
        <input
          type="text"
          name="tenantName"
          value={formData.tenantName || ''}
          onChange={handleInputChange}
          placeholder="Enter full name"
        />
      </div>

      <div className="form-group">
        <label>Email Address *</label>
        <input
          type="email"
          name="tenantEmail"
          value={formData.tenantEmail || ''}
          onChange={handleInputChange}
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Phone Number *</label>
        <input
          type="tel"
          name="tenantPhone"
          value={formData.tenantPhone || ''}
          onChange={handleInputChange}
          placeholder="Enter phone number"
        />
      </div>

      <div className="form-group">
        <label>Aadhaar Number</label>
        <input
          type="text"
          name="tenantAadhaar"
          value={formData.tenantAadhaar || ''}
          onChange={handleInputChange}
          placeholder="Enter Aadhaar number (optional)"
        />
      </div>

      <div className="form-group">
        <label>PAN Number</label>
        <input
          type="text"
          name="tenantPAN"
          value={formData.tenantPAN || ''}
          onChange={handleInputChange}
          placeholder="Enter PAN number (optional)"
        />
      </div>

      <div className="form-group">
        <label>Residential Address</label>
        <textarea
          name="tenantAddress"
          value={formData.tenantAddress || ''}
          onChange={handleInputChange}
          placeholder="Enter residential address"
          rows="3"
        ></textarea>
      </div>

      <div className="form-group">
        <label>Occupation</label>
        <input
          type="text"
          name="tenantOccupation"
          value={formData.tenantOccupation || ''}
          onChange={handleInputChange}
          placeholder="Enter occupation"
        />
      </div>

      <div className="form-group">
        <label>Number of Members in Family</label>
        <select
          name="familyMembers"
          value={formData.familyMembers || '1'}
          onChange={handleInputChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5+</option>
        </select>
      </div>

      <div className="button-group">
        <button className="btn-back" onClick={onBack}>
          <i className="fa-solid fa-arrow-left"></i> Back
        </button>
        <button
          className="btn-next"
          onClick={onNext}
        >
          Next Step <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
