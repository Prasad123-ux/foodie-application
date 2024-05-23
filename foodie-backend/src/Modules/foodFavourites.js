// import { mongoose } from "../Config/db";
const {mongoose} = require('../Config/db')

const foodFavouritesSchema= mongoose.Schema({
    email:String,
    id:String,
    product_name:String,
    product_category:String,
    product_description:String,
    product_rating:Number,
    shop_address:String,
    product_price:Number,
    product_img:String,
    product_delivery_time:String,
    role:{
        type:String,
        enum:['user', 'admin', 'shopOwner'],
        default:'user'
    }

 }, {timestamps:true})

 const foodFavourites=mongoose.model('foodFavourites',foodFavouritesSchema)


module.exports={foodFavourites}
