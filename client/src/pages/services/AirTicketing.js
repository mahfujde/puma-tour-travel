import React from 'react';
import { Helmet } from 'react-helmet-async';

const AirTicketing = () => {
  return (
    <>
      <Helmet>
        <title>Air Ticketing Services - PUMA Tour and Travel</title>
        <meta name="description" content="Get the best airfare deals with our air ticketing services. Domestic and international flight bookings with best prices guaranteed." />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>Air Ticketing Services</h1>
          <p>Get the best airfare deals for domestic and international flights</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-content">
              <h2>Best Airfare Guarantee</h2>
              <p>At PUMA Tour and Travel, we have direct contracts with major airlines worldwide, allowing us to offer you the most competitive prices on air tickets. Whether you're traveling for business or leisure, we ensure you get the best value for your money.</p>
              
              <div className="service-features">
                <h3>Our Air Ticketing Services Include:</h3>
                <ul>
                  <li>Domestic and international flight bookings</li>
                  <li>Best price guarantee - we'll match any published fare</li>
                  <li>Multi-airline options for flexible travel plans</li>
                  <li>24/7 booking support and assistance</li>
                  <li>Easy rescheduling and cancellation options</li>
                  <li>Group booking discounts for large parties</li>
                  <li>Special fares for students and seniors</li>
                </ul>
              </div>

              <div className="service-process">
                <h3>How It Works</h3>
                <div className="process-steps">
                  <div className="step">
                    <h4>1. Inquiry</h4>
                    <p>Contact us with your travel details including destination, dates, and passenger information.</p>
                  </div>
                  <div className="step">
                    <h4>2. Quotation</h4>
                    <p>We'll provide you with the best available options and prices within 24 hours.</p>
                  </div>
                  <div className="step">
                    <h4>3. Booking</h4>
                    <p>Once you confirm, we'll book your tickets and send you the confirmation.</p>
                  </div>
                  <div className="step">
                    <h4>4. Support</h4>
                    <p>We provide continuous support even after booking for any changes or assistance needed.</p>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <h3>Ready to Book Your Flight?</h3>
                <p>Contact us now to get the best deals on air tickets to any destination.</p>
                <a href="/contact" className="btn btn-primary">Get a Quote</a>
              </div>
            </div>
            
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600" alt="Air Ticketing" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AirTicketing;
