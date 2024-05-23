// import { foodFavourites } from "../Modules/foodFavourites"
// import { ProductData } from "../Modules/Products"
// import { foodFavourites } from "../Modules/foodFavourites"
// import { foodItem } from "../Modules/foodItem"
const {ProductData}= require('../Modules/Products')
const {foodFavourites}= require('../Modules/foodFavourites')



const addfoodFavouriteController=(req, res)=>{
    // console.log(req.body)

    ProductData.findOne({_id:req.body.id}).exec()
    .then((item)=>{
        console.log(item)
        if(item!==null){
            
         const  foodFavouriteObject=new foodFavourites({ 
    email:req.email,
    id:req.body.id,
    product_name:item.product_name,
    product_category:item.product_category,
    product_description:item.product_description,
    product_rating:item.product_rating,
    shop_address:item.shop_address,
    product_price:item.product_price,
    product_img:item.product_images.image1,
    product_delivery_time:item.product_deliveryTime,
           


            })
            foodFavouriteObject.save().then(()=>{
        res.status(200).json({message:'data saved'})
            }).catch((err)=>{
                res.status(404).json({message:"data not saved", err:err})

            })
        }

    })
}

module.exports={addfoodFavouriteController}