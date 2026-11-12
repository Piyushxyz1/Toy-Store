
import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container">

        <div className="footer__content">

          {/* Brand Section */}
          <div className="footer__brand">
            <p className="footer__tagline">
              Making Childhood Magical, One Toy at a Time
            </p>

            <p className="footer__description">
              Welcome to ToyStore — your ultimate destination for premium,
              safe, and educational toys that spark imagination and create
              lasting memories. From classic wooden blocks to high-tech
              interactive gadgets, we curate the finest toys for children
              of all ages.
            </p>

            <div className="footer__socials">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Facebook"
              >
                <img src={assets.facebook_icon} alt="" />
              </a>

              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Twitter"
              >
                <img src={assets.twitter_icon} alt="" />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                <img src={assets.linkedin_icon} alt="" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <img src={assets.instagram_icon} alt="" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__column">
            <h2 className="footer__heading">Quick Links</h2>

            <ul className="footer__links">
              <li>
                <a href="/" className="footer__link">Home</a>
              </li>
              <li>
                <a href="/about" className="footer__link">About Us</a>
              </li>
              <li>
                <a href="/delivery" className="footer__link">Delivery Info</a>
              </li>
              <li>
                <a href="/privacy" className="footer__link">Privacy Policy</a>
              </li>
              <li>
                <a href="/gift-cards" className="footer__link">Gift Cards</a>
              </li>
              <li>
                <a href="/blog" className="footer__link">Blog</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer__column">
            <h2 className="footer__heading">Get In Touch</h2>

            <ul className="footer__links">
              <li className="footer__contact-item">
                +1 (800) 123-4567
              </li>

              <li className="footer__contact-item">
                hello@toystore.com
              </li>

              <li className="footer__contact-item">
                123 Toy Street, NYC 10001
              </li>

              <li className="footer__contact-item">
                Mon-Sat: 9AM - 8PM
              </li>
            </ul>
          </div>

        </div>

        <hr className="footer__divider" />

        <p className="footer__copyright">
          Copyright {new Date().getFullYear()} © ToyStore.com - Where Dreams Come to Play
        </p>

      </div>
    </footer>
  );
};

export default Footer;
