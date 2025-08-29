import React from 'react';
import { Helmet } from 'react-helmet-async';

const HotelBooking = () => {
  return (
    <>
      <Helmet>
        <title>Hotel Booking Services - PUMA Tour and Travel</title>
        <meta name="description" content="Book the perfect accommodation for your stay with our hotel booking services. Luxury to budget options worldwide." />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>Hotel Booking Services</h1>
          <p>Find the perfect accommodation for your travel needs</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-content">
              <h2>Worldwide Accommodation Solutions</h2>
              <p>PUMA Tour and Travel partners with hotels and resorts across all our destinations to provide you with the best accommodation options. From luxury resorts to budget-friendly hotels, we have options to suit every preference and budget.</p>
              
              <div className="service-features">
                <h3>Our Hotel Booking Services Include:</h3>
                <ul>
                  <li>Best rates guaranteed with our partner hotels</li>
                  <li>Wide range of verified properties</li>
                  <li>Free cancellation options on most bookings</li>
                  <li>Local insights on the best areas to stay</li>
                  <li>Special amenities and upgrades for our clients</li>
                  <li>Group booking discounts</li>
                  <li>24/7 support for any hotel-related issues</li>
                </ul>
              </div>

              <div className="destination-hotels">
                <h3>Popular Destinations</h3>
                <div className="destination-grid">
                  <div className="destination-item">
                    <h4>Thailand</h4>
                    <p>Beach resorts, city hotels, and boutique accommodations</p>
                  </div>
                  <div className="destination-item">
                    <h4>Malaysia</h4>
                    <p>Luxury hotels, business accommodations, and heritage stays</p>
                  </div>
                  <div className="destination-item">
                    <h4>Bali, Indonesia</h4>
                    <p>Villas, beachfront resorts, and spiritual retreats</p>
                  </div>
                  <div className="destination-item">
                    <h4>Singapore</h4>
                    <p>Business hotels, luxury accommodations, and family-friendly stays</p>
                  </div>
                  <div className="destination-item">
                    <h4>Bangladesh</h4>
                    <p>City hotels, business accommodations, and resort stays</p>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <h3>Need Hotel Accommodation?</h3>
                <p>Contact us to find the perfect hotel for your next trip.</p>
                <a href="/contact" className="btn btn-primary">Find Hotels</a>
              </div>
            </div>
            
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600" alt="Hotel Booking" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelBooking;
