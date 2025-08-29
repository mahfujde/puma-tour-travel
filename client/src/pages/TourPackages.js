import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TourPackages = () => {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    destination: '',
    duration: '',
    priceRange: ''
  });

  useEffect(() => {
    // This would typically come from an API
    const sampleTours = [
      {
        id: 1,
        title: 'Thailand Cultural Experience',
        destination: 'Thailand',
        duration: 7,
        price: 1299,
        discountPrice: 1199,
        image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=400',
        description: 'Explore the rich culture and beautiful landscapes of Thailand'
      },
      {
        id: 2,
        title: 'Malaysia Adventure Tour',
        destination: 'Malaysia',
        duration: 5,
        price: 899,
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=400',
        description: 'Adventure through the diverse landscapes of Malaysia'
      },
      {
        id: 3,
        title: 'Bali Paradise Getaway',
        destination: 'Bali',
        duration: 10,
        price: 1599,
        discountPrice: 1499,
        image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&q=80&w=400',
        description: 'Relax and rejuvenate in the paradise island of Bali'
      },
      {
        id: 4,
        title: 'Singapore City Experience',
        destination: 'Singapore',
        duration: 4,
        price: 799,
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=400',
        description: 'Experience the modern marvels of Singapore'
      },
      {
        id: 5,
        title: 'Bangladesh Heritage Tour',
        destination: 'Bangladesh',
        duration: 6,
        price: 699,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400',
        description: 'Discover the rich heritage of Bangladesh'
      },
      {
        id: 6,
        title: 'Thailand Beach Escape',
        destination: 'Thailand',
        duration: 8,
        price: 1399,
        discountPrice: 1299,
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=400',
        description: 'Relax on the beautiful beaches of Thailand'
      }
    ];

    setTours(sampleTours);
    setFilteredTours(sampleTours);
    setLoading(false);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    let result = tours;
    
    if (filters.destination) {
      result = result.filter(tour => 
        tour.destination.toLowerCase().includes(filters.destination.toLowerCase())
      );
    }
    
    if (filters.duration) {
      const [min, max] = filters.duration.split('-').map(Number);
      result = result.filter(tour => {
        if (max) return tour.duration >= min && tour.duration <= max;
        return tour.duration >= min;
      });
    }
    
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter(tour => {
        const price = tour.discountPrice || tour.price;
        if (max) return price >= min && price <= max;
        return price >= min;
      });
    }
    
    setFilteredTours(result);
  }, [filters, tours]);

  const clearFilters = () => {
    setFilters({
      destination: '',
      duration: '',
      priceRange: ''
    });
  };

  return (
    <>
      <Helmet>
        <title>Tour Packages - PUMA Tour and Travel</title>
        <meta name="description" content="Discover amazing tour packages to Thailand, Malaysia, Bali, Singapore, Bangladesh and more with PUMA Tour and Travel." />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>Tour Packages</h1>
          <p>Discover our carefully curated tour packages to amazing destinations</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="filters-section">
            <h2>Filter Packages</h2>
            <div className="filter-grid">
              <div className="filter-group">
                <label>Destination</label>
                <input
                  type="text"
                  name="destination"
                  value={filters.destination}
                  onChange={handleFilterChange}
                  placeholder="Enter destination"
                />
              </div>
              
              <div className="filter-group">
                <label>Duration (days)</label>
                <select name="duration" value={filters.duration} onChange={handleFilterChange}>
                  <option value="">Any duration</option>
                  <option value="1-3">1-3 days</option>
                  <option value="4-7">4-7 days</option>
                  <option value="8-14">8-14 days</option>
                  <option value="15">15+ days</option>
                </select>
              </div>
              
              <div className="filter-group">
                <label>Price Range ($)</label>
                <select name="priceRange" value={filters.priceRange} onChange={handleFilterChange}>
                  <option value="">Any price</option>
                  <option value="0-500">Under $500</option>
                  <option value="500-1000">$500 - $1000</option>
                  <option value="1000-2000">$1000 - $2000</option>
                  <option value="2000">$2000+</option>
                </select>
              </div>
              
              <div className="filter-group">
                <button onClick={clearFilters} className="btn btn-outline">Clear Filters</button>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="loading">Loading tour packages...</div>
          ) : (
            <>
              <div className="results-count">
                Showing {filteredTours.length} of {tours.length} packages
              </div>
              
              <div className="tours-grid">
                {filteredTours.map(tour => (
                  <div key={tour.id} className="tour-card">
                    <div className="tour-image">
                      <img src={tour.image} alt={tour.title} />
                    </div>
                    <div className="tour-content">
                      <h3>{tour.title}</h3>
                      <p className="tour-destination">{tour.destination}</p>
                      <p className="tour-duration">{tour.duration} days</p>
                      <p className="tour-description">{tour.description}</p>
                      <div className="tour-price">
                        {tour.discountPrice ? (
                          <>
                            <span className="original-price">${tour.price}</span>
                            <span className="discount-price">${tour.discountPrice}</span>
                          </>
                        ) : (
                          <span className="price">${tour.price}</span>
                        )}
                      </div>
                      <div className="tour-actions">
                        <Link to={`/tour-packages/${tour.id}`} className="btn btn-primary">View Details</Link>
                        <button className="btn btn-outline">Quick Enquiry</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredTours.length === 0 && (
                <div className="no-results">
                  <h3>No tour packages found</h3>
                  <p>Try adjusting your filters to see more results</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default TourPackages;
