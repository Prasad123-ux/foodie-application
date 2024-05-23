const { FoodOrders } = require("../../Modules/orders")

const getOrderController=(req, res)=>{
    FoodOrders.find({product_email:req.email}).exec()
    .then((user)=>{
        if(user!==null){
            res.status(200).json({success:true ,data:user})
        }else{
            res.status(404).json({success:false, message:"Data not Found"})
        }

    }).catch(()=>{
        res.status(404).json({success:false, message:"Data not found"})
    })
}

module.exports={getOrderController}