import React from 'react';
import { Helmet } from 'react-helmet-async';

const HajjUmrah = () => {
  return (
    <>
      <Helmet>
        <title>Hajj & Umrah Packages - PUMA Tour and Travel</title>
        <meta name="description" content="Spiritual journeys with complete Hajj and Umrah packages. We make your pilgrimage comfortable and meaningful." />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>Hajj & Umrah Packages</h1>
          <p>Spiritual journeys with complete packages</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-content">
              <h2>Sacred Pilgrimage Experiences</h2>
              <p>PUMA Tour and Travel offers comprehensive Hajj and Umrah packages designed to make your spiritual journey comfortable, meaningful, and hassle-free. We understand the significance of these pilgrimages and provide services that respect the religious aspects while ensuring your physical comfort.</p>
              
              <div className="service-features">
                <h3>Our Hajj & Umrah Services Include:</h3>
                <ul>
                  <li>Guided spiritual journey with experienced group leaders</li>
                  <li>Accommodation near holy sites in Mecca and Medina</li>
                  <li>Transportation arrangements between sacred sites</li>
                  <li>Visa processing and documentation assistance</li>
                  <li>Educational sessions on pilgrimage rituals</li>
                  <li>Medical support and emergency services</li>
                  <li>Group coordination and management</li>
                </ul>
              </div>

              <div className="packages">
                <h3>Package Options</h3>
                <div className="package-grid">
                  <div className="package-item">
                    <h4>Umrah Packages</h4>
                    <p>Short-term spiritual journeys available throughout the year</p>
                    <ul>
                      <li>7-day and 14-day options</li>
                      <li>3-star, 4-star, and 5-star accommodation</li>
                      <li>Group and individual packages</li>
                    </ul>
                  </div>
                  <div className="package-item">
                    <h4>Hajj Packages</h4>
                    <p>Comprehensive packages for the annual Hajj pilgrimage</p>
                    <ul>
                      <li>Complete Hajj ritual guidance</li>
                      <li>Accommodation in Mecca and Medina</li>
                      <li>Transportation between holy sites</li>
                      <li>Experienced Hajj guides</li>
                    </ul>
                  </div>
                  <div className="package-item">
                    <h4>Special Services</h4>
                    <p>Additional services for pilgrims</p>
                    <ul>
                      <li>Elderly pilgrim assistance</li>
                      <li>Medical support services</li>
                      <li>Family group coordination</li>
                      <li>Post-pilgrimage travel arrangements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <h3>Planning Your Pilgrimage?</h3>
                <p>Contact us for detailed information about our Hajj and Umrah packages.</p>
                <a href="/contact" className="btn btn-primary">Inquire Now</a>
              </div>
            </div>
            
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1547996160-81dfa11a4a2c?auto=format&fit=crop&q=80&w=600" alt="Hajj & Umrah" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HajjUmrah;
