
import React from "react";
import { Link } from "react-router-dom";
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
              Welcome to ToyVerse — a thoughtfully curated world of toys
              designed to inspire imagination, encourage discovery, and
              make every childhood moment memorable. From timeless classics
              to creative play essentials, find something special for every
              little dreamer.
            </p>

            <div className="footer__socials">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
                <img src={assets.facebook_icon} alt="" />
              </a>

              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Twitter">
                <img src={assets.twitter_icon} alt="" />
              </a>

              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
                <img src={assets.linkedin_icon} alt="" />
              </a>

              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                <img src={assets.instagram_icon} alt="" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__column">
            <h2 className="footer__heading">Explore ToyVerse</h2>

            <ul className="footer__links">
              <li><Link to="/" className="footer__link">Home</Link></li>
              <li><Link to="/about" className="footer__link">About Us</Link></li>
              <li><Link to="/menu" className="footer__link">Shop All Toys</Link></li>
              <li><Link to="/blogs" className="footer__link">Blogs</Link></li>
              <li><Link to="/contact" className="footer__link">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer__column">
            <h2 className="footer__heading">Get In Touch</h2>

            <ul className="footer__links">
              <li className="footer__contact-item">
                hello@toyverse.com
              </li>
              <li className="footer__contact-item">
                Have a question? We'd love to hear from you.
              </li>
            </ul>
          </div>

        </div>

        <hr className="footer__divider" />

        <p className="footer__copyright">
          Copyright © {new Date().getFullYear()} ToyVerse. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
