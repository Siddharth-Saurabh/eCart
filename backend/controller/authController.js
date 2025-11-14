import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs"
import { genToken } from "../config/token.js";
export const register = async (req,res)=>{
    try{
        const {name,email,password} = req.body;

        const existUser = await User.findOne({email})
        if(existUser){
           return res.status(400).json(
                {
                    message:"User already Exist"
                }
            )
        }
        if(!validator.isEmail(email)){
             return res.status(400).json(
                {
                    message:"Enter valid email"
                }
            )

        }
        if(password.length < 8){
            return res.status(400).json(
                {
                    message:"Enter strong password"
                }
            )
        }

        let hashPassword = await bcrypt.hash(password,10)

        const user = await User.create(
            {name,email,password:hashPassword}
        );
        let token = await genToken(user._id);

        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite: "Strict",
            maxAge:7*24*60*60*1000
        })
        res.status(201).json(user);
    }
    catch(error){

        console.log("signUp error");
        res.status(500).json({
            message:`register error ${error}`
        })
        
    }
}

export const login = async(req,res)=>{
    try{
        const {email,password}=req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json(
               {
                message:"user not found",
               }
            )
        }
        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
             return res.status(400).json(
               {
                message:"incorrect password",
               }
            )
        }
                let token = await genToken(user._id);

        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite: "Strict",
            maxAge:7*24*60*60*1000
        })
        res.status(201).json(user );
    
    }catch(error){
        console.log("login error");
    }
}

export const logOut = (req,res)=>{
  try{
    res.clearCookie("token");
    res.status(200).json({message:"Logged out successfully"});
  }catch(error){
    res.status(500).json({message:"Logout error"});
  }
}