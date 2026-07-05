import React, { useContext, useEffect, useState } from 'react'
import "./myorders.css"
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {
    const [data,setData] = useState([]);
    const { url,token} = useContext(StoreContext);

    const fetchOrders = async()=>{

        const response = await axios.post(url+"/api/orders/users-order",{},{headers:{token}});

        if(response.data.success){

         setData(response.data.data)
         console.log(response.data.data)
        }
    }

    useEffect(()=>{

        if(token){
            fetchOrders()
        }
    },[token])

   return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
      {data.map((order,index)=>{
       
       return(
        
         <div  key={index} className="myorder-order">
            <img src = {assets.parcel_icon} alt= "" />
            <p>{order.Items.map((item,index)=>{
                if(index === order.Items.length-1){

                    return item.Name+" x " +item.quantity 
                }

                else{
                    return item.Name+ " x " +item.quantity + ","
                }
             
            })}</p>
            <p>${order.Amount}.00</p>
            <p>Items:{order.Items.length}</p>
            <p><span>&#x25cf; </span><b>{order.Status}</b></p>
            <button onClick={fetchOrders}>Track Order</button>
         </div>
        
    
       )

      })}  
        
      </div>  


    </div>
  )
}

export default MyOrders