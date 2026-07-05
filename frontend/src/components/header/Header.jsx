import React from 'react'
import "./header.css"
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'> 
        <div className="header-contents">
            <h1>Buy your Toys here</h1>
            <p>Discover fun, safe, and lovable toys for every little smile — buy your favorites here.</p>
             <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header