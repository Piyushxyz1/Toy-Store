import React, { useState } from 'react';
import "./cart.css"
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, list, removeFromCart, totalAmount, url } = useContext(StoreContext);
  const navigate = useNavigate()

  // Check if cart is empty
  const isCartEmpty = Object.keys(cartItems).every(key => cartItems[key] === 0);

  if (isCartEmpty) {
    return (
      <div className='cart'>
        <div className="cart-empty">
          <span className="cart-empty-icon">🛒</span>
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added any items to your cart yet</p>
          <button onClick={() => navigate('/menu')}>Start Shopping</button>
        </div>
      </div>
    )
  }

  return (
    <div className='cart'>
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <span>{Object.values(cartItems).reduce((a, b) => a + b, 0)} items</span>
      </div>

      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Product</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Total</p>
          <p></p>
        </div>

        {list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className='cart-items-item'>
                  <img src={url + "/images/" + item.Image} alt={item.Name} />
                  <p>{item.Name}</p>
                  <p>${item.Price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${(item.Price * cartItems[item._id]).toFixed(2)}</p>
                  <button className='remove' onClick={() => { removeFromCart(item._id) }}>×</button>
                </div>
              </div>
            )
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Order Summary</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${totalAmount().toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${totalAmount() === 0 ? '0.00' : '2.00'}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <p>${totalAmount() === 0 ? '0.00' : (totalAmount() + 2).toFixed(2)}</p>
            </div>
          </div>
          <button onClick={() => navigate('/orders')}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart