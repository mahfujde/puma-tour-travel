import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [featuredTours, setFeaturedTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedTours = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tour-packages/featured');
        setFeaturedTours(response.data);
      } catch (error) {
        console.error('Error fetching featured tours:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedTours();
  }, []);

  // Hero carousel images
  const heroImages = [
    {
      src: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=1200',
      alt: 'The Grand Palace in Bangkok',
      title: 'Thailand'
    },
    {
      src: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&q=80&w=1200',
      alt: 'The beaches of Bali',
      title: 'Bali, Indonesia'
    },
    {
      src: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=1200',
      alt: 'PETRONAS Towers in Kuala Lumpur',
      title: 'Malaysia'
    },
    {
      src: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=1200',
      alt: 'Skyline of Singapore',
      title: 'Singapore'
    },
    {
      src: 'https://images.unsplash.com/photo-1582573618381-c9a77c31f6b6?auto=format&fit=crop&q=80&w=1200',
      alt: 'Cox\'s Bazar Sea Beach',
      title: 'Bangladesh'
    }
  ];

  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const uspItems = [
    {
      icon: '🏢',
      title: 'Local Offices in 4 Countries',
      text: 'Get genuine on-the-ground support from our teams in Dhaka, Bangkok, Kuala Lumpur, and Jakarta. Real help, wherever you are.'
    },
    {
      icon: '✈️',
      title: 'Best Airfare Guarantee',
      text: 'We have direct contracts with airlines. Find a cheaper published fare? We\'ll match it.'
    },
    {
      icon: '📋',
      title: 'End-to-End Visa Help',
      text: 'We manage the complex paperwork for visas across our entire network of countries.'
    },
    {
      icon: '🤝',
      title: 'Bi-Directional Expertise',
      text: 'We are the experts whether you\'re traveling from or to Bangladesh, Thailand, Malaysia, or Indonesia.'
    }
  ];

  const featuredDestinations = [
    {
      name: 'Thailand',
      image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=400',
      description: 'Land of Smiles & Beauty',
      link: '/destinations/thailand'
    },
    {
      name: 'Malaysia',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=400',
      description: 'Truly Asia',
      link: '/destinations/malaysia'
    },
    {
      name: 'Indonesia (Bali)',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&q=80&w=400',
      description: 'Island of the Gods',
      link: '/destinations/indonesia-bali'
    },
    {
      name: 'Singapore',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=400',
      description: 'The Lion City',
      link: '/destinations/singapore'
    },
    {
      name: 'Bangladesh',
      image: 'https://images.unsplash.com/photo-1582573618381-c9a77c31f6b6?auto=format&fit=crop&q=80&w=400',
      description: 'Beauty in Bengal',
      link: '/destinations/bangladesh'
    }
  ];

  return (
    <>
      <Helmet>
        <title>PUMA Tour and Travel - Your Trusted Travel Partner Across Southeast Asia & Bangladesh</title>
        <meta name="description" content="Journey seamlessly between vibrant cultures. With our own offices in Bangladesh, Thailand, Malaysia, and Indonesia, we provide expert travel planning, exclusive deals, and 24/7 support." />
        <meta name="keywords" content="Southeast Asia travel agency, local travel expert, tour package Bangladesh to Thailand" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-images">
          {heroImages.map((image, index) => (
            <div 
              key={index}
              className={`hero-image ${index === currentHeroImage ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image.src})` }}
              aria-label={image.alt}
            ></div>
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Your Trusted Travel Partner Across Southeast Asia & Bangladesh</h1>
          <p>Journey seamlessly between vibrant cultures. With our own offices in Bangladesh, Thailand, Malaysia, and Indonesia, we provide expert travel planning, exclusive deals, and 24/7 support—whether you're traveling from Dhaka to Bali or from Kuala Lumpur to Cox's Bazar.</p>
          <div className="hero-buttons">
            <Link to="/destinations" className="btn btn-primary">Explore Top Destinations</Link>
            <Link to="/contact" className="btn btn-secondary">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="usp-section">
        <div className="container">
          <div className="usp-grid">
            {uspItems.map((item, index) => (
              <div key={index} className="usp-item">
                <div className="usp-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="destinations-section">
        <div className="container">
          <h2 className="section-title">Explore Our Most Popular Destinations</h2>
          <div className="destinations-grid">
            {featuredDestinations.map((destination, index) => (
              <div key={index} className="destination-card">
                <div className="destination-image">
                  <img src={destination.image} alt={destination.name} />
                  <div className="overlay"></div>
                </div>
                <div className="destination-content">
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                  <Link to={destination.link} className="btn btn-outline">Explore</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="container">
          <h2>Ready to Plan Your Cross-Border Adventure?</h2>
          <p>Speak to our travel experts in your language and get a personalized itinerary today.</p>
          <Link to="/contact" className="btn btn-primary">Start Planning Now!</Link>
        </div>
      </section>
    </>
  );
};

export default Home;