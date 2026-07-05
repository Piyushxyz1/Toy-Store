import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import { connectDB } from "./config/db.js";
import toyRoutes from "./routes/routes.js"
import userRoutes from "./routes/userRoutes.js";
import cookieParser from 'cookie-parser'
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

configDotenv()



const app = express();
app.use(cors())
app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT;



app.get('/',(req,res)=>{
    res.send("hello")
})

app.use('/api/toys',toyRoutes)
app.use('/images',express.static("uploads"));
app.use('/api/users',userRoutes)
app.use('/api/cart',cartRoutes)
app.use("/api/orders",orderRoutes)
app.listen(PORT,()=>{
connectDB()
console.log(`server is running on ${PORT}`)


})


