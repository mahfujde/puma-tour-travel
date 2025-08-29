import React from 'react';
import { Helmet } from 'react-helmet-async';

const TravelInsurance = () => {
  return (
    <>
      <Helmet>
        <title>Travel Insurance Services - PUMA Tour and Travel</title>
        <meta name="description" content="Protect your journey with comprehensive travel insurance coverage. Medical, trip cancellation, and baggage protection." />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>Travel Insurance Services</h1>
          <p>Comprehensive coverage for your journeys</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-content">
              <h2>Travel with Peace of Mind</h2>
              <p>Unexpected events can disrupt even the best-planned trips. PUMA Tour and Travel offers comprehensive travel insurance options to protect you against unforeseen circumstances. Our insurance partners provide coverage for medical emergencies, trip cancellations, lost baggage, and more.</p>
              
              <div className="service-features">
                <h3>Our Travel Insurance Coverage Includes:</h3>
                <ul>
                  <li>Emergency medical expenses and hospitalization</li>
                  <li>Trip cancellation and interruption protection</li>
                  <li>Baggage loss, theft, or delay coverage</li>
                  <li>Emergency evacuation and repatriation</li>
                  <li>24/7 emergency assistance worldwide</li>
                  <li>Personal liability coverage</li>
                  <li>Adventure sports coverage (optional)</li>
                </ul>
              </div>

              <div className="insurance-plans">
                <h3>Insurance Plan Options</h3>
                <div className="plan-grid">
                  <div className="plan-item">
                    <h4>Basic Plan</h4>
                    <p>Essential coverage for medical emergencies and trip cancellation</p>
                    <ul>
                      <li>Medical expenses: $100,000</li>
                      <li>Trip cancellation: $5,000</li>
                      <li>Baggage loss: $1,000</li>
                    </ul>
                  </div>
                  <div className="plan-item">
                    <h4>Comprehensive Plan</h4>
                    <p>Complete protection for all travel needs</p>
                    <ul>
                      <li>Medical expenses: $500,000</li>
                      <li>Trip cancellation: $10,000</li>
                      <li>Baggage loss: $3,000</li>
                      <li>Emergency evacuation: $300,000</li>
                    </ul>
                  </div>
                  <div className="plan-item">
                    <h4>Family Plan</h4>
                    <p>Special coverage for families traveling together</p>
                    <ul>
                      <li>Coverage for 2 adults and up to 3 children</li>
                      <li>Medical expenses: $300,000 per person</li>
                      <li>Family trip cancellation protection</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <h3>Need Travel Insurance?</h3>
                <p>Protect your journey with our comprehensive travel insurance plans.</p>
                <a href="/contact" className="btn btn-primary">Get Insured</a>
              </div>
            </div>
            
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600" alt="Travel Insurance" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TravelInsurance;
