// import { mongoose } from "../Config/db";
const {mongoose}= require('../Config/db')

const reviewSchma=mongoose.Schema({
    product_id:String,
    userMail:String,
    userName:String,
    product_rating:Number,
    product_review:String,
    product_mail:String,
    product_name:String
});
const Reviews=mongoose.model('Reviews', reviewSchma)


module.exports={Reviews}