import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const TourPackageDetail = () => {
  const { id } = useParams();
  
  // This would typically come from an API
  const tourPackages = {
    1: {
      title: 'Thailand Cultural Experience',
      destination: 'Thailand',
      duration: 7,
      price: 1299,
      discountPrice: 1199,
      image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=800',
      description: 'Explore the rich culture and beautiful landscapes of Thailand',
      itinerary: [
        { day: 1, title: 'Arrival in Bangkok', description: 'Arrive at Bangkok airport and transfer to your hotel' },
        { day: 2, title: 'Grand Palace & Temples', description: 'Visit the magnificent Grand Palace and Wat Arun' },
        { day: 3, title: 'Floating Market', description: 'Experience the unique floating market and local cuisine' },
        { day: 4, title: 'Travel to Chiang Mai', description: 'Fly to Chiang Mai and explore the old city' },
        { day: 5, title: 'Elephant Sanctuary', description: 'Visit an ethical elephant sanctuary' },
        { day: 6, title: 'Doi Suthep Temple', description: 'Visit the sacred Doi Suthep temple' },
        { day: 7, title: 'Departure', description: 'Transfer to airport for departure' }
      ],
      inclusions: [
        '6 nights accommodation',
        'All transportation',
        'English speaking guide',
        'Entrance fees',
        'Daily breakfast'
      ],
      exclusions: [
        'International flights',
        'Travel insurance',
        'Personal expenses',
        'Visa fees'
      ]
    },
    2: {
      title: 'Malaysia Adventure Tour',
      destination: 'Malaysia',
      duration: 5,
      price: 899,
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800',
      description: 'Adventure through the diverse landscapes of Malaysia',
      itinerary: [
        { day: 1, title: 'Arrival in Kuala Lumpur', description: 'Arrive at KLIA airport and transfer to your hotel' },
        { day: 2, title: 'City Tour', description: 'Visit PETRONAS Towers and Batu Caves' },
        { day: 3, title: 'Cameron Highlands', description: 'Travel to Cameron Highlands for tea plantation tour' },
        { day: 4, title: 'Penang Island', description: 'Fly to Penang and explore George Town' },
        { day: 5, title: 'Departure', description: 'Transfer to airport for departure' }
      ],
      inclusions: [
        '4 nights accommodation',
        'All transportation',
        'English speaking guide',
        'Entrance fees',
        'Daily breakfast'
      ],
      exclusions: [
        'International flights',
        'Travel insurance',
        'Personal expenses',
        'Visa fees'
      ]
    }
  };

  const tour = tourPackages[id] || {
    title: 'Tour Package Not Found',
    description: 'The tour package you are looking for does not exist.',
    itinerary: [],
    inclusions: [],
    exclusions: []
  };

  return (
    <>
      <Helmet>
        <title>{tour.title} - PUMA Tour and Travel</title>
        <meta name="description" content={tour.description} />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>{tour.title}</h1>
          <p>{tour.description}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="tour-detail">
            <div className="tour-hero">
              <img src={tour.image} alt={tour.title} />
            </div>

            <div className="tour-info">
              <div className="tour-meta">
                <div className="meta-item">
                  <span className="label">Destination:</span>
                  <span className="value">{tour.destination}</span>
                </div>
                <div className="meta-item">
                  <span className="label">Duration:</span>
                  <span className="value">{tour.duration} days</span>
                </div>
                <div className="meta-item">
                  <span className="label">Price:</span>
                  <span className="value">
                    {tour.discountPrice ? (
                      <>
                        <span className="original-price">${tour.price}</span>
                        <span className="discount-price">${tour.discountPrice}</span>
                      </>
                    ) : (
                      <span className="price">${tour.price}</span>
                    )}
                  </span>
                </div>
              </div>

              <div className="itinerary-section">
                <h2>Itinerary</h2>
                <div className="itinerary-list">
                  {tour.itinerary.map(day => (
                    <div key={day.day} className="itinerary-item">
                      <h3>Day {day.day}: {day.title}</h3>
                      <p>{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="inclusions-exclusions">
                <div className="inclusions">
                  <h3>What's Included</h3>
                  <ul>
                    {tour.inclusions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="exclusions">
                  <h3>What's Not Included</h3>
                  <ul>
                    {tour.exclusions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="cta-section">
                <h3>Ready to book this tour?</h3>
                <p>Contact us to book this amazing tour package</p>
                <a href="/contact" className="btn btn-primary">Book Now</a>
                <a href="/contact" className="btn btn-outline">Get More Info</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourPackageDetail;
