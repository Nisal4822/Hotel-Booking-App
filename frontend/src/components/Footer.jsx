import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#4CAF50', color: 'white' }}>
      <p>© 2024 Hotel Booking System. All rights reserved.</p>
      <nav>
        <a href="#about" style={{ color: 'white', margin: '0 10px' }}>About Us</a>
        <a href="#privacy" style={{ color: 'white', margin: '0 10px' }}>Privacy Policy</a>
        <a href="#terms" style={{ color: 'white', margin: '0 10px' }}>Terms of Service</a>
      </nav>
    </footer>
  );
};

export default Footer;
