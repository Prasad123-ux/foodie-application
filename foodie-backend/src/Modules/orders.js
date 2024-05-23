// import { mongoose } from "../Config/db";
const {mongoose}= require('../Config/db')

const foodOrderSchema=new mongoose.Schema({

    user_email:String,
    product_id:String,
    product_quantity:Number,
    product_name:String,
    product_Category:String,
    product_img:String,
    product_price:Number,
    product_email:String,

    role:{
        type:String,
        enum:['user', 'admin','shopOwner'],
        default:'user'
    }

}, {timestamps:true})



const FoodOrders=mongoose.model('foodOrder', foodOrderSchema)


module.exports={FoodOrders}