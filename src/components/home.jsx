import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';

const heroImages = [
  "https://i.pinimg.com/1200x/2e/8c/f4/2e8cf45d4b5980b2110944dfe2afe4d8.jpg",
  "https://i.pinimg.com/1200x/69/fb/af/69fbaf394b30a03d673865eb3c661584.jpg",
  "https://i.pinimg.com/1200x/c5/6e/94/c56e940486969a64984fdf3e3d1f2f14.jpg"
];

export default function App() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-light min-vh-100 overflow-x-hidden position-relative">
      
      <nav className={`navbar navbar-expand-lg real-estate-nav py-3 ${isScrolled ? 'scrolled' : ''} ${isNavOpen ? 'nav-menu-mobile-open' : ''}`}>
        <div className="container">
          
          <a className="navbar-brand text-white fw-bold fs-3 animate__animated animate__fadeInLeft" href="#home">
            Aajneeti
          </a>
          
          <button 
            className="navbar-toggler border-0 text-white" 
            type="button" 
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>

          <div className={`collapse navbar-collapse ${isNavOpen ? 'show text-center pt-3' : ''}`}>
            <ul className="navbar-nav ms-auto align-items-center gap-3 gap-lg-4">
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="#home" onClick={() => setIsNavOpen(false)}>Home</a>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link nav-link-custom dropdown-toggle" href="#properties" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Properties
                </a>
                <ul className="dropdown-menu dropdown-menu-dark border-0 shadow" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#rentals">Rentals</a></li>
                  <li><a className="dropdown-item" href="#sale">For Sale</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="btn contact-btn-custom d-inline-flex align-items-center gap-2" href="#contact" onClick={() => setIsNavOpen(false)}>
                  Contact <FaArrowRight size={14} />
                </a>
              </li>

             
            </ul>
          </div>

        </div>
      </nav>

      <header 
        className="animated-hero text-white" 
        style={{ backgroundImage: `url(${heroImages[currentImgIndex]})` }}
      >
        <div className="container text-center hero-content-wrapper pt-5 mt-5">
          <div className="animate__animated animate__fadeInDown">
            <span className="text-uppercase tracking-widest fw-bold text-white-50 small mb-2 d-block">
              Aajneeti Properties
            </span>
            <h1 className="display-1 banner-h1 mb-4" style={{ letterSpacing: '-1px' }}>
              Find Your Place
            </h1>
          </div>

          <div className="row justify-content-center mx-1 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="col-lg-8 bg-white rounded-1 p-2  shadow-lg">
              <form onSubmit={(e) => e.preventDefault()} className="row g-2 align-items-center m-0">
                <div className="col-md-3">
                  <select className="form-select border-0 fs-5 fw-medium text-secondary py-2 shadow-none">
                    <option>Rentals</option>
                    <option>For Sale</option>
                    <option>Commercial</option>
                  </select>
                </div>

                <div className="col-md-6 border-start border-md-none py-1">
                  <input 
                    type="text" 
                    className="form-control border-0 fs-5 py-2 shadow-none" 
                    placeholder="Location or keywords..." 
                  />
                </div>

                <div className="col-md-3">
                  <button className="btn btn-home  w-100 py-3  tracking-wide">
                    Search 
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </header>

     

    </div>
  );
}