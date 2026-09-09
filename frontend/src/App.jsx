import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Order from './pages/orders/Order'
import Cart from './pages/cart/Cart'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import { ToastContainer } from 'react-toastify'
import Verify from './pages/verify/Verify'
import MyOrders from './pages/myorders/MyOrders'
import BlogDetail from './pages/blogdetail/BlogDetail'
import ScrollToTop from './components/scroll-top/ScrollToTop'
import ToyMenu from './pages/toymenu/ToyMenu'
import Blogs from './pages/blogdetail/blogpage/Blogs'
import Contact from './pages/contact/contact'


const App = () => {

  const [showLogin, setShowLogin] = useState(false);  //for toggling login 
  
  return (
    <>
      {showLogin ? <Login showLogin={showLogin} setShowLogin={setShowLogin} /> : ""}
       <ScrollToTop />
      <div className='app'>
        <ToastContainer position="top-center" style={{zIndex: 4 }} autoClose={2000} />
          <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
        <div style={{ width: "80%", margin: "auto" }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blogs' element = {<Blogs/>}/>
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path= '/menu' element= {<ToyMenu/>}/> 
            <Route path='/orders' element={<Order />} />
            <Route path='/cart' element={<Cart />} />
            <Route path= "/verify" element = {<Verify/>} />
            <Route path= "/myorders" element = {<MyOrders/>} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App