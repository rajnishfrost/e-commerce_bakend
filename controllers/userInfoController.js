import {userInfoSchema} from "../schemas/userInfo.js";
import mongoose from "mongoose";
import {config} from "dotenv";
config({path : "./config/config.env"});


mongoose.connect(process.env.MONGO_URI , { useNewUrlParser: true })
export const userInfo = async(req , res) => {
    let check = await userInfoSchema.findOne({email : req.body.email})
    if(check){
        console.log("matched");
        res.send({message : "Email Already Exist" , found : true})
    }else{
        const data = new userInfoSchema(req.body);
        data.save();
        res.send({message : "Successfully Register" , found : false})
    }
}

export const logIn = async(req , res) => {
    let user = await userInfoSchema.findOne({email : req.body.email});
    if(user){
       if(user.password === req.body.password){
        res.send({found : true , message : "email pass match" , firstName : user});
       }
       else{
        res.send({found : false , message : "password not match"});
       }
    }else{
        res.send({found : false , message : "email not match"});
    }
}