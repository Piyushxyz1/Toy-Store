import React, { useState } from 'react';
import './addproduct.css'
import { assets } from '../../assets/assets';
import axios from "axios"
  import {  toast } from 'react-toastify';

const AddProduct = ({url}) => {

   
    const [image,setImage] = useState('');
    const [data,setData] = useState({
        Name: "",
        Description: "",
        Category: "Salad",
        Price: ""
    });

// handle change to update input details 
const handleChange=(e)=>{
e.preventDefault()
const {name,value} = e.target;
setData({...data,[name]:value})
}

// handle Submit to sent the form

const onSubmitHandler = async(e)=>{
e.preventDefault();

  const formData = new FormData();

  formData.append("Name", data.Name);
  formData.append("Description", data.Description);
  formData.append("Category", data.Category);
  formData.append("Price", Number(data.Price));
  formData.append("image", image);

  const response = await axios.post(
    `${url}/api/toys/add`,
    formData
  );

  if(response.data.sucess){
    setData({
        Name: "",
        Description: "",
        Category: "Salad",
        Price: ""
    })

    setImage(false);
    console.log(response)
    toast.success(response.data.message)
  }

  else{
      
    toast.error(response.data.message)
  
  }

}





    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor='image'>
                        <img src={image?URL.createObjectURL(image):assets.upload_area} alt=" " style={{borderRadius:'4px'}} />
                    </label>
                    <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required />
                </div>
                <div className="add-product-name flex-col">
                    <p>product-name</p>
                    <input type='text' name='Name' placeholder='Type here' value={data.Name} onChange={handleChange} />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product Description</p>
                    <textarea name="Description" value={data.Description} rows={6} placeholder='write here' required onChange={handleChange} ></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">

                        <p>Product Category</p>
                        <select name="Category" onChange={handleChange} >
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Remote Control Cars">Remote Control Cars</option>
                            <option value="Plush Toys">Plush Toys</option>
                            <option value="Legos">legos</option>
                            <option value="Action Figures">Action Figures</option>
                        </select>

                    </div>
                    <div className="add-price flex-col" >
                        <p>Product Price</p>
                        <input  type='Number' name='Price' value={data.Price} placeholder='$20' onChange={handleChange} />
                    </div>
                </div>
                <button type='submit' className='add-btn'>ADD</button>
            </form>
        </div>
    )
}

export default AddProduct