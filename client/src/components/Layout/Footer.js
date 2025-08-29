import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PUMA Tour and Travel</h3>
            <p>Your trusted travel partner across Southeast Asia & Bangladesh</p>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: info@pumatravel.com</p>
            <p>Phone: +880 XXXX XXXXXX</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 PUMA Tour and Travel Solutions Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
