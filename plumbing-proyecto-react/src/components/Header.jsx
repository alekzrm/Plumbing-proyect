import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    }
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-container">
          <div className="logo-icon">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_319)">
                <path 
                  d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" 
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_319">
                  <rect fill="white" height="48" width="48" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="logo-text">Plumbing Solutions</h2>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="nav-menu">
          <button className="nav-link" onClick={() => handleNavClick('services')}>
            Services
          </button>
          <button className="nav-link" onClick={() => handleNavClick('about')}>
            About
          </button>
          <button className="nav-link" onClick={() => handleNavClick('gallery')}>
            Gallery
          </button>
          <button className="nav-link" onClick={() => handleNavClick('contact')}>
            Contact
          </button>
          <button className="nav-link" onClick={() => handleNavClick('terms')}>
            Términos y Condiciones
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <nav className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <button 
              className="mobile-nav-link" 
              onClick={() => handleNavClick('services')}
            >
              Services
            </button>
            <button 
              className="mobile-nav-link" 
              onClick={() => handleNavClick('about')}
            >
              About
            </button>
            <button 
              className="mobile-nav-link" 
              onClick={() => handleNavClick('gallery')}
            >
              Gallery
            </button>
            <button 
              className="mobile-nav-link" 
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </button>
            <button 
              className="mobile-nav-link" 
              onClick={() => handleNavClick('terms')}
            >
              Términos y Condiciones
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;