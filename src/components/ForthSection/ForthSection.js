import React, { useState } from "react";
import "./ForthSection.css";
import forthSectionPhoto from "../../accets/forthSection/forthSectionPhoto.jpg";

const ForthSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment request submitted!");
    console.log(formData);
  };
  return (
    <div className="forthSection_grid_div">
      <div className="forthSection_text_div">
        <h2>Get an Appointment Now!</h2>
        <p>
          Schedule your appointment with ease and connect with our expert
          medical team at Doctoral. We’re here to provide trusted, personalized
          care when you need it most. Book now and take the first step toward
          better health, comfort, and peace of mind.
        </p>
        <img src={forthSectionPhoto} alt="" />
      </div>
      <div>
        <div className="appointment-form-container">
          <h2>Get an Appointment Now!</h2>

          <form className="appointment-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              required
              onChange={handleChange}
            />

            <input type="date" name="date" required onChange={handleChange} />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              onChange={handleChange}
            ></textarea>

            <button type="submit">Book Appointment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForthSection;
