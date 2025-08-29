import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Destinations = () => {
  const destinations = [
    {
      name: 'Thailand',
      slug: 'thailand',
      image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=400',
      description: 'Land of Smiles & Beauty'
    },
    {
      name: 'Malaysia',
      slug: 'malaysia',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=400',
      description: 'Truly Asia'
    },
    {
      name: 'Indonesia (Bali)',
      slug: 'bali',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&q=80&w=400',
      description: 'Island of the Gods'
    },
    {
      name: 'Singapore',
      slug: 'singapore',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=400',
      description: 'The Lion City'
    },
    {
      name: 'Bangladesh',
      slug: 'bangladesh',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400',
      description: 'Beauty in Bengal'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Destinations - PUMA Tour and Travel</title>
        <meta name="description" content="Explore amazing destinations with PUMA Tour and Travel. Thailand, Malaysia, Bali, Singapore, Bangladesh and more." />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>Explore Destinations</h1>
          <p>Discover amazing places around the world with our expertly curated destinations</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="destinations-grid">
            {destinations.map((destination, index) => (
              <div key={index} className="destination-card">
                <div className="destination-image">
                  <img src={destination.image} alt={destination.name} />
                  <div className="overlay"></div>
                </div>
                <div className="destination-content">
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                  <Link to={`/destinations/${destination.slug}`} className="btn btn-primary">
                    Explore {destination.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Destinations;
