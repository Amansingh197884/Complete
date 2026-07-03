import React from 'react';
import Home from './components/home.jsx'
import AboutUs from './components/aboutUs.jsx';
import VisionMission from './components/visionmission.jsx';
import Amenities from './components/amenities.jsx';
import Testimonials from './components/testimonials.jsx';
import ContactUs from './components/contactUs.jsx';
import Footer from './components/footer.jsx';

export default function App() {
  return (
    <div className="bg-light min-vh-100 overflow-x-hidden">
      <home />


      <aboutUs />
      <visionmission />
     <amenities />
      <testimonials />
      <contactUs />
      <footer />
    </div>
  );
}


