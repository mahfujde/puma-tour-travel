import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      bio: 'With over 15 years in the travel industry, John founded PUMA Tour and Travel to provide exceptional travel experiences across Southeast Asia.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
      bio: 'Sarah ensures smooth operations across all our offices and maintains our high standards of customer service.'
    },
    {
      name: 'Michael Chen',
      position: 'Tour Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
      bio: 'Michael designs our most popular tour packages and ensures every itinerary offers unique cultural experiences.'
    },
    {
      name: 'Aisha Rahman',
      position: 'Customer Relations',
      image: 'https://images.unsplash.com/photo-1551836026-d5c8c5ab235e?auto=format&fit=crop&q=80&w=400',
      bio: 'Aisha leads our customer support team and ensures every traveler receives personalized attention.'
    }
  ];

  const values = [
    {
      icon: '🏆',
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service, from itinerary planning to customer support.'
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: 'Building trust with our clients is our priority. We maintain transparency in all our dealings.'
    },
    {
      icon: '🌏',
      title: 'Local Expertise',
      description: 'With offices in 4 countries, we offer genuine local expertise that enhances your travel experience.'
    },
    {
      icon: '💖',
      title: 'Passion',
      description: 'We are passionate about travel and dedicated to creating memorable experiences for our clients.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - PUMA Tour and Travel</title>
        <meta name="description" content="Learn about PUMA Tour and Travel - your trusted travel partner across Southeast Asia and Bangladesh since 2010." />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>About PUMA Tour and Travel</h1>
          <p>Your trusted travel partner across Southeast Asia and Bangladesh</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, PUMA Tour and Travel began as a small travel agency in Dhaka with a big dream: 
                to become the leading travel partner for journeys between Southeast Asia and Bangladesh. 
                Today, we have grown to establish our own offices in four countries - Bangladesh, Thailand, Malaysia, and Indonesia.
              </p>
              <p>
                Our journey started with a simple belief: that travel should be seamless, authentic, and enriching. 
                Over the years, we've helped thousands of travelers discover the beauty and diversity of Southeast Asia 
                while also promoting the hidden gems of Bangladesh to international visitors.
              </p>
              
              <h2>Our Mission</h2>
              <p>
                Our mission is to bridge cultures and create meaningful connections through travel. 
                We provide expert travel planning, exclusive deals, and 24/7 support to ensure that 
                every journey with us is memorable and hassle-free.
              </p>
              
              <h2>Why Choose Us?</h2>
              <ul className="feature-list">
                <li>Local offices in 4 countries for on-the-ground support</li>
                <li>Direct contracts with airlines and hotels for best prices</li>
                <li>Expert visa assistance for all our destination countries</li>
                <li>Bi-directional expertise (traveling to/from Bangladesh)</li>
                <li>24/7 customer support in multiple languages</li>
                <li>Customized itineraries based on your preferences</li>
              </ul>
            </div>
            
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&q=80&w=600" alt="PUMA Tour and Travel Team" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-center mb-5">Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="position">{member.position}</p>
                  <p className="bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-dark text-white">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Happy Travelers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
