import React, { useState } from 'react'
import "./exploremenu.css";
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category,setCategory}) => {
 
  return (
    
    <div className='explore-menu' id="explore-menu">
     <h2>Explore Our Menu</h2>
        <p className='explore-menu-text'>Choose from our range of toys and keep your child engaged</p>
        <div className="explore-menu-list">
       
         {menu_list.map((items,index)=>{
        return(

            <div className='explore-menu-item-list' key={index} onClick={(prev)=>setCategory(prev === items.menu_name? "all":items.menu_name)}>
            <img src = {items.menu_image} alt = "menu-image" className={category === items.menu_name? "active": ""}/>
            <p >{items.menu_name}</p>       
            </div>
        )
         })}

        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu