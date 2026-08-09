import { orderModel } from "../models/ordermodel.js";
import { userModel } from "../models/userModel.js";
import Stripe from  "stripe";
import { configDotenv } from "dotenv";

configDotenv()




export const placeOrder = async(req,res)=>{
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

  const frontend_url = process.env.FRONTEND_URL;

try {
    const neworder = new orderModel({
        userId:req.body.userId,
        Items:req.body.Items,
        Amount: req.body.Amount,
        Address:req.body.Address,

    })

    await neworder.save();
    
   const user =  await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
     
 const line_items = req.body.Items.map((item) => ({
  price_data: {
    currency: "inr",
    product_data: {
      name: item.Name,
    },
    unit_amount: Number(item.Price) * 100 * 80
  },
  quantity: item.quantity
}))
 line_items.push({
    price_data:{
        currency:"inr",
        product_data :{
            name: "Delivery Charges"
        },
        unit_amount: 2 * 100 * 96
    },
    quantity: 1
 })
  const session =  await stripe.checkout.sessions.create({
   line_items:line_items,
    mode: "payment",
    success_url:`${frontend_url}/verify?success=true&orderId=${neworder._id}`,
    cancel_url:`${frontend_url}/verify?success=false&orderId=${neworder._id}`,

  })

res.json({success:true,session_url:session.url})

} catch (error) {
    console.log(error)
    res.status(500).json({message:error.message})
}

}


export const verifyOrder= async(req,res)=>{

  const {orderId,success} =req.body;

  try {

    if(success === "true"){
     await orderModel.findByIdAndUpdate(orderId,{Payment:true});
     res.json({success:true,message:"Paid"})
  

    }

    else{

      await orderModel.findByIdAndDelete(orderId)
      res.json({success:false,message:"not paid"})
    }
    
  } catch (error) {
    console.log(error)
    res.json({message:error.message})
  }

}

// users orders for frontend


export const userorders = async(req,res)=>{

  const {userId} = req.body

  try {
         
    const orders = await orderModel.find({userId:userId});
    res.json({success:true,data:orders})

    
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
    
  }

}

export const listorder =async(req,res)=>{

  const orderlist = await orderModel.find({});
  try {
      res.json({success:true,data:orderlist})
  } catch (error) {
    console.log(error)
    res.json({message:error.message})
  }
}

export const orderstatus = async(req,res)=>{

  const {status,orderId} = req.body 

   
   try {

        const updatestatus = await orderModel.findByIdAndUpdate(orderId,{Status:status})
        console.log(updatestatus)

        res.json({success:true,status:updatestatus})
    
   } catch (error) {
  
    console.log(error)  
    res.json({message:error.message})
   }

} 