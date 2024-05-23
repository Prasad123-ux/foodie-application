// import { mongoose } from "../Config/db";
const {mongoose}= require('../Config/db')


const productSchema= new mongoose.Schema({
    product_name:{type:String, required:true},
    product_category:{type:String, required:true},
    product_description:{type:String, required:true},
    product_price:{type:Number, required:true,},
    shop_address:{type:String ,required:true},
    product_discount:{type:Number, required:true, default:0},
    product_deliveryTime:{type:Number, required:true},
    product_type:{type:String, },
    product_availability:{type:String, required:true},
    product_flavour:{type:String, required:true},
    product_weight:{type:Number, required:true},
    product_ingredients:{type:String, required:true},
    product_storage:{type:String, required:true},
    product_refundPolicy:{type:String, required:true},
    product_rating:{type:Number, required:true},
    product_email:{type:String, required:String},
    product_mobile:{type:Number, required:false},
    product_additional_detail:{type:String, required:false},
    product_images:{
        image1:{type:String},
        image2:{type:String},
        image3:{type:String},
        image4:{type:String},
        image5:{type:String}
    }
    



}, {timestamps:true})

const ProductData= mongoose.model('ProductData', productSchema);


module.exports={ProductData};