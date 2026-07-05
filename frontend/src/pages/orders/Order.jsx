import React, { useContext, useEffect } from 'react';
import "./order.css";
import { StoreContext } from '../../context/StoreContext';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Order = () => {
   const navigate = useNavigate();
  const {totalAmount,token,list,cartItems,url} = useContext(StoreContext)
  const [data,setData] = useState({
    Firstname: '',
    Lastname: '',
    Email: '',
    Street: '',
    City: '',
    State: '',
    Zipcode: '',
    Country: '',
    Phone:''
  })


    useEffect(()=>{
   if(!token){
    navigate("/")
   }

   else if (totalAmount()===0){
     
     navigate("/cart")
     
   }

  })

  const onChangeHandler=(e)=>{
    const {name,value} = e.target;
    setData({...data,[name]:value})
  }
  
  const placeOrder = async(event)=>{
  event.preventDefault();
  let orderItems = []
    
  list.map((item)=>{
   if(cartItems[item._id] > 0){
    let itemInfo = item;
     itemInfo["quantity"] = cartItems[item._id]
     orderItems.push(itemInfo)
   }
  })

const orderData = {

  Address: data,
  Items: orderItems,
  Amount: totalAmount() +2
}

  const response = await axios.post(url+"/api/orders/place-order",orderData,{headers:{token}})

  if(response.data.success){

    const {session_url} = response.data;
    window.location.replace(session_url);
  }

  else {

    toast.error("something went wrong")
  }

  }

 



 
  return (
    <form  className="place-order" onSubmit={placeOrder}>
      <div className='place-order-left'>
        <h2 className='title-delivery'>Delivery Information</h2>
        <div className="multi-fields">
          <input type="text" placeholder='first name' name='Firstname' value={data.Firstname} onChange={onChangeHandler} required/>
          <input type="text" placeholder='last name' name='Lastname' value={data.Lastname} onChange={onChangeHandler}  required />
        </div>
        <input type="text"  placeholder='Email adress' name='Email'  value={data.Email} onChange={onChangeHandler} required/>
        <input type="text" placeholder='Street' name='Street' value={data.Street} onChange={onChangeHandler}  required/>
         <div className="multi-fields">
          <input type="text" placeholder='City' name='City' value={data.City} onChange={onChangeHandler} required/>
          <input type="text" placeholder='State' name='State'  value={data.State} onChange={onChangeHandler}  required/>
        </div>
         <div className="multi-fields">
          <input type="text" placeholder='Zip code'name='Zipcode'  value={data.Zipcode} onChange={onChangeHandler} required/>
          <input type="text" placeholder='Country'  name='Country'  value={data.Country} onChange={onChangeHandler} required />
        </div>
        <input type="text" placeholder='phone' name='Phone' value={data.Phone} onChange={onChangeHandler} required/>
      </div>
      <div className='place-order-right'>
            <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{totalAmount() === 0 ? 0: 2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
             <p>Delivery Fee</p>
             <p>{2}</p>
            </div>
             <hr/>
            <div className="cart-total-details">
             <b>Total</b>
             <p>{totalAmount() === 0 ? 0:totalAmount() + 2}</p>
            </div>
          </div>
            <button type='submit'>Proceed to Payment</button>
        </div>
      </div>
    </form>
  )
}

export default Order