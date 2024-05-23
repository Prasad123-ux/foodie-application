const { FoodCart } = require("../Modules/cartData")


const deleteCartController= (req, res)=>{
    FoodCart.deleteOne({id:req.body.id}).exec()
    .then((user)=>{
        console.log(user)
        if(user!==null){
            res.status(200).json({Message:"data deleted"})
        }else{
            res.status(500).json({message:"data not deleted"})
        }

    }).catch((err)=>{
        res.status(500).json({message:"data not deleted"})
        
    })
}

module.exports={deleteCartController}