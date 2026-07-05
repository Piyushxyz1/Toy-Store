import React from 'react'
import "./listproduct.css";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


const ListProduct = ({url}) => {

  const [list,setList] = useState([]);

  const fetchList = async()=>{
     const respose = await axios.get(`${url}/api/toys/lists`)
     const items = respose.data;
     console.log(respose)
       setList(items)
     
  }


  const removeToys = async(foodId)=>{

const response =  await  axios.post(`${url}/api/toys/removefromcart`,{id:foodId})

await fetchList()

if(response){
  toast.success(response.data.message)
}

else{

  toast.error("error occured")
}

  }

  useEffect(()=>{

    fetchList()
  },[])

  return (
   <div className="list add flex-col">
    <p>All Toys List</p>

    <div className='list-table'> 
      <div className="list-table-format title">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div>
      {list.map((item,index)=>{
        return(
         <div key={index} className='list-table-format'>
          <img src = {`${url}/images/`+ item.Image } alt={item.Name} />
           <p>{item.Name}</p>
           <p>{item.Category}</p>
           <p>{item.Price}</p>
           <p className='cursor' onClick={()=>removeToys(item._id)}>X</p>
         </div>
     
        )
      })}

    </div>

   </div>
    
  )
}

export default ListProduct