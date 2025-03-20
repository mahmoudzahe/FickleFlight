import React from 'react';
import bellImage from '../assets/bell.png';
import fickleFlightLogo from '../assets/FickleFlight.png'; 

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={fickleFlightLogo}
            alt="FickleFlight Logo"
            style={{
              height: '30px',
              objectFit: 'contain', 
            }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">Explore</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Search</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Hotels</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Offers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img
                  src={bellImage}
                  alt="Notifications"
                  style={{
                    width: '20px',
                    height: '20px',
                    objectFit: 'contain',
                  }}
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img
                  src="https://lh3.googleusercontent.com/xYFPpCOXf426I3SVhmM-JCowJKx18XzIpg5-v-XkmXN4fxU6U4wXlE41POhm91nn5d4C2A=s85"
                  alt="Profile"
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;