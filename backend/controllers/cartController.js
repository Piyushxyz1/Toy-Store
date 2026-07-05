import  {userModel}  from "../models/userModel.js"


export const addtoCart=async(req,res)=>{
  try {
     let userdata = await userModel.findById(req.body.userId);
     let cartData =  await userdata.cartData;
     if(!cartData[req.body.itemId]){
      cartData[req.body.itemId] = 1 ;
     }

     else{
       cartData[req.body.itemId] += 1
     }
     
     await userModel.findByIdAndUpdate(req.body.userId,{cartData});
     res.json({success:true,message:"added to cart"})

  } catch (error) {

    console.log(error);
    res.json({
      success:false,
      message: error.message
    })    
  }

}

export const removeFromCart = async(req,res)=>{

try {
  
  let userdata = await userModel.findById(req.body.userId);

  let cartData = await userdata.cartData;

  if(cartData[req.body.itemId] > 0){

    cartData[req.body.itemId] -= 1
  }

    await userModel.findByIdAndUpdate(req.body.userId,{cartData});
     res.json({success:true,message:"item removed from cart succesfully"})



} catch (error) {
   console.log(error);
    res.json({
      success:false,
      message: error.message
    })    
}

}

export const getCart = async(req,res)=>{

  
  try {
  const getusersdata = await userModel.findById(req.body.userId);
  let  getCartDetails =  await getusersdata.cartData;
  
    res.status(200).json({getCartDetails})
  
} catch (error) {
     console.log(error);
    res.json({
      success:false,
      message: error.message
    })  
  
}

}




