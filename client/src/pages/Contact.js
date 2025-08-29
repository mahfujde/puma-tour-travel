import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const offices = [
    {
      country: 'Bangladesh',
      address: '123 Travel Street, Gulshan, Dhaka 1212',
      phone: '+880 2 XXXX XXXX',
      email: 'bd@pumatravel.com'
    },
    {
      country: 'Thailand',
      address: '456 Sukhumvit Road, Bangkok 10110',
      phone: '+66 2 XXX XXXX',
      email: 'thailand@pumatravel.com'
    },
    {
      country: 'Malaysia',
      address: '789 KLCC Road, Kuala Lumpur 50088',
      phone: '+60 3 XXXX XXXX',
      email: 'malaysia@pumatravel.com'
    },
    {
      country: 'Indonesia',
      address: '101 Bali Street, Denpasar, Bali 80222',
      phone: '+62 361 XXX XXX',
      email: 'indonesia@pumatravel.com'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - PUMA Tour and Travel</title>
        <meta name="description" content="Get in touch with PUMA Tour and Travel. We have offices in Bangladesh, Thailand, Malaysia, and Indonesia." />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for any inquiries or assistance</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="booking">Booking Assistance</option>
                      <option value="visa">Visa Information</option>
                      <option value="custom">Custom Package</option>
                      <option value="complaint">Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
            
            <div className="contact-info">
              <h2>Our Offices</h2>
              <div className="offices-list">
                {offices.map((office, index) => (
                  <div key={index} className="office-card">
                    <h3>{office.country} Office</h3>
                    <div className="office-details">
                      <div className="detail-item">
                        <span className="icon">📍</span>
                        <span>{office.address}</span>
                      </div>
                      <div className="detail-item">
                        <span className="icon">📞</span>
                        <span>{office.phone}</span>
                      </div>
                      <div className="detail-item">
                        <span className="icon">✉️</span>
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="business-hours">
                <h3>Business Hours</h3>
                <div className="hours-list">
                  <div className="hour-item">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hour-item">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hour-item">
                    <span>Sunday</span>
                    <span>Emergency support only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Find Us</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <h3>Map Location</h3>
                <p>Interactive map would be displayed here</p>
                <p>You can integrate Google Maps API later</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="emergency-contact">
            <h2>24/7 Emergency Support</h2>
            <p>For urgent travel assistance outside business hours</p>
            <div className="emergency-info">
              <div className="emergency-item">
                <span className="icon">📞</span>
                <span className="number">+880 17XX XXXXXX</span>
              </div>
              <div className="emergency-item">
                <span className="icon">✉️</span>
                <span className="email">emergency@pumatravel.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
