import React, { useContext, useState } from 'react';
import './fooditem.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItems = ({ item }) => {

  const [itemCount,SetItemCount] = useState(0);
  const {cartItems,setCartItems,addToCart,removeFromCart,url} = useContext(StoreContext);
  
  const { _id, Name, Description, Image, Price} = item
  return (
    
      <div className="food-item">
        <div className="food-item-img-container">
          <img className='food-item-img' src={url+"/images/"+Image} alt="" />
          {!cartItems[_id]?<img className='add' src = {assets.add_icon_white}  onClick={()=>addToCart(_id)} alt = " "/>:
            <div className='food-item-counter'>
              <img src = {assets.remove_icon_red} alt ="" onClick={()=>removeFromCart(_id)}  />
              <p>{cartItems[_id]}</p>
              <img src = {assets.add_icon_green} alt ="" onClick={()=>addToCart(_id)} />
            </div>}
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <h3>{Name}</h3>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-desc">{Description}</p>
          <p className="food-item-price">${Price}</p>
        </div>
      </div>

   
  )
}

export default FoodItems