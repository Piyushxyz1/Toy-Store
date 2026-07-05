import mongoose from "mongoose";



export const connectDB = async()=>{

 await mongoose.connect(process.env.db).then(()=>console.log("Database connected succesfully"))
 .catch(()=>console.log("error connecting to Database"))

}