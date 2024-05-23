// import { mongoose } from "../../Config/db";
const {mongoose}= require('../../Config/db')

const ownerSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:{
        type:String,
         required:true
    },
    mobile_no:{
        type:Number,
         required:true
    },
    shopName:{
        type:String,
         required:true
    },
    contact_no:Number,
    Phone_no:Number,
    address:{type:String, 
         required:true
    },
    city:String,
    state:String,
    zip:Number,
    pan:{
        type:String,
         required:true,
         unique:true,
        
    },
    gstin:{
        type:String,
        
    },
    bankName:String,
    branchName:String,
    IFSC:String,
    accountNumber:Number

})

const OwnerRegister=mongoose.model('OwnerRegister', ownerSchema)

module.exports={OwnerRegister}