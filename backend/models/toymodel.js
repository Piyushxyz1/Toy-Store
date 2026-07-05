import mongoose from "mongoose";


const toySchema = new mongoose.Schema({

 Name: {
type: String,
required:true
 },
 
 Description: {
    type:String,
    required:true
 },

 Price: {
type:String,
required:true
 },

 Image: {
 type:String,
 required:true
 },

 Category:{
type:String,
required:true
}


},{timestamps:true})


export const toyModel =  mongoose.models.toyModel || mongoose.model('toyModel',toySchema);

