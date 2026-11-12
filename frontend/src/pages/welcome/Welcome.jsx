
import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import "./welcome.css";

const categories = [
  {
    number: "01",
    title: "Plush & Cuddly",
    description: "Soft companions for little adventures.",
    image:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=1000&q=85",
    className: "category-large",
  },
  {
    number: "02",
    title: "Creative Play",
    description: "Big ideas begin with little hands.",
    image:
      "https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&w=900&q=85",
    className: "",
  },
  {
    number: "03",
    title: "Games & Puzzles",
    description: "A little challenge. A lot of fun.",
    image:
      "https://images.unsplash.com/photo-1606503153255-59d8b8b8219b?auto=format&fit=crop&w=900&q=85",
    className: "",
  },
];

const features = [
  {
    number: "01",
    title: "Curiosity comes first.",
    description:
      "Discover toys that encourage little minds to explore, imagine, experiment and learn something new with every play session.",
  },
  {
    number: "02",
    title: "A world of possibilities.",
    description:
      "From timeless favourites to exciting discoveries, find something for every personality, interest and kind of adventure.",
  },
  {
    number: "03",
    title: "More joy in every moment.",
    description:
      "Because the best toys don't just keep little hands busy. They create stories, memories and moments worth remembering.",
  },
];

const Welcome = ({ setShowLogin }) => {
  const openLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className="welcome-page">

      {/* HERO */}
      <main className="welcome-hero">

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-line" />
            A WORLD MADE FOR WONDER
          </div>

          <h1 className="hero-title">
            Little things.
            <br />
            <span>Big</span> adventures.
          </h1>

          <p className="hero-description">
            A little imagination can take you anywhere. Explore a world
            of playful discoveries, creative ideas and toys that make
            every moment a little more magical.
          </p>

          <div className="hero-actions">
            <button className="hero-primary-btn" onClick={openLogin}>
              Explore the collection
              <ArrowUpRight size={18} />
            </button>

            <a href="#discover" className="hero-secondary-link">
              Discover our world
              <span>↓</span>
            </a>
          </div>

          <div className="hero-bottom-note">
            <span className="note-dot" />
            MADE FOR CURIOUS MINDS & HAPPY HEARTS
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-main">
            <img
              src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1500&q=90"
              alt="Colourful toys and playful discoveries"
            />
          </div>

          <div className="hero-image-accent">
            <img
              src="https://images.unsplash.com/photo-1560961911-ba7ef651a56c?auto=format&fit=crop&w=600&q=85"
              alt="Colourful playful details"
            />
          </div>

          <div className="hero-image-caption">
            <span>THE ART OF PLAY</span>
            <span>01 — 03</span>
          </div>

          <div className="hero-orbit">
            <span>IMAGINE · CREATE · DISCOVER · PLAY ·</span>
          </div>

          <div className="hero-sticker">
            <span>LET</span>
            <strong>JOY</strong>
            <span>LEAD THE WAY</span>
          </div>
        </div>

      </main>

      {/* INTRODUCTION */}
      <section className="welcome-intro" id="discover">
        <div className="intro-label">
          <span>01 / THE WORLD OF TOYVERSE</span>
        </div>

        <div className="intro-content">
          <h2>
            Childhood isn't
            <br />
            meant to be <span>ordinary.</span>
          </h2>

          <div className="intro-copy">
            <p>
              It's about building impossible castles, creating stories
              from nothing and turning an ordinary afternoon into
              something extraordinary.
            </p>

            <p>
              At ToyVerse, we bring together playful discoveries that
              inspire imagination, encourage creativity and make room
              for endless possibilities.
            </p>

            <button onClick={openLogin} className="text-link">
              FIND SOMETHING WONDERFUL
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORY SHOWCASE */}
      <section className="welcome-categories">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">02 / EXPLORE THE POSSIBILITIES</span>
            <h2>
              A little world
              <br />
              of <span>everything.</span>
            </h2>
          </div>

          <p>
            Every child has their own kind of magic.
            Find the little things that make their world
            even more wonderful.
          </p>
        </div>

        <div className="category-showcase">
          {categories.map((item) => (
            <article
              className={`category-editorial ${item.className}`}
              key={item.number}
            >
              <div className="category-image">
                <img src={item.image} alt={item.title} />
                <span className="category-number">{item.number}</span>
                <button
                  className="category-arrow"
                  onClick={openLogin}
                  aria-label={`Explore ${item.title}`}
                >
                  <ArrowUpRight size={21} />
                </button>
              </div>

              <div className="category-info">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="category-index">{item.number} / 03</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="welcome-statement">
        <div className="statement-decoration statement-decoration-one" />
        <div className="statement-decoration statement-decoration-two" />

        <div className="statement-inner">
          <span className="section-eyebrow">A NOTE ABOUT PLAY</span>

          <h2>
            The best adventures
            <br />
            <span>begin with imagination.</span>
          </h2>

          <p>
            Not every great adventure needs a destination.
            Sometimes, all it takes is a little curiosity
            and something wonderful to play with.
          </p>

          <span className="statement-signature">The ToyVerse spirit.</span>
        </div>
      </section>

      {/* WHY TOYVERSE */}
      <section className="welcome-features">
        <div className="features-heading">
          <div>
            <span className="section-eyebrow">03 / WHY TOYVERSE</span>
            <h2>
              More than toys.
              <br />
              <span>Moments that matter.</span>
            </h2>
          </div>

          <p>
            We believe play is one of life's most beautiful
            ways to learn, connect and see the world differently.
          </p>
        </div>

        <div className="feature-list">
          {features.map((feature) => (
            <article className="feature-row" key={feature.number}>
              <span className="feature-number">{feature.number}</span>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <span className="feature-symbol">↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="welcome-final-cta">
        <div className="cta-orb cta-orb-one" />
        <div className="cta-orb cta-orb-two" />

        <div className="cta-inner">
          <span className="section-eyebrow">YOUR NEXT ADVENTURE AWAITS</span>

          <h2>
            Let the fun
            <br />
            <span>begin.</span>
          </h2>

          <p>
            Discover something new. Create something wonderful.
            Make every little moment count.
          </p>

          <button onClick={openLogin} className="cta-button">
            Explore ToyVerse
            <ArrowRight size={19} />
          </button>

          <span className="cta-bottom-text">
            A LITTLE MORE WONDER. A LOT MORE PLAY.
          </span>
        </div>
      </section>

    </div>
  );
};

export default Welcome;
