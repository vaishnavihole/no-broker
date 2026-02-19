import React from 'react';

export default function LandlordDetail({ formData, setFormData, onNext, onBack }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="step-container">
      <div className="step-header">
        <h2>Step 3: Landlord Detail</h2>
        <p>Enter landlord/owner information</p>
      </div>

      <div className="form-group">
        <label>Landlord Full Name *</label>
        <input
          type="text"
          name="landlordName"
          value={formData.landlordName || ''}
          onChange={handleInputChange}
          placeholder="Enter full name"
        />
      </div>

      <div className="form-group">
        <label>Email Address *</label>
        <input
          type="email"
          name="landlordEmail"
          value={formData.landlordEmail || ''}
          onChange={handleInputChange}
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Phone Number *</label>
        <input
          type="tel"
          name="landlordPhone"
          value={formData.landlordPhone || ''}
          onChange={handleInputChange}
          placeholder="Enter phone number"
        />
      </div>

      <div className="form-group">
        <label>Aadhaar Number</label>
        <input
          type="text"
          name="landlordAadhaar"
          value={formData.landlordAadhaar || ''}
          onChange={handleInputChange}
          placeholder="Enter Aadhaar number (optional)"
        />
      </div>

      <div className="form-group">
        <label>PAN Number</label>
        <input
          type="text"
          name="landlordPAN"
          value={formData.landlordPAN || ''}
          onChange={handleInputChange}
          placeholder="Enter PAN number (optional)"
        />
      </div>

      <div className="form-group">
        <label>Address</label>
        <textarea
          name="landlordAddress"
          value={formData.landlordAddress || ''}
          onChange={handleInputChange}
          placeholder="Enter residential address"
          rows="3"
        ></textarea>
      </div>

      <div className="form-group">
        <label>Bank Account Details (optional)</label>
        <input
          type="text"
          name="landlordBank"
          value={formData.landlordBank || ''}
          onChange={handleInputChange}
          placeholder="Account number or UPI ID"
        />
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
