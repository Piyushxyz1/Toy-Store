import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
  Star,
  Gamepad2,
  Puzzle,
  Gift,
  Heart,
} from "lucide-react";
import "./Welcome.css";

const Welcome = ({ setShowLogin }) => {
  const openLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className="welcome-page">


      {/* ================= HERO ================= */}
      <main className="welcome-hero">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-badge">
            <span className="badge-dot"></span>

            <Sparkles size={15} />

            <span>
              A LITTLE WORLD OF BIG IMAGINATION
            </span>
          </div>


          <h1>
            Toys that make
            <br />

            <span>playtime</span>

            <br />

            unforgettable.
          </h1>


          <p className="hero-description">
            Discover toys made for curious minds, creative hands
            and endless adventures. From classic favorites to
            exciting new finds — there is always something fun
            waiting for you.
          </p>


          {/* CTA BUTTONS */}
          <div className="hero-buttons">

            <button
              className="hero-primary-btn"
              onClick={openLogin}
            >
              Explore Toys

              <ArrowRight size={19} />
            </button>

          </div>


          {/* TRUST */}
          <div className="hero-trust">

            <div className="trust-item">

              <div className="trust-icon">
                <ShieldCheck size={19} />
              </div>

              <div>
                <strong>Safe Shopping</strong>
                <span>Secure experience</span>
              </div>

            </div>


            <div className="trust-item">

              <div className="trust-icon">
                <Truck size={19} />
              </div>

              <div>
                <strong>Fast Delivery</strong>
                <span>Delivered with care</span>
              </div>

            </div>


            <div className="trust-item">

              <div className="trust-icon">
                <Star size={19} />
              </div>

              <div>
                <strong>Quality Toys</strong>
                <span>Made for happy play</span>
              </div>

            </div>

          </div>

        </div>


        {/* ================= HERO VISUAL ================= */}
        <div className="hero-visual">

          <div className="visual-background-circle"></div>

          <div className="visual-small-circle"></div>


          {/* MAIN TOY IMAGE */}
          <div className="hero-image-wrapper">

            <img
              src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=90"
              alt="Colorful toys collection"
              className="hero-image"
            />

            <div className="image-overlay"></div>

          </div>


          {/* TOP FLOATING CARD */}
          <div className="floating-card floating-card-top">

            <div className="floating-card-icon">
              <Gift size={19} />
            </div>

            <div>
              <strong>Something for Everyone</strong>

              <span>
                Toys for every little explorer
              </span>
            </div>

          </div>


          {/* BOTTOM FLOATING CARD */}
          <div className="floating-card floating-card-bottom">

            <div className="toy-icons">

              <span>🧸</span>
              <span>🚗</span>
              <span>🧩</span>

            </div>

            <div>
              <strong>100+ Toys</strong>

              <span>
                Ready for adventure
              </span>
            </div>

          </div>


          {/* SMALL HEART */}
          <div className="floating-heart">
            <Heart size={17} fill="currentColor" />
          </div>


          {/* SMALL PUZZLE */}
          <div className="floating-puzzle">
            <Puzzle size={21} />
          </div>

        </div>

      </main>


      {/* ================= CATEGORY STRIP ================= */}
      <section className="toy-categories">

        <div className="category-title">

          <span>DISCOVER</span>

          <h2>
            Find their next favorite toy.
          </h2>

        </div>


        <div className="category-list">

          <div className="category-card">

            <div className="category-emoji">
              🧸
            </div>

            <div>
              <strong>Plush Toys</strong>
              <span>Soft & cuddly</span>
            </div>

          </div>


          <div className="category-card">

            <div className="category-emoji">
              🚗
            </div>

            <div>
              <strong>Vehicles</strong>
              <span>Ready to race</span>
            </div>

          </div>


          <div className="category-card">

            <div className="category-emoji">
              🧩
            </div>

            <div>
              <strong>Puzzles</strong>
              <span>Think & play</span>
            </div>

          </div>


          <div className="category-card">

            <div className="category-emoji">
              🎨
            </div>

            <div>
              <strong>Creative Play</strong>
              <span>Make something fun</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section className="welcome-features">

        <div className="feature-heading">

          <span>
            WHY TOYVERSE
          </span>

          <h2>
            More than just toys.
          </h2>

          <p>
            A better way to discover toys that turn ordinary
            moments into memorable adventures.
          </p>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-top">

              <div className="feature-icon">
                <Sparkles size={20} />
              </div>

              <span className="feature-number">
                01
              </span>

            </div>

            <h3>
              Curated Collection
            </h3>

            <p>
              Discover exciting toys selected for creativity,
              learning and endless fun.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-top">

              <div className="feature-icon">
                <Puzzle size={20} />
              </div>

              <span className="feature-number">
                02
              </span>

            </div>

            <h3>
              Play & Discover
            </h3>

            <p>
              From puzzles and vehicles to plush toys and
              creative play, there is always something new.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-top">

              <div className="feature-icon">
                <Heart size={20} />
              </div>

              <span className="feature-number">
                03
              </span>

            </div>

            <h3>
              Made for Happy Moments
            </h3>

            <p>
              Simple shopping, quality products and toys
              chosen to bring more joy to playtime.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="welcome-final-cta">

        <div className="cta-decoration cta-ball-one"></div>
        <div className="cta-decoration cta-ball-two"></div>

        <div className="cta-content">

          <div className="cta-icon">
            <Gamepad2 size={25} />
          </div>

          <span>
            READY, SET, PLAY!
          </span>

          <h2>
            Their next adventure
            <br />
            starts here.
          </h2>

          <button
            onClick={openLogin}
            className="cta-button"
          >
            Explore ToyVerse
            <ArrowRight size={18} />
          </button>

        </div>

      </section>

    </div>
  );
};

export default Welcome;