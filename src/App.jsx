import React from 'react';
import Home from './components/Home.jsx'
import AboutUs from './components/AboutUs.jsx';

import VisionMission from './components/VisionMission.jsx';
import Amenities from './components/Amenities.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactUs from './components/ContactUs.jsx';
import Footer from './components/Footer.jsx';
import Slide from './components/Slide.jsx'
import High from './components/High.jsx'
export default function App() {
  return (
    <div className="bg-light min-vh-100 overflow-x-hidden">
      <home />


      <Home />
            <High />

      <AboutUs />
      <VisionMission />
      <Amenities />
      <Slide />
      <Testimonials />
      <ContactUs />
      <New />
      <Footer />
    </div>
  );
}


