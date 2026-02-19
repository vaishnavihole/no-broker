import React from 'react';

export default function ContractDetail({ formData, setFormData, onNext }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="step-container">
      <div className="step-header">
        <h2>Step 1: Contract Detail</h2>
        <p>Fill in the basic details of the rental agreement</p>
      </div>

      <div className="form-group">
        <label>City of the Property *</label>
        <input
          type="text"
          name="city"
          value={formData.city || ''}
          onChange={handleInputChange}
          placeholder="e.g., Bangalore"
        />
      </div>

      <div className="form-group">
        <label>Agreement Duration *</label>
        <select
          name="duration"
          value={formData.duration || '6'}
          onChange={handleInputChange}
        >
          <option value="6">6 Months</option>
          <option value="11">11 Months</option>
          <option value="12">12 Months</option>
        </select>
      </div>

      <div className="form-group">
        <label>Monthly Rent Amount *</label>
        <input
          type="number"
          name="rentAmount"
          value={formData.rentAmount || ''}
          onChange={handleInputChange}
          placeholder="Enter rent amount"
        />
      </div>

      <div className="form-group">
        <label>Refundable Deposit Amount *</label>
        <input
          type="number"
          name="deposit"
          value={formData.deposit || ''}
          onChange={handleInputChange}
          placeholder="Enter deposit amount"
        />
      </div>

      <div className="form-group">
        <label>Rent is Excluding Maintenance *</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="maintenance"
              value="yes"
              checked={formData.maintenance === 'yes'}
              onChange={handleRadioChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="maintenance"
              value="no"
              checked={formData.maintenance === 'no'}
              onChange={handleRadioChange}
            />
            No
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Agreement Start Date *</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate || ''}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>I am *</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="userType"
              value="tenant"
              checked={formData.userType === 'tenant'}
              onChange={handleRadioChange}
            />
            Tenant
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="owner"
              checked={formData.userType === 'owner'}
              onChange={handleRadioChange}
            />
            Owner
          </label>
        </div>
      </div>

      <button
        className="btn-next"
        onClick={onNext}
      >
        Next Step <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}
