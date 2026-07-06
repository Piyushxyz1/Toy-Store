import React, { useContext, useState } from 'react';
import "./navbar.css"
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { toast } from 'react-toastify';




const Navbar = ({ setShowLogin, showLogin }) => {
  
  const [menu, setMenu] = useState("home");
  const {totalAmount,token,setToken} = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem("token")
    setToken('')
    navigate('/')
    toast.success('logged out succesfully')
  }

  return (
    <div className='navbar'>
      <Link to={'/'} className="logo-link">
  <div className="toy-logo-css">
    <div className="toy-block">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
    <span className="brand-name">ToyStore</span>
  </div>
</Link>
      <div className='navbar-menu'>
        <Link to="/" className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")} >Home</Link>
        <a href="#explore-menu" className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")} > Menu</a>
        <a href="#blog" className={menu === "blog" ? "active" : ""} onClick={() => setMenu("blog")} >Blogs</a>
        <a href="#footer" className={menu === "contact" ? "active" : ""} onClick={() => setMenu("contact")}>Contact-Us</a>
      </div>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-cart-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
            <div className={totalAmount() === 0 ? "" : "dot" }></div>
          </Link>
        </div>
         {!token?<button onClick={() => setShowLogin(!showLogin)}>Sign In</button>:
         <div className='navbar-profile'>
          <img src = {assets.profile_icon} alt='' />
          <ul className='nav-profile-dropdown'>
           <li onClick={()=>navigate("/myorders")}><img src = {assets.bag_icon} alt = "" /><p>Orders</p></li>
            <hr/>  
           <li onClick={logout}> <img src = {assets.logout_icon} alt=''/><p>Logout</p></li>  
           
          </ul>
         </div>}
        
      </div>

    </div>
  )
}

export default Navbar