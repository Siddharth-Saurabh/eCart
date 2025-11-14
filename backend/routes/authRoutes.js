import express from "express"
import { register,login,logOut } from "../controller/authController.js";

const authRoutes = express.Router();

authRoutes.post("/registration",register);
authRoutes.post("/login",login);
authRoutes.post("/logout",logOut);

export default authRoutes;