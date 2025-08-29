import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <strong>PUMA Tour & Travel</strong>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="destinationsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Destinations
              </a>
              <ul className="dropdown-menu" aria-labelledby="destinationsDropdown">
                <li><Link to="/destinations/thailand" className="dropdown-item">Thailand</Link></li>
                <li><Link to="/destinations/malaysia" className="dropdown-item">Malaysia</Link></li>
                <li><Link to="/destinations/bali" className="dropdown-item">Indonesia (Bali)</Link></li>
                <li><Link to="/destinations/singapore" className="dropdown-item">Singapore</Link></li>
                <li><Link to="/destinations/bangladesh" className="dropdown-item">Bangladesh</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/tour-packages" className="nav-link">Tour Packages</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><Link to="/services/air-ticketing" className="dropdown-item">Air Ticketing</Link></li>
                <li><Link to="/services/hotel-booking" className="dropdown-item">Hotel Booking</Link></li>
                <li><Link to="/services/visa-assistance" className="dropdown-item">Visa Assistance</Link></li>
                <li><Link to="/services/travel-insurance" className="dropdown-item">Travel Insurance</Link></li>
                <li><Link to="/services/hajj-umrah" className="dropdown-item">Hajj & Umrah Packages</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">Travel Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
