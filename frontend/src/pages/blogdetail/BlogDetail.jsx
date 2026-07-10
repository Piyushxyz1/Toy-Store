// src/components/BlogDetail.jsx
import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import "./Blogdetail.css";
import { posts } from '../../components/blog/blogassets/blogassets';

const BlogDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Find the post with matching ID
  const post = posts.find(p => p.id === parseInt(id))

  // If post not found, redirect to blog
  if (!post) {
    navigate('/')
    return null
  }

  return (
    <div className='blog-detail-page'>
      <div className="blog-detail-container">
        <Link to="/" className="back-to-blog">← Back to Home</Link>
        
        <div className="blog-detail-header">
          <span className="detail-category">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="detail-meta">
            <span> {post.author}</span>
            <span>•</span>
            <span> {post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <div className="detail-emoji-large">{post.emoji}</div>
        </div>

        <div className="blog-detail-body">
          <div dangerouslySetInnerHTML={{ __html: post.fullContent }} />
        </div>

        <div className="blog-detail-footer">
          <Link to="/" className="back-to-blog">← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail