const { ProductData } = require("../Modules/Products")
const { foodCategory } = require("../Modules/foodCategory")
const { foodItem } = require("../Modules/foodItem")



 const displayDataController=(req, res)=>{

//  const foodItemPromise=foodItem.find().exec()
//  const foodCategoryPromise= foodCategory.find().exec()


//  Promise.all([foodItemPromise, foodCategoryPromise])

ProductData.find().exec()
.then((user)=>{
    res.status(200).json({success:true, message:"data passed", data:user})

})
.catch((err)=>{
    res.status(404).json({success:false, message:"data not found", err:err})

})

 
 }
  




module.exports={displayDataController}