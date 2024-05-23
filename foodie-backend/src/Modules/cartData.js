//  import { mongoose } from "../Config/db";
const {mongoose}= require('../Config/db')


 const cartSchema=new mongoose.Schema({
    email:String,
    id:String,
    size:String,
    
    qty:Number,
    CategoryName:String,
    name:String,
    img:String,
    price:Number,
    description:String, 
    deliveryTime:Number,
    role:{
        type:String,
        enum:['user', 'admin', 'shopOwner'],
        default:'user'
    }

 }, {timestamps:true})

 FoodCart= mongoose.model('foodCart',cartSchema )

 module.exports={FoodCart}