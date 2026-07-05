import express from "express";
import { loginuser, signup } from "../controllers/userController.js";

const userRoutes = express.Router();


userRoutes.post('/login',loginuser);
userRoutes.post('/signup',signup);


export default userRoutes