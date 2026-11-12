import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./blogs.css";

import { posts } from "../../../components/blog/blogassets/blogassets";

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  /* =========================================================
     CATEGORIES
  ========================================================= */

  const categories = [
    "All",
    ...new Set(posts.map((post) => post.category)),
  ];

  /* =========================================================
     FEATURED POST
  ========================================================= */

  const featuredPost =
    posts.find((post) => post.featured) || posts[0];

  /* =========================================================
     FILTER POSTS
  ========================================================= */

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" ||
        post.category === activeCategory;

      const searchText = search.toLowerCase();

      const matchesSearch =
        post.title.toLowerCase().includes(searchText) ||
        post.excerpt.toLowerCase().includes(searchText) ||
        post.category.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  /* =========================================================
     REMOVE FEATURED FROM GRID
  ========================================================= */

  const normalPosts = filteredPosts.filter(
    (post) => post.id !== featuredPost?.id
  );

  return (
    <main className="blogs-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="blogs-hero">

        <div className="blogs-hero-shape hero-shape-one" />
        <div className="blogs-hero-shape hero-shape-two" />

        <div className="blogs-hero-inner">

          <div className="blogs-hero-copy">

            <span className="blogs-eyebrow">
              THE TOYSTORE JOURNAL
            </span>

            <h1>
              Ideas worth
              <br />
              <em>playing with.</em>
            </h1>

            <p>
              Thoughtful guides, playful ideas and useful
              stories to help children learn, explore and
              make the most of every moment.
            </p>

          </div>

          <div className="blogs-hero-side">

            <div className="hero-number">
              <span>{String(posts.length).padStart(2, "0")}</span>
              <small>STORIES</small>
            </div>

            <div className="hero-line" />

            <span className="hero-scroll">
              SCROLL TO EXPLORE ↓
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED ARTICLE
      ===================================================== */}

      {featuredPost && (
        <section className="featured-section">

          <div className="featured-inner">

            <div className="section-top">

              <div>
                <span className="section-eyebrow">
                  EDITOR'S PICK
                </span>

                <h2>
                  Featured story
                </h2>
              </div>

              <span className="section-number">
                01 / 01
              </span>

            </div>


            <Link
              to={`/blogs/${featuredPost.id}`}
              className="featured-card"
            >

              <div className="featured-image">

                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                />

                <div className="featured-image-overlay" />

                <span className="featured-badge">
                  FEATURED
                </span>

                <span className="featured-arrow">
                  ↗
                </span>

              </div>


              <div className="featured-content">

                <div className="featured-meta">

                  <span>
                    {featuredPost.category}
                  </span>

                  <span>•</span>

                  <span>
                    {featuredPost.date}
                  </span>

                  <span>•</span>

                  <span>
                    {featuredPost.readTime}
                  </span>

                </div>

                <h3>
                  {featuredPost.title}
                </h3>

                <p>
                  {featuredPost.excerpt}
                </p>

                <div className="featured-author">

                  <div className="featured-author-avatar">

                    {featuredPost.authorImage ? (
                      <img
                        src={featuredPost.authorImage}
                        alt={featuredPost.author}
                      />
                    ) : (
                      featuredPost.author?.charAt(0)
                    )}

                  </div>

                  <span>
                    By {featuredPost.author}
                  </span>

                </div>

              </div>

            </Link>

          </div>

        </section>
      )}


      {/* =====================================================
          ALL STORIES
      ===================================================== */}

      <section
        className="all-blogs-section"
        id="blog"
      >

        <div className="all-blogs-inner">

          <div className="blogs-heading">

            <div>

              <span className="section-eyebrow">
                FROM THE JOURNAL
              </span>

              <h2>
                Latest stories
              </h2>

            </div>

            <p>
              Discover ideas, tips and inspiration
              for curious little minds.
            </p>

          </div>


          {/* =================================================
              FILTER + SEARCH
          ================================================= */}

          <div className="blogs-controls">

            <div className="category-filter">

              {categories.map((category) => (

                <button
                  key={category}
                  className={
                    activeCategory === category
                      ? "category-filter-btn active"
                      : "category-filter-btn"
                  }
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>

              ))}

            </div>


            <div className="blog-search">

              <span>⌕</span>

              <input
                type="text"
                placeholder="Search stories..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>

          </div>


          {/* =================================================
              BLOG GRID
          ================================================= */}

          {normalPosts.length > 0 ? (

            <div className="blogs-grid">

              {normalPosts.map((post, index) => (

                <Link
                  to={`/blogs/${post.id}`}
                  className="blog-card"
                  key={post.id}
                >

                  {/* IMAGE */}

                  <div className="blog-card-image">

                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                    />

                    <span className="blog-card-category">
                      {post.category}
                    </span>

                    <span className="blog-card-arrow">
                      ↗
                    </span>

                  </div>


                  {/* CONTENT */}

                  <div className="blog-card-content">

                    <div className="blog-card-meta">

                      <span>
                        {String(index + 2).padStart(2, "0")}
                      </span>

                      <span className="meta-line" />

                      <span>
                        {post.date}
                      </span>

                      <span>•</span>

                      <span>
                        {post.readTime}
                      </span>

                    </div>

                    <h3>
                      {post.title}
                    </h3>

                    <p>
                      {post.excerpt}
                    </p>


                    <div className="blog-card-footer">

                      <span>
                        Read story
                      </span>

                      <span className="read-arrow">
                        →
                      </span>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          ) : (

            <div className="no-results">

              <span>○</span>

              <h3>
                No stories found
              </h3>

              <p>
                Try another keyword or choose a
                different category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Reset filters
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          NEWSLETTER / CTA
      ===================================================== */}

      <section className="blogs-cta">

        <div className="blogs-cta-inner">

          <div className="cta-decoration cta-circle-one" />
          <div className="cta-decoration cta-circle-two" />

          <span className="cta-eyebrow">
            STAY CURIOUS
          </span>

          <h2>
            There is always
            <br />
            something new
            <br />
            to discover.
          </h2>

          <p>
            Keep exploring our journal for fresh ideas,
            practical tips and stories made for curious
            families.
          </p>

          <Link
            to="/"
            className="cta-button"
          >
            Back to ToyStore
            <span>↗</span>
          </Link>

        </div>

      </section>

    </main>
  );
};

export default Blogs;