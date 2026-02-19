import React from 'react';

export default function PropertyDetail({ formData, setFormData, onNext, onBack }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="step-container">
      <div className="step-header">
        <h2>Step 2: Property Detail</h2>
        <p>Tell us about the property</p>
      </div>

      <div className="form-group">
        <label>Property Address *</label>
        <input
          type="text"
          name="address"
          value={formData.address || ''}
          onChange={handleInputChange}
          placeholder="e.g., Indiranagar, Bangalore"
        />
      </div>

      <div className="form-group">
        <label>Property Type *</label>
        <select
          name="propType"
          value={formData.propType || ''}
          onChange={handleInputChange}
        >
          <option value="">Select Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="villa">Villa</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>

      <div className="form-group">
        <label>Number of Bedrooms *</label>
        <select
          name="bedrooms"
          value={formData.bedrooms || ''}
          onChange={handleInputChange}
        >
          <option value="">Select Bedrooms</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
          <option value="4">4+ BHK</option>
        </select>
      </div>

      <div className="form-group">
        <label>Area (in Sq. Ft.)</label>
        <input
          type="number"
          name="area"
          value={formData.area || ''}
          onChange={handleInputChange}
          placeholder="Enter area in square feet"
        />
      </div>

      <div className="form-group">
        <label>Furnishing Type</label>
        <select
          name="furnishing"
          value={formData.furnishing || 'unfurnished'}
          onChange={handleInputChange}
        >
          <option value="unfurnished">Unfurnished</option>
          <option value="semi-furnished">Semi-Furnished</option>
          <option value="furnished">Furnished</option>
        </select>
      </div>

      <div className="form-group">
        <label>Special Amenities</label>
        <textarea
          name="amenities"
          value={formData.amenities || ''}
          onChange={handleInputChange}
          placeholder="e.g., Parking, Gym, Swimming Pool, etc."
          rows="3"
        ></textarea>
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
