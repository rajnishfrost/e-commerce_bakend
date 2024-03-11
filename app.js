import express from "express";
import {config} from "dotenv";
import paymentRoute from "./routes/paymentRoute.js";
import userInfoRoute from "./routes/userInfoRoute.js"
import cors from "cors";

import {orderInfoSchema} from "./schemas/orderInfo.js";
import mongoose from "mongoose";
mongoose.connect(process.env.MONGO_URI , { useNewUrlParser: true });

config({path : "./config/config.env"});
export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use("/api" , paymentRoute);
app.use("/data" , userInfoRoute);

app.use("/cartData" , (req , res) => {
    if(req.body.orderDetails.length <= 0)
    return res.send({message : "no data save"})

    const data = new orderInfoSchema({
        id : req.body.orderDetails[0].id ,
        title : req.body.orderDetails[0].title ,
        price : req.body.orderDetails[0].price ,
        description : req.body.orderDetails[0].description ,
        category : req.body.orderDetails[0].category ,
        image : req.body.orderDetails[0].image ,
        rating : req.body.orderDetails[0].rating ,
        qty : req.body.orderDetails[0].qty ,
        email : req.body.email ,

    });
        data.save();
} )
app.use("/orderDetails" , async(req ,res) => {
    let check = await orderInfoSchema.findOne({email : req.body.email})
    res.send({data : check , status : true});
});
app.get("/api/getkey" , (req,res) =>res.status(200).json({key : process.env.Razorpay_API_Key}));
