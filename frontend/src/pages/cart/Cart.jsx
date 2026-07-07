import React, { useState } from 'react';
import "./cart.css"
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, list, removeFromCart , totalAmount,url} = useContext(StoreContext);
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />


        {list.map((item, index) => {
             
          
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className='cart-items-title cart-items-item'>
                  <img src={url+ "/images/"+item.Image} alt="item-img" />
                  <p>{item.Name}</p>
                  <p>${item.Price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.Price * cartItems[item._id]}</p>
                  <p className='remove' onClick={() => { removeFromCart(item._id) }}>X</p>
                </div>
                <hr />
              </>

)

          }

        })}

      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{totalAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
             <p>Delivery Fee</p>
             <p>{totalAmount() === 0 ? 0: 2}</p>
            </div>
             <hr/>
            <div className="cart-total-details">
             <b>Total</b>
             <p>{totalAmount()=== 0 ? 0: totalAmount() +2}</p>
            </div>
          </div>
            <button onClick={()=>navigate('/orders')}>Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
          <p>If you have promo code enter here</p>
          <div className="cart-promocode-input">
            <input typeof='text' placeholder='Enter your promocode'/>
            <button >Submit</button>
          </div>  
          </div>

        </div>
      </div>

    </div>
  )
}

export default Cart