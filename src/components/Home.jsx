import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const heroImages = [
  "https://i.pinimg.com/1200x/2e/8c/f4/2e8cf45d4b5980b2110944dfe2afe4d8.jpg",
  "https://i.pinimg.com/1200x/69/fb/af/69fbaf394b30a03d673865eb3c661584.jpg",
  "https://i.pinimg.com/1200x/c5/6e/94/c56e940486969a64984fdf3e3d1f2f14.jpg"
];

export default function Home() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-light min-vh-100 overflow-x-hidden position-relative">
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
            <div className="col-lg-8 bg-white rounded-1 p-2 shadow-lg">
              <form onSubmit={(e) => e.preventDefault()} className="row g-2 align-items-center m-0">
                <div className="col-md-3">
                  <select className="form-select border-0 fs-5 fw-medium text-secondary py-2 shadow-none">
                    <option>Rentals</option>
                    <option>For Sale</option>
                    <option>Commercial</option>
                  </select>
                </div>

                <div className="col-md-6 border-start border-md-none py-1 justify-content-between d-flex align-items-center">
                  <input
                    type="text"
                    className="form-control border-0 fs-5 py-2 shadow-none"
                    placeholder="Location or keywords... "
                  />
                  <FaSearch className='search me-3' size={14} />
                </div>

                <div className="col-md-3">
                  <button className="btn btn-home w-100 py-3 tracking-wide">
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