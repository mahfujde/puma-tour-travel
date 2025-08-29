import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const DestinationDetail = () => {
  const { slug } = useParams();
  
  // This would typically come from an API
  const destinationData = {
    thailand: {
      name: 'Thailand',
      description: 'Experience the Land of Smiles with its beautiful beaches, rich culture, and delicious cuisine.',
      highlights: ['Grand Palace in Bangkok', 'Beaches of Phuket', 'Ancient temples of Chiang Mai'],
      image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=800'
    },
    malaysia: {
      name: 'Malaysia',
      description: 'Discover modern cities, rainforests, and diverse cultural heritage in truly Asia.',
      highlights: ['PETRONAS Towers', 'Batu Caves', 'Langkawi Island'],
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800'
    },
    bali: {
      name: 'Bali, Indonesia',
      description: 'Experience the island of gods with its temples, beaches, and vibrant culture.',
      highlights: ['Uluwatu Temple', 'Tegallalang Rice Terraces', 'Seminyak Beach'],
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&q=80&w=800'
    },
    singapore: {
      name: 'Singapore',
      description: 'Explore the garden city with stunning architecture and diverse cuisine.',
      highlights: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island'],
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800'
    },
    bangladesh: {
      name: 'Bangladesh',
      description: 'Discover the natural beauty and cultural heritage of Bengal.',
      highlights: ['Cox\'s Bazar Beach', 'Sundarbans Mangrove Forest', 'Historical sites in Dhaka'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800'
    }
  };

  const destination = destinationData[slug] || {
    name: 'Destination Not Found',
    description: 'The destination you are looking for does not exist.',
    highlights: [],
    image: ''
  };

  return (
    <>
      <Helmet>
        <title>{destination.name} - PUMA Tour and Travel</title>
        <meta name="description" content={destination.description} />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>{destination.name}</h1>
          <p>{destination.description}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="destination-detail">
            <div className="destination-hero">
              <img src={destination.image} alt={destination.name} />
            </div>

            <div className="destination-info">
              <h2>About {destination.name}</h2>
              <p>{destination.description}</p>
              
              {destination.highlights && destination.highlights.length > 0 && (
                <>
                  <h3>Highlights</h3>
                  <ul className="highlight-list">
                    {destination.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </>
              )}
              
              <div className="cta-section">
                <h3>Ready to explore {destination.name}?</h3>
                <p>Contact us to plan your perfect trip to {destination.name}</p>
                <a href="/contact" className="btn btn-primary">Get a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DestinationDetail;
