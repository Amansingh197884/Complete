import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx2AsJs_ZCn4eR1cTOrzJ5jq3zBJjL1Ld9RQrlGAhB2sU2Vrj23WAueefaeCueZlDlx/exec";

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setSent(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      {/* Hero Header Section */}
      <header className="contact-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <Link to="/" className="text-decoration-none text-white me-1">HOME</Link>
            <span>/ CONTACT</span>
            <h1>Contact</h1>
          </div>
        </div>
      </header>

      <main className="contact-main">
        <div className="contact-grid">

          <section className="info-section">
            <span className="section-subtitle">// CONTACT US</span>
            <h2 className="section-title">Get in touch with our expert</h2>
            <p className="section-desc">
              Our success is determined not only by the results we acquire, but also by the manner in which we achieve them on way to see that.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="icon-wrapper">
                </div>
                <div>
                  <span className="info-label">Have any question?</span>
                  <a href="tel:+9288008960" className="info-value">Free +92 (8800) - 8960</a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrapper">
                </div>
                <div>
                  <span className="info-label">Write email</span>
                  <a href="mailto:needhelp@company.com" className="info-value">needhelp@company.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrapper">
                </div>
                <div>
                  <span className="info-label">Visit now</span>
                  <p className="info-value">80 broklyn golden street, New York</p>
                </div>
              </div>
            </div>
          </section>

          <section className="form-section">
            {sent ? (
              <div className="text-center py-5 animate__animated animate__zoomIn" style={{ textAlign: 'center', padding: '40px 0' }}>
                <h3 className="text-success fw-bold" style={{ color: '#28a745', fontWeight: 'bold' }}>Message Logged!</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Write a message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? "SENDING..." : "SEND A MESSAGE"}
                </button>
              </form>
            )}
          </section>

        </div>
      </main>

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