import  express  from "express";
import { addtoCart,removeFromCart,getCart } from "../controllers/cartController.js";
import { authMiddleware } from "../middleware/auth.js";


const cartRoutes = express.Router();

cartRoutes.post("/addtocart",authMiddleware,addtoCart)
cartRoutes.post("/removefromcart",authMiddleware,removeFromCart)
cartRoutes.post("/getcart",authMiddleware,getCart)


export default cartRoutes
   