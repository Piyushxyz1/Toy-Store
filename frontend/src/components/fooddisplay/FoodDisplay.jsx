import React from 'react';
import './fooddisplay.css'
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItems from '../fooditems/FoodItems';

const FoodDisplay = ({category}) => {

    const {list} =  useContext(StoreContext);
  

  return (
    <div className='food-display' id ='food-display'>
     <h2>Top toys near you</h2>
    <div className="food-display-list">
    {list.map((item,index)=>{
      if(category === "all" || item.Category === category){

        return(
            <FoodItems key={index} id = {item._id} item = {item}/>
        )

      }

  
    
    })}    
    </div>    
    </div>
  )
}

export default FoodDisplay