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

const App = () => {

  const [showLogin, setShowLogin] = useState(false);  //for toggling login 
  
  return (
    <>
      {showLogin ? <Login showLogin={showLogin} setShowLogin={setShowLogin} /> : ""}

      <div className='app'>
        <div style={{ width: "80%", margin: "auto" }}>
        <ToastContainer position="top-center" style={{ zIndex: 3 }} autoClose={2000} />
          <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/orders' element={<Order />} />
            <Route path='/cart' element={<Cart />} />
            <Route path= "/verify" element = {<Verify/>} />
            <Route path= "/myorders" element = {<MyOrders/>} />

          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App