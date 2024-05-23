// import { ProductData } from "../../Modules/Products"  
const {ProductData}= require('../../Modules/Products')
const { OwnerRegister } = require('../../Modules/shopOwner/shopOwnerRegister')


const addProductController=(req ,res)=>{
    console.log(req.body)


OwnerRegister.findOne({shopName:req.body.shopName}).exec()
.then((user)=>{
    if(user!==null){

        const productDataObject= new ProductData({
            product_name:req.body.productData.name,
            product_category:req.body.productData.category,
            product_description:req.body.productData.description,
            product_price:req.body.productData.price,
            shop_address:req.body.productData.address,
            product_discount:req.body.productData.discount,
            product_deliveryTime:req.body.productData.deliveryTime,
            product_type:req.body.productData.type,
            product_availability:req.body.productData.availability,
            product_flavour:req.body.productData.flavour,
            product_weight:req.body.productData.weight,
            product_ingredients:req.body.productData.ingredients,
            product_storage:req.body.productData.storage,
            product_refundPolicy:req.body.productData.refundPolicy,
            product_rating:req.body.productData.rating,
            product_email:req.body.productData.email,
            product_mobile:req.body.productData.mobile_number,
            product_additional_detail:req.body.additional_detail,
            product_images:req.body.images,
            product_ShopName:req.body.shopName
        
            
        
        }) 
        
        
            productDataObject.save()
            .then(()=>{
                res.status(200).json({success:true, message:"data saved"})
            }).catch((err)=>{
                res.status(500).json({success:false, message:"data not saved", err:err})
            })

    }else{
        res.status(404).json({success:false, message:"Shop Not Found"})
    }

})


   
}

module.exports={addProductController}