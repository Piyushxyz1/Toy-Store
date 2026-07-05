import express from "express";
import { placeOrder, verifyOrder,userorders, listorder, orderstatus } from "../controllers/orderController.js";
import { authMiddleware } from  "../middleware/auth.js"

const orderRoutes = express.Router();


orderRoutes.post('/place-order',authMiddleware,placeOrder)
orderRoutes.post('/verify',verifyOrder)
orderRoutes.post('/users-order',authMiddleware,userorders);
orderRoutes.get("/all-orders",listorder)
orderRoutes.post ("/status",orderstatus)


export default orderRoutes