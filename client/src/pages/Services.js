import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Air Ticketing',
      icon: '✈️',
      description: 'Domestic and international flight bookings with best prices guaranteed. We have direct contracts with major airlines.',
      features: [
        'Best price guarantee',
        '24/7 booking support',
        'Multi-airline options',
        'Easy rescheduling'
      ],
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 2,
      title: 'Hotel Booking',
      icon: '🏨',
      description: 'Luxury to budget accommodations worldwide. We partner with hotels across all our destinations.',
      features: [
        'Best rates guaranteed',
        'Verified properties',
        'Free cancellation options',
        'Local insights'
      ],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 3,
      title: 'Visa Assistance',
      icon: '📋',
      description: 'Professional guidance for visa applications. We handle the complex paperwork for you.',
      features: [
        'Document preparation',
        'Application submission',
        'Status tracking',
        'Expert consultation'
      ],
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 4,
      title: 'Travel Insurance',
      icon: '🛡️',
      description: 'Comprehensive coverage for your journeys. Protect yourself against unexpected events.',
      features: [
        'Medical coverage',
        'Trip cancellation',
        'Baggage protection',
        '24/7 emergency support'
      ],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 5,
      title: 'Hajj & Umrah Packages',
      icon: '🕋',
      description: 'Spiritual journeys with complete packages. We make your pilgrimage comfortable and meaningful.',
      features: [
        'Guided spiritual journey',
        'Accommodation near holy sites',
        'Transportation arrangements',
        'Experienced group leaders'
      ],
      image: 'https://images.unsplash.com/photo-1547996160-81dfa11a4a2c?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 6,
      title: 'Tour Packages',
      icon: '🗺️',
      description: 'Customized tour packages to amazing destinations. Experience the world with our expertly crafted itineraries.',
      features: [
        'Custom itineraries',
        'Local guides',
        'All-inclusive options',
        '24/7 support during tour'
      ],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - PUMA Tour and Travel</title>
        <meta name="description" content="Discover comprehensive travel services including air ticketing, hotel booking, visa assistance, travel insurance, and Hajj/Umrah packages." />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive travel solutions to make your journey seamless and memorable</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-icon">{service.icon}</div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div className="service-actions">
                    <Link to="/contact" className="btn btn-primary">Get Quote</Link>
                    <Link to="/contact" className="btn btn-outline">Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="cta-section text-center">
            <h2>Need a Custom Solution?</h2>
            <p>Contact us to create a personalized travel package that meets your specific requirements</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Get Custom Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
