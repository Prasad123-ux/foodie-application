
const { ProductData } = require("../Modules/Products")
const { FoodCart } = require("../Modules/cartData")
const { foodItem } = require("../Modules/foodItem")

const addCartControllers=(req, res)=>{
    // console.log(req.body.id)

    ProductData.findOne({_id:req.body.id}).exec()
    .then((item)=>{
        FoodCart.findOne({id:req.body.id}).exec()
        .then((user)=>{
            console.log(user)
            if(user!==null){
                res.status(404).json({success:false, message:"data already found"})
            }else{

        //    console.log(item)
        //    console.log(req.body)
   if(item!==null){
    

const FoodCartObject=new FoodCart({
    email:req.email,
    id:req.body.id,
    size:req.body.size,
    // price:req.body.buyValue,
    qty:req.body.qty,
    CategoryName:item.product_category,
    name:item.product_name,
     img:item.product_images.image1,
      price:item.product_price,
    description:item.product_description,
    deliveryTime:item.product_deliveryTime


    
})

FoodCartObject.save().then(()=>{
    res.status(200).json({message:"cart updated"})

}).catch((err)=>{
    res.status(500).json({message:"problem while data saving"})

})

    }else{
    res.status(404).json({message:"Product not available "})
   }

}

})
})


}


module.exports={addCartControllers}