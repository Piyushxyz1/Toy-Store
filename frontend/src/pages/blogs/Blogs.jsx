// src/pages/Blogs.jsx (Full Blog Page)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';
import { allBlogs } from '../../components/blog/blogassets/blogassets';

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleBlogs, setVisibleBlogs] = useState(9);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Full blog data with more posts
 
  // Get unique categories
  const categories = ['all', ...new Set(allBlogs.map(blog => blog.category.toLowerCase()))];

  // Filter blogs
  const filteredBlogs = allBlogs.filter(blog => {
    const matchesCategory = activeCategory === 'all' || 
      blog.category.toLowerCase() === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredBlogs = allBlogs.filter(blog => blog.featured);
  const visibleBlogsList = filteredBlogs.slice(0, visibleBlogs);
  const hasMore = filteredBlogs.length > visibleBlogs;

  const loadMore = () => {
    setVisibleBlogs(prev => prev + 6);
  };

  return (
    <div className="blog-page">
      {/* Header with Back Button */}
      <div className="blog-page-header">
        <Link to="/" className="back-home-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Home
        </Link>
        <h1>Our Blog</h1>
        <p>Insights, reviews, and stories about the world of toys</p>
      </div>

      {/* Search and Filter */}
      <div className="blog-controls">
        <div className="search-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input 
            type="text" 
            placeholder="Search articles..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="category-filters">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`cat-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(category);
                setVisibleBlogs(9);
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      {featuredBlogs.length > 0 && searchTerm === '' && (
        <section className="blog-featured">
          <h2>Featured Articles</h2>
          <div className="featured-grid">
            {featuredBlogs.slice(0, 2).map(blog => (
              <div key={blog.id} className="featured-card" onClick={() => setSelectedBlog(blog)}>
                <img src={blog.image} alt={blog.title} />
                <div className="featured-content">
                  <span className="featured-category">{blog.category}</span>
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  <div className="featured-author">
                    <img src={blog.authorImage} alt={blog.author} />
                    <span>{blog.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <div className="blog-grid-full">
        {visibleBlogsList.length > 0 ? (
          visibleBlogsList.map(blog => (
            <div key={blog.id} className="blog-card-full" onClick={() => setSelectedBlog(blog)}>
              <div className="blog-card-image-full">
                <img src={blog.image} alt={blog.title} />
                <span className="blog-category-tag">{blog.category}</span>
              </div>
              <div className="blog-card-content-full">
                <div className="blog-meta-full">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <div className="blog-card-footer-full">
                  <div className="blog-author-full">
                    <img src={blog.authorImage} alt={blog.author} />
                    <span>{blog.author}</span>
                  </div>
                  <div className="blog-tags-full">
                    {blog.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="blog-tag-full">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results-full">
            <h3>No articles found</h3>
            <p>Try adjusting your search or filter</p>
          </div>
        )}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="load-more-full">
          <button onClick={loadMore}>
            Load More Articles
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <span>Showing {visibleBlogsList.length} of {filteredBlogs.length}</span>
        </div>
      )}

      {/* Modal */}
      {selectedBlog && (
        <div className="blog-modal-full" onClick={() => setSelectedBlog(null)}>
          <div className="blog-modal-content-full" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-full" onClick={() => setSelectedBlog(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="modal-image-full">
              <img src={selectedBlog.image} alt={selectedBlog.title} />
            </div>
            <div className="modal-body-full">
              <div className="modal-meta-full">
                <span className="modal-category-full">{selectedBlog.category}</span>
                <span>{selectedBlog.date}</span>
                <span>{selectedBlog.readTime}</span>
              </div>
              <h2>{selectedBlog.title}</h2>
              <p className="modal-excerpt-full">{selectedBlog.excerpt}</p>
              <div className="modal-author-full">
                <img src={selectedBlog.authorImage} alt={selectedBlog.author} />
                <div>
                  <span className="modal-author-name-full">{selectedBlog.author}</span>
                  <span className="modal-author-role-full">Toy Expert</span>
                </div>
              </div>
              <div className="modal-tags-full">
                {selectedBlog.tags.map((tag, i) => (
                  <span key={i} className="modal-tag-full">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;