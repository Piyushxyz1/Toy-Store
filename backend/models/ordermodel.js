import mongoose from  "mongoose";

const orderSchema =  new mongoose.Schema({
userId:{
    type:String,
    required:true,
},

Items: {
type:Array,
required:true
},

Amount:{
type:Number,
required:true
},

Address: {
    type:Object,
    required:true
},

Status: {
    type:String,
    default: "Order processing"

},

Date: {
    type:Date,
    default:Date.now()
},
Payment:{
    type:Boolean,
    default:false
}

})

export const orderModel =  mongoose.models.orderModel ||   mongoose.model('orderModel',orderSchema)   

