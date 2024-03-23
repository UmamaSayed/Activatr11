import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
        <a className='logo'>Activatr</a>
          <p className="slogan">Elevate your brand's presence with Activatrs</p>
        </div>
        <div className="contact-info">
        <p><span role="img" aria-label="Mobile">📱</span> 8499003928</p>
       
          <p><span role="img" aria-label="Email">✉️</span> contact@vistaardigital</p>
          <p><span role="img" aria-label="Location">📍</span> 602 , Mumbai, Borivali</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
