import React from 'react';


const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-container">
      {/* Hero Header Section */}
      <header className="contact-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="breadcrumb">HOME / CONTACT</span>
            <h1>Contact</h1>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="contact-main">
        <div className="contact-grid">
          
          {/* Left Column: Info */}
          <section className="info-section">
            <span className="section-subtitle">// CONTACT US</span>
            <h2 className="section-title">Get in touch with our expert</h2>
            <p className="section-desc">
              Our success is determined not only by the results we acquire, but also by the manner in which we achieve them on way to see that.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="icon-wrapper">
                  {/* <Phone size={20} /> */}
                </div>
                <div>
                  <span className="info-label">Have any question?</span>
                  <a href="tel:+9288008960" className="info-value">Free +92 (8800) - 8960</a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrapper">
                  {/* <Mail size={20} /> */}
                </div>
                <div>
                  <span className="info-label">Write email</span>
                  <a href="mailto:needhelp@company.com" className="info-value">needhelp@company.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrapper">
                  {/* <MapPin size={20} /> */}
                </div>
                <div>
                  <span className="info-label">Visit now</span>
                  <p className="info-value">80 broklyn golden street, New York</p>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column: Form */}
          <section className="form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email address" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone number" />
              </div>
              <div className="form-group">
                <textarea placeholder="Write a message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                SEND A MESSAGE
              </button>
            </form>
          </section>

        </div>
      </main>
      {/* Map Section */}
      <section className="map-section">
        <iframe 
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.85922932072!2d77.23700892182737!3d28.522404037750473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1783416648326!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;