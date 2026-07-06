import React from 'react';
import './order.css'
import { useState } from 'react';
import axios from "axios"
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';






const Orders = ({url}) => {


  const [orderlist,serOrderList] = useState([]);
   
  
  const listOrder = async()=>{
    
    const response = await axios.get(url+"/api/orders/all-orders")
     
    if(response.data.success){
      const orders = response.data.data;
      serOrderList(orders)
    }
    
    else{

       toast.error("error occured please try again")
    }
  }

  const statusHandler = async(event,orderId)=>{

    const status =  event.target.value
  
   const response = await axios.post(url+"/api/orders/status",{status,orderId});

    if(response.data.success ) {
     
       listOrder()

    }

   

  }

  useEffect(()=>{

listOrder()
  },[orderlist])




  return (
    <div className='order add'>
      <h3>Order Page</h3>
   <div className="order-list">
    {orderlist.map((order,index)=>{
      return(
    <div key={index} className='order-item'>
      <img src ={assets.parcel_icon}   alt = "" />
      <div>
        <p className='order-item-food'>
          {order.Items.map((item,index)=>{
            if(index === order.Items.length-1){     
            return  item.Name + "x" + item.quantity
            }
             else{
              return item.Name + "x" + item.quantity + ","
             }

          })}
        </p>
        <p className='order-item-name'>{order.Address.Firstname + " " + order.Address.Lastname}</p>
        <div className="order-item-address">
          <p>{order.Address.Street+ ", "}</p>
          <p>{order.Address.City + ", ",+order.Address.State + ", ",+order.Address.Country + ", ", +order.Address.Zipcode}</p>
        </div>
        <p className='order-item-phone'>{order.Address.Phone}</p>
        
        </div>
        <p>{order.Items.length}</p>
        <p>{order.Amount}</p>
        <select onChange={(event)=>statusHandler(event,order._id)} value={order.Status}>
          <option value="Order processing">Order Processing</option>
          <option value="Out for delivery">Out for Delivery</option>
          <option value="Delivered">Delivered</option>
        </select>

       </div>
      )
    })}
   </div>
   

    </div>
  )
}

export default Orders