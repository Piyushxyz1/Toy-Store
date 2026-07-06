// src/components/Blog.jsx
import React from 'react'
import { Link } from 'react-router-dom'  // Add this import
import "./blog.css"

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Top 10 Educational Toys for 2024",
      excerpt: "Discover the best toys that make learning fun for kids of all ages.",
      date: "Dec 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "How to Choose Safe Toys for Your Child",
      excerpt: "Essential safety tips every parent should know before buying toys.",
      date: "Dec 12, 2024",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Creative Play Ideas for Rainy Days",
      excerpt: "Keep your kids entertained with these indoor toy activities.",
      date: "Dec 10, 2024",
      readTime: "6 min read"
    }
  ]

  return (
    <div className='blog' id='blog'>
      <div className="blog-header">
        <span className="blog-badge">Toy Blog</span>
        <h2>Stories & Inspiration</h2>
        <p>Parenting tips, toy guides, and fun activities</p>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              {/* Change button to Link */}
              <Link to={`/blog/${post.id}`} className="blog-btn">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="blog-cta">
        <Link to="/blog" className="blog-view-all">View All Articles</Link>
      </div> */}
    </div>
  )
}

export default Blog