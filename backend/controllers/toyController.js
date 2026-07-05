import { toyModel } from "../models/toymodel.js"
import fs from "fs"



export const addtoy =(async(req,res)=>{

    let  image_filename = req.file.filename
    const toy = new toyModel({
     Name: req.body.Name,
     Description:req.body.Description,
     Price: req.body.Price,
     Image: image_filename,
     Category: req.body.Category
    })

    const {Name} = toy

try {
  await toy.save()
  res.status(200).json({sucess:true,message:`${Name}'s are added to products`})
} catch (error) {
    console.log(error)
    res.status(500).json({message:'error occured'})
}

})

 export const toylist = async(req,res)=>{
  
    try {
      const lists = await toyModel.find({});
      res.status(200).json(lists)
    
  } catch (error) {
    console.log(error)
    res.status(500)
  }

}

// Remove Toys

export const removetoys = async(req,res)=>{

  try {
    const toys = await toyModel.findById(req.body.id);
    fs.unlink(`uploads/${toys.image}`,()=>{
    }) 
    await toyModel.findByIdAndDelete(req.body.id)
    res.json({message:`${toys.Name} removed succesfully`})
    // const response =  await  axios.post(`${url}/api/toys/removefromcart`,{id:foodId})  -- this is the post request coming from frontend
    
  
  } catch (error) {
    console.log(error)
    res.status(500)
  }

}

