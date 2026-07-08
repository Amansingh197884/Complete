import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
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

  return (
    <nav className={`navbar navbar-expand-lg real-estate-nav py-3 fixed-top ${isScrolled ? 'scrolled' : ''} ${isNavOpen ? 'nav-menu-mobile-open' : ''}`}>
      <div className="container">

        <Link className="navbar-brand text-white fw-bold fs-3 animate__animated animate__fadeInLeft" to="/">
          Aajneeti
        </Link>

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
              <Link className="nav-link nav-link-custom" to="/" onClick={() => setIsNavOpen(false)}>Home</Link>
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
              <Link to="/New" className="btn contact-btn-custom d-inline-flex align-items-center gap-2" onClick={() => setIsNavOpen(false)}>
                Contact <FaArrowRight size={14} />
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}