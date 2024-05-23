 const { mongoose } = require("../Config/db");
// const mongoose=require('mongoose')

const userSchema=  new mongoose.Schema({
    name:String,
    lastName:String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile_no:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true

    },
    landMark:{
        type:String,
        required:true

    },
    pinCode:{
        type:Number,
        required:true

    }, role:{
        type:String,
        enum:['user', 'admin', "shopOwner"], 
        default:"user",
    }
}, {timestamps:true})
const Food= mongoose.model('Food', userSchema)

module.exports={Food}