// src/components/BlogDetail.jsx

import React, { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import "./blogdetail.css";

import { posts } from "../../components/blog/blogassets/blogassets";

const getInitials = (name = "") => {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

const BlogDetail = () => {
  const { id } = useParams();
  const [progress, setProgress] = useState(0);

  const post = posts.find((item) => item.id === Number(id));

  /* =========================================================
     READING PROGRESS
  ========================================================= */

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      const percentage = (scrollTop / documentHeight) * 100;

      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    window.addEventListener("scroll", updateProgress, { passive: true });

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  /* =========================================================
     ARTICLE SECTIONS
  ========================================================= */

  const sections = useMemo(() => {
    if (!post?.fullContent) return [];

    const matches = [
      ...post.fullContent.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi),
    ];

    return matches.map((match, index) => ({
      id: `article-section-${index + 1}`,
      title: match[1].replace(/<[^>]*>/g, ""),
    }));
  }, [post]);

  /* =========================================================
     ADD IDS TO H2 HEADINGS
  ========================================================= */

  const formattedContent = useMemo(() => {
    if (!post?.fullContent) return "";

    let sectionIndex = 0;

    return post.fullContent.replace(
      /<h2([^>]*)>/gi,
      (match, attributes) => {
        sectionIndex += 1;

        return `<h2 id="article-section-${sectionIndex}" ${attributes}>`;
      }
    );
  }, [post]);

  /* =========================================================
     RELATED POSTS
  ========================================================= */

  const relatedPosts = useMemo(() => {
    if (!post) return [];

    const sameCategory = posts.filter(
      (item) =>
        item.id !== post.id && item.category === post.category
    );

    const otherPosts = posts.filter(
      (item) =>
        item.id !== post.id && item.category !== post.category
    );

    return [...sameCategory, ...otherPosts].slice(0, 3);
  }, [post]);

  /* =========================================================
     SHARE
  ========================================================= */

  const handleShare = async () => {
    const shareData = {
      title: post?.title,
      text: post?.excerpt,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Article link copied!");
      }
    } catch (error) {
      console.log("Share cancelled");
    }
  };

  /* =========================================================
     COPY LINK
  ========================================================= */

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Article link copied!");
    } catch (error) {
      console.log("Unable to copy link");
    }
  };

  /* =========================================================
     INVALID POST
  ========================================================= */

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const initials = getInitials(post.author);

  return (
    <main className="blog-detail-page">

      {/* =====================================================
          READING PROGRESS
      ===================================================== */}

      <div className="reading-progress">
        <span style={{ width: `${progress}%` }} />
      </div>

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <header className="article-topbar">

        <div className="article-topbar-inner">

          <Link to="/" className="article-back">
            <span className="back-arrow">←</span>
            <span>Back to stories</span>
          </Link>

          <Link to="/" className="article-logo">
            TOY<span>VERSE</span>
          </Link>

          <div className="article-topbar-right">
            <span className="topbar-reading">
              {post.readTime}
            </span>

            <button
              className="topbar-share"
              onClick={handleShare}
              aria-label="Share article"
            >
              Share ↗
            </button>
          </div>

        </div>

      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="article-hero">

        <div className="hero-background-shape shape-one" />
        <div className="hero-background-shape shape-two" />

        <div className="article-hero-inner">

          {/* HERO CONTENT */}

          <div className="article-hero-content">

            <div className="article-category-row">

              <span className="article-category">
                {post.category}
              </span>

              <span className="category-line" />

              <span className="category-label">
                FEATURED STORY
              </span>

            </div>

            <h1 className="article-title">
              {post.title}
            </h1>

            <p className="article-excerpt">
              {post.excerpt}
            </p>

            {/* AUTHOR */}

            <div className="article-info">

              <div className="article-author">

                {post.authorImage ? (
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="author-avatar"
                  />
                ) : (
                  <div className="author-avatar author-initials">
                    {initials}
                  </div>
                )}

                <div className="author-details">
                  <span className="author-name">
                    {post.author}
                  </span>

                  <span className="author-role">
                    Toyverse Editorial
                  </span>
                </div>

              </div>

              <div className="info-divider" />

              <div className="article-date">
                <span className="info-label">
                  PUBLISHED
                </span>

                <span className="info-value">
                  {post.date}
                </span>
              </div>

              <div className="info-divider" />

              <div className="article-time">
                <span className="info-label">
                  READING TIME
                </span>

                <span className="info-value">
                  {post.readTime}
                </span>
              </div>

            </div>

          </div>

          {/* HERO IMAGE */}

          <div className="article-hero-image-wrap">

            <div className="hero-image-shadow" />

            <div className="article-hero-image">

              <img
                src={post.image}
                alt={post.title}
              />

              <div className="hero-image-overlay" />

              <div className="hero-image-label">
                <span>01</span>
                <span>STORY</span>
              </div>

            </div>

            <div className="hero-floating-card">

              <span className="floating-dot" />

              <div>
                <small>EDITOR'S NOTE</small>
                <strong>Worth the read</strong>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ARTICLE AREA
      ===================================================== */}

      <section className="article-main">

        <div className="article-main-grid">

          {/* =================================================
              LEFT SHARE RAIL
          ================================================= */}

          <aside className="article-share-rail">

            <span className="share-rail-label">
              SHARE
            </span>

            <button
              className="share-rail-button"
              onClick={handleShare}
              aria-label="Share article"
            >
              ↗
            </button>

            <button
              className="share-rail-button"
              onClick={handleCopyLink}
              aria-label="Copy article link"
            >
              ⛓
            </button>

          </aside>

          {/* =================================================
              ARTICLE CONTENT
          ================================================= */}

          <article className="article-content">

            <div
              className="article-rich-content"
              dangerouslySetInnerHTML={{
                __html: formattedContent,
              }}
            />

            {/* =================================================
                AUTHOR CARD
            ================================================= */}

            <div className="article-author-card">

              <div className="author-card-image">

                {post.authorImage ? (
                  <img
                    src={post.authorImage}
                    alt={post.author}
                  />
                ) : (
                  <span>{initials}</span>
                )}

              </div>

              <div className="author-card-content">

                <span className="author-card-label">
                  WRITTEN BY
                </span>

                <h3>{post.author}</h3>

                <p>
                  Exploring better ways to play, learn and
                  grow through thoughtful ideas, practical
                  guidance and everyday discoveries.
                </p>

              </div>

              <div className="author-card-mark">
                ✦
              </div>

            </div>

          </article>

          {/* =================================================
              RIGHT SIDEBAR
          ================================================= */}

          <aside className="article-sidebar">

            {/* TABLE OF CONTENTS */}

            {sections.length > 0 && (
              <div className="article-outline">

                <span className="sidebar-label">
                  IN THIS STORY
                </span>

                <div className="outline-list">

                  {sections.map((section, index) => (
                    <a
                      href={`#${section.id}`}
                      className="outline-item"
                      key={section.id}
                    >
                      <span className="outline-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="outline-title">
                        {section.title}
                      </span>
                    </a>
                  ))}

                </div>

              </div>
            )}

            {/* READING CARD */}

            <div className="reading-card">

              <div className="reading-card-icon">
                ◷
              </div>

              <span className="sidebar-label">
                TAKE YOUR TIME
              </span>

              <h3>
                A few minutes well spent.
              </h3>

              <p>
                Slow down, explore the ideas and come
                back whenever you need a fresh perspective.
              </p>

              <div className="reading-card-line" />

              <span className="reading-card-time">
                {post.readTime} read
              </span>

            </div>

          </aside>

        </div>

      </section>

      {/* =====================================================
          RELATED STORIES
      ===================================================== */}

      {relatedPosts.length > 0 && (
        <section className="related-section">

          <div className="related-inner">

            <div className="related-heading">

              <div>
                <span className="related-eyebrow">
                  KEEP EXPLORING
                </span>

                <h2>
                  More stories
                </h2>
              </div>

              <Link
                to="/"
                className="all-stories-link"
              >
                View all stories →
              </Link>

            </div>

            <div className="related-grid">

              {relatedPosts.map((relatedPost) => (

                <Link
                  to={`/blogs/${relatedPost.id}`}
                  className="related-card"
                  key={relatedPost.id}
                >

                  <div className="related-image">

                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      loading="lazy"
                    />

                    <span className="related-category">
                      {relatedPost.category}
                    </span>

                  </div>

                  <div className="related-content">

                    <div className="related-meta">
                      <span>{relatedPost.date}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>

                    <h3>
                      {relatedPost.title}
                    </h3>

                    <span className="related-read">
                      Read story →
                    </span>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          FOOTER CTA
      ===================================================== */}

      <section className="article-end-section">

        <div className="article-end-card">

          <div className="end-card-decoration decoration-one" />
          <div className="end-card-decoration decoration-two" />

          <span className="end-eyebrow">
            THAT'S A WRAP
          </span>

          <h2>
            Curious minds
            <br />
            always have more
            <br />
            to discover.
          </h2>

          <p>
            Explore more stories, ideas and practical
            guides from our journal.
          </p>

          <Link
            to="/"
            className="end-button"
          >
            Explore all stories
            <span>↗</span>
          </Link>

        </div>

      </section>

    </main>
  );
};

export default BlogDetail;