import mongoose from "mongoose";

const userInfo= new mongoose.Schema({

    firstName : {
        type : String , 
        require : true
    } ,
    lastName : {
        type : String , 
        require : true
    } ,
    email : {
        type : String , 
        require : true
    } ,
    password : {
        type : String ,
        require : true
    },
    rePassword : {
        type : String ,
        require : true
    }
});

export const userInfoSchema = mongoose.model("userInfo" , userInfo);

