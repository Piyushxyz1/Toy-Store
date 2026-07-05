import { userModel } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import validator from 'validator';



export const loginuser = async(req,res)=>{
   
    const {Email,Password} = req.body

    
    try {
    if(!Email || !Password){
        res.status(401).json({message:'All fields are required'})
        return
    }

    const checkExistingUser = await userModel.findOne({Email:Email})
     
    if (!checkExistingUser){
    
      res.json({message:"something went wrong try again !"})  
      return   
    }

    const comparePassword = await bcrypt.compare(Password,checkExistingUser.Password)

    if(!comparePassword){

        res.json({message:"something went wrong try again !"})
        return
    }

    const token = createToken(checkExistingUser._id)
         res.status(200).json({message:`Welcome ${checkExistingUser.Name}`,success:true,token})
    
} catch (error) {
        console.log(error)
    res.status(500).json({message:error.message})
}


}


const createToken = (id)=>{

    return  jwt.sign({id},process.env.JWT_SECRET)

}


export const signup = async(req,res)=>{

  const {Name ,Password,Email} = req.body;

  try {

    const userExist = await userModel.findOne({Email});

    if(userExist){
        res.status(400).json({success:false,message: "User already exist"})
        return
    }

    //validator is used to validate email and password
    if(!validator.isEmail(Email)){
          res.status(400).json({success:false,message: "Please Enter Valid Email"});  
         return
    }

    if(Password.length < 6){
          res.json({success:false,message: "Password length must be of 8 digits"}); 
          return

    }

    const salt =  await bcrypt.genSalt(10)    // remember to create salt first and the hash the password and remember to use await
    const hashedPassword =  await bcrypt.hash(Password,salt)
    
    const createUser = await userModel({
        Name:Name,
        Email:Email,
        Password:hashedPassword
    })

    createUser.save()
    const token = createToken(createUser._id);


    res.status(201).json({success:true,message:"User created successfully",token:token})


    
  } catch (error) {
    console.log(error)
    res.status(500).json({message:error.message})
  }
}


