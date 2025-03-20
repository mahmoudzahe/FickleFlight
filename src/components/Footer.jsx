import React from 'react';
import facebookIcon from '../assets/Facebook.png'; 
import twitterIcon from '../assets/Twitter.png';
import instagramIcon from '../assets/instagram.png'; 

function Footer() {
  console.log('Facebook Icon:', facebookIcon);
  console.log('Twitter Icon:', twitterIcon);
  console.log('Instagram Icon:', instagramIcon);

  return (
    <footer className="text-white py-5" style={{ backgroundColor: '#1E3A8A' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>FickleFlight</h3>
            <p>
              Fickle Flight is your one-stop travel portal. We offer hassle-free flight and hotel bookings. We have all your flight needs in your online shop.
            </p>
            <div className="social-icons d-flex gap-3">
              <a href="#" className="text-white">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    objectFit: 'contain',
                  }}
                />
              </a>
              <a href="#" className="text-white">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    objectFit: 'contain',
                  }}
                />
              </a>
              <a href="#" className="text-white">
                <img
                  src={twitterIcon}
                  alt="Twitter"
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    objectFit: 'contain',
                  }}
                />
              </a>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <h4>Company</h4>
                <a href="#" className="d-block text-white text-decoration-none mb-2">About Us</a>
                <a href="#" className="d-block text-white text-decoration-none mb-2">News</a>
                <a href="#" className="d-block text-white text-decoration-none mb-2">Careers</a>
                <a href="#" className="d-block text-white text-decoration-none mb-2">How we work</a>
              </div>
              <div className="col-md-4">
                <h4>Support</h4>
                <a href="#" className="d-block text-white text-decoration-none mb-2">Account</a>
                <a href="#" className="d-block text-white text-decoration-none mb-2">Support Center</a>
                <a href="#" className="d-block text-white text-decoration-none mb-2">FAQ</a>
                <a href="#" className="d-block text-white text-decoration-none mb-2">Accessibility</a>
              </div>
              <div className="col-md-4">
                <h4>More</h4>
                <a href="#" className="d-block text-white text-decoration-none mb-2">Covid Advisory</a>
                <a href="#" className="d-block text-white text-decoration-none mb-2">Airline Fees</a>
                <a href="#" className="d-block text-white text-decoration-none mb-2">Tips</a>
                <a href="#" className="d-block text-white text-decoration-none mb-2">Quarantine Rules</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;