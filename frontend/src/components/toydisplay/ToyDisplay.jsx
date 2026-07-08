import React from 'react';
import './toydisplay.css'
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItems from '../fooditems/FoodItems';

const ToyDisplay = ({category}) => {

    const {list} =  useContext(StoreContext);
  

  return (
    <div className='food-display' id ='food-display'>
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

export default ToyDisplay