// src/components/BlogDetail.jsx
import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import "./Blogdetail.css"

const BlogDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Complete blog posts data (same as in Blog component but with full content)
  const posts = [
    {
      id: 1,
      title: "Top 10 Educational Toys for 2024",
      excerpt: "Discover the best toys that make learning fun for kids of all ages.",
      emoji: "📚",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      author: "Sarah Johnson",
      category: "Educational",
      fullContent: `
        <h2>Why Educational Toys Matter</h2>
        <p>Educational toys play a crucial role in child development. They help develop cognitive skills, problem-solving abilities, and creativity in children of all ages.</p>
        
        <h3>1. STEM Learning Kits 🔬</h3>
        <p>STEM toys introduce children to science, technology, engineering, and mathematics concepts through hands-on play. These kits build critical thinking skills that will benefit them throughout their lives. Popular options include coding robots, microscope sets, and building kits.</p>
        
        <h3>2. Language Development Toys 📖</h3>
        <p>Interactive books and language games help children develop vocabulary and communication skills. Look for toys that encourage storytelling, word recognition, and phonics. These toys are especially beneficial for early readers.</p>
        
        <h3>3. Creative Building Sets 🧱</h3>
        <p>Building blocks and construction sets foster spatial awareness and creativity. They teach children about shapes, balance, and structural design. From simple wooden blocks to complex magnetic tiles, these toys grow with your child.</p>
        
        <h3>4. Musical Instruments 🎵</h3>
        <p>Musical toys develop rhythm, coordination, and auditory skills. They also boost memory and concentration abilities. Simple instruments like xylophones, drums, and shakers are perfect for young children.</p>
        
        <h3>5. Puzzle Games 🧩</h3>
        <p>Puzzles enhance problem-solving skills and patience. They teach children about patterns, shapes, and logical thinking. Start with simple peg puzzles and progress to more complex jigsaw puzzles.</p>
        
        <h2>Choosing the Right Toy</h2>
        <p>When selecting educational toys, consider your child's age, interests, and developmental stage. The best toys grow with your child and offer multiple ways to play and learn. Always look for toys that challenge but don't frustrate your child.</p>
        
        <div class="tip-box">
          <strong>💡 Pro Tip:</strong> Rotate toys regularly to keep your child engaged and excited about learning!
        </div>
      `
    },
    {
      id: 2,
      title: "How to Choose Safe Toys for Your Child",
      excerpt: "Essential safety tips every parent should know before buying toys.",
      emoji: "🛡️",
      date: "Dec 12, 2024",
      readTime: "4 min read",
      author: "Dr. Emily Chen",
      category: "Safety",
      fullContent: `
        <h2>Safety First: A Parent's Guide</h2>
        <p>Your child's safety is our top priority. Here's what you need to know about choosing safe toys for your little ones.</p>
        
        <h3>Age-Appropriate Toys 👶</h3>
        <p>Always check the recommended age range on toy packaging. Toys with small parts are not suitable for children under 3 years old due to choking hazards. Age recommendations are based on safety and developmental appropriateness.</p>
        
        <h3>Material Safety 🧪</h3>
        <p>Choose toys made from non-toxic materials. Look for certifications like ASTM, CE, or EN71 that indicate the toy meets international safety standards. Avoid toys with sharp edges or toxic paints.</p>
        
        <h3>Quality Construction 🔧</h3>
        <p>Inspect toys for sharp edges, loose parts, or broken pieces. Quality toys are durable and withstand rough play. Check for sturdy construction and secure attachments.</p>
        
        <h3>Electrical Safety ⚡</h3>
        <p>For battery-operated toys, ensure the battery compartment is secure and requires a tool to open. This prevents accidental ingestion of batteries. Remove batteries when the toy is not in use.</p>
        
        <h2>Regular Safety Checks</h2>
        <p>Regularly inspect your child's toys for wear and tear. Replace damaged toys immediately to prevent accidents. Check for loose parts, broken pieces, or frayed edges.</p>
        
        <div class="warning-box">
          <strong>⚠️ Important:</strong> Always supervise young children during playtime, especially with new toys!
        </div>
      `
    },
    {
      id: 3,
      title: "Creative Play Ideas for Rainy Days",
      excerpt: "Keep your kids entertained with these indoor toy activities.",
      emoji: "🎨",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      author: "Lisa Martinez",
      category: "Activities",
      fullContent: `
        <h2>Rainy Day Fun</h2>
        <p>Don't let rainy days spoil the fun! Here are creative play ideas using toys you already have at home.</p>
        
        <h3>Build a Fort 🏰</h3>
        <p>Use pillows, blankets, and chairs to create a magical fort. Add fairy lights and stuffed animals for extra coziness. This activity encourages creativity and provides a safe space for imaginative play.</p>
        
        <h3>Puppet Show 🎭</h3>
        <p>Create a puppet theater using a cardboard box. Use hand puppets or make your own with paper bags and craft supplies. This activity develops storytelling skills and boosts confidence.</p>
        
        <h3>Indoor Scavenger Hunt 🔍</h3>
        <p>Hide toys around the house and create clues for your children to find them. This promotes problem-solving and keeps them active. Use different themes like colors, shapes, or letters.</p>
        
        <h3>Arts and Crafts 🎨</h3>
        <p>Set up a craft station with paper, markers, glue, and safe scissors. Let your children create their own masterpieces. Try different activities like making greeting cards, paper animals, or collages.</p>
        
        <h3>Sensory Play 🤲</h3>
        <p>Fill a container with rice, pasta, or sand and hide small toys inside. This sensory activity is calming and develops fine motor skills. Add scoops, cups, and funnels for extra fun.</p>
        
        <h2>Making Memories</h2>
        <p>Rainy days are perfect opportunities for bonding and creativity. Make the most of indoor time with these engaging activities that the whole family can enjoy together.</p>
        
        <div class="activity-box">
          <strong>🎉 Bonus Idea:</strong> Create a "Rainy Day Jar" filled with activity ideas and let your child pick one!
        </div>
      `
    }
  ]

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
            <span>👤 {post.author}</span>
            <span>•</span>
            <span>📅 {post.date}</span>
            <span>•</span>
            <span>⏱️ {post.readTime}</span>
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