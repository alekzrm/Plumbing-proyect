import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    
    // Limpiar el formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="section-container" id="contact">
      <div className="section-content">
        <h2 className="section-title">Contact Us</h2>
        <div className="form-container">
          <form className="form-group" onSubmit={handleSubmit}>
            <div className="form-field">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                className="form-input"
                id="name"
                name="name"
                placeholder="Your Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-field">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                className="form-input"
                id="email"
                name="email"
                placeholder="Your Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-field">
              <label className="form-label" htmlFor="phone">Phone</label>
              <input
                className="form-input"
                id="phone"
                name="phone"
                placeholder="Your Phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-field">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                className="form-textarea"
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-submit-container">
              <button className="btn-primary" type="submit">
                <span className="truncate">Submit</span>
              </button>
            </div>
            
            <p className="form-disclaimer">
              By submitting, you agree to our Privacy Policy and Terms & Conditions.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;