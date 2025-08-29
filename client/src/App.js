import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import components
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Import pages
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import TourPackages from './pages/TourPackages';
import TourPackageDetail from './pages/TourPackageDetail';
import Services from './pages/Services';
import AirTicketing from './pages/services/AirTicketing';
import HotelBooking from './pages/services/HotelBooking';
import VisaAssistance from './pages/services/VisaAssistance';
import TravelInsurance from './pages/services/TravelInsurance';
import HajjUmrah from './pages/services/HajjUmrah';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

// Import styles
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/destinations/:slug" element={<DestinationDetail />} />
              <Route path="/tour-packages" element={<TourPackages />} />
              <Route path="/tour-packages/:slug" element={<TourPackageDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/air-ticketing" element={<AirTicketing />} />
              <Route path="/services/hotel-booking" element={<HotelBooking />} />
              <Route path="/services/visa-assistance" element={<VisaAssistance />} />
              <Route path="/services/travel-insurance" element={<TravelInsurance />} />
              <Route path="/services/hajj-umrah" element={<HajjUmrah />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
