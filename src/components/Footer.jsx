import React from 'react';

export default function Footer() {
  return (
    <footer className="py-4 bg-dark text-white-50 border-top border-secondary">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 text-center text-md-start">
        <small>&copy; 2026 VanguardLiving Inc. Deployed cleanly with Bootstrap & React.</small>
        <div className="d-flex gap-4 small">
          <a href="#about" className="text-white-50 text-decoration-none">Privacy Charter</a>
          <a href="#vision" className="text-white-50 text-decoration-none">Terms of Service</a>
          <a href="#contact" className="text-white-50 text-decoration-none">System Security</a>
        </div>
      </div>
    </footer>
  );
}