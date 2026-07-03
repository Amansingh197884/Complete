import React from 'react';
import Home from './Components/Home'
import AboutUs from './components/AboutUs';
import VisionMission from './components/VisionMission';
import Amenities from './components/Amenities';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-light min-vh-100 overflow-x-hidden">
      <Home />



      <AboutUs />
      <VisionMission />
      <Amenities />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}


