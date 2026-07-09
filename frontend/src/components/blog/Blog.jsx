// src/components/Blog.jsx (Homepage Preview)
import React from 'react';
import { Link } from 'react-router-dom';
import "./blog.css";
import { posts } from './blogassets/blogassets';


const Blog = () => {
 

  return (
    <div className='blog-preview' id='blog'>
      <div className="blog-header">
        <span className="blog-badge">Toy Blog</span>
        <h2>Stories & Inspiration</h2>
        <p>Parenting tips, toy guides, and fun activities</p>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-card-image">
              <img src={post.image} alt={post.title} />
              <span className="blog-card-category">{post.category}</span>
            </div>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <Link to={`/blogs/${post.id}`} className="blog-btn">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="blog-cta">
        <Link to="/blogs" className="blog-view-all">View All Articles →</Link>
      </div>
    </div>
  );
};

export default Blog;