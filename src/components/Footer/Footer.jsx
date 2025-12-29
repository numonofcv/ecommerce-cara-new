// Footer.jsx
import React from 'react';
import './Footer.scss';
import footerLogo from '../../assets/logo.png';
import appStore from '../../assets/pay/app.jpg';
import googlePlay from '../../assets/pay/play.jpg';
import paymentGateways from '../../assets/pay/pay.png';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="col">
          <img className="logo" src={footerLogo} alt="Cara" />
          <h4>Contact</h4>

          {/* Address */}
          <p>
            <strong>Address:</strong>
          </p>
          <address className="address">
            562 Wellington Road, Street 32, San Fransisko
          </address>

          <p>
            <strong>Phone:</strong>{' '}
            <span>+01 2222 365 / (+91) 01 2345 6789</span>
          </p>

          <p>
            <strong>Hour:</strong>{' '}
            <span>10:00 - 18:00, Mon - Sat</span>
          </p>

          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaPinterestP /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="col">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>

        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src={appStore} alt="App Store" />
            <img src={googlePlay} alt="Google Play" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src={paymentGateways} alt="Payment Gateways" />
        </div>

        <div className="copyright">
          <p>2021, Tech2 etc - HTML CSS Ecommerce Template</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
