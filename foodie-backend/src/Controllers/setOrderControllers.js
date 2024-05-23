const { ProductData } = require('../Modules/Products')
const {FoodCart}= require('../Modules/cartData')
const { FoodOrders } = require('../Modules/orders')

const setOrderController=(req, res)=>{


    // console.log(req.body)
    console.log(req.email)
  ProductData.findOne({_id:req.body.id}).exec()
  .then((user)=>{
    if(user!==null){
        // console.log(user)
    
        orderObject=new FoodOrders({
            user_email:req.email,
            product_id:req.body.id,
            product_quantity:req.body.quantity,
            product_name:user.product_name,
            product_Category:user.product_category,
            product_img:user.product_images.image1,
            product_price:user.product_price,
            product_email:user.product_email

        })

        orderObject.save().then(()=>{
            res.status(200).json({message:"data saved "})

        }).catch((err)=>{
            res.status(404).json({msg:err})
        })
    }else{
        res.status(500).json({message:'there is some problem '})
    }

  })
    
}
module.exports={setOrderController}