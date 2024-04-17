import bcrypt from 'bcrypt'
import User from "../Models/User.Schema.js";
import dotenv from 'dotenv'
import { GenerateRandomString } from '../Utils/RandomString.js';
import { SendMail } from '../Utils/SendMail.js';

dotenv.config()


export const RegisterUser = async (req, res) => {
  try {
    const{username, email, password} = req.body
    const hashPassword = await bcrypt.hash(password, 10)

    const user = await User.findOne({username})
    if(user){
        return res.status(409).json({message:"username already exist"})
    }
    
    const newUser = new User({username, email, password:hashPassword})
    await newUser.save()
    res.status(200).json({message:"Register Succesfully", data:newUser})
  } catch (error) {
    console.log(error);
    res.status(500).json({error:"internal server failed"})
  }
}


export const LoginUser = async(req, res)=>{
    try {
        const{email, password}= req.body
        const findUser = await User.findOne({email})
        if(!findUser){
            return res.status(401).json({message:"user not found"})
        }

        const passwordMatch = await bcrypt.compare(password, findUser.password)
        if(!passwordMatch){
            return res.status(401).json({message:"Invalid Password"})
        }

        res.status(200).json({message:"Login successful", data:findUser})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server failed"})
    }
}


export const ListAllUser = async(req,res)=>{
try {
    const AllUser = await User.find()
    res.status(200).json({message:"All Users List fetch Successfully", data:AllUser})
    
} catch (error) {
    console.log(error);
    res.status(500).json({message:"internal server Error"})
    
}    
}



export const forgetPassword = async(req, res)=> {
    try {
        const userExist = await User.findOne({email: req.body.email})
        if(userExist && req.body.email !==""){
            const tokenstring = GenerateRandomString(15)
            const mailId = req.body.email
            const resetLink = `${process.env.Reset_Link}?token=${tokenstring}&email=${mailId}`
          
            const message = `
            <p>Hello ${userExist.username},</p>
                <p>You have requested to reset your password. Click the button below to reset it:</p>
                <a href="${resetLink}">
                  <button style="padding: 10px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Reset Your Password
                  </button>
                </a>
            `;
            SendMail(req.body.email,message)
            res.status(201).send({
                message:"Reset link sended to your mail-id", data:resetLink
            });
        }else{
        
            res.status(400).send({message:`User does not exits`})
        }
        }

     catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error" })
        
    }
}



export const resetPassword = async (req, res) => {
    try {
      let user = await User.find({ email: req.body.email });
      if (user) {
          
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;
        const equalPassword = password === confirmPassword;
        const hashedPassword = await bcrypt.hash(password, 10);
        if (equalPassword && password !== "" && confirmPassword !== "") {
          await User.updateOne(
            { email: req.body.email },
            { password: hashedPassword }
          );
          await User.updateOne(
            { email: req.body.email },
            { $unset: { randomString: 1 } }
          );
          res.status(200).json({message:"Updated successfully"});
        } else {
          res.status(400).json({message:"Password and confirm password doesnt match"});
        }
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
}