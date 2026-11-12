
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <section className="header">
      {/* Background overlays */}
      <div className="header__overlay" />
      <div className="header__glow" />

      {/* Hero content */}
      <div className="header-contents">

        <div className="header-badge">
          <svg
            viewBox="0 0 24 24"
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>

          <span>Curated for Little Dreamers</span>
        </div>

        <h1>
          Let their
          <br />
          imagination
          <br />
          <span className="gradient-text">run wild.</span>
        </h1>

        <p className="header-description">
          Discover thoughtfully selected toys that inspire creativity,
          spark curiosity, and turn everyday moments into magical memories.
        </p>

        <div className="header-actions">
          <Link to="/menu" className="header-cta">
            <span>Explore Collection</span>
            <svg
              viewBox="0 0 24 24"
              width="19"
              height="19"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <span className="header-note">
            A little joy in every box.
          </span>
        </div>

        {/* Store highlights */}
        <div className="header-stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Happy Kids</span>
          </div>

          <div className="stat-divider" />

          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Toy Varieties</span>
          </div>

          <div className="stat-divider" />

          <div className="stat-item">
            <span className="stat-number">4.9/5</span>
            <span className="stat-label">Customer Rating</span>
          </div>
        </div>
      </div>

      {/* Decorative side label */}
      <div className="header-side-label">
        PLAY · DISCOVER · IMAGINE
      </div>

      {/* Scroll indicator */}
      <div className="header-scroll">
        <span className="scroll-line" />
        <span>SCROLL TO EXPLORE</span>
      </div>

      {/* Decorative accent */}
      <div className="header-decoration" aria-hidden="true">
        <span>✳</span>
      </div>
    </section>
  );
};

export default Header;
