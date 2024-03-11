import mongoose from "mongoose";

const orderInfo = new mongoose.Schema({


    id : {
        type : Number , 
        require : true
    } ,
    title : {
        type : String , 
        require : true
    } ,
    price : {
        type : Number , 
        require : true
    } ,
    description : {
        type : String ,
        require : true
    },
    category : {
        type : String ,
        require : true
    },
    image : {
        type : String ,
        require : true
    },
    rating : {
        type : Object ,
        require : true
    },
    qty : {
        type : Number ,
        require : true
    },
    email : {
        type : String ,
        require : true
    }



});

export const orderInfoSchema = mongoose.model("orderInfo" , orderInfo);