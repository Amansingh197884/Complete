import React from 'react';

export default function Footer() {
  return (
    <footer className="py-4  text-white-50 border-top border-secondary" style={{backgroundColor:'#c8a261',}}>
      <div className="container text-white d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 text-center text-md-start">
        <small>&copy; 2026 Aajneeti</small>
        <div className="d-flex gap-4 small">
          <a href="#about" className="text-white text-decoration-none">Privacy Charter</a>
          <a href="#vision" className="text-white text-decoration-none">Terms of Service</a>
          <a href="#contact" className="text-white text-decoration-none">System Security</a>
        </div>
      </div>
    </footer>
  );
}