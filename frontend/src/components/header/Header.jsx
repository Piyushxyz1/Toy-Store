import React, { useState, useEffect, useRef } from 'react'
import "./header.css"
import { assets } from '../../assets/assets'

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const headerElement = document.querySelector('.header')
      if (headerElement) {
        const rect = headerElement.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0
        setIsVisible(isInView)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])



  return (
    <div 
      className={`header ${isVisible ? 'header-visible' : ''}`}
      ref={headerRef}
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`
      }}
    > 
      {/* AMAZING OVERLAYS */}
      <div className="header-overlay-main"></div>
      <div className="header-overlay-gradient"></div>
      <div className="header-spotlight" style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,107,107,0.3), transparent 60%)`
      }}></div>
      
      {/* FLOATING PARTICLES */}
      <div className="header-particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className={`particle particle-${i}`}></div>
        ))}
      </div>
      
      {/* ANIMATED LINES */}
      <div className="header-lines">
        <div className="line-horizontal"></div>
        <div className="line-vertical"></div>
      </div>
      
      {/* DECORATIVE CIRCLES */}
      <div className="header-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="header-contents">
        <div className="header-badge-wrapper">
          <div className="header-badge">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            <span>Premium Collection</span>
          </div>
        </div>
        
        <h1>
          <span className="text-line">
            <span className="text-line-1">Buy your</span>
          </span>
          <span className="text-line">
            <span className="text-line-2">
              <span className="gradient-text">Toys</span>
              <span className="emoji-bounce">🧸</span>
            </span>
          </span>
          <span className="text-line">
            <span className="text-line-3">here</span>
          </span>
        </h1>
        
        <p>Discover fun, safe, and lovable toys for every little smile — buy your favorites here.</p>
        
        <div className="header-actions">
        
          
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Happy Kids</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Toy Varieties</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">4.9⭐</span>
              <span className="stat-label">Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="header-scroll">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll</span>
      </div>

      {/* CORNER ACCENTS */}
      <div className="corner top-left"></div>
      <div className="corner top-right"></div>
      <div className="corner bottom-left"></div>
      <div className="corner bottom-right"></div>
    </div>
  )
}

export default Header