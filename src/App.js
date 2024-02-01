import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    city: '',
    company: '',
    chiefComplaints: '',
    physioExperience: '',
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform action on form submission (e.g., send data to backend)
    // Reset form data
    setFormData({
      name: '',
      phone: '',
      age: '',
      city: '',
      company: '',
      chiefComplaints: '',
      physioExperience: '',
    });
  };

  useEffect(() => {
    // Check for URL parameter 'city'
    const urlParams = new URLSearchParams(window.location.search);
    const paramCity = urlParams.get('city');
    
    // If 'city' parameter is present, override the city in form data
    if (paramCity) {
      setFormData((prevData) => ({ ...prevData, city: paramCity }));
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="landing-page">
    
      <form onSubmit={handleFormSubmit}>
        {/* Step 1: Name + Phone number */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </label>

        <label>
          Phone number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleFormChange}
            required
          />
        </label>

        {/* Step 2: Age + City + Company */}
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleFormChange}
            required
          />
        </label>

        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleFormChange}
            required
          />
        </label>

        <label>
          Company:
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleFormChange}
            required
          />
        </label>

        {/* Step 3: Chief complaints */}
        <label>
          Chief complaints:
          <textarea
            name="chiefComplaints"
            value={formData.chiefComplaints}
            onChange={handleFormChange}
            required
          ></textarea>
        </label>

        {/* Step 4: Any previous experience with physiotherapy (conditionally shown) */}
        {parseInt(formData.age, 10) >= 40 && (
          <label>
            Previous experience with physiotherapy:
            <input
              type="text"
              name="physioExperience"
              value={formData.physioExperience}
              onChange={handleFormChange}
            />
          </label>
        )}

        {/* Step 5: Show best available doctors filtered for their city */}
        <button type="submit">Book Consultation</button>
      </form>

      {/* Testimonials Section */}
      <section>
        <h2>What Our Clients Say</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </section>
    </div>
  );
};

export default App;
