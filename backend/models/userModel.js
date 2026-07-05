import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

Name: {
type:String,
required:true,
},

Email: {
    type:String,
    required:true,
    unique:true
},

Password:{
    type:String,
    required:true,
    minlength:6
},

cartData:{
type:Object,default:{}
}

},{minimize:false},{timestamps:true})


export const userModel = mongoose.models.userModel || mongoose.model('userModel',userSchema);