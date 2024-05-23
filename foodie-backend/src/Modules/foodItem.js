// import { model } from "mongoose";
const {mongoose}= require('../Config/db')


const foodSchema= new mongoose.Schema({
   
        name: String,
        CategoryName: String,
        description: String,
        price: Number,
        address:String,
        discount: String,
        deliveryTime:Number,
        type: String,
        img:String,
    role:{
        type:String,
        enum:['user', 'admin', "shopOwner"],
        default:"shopOwner"
    }
},{timestamps:true, toJSON:true})

const foodItem= mongoose.model('foodItem', foodSchema)
module.exports={foodItem}
