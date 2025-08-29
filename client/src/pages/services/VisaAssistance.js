import React from 'react';
import { Helmet } from 'react-helmet-async';

const VisaAssistance = () => {
  return (
    <>
      <Helmet>
        <title>Visa Assistance Services - PUMA Tour and Travel</title>
        <meta name="description" content="Get professional visa assistance for all your travel needs. We handle the complex paperwork for visas across our network of countries." />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>Visa Assistance Services</h1>
          <p>Professional guidance for visa applications to all our destinations</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-content">
              <h2>End-to-End Visa Support</h2>
              <p>Navigating visa requirements can be complex and time-consuming. At PUMA Tour and Travel, we simplify the process by providing comprehensive visa assistance services for all our destination countries. Our experts handle the paperwork and guide you through every step of the process.</p>
              
              <div className="service-features">
                <h3>Our Visa Services Include:</h3>
                <ul>
                  <li>Visa requirement assessment for your destination</li>
                  <li>Document preparation and verification</li>
                  <li>Application submission and tracking</li>
                  <li>Expert consultation on visa processes</li>
                  <li>Emergency visa processing when available</li>
                  <li>Updates on changing visa regulations</li>
                  <li>Support for both tourist and business visas</li>
                </ul>
              </div>

              <div className="visa-countries">
                <h3>Visa Services for Our Destinations</h3>
                <div className="country-grid">
                  <div className="country-item">
                    <h4>Thailand Visa</h4>
                    <p>Tourist visas, business visas, and visa extensions</p>
                  </div>
                  <div className="country-item">
                    <h4>Malaysia Visa</h4>
                    <p>Tourist visas, social visit passes, and business visas</p>
                  </div>
                  <div className="country-item">
                    <h4>Indonesia Visa</h4>
                    <p>Tourist visas, social-cultural visas, and business visas</p>
                  </div>
                  <div className="country-item">
                    <h4>Singapore Visa</h4>
                    <p>Tourist visas, business visas, and transit visas</p>
                  </div>
                  <div className="country-item">
                    <h4>Bangladesh Visa</h4>
                    <p>Tourist visas, business visas, and visa on arrival assistance</p>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <h3>Need Visa Assistance?</h3>
                <p>Contact us for professional help with your visa application.</p>
                <a href="/contact" className="btn btn-primary">Get Visa Help</a>
              </div>
            </div>
            
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600" alt="Visa Assistance" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisaAssistance;
